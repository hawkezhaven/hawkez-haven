import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, Heart, X, CheckCircle, AlertCircle, ShieldCheck } from "lucide-react";
import { PERMANENT_RESIDENTS } from "@/lib/horses.ts";
import { SUBSCRIPTION_PLAN_IDS } from "@/lib/paypal.ts";
import PayPalButton from "@/components/PayPalButton.tsx";
import PayPalSubscriptionButton from "@/components/PayPalSubscriptionButton.tsx";

const TIERS = [
  {
    name: "Chaff Sponsor",
    amount: 50,
    label: "$50/mo",
    purpose: "Contributes towards regular chaff and feed needs for your selected Hawkez Haven horse — helping to support the daily nutrition that keeps them on the road to recovery.",
    benefits: [
      "Recognition/thank-you on Hawkez Haven social media (with your consent)",
      "Hawkez Haven Sponsorship Certificate connected to your chosen horse",
    ],
  },
  {
    name: "Farrier Sponsor",
    amount: 60,
    label: "$60/mo",
    purpose: "Contributes towards regular professional hoof care for your selected Hawkez Haven horse — helping keep their hooves balanced, comfortable and sound as part of their ongoing care.",
    benefits: [
      "Recognition/thank-you on Hawkez Haven social media (with your consent)",
      "Hawkez Haven Sponsorship Certificate connected to your chosen horse",
      "A current photo of your sponsored horse",
    ],
  },
  {
    name: "Guardian Sponsor",
    amount: 120,
    label: "$120/mo",
    purpose: "Guardian sponsorship is our whole-horse support tier. Your sponsorship contributes towards your selected horse's feed, hoof care, routine health needs, rehabilitation and everyday wellbeing — helping Hawkez Haven provide the ongoing care they need throughout their journey.",
    benefits: [
      "Recognition/thank-you on Hawkez Haven social media (with your consent)",
      "Hawkez Haven Guardian Sponsorship Certificate connected to your chosen horse",
      "A personalised video featuring your sponsored horse and, where possible, their current paddock mates at the time of filming — delivered privately by email or another communication method agreed with you",
    ],
  },
];

type ModalState =
  | { open: false }
  | { open: true; preselectedHorse: string | null; preselectedTier: string | null };

type CheckoutStep = "select" | "checkout" | "success" | "error";

