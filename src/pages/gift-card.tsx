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
    return paypalDonateUrl(Number(selectedAmount.toFixed(2)), `Hawkez Haven Gift Card - $${selectedAmount.toFixed(2)} NZD - ${recipient || "Gift"}`);
  }, [recipient, selectedAmount, validAmount]);
  const confirmationEmail = `mailto:hawkez66@gmail.com?subject=${encodeURIComponent(`Gift Card Purchase - ${reference}`)}&body=${encodeURIComponent(`Hawkez Haven Gift Card\n\nGift Card Reference: ${reference}\nAmount: $${validAmount ? selectedAmount.toFixed(2) : ""} NZD\nTo: ${recipient}\nRecipient email: ${recipientEmail}\nFrom: ${from}\nMessage: ${message}\n\nI have completed payment via PayPal.`)}`;

  return (
    <main className="bg-[#f4eee3] text-[#17261d]">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid lg:grid-cols-[minmax(0,1.45fr)_390px] gap-8 xl:gap-10 items-start">
          <div>
            <div className="mb-6 text-center"><p className="text-[10px] tracking-[.28em] uppercase text-[#9a6720] font-semibold">Give a Second Chance</p><h1 className="mt-2 font-serif text-4xl sm:text-5xl md:text-6xl tracking-[.06em] uppercase">Gift Card</h1><p className="mt-2 font-serif italic text-lg text-[#9a6720]">Give a gift that gives back.</p></div>
            <div className="space-y-5">
              <article className="relative overflow-hidden aspect-[1.52/1] rounded-[22px] border-2 border-[#b77b28] bg-[#f8f0df] shadow-[0_16px_45px_rgba(35,28,18,.16)]">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none"><img src="/images/hawkez-haven-horizontal.png" alt="" className="w-[86%] opacity-[.075]" /></div>
                <div className="relative h-full flex flex-col">
                  <div className="text-center pt-[4.5%] px-5"><div className="font-serif text-[clamp(18px,2.5vw,35px)] tracking-[.18em] font-semibold">HAWKEZ HAVEN</div><div className="mt-1 flex items-center justify-center gap-3 text-[clamp(7px,.75vw,11px)] tracking-[.35em] text-[#9a6720]"><span className="h-px w-9 bg-[#b77b28]"/>SECOND CHANCES<span className="h-px w-9 bg-[#b77b28]"/></div><Heart className="mx-auto mt-1.5 text-[#b77b28]" size={18} fill="currentColor"/></div>
                  <div className="flex-1 flex flex-col items-center justify-center -mt-1"><h2 className="font-serif text-[clamp(38px,5.8vw,76px)] tracking-[.12em] leading-none">GIFT CARD</h2><p className="mt-3 font-serif italic text-[clamp(15px,1.8vw,24px)] text-[#9a6720]">Give a gift that gives back.</p><div className="relative mt-4 w-[54%] max-w-[380px] min-w-[170px]"><div className="absolute inset-[-7px_-14px] bg-[#0d2b20] opacity-[.95] rounded-[5px] -skew-x-2"/><div className="relative rounded-md bg-[#0d2b20] border border-[#d6a34a] px-5 py-2.5 text-center"><span className="font-serif text-[clamp(24px,3vw,40px)] text-[#d6a34a]">$ {validAmount ? selectedAmount.toFixed(0) : "—"}</span><span className="ml-2 text-[clamp(9px,1vw,13px)] tracking-[.22em] text-[#d6a34a]">NZD</span></div></div></div>
                  <div className="bg-[#0d2b20] text-[#f8f0df] flex flex-wrap justify-center gap-x-4 gap-y-1 px-3 py-3 text-[clamp(6px,.65vw,10px)] tracking-[.08em] uppercase"><span>♡ Horse Experiences</span><span>♡ Sponsorships</span><span>♡ Rehabilitation</span><span>♡ Education</span><span>♡ Products + Support</span></div>
                </div>
              </article>

              <article className="relative overflow-hidden aspect-[1.52/1] rounded-[22px] border-2 border-[#b77b28] bg-[#f8f0df] shadow-[0_16px_45px_rgba(35,28,18,.12)]">
                <div className="absolute inset-0 pointer-events-none flex justify-end items-center pr-3 sm:pr-8"><img src="/images/hawkez-haven-horizontal.png" alt="" className="w-[55%] opacity-[.055]" /></div>
                <div className="relative h-full grid grid-cols-[42%_58%]">
                  <div className="bg-[#0d2b20] text-[#f8f0df] p-[7%] flex flex-col justify-between"><div><div className="text-[#d6a34a] text-xl">♡</div><h3 className="mt-2 font-serif text-[clamp(22px,2.7vw,38px)] leading-tight text-[#d6a34a]">A Gift With<br/>Purpose</h3><p className="mt-3 text-[clamp(9px,1vw,13px)] leading-[1.55]">Your gift helps support the horses of Hawkez Haven through care, rehabilitation, education and second chances.</p><p className="mt-3 font-serif italic text-[clamp(11px,1.2vw,16px)] text-[#d6a34a]">Thank you for making a difference.</p></div><div className="grid grid-cols-4 gap-1 text-center text-[#d6a34a]">{[[ShieldCheck,"CARE"],[Heart,"REHABILITATION"],[GraduationCap,"EDUCATION"],[HandHeart,"SECOND CHANCES"]].map(([Icon,label])=><div key={String(label)}><Icon className="mx-auto mb-1" size={17}/><span className="text-[6px] tracking-[.05em] text-[#f8f0df]">{String(label)}</span></div>)}</div></div>
                  <div className="p-[7%] flex flex-col justify-between font-serif text-[#17261d]"><div className="space-y-2 text-[clamp(8px,1vw,13px)]"><p><b>GIFTED TO:</b><span className="inline-block align-middle border-b border-[#77736a] w-[50%] ml-2"/></p><p><b>FROM:</b><span className="inline-block align-middle border-b border-[#77736a] w-[60%] ml-2"/></p><p><b>GIFT CARD NO.:</b><span className="inline-block align-middle border-b border-[#77736a] w-[40%] ml-2"/></p><p><b>ISSUED:</b><span className="inline-block align-middle border-b border-[#77736a] w-[50%] ml-2"/></p><p className="text-[#9a6720]"><b>EXPIRES:</b> 3 YEARS FROM DATE OF ISSUE</p></div><div className="border border-[#b77b28] rounded-xl text-center px-3 py-[6%]"><p className="italic text-[#9a6720] text-sm">Redeem at</p><p className="mt-1 text-[clamp(14px,1.8vw,24px)] tracking-[.07em]">HAWKEZHAVEN.ORG</p><p className="mt-1 text-[6px] sm:text-[8px] tracking-[.1em] uppercase">Experiences • Sponsorships • Education • Support • Products &amp; More</p><p className="mt-2 italic text-[9px]">Connection Before Correction</p></div></div>
                </div>
              </article>
            </div>
          </div>

          <aside className="bg-white rounded-3xl border border-[#ddd4be] shadow-sm p-6 md:p-7 lg:sticky lg:top-24"><div className="flex items-center gap-3 mb-6"><span className="h-px w-8 bg-[#b8922a]"/><p className="text-[10px] tracking-[.2em] uppercase text-[#9a6720] font-semibold">Create your gift</p></div><label className="block text-sm font-medium mb-3">Choose an amount</label><div className="grid grid-cols-3 gap-2">{PRESET_AMOUNTS.map(value=><button key={value} type="button" onClick={()=>{setAmount(value);setCustom("")}} className={`rounded-xl py-3 text-sm font-semibold border ${!custom&&amount===value?"bg-[#0d2b20] text-white border-[#0d2b20]":"border-[#ddd4be]"}`}>${value}</button>)}</div><input value={custom} onChange={e=>setCustom(e.target.value.replace(/[^0-9.]/g,""))} inputMode="decimal" placeholder="Custom amount (minimum $10)" className="mt-3 w-full rounded-xl border border-[#ddd4be] px-4 py-3 text-sm"/><div className="grid grid-cols-2 gap-3 mt-5"><label className="text-xs font-medium">Gifted to<input value={recipient} onChange={e=>setRecipient(e.target.value)} placeholder="Recipient name" className="mt-1.5 w-full rounded-xl border border-[#ddd4be] px-3 py-2.5 text-sm"/></label><label className="text-xs font-medium">Recipient email<input value={recipientEmail} onChange={e=>setRecipientEmail(e.target.value)} type="email" placeholder="name@email.com" className="mt-1.5 w-full rounded-xl border border-[#ddd4be] px-3 py-2.5 text-sm"/></label><label className="text-xs font-medium">From<input value={from} onChange={e=>setFrom(e.target.value)} placeholder="Your name" className="mt-1.5 w-full rounded-xl border border-[#ddd4be] px-3 py-2.5 text-sm"/></label><label className="text-xs font-medium">Gift message<input value={message} onChange={e=>setMessage(e.target.value)} placeholder="A little message" className="mt-1.5 w-full rounded-xl border border-[#ddd4be] px-3 py-2.5 text-sm"/></label></div><div className="mt-5 rounded-2xl bg-[#f5f0e8] p-3.5 text-xs"><b>Gift card reference:</b> {reference}<p className="mt-1 opacity-70">Keep this reference with your payment confirmation.</p></div><a href={paypalUrl} target="_blank" rel="noopener noreferrer" className={`mt-5 flex items-center justify-center gap-2 w-full rounded-full px-5 py-3.5 font-semibold ${validAmount?"bg-[#ffc439] text-[#003087]":"bg-[#ddd4be] text-[#666] pointer-events-none"}`}>Pay ${validAmount?selectedAmount.toFixed(2):"—"} NZD with PayPal <ArrowRight size={16}/></a><a href={confirmationEmail} className="mt-3 flex items-center justify-center gap-2 w-full rounded-full border border-[#17261d] px-5 py-3 text-sm"><Mail size={15}/> Send payment details to Hawkez Haven</a><p className="mt-3 text-[10px] leading-relaxed opacity-60">After paying with PayPal, send the payment reference and gift details above to Hawkez Haven. We will confirm payment and send the finished digital gift card to the recipient email supplied.</p></aside>
        </div>
      </section>
      <section className="bg-[#ebe2d1] py-10"><div className="max-w-3xl mx-auto px-4 text-center"><h2 className="font-serif text-2xl">A gift with a purpose.</h2><p className="mt-3 text-sm leading-relaxed opacity-75">Gift cards support eligible Hawkez Haven experiences, sponsorship, education and selected products or services. They are not exchangeable for cash.</p><Link to="/support" className="inline-flex items-center gap-2 mt-5 text-sm text-[#8c6e1e]">See ways to support the horses <ArrowRight size={15}/></Link></div></section>
    </main>
  );
}
