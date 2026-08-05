import { Link } from "react-router-dom";
import { ArrowRight, Heart, Sprout, GraduationCap, HandHeart, Quote } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-[#f5f0e8]">
      {/* Header */}
      <section className="bg-[#1a1a18] text-[#f5f0e8] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="flex items-center gap-3 text-[#b8922a]">
            <span className="block h-px w-8 bg-[#b8922a]" />
            <span className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Our story</span>
          </div>
          <h1 className="mt-6 font-serif text-5xl md:text-6xl text-[#f5f0e8] leading-tight">More Than A Rescue.</h1>
          <p className="mt-6 text-lg text-[#f5f0e8]/70 leading-relaxed max-w-2xl">
            Hawkez Haven was built on one simple belief: every horse deserves the opportunity to heal, to be understood and to find where they truly belong.
          </p>
        </div>
      </section>

      {/* Why we exist */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="block h-px w-8 bg-[#b8922a]" />
            <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Why we are here</p>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a18] leading-tight">Why Hawkez Haven Exists</h2>
          <p className="mt-6 text-[#4a4a42] leading-relaxed">
            Hawkez Haven was created to give horses the time, patience and understanding they deserve. Too often, horses are asked to be ready before they have had the chance to recover — physically, emotionally, or both.
          </p>
          <p className="mt-4 text-[#4a4a42] leading-relaxed">
            Here, rehabilitation is about more than physical recovery. It is about rebuilding confidence, trust and hope. It is about learning what each horse needs, not forcing them to fit a timeline that suits us.
          </p>
          <p className="mt-4 text-[#4a4a42] leading-relaxed">
            Every horse who arrives is given the space to become themselves again — at their own pace, in their own way, with people who choose to listen before they lead.
          </p>
        </div>
        <img
          src="/images/about-story.jpg"
          alt="A rescued horse being gently greeted at Hawkez Haven"
          loading="lazy"
          className="w-full rounded-3xl object-cover aspect-[4/3]"
        />
      </section>

      {/* Philosophy */}
      <section className="bg-[#ede5d4] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="block h-px w-8 bg-[#b8922a]" />
              <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">How we work</p>
              <span className="block h-px w-8 bg-[#b8922a]" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a18] leading-tight">Our Philosophy</h2>
            <p className="mt-4 text-[#4a4a42]">These five principles guide every interaction, every decision and every quiet moment in the paddock.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Connection Before Correction", desc: "We build trust first. A horse who feels safe will try far more willingly than one who is simply told what to do." },
              { title: "Patience Before Pressure", desc: "Progress cannot be rushed. We give horses the time they need to understand, adjust and choose to participate." },
              { title: "Understanding Before Judgement", desc: "Every behaviour tells a story. We look for the 'why' behind a reaction before deciding what comes next." },
              { title: "Progress Over Perfection", desc: "Small steps matter. A quieter eye, a softer step, a willingness to approach — these are the victories we celebrate." },
              { title: "Second Chances Always", desc: "No horse is beyond hope. With the right care, the right match and the right time, new beginnings are possible." },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-8 border border-[#ddd4be]/50">
                <div className="w-2 h-2 rounded-full bg-[#b8922a] mb-4" />
                <h3 className="font-serif text-xl text-[#1a1a18] mb-3">{title}</h3>
                <p className="text-sm text-[#4a4a42] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What makes us different */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="flex items-center gap-3 mb-4">
          <span className="block h-px w-8 bg-[#b8922a]" />
          <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">The difference</p>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a18] mb-14">What Makes Hawkez Haven Different</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Individual rehabilitation", desc: "No two horses recover in the same way. Each horse receives a tailored plan shaped by their history, health and temperament." },
            { title: "Honest horse matching", desc: "We match horses to people based on compatibility, experience and lifestyle — never convenience or pressure." },
            { title: "Education before expectation", desc: "We help adopters, volunteers and visitors understand horses before asking them to handle, ride or care for one." },
            { title: "Lifelong support", desc: "Our relationship does not end at adoption. We remain available for guidance, advice and support for every horse's lifetime." },
            { title: "Quality over quantity", desc: "We take in only what we can care for well. Every horse here receives attention, time and the resources they need." },
          ].map(({ title, desc }) => (
            <div key={title}>
              <h3 className="font-serif text-xl text-[#1a1a18] mb-2">{title}</h3>
              <p className="text-sm text-[#4a4a42] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <blockquote className="mt-16 border-l-4 border-[#b8922a] pl-6 max-w-2xl">
          <p className="font-serif italic text-2xl text-[#1a1a18]">"We are not trying to save every horse quickly. We are trying to care for each horse properly."</p>
        </blockquote>
      </section>

      {/* Promise */}
      <section className="bg-[#1a1a18] text-[#f5f0e8] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
          <Quote size={32} className="text-[#b8922a] mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl text-[#f5f0e8] leading-tight">Our Promise</h2>
          <p className="mt-6 text-[#f5f0e8]/70 leading-relaxed">
            To every horse who comes to Hawkez Haven, we promise that your welfare will always come first. Every decision — medical, emotional, rehoming or retirement — will be made with your best interest at heart.
          </p>
          <p className="mt-4 text-[#f5f0e8]/70 leading-relaxed">
            To every adopter, volunteer and supporter, we promise honesty, transparency and ongoing support. We will tell you the truth about a horse's needs, their progress and what they require to thrive.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a18] max-w-2xl mx-auto">Every Great Journey Begins With Compassion.</h2>
        <p className="mt-4 text-[#4a4a42]">Whether you are hoping to adopt, sponsor, volunteer or simply learn more, there is a place for you in this story.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/horses" className="inline-flex items-center gap-2 px-7 py-3 bg-[#b8922a] text-white text-sm font-medium rounded-full hover:bg-[#8c6e1e] transition-colors cursor-pointer">
            Meet Our Horses <ArrowRight size={16} />
          </Link>
          <Link to="/adoption" className="inline-flex items-center gap-2 px-7 py-3 border border-[#1a1a18] text-[#1a1a18] text-sm font-medium rounded-full hover:bg-[#1a1a18] hover:text-[#f5f0e8] transition-colors cursor-pointer">
            Adoption
          </Link>
          <Link to="/support" className="inline-flex items-center gap-2 px-7 py-3 border border-[#1a1a18] text-[#1a1a18] text-sm font-medium rounded-full hover:bg-[#1a1a18] hover:text-[#f5f0e8] transition-colors cursor-pointer">
            Support A Second Chance
          </Link>
        </div>
      </section>
    </div>
  );
}
