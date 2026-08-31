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
  const confirmationEmail = `mailto:hawkezhaven@gmail.com?subject=${encodeURIComponent(`Gift Card Purchase - ${reference}`)}&body=${encodeURIComponent(`Hawkez Haven Gift Card\n\nGift Card Reference: ${reference}\n\nRecipient: ${recipient}\nRecipient Email: ${recipientEmail}\n\nFrom: ${from}\n\nMessage:\n${message}\n\nAmount: $${selectedAmount.toFixed(2)} NZD`)}`;

  // Approved artwork filenames (do not change)
  const FRONT = "/images/hawkez-haven-gift-card-front.png";
  const BACK = "/images/hawkez-haven-gift-card-back.png";

  // Aspect ratios (width / height)
  const FRONT_ASPECT = 2; // 2:1 (approx 1774x887)
  const BACK_ASPECT = 1.823; // ~1.823:1 (approx 1693x929)

  // Helper to render an image that preserves its natural aspect ratio and never crops or stretches
  function AspectImage({ src, aspect, alt }: { src: string; aspect: number; alt?: string }) {
    const paddingTop = `${(1 / aspect) * 100}%`;
    return (
      <div className="relative w-full overflow-hidden" style={{ paddingTop }}>
        <img src={src} alt={alt || ""} className="absolute inset-0 w-full h-full object-contain" />
      </div>
    );
  }

  const [flipped, setFlipped] = useState(false);

  return (
    <main className="bg-[#f4eee3] text-[#17261d]">
      <section className="max-w-[1500px] mx-auto px-3 sm:px-5 lg:px-8 py-8 md:py-12">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_390px] gap-7 xl:gap-9 items-start">
          <div>
            <div className="space-y-5">
              {/* Banner / header cards (unchanged content, visual layout preserved) */}
              <article className="relative overflow-hidden rounded-[18px] border-2 border-[#b77b28] bg-[#f8f0df] shadow-[0_14px_35px_rgba(35,28,18,.14)]">
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                  <img src="/images/hawkez-logo-transparent.png" alt="" className="w-[58%] max-w-[820px] opacity-[.075]" />
                </div>
                <div className="relative h-full flex flex-col px-[4%] py-[2.5%]">
                  <div className="text-center">
                    <div className="font-serif text-[clamp(18px,2.45vw,36px)] tracking-[.17em] font-semibold">HAWKEZ HAVEN</div>
                    <div className="mt-[.25%] flex items-center justify-center gap-2"></div>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center -mt-[1%]">
                    <h1 className="font-serif text-[clamp(34px,5.2vw,76px)] tracking-[.12em] leading-none">GIFT CARD</h1>
                    <p className="mt-2 text-sm">Give the gift of hope — support the rescue, rehabilitation and education work at Hawkez Haven.</p>
                  </div>
                  <div className="absolute left-0 right-0 bottom-0 bg-[#0d2b20] text-[#f8f0df] flex items-center justify-center gap-x-[2.2%] px-3 py-[1.15%] text-[clamp(5px,.55vw,9px)] tracking-[.08em]">
                    <span>♡ Horse Experiences</span>
                    <span>♡ Sponsorships</span>
                    <span>♡ Rehabilitation</span>
                    <span>♡ Education</span>
                    <span>♡ Products + Support</span>
                  </div>
                </div>
              </article>

              {/* Side-by-side view: each artwork shown at its natural aspect ratio, no cropping */}
              <article className="rounded-[18px] border-2 border-[#b77b28] bg-[#f8f0df] shadow-[0_14px_35px_rgba(35,28,18,.11)] p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
                  <div>
                    <AspectImage src={FRONT} aspect={FRONT_ASPECT} alt="Hawkez Haven Gift Card — Front" />
                  </div>
                  <div>
                    <AspectImage src={BACK} aspect={BACK_ASPECT} alt="Hawkez Haven Gift Card — Back" />
                  </div>
                </div>
              </article>

              {/* Interactive flip card: stable container based on front card's 2:1 ratio. Back is shown with object-contain and never cropped */}
              <article className="mt-2 rounded-[18px] border-2 border-[#b77b28] bg-[#f8f0df] shadow-[0_14px_35px_rgba(35,28,18,.11)] p-4">
                <div className="max-w-[680px] mx-auto">
                  <div
                    className="w-full mx-auto"
                    style={{
                      // Maintain a stable container sized to the front artwork's 2:1 ratio
                      position: "relative",
                      paddingTop: `${(1 / FRONT_ASPECT) * 100}%`,
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
                        {/* Ensure the back artwork is fully visible and not cropped; object-contain will letterbox if needed */}
                        <img src={BACK} alt="Gift card back" className="w-full h-full object-contain" />
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-3 text-sm text-[#17261d]/80">Click the card to flip and view both sides.</div>
                </div>
              </article>

              {/* Original descriptive/back card content (kept intact below the artworks) */}
              <article className="relative overflow-hidden rounded-[18px] border-2 border-[#b77b28] bg-[#f8f0df] shadow-[0_14px_35px_rgba(35,28,18,.11)]">
                <div className="absolute inset-0 pointer-events-none flex justify-end items-center pr-[3%]"><img src="/images/hawkez-logo-transparent.png" alt="" className="w-[42%] opacity-[.055]" /></div>
                <div className="relative h-full grid grid-cols-[42%_58%]">
                  <div className="bg-[#0d2b20] text-[#f8f0df] px-[6%] py-[4.5%] flex flex-col justify-between">
                    <div>
                      <div className="text-[#d6a34a] text-[clamp(12px,1.3vw,20px)]">♡</div>
                      <h2 className="mt-[1%] font-serif text-[clamp(20px,2.55vw,37px)] leading-[1.05] text-[#d6a34a]">A Gift With Purpose</h2>
                      <p className="mt-[2%] text-[clamp(7px,.78vw,12px)] leading-[1.45]">Your gift helps support the horses of Hawkez Haven through care, rehabilitation, education and second chances.</p>
                      <p className="mt-[2%] font-serif italic text-[clamp(8px,.9vw,14px)] text-[#d6a34a]">Thank you for making a difference.</p>
                    </div>
                    <div className="grid grid-cols-4 gap-1 text-center text-[#d6a34a]">{[[ShieldCheck, "CARE"], [Heart, "REHABILITATION"], [GraduationCap, "EDUCATION"], [HandHeart, "SECOND CHANCES"]].map(([Icon, label]) => (
                      <div key={String(label)}>
                        {/* @ts-ignore */}
                        <Icon className="mx-auto mb-0.5" size={14} />
                        <span className="text-[5px] tracking-[.04em] text-[#f8f0df]">{String(label)}</span>
                      </div>
                    ))}</div>
                  </div>

                  <div className="px-[6%] py-[4.5%] flex flex-col justify-between font-serif text-[#17261d]"><div className="space-y-[1.4%] text-[clamp(7px,.78vw,12px)]"><p><b>GIFTED TO:</b><span className="block">{recipient || "(Recipient name)"}</span></p><p><b>FROM:</b><span className="block">{from || "(Your name)"}</span></p><p><b>MESSAGE:</b><span className="block italic">{message || "(Your message here)"}</span></p></div><div><p className="text-[clamp(7px,.78vw,12px)]"><b>CARD REFERENCE:</b></p><p className="font-mono text-[clamp(8px,.9vw,13px)] tracking-wider text-[#b8922a]">{reference}</p></div></div>
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
                  <button key={a} type="button" onClick={() => { setCustom(""); setAmount(a); }} className={`px-3 py-2 rounded-full border ${a === amount && !custom ? "bg-[#b8922a] text-white border-transparent" : "border-[#b8922a]/50 hover:border-[#b8922a]"}`}>
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
