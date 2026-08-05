import { useEffect, useRef, useState } from "react";
import { PAYPAL_SUBSCRIPTION_CLIENT_ID } from "@/lib/paypal.ts";

// PayPal subscription SDK uses a separate namespace to avoid conflicts with the
// hosted-button SDK already loaded on the same page.
const NAMESPACE = "paypalSubscription";
const SDK_URL = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_SUBSCRIPTION_CLIENT_ID}&vault=true&intent=subscription&disable-funding=venmo&currency=NZD`;

declare global {
  interface Window {
    [NAMESPACE]?: {
      Buttons: (opts: PayPalButtonsOptions) => { render: (selector: string) => Promise<void>; isEligible: () => boolean };
    };
  }
}

type PayPalButtonsOptions = {
  style?: Record<string, unknown>;
  createSubscription: (data: unknown, actions: CreateSubscriptionActions) => Promise<string>;
  onApprove: (data: { subscriptionID: string }) => void;
  onCancel?: () => void;
  onError?: (err: unknown) => void;
};

type CreateSubscriptionActions = {
  subscription: {
    create: (opts: { plan_id: string }) => Promise<string>;
  };
};

let sdkLoaded = false;
const pendingCallbacks: (() => void)[] = [];

function loadSubscriptionSdk(cb: () => void) {
  if (sdkLoaded) { cb(); return; }
  pendingCallbacks.push(cb);
  if (document.querySelector(`script[src*="${PAYPAL_SUBSCRIPTION_CLIENT_ID}"]`)) return;
  const script = document.createElement("script");
  script.src = SDK_URL;
  script.setAttribute("data-namespace", NAMESPACE);
  script.onload = () => {
    sdkLoaded = true;
    pendingCallbacks.forEach(fn => fn());
    pendingCallbacks.length = 0;
  };
  document.head.appendChild(script);
}

type Props = {
  planId: string;
  /** Display label used inside this component only for accessibility — never sent to PayPal */
  tierName: string;
  onSuccess: () => void;
  onCancel: () => void;
  onError: () => void;
};

export default function PayPalSubscriptionButton({ planId, tierName, onSuccess, onCancel, onError }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendered = useRef(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    rendered.current = false;
    setLoading(true);

    loadSubscriptionSdk(() => {
      if (rendered.current || !containerRef.current) return;
      rendered.current = true;
      setLoading(false);

      const paypal = window[NAMESPACE];
      if (!paypal) { onError(); return; }

      const btn = paypal.Buttons({
        style: { layout: "vertical", color: "gold", shape: "pill", label: "subscribe" },
        createSubscription: (_data, actions) => {
          // NOTE: The PayPal Subscriptions API does not support custom_id or
          // notes via the JS SDK createSubscription call. Horse selection is
          // preserved within the website flow only (see below). To permanently
          // associate a horse with this subscription on the Hawkez Haven side,
          // a webhook (PayPal BILLING.SUBSCRIPTION.ACTIVATED) would need to be
          // set up on your server, receiving the subscriptionID and matching it
          // to the horse/tier selection recorded at checkout time.
          return actions.subscription.create({ plan_id: planId });
        },
        onApprove: () => { onSuccess(); },
        onCancel:  () => { onCancel(); },
        onError:   () => { onError(); },
      });

      if (btn.isEligible()) {
        btn.render(`#paypal-sub-btn-${planId}`).catch(() => { onError(); });
      } else {
        onError();
      }
    });

    return () => { rendered.current = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [planId]);

  return (
    <div ref={containerRef} aria-label={`PayPal subscription checkout for ${tierName}`}>
      {loading && (
        <div className="flex justify-center py-4">
          <span className="text-sm text-[#4a4a42]">Loading payment options…</span>
        </div>
      )}
      <div id={`paypal-sub-btn-${planId}`} className="min-h-[50px]" />
    </div>
  );
}
