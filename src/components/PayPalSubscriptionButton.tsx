import { useEffect, useRef, useState } from "react";
import { PAYPAL_SUBSCRIPTION_CLIENT_ID } from "@/lib/paypal.ts";

// Keep the subscription SDK isolated from the general donation hosted-button SDK.
const NAMESPACE = "paypalSubscription";
const SDK_URL = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_SUBSCRIPTION_CLIENT_ID}&components=buttons&vault=true&intent=subscription&currency=NZD`;

declare global {
  interface Window {
    [NAMESPACE]?: {
      Buttons: (opts: PayPalButtonsOptions) => {
        render: (selector: string) => Promise<void>;
        isEligible: () => boolean;
      };
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
let sdkFailed = false;
const pendingCallbacks: (() => void)[] = [];

function loadSubscriptionSdk(cb: () => void, fail: () => void) {
  if (sdkLoaded && window[NAMESPACE]) { cb(); return; }
  if (sdkFailed) { fail(); return; }

  pendingCallbacks.push(cb);

  const existing = document.querySelector(`script[data-hawkez-paypal-subscriptions="true"]`) as HTMLScriptElement | null;
  if (existing) return;

  const script = document.createElement("script");
  script.src = SDK_URL;
  script.setAttribute("data-namespace", NAMESPACE);
  script.setAttribute("data-hawkez-paypal-subscriptions", "true");
  script.onload = () => {
    if (!window[NAMESPACE]) {
      sdkFailed = true;
      pendingCallbacks.length = 0;
      fail();
      return;
    }
    sdkLoaded = true;
    const callbacks = pendingCallbacks.splice(0);
    callbacks.forEach(fn => fn());
  };
  script.onerror = () => {
    sdkFailed = true;
    pendingCallbacks.length = 0;
    fail();
  };
  document.head.appendChild(script);
}

type Props = {
  planId: string;
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

    const fail = () => {
      rendered.current = false;
      setLoading(false);
      onError();
    };

    loadSubscriptionSdk(() => {
      if (rendered.current || !containerRef.current) return;

      const paypal = window[NAMESPACE];
      if (!paypal) { fail(); return; }

      rendered.current = true;

      const btn = paypal.Buttons({
        style: { layout: "vertical", color: "gold", shape: "pill", label: "subscribe" },
        createSubscription: (_data, actions) => actions.subscription.create({ plan_id: planId }),
        onApprove: () => onSuccess(),
        onCancel: () => onCancel(),
        onError: () => fail(),
      });

      if (!btn.isEligible()) {
        fail();
        return;
      }

      btn.render(`#paypal-sub-btn-${planId}`).then(() => {
        setLoading(false);
      }).catch(() => {
        fail();
      });
    }, fail);

    return () => { rendered.current = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [planId]);

  return (
    <div ref={containerRef} aria-label={`PayPal subscription checkout for ${tierName}`}>
      {loading && (
        <div className="flex justify-center py-4">
          <span className="text-sm text-[#4a4a42]">Connecting to PayPal…</span>
        </div>
      )}
      <div id={`paypal-sub-btn-${planId}`} className="min-h-[50px]" />
    </div>
  );
}
