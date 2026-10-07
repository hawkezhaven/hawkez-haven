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

export default function HorseRescueNewZealandPage() {
  const description =
    "Horse rescue in New Zealand means more than taking a horse somewhere safe. Learn how Hawkez Haven approaches rescue, rehabilitation, welfare, assessment and responsible rehoming.";

  return (
    <div className="bg-[#f5f0e8] text-[#1a1a18]">
      <PageMeta
        title="Horse Rescue New Zealand | Hawkez Haven – Second Chances"
        description={description}
        path="/horse-rescue-new-zealand"
        image={`https://hawkezhaven.org${HERO_IMAGE}`}
      />
      <Helmet>
        <meta property="og:image:alt" content="Rescue horse at Hawkez Haven – Second Chances in New Zealand" />
        <meta name="twitter:image:alt" content="Rescue horse at Hawkez Haven – Second Chances in New Zealand" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            headline: "Horse Rescue New Zealand",
            name: "Horse Rescue New Zealand | Hawkez Haven – Second Chances",
            description,
            url: "https://hawkezhaven.org/horse-rescue-new-zealand",
            image: `https://hawkezhaven.org${HERO_IMAGE}`,
            about: { "@type": "AnimalShelter", name: "Hawkez Haven – Second Chances", url: "https://hawkezhaven.org/" },
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
                <span className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Hawkez Haven – Second Chances</span>
              </div>
              <h1 className="mt-6 font-serif text-4xl md:text-6xl leading-tight">Horse Rescue New Zealand</h1>
              <p className="mt-6 text-lg md:text-xl text-[#f5f0e8]/75 max-w-3xl leading-relaxed">
                Rescue • Rehabilitation • Rehoming • Second Chances
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
              <strong>Horse rescue in New Zealand</strong> is not simply about taking a horse out of a difficult situation. It is about understanding what that horse needs next.
            </p>
            <p className="mt-5 text-[#4a4a42] leading-relaxed">
              Hawkez Haven – Second Chances is an independent equine rescue and rehabilitation organisation focused on welfare, recovery and responsible rehoming. Horses are treated as individuals, with their history, health, behaviour, confidence and long-term needs considered before decisions are made about their future.
            </p>
            <p className="mt-5 text-[#4a4a42] leading-relaxed">
              Some horses come through owner surrender or hardship. Others arrive after neglect, injury, abandonment or difficult previous circumstances. Some are Thoroughbreds transitioning from racing or another career. Whatever the story, the goal is the same: give the horse time, care and a realistic path forward.
            </p>
          </div>

          <Section title="What Does Horse Rescue Actually Involve?">
            <p>People often see the moment a rescue horse arrives, but the work begins long before a horse is ready for a new home.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>understanding the horse's history and immediate welfare needs</li>
              <li>providing safe accommodation, forage, water and appropriate routine</li>
              <li>addressing physical condition, feet, nutrition, dental needs and health concerns</li>
              <li>observing behaviour and allowing the horse time to settle</li>
              <li>building handling, confidence and communication where needed</li>
              <li>developing realistic expectations for the horse's next chapter</li>
              <li>finding a suitable long-term home when rehoming is appropriate</li>
            </ul>
            <p>Rescue is rarely a straight line. A horse may make progress, have a setback, change physically, reveal a new need or simply require more time than expected.</p>
          </Section>

          <Section title="How Horses Come Into Rescue">
            <p>There is no single reason a horse needs rescue. An owner may experience financial hardship, a change in housing or family circumstances, illness, injury or a loss of capacity to safely manage the horse.</p>
            <p>Other horses arrive after their welfare has already been compromised. Some need significant rehabilitation before their future can even be considered.</p>
            <p>Early communication can matter. If someone can no longer keep a horse, asking for help before the situation becomes an emergency may create safer options for the horse.</p>
            <p><Link to="/contact" className="text-[#8c6e1e] font-medium underline underline-offset-4">Contact Hawkez Haven</Link> to start a conversation about a horse's circumstances.</p>
          </Section>

          <Section title="Rehabilitation Comes Before Rehoming">
            <p>A rescue horse is not automatically ready to be adopted simply because they have arrived somewhere safe.</p>
            <p>Rehabilitation can involve improving body condition, addressing hoof problems, dental or veterinary care, rebuilding confidence, groundwork, learning new routines and giving a horse enough quiet time to settle and show who they are.</p>
            <p>The purpose is not to make every horse rideable or marketable. The purpose is to understand the horse and improve their welfare. Sometimes that leads to adoption. Sometimes a different outcome is safer and more appropriate.</p>
          </Section>

          <Section title="Thoroughbreds and Horses With a Past">
            <p>New Zealand has many Thoroughbreds moving on from racing and other previous careers. An off-the-track Thoroughbred may need to learn an entirely different routine, develop new skills and build confidence in a new kind of partnership.</p>
            <p>But a racing history does not define a horse. Rescue assessment needs to look at the individual in front of us rather than making assumptions based only on breed, age or previous career.</p>
            <p><Link to="/horses" className="text-[#8c6e1e] font-medium underline underline-offset-4">Meet the horses at Hawkez Haven</Link> and follow their individual stories.</p>
          </Section>

          <Section title="Why Rescue Horses May Not Be Available Immediately">
            <p>Responsible horse rescue does not mean placing every horse as quickly as possible.</p>
            <p>A new arrival may need weeks or months of observation and rehabilitation before their needs, temperament, handling and suitability for a particular home can be assessed properly. Some horses need significant physical recovery. Others need time to learn trust.</p>
            <p>Waiting can be part of responsible rescue. The right home matters more than the fastest home.</p>
          </Section>

          <Section title="Responsible Horse Rehoming in New Zealand">
            <p>When a horse is ready for rehoming, the process should focus on suitability rather than simply finding a buyer.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>honest information about the horse's known history, health and behaviour</li>
              <li>consideration of the adopter's experience, property and goals</li>
              <li>an honest conversation about ongoing care and costs</li>
              <li>references or suitability checks where appropriate</li>
              <li>a transition plan that puts the horse's welfare first</li>
              <li>a clear pathway if circumstances change later</li>
            </ul>
            <p>Hawkez Haven uses an <strong>approved-home</strong> approach because the best placement is the one that can genuinely meet the individual horse's needs.</p>
            <p><Link to="/adoption" className="text-[#8c6e1e] font-medium underline underline-offset-4">Learn about horse adoption at Hawkez Haven.</Link></p>
          </Section>

          <Section title="What If a Placement Doesn't Work?">
            <p>A second chance should not disappear because a placement becomes difficult.</p>
            <p>Horses and people can change. Circumstances can change. Sometimes a horse and adopter simply are not the right match despite everyone's best intentions.</p>
            <p>Responsible rehoming therefore needs a plan for what happens next. At Hawkez Haven, adopters are expected to contact us if they can no longer keep their horse rather than passing the horse on without communication.</p>
          </Section>

          <Section title="Horse Rescue in Manawatū and Palmerston North">
            <p>Hawkez Haven is a working horse rescue in the Manawatū region of New Zealand, serving the local community while also considering horses and approved homes from further afield when circumstances and capacity allow.</p>
            <p>Because rescue work happens on a private working property, visits are arranged by appointment. If you are looking for a <strong>horse rescue near you</strong>, need to discuss surrender, or want to understand whether a rescue horse may be suitable for your home, the best first step is to contact us and explain your situation.</p>
            <p><Link to="/contact" className="text-[#8c6e1e] font-medium underline underline-offset-4">Contact Hawkez Haven about horse rescue</Link> or <Link to="/horses" className="text-[#8c6e1e] font-medium underline underline-offset-4">meet the horses currently in our care</Link>.</p>
          </Section>

          <Section title="How You Can Help Horse Rescue in New Zealand">
            <p>Rescue is a community effort. Not everyone can take a horse, but there are many ways people can help.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>volunteer time and practical skills</li>
              <li>sponsor a horse or contribute toward rehabilitation costs</li>
              <li>provide suitable feed, equipment or other needed resources</li>
              <li>share responsible adoption and education information</li>
              <li>consider fostering where appropriate</li>
              <li>offer an approved home when you are genuinely ready for the commitment</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/volunteer" className="text-[#8c6e1e] font-medium underline underline-offset-4">Volunteer</Link>
              <Link to="/support" className="text-[#8c6e1e] font-medium underline underline-offset-4">Support Hawkez Haven</Link>
              <Link to="/foster" className="text-[#8c6e1e] font-medium underline underline-offset-4">Foster a rescue horse</Link>
            </div>
          </Section>

          <Section title="Horse Rescue, Rehabilitation and Second Chances">
            <p>Every rescue horse has a story before they arrive. Our job is not to erase that story. It is to help create a safer next chapter.</p>
            <p>For some horses, that means rehabilitation and an approved home. For others, it may mean long-term lease, companionship, education or a permanent place with Hawkez Haven.</p>
            <p>The outcome is individual. The standard is the same: <strong>welfare first.</strong></p>
          </Section>

          <div className="mt-16 pt-10 border-t border-[#ddd4be] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <Link to="/hub" className="inline-flex items-center gap-2 text-sm text-[#8c6e1e] hover:text-[#b8922a]">
              <ArrowRight size={16} className="rotate-180" /> Back to The Hub
            </Link>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link to="/hub/unwanted-horses-nz" className="text-[#8c6e1e] hover:text-[#b8922a]">Unwanted Horses NZ Guide</Link>
              <Link to="/hub/horse-adoption-nz" className="text-[#8c6e1e] hover:text-[#b8922a]">Horse Adoption Guide</Link>
              <Link to="/adoption" className="text-[#8c6e1e] hover:text-[#b8922a]">Adoption</Link>
            </div>
          </div>
        </main>
      </article>
    </div>
  );
}
