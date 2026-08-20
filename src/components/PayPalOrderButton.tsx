import { paypalDonateUrl } from "@/lib/paypal.ts";

type Props = {
  amount: number;
  itemName: string;
};

/**
 * One-time donation button.
 * Uses the same proven PayPal hosted donation-link approach as the working
 * PayPal setup instead of the browser Orders/Convex flow.
 */
export default function PayPalOrderButton({ amount, itemName }: Props) {
  const safeAmount = Number(amount);
  const href = Number.isFinite(safeAmount) && safeAmount > 0
    ? paypalDonateUrl(Number(safeAmount.toFixed(2)), itemName)
    : paypalDonateUrl(undefined, itemName);

  return (
    <div className="mt-4">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full min-h-[42px] items-center justify-center rounded-full bg-[#ffc439] px-5 py-3 text-sm font-semibold text-[#003087] shadow-sm transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[#003087]/30"
      >
        Donate ${safeAmount.toFixed(2)} with PayPal
      </a>
    </div>
  );
}
