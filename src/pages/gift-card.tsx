import { useMemo, useState } from "react";
import { ArrowRight, Gift, Mail, Heart, GraduationCap, HandHeart, ShieldCheck } from "lucide-react";
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
      <section className="relative overflow-hidden bg-[#12352a] text-[#f5f0e8] py-16 md:py-20">
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none flex items-center justify-center">
          <img src="/images/hawkez-haven-horizontal.png" alt="" className="w-[900px] max-w-[95vw]" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-[#d6a34a] text-[0.65rem] tracking-[0.25em] uppercase font-medium">
            <Gift size={14} /> Give a Second Chance
          </div>
          <h1 className="mt-4 font-serif text-5xl md:text-7xl leading-tight">Gift a Second Chance</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-[#f5f0e8]/80 leading-relaxed">
            A beautiful gift with purpose — supporting care, rehabilitation, education and second chances for horses.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid lg:grid-cols-[1.12fr_0.88fr] gap-10 items-start">
          <div>
            <div className="relative overflow-hidden rounded-[24px] border-2 border-[#b77b28] bg-[#f8f1e4] shadow-[0_18px_50px_rgba(35,28,18,0.18)] aspect-[1.52/1]">
              <div className="absolute inset-0 pointer-events-none opacity-[0.065] flex items-center justify-center">
                <img src="/images/hawkez-haven-horizontal.png" alt="" className="w-[82%]" />
              </div>
              <div className="absolute inset-x-0 top-0 h-2 bg-[#12352a]" />
              <div className="relative h-full flex flex-col justify-between p-6 sm:p-8 md:p-10">
                <div className="text-center">
                  <p className="font-serif text-xl sm:text-2xl md:text-3xl tracking-[0.18em] text-[#12352a]">HAWKEZ HAVEN</p>
                  <div className="mt-1 flex items-center justify-center gap-3 text-[#9a6720] text-[0.58rem] sm:text-xs tracking-[0.32em] uppercase">
                    <span className="h-px w-8 bg-[#b77b28]" /> SECOND CHANCES <span className="h-px w-8 bg-[#b77b28]" />
                  </div>
                  <Heart className="mx-auto mt-2 text-[#b77b28]" size={20} fill="currentColor" />
                </div>

                <div className="text-center">
                  <p className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-[0.12em] text-[#12352a]">GIFT CARD</p>
                  <p className="mt-2 font-serif italic text-base sm:text-lg md:text-xl text-[#9a6720]">Give a gift that gives back.</p>
                  <div className="mx-auto mt-5 w-[58%] min-w-[210px] max-w-[390px] rounded-md bg-[#12352a] px-5 py-3 text-[#f8f1e4] shadow-md">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#d6a34a]">$ {validAmount ? selectedAmount.toFixed(0) : "—"}</span>
                    <span className="ml-2 text-xs sm:text-sm tracking-[0.2em] text-[#d6a34a]">NZD</span>
                  </div>
                </div>

                <div className="-mx-6 sm:-mx-8 md:-mx-10 -mb-6 sm:-mb-8 md:-mb-10 bg-[#12352a] px-5 sm:px-8 py-3 text-[#f8f1e4] flex flex-wrap justify-center gap-x-4 gap-y-1 text-[0.52rem] sm:text-[0.62rem] tracking-[0.12em] uppercase">
                  <span>♡ Horse Experiences</span><span>♡ Sponsorships</span><span>♡ Rehabilitation</span><span>♡ Education</span><span>♡ Products + Support</span>
                </div>
              </div>
            </div>

            <div className="mt-5 relative overflow-hidden rounded-[24px] border-2 border-[#b77b28] bg-[#f8f1e4] shadow-[0_18px_50px_rgba(35,28,18,0.12)] aspect-[1.52/1]">
              <div className="absolute inset-0 pointer-events-none opacity-[0.055] flex items-center justify-end pr-4 sm:pr-10">
                <img src="/images/hawkez-haven-horizontal.png" alt="" className="w-[58%]" />
              </div>
              <div className="relative h-full grid md:grid-cols-[0.9fr_1.1fr]">
                <div className="bg-[#12352a] text-[#f8f1e4] p-6 sm:p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-[#d6a34a] text-xs tracking-[0.22em] uppercase"><span className="h-px w-8 bg-[#d6a34a]" /><Heart size={17} /></div>
                    <h3 className="mt-5 font-serif text-2xl sm:text-3xl text-[#d6a34a]">A Gift With Purpose</h3>
                    <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#f8f1e4]/90">Your gift helps support the horses of Hawkez Haven through care, rehabilitation, education and second chances.</p>
                    <p className="mt-5 font-serif italic text-[#d6a34a]">Thank you for making a difference.</p>
                  </div>
                  <div className="grid grid-cols-4 gap-2 mt-5 text-center text-[0.48rem] sm:text-[0.58rem] tracking-[0.1em] uppercase">
                    <div><ShieldCheck className="mx-auto mb-1 text-[#d6a34a]" size={20} /><span>Care</span></div>
                    <div><Heart className="mx-auto mb-1 text-[#d6a34a]" size={20} /><span>Rehabilitation</span></div>
                    <div><GraduationCap className="mx-auto mb-1 text-[#d6a34a]" size={20} /><span>Education</span></div>
                    <div><HandHeart className="mx-auto mb-1 text-[#d6a34a]" size={20} /><span>Second Chances</span></div>
                  </div>
                </div>
                <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-between text-[#12352a]">
                  <div className="space-y-3 text-sm sm:text-base">
                    <p><span className="font-semibold">GIFTED TO:</span> <span className="inline-block border-b border-[#7b776d] w-[55%] ml-2 align-middle" /></p>
                    <p><span className="font-semibold">FROM:</span> <span className="inline-block border-b border-[#7b776d] w-[65%] ml-2 align-middle" /></p>
                    <p><span className="font-semibold">GIFT CARD NO.:</span> <span className="inline-block border-b border-[#7b776d] w-[47%] ml-2 align-middle" /></p>
                    <p><span className="font-semibold">ISSUED:</span> <span className="inline-block border-b border-[#7b776d] w-[55%] ml-2 align-middle" /></p>
                    <p className="text-[#9a6720]"><span className="font-semibold">EXPIRES:</span> 3 YEARS FROM DATE OF ISSUE</p>
                  </div>
                  <div className="mt-5 rounded-xl border border-[#b77b28] px-4 py-4 text-center bg-white/30">
                    <p className="font-serif italic text-lg text-[#9a6720]">Redeem at</p>
                    <p className="mt-1 font-serif text-xl sm:text-2xl tracking-[0.08em]">HAWKEZHAVEN.ORG</p>
                    <p className="mt-1 text-[0.55rem] sm:text-xs tracking-[0.14em] uppercase">Experiences • Sponsorships • Education • Support • Products &amp; More</p>
                    <p className="mt-2 font-serif italic text-sm">Connection Before Correction</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-xs text-[#4a4a42]/70 text-center">This is the live website preview of the approved gift-card design. The finished digital card will be personalised after payment confirmation.</p>
          </div>

          <div className="bg-white rounded-3xl border border-[#ddd4be] shadow-sm p-6 md:p-8 lg:sticky lg:top-24">
            <div className="flex items-center gap-3 mb-7"><span className="block h-px w-8 bg-[#b8922a]" /><p className="text-[0.65rem] tracking-[0.18em] uppercase text-[#b8922a] font-medium">Create your gift</p></div>
            <label className="block text-sm font-medium mb-3">Choose an amount</label>
            <div className="grid grid-cols-3 gap-2 mb-3">
              {PRESET_AMOUNTS.map(value => <button key={value} type="button" onClick={() => { setAmount(value); setCustom(""); }} className={`rounded-xl px-3 py-3 text-sm font-semibold border transition ${!custom && amount === value ? "bg-[#12352a] text-[#f8f1e4] border-[#12352a]" : "border-[#ddd4be] hover:border-[#b8922a]"}`}>${value}</button>)}
            </div>
            <input value={custom} onChange={e => setCustom(e.target.value.replace(/[^0-9.]/g, ""))} inputMode="decimal" placeholder="Custom amount (minimum $10)" className="w-full rounded-xl border border-[#ddd4be] px-4 py-3 text-sm outline-none focus:border-[#b8922a]" />
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <label className="text-sm">Gifted to<input value={recipient} onChange={e => setRecipient(e.target.value)} placeholder="Recipient name" className="mt-1.5 w-full rounded-xl border border-[#ddd4be] px-4 py-3 outline-none focus:border-[#b8922a]" /></label>
              <label className="text-sm">Recipient email<input value={recipientEmail} onChange={e => setRecipientEmail(e.target.value)} type="email" placeholder="name@email.com" className="mt-1.5 w-full rounded-xl border border-[#ddd4be] px-4 py-3 outline-none focus:border-[#b8922a]" /></label>
              <label className="text-sm">From<input value={from} onChange={e => setFrom(e.target.value)} placeholder="Your name" className="mt-1.5 w-full rounded-xl border border-[#ddd4be] px-4 py-3 outline-none focus:border-[#b8922a]" /></label>
              <label className="text-sm">Gift message<input value={message} onChange={e => setMessage(e.target.value)} placeholder="A little message" className="mt-1.5 w-full rounded-xl border border-[#ddd4be] px-4 py-3 outline-none focus:border-[#b8922a]" /></label>
            </div>
            <div className="mt-6 rounded-2xl bg-[#f5f0e8] p-4 text-sm text-[#4a4a42]"><strong className="text-[#1a1a18]">Gift card reference:</strong> {reference}<p className="mt-1 text-xs">Keep this reference with your payment confirmation.</p></div>
            <a href={paypalUrl} target="_blank" rel="noopener noreferrer" aria-disabled={!validAmount} className={`mt-6 flex items-center justify-center gap-2 w-full rounded-full px-6 py-4 font-semibold transition ${validAmount ? "bg-[#ffc439] text-[#003087] hover:brightness-95" : "bg-[#ddd4be] text-[#4a4a42] pointer-events-none"}`}>Pay ${validAmount ? selectedAmount.toFixed(2) : "—"} NZD with PayPal <ArrowRight size={17} /></a>
            <a href={confirmationEmail} className="mt-3 flex items-center justify-center gap-2 w-full rounded-full border border-[#1a1a18] px-6 py-3 text-sm font-medium hover:bg-[#1a1a18] hover:text-white transition"><Mail size={16} /> Send payment details to Hawkez Haven</a>
            <p className="mt-4 text-xs leading-relaxed text-[#4a4a42]/70">After paying with PayPal, use the button above to send your gift details and payment reference to Hawkez Haven. We will confirm the payment and send the finished digital gift card to the recipient email supplied.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#ede5d4] py-14"><div className="max-w-3xl mx-auto px-4 text-center"><h2 className="font-serif text-3xl text-[#1a1a18]">A gift with a purpose.</h2><p className="mt-4 text-[#4a4a42] leading-relaxed">Gift cards support eligible Hawkez Haven experiences, sponsorship, education and selected products or services. They are not exchangeable for cash.</p><Link to="/support" className="inline-flex items-center gap-2 mt-7 text-sm font-medium text-[#8c6e1e] hover:text-[#1a1a18]">See ways to support the horses <ArrowRight size={16} /></Link></div></section>
    </main>
  );
}
