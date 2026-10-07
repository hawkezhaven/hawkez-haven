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

export default function UnwantedHorsesNzPage() {
  const description =
    "What happens to unwanted horses in New Zealand? Learn how surrender, neglect, hardship, rehabilitation and responsible rehoming can affect a horse's next chapter.";

  return (
    <div className="bg-[#f5f0e8] text-[#1a1a18]">
      <PageMeta
        title="What Happens to Unwanted Horses in New Zealand? | Hawkez Haven"
        description={description}
        path="/hub/unwanted-horses-nz"
        image={`https://hawkezhaven.org${HERO_IMAGE}`}
      />
      <Helmet>
        <meta property="og:image:alt" content="Rescue horse at Hawkez Haven – Second Chances in New Zealand" />
        <meta name="twitter:image:alt" content="Rescue horse at Hawkez Haven – Second Chances in New Zealand" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "What Happens to Unwanted Horses in New Zealand?",
            description,
            url: "https://hawkezhaven.org/hub/unwanted-horses-nz",
            image: `https://hawkezhaven.org${HERO_IMAGE}`,
            author: { "@type": "Organization", name: "Hawkez Haven – Second Chances", url: "https://hawkezhaven.org/" },
            publisher: { "@type": "Organization", name: "Hawkez Haven – Second Chances", url: "https://hawkezhaven.org/" },
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
              <h1 className="mt-6 font-serif text-4xl md:text-6xl leading-tight">What Happens to Unwanted Horses in New Zealand?</h1>
              <p className="mt-6 text-lg md:text-xl text-[#f5f0e8]/75 max-w-3xl leading-relaxed">
                When a horse can no longer stay where it is, the next step matters. This is what responsible surrender, rescue, rehabilitation and rehoming can look like.
              </p>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <img src={HERO_IMAGE} alt="Rescue horse at Hawkez Haven – Second Chances in New Zealand" fetchPriority="high" className="w-full rounded-[2rem] object-cover object-center shadow-2xl max-h-[680px]" />
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="bg-white rounded-[2rem] p-7 md:p-10 border border-[#ddd4be]/60 shadow-sm">
            <p className="text-xl leading-relaxed text-[#1a1a18]">
              The phrase <strong>“unwanted horse”</strong> can make it sound as though the horse is the problem. Often, it isn't.
            </p>
            <p className="mt-5 text-[#4a4a42] leading-relaxed">
              A horse can become unwanted because an owner's circumstances change, costs become unmanageable, an injury changes what the horse can do, a previous placement fails, or the horse's needs become greater than the home can safely provide.
            </p>
            <p className="mt-5 text-[#4a4a42] leading-relaxed">
              In other cases, a horse may arrive in rescue because of neglect, abandonment, poor condition or a history that has left them needing time and careful rehabilitation.
            </p>
            <p className="mt-5 font-medium text-[#1a1a18]">
              The important question is not why someone no longer wants a horse. It is what happens next.
            </p>
          </div>

          <Section title="What Can Make a Horse “Unwanted”?">
            <p>There isn't one story behind a horse entering rescue. Common situations include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>an owner can no longer afford the horse's ongoing care</li>
              <li>family, work, housing or financial circumstances change</li>
              <li>the horse has an injury, illness or long-term management need</li>
              <li>the horse is no longer suitable for the owner's riding goals</li>
              <li>a young or inexperienced owner has taken on more horse than they can safely manage</li>
              <li>a previous rehoming has failed</li>
              <li>the horse has experienced neglect or inadequate care</li>
              <li>an off-the-track Thoroughbred needs a new direction after racing</li>
            </ul>
            <p>None of these circumstances automatically tells you what a horse is worth or what their future should be. Each horse needs to be assessed as an individual.</p>
          </Section>

          <Section title="Owner Surrender and Hardship">
            <p>Sometimes the most responsible thing an owner can do is admit that they can no longer provide what their horse needs.</p>
            <p>A responsible surrender gives the horse a chance to move forward before the situation becomes a welfare crisis. It can also mean being honest about the horse's history, behaviour, health, handling, diet, medication and any known limitations.</p>
            <p>When possible, practical help with transport, feed, equipment or other immediate costs can make a real difference to the rescue taking the horse on.</p>
            <p>Asking for help is not automatically a failure. Waiting until a horse is in serious trouble can make the situation much harder for everyone, especially the horse.</p>
            <p><Link to="/contact" className="text-[#8c6e1e] font-medium underline underline-offset-4">Contact Hawkez Haven</Link> if you need to discuss a horse's circumstances before they become an emergency.</p>
          </Section>

          <Section title="When Neglect Has Already Happened">
            <p>Some horses arrive after their welfare has already deteriorated. Rehabilitation may involve poor body condition, painful feet, skin problems, untreated wounds, dental issues, fear, loss of confidence or a combination of physical and behavioural needs.</p>
            <p>The first goal is not to make the horse useful again. It is to make the horse safe, comfortable and stable.</p>
            <p>That can mean veterinary assessment, nutrition changes, hoof rehabilitation, dental care, appropriate parasite management, safe handling, groundwork, rest and a great deal of patience.</p>
            <p>Progress can be measured in small things: a horse accepting a handler, standing quietly for a farrier, gaining healthy weight, moving comfortably, beginning to trust again, or simply relaxing in their surroundings.</p>
          </Section>

          <Section title="Off-the-Track Thoroughbreds and Horses with a Past">
            <p>New Zealand has many Thoroughbreds coming out of racing or other previous careers. A horse leaving racing is not necessarily a “problem horse”, but the transition can require thoughtful management.</p>
            <p>Some horses adapt quickly. Others need time to learn a completely different routine, develop new skills and understand a different kind of human partnership.</p>
            <p>Rescue and rehabilitation should look at the individual horse rather than assuming that every horse with the same background will have the same needs.</p>
            <p><Link to="/horses" className="text-[#8c6e1e] font-medium underline underline-offset-4">Meet the horses at Hawkez Haven</Link> and see the different stories behind the horses in our care.</p>
          </Section>

          <Section title="Why a Rescue Horse May Not Be Available Straight Away">
            <p>Taking a horse into rescue does not mean that horse is immediately ready for adoption.</p>
            <p>A new arrival may need a period of quiet observation before the rescue can understand their temperament, health, handling, diet and behaviour. Some need significant physical rehabilitation. Others need confidence building or careful groundwork before anyone can responsibly assess what type of home will suit them.</p>
            <p>Responsible rescue is not about moving horses through as quickly as possible. It is about making decisions based on welfare and finding a realistic long-term match.</p>
          </Section>

          <Section title="What Responsible Rehoming Looks Like">
            <p>When a horse is ready for a new home, the process should involve more than a photograph and a price.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>honest disclosure of known history, health and behaviour</li>
              <li>an understanding of the horse's current needs and limitations</li>
              <li>questions about the prospective home, experience and facilities</li>
              <li>references or other suitability checks where appropriate</li>
              <li>a realistic discussion about ongoing costs</li>
              <li>an agreement that protects the horse if circumstances change</li>
              <li>support around the horse's transition into the new home</li>
            </ul>
            <p>At Hawkez Haven, the aim is an <strong>approved home</strong> that is genuinely compatible with the individual horse. The quickest placement is not necessarily the best placement.</p>
            <p><Link to="/adoption" className="text-[#8c6e1e] font-medium underline underline-offset-4">Learn how Hawkez Haven approaches horse adoption and approved-home matching.</Link></p>
          </Section>

          <Section title="What If the Placement Doesn't Work?">
            <p>Sometimes a placement that looked suitable on paper does not work in real life. The horse and person may not connect, circumstances may change, or the horse's needs may turn out to be different from what was expected.</p>
            <p>That is why responsible rehoming should include a clear pathway for what happens next.</p>
            <p>At Hawkez Haven, adopters are expected to contact us if they can no longer keep their horse rather than simply passing the horse on without communication. The welfare of the horse remains the priority, and the next placement needs to be considered carefully.</p>
          </Section>

          <Section title="If You Can No Longer Keep Your Horse">
            <p>If you're searching for <strong>what to do with an unwanted horse in New Zealand</strong>, don't wait until the situation becomes dangerous if you can ask for help earlier.</p>
            <p>Start by writing down the horse's history, age, health concerns, current feed, medications, behaviour, handling level, riding history, passport or registration information, and any known problems. Be honest. Accurate information helps a rescue make better decisions.</p>
            <p>Then contact appropriate welfare organisations or experienced rescue services and explain the situation clearly. Not every organisation will have capacity to take a horse immediately, but early communication can still help identify safer options.</p>
            <p><Link to="/contact" className="text-[#8c6e1e] font-medium underline underline-offset-4">Start a conversation with Hawkez Haven</Link> if you need to discuss surrender or rehoming options.</p>
          </Section>

          <Section title="A Second Chance Is More Than a New Address">
            <p>A horse's second chance isn't simply the moment they leave one paddock and enter another.</p>
            <p>It can be months of rehabilitation, rebuilding trust, improving physical condition, learning new skills and waiting for the right home rather than the first available home.</p>
            <p>Sometimes the best outcome is adoption. Sometimes it is a long-term lease, a companion role or a permanent place with the rescue. The right answer depends on the horse.</p>
            <div className="mt-8 rounded-3xl bg-[#1a1a18] text-[#f5f0e8] p-7 md:p-8">
              <p className="font-serif text-2xl md:text-3xl leading-snug">The goal is not simply to move a horse on.</p>
              <p className="mt-4 text-[#f5f0e8]/80 leading-relaxed">The goal is to give that horse the safest, most appropriate next chapter we can.</p>
            </div>
          </Section>

          <div className="mt-16 pt-10 border-t border-[#ddd4be] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <Link to="/hub" className="inline-flex items-center gap-2 text-sm text-[#8c6e1e] hover:text-[#b8922a]">
              <ArrowRight size={16} className="rotate-180" /> Back to The Hub
            </Link>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link to="/hub/horse-adoption-nz" className="text-[#8c6e1e] hover:text-[#b8922a]">Horse Adoption Guide</Link>
              <Link to="/adoption" className="text-[#8c6e1e] hover:text-[#b8922a]">Adoption</Link>
              <Link to="/support" className="text-[#8c6e1e] hover:text-[#b8922a]">Support Hawkez Haven</Link>
            </div>
          </div>
        </main>
      </article>
    </div>
  );
}
