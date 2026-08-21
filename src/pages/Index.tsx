import { Link } from "react-router-dom";
import { ArrowRight, Heart, Sprout, GraduationCap, HandHeart, ArrowUpRight, Quote } from "lucide-react";
import { HORSES } from "@/lib/horses";

const PREVIEW_HORSES = HORSES.slice(0, 4);
const SPONSOR_HORSES = HORSES.filter(h => h.status === "Permanent Resident").slice(0, 4);

export default function Index() {
  return (
    <div className="bg-[#f5f0e8]">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden bg-[#1a1a18]">
        <img
          src="https://hercules-cdn.com/file_lrJQml96WQlUGWerpWilHhr5"
          alt="A rescued chestnut horse standing in a New Zealand paddock at golden hour"
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a18] via-[#1a1a18]/60 to-[#1a1a18]/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a18]/60 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-40 md:pb-28 md:pt-48 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-[#b8922a]">
              <span className="block h-px w-8 bg-[#b8922a]" />
              <span className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">
                Aotearoa · Equine Rescue &amp; Rehabilitation
              </span>
            </div>

            <h1 className="mt-6 font-serif text-[#f5f0e8] text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.02] text-balance">
              Where Second Chances<br />
              <span className="italic text-[#b8922a]">Find Their Stride</span>
            </h1>

            <p className="mt-6 font-serif italic text-2xl md:text-3xl text-[#b8922a]">
              Connection Before Correction.
            </p>

            <p className="mt-6 max-w-xl text-lg text-[#f5f0e8]/80 leading-relaxed">
              Every horse deserves the chance to heal, trust again and find the home they were always meant to have.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/horses"
                className="inline-flex items-center gap-2 px-7 py-3 bg-[#b8922a] text-white text-sm font-medium rounded-full hover:bg-[#8c6e1e] transition-colors cursor-pointer"
              >
                Meet Our Horses <ArrowRight size={16} />
              </Link>
              <Link
                to="/support"
                className="inline-flex items-center gap-2 px-7 py-3 border border-[#f5f0e8]/30 text-[#f5f0e8] text-sm font-medium rounded-full hover:bg-[#f5f0e8]/10 transition-colors cursor-pointer"
              >
                Support Hawkez Haven
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-[#f5f0e8]/10 bg-[#1a1a18]/50 backdrop-blur-sm z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
            {[
              { value: "10", label: "Horses currently in care" },
              { value: "100%", label: "Committed to welfare" },
              { value: "Connection", label: "Before correction" },
              { value: "Second Chances", label: "Every day" },
            ].map(({ value, label }) => (
              <div key={label} className="text-[#f5f0e8]">
                <div className="font-serif text-3xl text-[#b8922a]">{value}</div>
                <div className="mt-1 text-xs tracking-wider uppercase text-[#f5f0e8]/60">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Do ───────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20 items-start">
          <div>
            <div className="flex items-center gap-3 text-[0.65rem] tracking-[0.18em] uppercase font-medium">
              <span className="block h-px w-8 bg-[#b8922a]" />
              What we do
            </div>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight text-[#1a1a18]">
              A place built on patience, trust and second chances.
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-[#4a4a42] md:pt-3">
            Hawkez Haven is an equine rescue, rehabilitation and rehoming service in New Zealand,
            built on one simple belief: every horse deserves to be understood. We take in horses
            through owner surrender, off-the-track rehabilitation, and from situations where their
            owners are no longer able to provide ongoing care. Every horse is given the time, space
            and support they need to heal and move forward. Rehabilitation here is not about rushing
            a horse to fit a timeline. It is about trust, connection and meeting each horse where
            they are. We believe in Connection Before Correction, because a horse who feels safe
            will try far more willingly than one who is simply told what to do.
          </p>
        </div>

        {/* 4 pillars */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Heart size={20} />,
              title: "Rescue",
              desc: "Emergency intake, veterinary triage and a safe soft landing.",
            },
            {
              icon: <Sprout size={20} />,
              title: "Rehabilitation",
              desc: "Nutrition, farrier, bodywork and unhurried retraining.",
            },
            {
              icon: <GraduationCap size={20} />,
              title: "Education",
              desc: "Horsemanship lessons and clinics for all ages.",
            },
            {
              icon: <HandHeart size={20} />,
              title: "Rehoming",
              desc: "Careful matching of horse and human, for life.",
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-white rounded-2xl p-8 shadow-sm border border-[#ddd4be]/50">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[#f0e4c4] text-[#8c6e1e]">
                {icon}
              </span>
              <h3 className="mt-6 font-serif text-2xl text-[#1a1a18]">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#4a4a42]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Meet the Horses preview ───────────────────────── */}
      <section className="bg-[#ede5d4] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 text-[0.65rem] tracking-[0.18em] uppercase font-medium">
                <span className="block h-px w-8 bg-[#b8922a]" />
                Meet the horses
              </div>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight text-[#1a1a18]">
                Come and meet them.
              </h2>
              <p className="mt-4 text-[#4a4a42]">Every horse here has a name, a story and a person waiting somewhere.</p>
            </div>
            <Link
              to="/horses"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#1a1a18] text-[#1a1a18] text-xs font-medium rounded-full hover:bg-[#1a1a18] hover:text-[#f5f0e8] transition-colors cursor-pointer"
            >
              See all horses <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PREVIEW_HORSES.map(horse => (
              <Link
                key={horse.id}
                to={`/horses/${horse.id}`}
                className="bg-white rounded-2xl group block overflow-hidden shadow-sm border border-[#ddd4be]/50 cursor-pointer transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#ede5d4]">
                  <img
                    src={horse.image}
                    alt={`${horse.name} at Hawkez Haven`}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-[0.65rem] tracking-[0.18em] uppercase font-medium shadow-sm ${
                    horse.status === "Permanent Resident"
                      ? "bg-[#1a1a18]/90 text-[#b8922a] backdrop-blur-sm"
                      : "bg-[#ede5d4]/90 text-[#1a1a18] backdrop-blur-sm"
                  }`}>
                    {horse.status}
                  </span>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a18]/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="w-full text-center py-2 px-3 bg-[#b8922a] text-white text-[0.7rem] tracking-wider uppercase font-semibold rounded-lg shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-1.5">
                      Read My Journey <ArrowUpRight size={13} />
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-serif text-xl leading-tight truncate min-w-0 text-[#1a1a18] group-hover:text-[#8c6e1e] transition-colors">
                      {horse.name}
                    </h3>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[#ddd4be] text-[#1a1a18] group-hover:bg-[#b8922a] group-hover:border-[#b8922a] group-hover:text-white transition-all duration-300">
                      <ArrowUpRight size={13} />
                    </span>
                  </div>
                  <p className="mt-2.5 text-xs text-[#4a4a42] leading-relaxed line-clamp-2">{horse.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Success Stories ───────────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <img
              src="/images/saphira-khan.jpg"
              alt="Saphira with Khan at Hawkez Haven"
              loading="lazy"
              className="w-full rounded-3xl object-cover aspect-[4/3]"
            />
            <div className="hidden md:block absolute -bottom-6 -right-6 bg-[#1a1a18] text-[#f5f0e8] rounded-2xl p-6 max-w-xs shadow-xl border border-[#b8922a]/20">
              <Quote size={20} className="text-[#b8922a]" />
              <p className="mt-3 text-sm leading-relaxed">
                "Trust isn't something we teach. It's something a horse chooses to give back when they finally feel safe."
              </p>
              <p className="mt-3 text-xs text-[#f5f0e8]/60">— Heather &amp; Saphira</p>
              <p className="mt-1 text-xs text-[#f5f0e8]/60">Hawkez Haven • Second Chances</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 text-[0.65rem] tracking-[0.18em] uppercase font-medium">
              <span className="block h-px w-8 bg-[#b8922a]" />
              Rehabilitation Milestones
            </div>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight text-[#1a1a18]">
              The Breakthroughs That Matter Most
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#4a4a42]">
              In under a year of dedication, Hawkez Haven has welcomed 10 rescues through our gates. Every horse arrived with a unique past—facing health setbacks, uncertainty, or a need for patient re-handling.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#4a4a42]">
              Today, <strong className="text-[#1a1a18] font-semibold">100% of these rescues</strong> have made profound breakthroughs: regaining healthy body condition, mastering calm groundwork, and rediscovering trust in human hands.
            </p>

            {/* Adoption Intake Notice Box */}
            <div className="mt-8 rounded-2xl bg-[#ede5d4]/70 p-6 border border-[#ddd4be]">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8c6e1e]">
                <span className="h-2 w-2 rounded-full bg-[#b8922a] animate-pulse" />
                Adoption Intake Notice
              </div>
              <h3 className="mt-2 font-serif text-xl text-[#1a1a18]">
                First Intake Opening Late Spring / Summer
              </h3>
              <p className="mt-2 text-sm text-[#4a4a42] leading-relaxed">
                Our rehabilitation candidates are currently finishing their groundwork and trust education. Applications for our very first intake of ready-to-rehome horses will officially open as the warmer weather arrives.
              </p>
              <div className="mt-4">
                <Link
                  to="/horses"
                  className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-[#8c6e1e] hover:text-[#b8922a] transition-colors"
                >
                  View candidates in education <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── Adoption CTA banner ───────────────────────────── */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <img
          src="/images/pasture.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1a1a18]/70" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center text-[#f5f0e8]">
          <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium text-[#b8922a]">Why adoption matters</p>
          <p className="mt-8 font-serif text-3xl md:text-5xl leading-[1.15] italic">
            "In New Zealand, hundreds of horses each year lose their homes to circumstance. Every horse you adopt makes room for the next one who needs us."
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/adoption"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#b8922a] text-white text-sm font-medium rounded-full hover:bg-[#8c6e1e] transition-colors cursor-pointer"
            >
              Start an adoption enquiry
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-7 py-3 border border-[#f5f0e8]/30 text-[#f5f0e8] text-sm font-medium rounded-full hover:bg-[#f5f0e8]/10 transition-colors cursor-pointer"
            >
              Our approach
            </Link>
          </div>
        </div>
      </section>

      {/* ── Ways to Help ─────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 text-[0.65rem] tracking-[0.18em] uppercase font-medium">
            <span className="block h-px w-8 bg-[#b8922a]" />
            Ways to help
            <span className="block h-px w-8 bg-[#b8922a]" />
          </div>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-[#1a1a18]">
            You don't have to own a horse to change one's life.
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Sponsor a horse",
              desc: "From $50/month you cover feed, farrier and vet for a horse in our care.",
              cta: "Sponsor",
              href: "/sponsorship",
            },
            {
              title: "Volunteer with us",
              desc: "Weekend working bees, mucking out and mentor roles.",
              cta: "Apply",
              href: "/volunteer",
            },
            {
              title: "Give a one-off gift",
              desc: "Every dollar goes straight into hay, hoof care and rehabilitation.",
              cta: "Donate",
              href: "/support",
            },
          ].map(({ title, desc, cta, href }) => (
            <div key={title} className="bg-white rounded-2xl p-8 flex flex-col shadow-sm border border-[#ddd4be]/50">
              <h3 className="font-serif text-2xl text-[#1a1a18]">{title}</h3>
              <p className="mt-3 text-sm text-[#4a4a42] leading-relaxed flex-1">{desc}</p>
              <Link
                to={href}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#1a1a18] text-[#1a1a18] text-xs font-medium rounded-full hover:bg-[#1a1a18] hover:text-[#f5f0e8] transition-colors mt-6 self-start cursor-pointer"
              >
                {cta} <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── Sponsor a horse (dark) ───────────────────────── */}
      <section className="bg-[#1a1a18] text-[#f5f0e8] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_1.2fr] gap-14 items-center">
          <div>
            <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium text-[#b8922a]">Sponsor a horse</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-[#f5f0e8]">
              Be someone's person, from anywhere in the country.
            </h2>
            <p className="mt-6 text-[#f5f0e8]/70 leading-relaxed">
              Sponsorship keeps our resident horses — the ones who will never be rehomed — safe, fed and cared for.
              You'll receive updates, photos and an open invitation to visit your horse whenever you're near.
            </p>
            <Link
              to="/sponsorship"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#b8922a] text-white text-sm font-medium rounded-full hover:bg-[#8c6e1e] transition-colors mt-8 cursor-pointer"
            >
              Choose a horse to sponsor
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {SPONSOR_HORSES.map(horse => (
              <Link
                key={horse.id}
                to={`/horses/${horse.id}`}
                className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer"
              >
                <img
                  src={horse.image}
                  alt={horse.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a18] to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="font-serif text-xl text-[#f5f0e8]">{horse.name}</div>
                  <div className="text-xs text-[#f5f0e8]/60">Permanent Resident</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="rounded-3xl bg-gradient-to-br from-[#f0e4c4] via-[#ede5d4] to-[#f5f0e8] p-12 md:p-20 text-center relative overflow-hidden">
          <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium text-[#8c6e1e]">Ready when you are</p>
          <h2 className="mt-4 font-serif text-4xl md:text-6xl max-w-3xl mx-auto leading-tight text-[#1a1a18]">
            Come and meet the horse who's been waiting for you.
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/horses"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#b8922a] text-white text-sm font-medium rounded-full hover:bg-[#8c6e1e] transition-colors cursor-pointer"
            >
              Meet Our Horses
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 border border-[#1a1a18] text-[#1a1a18] text-sm font-medium rounded-full hover:bg-[#1a1a18] hover:text-[#f5f0e8] transition-colors cursor-pointer"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
