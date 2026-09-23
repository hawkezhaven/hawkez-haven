import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import PageMeta from "@/components/PageMeta.tsx";

const HERO_IMAGE = "/images/hero_image_hub.png";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-14 first:mt-0">
      <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a18]">{title}</h2>
      <div className="mt-5 space-y-5 text-[#4a4a42] leading-relaxed">{children}</div>
    </section>
  );
}

export default function HorseRescueRealityPage() {
  const description =
    "Behind the gates of Hawkez Haven, horse rescue means rehabilitation, financial responsibility, difficult decisions and giving horses a genuine second chance.";

  return (
    <div className="bg-[#f5f0e8] text-[#1a1a18]">
      <PageMeta
        title="Behind the Gates of Hawkez Haven | The Raw Reality of Horse Rescue"
        description={description}
        path="/hub/behind-the-gates-horse-rescue"
        image={`https://hawkezhaven.org${HERO_IMAGE}`}
      />
      <Helmet>
        <meta property="og:image:alt" content="Rescue horse at Hawkez Haven – Second Chances in New Zealand" />
        <meta name="twitter:image:alt" content="Rescue horse at Hawkez Haven – Second Chances in New Zealand" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Behind the Gates of Hawkez Haven: The Raw Reality of Horse Rescue",
            description,
            url: "https://hawkezhaven.org/hub/behind-the-gates-horse-rescue",
            image: `https://hawkezhaven.org${HERO_IMAGE}`,
            author: {
              "@type": "Organization",
              name: "Hawkez Haven – Second Chances",
              url: "https://hawkezhaven.org/",
            },
            publisher: {
              "@type": "Organization",
              name: "Hawkez Haven – Second Chances",
              url: "https://hawkezhaven.org/",
            },
          })}
        </script>
      </Helmet>

      <article>
        <header className="bg-[#1a1a18] text-[#f5f0e8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
            <Link to="/hub" className="inline-flex items-center gap-2 text-xs uppercase tracking-[.14em] text-[#b8922a] hover:text-[#d1b15d] transition-colors">
              <ArrowRight size={14} className="rotate-180" /> The Hub
            </Link>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 text-[#b8922a]">
                <span className="block h-px w-8 bg-[#b8922a]" />
                <span className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Hawkez Haven Information Hub</span>
              </div>
              <h1 className="mt-6 font-serif text-4xl md:text-6xl leading-tight">
                Behind the Gates of Hawkez Haven: The Raw Reality of Horse Rescue
              </h1>
              <p className="mt-6 text-lg md:text-xl text-[#f5f0e8]/75 max-w-3xl leading-relaxed">
                What horse rescue really involves — from the costs and consequences of irresponsible rehoming to the rehabilitation and responsibility that begin once a horse comes through the gates.
              </p>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <img
              src={HERO_IMAGE}
              alt="Rescue horse at Hawkez Haven – Second Chances in New Zealand"
              fetchPriority="high"
              className="w-full rounded-[2rem] object-cover object-center shadow-2xl max-h-[680px]"
              onError={(event) => {
                event.currentTarget.src = "/images/hero-horse.jpg";
              }}
            />
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="bg-white rounded-[2rem] p-7 md:p-10 border border-[#ddd4be]/60 shadow-sm">
            <p className="text-xl leading-relaxed text-[#1a1a18]">
              A horse rescue isn't just a picturesque paddock full of contented horses. Behind the tranquil scenes is an intensive, ongoing operation driven by passion, grit, and an unwavering commitment to animal welfare.
            </p>
            <p className="mt-5 text-[#4a4a42] leading-relaxed">
              At <strong>Hawkez Haven – Second Chances</strong>, we don't believe a horse should lose its chance at life simply because its rehabilitation is expensive.
            </p>
            <p className="mt-5 text-[#4a4a42] leading-relaxed">
              The sad reality is that horse rescue often means dealing with the consequences of someone else's dishonesty, neglect, poor decisions, or complete lack of accountability.
            </p>
            <p className="mt-5 font-medium text-[#1a1a18]">A horse should never have been put in that situation to begin with.</p>
          </div>

          <Section title="When Horses Pay the Price">
            <p>Too many horses end up in crisis because of irresponsible sales and rehoming practices.</p>
            <p>Sometimes sellers are simply desperate to move a horse on. Sometimes they can no longer afford to keep them. And sometimes important information about a horse's history, health, behaviour, or suitability is hidden or sugar-coated because the seller wants the sale to go through.</p>
            <p>In the worst cases, horses may even be drugged or dosed to make them appear quiet and placid during viewings. The buyer can be left with an animal completely different from what they believed they were purchasing.</p>
            <p>And the horse is the one caught in the middle.</p>
            <p>The consequences can include trauma, instability, behavioural problems, failed placements, and repeated changes of home. In the wrong circumstances, putting an unsuitable horse and person together can result in serious injury to either.</p>
            <blockquote className="border-l-4 border-[#b8922a] pl-5 text-[#1a1a18] font-medium">
              Responsible horse sales aren't just about transferring ownership. They're about taking responsibility for where that horse's life goes next.
            </blockquote>
          </Section>

          <Section title="Money Doesn't Guarantee Welfare">
            <p>A high purchase price doesn't guarantee a good life.</p>
            <p>We've seen horses originally bought for <strong>$17,000</strong> left to deteriorate from severe neglect.</p>
            <p>When his feet became painfully sore, his original owner treated him as a nuisance and simply handed him off. The person who stepped in to help him fed him up, but eventually realised the severity of his lameness required intensive, specialised care beyond what they could provide.</p>

            <div className="mt-8 rounded-3xl bg-[#ede5d4] p-7 md:p-8">
              <h3 className="font-serif text-2xl md:text-3xl">His Second Chance</h3>
              <ul className="mt-5 space-y-4 text-[#4a4a42]">
                <li><strong className="text-[#1a1a18]">On Arrival:</strong> He arrived at Hawkez Haven barely able to walk, suffering from severe laminitis and painfully sore soles.</li>
                <li><strong className="text-[#1a1a18]">The Rehabilitation:</strong> It took nearly half a year of continuous rehabilitation and specialised hoof care to get him sound.</li>
                <li><strong className="text-[#1a1a18]">The Victory:</strong> This beautiful elder horse had different ideas. He clearly wasn't going down with the title of <em>retired</em>. Today, he's thriving, showing off his cheeky personality and proving he can still fly — throwing playful bucks and air-kicks around the paddock.</li>
              </ul>
            </div>

            <p>That's what rehabilitation can look like.</p>
            <p>It isn't always quick.</p>
            <p>It isn't always cheap.</p>
            <p>And it certainly isn't always straightforward.</p>
            <p>But sometimes, given the right care and enough time, a horse gets the opportunity to show you what was still there all along.</p>
          </Section>

          <Section title="What Rescue Actually Inherits">
            <p>Behind every horse brought through our gates is a physical, emotional, and financial burden that someone else has often walked away from.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Emergency veterinary treatment</strong> and specialised medication</li>
              <li><strong>Farrier care and complex hoof rehabilitation</strong>, including long-term laminitis recovery</li>
              <li><strong>Dental care</strong> and tailored, high-calorie nutrition</li>
              <li><strong>Transport costs:</strong> fuel, float hire, and vehicle wear-and-tear</li>
              <li><strong>Safe housing:</strong> proper fencing and shelter</li>
              <li><strong>Quality equipment:</strong> waterproof rugs and replacement gear</li>
              <li><strong>Ongoing health management</strong> of existing medical conditions</li>
              <li><strong>Months — sometimes years —</strong> of physical and behavioural rehabilitation</li>
            </ul>
            <p>And the costs don't wait until funding becomes available.</p>
            <p>The horse still needs to eat.</p>
            <p>The feet still need trimming.</p>
            <p>The wounds still need treating.</p>
            <p>The vet still needs to be called.</p>
            <p>The rugs still need replacing.</p>
            <p className="font-medium text-[#1a1a18]">Welfare doesn't go on hold because the bank account says it should.</p>
            <p>That's one of the hardest realities of rescue.</p>
          </Section>

          <Section title="The Things People Don't Always See">
            <p>We've had horses surrendered in non-waterproof rugs that caused severe skin conditions and left them with a lasting fear of being rugged, even on freezing winter nights.</p>
            <p>We've had owners walk away leaving malnourished horses with zero financial contribution, expecting a community-funded rescue to somehow foot the bill for the consequences.</p>
            <p>And then there are the people who do the right thing.</p>
            <p>We are deeply grateful for those who surrender responsibly — people who cover the gas and float hire, drop off feed, or donate their horse's entire wardrobe and tell us to sell whatever isn't needed so the money can go towards feed, wormers, farrier care, and rehabilitation.</p>
            <p className="font-medium text-[#1a1a18]">That matters.</p>
            <p>Responsible surrender doesn't necessarily mean someone has failed.</p>
            <p>Sometimes life genuinely changes and an owner can no longer provide what their horse needs.</p>
            <p>What matters is what happens next.</p>
          </Section>

          <Section title="Rehoming Is a Responsibility">
            <p>If you can no longer keep your horse, rehoming shouldn't simply mean finding the first person willing to take them.</p>
            <p>The person taking your horse is taking responsibility for a living animal with its own needs, history, temperament, and future.</p>
            <p>The absolute minimum is taking the time to find out where you're placing that animal's life — and who you're placing it with.</p>
            <ol className="list-decimal pl-6 space-y-3">
              <li><strong>Ask questions and check references:</strong> Find out what genuine experience the prospective owner has.</li>
              <li><strong>Inspect the property:</strong> Consider whether they have appropriate grazing, fencing, shelter, water, and safe facilities.</li>
              <li><strong>Assess financial readiness:</strong> Consider whether they can afford routine veterinary and farrier care, as well as unexpected costs.</li>
              <li><strong>Plan for the future:</strong> Have a clear plan for what happens if their circumstances change.</li>
            </ol>
            <p>An <strong>Approved Home Agreement</strong> should be standard practice for every animal sale and rehoming.</p>
            <p>A horse shouldn't simply disappear from your responsibility because the money has changed hands.</p>
          </Section>

          <Section title="The Cost Doesn't Disappear">
            <p>When an owner or seller walks away without taking responsibility, those costs don't disappear.</p>
            <p className="font-medium text-[#1a1a18]">They simply land somewhere else.</p>
            <p>At Hawkez Haven, we absorb them because the horse still needs care.</p>
            <p>And we're not alone.</p>
            <p>Across New Zealand, dedicated rescues and animal welfare organisations — including <strong>HUHA NZ, Rodney Animal Rescue, SPCA, Mini Ha Ha Horse Haven, Harness Hero NZ</strong>, and many others — step in when animals are in desperate need of help.</p>
            <p>Each organisation has its own circumstances, capacity, and focus, but the common thread is simple:</p>
            <p className="font-medium text-[#1a1a18]">The animal still needs someone to care.</p>

            <div className="mt-8 rounded-3xl bg-[#1a1a18] text-[#f5f0e8] p-7 md:p-8">
              <p className="font-serif text-2xl md:text-3xl leading-snug">That's what rescue is.</p>
              <ul className="mt-5 space-y-2 text-[#f5f0e8]/80">
                <li>Not a picturesque paddock.</li>
                <li>Not an easy life.</li>
                <li>Not a quick fix.</li>
              </ul>
            </div>

            <p>It's showing up when the bills arrive.</p>
            <p>It's dealing with the wounds, the feet, the fear, the behaviour, and the setbacks.</p>
            <p>It's making decisions based on welfare rather than convenience.</p>
            <p>And sometimes it's taking on a horse that someone else no longer wanted because they were too expensive, too difficult, too old, too damaged, or simply no longer useful.</p>
            <p>Because a horse's worth should never be measured by what it can earn, how much it cost, whether it can be ridden, or how many ribbons it has won.</p>
            <p className="font-medium text-[#1a1a18]">Every horse deserves the opportunity for a safe and meaningful second chance at life.</p>
            <p>And sometimes, that second chance starts simply with someone being willing to say:</p>
            <blockquote className="border-l-4 border-[#b8922a] pl-5 font-serif text-2xl text-[#1a1a18]">
              “You're here now. Let's work out what you need.”
            </blockquote>
          </Section>

          <div className="mt-16 pt-10 border-t border-[#ddd4be] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <Link to="/hub" className="inline-flex items-center gap-2 text-sm text-[#8c6e1e] hover:text-[#b8922a]">
              <ArrowRight size={16} className="rotate-180" /> Back to The Hub
            </Link>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link to="/hub/horse-adoption-nz" className="text-[#8c6e1e] hover:text-[#b8922a]">Horse Adoption Guide</Link>
              <Link to="/support" className="text-[#8c6e1e] hover:text-[#b8922a]">Support Hawkez Haven</Link>
            </div>
          </div>
        </main>
      </article>
    </div>
  );
}
