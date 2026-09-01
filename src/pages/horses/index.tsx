import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Heart } from "lucide-react";
import { HORSES } from "@/lib/horses";

export default function HorsesPage() {
  const residents = HORSES.filter(h => h.status === "Permanent Resident");
  const rehoming = HORSES.filter(h => h.status === "Future Rehoming Candidate");

  return (
    <div className="bg-[#f5f0e8]">
      {/* Hero Section */}
      <section className="bg-[#1a1a18] text-[#f5f0e8] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-[#b8922a]">
            <span className="block h-px w-8 bg-[#b8922a]" />
            <span className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Meet the horses</span>
          </div>
          <h1 className="mt-6 font-serif text-5xl md:text-6xl text-[#f5f0e8] leading-tight max-w-3xl">
            Every horse here has a name, a story and a person waiting somewhere.
          </h1>
          <p className="mt-6 text-lg text-[#f5f0e8]/70 max-w-2xl leading-relaxed">
            We currently care for {HORSES.length} horses at Hawkez Haven. Some are permanent residents who will always call this home. Others are working towards their forever families.
          </p>
        </div>
      </section>

      {/* Permanent Residents */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center gap-3 mb-10">
          <span className="block h-px w-8 bg-[#b8922a]" />
          <h2 className="text-[0.65rem] tracking-[0.18em] uppercase font-medium text-[#1a1a18]">Permanent Residents</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {residents.map(horse => (
            <HorseCard key={horse.id} horse={horse} />
          ))}
        </div>
      </section>

      {/* Future Rehoming Candidates */}
      <section className="bg-[#ede5d4] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="block h-px w-8 bg-[#b8922a]" />
            <h2 className="text-[0.65rem] tracking-[0.18em] uppercase font-medium text-[#1a1a18]">Future Rehoming Candidates</h2>
          </div>
          <p className="text-[#4a4a42] mb-10 max-w-xl">
            These horses are working through their rehabilitation and education journey. When the time is right, they will be looking for their forever home.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rehoming.map(horse => (
              <HorseCard key={horse.id} horse={horse} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a18] max-w-2xl mx-auto">
          Thinking about adoption or sponsorship?
        </h2>
        <p className="mt-4 text-[#4a4a42] max-w-lg mx-auto">
          Every connection starts with a conversation. We'd love to hear from you.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link 
            to="/adoption" 
            className="inline-flex items-center gap-2 px-7 py-3 bg-[#b8922a] text-white text-sm font-medium rounded-full hover:bg-[#8c6e1e] transition-colors cursor-pointer"
          >
            Adoption enquiry <ArrowRight size={16} />
          </Link>
          <Link 
            to="/sponsorship" 
            className="inline-flex items-center gap-2 px-7 py-3 border border-[#1a1a18] text-[#1a1a18] text-sm font-medium rounded-full hover:bg-[#1a1a18] hover:text-[#f5f0e8] transition-colors cursor-pointer"
          >
            Sponsor a horse
          </Link>
        </div>
      </section>
    </div>
  );
}

function HorseCard({ horse }: { horse: (typeof HORSES)[0] }) {
  return (
    <div className="bg-white rounded-2xl group overflow-hidden shadow-sm border border-[#ddd4be]/50 flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <div>
        <Link to={`/horses/${horse.id}`} className="block">
          <div className="relative overflow-hidden bg-[#1a1a18] aspect-[4/3] w-full flex items-center justify-center p-2">
            <img
              src={horse.id === "electra" ? "/images/Electric.jpg" : horse.image}
              alt={`${horse.name} at Hawkez Haven`}
              loading="lazy"
              className="max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-105"
            />
            
            <span 
              className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-[0.65rem] tracking-[0.18em] uppercase font-medium shadow-sm ${
                horse.status === "Permanent Resident" 
                  ? "bg-[#1a1a18]/90 text-[#b8922a] backdrop-blur-sm" 
                  : "bg-[#ede5d4]/90 text-[#1a1a18] backdrop-blur-sm"
              }`}
            >
              {horse.status}
            </span>

            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a18]/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
              <span className="w-full text-center py-2.5 px-4 bg-[#b8922a] text-white text-xs tracking-wider uppercase font-semibold rounded-xl shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2">
                Read My Journey <ArrowUpRight size={14} />
              </span>
            </div>
          </div>
        </Link>

        <div className="p-6 pb-2">
          <div className="flex items-start justify-between gap-4">
            <Link to={`/horses/${horse.id}`}>
              <h3 className="font-serif text-2xl leading-tight text-[#1a1a18] hover:text-[#8c6e1e] transition-colors">
                {horse.name}
              </h3>
            </Link>
            <Link 
              to={`/horses/${horse.id}`}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#ddd4be] text-[#1a1a18] hover:bg-[#b8922a] hover:border-[#b8922a] hover:text-white transition-all duration-300"
            >
              <ArrowUpRight size={14} />
            </Link>
          </div>
          <p className="mt-2 text-xs text-[#b8922a] font-medium italic">
            {horse.tagline}
          </p>
          <p className="mt-3 text-sm text-[#4a4a42] leading-relaxed line-clamp-2">
            {horse.description}
          </p>
        </div>
      </div>

      <div className="p-6 pt-3">
        <Link
          to={`/sponsorship?horse=${encodeURIComponent(horse.name)}`}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#b8922a] text-white text-xs font-medium rounded-full hover:bg-[#8c6e1e] transition-colors w-full cursor-pointer shadow-sm"
        >
          <Heart size={14} /> Sponsor {horse.name}
        </Link>
      </div>
    </div>
  );
}
