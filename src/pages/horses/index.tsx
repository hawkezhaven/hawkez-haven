import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { HORSES } from "@/lib/horses.ts";

export default function HorsesPage() {
  const residents = HORSES.filter(h => h.status === "Permanent Resident");
  const rehoming = HORSES.filter(h => h.status === "Future Rehoming Candidate");

  return (
    <div className="bg-[#f5f0e8]">
      <section className="bg-[#1a1a18] text-[#f5f0e8] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-[#b8922a]">
            <span className="block h-px w-8 bg-[#b8922a]" />
            <span className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Meet the horses</span>
          </div>
          <h1 className="mt-6 font-serif text-5xl md:text-6xl text-[#f5f0e8] leading-tight max-w-3xl">Every horse here has a name, a story and a person waiting somewhere.</h1>
          <p className="mt-6 text-lg text-[#f5f0e8]/70 max-w-2xl leading-relaxed">We currently care for {HORSES.length} horses at Hawkez Haven. Some are permanent residents who will always call this home. Others are working towards their forever families.</p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center gap-3 mb-10"><span className="block h-px w-8 bg-[#b8922a]" /><h2 className="text-[0.65rem] tracking-[0.18em] uppercase font-medium text-[#1a1a18]">Permanent Residents</h2></div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{residents.map(horse => <HorseCard key={horse.id} horse={horse} />)}</div>
      </section>
      <section className="bg-[#ede5d4] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4"><span className="block h-px w-8 bg-[#b8922a]" /><h2 className="text-[0.65rem] tracking-[0.18em] uppercase font-medium text-[#1a1a18]">Future Rehoming Candidates</h2></div>
          <p className="text-[#4a4a42] mb-10 max-w-xl">These horses are working through their rehabilitation and education journey. When the time is right, they will be looking for their forever home.</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{rehoming.map(horse => <HorseCard key={horse.id} horse={horse} />)}</div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a18] max-w-2xl mx-auto">Thinking about adoption or sponsorship?</h2>
        <p className="mt-4 text-[#4a4a42] max-w-lg mx-auto">Every connection starts with a conversation. We'd love to hear from you.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/adoption" className="inline-flex items-center gap-2 px-7 py-3 bg-[#b8922a] text-white text-sm font-medium rounded-full hover:bg-[#8c6e1e] transition-colors cursor-pointer">Adoption enquiry <ArrowRight size={16} /></Link>
          <Link to="/sponsorship" className="inline-flex items-center gap-2 px-7 py-3 border border-[#1a1a18] text-[#1a1a18] text-sm font-medium rounded-full hover:bg-[#1a1a18] hover:text-[#f5f0e8] transition-colors cursor-pointer">Sponsor a horse</Link>
        </div>
      </section>
    </div>
  );
}

function HorseCard({ horse }: { horse: (typeof HORSES)[0] }) {
  return (
    <Link to={`/horses/${horse.id}`} className="bg-white rounded-2xl group block overflow-hidden shadow-sm border border-[#ddd4be]/50 cursor-pointer">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#ede5d4]">
        <img src={horse.image} alt={horse.name} width={1200} height={900} loading="lazy" className="h-full w-full object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-105" />
        <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[0.65rem] tracking-[0.18em] uppercase font-medium ${horse.status === "Permanent Resident" ? "bg-[#1a1a18] text-[#b8922a]" : "bg-[#ede5d4] text-[#1a1a18]"}`}>{horse.status}</span>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4"><h3 className="font-serif text-2xl leading-tight text-[#1a1a18]">{horse.name}</h3><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#ddd4be] text-[#1a1a18] group-hover:bg-[#b8922a] group-hover:border-[#b8922a] group-hover:text-white transition-colors"><ArrowUpRight size={14} /></span></div>
        <p className="mt-2 text-xs text-[#b8922a] font-medium italic">{horse.tagline}</p>
        <p className="mt-3 text-sm text-[#4a4a42] leading-relaxed line-clamp-2">{horse.description}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-[#8c6e1e] group-hover:text-[#b8922a] font-medium">Read My Journey <ArrowUpRight size={12} /></span>
      </div>
    </Link>
  );
}
