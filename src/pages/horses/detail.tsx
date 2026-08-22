import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Heart } from "lucide-react";
import { HORSES } from "@/lib/horses.ts";
import NotFound from "@/pages/NotFound.tsx";

export default function HorseDetailPage() {
  const { id } = useParams<{ id: string }>();
  const horse = HORSES.find(h => h.id === id);
  if (!horse) return <NotFound />;

  const others = HORSES.filter(h => h.id !== horse.id).slice(0, 3);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    "name": `${horse.name} | Hawkez Haven Horse Rescue New Zealand`,
    "url": `https://hawkezhaven.org/horses/${horse.id}`,
    "description": horse.description,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Hawkez Haven",
      "url": "https://hawkezhaven.org/"
    },
    "mainEntity": {
      "@type": "Thing",
      "name": horse.name,
      "description": horse.description,
      "image": `https://hawkezhaven.org${horse.image}`
    }
  };

  return (
    <div className="bg-[#f5f0e8]">
      {/* Structured Data for SEO / Search Console */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Back */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <Link to="/horses" className="inline-flex items-center gap-2 text-sm text-[#4a4a42] hover:text-[#b8922a] transition-colors cursor-pointer">
          <ArrowLeft size={16} /> All horses
        </Link>
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <img src={horse.image} alt={horse.name} width={1200} height={900} className="w-full rounded-3xl object-cover aspect-[4/3]" />
            <span className={`absolute top-5 left-5 px-4 py-1.5 rounded-full text-[0.65rem] tracking-[0.18em] uppercase font-medium ${horse.status === "Permanent Resident" ? "bg-[#1a1a18] text-[#b8922a]" : "bg-[#ede5d4] text-[#1a1a18]"}`}>
              {horse.status}
            </span>
          </div>
          <div className="lg:pt-4">
            <p className="text-xs text-[#b8922a] tracking-[0.14em] uppercase font-medium">
              {horse.sex} · {horse.breed} · Journey Began {horse.journeyBegan}
            </p>
            <h1 className="mt-3 font-serif text-5xl md:text-6xl text-[#1a1a18] leading-tight">{horse.name}</h1>
            <p className="mt-3 font-serif italic text-xl text-[#b8922a]">{horse.tagline}</p>

            <p className="mt-5 text-sm text-[#4a4a42] leading-relaxed">{horse.description}</p>

            {/* Disciplines */}
            {horse.disciplines && horse.disciplines.length > 0 && (
              <div className="mt-5">
                <p className="text-[0.6rem] tracking-widest uppercase text-[#4a4a42]/60 mb-2">Disciplines</p>
                <div className="flex flex-wrap gap-2">
                  {horse.disciplines.map(d => (
                    <span key={d} className="px-3 py-1 bg-[#ede5d4] text-[#1a1a18] text-xs rounded-full">{d}</span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-7 flex flex-wrap gap-3">
              {horse.status === "Permanent Resident" ? (
                <>
                  <Link to="/sponsorship" className="inline-flex items-center gap-2 px-7 py-3 bg-[#b8922a] text-white text-sm font-medium rounded-full hover:bg-[#8c6e1e] transition-colors cursor-pointer">
                    <Heart size={16} /> Sponsor {horse.name}
                  </Link>
                  <a href="#my-journey" className="inline-flex items-center gap-2 px-7 py-3 border border-[#1a1a18] text-[#1a1a18] text-sm font-medium rounded-full hover:bg-[#1a1a18] hover:text-[#f5f0e8] transition-colors cursor-pointer">
                    Meet {horse.name}'s Story
                  </a>
                </>
              ) : (
                <Link to="/enquire/adoption" className="inline-flex items-center gap-2 px-7 py-3 bg-[#b8922a] text-white text-sm font-medium rounded-full hover:bg-[#8c6e1e] transition-colors cursor-pointer">
                  Enquire about {horse.name} <ArrowRight size={16} />
                </Link>
              )}
              {horse.status !== "Permanent Resident" && (
                <Link to="/support" className="inline-flex items-center gap-2 px-7 py-3 border border-[#1a1a18] text-[#1a1a18] text-sm font-medium rounded-full hover:bg-[#1a1a18] hover:text-[#f5f0e8] transition-colors cursor-pointer">
                  Support Hawkez Haven
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Horse Details */}
      <section className="bg-[#ede5d4] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="block h-px w-8 bg-[#b8922a]" />
            <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium text-[#1a1a18]">Horse Details</p>
          </div>
          <h2 className="font-serif text-3xl text-[#1a1a18] mb-10">The practical things worth knowing.</h2>
          <dl className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: "Height", value: horse.height },
              { label: "Colour", value: horse.colour },
              { label: "Age", value: horse.age },
              { label: "Sex", value: horse.sex },
              { label: "Status", value: horse.status },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white rounded-2xl p-6 border border-[#ddd4be]/50">
                <dt className="text-[0.6rem] tracking-widest uppercase text-[#4a4a42]/60 mb-2">{label}</dt>
                <dd className="font-serif text-xl text-[#1a1a18]">{value}</dd>
              </div>
            ))}
            <div className="bg-white rounded-2xl p-6 border border-[#ddd4be]/50 sm:col-span-2 lg:col-span-1">
              <dt className="text-[0.6rem] tracking-widest uppercase text-[#4a4a42]/60 mb-2">Rider Level</dt>
              <dd className="text-sm text-[#4a4a42] leading-relaxed">{horse.riderLevel}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* My Journey */}
      <section id="my-journey" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center gap-3 mb-8">
          <span className="block h-px w-8 bg-[#b8922a]" />
          <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium text-[#1a1a18]">My Journey</p>
        </div>
        <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a18] mb-10">{horse.storyTitle}</h2>
        <div className="max-w-3xl space-y-5 text-[#4a4a42] leading-relaxed text-[0.95rem]">
          {horse.fullStory.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>

      {/* Looking Forward */}
      <section className="bg-[#1a1a18] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="block h-px w-8 bg-[#b8922a]" />
            <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium text-[#b8922a]">Looking Forward</p>
          </div>
          <h2 className="font-serif text-3xl text-[#f5f0e8] mb-4">Looking forward.</h2>
          <p className="text-[#f5f0e8]/70 max-w-2xl leading-relaxed">{horse.lookingForward}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {horse.status === "Permanent Resident" ? (
              <Link to="/sponsorship" className="inline-flex items-center gap-2 px-7 py-3 bg-[#b8922a] text-white text-sm font-medium rounded-full hover:bg-[#8c6e1e] transition-colors cursor-pointer">
                <Heart size={16} /> Sponsor {horse.name}
              </Link>
            ) : (
              <Link to="/enquire/adoption" className="inline-flex items-center gap-2 px-7 py-3 bg-[#b8922a] text-white text-sm font-medium rounded-full hover:bg-[#8c6e1e] transition-colors cursor-pointer">
                Enquire about adoption <ArrowRight size={16} />
              </Link>
            )}
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3 border border-[#f5f0e8]/20 text-[#f5f0e8] text-sm font-medium rounded-full hover:bg-white/10 transition-colors cursor-pointer">
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* Other horses */}
      <section className="bg-[#ede5d4] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-10">
            <h2 className="font-serif text-3xl text-[#1a1a18]">More horses to meet</h2>
            <Link to="/horses" className="inline-flex items-center gap-2 text-sm text-[#4a4a42] hover:text-[#b8922a] transition-colors cursor-pointer">
              All horses <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map(h => (
              <Link key={h.id} to={`/horses/${h.id}`} className="bg-white rounded-2xl group block overflow-hidden shadow-sm border border-[#ddd4be]/50 cursor-pointer">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={h.image} alt={h.name} width={1200} height={900} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[0.65rem] tracking-[0.18em] uppercase font-medium ${h.status === "Permanent Resident" ? "bg-[#1a1a18] text-[#b8922a]" : "bg-[#ede5d4] text-[#1a1a18]"}`}>
                    {h.status}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl text-[#1a1a18]">{h.name}</h3>
                  <p className="mt-0.5 text-xs text-[#4a4a42]/70">{h.height} · {h.age}</p>
                  <p className="mt-1 text-xs italic text-[#b8922a]">{h.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
