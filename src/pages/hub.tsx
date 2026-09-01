import { Link } from "react-router-dom";
import { ArrowRight, Gift } from "lucide-react";

export default function HubPage() {
  return (
    <div className="bg-[#f5f0e8]">
      {/* Header */}
      <section className="bg-[#1a1a18] text-[#f5f0e8] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-[#b8922a]">
            <span className="block h-px w-8 bg-[#b8922a]" />
            <span className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">The Hub</span>
          </div>
          <h1 className="mt-6 font-serif text-5xl md:text-6xl text-[#f5f0e8] leading-tight max-w-3xl">
            Community support, one connection at a time.
          </h1>
          <p className="mt-6 text-lg text-[#f5f0e8]/70 max-w-2xl leading-relaxed">
            The Hub is a place to discover ways to support the horses of Hawkez Haven and stay connected with the work we do.
          </p>
        </div>
      </section>

      {/* Gift Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center gap-3 mb-4">
          <span className="block h-px w-8 bg-[#b8922a]" />
          <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Gift Cards</p>
        </div>
        <div className="grid lg:grid-cols-[1fr_420px] gap-10 items-center">
          <div>
            <h2 className="font-serif text-4xl text-[#1a1a18] mb-5">Give the gift of a second chance.</h2>
            <p className="text-[#4a4a42] leading-relaxed max-w-2xl">
              A Hawkez Haven gift card is a thoughtful way to support rescue, rehabilitation, education and horse experiences. Give someone something meaningful while helping the horses in our care.
            </p>
            <Link
              to="/gift-card"
              className="mt-8 inline-flex items-center gap-2 px-7 py-3 bg-[#b8922a] text-white text-sm font-medium rounded-full hover:bg-[#8c6e1e] transition-colors cursor-pointer"
            >
              View Gift Cards <ArrowRight size={16} />
            </Link>
          </div>
          <div className="bg-white rounded-3xl p-10 border border-[#ddd4be]/50 shadow-sm text-center">
            <Gift className="mx-auto text-[#b8922a] mb-5" size={42} strokeWidth={1.5} />
            <h3 className="font-serif text-2xl text-[#1a1a18]">A gift with purpose.</h3>
            <p className="mt-3 text-sm text-[#4a4a42] leading-relaxed">
              Support the horses while giving someone an experience they can remember.
            </p>
          </div>
        </div>
      </section>

      {/* Community Voice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <div className="flex items-center justify-center gap-3 text-[0.65rem] tracking-[0.18em] uppercase font-medium mb-8">
          <span className="block h-px w-8 bg-[#b8922a]" />
          From our community
          <span className="block h-px w-8 bg-[#b8922a]" />
        </div>
        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 border border-[#ddd4be]/50 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#b8922a] mb-4"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
          <p className="text-[#4a4a42] leading-relaxed text-sm">
            {"Hawkez Haven is a horse rescue on the fringes of Palmerston North, they do amazing work with animals who come to them. Injuries are healed and time is put in getting the animal right - working with them to regain confidence and health. Animals are only rehomed if it suitable for the animal and the right fit is found... I love the work they do 💯"}
          </p>
          <p className="mt-4 text-xs font-medium text-[#1a1a18]">Jo Wilson</p>
        </div>
      </section>

      {/* Support */}
      <section className="bg-[#ede5d4] py-20 mt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block h-px w-8 bg-[#b8922a]" />
            <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Support the horses</p>
            <span className="block h-px w-8 bg-[#b8922a]" />
          </div>
          <h2 className="font-serif text-3xl text-[#1a1a18] mb-4">Every contribution helps.</h2>
          <p className="text-[#4a4a42] text-sm leading-relaxed max-w-xl mx-auto">
            Whether you choose a gift card or make a direct contribution, your support helps provide feed, farrier, veterinary care, rehabilitation and second chances.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/gift-card"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#b8922a] text-white text-sm font-medium rounded-full hover:bg-[#8c6e1e] transition-colors cursor-pointer"
            >
              Gift Cards <ArrowRight size={16} />
            </Link>
            <Link
              to="/support"
              className="inline-flex items-center gap-2 px-7 py-3 border border-[#1a1a18] text-[#1a1a18] text-sm font-medium rounded-full hover:bg-[#1a1a18] hover:text-[#f5f0e8] transition-colors cursor-pointer"
            >
              Support Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
