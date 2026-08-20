import { useState } from "react";
import PayPalOrderButton from "@/components/PayPalOrderButton.tsx";

/**
 * General Hawkez Haven donation panel.
 * Donors choose whatever amount feels right, then pay through the same
 * server-backed PayPal Orders flow used by the fixed donation options.
 */
export default function PayPalButton({ containerId = "paypal-hosted-btn" }: { containerId?: string }) {
  const [amount, setAmount] = useState("");
  const numericAmount = Number(amount);
  const validAmount = Number.isFinite(numericAmount) && numericAmount >= 1 && numericAmount <= 10000;

  return (
    <div id={containerId} className="w-full text-center">
      <p className="font-serif text-2xl text-[#1a1a18] mb-3">Give what feels right.</p>
      <p className="text-sm text-[#4a4a42] leading-relaxed mb-6">
        Every donation, no matter the amount, is truly helpful. Whether it is $5, $20 or whatever you feel comfortable giving, your support helps us provide feed, farrier care, veterinary treatment and rehabilitation for horses who need a second chance.
      </p>

      <div className="max-w-sm mx-auto">
        <label htmlFor={`${containerId}-amount`} className="block text-left text-xs tracking-widest uppercase text-[#4a4a42]/70 mb-2">
          Donation amount (NZD)
        </label>
        <div className="flex items-center gap-3">
          <span className="text-2xl font-serif text-[#1a1a18]">$</span>
          <input
            id={`${containerId}-amount`}
            type="number"
            min="1"
            max="10000"
            step="0.01"
            inputMode="decimal"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter any amount"
            className="w-full rounded-xl border border-[#ddd4be] bg-[#faf8f3] px-4 py-3 text-[#1a1a18] outline-none focus:border-[#b8922a]"
          />
        </div>

        {validAmount ? (
          <div className="mt-4">
            <PayPalOrderButton amount={Number(numericAmount.toFixed(2))} itemName="General Donation – Give What Feels Right" />
          </div>
        ) : (
          <p className="mt-3 text-xs text-[#4a4a42]/70">Enter the amount you would like to give, then PayPal will take you through secure checkout.</p>
        )}
      </div>
    </div>
  );
}