export default function SponsorshipPage() {
  const [searchParams] = useSearchParams();
  const [modal, setModal] = useState<ModalState>({ open: false });
  const [selectedHorse, setSelectedHorse] = useState<string | null>(null);
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [step, setStep] = useState<CheckoutStep>("select");

  // Auto-open modal if URL contains query params (e.g. /sponsor?horse=Kahu)
  useEffect(() => {
    const horseParam = searchParams.get("horse");
    const tierParam = searchParams.get("tier");
    if (horseParam || tierParam) {
      const matchedHorse = PERMANENT_RESIDENTS.find(
        (h) => h.name.toLowerCase() === horseParam?.toLowerCase() || h.id.toLowerCase() === horseParam?.toLowerCase()
      );
      const initialHorse = matchedHorse ? matchedHorse.name : horseParam;
      openModal(initialHorse, tierParam);
    }
  }, [searchParams]);

  function openModal(horse: string | null, tier: string | null) {
    setSelectedHorse(horse);
    setSelectedTier(tier);
    setStep("select");
    setModal({ open: true, preselectedHorse: horse, preselectedTier: tier });
  }

  function closeModal() {
    setModal({ open: false });
    setSelectedHorse(null);
    setSelectedTier(null);
    setStep("select");
  }

  const readyToCheckout = selectedHorse !== null && selectedTier !== null;
  const activePlanId = selectedTier ? SUBSCRIPTION_PLAN_IDS[selectedTier] : null;
  const activeTier = TIERS.find((t) => t.name === selectedTier) ?? null;

  return (
    <div className="bg-[#f5f0e8]">
      {/* Header */}
      <section className="relative isolate overflow-hidden bg-[#1a1a18] text-[#f5f0e8] py-24 md:py-32">
        <img
          src="/images/pedro-sponsorship.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-contain object-right"
        />
        <div className="absolute inset-0 -z-10 bg-[#1a1a18]/70" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-[#b8922a]">
            <span className="block h-px w-8 bg-[#b8922a]" />
            <span className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Sponsorship</span>
          </div>
          <h1 className="mt-6 font-serif text-5xl md:text-6xl text-[#f5f0e8] leading-tight max-w-3xl">
            Be their person from anywhere.
          </h1>
          <p className="mt-6 text-lg text-[#f5f0e8]/70 max-w-2xl leading-relaxed">
            Sponsorship directly funds the rehabilitation, nutrition, and daily welfare of horses in our care. Choose the horse whose story speaks to you and become part of their ongoing journey.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center gap-3 mb-4">
          <span className="block h-px w-8 bg-[#b8922a]" />
          <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Choose your level of support</p>
        </div>
        <h2 className="font-serif text-4xl text-[#1a1a18] mb-3">Sponsorship tiers</h2>
        <p className="text-[#4a4a42] max-w-2xl mb-10">
          Every sponsor is genuinely valued, regardless of tier. The different appreciation benefits below reflect contribution levels — not a difference in how much your connection with your chosen horse matters.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {TIERS.map((tier) => (
            <div key={tier.name} className="bg-white rounded-2xl p-8 border border-[#ddd4be]/50 flex flex-col">
              <p className="font-serif text-4xl text-[#b8922a]">{tier.label}</p>
              <h3 className="font-serif text-2xl text-[#1a1a18] mt-2 mb-3">{tier.name}</h3>
              <p className="text-sm text-[#4a4a42] leading-relaxed mb-5">{tier.purpose}</p>
              <div className="flex-1">
                <p className="text-[0.6rem] tracking-widest uppercase text-[#4a4a42]/60 mb-2">Sponsor appreciation</p>
                <ul className="space-y-2">
                  {tier.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-[#4a4a42]">
                      <span className="mt-2 block w-1.5 h-1.5 rounded-full bg-[#b8922a] shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => openModal(null, tier.name)}
                className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#b8922a] text-white text-sm font-medium rounded-full hover:bg-[#8c6e1e] transition-colors cursor-pointer"
              >
                <Heart size={16} /> Sponsor at {tier.label}
              </button>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-[#4a4a42] text-center">
          You will be redirected to PayPal to complete your sponsorship securely. Payments are in NZD.
        </p>
      </section>

      {/* 3-Month Thank-You */}
      <section className="bg-[#ede5d4] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="block h-px w-8 bg-[#b8922a]" />
            <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">3-Month Sponsor Thank-You</p>
          </div>
          <h2 className="font-serif text-4xl text-[#1a1a18] mb-6 max-w-2xl">A little something extra for staying the course.</h2>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[#4a4a42] leading-relaxed mb-4">
                After completing 3 consecutive months of active sponsorship, sponsors at all three tiers become eligible for one complimentary <strong className="text-[#1a1a18]">Hawkez Haven Experience Gift Card</strong> as a thank-you for their ongoing support.
              </p>
              <p className="text-[#4a4a42] leading-relaxed mb-4">
                The gift card entitles the individual sponsor to one complimentary Hawkez Haven experience from suitable available options, booked and confirmed through our enquiry process.
              </p>
              <p className="text-[#4a4a42] leading-relaxed">
                The sponsor can choose to receive their gift card as a <strong className="text-[#1a1a18]">physical card</strong> mailed to their postal address, or an <strong className="text-[#1a1a18]">electronic card</strong> sent to their email.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 border border-[#ddd4be]/50">
                <h3 className="font-medium text-[#1a1a18] text-sm mb-2">Experience suitability</h3>
                <p className="text-sm text-[#4a4a42] leading-relaxed">
                  Suitable experiences are confirmed by Hawkez Haven based on horse welfare, availability, and sponsor comfort level. Riding is not automatically included or guaranteed.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-[#ddd4be]/50">
                <h3 className="font-medium text-[#1a1a18] text-sm mb-2">Good to know</h3>
                <p className="text-sm text-[#4a4a42] leading-relaxed">
                  The Experience Gift Card is for the individual sponsor. It has no cash value and is non-transferable unless arranged directly with Hawkez Haven.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <Link
              to="/enquire/experiences"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#b8922a] text-white text-sm font-medium rounded-full hover:bg-[#8c6e1e] transition-colors cursor-pointer"
            >
              View experiences <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Horses to sponsor */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="block h-px w-8 bg-[#b8922a]" />
            <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Who you'll sponsor</p>
          </div>
          <h2 className="font-serif text-4xl text-[#1a1a18] mb-3">Meet the Hawkez Haven crew</h2>
          <p className="text-[#4a4a42] mb-10 max-w-xl">
            Choose a horse whose story speaks to you. Every sponsorship directly funds their ongoing feed, farrier, and care.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {PERMANENT_RESIDENTS.map((horse) => (
              <div key={horse.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#ddd4be]/50">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={horse.id === "pedro" ? "/images/pedro-sponsorship.webp" : horse.image}
                    alt={horse.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-[0.6rem] tracking-widest uppercase font-medium bg-[#1a1a18] text-[#b8922a]">
                    {horse.status}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl text-[#1a1a18]">{horse.name}</h3>
                  <p className="text-xs italic text-[#b8922a] mb-4">{horse.tagline}</p>
                  <button
                    onClick={() => openModal(horse.name, null)}
                    className="inline-flex items-center gap-2 px-5 py-2 bg-[#b8922a] text-white text-xs font-medium rounded-full hover:bg-[#8c6e1e] transition-colors cursor-pointer w-full justify-center"
                  >
                    <Heart size={14} /> Sponsor {horse.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General donation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block h-px w-8 bg-[#b8922a]" />
            <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Give what feels right</p>
            <span className="block h-px w-8 bg-[#b8922a]" />
          </div>
          <h2 className="font-serif text-3xl text-[#1a1a18] mb-4">Support Hawkez Haven</h2>
          <p className="text-[#4a4a42] text-sm mb-8">
            Every contribution — whether one-off or recurring — helps provide feed, farrier care, veterinary treatment, and rehabilitation for horses in our care.
          </p>
          <div className="bg-white rounded-2xl p-8 border border-[#ddd4be]/50">
            <PayPalButton containerId="sponsorship-page" />
          </div>
        </div>
      </section>

      {/* NZ Bank transfer */}
      <section className="bg-[#ede5d4] py-16">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h3 className="font-serif text-2xl text-[#1a1a18] mb-3">NZ Bank Transfer</h3>
          <p className="text-sm text-[#4a4a42] mb-6">
            Prefer direct transfer? Use these details from any NZ bank. Please include your name or the horse's name as the reference.
          </p>
          <div className="bg-white rounded-2xl border border-[#ddd4be]/50 p-6 text-left space-y-4">
            {[
              { label: "Account Name", value: "HAWKEZ HAVEN; S/C" },
              { label: "Account Owner", value: "HEATHER RANKIN" },
              { label: "Account Number", value: "38-9022-0346505-06" },
              { label: "Reference", value: "Your name or horse name" },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-[0.6rem] tracking-widest uppercase text-[#4a4a42]/60 mb-1">{label}</p>
                <p className="font-serif text-lg text-[#1a1a18] select-all">{value}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-[#4a4a42]/70">Tap any field to select and copy.</p>
        </div>
      </section>

      {/* Self-Funded Transparency Note */}
      <section className="max-w-3xl mx-auto px-4 py-12 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#8c6e1e] uppercase tracking-wider mb-2">
          <ShieldCheck size={16} /> Rescue Transparency &amp; Commitment
        </div>
        <p className="text-xs text-[#4a4a42] leading-relaxed">
          Hawkez Haven is a dedicated, self-funded grassroots equine rehabilitation haven based in New Zealand. 
          100% of sponsorships and donations directly fund veterinary care, professional farrier services, quality nutrition, and rehabilitation supplies for our horses. 
          Contributions are non-tax-deductible gifts directly supporting animal welfare.
        </p>
      </section>

      {/* Sponsorship Modal */}
      {modal.open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="bg-[#f5f0e8] rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal header */}
            <div className="flex items-center justify-between px-8 pt-8 pb-4">
              <h2 className="font-serif text-2xl text-[#1a1a18]">Monthly horse sponsorship</h2>
              <button
                onClick={closeModal}
                className="text-[#4a4a42] hover:text-[#1a1a18] transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {step === "success" && (
              <div className="px-8 pb-8 text-center">
                <CheckCircle size={48} className="mx-auto text-[#b8922a] mb-4" />
                <h3 className="font-serif text-2xl text-[#1a1a18] mb-3">Thank you for sponsoring a Hawkez Haven horse.</h3>
                <p className="text-[#4a4a42]">Your monthly sponsorship has been successfully set up.</p>
                {selectedHorse && (
                  <p className="mt-2 text-sm text-[#4a4a42]">
                    You chose to sponsor <strong className="text-[#1a1a18]">{selectedHorse}</strong> at the{" "}
                    <strong className="text-[#1a1a18]">{selectedTier}</strong> level. Hawkez Haven will be in touch to connect your sponsorship to your chosen horse.
                  </p>
                )}
                <button
                  onClick={closeModal}
                  className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-[#b8922a] text-white text-sm font-medium rounded-full hover:bg-[#8c6e1e] transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            )}

            {step === "error" && (
              <div className="px-8 pb-8 text-center">
                <AlertCircle size={48} className="mx-auto text-[#4a4a42] mb-4" />
                <h3 className="font-serif text-2xl text-[#1a1a18] mb-3">Something went wrong</h3>
                <p className="text-[#4a4a42] text-sm mb-6">
                  Your sponsorship was not completed. No payment has been taken. Please try again or contact Hawkez Haven directly.
                </p>
                <button
                  onClick={() => setStep("select")}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#b8922a] text-white text-sm font-medium rounded-full hover:bg-[#8c6e1e] transition-colors cursor-pointer"
                >
                  Try again
                </button>
              </div>
            )}

            {(step === "select" || step === "checkout") && (
              <div className="px-8 pb-8 space-y-6">
                {/* Horse selection */}
                <div>
                  <p className="text-[0.6rem] tracking-widest uppercase text-[#4a4a42]/60 mb-3">1. Choose your horse</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {PERMANENT_RESIDENTS.map((horse) => (
                      <button
                        key={horse.id}
                        onClick={() => {
                          setSelectedHorse(horse.name);
                          setStep("select");
                        }}
                        className={`rounded-xl overflow-hidden border-2 transition-all cursor-pointer text-left ${
                          selectedHorse === horse.name
                            ? "border-[#b8922a] shadow-md"
                            : "border-transparent hover:border-[#ddd4be]"
                        }`}
                      >
                        <img
                          src={horse.id === "pedro" ? "/images/pedro-sponsorship.webp" : horse.image}
                          alt={horse.name}
                          className="w-full aspect-[4/3] object-cover"
                        />
                        <div className="bg-white px-3 py-2">
                          <p className="font-serif text-sm text-[#1a1a18]">{horse.name}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tier selection */}
                <div>
                  <p className="text-[0.6rem] tracking-widest uppercase text-[#4a4a42]/60 mb-3">2. Choose your sponsorship tier</p>
                  <div className="space-y-3">
                    {TIERS.map((tier) => (
                      <button
                        key={tier.name}
                        onClick={() => {
                          setSelectedTier(tier.name);
                          setStep("select");
                        }}
                        className={`w-full rounded-xl border-2 px-5 py-4 text-left transition-all cursor-pointer ${
                          selectedTier === tier.name
                            ? "border-[#b8922a] bg-white shadow-md"
                            : "border-[#ddd4be] bg-white hover:border-[#b8922a]/50"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-serif text-lg text-[#1a1a18]">{tier.name}</span>
                          <span className="font-serif text-[#b8922a] font-semibold">{tier.label}</span>
                        </div>
                        <p className="text-xs text-[#4a4a42] mt-1 leading-relaxed line-clamp-2">{tier.purpose}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Summary + checkout */}
                {readyToCheckout && activePlanId && activeTier && (
                  <div className="bg-white rounded-2xl border border-[#ddd4be]/50 p-6">
                    <p className="text-[0.6rem] tracking-widest uppercase text-[#4a4a42]/60 mb-2">3. Complete your sponsorship</p>
                    <p className="text-sm text-[#4a4a42] mb-1">
                      Sponsoring <strong className="text-[#1a1a18]">{selectedHorse}</strong> at the{" "}
                      <strong className="text-[#1a1a18]">{activeTier.name}</strong> level ({activeTier.label}).
                    </p>
                    <p className="text-xs text-[#4a4a42]/70 mb-5">
                      This is a recurring monthly subscription. After PayPal processes your payment, Hawkez Haven will be in touch to confirm the connection to your chosen horse.
                    </p>
                    <PayPalSubscriptionButton
                      planId={activePlanId}
                      tierName={activeTier.name}
                      onSuccess={() => setStep("success")}
                      onCancel={() => {}}
                      onError={() => setStep("error")}
                    />
                  </div>
                )}

                {!readyToCheckout && (
                  <p className="text-xs text-[#4a4a42]/60 text-center">Select both a horse and a tier above to proceed to checkout.</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
