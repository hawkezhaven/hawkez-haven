import { useEffect, useRef, useState } from "react";
import { useAction } from "convex/react";
import { api } from "@/convex/_generated/api.js";
import { PAYPAL_CLIENT_ID } from "@/lib/paypal.ts";

const NAMESPACE = "paypalOrder";
const SDK_URL = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&components=buttons&intent=capture&commit=true&currency=NZD&disable-funding=venmo`;

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
let sdkLoading = false;
const pendingCallbacks: (() => void)[] = [];

function loadOrderSdk(cb: () => void) {
  if (sdkLoaded && window[NAMESPACE]?.Buttons) {
    cb();
    return;
  }

  pendingCallbacks.push(cb);
  if (sdkLoading || document.querySelector(`script[data-namespace="${NAMESPACE}"]`)) return;

  sdkLoading = true;
  const script = document.createElement("script");
  script.src = SDK_URL;
  script.setAttribute("data-namespace", NAMESPACE);
  script.onload = () => {
    sdkLoaded = true;
    sdkLoading = false;
    pendingCallbacks.splice(0).forEach(fn => fn());
  };
  script.onerror = () => {
    sdkLoading = false;
    pendingCallbacks.splice(0).forEach(fn => fn());
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
  const renderVersion = useRef(0);
  const [loading, setLoading] = useState(true);
  const [confirmed, setConfirmed] = useState(false);
  const [failed, setFailed] = useState(false);

  const createOrderAction = useAction(api.paypal.createOrder);
  const captureOrderAction = useAction(api.paypal.captureOrder);
  const containerId = `paypal-order-btn-${itemName.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase()}`;

  useEffect(() => {
    const version = ++renderVersion.current;
    const container = containerRef.current;

    setLoading(true);
    setConfirmed(false);
    setFailed(false);
    if (container) container.innerHTML = "";

    loadOrderSdk(() => {
      if (version !== renderVersion.current || !containerRef.current) return;

      const paypal = window[NAMESPACE];
      if (!paypal) {
        setLoading(false);
        setFailed(true);
        onError?.();
        return;
      }

      const btn = paypal.Buttons({
        style: { layout: "vertical", color: "gold", shape: "pill", label: "pay" },
        createOrder: () => createOrderAction({ amountNzd: Number(amount).toFixed(2), itemName }),
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
        onCancel: () => onCancel?.(),
        onError: () => {
          setFailed(true);
          onError?.();
        },
      });

      if (!btn.isEligible()) {
        setLoading(false);
        setFailed(true);
        onError?.();
        return;
      }

      btn.render(`#${containerId}`).then(() => {
        if (version === renderVersion.current) setLoading(false);
      }).catch(() => {
        if (version !== renderVersion.current) return;
        setLoading(false);
        setFailed(true);
        onError?.();
      });
    });

    return () => {
      renderVersion.current++;
      if (container) container.innerHTML = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount, itemName]);

  if (confirmed) return <div className="mt-4 rounded-full bg-[#b8922a]/10 px-4 py-2 text-center text-xs text-[#b8922a] font-medium">Payment confirmed — thank you!</div>;
  if (failed) return <div className="mt-4 rounded-full bg-[#4a4a42]/10 px-4 py-2 text-center text-xs text-[#4a4a42]">Payment could not be completed. Please try again.</div>;

  return (
    <div>
      {loading && <div className="flex justify-center py-2"><span className="text-xs text-[#4a4a42]">Loading…</span></div>}
      <div ref={containerRef} id={containerId} className="min-h-[42px]" />
    </div>
  );
}
