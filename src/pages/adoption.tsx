{/* Adoption Contribution Tiers */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
  <div className="flex items-center gap-3 mb-4">
    <span className="block h-px w-8 bg-[#b8922a]" />
    <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Adoption Contributions</p>
  </div>
  <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a18] leading-tight max-w-2xl">
    The horse comes first.
  </h2>
  
  <div className="mt-6 text-[#4a4a42] leading-relaxed max-w-3xl space-y-3 text-sm md:text-base">
    <p>
      Adoption contributions at Hawkez Haven reflect the veterinary care, rehabilitation, feed, and training invested into each horse — never a commercial market price. We do not sell horses for profit.
    </p>
    <div className="bg-[#ede5d4]/60 rounded-xl p-5 border border-[#ddd4be] space-y-2">
      <p>
        <strong className="text-[#1a1a18]">Guideline Ranges (Not Fixed Price Tags):</strong> Each horse is assigned a tier based on their education, soundness, and rehabilitation progress. These figures are guidance brackets — approved applicants are invited to nominate what they are comfortable contributing within that tier.
      </p>
      <p>
        <strong className="text-[#1a1a18]">Welfare First (Never the Highest Bidder):</strong> If multiple approved applications are received for the same horse, <strong className="text-[#1a1a18]">adoption is NEVER decided by who offers the highest amount.</strong> Placement is decided entirely on who provides the best, safest, and most compatible long-term home for that horse's future and wellbeing.
      </p>
    </div>
  </div>

  <div className="mt-12 grid md:grid-cols-2 gap-6">
    {/* Green — Companion */}
    <div className="bg-white rounded-2xl p-8 border border-[#ddd4be]/50 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#4a7c59] shrink-0" />
          <span className="text-[0.65rem] tracking-[0.18em] uppercase font-medium text-[#4a7c59]">Green — Companion</span>
        </div>
        <p className="font-serif text-3xl text-[#1a1a18]">$450 – $700</p>
        <p className="mt-4 text-sm text-[#4a4a42] leading-relaxed">
          Strictly companion or non-ridden horses. This tier may include senior horses, horses with physical limitations, or horses whose individual circumstances make a non-ridden life appropriate.
        </p>
      </div>
      <p className="mt-4 text-xs text-[#4a4a42] leading-relaxed font-medium bg-[#f5f0e8] p-3 rounded-lg border border-[#ddd4be]/40">
        A lower adoption contribution does not mean lower care requirements, lower standards, or less commitment from the adopter. Companion horses deserve — and require — the same standard of care as any other horse.
      </p>
    </div>

    {/* Blue — Foundation */}
    <div className="bg-white rounded-2xl p-8 border border-[#ddd4be]/50 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#3a6b9e] shrink-0" />
        <span className="text-[0.65rem] tracking-[0.18em] uppercase font-medium text-[#3a6b9e]">Blue — Foundation</span>
      </div>
      <p className="font-serif text-3xl text-[#1a1a18]">$1,000 – $2,500</p>
      <p className="mt-4 text-sm text-[#4a4a42] leading-relaxed">
        Horses with basic foundations but requiring continued education, consistency, confidence-building, or development. These horses require suitable homes with the experience, time, and support necessary to continue their progress.
      </p>
    </div>

    {/* Gold — Performance */}
    <div className="bg-white rounded-2xl p-8 border border-[#ddd4be]/50 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#b8922a] shrink-0" />
        <span className="text-[0.65rem] tracking-[0.18em] uppercase font-medium text-[#b8922a]">Gold — Performance</span>
      </div>
      <p className="font-serif text-3xl text-[#1a1a18]">$3,000+</p>
      <p className="mt-4 text-sm text-[#4a4a42] leading-relaxed">
        More established horses with greater education, experience, or demonstrated ability. The individual adoption contribution is determined according to the horse's education, experience, ability, and circumstances.
      </p>
    </div>

    {/* Heart — Special Consideration */}
    <div className="bg-white rounded-2xl p-8 border border-[#ddd4be]/50 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#a05a6e] shrink-0" />
        <span className="text-[0.65rem] tracking-[0.18em] uppercase font-medium text-[#a05a6e]">Heart — Special Consideration</span>
      </div>
      <p className="font-serif text-3xl text-[#1a1a18]">Individually determined</p>
      <p className="mt-4 text-sm text-[#4a4a42] leading-relaxed">
        For horses whose placement does not fit neatly within a standard tier. This may include seniors, long-term rehabilitation cases, horses with ongoing management requirements, or placements where a particularly suitable match is required.
      </p>
      <p className="mt-3 text-sm text-[#4a4a42] leading-relaxed">
        Their adoption arrangements and contribution are determined individually according to the horse, their needs, and the proposed home.
      </p>
    </div>
  </div>

  <p className="mt-8 text-xs text-[#4a4a42]/70 max-w-2xl leading-relaxed italic">
    Tier placement and contribution amounts are set by Hawkez Haven and may vary. All placements are subject to our full adoption process and individual assessment. If you have questions about a specific horse, please get in touch.
  </p>
</section>
