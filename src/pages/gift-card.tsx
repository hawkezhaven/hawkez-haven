import { useMemo, useState } from "react";
import { ArrowRight, Mail, Heart, GraduationCap, HandHeart, ShieldCheck } from "lucide-react";
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

  const confirmationEmail = `mailto:hawkezhaven@gmail.com?subject=${encodeURIComponent(`Gift Card Purchase - ${reference}`)}&body=${encodeURIComponent(`Hawkez Haven Gift Card\n\nGift Card Reference: ${reference}\nAmount: $${selectedAmount.toFixed(2)} NZD\nRecipient: ${recipient || 'Gift'}\nRecipient Email: ${recipientEmail || ''}\nFrom: ${from}\nMessage:\n${message}\n\nPlease process this gift card purchase via PayPal: ${paypalUrl}\n`)};`

  // Approved artwork filenames (do not change)
  const FRONT = "/images/hawkez-haven-gift-card-front.png";
  const BACK = "/images/hawkez-haven-gift-card-back.png";

  // Aspect ratios (width / height)
  const FRONT_ASPECT = 2; // 2:1 (approx 1774x887)
  const BACK_ASPECT = 1.823; // ~1.823:1 (approx 1693x929)
  const FLIP_ASPECT = Math.min(FRONT_ASPECT, BACK_ASPECT);

  const [flipped, setFlipped] = useState(false);

  return (
    <main className="bg-[#f4eee3] text-[#17261d]">
      <section className="max-w-[1500px] mx-auto px-3 sm:px-5 lg:px-8 py-8 md:py-12">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_390px] gap-7 xl:gap-9 items-start">
          <div>
            <div className="space-y-5">
              {/* Banner / header card */}
              <article className="relative overflow-hidden rounded-[18px] border-2 border-[#b77b28] bg-[#f8f0df] shadow-[0_14px_35px_rgba(35,28,18,.14)]">
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                  <img src="/images/hawkez-logo-transparent.png" alt="" className="w-[58%] max-w-[820px] opacity-[.075]" />
                </div>
                <div className="relative h-full flex flex-col px-[4%] py-[2.5%] lg:py-[4%]">
                  <div className="text-center">
                    <div className="font-serif text-[clamp(18px,2.45vw,36px)] tracking-[.17em] font-semibold">HAWKEZ HAVEN</div>
                    <div className="mt-[.25%] flex items-center justify-center gap-2"></div>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center -mt-[1%]">
                    <h1 className="font-serif text-[clamp(34px,5.2vw,76px)] tracking-[.12em] leading-none">GIFT CARD</h1>
                    <p className="mt-2 text-sm">Give the gift of hope — support the rescue, rehabilitation and education work at Hawkez Haven.</p>
                  </div>
                  <div className="absolute left-0 right-0 bottom-0 bg-[#0d2b20] text-[#f8f0df] flex items-center justify-center gap-x-[2.2%] px-3 py-[1.15%] text-[clamp(5px,.55vw,9px)] tracking-[.06em]">
                    <span>♡ Horse Experiences</span>
                    <span>♡ Sponsorships</span>
                    <span>♡ Rehabilitation</span>
                    <span>♡ Education</span>
                    <span>♡ Products + Support</span>
                  </div>
                </div>
              </article>

              {/* Single interactive flip card — front and back are not shown side-by-side */}
              <article className="mt-2 rounded-[18px] border-2 border-[#b77b28] bg-[#f8f0df] shadow-[0_14px_35px_rgba(35,28,18,.11)] p-4">
                <div className="max-w-[680px] mx-auto">
                  <div
                    className="w-full mx-auto"
                    style={{
                      position: "relative",
                      paddingTop: `${(1 / FLIP_ASPECT) * 100}%`,
                      perspective: 1000,
                    }}
                    onClick={() => setFlipped(f => !f)}
                    aria-hidden={false}
                  >
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        transformStyle: "preserve-3d",
                        transition: "transform 700ms",
                        transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
                      }}
                    >
                      {/* Front face */}
                      <div style={{ position: "absolute", inset: 0, backfaceVisibility: "hidden" }}>
                        <img src={FRONT} alt="Gift card front" className="w-full h-full object-contain" />
                      </div>

                      {/* Back face */}
                      <div style={{ position: "absolute", inset: 0, transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}>
                        <img src={BACK} alt="Gift card back" className="w-full h-full object-contain" />
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-3 text-sm text-[#17261d]/80">Click the card to flip and view both sides.</div>
                </div>
              </article>

            </div>
          </div>

          <aside className="bg-white rounded-3xl border border-[#ddd4be] shadow-sm p-6 md:p-7 lg:sticky lg:top-24">
            <div className="flex items-center gap-3 mb-6"><span className="h-px w-8 bg-[#b8922a] inline-block" />
              <div className="text-sm">Purchase a gift card</div>
            </div>

            {/* Purchasing form and PayPal button: left unchanged */}
            <div className="space-y-4">
              <div className="flex gap-2 flex-wrap">
                {PRESET_AMOUNTS.map(a => (
                  <button key={a} type="button" onClick={() => { setCustom(""); setAmount(a); }} className={`px-3 py-2 rounded-full border ${a === amount && !custom ? "bg-[#b8922a] text-white border-transparent" : "bg-white text-[#17261d] border-[#dcd6c4]"}`}>
                    ${a}
                  </button>
                ))}
                <input value={custom} onChange={e => setCustom(e.target.value)} placeholder="Other" className="px-3 py-2 border rounded-full w-24" />
              </div>

              <input value={recipient} onChange={e => setRecipient(e.target.value)} placeholder="Recipient name" className="w-full px-3 py-2 border rounded" />
              <input value={recipientEmail} onChange={e => setRecipientEmail(e.target.value)} placeholder="Recipient email (optional)" className="w-full px-3 py-2 border rounded" />
              <input value={from} onChange={e => setFrom(e.target.value)} placeholder="From" className="w-full px-3 py-2 border rounded" />
              <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Message (optional)" className="w-full px-3 py-2 border rounded h-24" />

              <a href={paypalUrl} className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0d2b20] text-white ${!validAmount ? "opacity-60 pointer-events-none" : "hover:opacity-90"}`}>
                <span>Pay with PayPal</span>
                <ArrowRight size={14} />
              </a>

              <a href={confirmationEmail} className="text-sm text-[#17261d]/80">Or click to send us an email to confirm your purchase</a>
            </div>
          </aside>
        </div>
      </section>
      <section className="bg-[#ebe2d1] py-10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl">A gift with a purpose.</h2>
          <p className="mt-3 text-sm leading-relaxed">Your gift helps support the horses of Hawkez Haven through care, rehabilitation, education and second chances.</p>
        </div>
      </section>
    </main>
  );
}
