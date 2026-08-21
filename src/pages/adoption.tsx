import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Info } from "lucide-react";

export default function AdoptionPage() {
  return (
    <div className="bg-[#f5f0e8]">
      {/* Header */}
      <section className="bg-[#1a1a18] text-[#f5f0e8] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-[#b8922a]">
            <span className="block h-px w-8 bg-[#b8922a]" />
            <span className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Adoption</span>
          </div>
          <h1 className="mt-6 font-serif text-5xl md:text-6xl text-[#f5f0e8] leading-tight max-w-3xl">
            A Lifetime Commitment Begins Here
          </h1>
          <p className="mt-6 text-lg text-[#f5f0e8]/70 max-w-2xl leading-relaxed">
            Every horse deserves the right home — not just the next home. Our adoption process is designed to match each horse with the people best suited to their future.
          </p>
          <div className="mt-8 flex gap-4 flex-wrap">
            <Link to="/horses" className="inline-flex items-center gap-2 px-7 py-3 bg-[#b8922a] text-white text-sm font-medium rounded-full hover:bg-[#8c6e1e] transition-colors cursor-pointer">
              Meet our horses <ArrowRight size={16} />
            </Link>
            <Link to="/enquire/adoption" className="inline-flex items-center gap-2 px-7 py-3 border border-[#f5f0e8]/30 text-[#f5f0e8] text-sm font-medium rounded-full hover:bg-[#f5f0e8]/10 transition-colors cursor-pointer">
              Start an enquiry
            </Link>
          </div>
        </div>
      </section>

      {/* Seasonal Intake & Capacity Notice */}
      <section className="bg-[#ede5d4] border-y border-[#ddd4be]/80 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 rounded-2xl p-6 sm:p-8 border border-[#b8922a]/30 flex flex-col md:flex-row items-start md:items-center gap-5 shadow-sm">
            <div className="h-12 w-12 rounded-xl bg-[#b8922a]/10 flex items-center justify-center shrink-0 text-[#b8922a]">
              <Info size={24} />
            </div>
            <div className="flex-1">
              <h3 className="font-serif text-lg text-[#1a1a18] font-semibold">
                Current Intake Status &amp; Capacity Notice
              </h3>
              <p className="mt-1 text-sm text-[#4a4a42] leading-relaxed">
                As a self-funded haven, our intakes are strictly limited to ensure every resident receives dedicated rehabilitation, veterinary care, and daily support. We assess new intakes on a case-by-case basis as rehabilitation progress and paddock space allow.
              </p>
            </div>
            <Link
              to="/enquire/adoption"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a1a18] text-[#f5f0e8] text-xs font-medium rounded-full hover:bg-[#b8922a] transition-colors shrink-0"
            >
              Intake &amp; Adoption Enquiries <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block h-px w-8 bg-[#b8922a]" />
              <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Our Adoption Promise</p>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a18] leading-tight">The right match matters more than a quick match.</h2>
            <p className="mt-6 text-[#4a4a42] leading-relaxed">At Hawkez Haven, adoption is a carefully considered journey. We believe every horse deserves a home where they can thrive — and every adopter deserves a horse who fits their life.</p>
            <ul className="mt-6 space-y-3">
              {[
                "We take time to understand each horse's temperament, needs and future goals.",
                "We learn about your experience, setup and the life you can offer.",
                "We match based on compatibility, not speed.",
                "We remain a support network long after the adoption is complete.",
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#b8922a] mt-0.5 shrink-0" />
                  <span className="text-sm text-[#4a4a42]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <img
            src="/images/khan.jpg"
            alt="Horse at Hawkez Haven"
            className="w-full rounded-3xl object-cover aspect-[4/3]"
          />
        </div>
      </section>

      {/* Journey steps */}
      <section className="bg-[#ede5d4] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="block h-px w-8 bg-[#b8922a]" />
              <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">The Adoption Journey</p>
              <span className="block h-px w-8 bg-[#b8922a]" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a18]">A supportive path from first hello to forever home.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Meet our horses", desc: "Browse the horses currently available and read their stories. Every horse is described honestly so you can begin to imagine the right match." },
              { step: "02", title: "Submit an enquiry", desc: "Tell us about yourself, your experience and the home you can offer. There is no pressure — just an open conversation." },
              { step: "03", title: "Discuss suitability", desc: "We will talk through your setup, goals and any questions you have. Together we explore whether a particular horse is the right fit." },
              { step: "04", title: "Arrange a visit", desc: "Come and meet your potential match in person. Spend time at the fence, in the paddock, and maybe in the saddle." },
              { step: "05", title: "Adoption agreement", desc: "When everyone is confident, we formalise the adoption with clear, caring agreements that put the horse first." },
              { step: "06", title: "Continued support", desc: "Our relationship does not end at adoption. We are here for advice, check-ins and anything you need as your partnership grows." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-white rounded-2xl p-8 border border-[#ddd4be]/50">
                <p className="font-serif text-4xl text-[#b8922a]/30">{step}</p>
                <h3 className="font-serif text-xl text-[#1a1a18] mt-2 mb-3">{title}</h3>
                <p className="text-sm text-[#4a4a42] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Adoption Contribution Tiers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex items-center gap-3 mb-4">
          <span className="block h-px w-8 bg-[#b8922a]" />
          <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Adoption Contributions</p>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a18] leading-tight max-w-2xl">The horse comes first.</h2>
        <p className="mt-6 text-[#4a4a42] leading-relaxed max-w-2xl">
          Adoption contributions at Hawkez Haven reflect the care, rehabilitation and preparation that has gone into each horse — not a market value. The tiers below are guidance, not a price list. Every horse and every prospective home is assessed individually. The right home matters more than the highest offer.
        </p>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {/* Green — Companion */}
          <div className="bg-white rounded-2xl p-8 border border-[#ddd4be]/50">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#4a7c59] shrink-0" />
              <span className="text-[0.65rem] tracking-[0.18em] uppercase font-medium text-[#4a7c59]">Green — Companion</span>
            </div>
            <p className="font-serif text-3xl text-[#1a1a18]">$450 – $700</p>
            <p className="mt-4 text-sm text-[#4a4a42] leading-relaxed">
              Strictly companion or non-ridden horses. This tier may include senior horses, horses with physical limitations, or horses whose individual circumstances make a non-ridden life appropriate.
            </p>
            <p className="mt-3 text-sm text-[#4a4a42] leading-relaxed font-medium">
              A lower adoption contribution does not mean lower care requirements, lower standards, or less commitment from the adopter. Companion horses deserve — and require — the same standard of care as any other horse.
            </p>
          </div>

          {/* Blue — Foundation */}
          <div className="bg-white rounded-2xl p-8 border border-[#ddd4be]/50">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#3a6b9e] shrink-0" />
              <span className="text-[0.65rem] tracking-[0.18em] uppercase font-medium text-[#3a6b9e]">Blue — Foundation</span>
            </div>
            <p className="font-serif text-3xl text-[#1a1a18]">$1,000 – $2,500</p>
            <p className="mt-4 text-sm text-[#4a4a42] leading-relaxed">
              Horses with basic foundations but requiring continued education, consistency, confidence-building or development. These horses require suitable homes with the experience, time and support necessary to continue their progress.
            </p>
          </div>

          {/* Gold — Performance */}
          <div className="bg-white rounded-2xl p-8 border border-[#ddd4be]/50">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#b8922a] shrink-0" />
              <span className="text-[0.65rem] tracking-[0.18em] uppercase font-medium text-[#b8922a]">Gold — Performance</span>
            </div>
            <p className="font-serif text-3xl text-[#1a1a18]">$3,000+</p>
            <p className="mt-4 text-sm text-[#4a4a42] leading-relaxed">
              More established horses with greater education, experience or demonstrated ability. The individual adoption contribution is determined according to the horse's education, experience, ability and circumstances.
            </p>
          </div>

          {/* Heart — Special Consideration */}
          <div className="bg-white rounded-2xl p-8 border border-[#ddd4be]/50">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#a05a6e] shrink-0" />
              <span className="text-[0.65rem] tracking-[0.18em] uppercase font-medium text-[#a05a6e]">Heart — Special Consideration</span>
            </div>
            <p className="font-serif text-3xl text-[#1a1a18]">Individually determined</p>
            <p className="mt-4 text-sm text-[#4a4a42] leading-relaxed">
              For horses whose placement does not fit neatly within a standard tier. This may include seniors, long-term rehabilitation cases, horses with ongoing management requirements, or placements where a particularly suitable match is required.
            </p>
            <p className="mt-3 text-sm text-[#4a4a42] leading-relaxed">
              Their adoption arrangements and contribution are determined individually according to the horse, their needs and the proposed home.
            </p>
          </div>
        </div>
        <p className="mt-8 text-sm text-[#4a4a42]/70 max-w-2xl leading-relaxed">
          Tier placement and contribution amounts are set by Hawkez Haven and may vary. All placements are subject to our full adoption process and individual assessment. If you have questions about a specific horse, please get in touch.
        </p>
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="block h-px w-8 bg-[#b8922a]" />
            <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Frequently Asked Questions</p>
          </div>
          <h2 className="font-serif text-4xl text-[#1a1a18] mb-10">Questions we are often asked.</h2>
          <div className="space-y-6">
            {[
              { q: "What experience do I need to adopt a horse?", a: "Due to the nature of our horses and their rehabilitation journeys, adopters must have an appropriate level of horse experience and a sound understanding of equine behaviour and body language.\n\nThe level of experience required will vary depending on the individual horse, but Hawkez Haven horses will not be placed into homes where the knowledge, confidence or support required to safely meet that horse's needs is not present.\n\nWe carefully consider the experience of the adopter, the intended rider or handler, the environment the horse will be living in, and the support available to them when making a match.\n\nThe right home is not simply someone who loves the horse. It is a home with the knowledge, understanding and ability to continue the work that horse has already begun.\n\nEvery placement is considered individually, with the horse's physical and mental wellbeing remaining our first priority." },
              { q: "Can I adopt a horse for a child or beginner rider?", a: "We do have horses that suit beginners and younger riders, but this is always assessed individually. The safety and wellbeing of both the horse and adopter is our priority." },
              { q: "What happens during a viewing visit?", a: "You'll come to Hawkez Haven and spend time getting to know the horse. This might include handling, groundwork, or riding depending on the horse and your experience. There's no pressure — it's about connection." },
              { q: "Is there an adoption fee?", a: "Yes, adoption fees apply and vary depending on the horse. Fees help cover a portion of the care, rehabilitation and preparation costs. Contact us for specific details." },
              { q: "What if the adoption does not work out?", a: "Our horses always have a home to come back to. We would rather a horse be returned to us than placed in an unsuitable situation. Our ongoing support is there to help make every adoption succeed." },
              { q: "Do you allow out-of-area adoptions?", a: "Yes. We consider suitable homes throughout New Zealand. Distance does not rule out the right home, but the same adoption standards apply regardless of location.\n\nAny prospective home must complete our adoption process and demonstrate that they can provide the experience, environment and ongoing care appropriate for that individual horse.\n\nTransport arrangements and costs are the responsibility of the adopter and must be suitable for the horse. Where distance prevents an in-person property visit, Hawkez Haven may request additional photographs, videos, references or other information to help us assess the proposed home.\n\nOur priority is finding the right home, not simply the closest one. Ongoing contact and updates remain part of the Hawkez Haven rehoming process regardless of where in New Zealand the horse goes." },
            ].map(({ q, a }) => (
              <div key={q} className="border-b border-[#ddd4be] pb-6">
                <h3 className="font-serif text-lg text-[#1a1a18] mb-2">{q}</h3>
                <p className="text-sm text-[#4a4a42] leading-relaxed whitespace-pre-line">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a1a18] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-[#f5f0e8]">The right horse is waiting for the right home.</h2>
          <p className="mt-4 text-[#f5f0e8]/70">Whether you are ready to adopt or simply curious about the process, we would love to hear from you.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/horses" className="inline-flex items-center gap-2 px-7 py-3 bg-[#b8922a] text-white text-sm font-medium rounded-full hover:bg-[#8c6e1e] transition-colors cursor-pointer">
              Browse our horses <ArrowRight size={16} />
            </Link>
            <Link to="/enquire/adoption" className="inline-flex items-center gap-2 px-7 py-3 border border-[#f5f0e8]/30 text-[#f5f0e8] text-sm font-medium rounded-full hover:bg-[#f5f0e8]/10 transition-colors cursor-pointer">
              Contact Hawkez Haven
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
