import { useEffect, useRef, useState } from "react";
import { useAction } from "convex/react";
import { api } from "@/convex/_generated/api.js";

// Activation_App Live client ID — used only to load the JS SDK UI.
// All API calls (create/capture) go through the Convex server actions.
const CLIENT_ID = "AfKaKhtMrDF33E63Jdc2Ow1QjwQG2lGQCjx95OF5ccHYIqhNveA0g5PFWvtVuYBAG68VEl7EtXHtctvC";
const NAMESPACE = "paypalOrder";
const SDK_URL = `https://www.paypal.com/sdk/js?client-id=${CLIENT_ID}&intent=capture&disable-funding=venmo&currency=NZD`;

declare global {
  interface Window {
    [NAMESPACE]?: {
      Buttons: (opts: OrderButtonOptions) => {
        render: (selector: string) => Promise<void>;
        isEligible: () => boolean;
      };
    };
  }
}

type OrderButtonOptions = {
  style?: Record<string, unknown>;
  createOrder: () => Promise<string>;
  onApprove: (data: { orderID: string }) => Promise<void>;
  onCancel?: () => void;
  onError?: (err: unknown) => void;
};

let sdkLoaded = false;
const pendingCallbacks: (() => void)[] = [];

function loadOrderSdk(cb: () => void) {
  if (sdkLoaded) { cb(); return; }
  pendingCallbacks.push(cb);
  if (document.querySelector(`script[data-namespace="${NAMESPACE}"]`)) return;
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
  amount: number;
  itemName: string;
  onSuccess?: () => void;
  onCancel?: () => void;
  onError?: () => void;
};

export default function PayPalOrderButton({ amount, itemName, onSuccess, onCancel, onError }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendered = useRef(false);
  const [loading, setLoading] = useState(true);
  const [confirmed, setConfirmed] = useState(false);
  const [failed, setFailed] = useState(false);

  const createOrderAction = useAction(api.paypal.createOrder);
  const captureOrderAction = useAction(api.paypal.captureOrder);

  // Sanitise item name for use as a DOM id
  const containerId = `paypal-order-btn-${itemName.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase()}`;

  useEffect(() => {
    rendered.current = false;
    setLoading(true);
    setConfirmed(false);
    setFailed(false);

    loadOrderSdk(() => {
      if (rendered.current || !containerRef.current) return;
      rendered.current = true;
      setLoading(false);

      const paypal = window[NAMESPACE];
      if (!paypal) { setFailed(true); onError?.(); return; }

      const btn = paypal.Buttons({
        style: { layout: "vertical", color: "gold", shape: "pill", label: "pay" },

        // Order is created server-side via Convex action
        createOrder: () =>
          createOrderAction({
            amountNzd: String(amount),
            itemName,
          }),

        // Capture is confirmed server-side; success state only set on confirmed capture
        onApprove: async (data) => {
          try {
            const result = await captureOrderAction({ orderId: data.orderID });
            if (result.status === "COMPLETED") {
              setConfirmed(true);
              onSuccess?.();
            } else {
              setFailed(true);
              onError?.();
            }
          } catch {
            setFailed(true);
            onError?.();
          }
        },

        onCancel: () => { onCancel?.(); },
        onError:  () => { setFailed(true); onError?.(); },
      });

      if (btn.isEligible()) {
        btn.render(`#${containerId}`).catch(() => { setFailed(true); onError?.(); });
      } else {
        setFailed(true);
        onError?.();
      }
    });

    return () => { rendered.current = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount, itemName]);

  if (confirmed) {
    return (
      <div className="mt-4 rounded-full bg-[#b8922a]/10 px-4 py-2 text-center text-xs text-[#b8922a] font-medium">
        Payment confirmed — thank you!
      </div>
    );
  }

  if (failed) {
    return (
      <div className="mt-4 rounded-full bg-[#4a4a42]/10 px-4 py-2 text-center text-xs text-[#4a4a42]">
        Payment could not be completed. Please try again.
      </div>
    );
  }

  return (
    <div ref={containerRef}>
      {loading && (
        <div className="flex justify-center py-2">
          <span className="text-xs text-[#4a4a42]">Loading…</span>
        </div>
      )}
      <div id={containerId} className="min-h-[42px]" />
    </div>
  );
}
