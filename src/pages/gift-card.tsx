import { useMemo, useState } from "react";
import { ArrowRight, Gift, Mail, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { paypalDonateUrl } from "@/lib/paypal.ts";

const PRESET_AMOUNTS = [25, 50, 100, 150, 200];

function makeReference() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let value = "HH-GIFT-";
  for (let i = 0; i < 8; i += 1) value += chars[Math.floor(Math.random() * chars.length)];
  return value;
}

export default function GiftCardPage() {
  const [amount, setAmount] = useState(100);
  const [custom, setCustom] = useState("");
  const [recipient, setRecipient] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");
  const [reference] = useState(makeReference);

  const selectedAmount = custom ? Number(custom) : amount;
  const validAmount = Number.isFinite(selectedAmount) && selectedAmount >= 10;

  const paypalUrl = useMemo(() => {
    if (!validAmount) return "#";
    const label = `Hawkez Haven Gift Card - $${selectedAmount.toFixed(2)} NZD - ${recipient || "Gift"}`;
    return paypalDonateUrl(Number(selectedAmount.toFixed(2)), label);
  }, [recipient, selectedAmount, validAmount]);

  const mailSubject = encodeURIComponent(`Gift Card Purchase - ${reference}`);
  const mailBody = encodeURIComponent(
    `Hawkez Haven Gift Card\n\nGift Card Reference: ${reference}\nAmount: $${validAmount ? selectedAmount.toFixed(2) : ""} NZD\nTo: ${recipient}\nRecipient email: ${recipientEmail}\nFrom: ${from}\nMessage: ${message}\n\nI have completed payment via PayPal.`
  );
  const confirmationEmail = `mailto:hawkez66@gmail.com?subject=${mailSubject}&body=${mailBody}`;

  return (
    <main className="bg-[#f5f0e8] text-[#1a1a18]">
      <section className="relative overflow-hidden bg-[#1a1a18] text-[#f5f0e8] py-20 md:py-28">
        <div className="absolute inset-0 opacity-[0.055] pointer-events-none flex items-center justify-center">
          <img src="/images/hawkez-haven-horizontal.png" alt="" className="w-[760px] max-w-[88vw]" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-[#b8922a] text-[0.65rem] tracking-[0.2em] uppercase font-medium">
            <Gift size={14} /> Give a Second Chance
          </div>
          <h1 className="mt-5 font-serif text-5xl md:text-7xl leading-tight">Hawkez Haven Gift Card</h1>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-[#f5f0e8]/75 leading-relaxed">
            Give someone a gift with purpose — a little more connection, a little more compassion, and a second chance for a horse.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-start">
          <div>
            <div className="relative overflow-hidden rounded-3xl border border-[#b8922a]/30 bg-[#fbf8f1] shadow-xl aspect-[1.7/1] p-8 md:p-12 flex flex-col justify-between">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.055]">
                <img src="/images/hawkez-haven-horizontal.png" alt="" className="w-[72%]" />
              </div>
              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.65rem] tracking-[0.25em] uppercase text-[#8c6e1e]">Hawkez Haven</p>
                  <p className="mt-1 text-xs tracking-[0.18em] uppercase text-[#4a4a42]">Second Chances</p>
                </div>
                <Sparkles className="text-[#b8922a]" size={22} />
              </div>
              <div className="relative text-center py-4">
                <p className="font-serif text-4xl md:text-5xl text-[#1a1a18]">Gift Card</p>
                <p className="mt-3 italic text-[#4a4a42]">Give a gift that gives back.</p>
                <p className="mt-6 font-serif text-4xl text-[#b8922a]">${validAmount ? selectedAmount.toFixed(0) : "—"} NZD</p>
              </div>
              <div className="relative flex justify-between text-[0.62rem] tracking-[0.12em] uppercase text-[#4a4a42]">
                <span>Connection Before Correction</span>
                <span>hawkezhaven.org</span>
              </div>
            </div>
            <p className="mt-4 text-xs text-[#4a4a42]/70 text-center">Digital gift card • Delivered after payment confirmation</p>
          </div>

          <div className="bg-white rounded-3xl border border-[#ddd4be] shadow-sm p-6 md:p-8">
            <div className="flex items-center gap-3 mb-7">
              <span className="block h-px w-8 bg-[#b8922a]" />
              <p className="text-[0.65rem] tracking-[0.18em] uppercase text-[#b8922a] font-medium">Create your gift</p>
            </div>

            <label className="block text-sm font-medium mb-3">Choose an amount</label>
            <div className="grid grid-cols-3 gap-2 mb-3">
              {PRESET_AMOUNTS.map(value => (
                <button
                  key={value}
                  type="button"
                  onClick={() => { setAmount(value); setCustom(""); }}
                  className={`rounded-xl px-3 py-3 text-sm font-semibold border transition ${!custom && amount === value ? "bg-[#b8922a] text-white border-[#b8922a]" : "border-[#ddd4be] hover:border-[#b8922a]"}`}
                >
                  ${value}
                </button>
              ))}
            </div>
            <input
              value={custom}
              onChange={e => setCustom(e.target.value.replace(/[^0-9.]/g, ""))}
              inputMode="decimal"
              placeholder="Custom amount (minimum $10)"
              className="w-full rounded-xl border border-[#ddd4be] px-4 py-3 text-sm outline-none focus:border-[#b8922a]"
            />

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <label className="text-sm">Gifted to<input value={recipient} onChange={e => setRecipient(e.target.value)} placeholder="Recipient name" className="mt-1.5 w-full rounded-xl border border-[#ddd4be] px-4 py-3 outline-none focus:border-[#b8922a]" /></label>
              <label className="text-sm">Recipient email<input value={recipientEmail} onChange={e => setRecipientEmail(e.target.value)} type="email" placeholder="name@email.com" className="mt-1.5 w-full rounded-xl border border-[#ddd4be] px-4 py-3 outline-none focus:border-[#b8922a]" /></label>
              <label className="text-sm">From<input value={from} onChange={e => setFrom(e.target.value)} placeholder="Your name" className="mt-1.5 w-full rounded-xl border border-[#ddd4be] px-4 py-3 outline-none focus:border-[#b8922a]" /></label>
              <label className="text-sm">Gift message<input value={message} onChange={e => setMessage(e.target.value)} placeholder="A little message" className="mt-1.5 w-full rounded-xl border border-[#ddd4be] px-4 py-3 outline-none focus:border-[#b8922a]" /></label>
            </div>

            <div className="mt-6 rounded-2xl bg-[#f5f0e8] p-4 text-sm text-[#4a4a42]">
              <strong className="text-[#1a1a18]">Gift card reference:</strong> {reference}
              <p className="mt-1 text-xs">Keep this reference with your payment confirmation.</p>
            </div>

            <a
              href={paypalUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={!validAmount}
              className={`mt-6 flex items-center justify-center gap-2 w-full rounded-full px-6 py-4 font-semibold transition ${validAmount ? "bg-[#ffc439] text-[#003087] hover:brightness-95" : "bg-[#ddd4be] text-[#4a4a42] pointer-events-none"}`}
            >
              Pay ${validAmount ? selectedAmount.toFixed(2) : "—"} NZD with PayPal <ArrowRight size={17} />
            </a>

            <a
              href={confirmationEmail}
              className="mt-3 flex items-center justify-center gap-2 w-full rounded-full border border-[#1a1a18] px-6 py-3 text-sm font-medium hover:bg-[#1a1a18] hover:text-white transition"
            >
              <Mail size={16} /> Send payment details to Hawkez Haven
            </a>

            <p className="mt-4 text-xs leading-relaxed text-[#4a4a42]/70">
              After paying with PayPal, use the button above to send your gift details and payment reference to Hawkez Haven. We will confirm the payment and send the finished digital gift card to the recipient email supplied.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#ede5d4] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl text-[#1a1a18]">A gift with a purpose.</h2>
          <p className="mt-4 text-[#4a4a42] leading-relaxed">
            Gift cards support eligible Hawkez Haven experiences, sponsorship, education and selected products or services. They are not exchangeable for cash.
          </p>
          <Link to="/support" className="inline-flex items-center gap-2 mt-7 text-sm font-medium text-[#8c6e1e] hover:text-[#1a1a18]">
            See ways to support the horses <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
