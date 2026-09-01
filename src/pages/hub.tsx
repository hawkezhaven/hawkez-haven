import { Link } from "react-router-dom";
import { ArrowRight, Gift, Newspaper, CalendarDays, Heart, MapPin } from "lucide-react";

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

      {/* Rehomed horses */}
      <section className="bg-[#ede5d4] py-20">
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
