import { Link } from "react-router-dom";
import { ArrowRight, Gift, Newspaper, CalendarDays, Heart, MapPin, BookOpen } from "lucide-react";

export default function HubPage() {
  return (
    <div className="bg-[#f5f0e8] text-[#1a1a18]">
      {/* Header */}
      <section className="bg-[#1a1a18] text-[#f5f0e8] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-[#b8922a]">
            <span className="block h-px w-8 bg-[#b8922a]" />
            <span className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">The Hub</span>
          </div>
          <h1 className="mt-6 font-serif text-5xl md:text-6xl leading-tight max-w-3xl">
            What’s happening at Hawkez Haven.
          </h1>
          <p className="mt-6 text-lg text-[#f5f0e8]/70 max-w-2xl leading-relaxed">
            The Hub is the living noticeboard of Hawkez Haven — a place for news, horse updates, upcoming experiences and the stories that continue after a horse finds their next chapter.
          </p>
        </div>
      </section>

      {/* Latest / News */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center gap-3 mb-4">
          <span className="block h-px w-8 bg-[#b8922a]" />
          <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Latest from the Haven</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <article className="bg-white rounded-3xl p-7 border border-[#ddd4be]/60 shadow-sm">
            <Newspaper className="text-[#b8922a] mb-5" size={34} strokeWidth={1.5} />
            <h2 className="font-serif text-2xl">News &amp; Updates</h2>
            <p className="mt-3 text-sm text-[#4a4a42] leading-relaxed">
              Rescue news, important announcements and the everyday happenings that make up life at Hawkez Haven.
            </p>
            <span className="mt-5 inline-flex text-xs uppercase tracking-[.12em] text-[#8c6e1e]">Updates coming here</span>
          </article>

          <article className="bg-white rounded-3xl p-7 border border-[#ddd4be]/60 shadow-sm">
            <Heart className="text-[#b8922a] mb-5" size={34} strokeWidth={1.5} />
            <h2 className="font-serif text-2xl">Horse Updates</h2>
            <p className="mt-3 text-sm text-[#4a4a42] leading-relaxed">
              Follow horses as they arrive, heal, learn, grow and move into whatever their next chapter looks like.
            </p>
            <span className="mt-5 inline-flex text-xs uppercase tracking-[.12em] text-[#8c6e1e]">New stories added here</span>
          </article>

          <article className="bg-white rounded-3xl p-7 border border-[#ddd4be]/60 shadow-sm">
            <CalendarDays className="text-[#b8922a] mb-5" size={34} strokeWidth={1.5} />
            <h2 className="font-serif text-2xl">What’s Coming Up</h2>
            <p className="mt-3 text-sm text-[#4a4a42] leading-relaxed">
              Upcoming horse experiences, education opportunities and genuine Hawkez Haven happenings.
            </p>
            <span className="mt-5 inline-flex text-xs uppercase tracking-[.12em] text-[#8c6e1e]">Coming soon</span>
          </article>
        </div>
      </section>

      {/* Horse Adoption NZ Hub article */}
      <section className="bg-[#ede5d4] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2rem] overflow-hidden border border-[#ddd4be]/60 shadow-sm grid lg:grid-cols-[1.1fr_.9fr]">
            <div className="min-h-[320px] bg-[#1a1a18]">
              <img
                src="/images/hero_image_hub.png"
                alt="Rescue horse at Hawkez Haven – Second Chances in New Zealand"
                className="h-full w-full object-cover"
                onError={(event) => {
                  event.currentTarget.src = "/images/hero-horse.jpg";
                }}
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <BookOpen className="text-[#b8922a] mb-5" size={34} strokeWidth={1.5} />
              <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium text-[#8c6e1e]">Hawkez Haven Guide</p>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl">Horse Adoption NZ: How to Adopt a Rescue Horse in New Zealand</h2>
              <p className="mt-4 text-[#4a4a42] leading-relaxed">
                Thinking about adopting a rescue horse? Learn how the process works, what to prepare, the ongoing costs and welfare responsibilities, and how to find the right match.
              </p>
              <Link to="/hub/horse-adoption-nz" className="mt-7 inline-flex w-fit items-center gap-2 px-6 py-3 bg-[#b8922a] text-white text-sm font-medium rounded-full hover:bg-[#8c6e1e] transition-colors">
                Read the Horse Adoption Guide <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Horse rescue reality article */}
      <section className="bg-[#f5f0e8] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1a1a18] text-[#f5f0e8] rounded-[2rem] overflow-hidden grid lg:grid-cols-[.9fr_1.1fr]">
            <div className="min-h-[320px]">
              <img
                src="/images/hero_image_hub.png"
                alt="Rescue horse at Hawkez Haven – Second Chances in New Zealand"
                className="h-full w-full object-cover"
                onError={(event) => {
                  event.currentTarget.src = "/images/hero-horse.jpg";
                }}
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium text-[#b8922a]">Hawkez Haven Information Hub</p>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl">Behind the Gates of Hawkez Haven: The Raw Reality of Horse Rescue</h2>
              <p className="mt-4 text-[#f5f0e8]/75 leading-relaxed">
                Horse rescue is far more than a paddock full of horses. Learn what happens behind the gates — the costs, the responsibility, the consequences of irresponsible rehoming and what a genuine second chance can require.
              </p>
              <Link to="/hub/behind-the-gates-horse-rescue" className="mt-7 inline-flex w-fit items-center gap-2 px-6 py-3 bg-[#b8922a] text-white text-sm font-medium rounded-full hover:bg-[#d1b15d] transition-colors">
                Read the Rescue Reality Guide <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rehomed horses */}
      <section className="bg-[#f5f0e8] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="block h-px w-8 bg-[#b8922a]" />
              <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Beyond the Haven</p>
            </div>
            <h2 className="font-serif text-4xl">Where are they now?</h2>
            <p className="mt-5 text-[#4a4a42] leading-relaxed">
              A horse leaving Hawkez Haven isn’t the end of their story. This space will share updates on newly rehomed and adopted Hawkez Haven horses, their progress and the lives they’re building beyond the Haven.
            </p>
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="bg-white/80 rounded-3xl p-7 border border-[#ddd4be]/60">
              <MapPin className="text-[#b8922a] mb-4" size={30} strokeWidth={1.5} />
              <h3 className="font-serif text-2xl">Newly Rehomed</h3>
              <p className="mt-3 text-sm text-[#4a4a42] leading-relaxed">New homes, new beginnings and the first updates after a horse moves on.</p>
            </div>
            <div className="bg-white/80 rounded-3xl p-7 border border-[#ddd4be]/60">
              <Heart className="text-[#b8922a] mb-4" size={30} strokeWidth={1.5} />
              <h3 className="font-serif text-2xl">Success Stories</h3>
              <p className="mt-3 text-sm text-[#4a4a42] leading-relaxed">Longer-term updates and reminders of what a second chance can become.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gift Cards — the Hub's only sales section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center gap-3 mb-4">
          <span className="block h-px w-8 bg-[#b8922a]" />
          <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Gift Cards</p>
        </div>
        <div className="bg-white rounded-3xl p-8 md:p-10 border border-[#ddd4be]/60 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex items-start gap-5">
            <Gift className="text-[#b8922a] shrink-0 mt-1" size={42} strokeWidth={1.5} />
            <div>
              <h2 className="font-serif text-3xl">Give the gift of a second chance.</h2>
              <p className="mt-3 text-sm text-[#4a4a42] leading-relaxed max-w-2xl">
                Gift cards can support rescue, rehabilitation, education and horse experiences — something meaningful for the recipient and helpful to the horses.
              </p>
            </div>
          </div>
          <Link to="/gift-card" className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#b8922a] text-white text-sm font-medium rounded-full hover:bg-[#8c6e1e] transition-colors shrink-0">
            View Gift Cards <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
