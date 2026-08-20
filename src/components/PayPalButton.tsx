import { paypalDonateUrl } from "@/lib/paypal.ts";

type Props = { containerId?: string; hostedButtonId?: string };

/**
 * General Hawkez Haven donation panel.
 * Donors choose whatever amount feels right on PayPal.
 * The direct PayPal donation link is intentionally used here so the
 * donation option remains visible and usable even if the PayPal hosted
 * button SDK is blocked or fails to render in a browser.
 */
export default function PayPalButton({ containerId = "paypal-hosted-btn" }: Props) {
  const donateUrl = paypalDonateUrl();

  return (
    <div id={containerId} className="w-full text-center">
      <p className="font-serif text-2xl text-[#1a1a18] mb-3">Give what feels right.</p>
      <p className="text-sm text-[#4a4a42] leading-relaxed mb-6">
        Every donation, no matter the amount, is truly helpful. Whether it is $5, $20 or whatever you feel comfortable giving, your support helps us provide feed, farrier care, veterinary treatment and rehabilitation for horses who need a second chance.
      </p>
      <a
        href={donateUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-8 py-3 bg-[#b8922a] text-white text-sm font-medium rounded-full hover:bg-[#8c6e1e] transition-colors"
      >
        Donate any amount via PayPal
      </a>
      <p className="mt-3 text-xs text-[#4a4a42]/70">
        PayPal will let you choose the amount you would like to give.
      </p>
    </div>
  );
}
