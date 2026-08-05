import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
            Community support, one item at a time.
          </h1>
          <p className="mt-6 text-lg text-[#f5f0e8]/70 max-w-2xl leading-relaxed">
            The Hub is where community generosity meets horse care. Donated gear, fundraising activity, auctions and sales of donated items — with every dollar raised going directly to the horses in our care.
          </p>
        </div>
      </section>

      {/* What The Hub is */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center gap-3 mb-4">
          <span className="block h-px w-8 bg-[#b8922a]" />
          <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">How it works</p>
        </div>
        <h2 className="font-serif text-4xl text-[#1a1a18] mb-10 max-w-2xl">A place for donated goods, gear and community giving.</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Donated horse gear",
              desc: "Quality second-hand tack, rugs, halters, feed equipment and other gear donated by the community — listed here so proceeds from their sale can go straight to horse care.",
            },
            {
              title: "Auctions & fundraising sales",
              desc: "Community fundraising events, auction lots and one-off sales. When something becomes available, it will be listed here with full details.",
            },
            {
              title: "Donated goods & items",
              desc: "Non-equine donated items — homewares, collectables, clothing and more — whose sale supports the Hawkez Haven horses. Every item listed has been generously contributed.",
            },
          ].map(({ title, desc }) => (
            <div key={title} className="bg-white rounded-2xl p-8 border border-[#ddd4be]/50">
              <div className="w-2 h-2 rounded-full bg-[#b8922a] mb-4" />
              <h3 className="font-serif text-xl text-[#1a1a18] mb-3">{title}</h3>
              <p className="text-sm text-[#4a4a42] leading-relaxed">{desc}</p>
            </div>
          ))}
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

      {/* Coming soon */}
      <section className="bg-[#ede5d4] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block h-px w-8 bg-[#b8922a]" />
            <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Listings</p>
            <span className="block h-px w-8 bg-[#b8922a]" />
          </div>
          <h2 className="font-serif text-3xl text-[#1a1a18] mb-4">Nothing listed at the moment.</h2>
          <p className="text-[#4a4a42] text-sm leading-relaxed max-w-xl mx-auto">
            When donated gear, auction items or fundraising sales become available, they will appear here. Check back soon or follow us on Facebook to be notified first.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61591877430343"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#b8922a] text-white text-sm font-medium rounded-full hover:bg-[#8c6e1e] transition-colors cursor-pointer"
            >
              Follow on Facebook <ArrowRight size={16} />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 border border-[#1a1a18] text-[#1a1a18] text-sm font-medium rounded-full hover:bg-[#1a1a18] hover:text-[#f5f0e8] transition-colors cursor-pointer"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* Donate gear CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-[#1a1a18] rounded-3xl p-10 md:p-14 text-center">
          <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium text-[#b8922a]">Have something to donate?</p>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl text-[#f5f0e8] max-w-xl mx-auto">Horse gear or donated goods welcome.</h2>
          <p className="mt-4 text-[#f5f0e8]/70 text-sm max-w-lg mx-auto">
            If you have gear, equipment or other items you'd like to donate toward horse care — please get in touch. We'll list suitable items here and ensure proceeds go directly to the horses.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 px-7 py-3 bg-[#b8922a] text-white text-sm font-medium rounded-full hover:bg-[#8c6e1e] transition-colors cursor-pointer"
          >
            Contact Hawkez Haven <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Link to Support Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 text-center">
        <p className="text-sm text-[#4a4a42]">
          Looking to make a direct financial contribution?{" "}
          <Link to="/support" className="text-[#b8922a] hover:underline font-medium">
            Visit Support Us
          </Link>{" "}
          to give toward feed, farrier, vet and rehabilitation.
        </p>
      </section>
    </div>
  );
}
