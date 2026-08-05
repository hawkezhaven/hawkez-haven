import { useEffect, useRef } from "react";
import { PAYPAL_SDK_URL, PAYPAL_HOSTED_BUTTON_ID } from "@/lib/paypal.ts";

// Declare paypal on window for TypeScript
declare global {
  interface Window {
    paypal?: {
      HostedButtons: (opts: { hostedButtonId: string }) => { render: (selector: string) => void };
    };
  }
}

let sdkLoaded = false;
const callbacks: (() => void)[] = [];

function loadSdk(cb: () => void) {
  if (sdkLoaded && window.paypal) { cb(); return; }
  callbacks.push(cb);
  if (document.querySelector(`script[src*="paypal.com/sdk"]`)) return;
  const script = document.createElement("script");
  script.src = PAYPAL_SDK_URL;
  script.onload = () => {
    sdkLoaded = true;
    callbacks.forEach(fn => fn());
    callbacks.length = 0;
  };
  document.head.appendChild(script);
}

type Props = { containerId?: string; hostedButtonId?: string };

export default function PayPalButton({ containerId = "paypal-hosted-btn", hostedButtonId = PAYPAL_HOSTED_BUTTON_ID }: Props) {
  const rendered = useRef(false);
  const id = `${containerId}-${hostedButtonId}`;

  useEffect(() => {
    if (rendered.current) return;
    loadSdk(() => {
      if (rendered.current) return;
      rendered.current = true;
      window.paypal?.HostedButtons({ hostedButtonId }).render(`#${id}`);
    });
  }, [id]);

  return <div id={id} className="min-h-[50px]" />;
}
