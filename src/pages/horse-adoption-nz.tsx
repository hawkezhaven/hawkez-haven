import { Link } from "react-router-dom";
import { ArrowRight, Heart, ShieldCheck } from "lucide-react";
import { Helmet } from "react-helmet-async";
import PageMeta from "@/components/PageMeta.tsx";

const HERO_IMAGE = "/images/horse-adoption-nz-hawkez-haven.jpg";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-14 first:mt-0">
      <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a18]">{title}</h2>
      <div className="mt-5 space-y-5 text-[#4a4a42] leading-relaxed">{children}</div>
    </section>
  );
}

function Subsection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-9">
      <h3 className="font-serif text-2xl text-[#1a1a18]">{title}</h3>
      <div className="mt-3 space-y-4 text-[#4a4a42] leading-relaxed">{children}</div>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-6 space-y-2">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

export default function HorseAdoptionNzPage() {
  const description = "Considering horse adoption in NZ? Learn how rescue horse adoption works, what to prepare, the costs involved, welfare responsibilities and how to find the right match.";

  return (
    <div className="bg-[#f5f0e8] text-[#1a1a18]">
      <PageMeta
        title="Horse Adoption NZ | How to Adopt a Rescue Horse"
        description={description}
        path="/hub/horse-adoption-nz"
        image={`https://hawkezhaven.org${HERO_IMAGE}`}
      />
      <Helmet>
        <meta property="og:image:alt" content="Rescue horse at Hawkez Haven – Second Chances in New Zealand" />
        <meta name="twitter:image:alt" content="Rescue horse at Hawkez Haven – Second Chances in New Zealand" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Horse Adoption NZ: How to Adopt a Rescue Horse in New Zealand",
            description,
            url: "https://hawkezhaven.org/hub/horse-adoption-nz",
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
                <span className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Horse Adoption NZ</span>
              </div>
              <h1 className="mt-6 font-serif text-4xl md:text-6xl leading-tight">
                Horse Adoption NZ: How to Adopt a Rescue Horse in New Zealand
              </h1>
              <p className="mt-6 text-lg md:text-xl text-[#f5f0e8]/75 max-w-3xl leading-relaxed">
                A practical guide to adopting a rescue horse in New Zealand — from finding the right match and preparing your property to understanding the ongoing commitment, costs and welfare responsibilities.
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
              Horse adoption can be an incredibly rewarding way to give a horse a safe, suitable home, but it is also a serious long-term commitment. Rescue horses can have very different histories, personalities, training levels and rehabilitation needs, so finding the right match matters just as much as finding the right home.
            </p>
            <p className="mt-5 text-[#4a4a42] leading-relaxed">
              At <strong>Hawkez Haven – Second Chances</strong>, we believe successful rehoming starts with honesty, patience and the right match between horse and human.
            </p>
            <p className="mt-5 text-[#4a4a42] leading-relaxed">
              Adoption isn't simply about taking a horse home. It's about understanding who that horse is, what they need, what you can provide, and whether the partnership has the foundations to work for both of you.
            </p>
            <p className="mt-5 text-[#4a4a42] leading-relaxed">
              A horse's history may include neglect, injury, difficult transitions, a racing career, changes in ownership or circumstances outside their control. Some horses arrive needing significant rehabilitation, while others simply need a different kind of home.
            </p>
            <p className="mt-5 font-medium text-[#1a1a18]">Their history matters, but it does not determine their worth.</p>
            <p className="mt-5 text-[#4a4a42] leading-relaxed">
              This guide explains what to consider when looking at <strong>horse adoption in NZ</strong>, how the adoption process can work, what you need to prepare at home, the ongoing costs involved, and how to approach finding a rescue horse that is genuinely suited to your life.
            </p>
          </div>

          <Section title="Connection Before Correction">
            <p>We believe trust, understanding and communication form the foundation of a successful partnership.</p>
            <p>Rehabilitation isn't about rushing a horse into becoming what someone wants them to be. It's about giving them the opportunity to recover, learn, develop confidence and show us who they are.</p>
            <p>And sometimes the greatest transformation isn't seeing a horse become rideable.</p>
            <p className="font-medium text-[#1a1a18]">It's seeing them <strong>trust again</strong>.</p>
          </Section>

          <Section title="What Does Horse Adoption Mean in New Zealand?">
            <p>Horse adoption means taking responsibility for a horse's ongoing welfare and providing an appropriate home, management, companionship, care and training for the long term.</p>
            <p>When adopting through a rescue, you're also stepping into a process designed to consider both sides of the partnership.</p>
            <p>The question isn't simply:</p>
            <p className="font-serif text-2xl text-[#1a1a18]">“Do you want this horse?”</p>
            <p>It's also:</p>
            <p className="font-serif text-2xl text-[#1a1a18]">“Is this the right horse for you, and are you the right home for this horse?”</p>
            <p>That distinction matters.</p>
            <p>A horse can be beautiful, talented, affectionate or experienced and still not be the right match for a particular person, rider or property. Likewise, a horse that isn't suitable for one home may thrive somewhere else.</p>
            <p>Responsible horse adoption is therefore about <strong>compatibility rather than impulse</strong>.</p>

            <Subsection title="Rescue Horses Aren't Broken">
              <p>The word "rescue" can sometimes make people assume a horse must be damaged, difficult or somehow less valuable than a horse coming from a breeder, trainer or private owner.</p>
              <p>That's not how we see them at Hawkez Haven.</p>
              <p>A horse's history doesn't determine their value.</p>
              <p>Some rescue horses have been let down by people more than once. Others have simply experienced circumstances that changed the direction of their lives. Given the right environment, many horses can learn to trust, gain confidence and develop a strong relationship with the people caring for them.</p>
              <p>Our role is not to erase a horse's history. It is to understand it, work with what the horse is showing us now, and help them move forward.</p>
              <p>A rescue horse does not need to prove their worth before they deserve a good home.</p>
              <p className="font-medium text-[#1a1a18]">They already have it.</p>
            </Subsection>
          </Section>

          <Section title="Rescue Horse Adoption vs Private Sale">
            <p>Buying privately and adopting through a rescue are different pathways, and neither should be approached without careful consideration.</p>
            <p>When buying privately, the amount of information available about a horse's previous life can vary considerably. A buyer may have access to veterinary records, competition history, racing records or previous owner information, but this isn't always the case.</p>
            <p>A responsible rescue should aim to be transparent about what is known about each horse.</p>
            <p>At Hawkez Haven, this means sharing the information we have gathered during a horse's time with us, including relevant health, behavioural, training and rehabilitation information.</p>
            <p>That doesn't necessarily mean a rescue will know everything about a horse's life before they arrived.</p>
            <p>Sometimes their history is incomplete.</p>
            <p>What matters is being honest about what is known, what isn't known, and what the horse is showing us today.</p>

            <Subsection title="Adoption Is Still a Commitment">
              <p>Adoption should never be viewed as a cheaper or easier alternative to buying a horse.</p>
              <p>A horse still needs:</p>
              <BulletList items={["Appropriate feed and forage", "Clean water", "Safe fencing and suitable shelter", "Farrier care", "Dental care", "Veterinary attention", "Parasite management", "Appropriate companionship", "Safe handling and training", "Time, patience and daily care"]} />
              <p>The financial commitment can continue for many years.</p>
              <p>The emotional commitment can be even longer.</p>
            </Subsection>
          </Section>

          <Section title="Finding the Right Rescue Horse">
            <p>One of the most important parts of horse adoption is finding a horse whose needs and temperament fit your circumstances.</p>
            <p>Consider your:</p>
            <BulletList items={["Riding experience", "Handling experience", "Confidence level", "Property and facilities", "Existing horses", "Available time", "Budget", "Riding goals", "Ability to continue rehabilitation or training", "Access to veterinary and farrier support"]} />
            <p>Be honest about your experience.</p>
            <p>That isn't about judging anyone. It's about safety.</p>
            <p>A beginner may be a wonderful home for the right rescue horse, while a more experienced horseperson may be better suited to a horse requiring specialist handling or continued rehabilitation.</p>
            <p>The right match is not necessarily the most talented, youngest or prettiest horse.</p>
            <p className="font-medium text-[#1a1a18]">It is the horse whose needs you can realistically meet.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/horses" className="inline-flex items-center gap-2 rounded-full bg-[#b8922a] text-white px-6 py-3 text-sm font-medium hover:bg-[#8c6e1e] transition-colors">Horses for Adoption <ArrowRight size={16} /></Link>
              <Link to="/adoption" className="inline-flex items-center gap-2 rounded-full border border-[#b8922a] text-[#8c6e1e] px-6 py-3 text-sm font-medium hover:bg-[#ede5d4] transition-colors">Adoption Process <ArrowRight size={16} /></Link>
            </div>
          </Section>

          <Section title="The Horse Adoption Process">
            <p>Every rescue has its own approach to rehoming, but responsible adoption should involve more than simply choosing a horse and taking them home.</p>
            <p>At <strong>Hawkez Haven</strong>, the process begins with getting to know the person as well as the horse. We want to understand your experience, your circumstances, your property and the kind of home you can realistically provide.</p>
            <p>The goal isn't to make the process difficult. It's to help make sure the horse and human are genuinely suited to one another.</p>

            <Subsection title="1. Start With an Enquiry">
              <p>Every Hawkez Haven adoption begins with an enquiry and an open conversation.</p>
              <p>This is an opportunity to talk about your horse experience, your current setup, your property, existing horses and what you're hoping to find.</p>
              <p>It's also an opportunity for you to ask questions about the horses you're interested in.</p>
              <p>Honesty is important. Being upfront about your experience and circumstances helps us determine whether a particular horse may be suitable for you.</p>
            </Subsection>

            <Subsection title="2. Discuss Suitability">
              <p>Once we know a little more about you and what you're looking for, we can discuss suitable horses.</p>
              <p>This isn't about finding the most impressive horse on paper. It's about considering temperament, experience, training, health, rehabilitation needs and the type of home each horse needs.</p>
              <p>Sometimes the horse you initially had in mind won't be the best match — and that's okay.</p>
              <p>The right match is more important than making a quick placement.</p>
            </Subsection>

            <Subsection title="3. Meet the Horse">
              <p>Where appropriate, you'll have the opportunity to meet the horse and learn more about them as an individual.</p>
              <p>Ask questions. Watch their behaviour. Take your time.</p>
              <p>A horse's online profile can give you useful information, but meeting them in person can tell you much more about their personality, mannerisms and interaction with people.</p>
            </Subsection>

            <Subsection title="4. Adoption Agreement">
              <p>If both sides believe the match is suitable, the adoption arrangements can then be discussed and formalised.</p>
              <p>Make sure you understand the agreement, the horse's disclosed history and care requirements, and what happens if circumstances change before committing.</p>
              <p>Responsible rehoming means being clear about expectations from the beginning.</p>
            </Subsection>

            <Subsection title="5. Bringing Your New Horse Home">
              <p>Once the adoption is arranged, the next step is planning the horse's move and transition into their new environment.</p>
              <p>Moving home can be a significant change for a horse. New surroundings, people, routines and herd dynamics can all take time to adjust to.</p>
              <p>Give them that time.</p>
              <p>The transition should be managed according to the individual horse and the arrangements made with Hawkez Haven.</p>
              <p className="font-medium text-[#1a1a18]">Adoption doesn't end when the horse leaves the Haven. A successful rehoming is about what happens afterwards too.</p>
            </Subsection>
          </Section>

          <Section title="Preparing Your Property for a Rescue Horse">
            <p>Before bringing a horse home, walk around your property as though you were the horse.</p>
            <p>Look for hazards you might normally overlook.</p>
            <p>Check:</p>
            <BulletList items={["Boundary fencing", "Gates and latches", "Loose or protruding wire", "Broken posts", "Unsafe trees or branches", "Ditches and holes", "Water sources", "Feed areas", "Mud around gates and troughs", "Machinery and equipment", "Toxic plants", "Areas where a horse could become trapped"]} />
            <p>Fencing should be reliable, appropriate for horses and regularly maintained.</p>
            <p>MPI's guidance for lifestyle-block owners highlights the need for reliable fencing to keep animals safe and contained, along with adequate food, water, shade and shelter.</p>

            <Subsection title="Shelter and Weather Protection">
              <p>New Zealand's weather can be challenging for horses, from heavy rain and cold winds to hot summer conditions.</p>
              <p>The NZ Code of Welfare for Horses and Donkeys requires horses to have access to shelter that reduces risks to their health and welfare from cold or wet weather, as well as means to minimise heat stress.</p>
              <p>Shelter can include suitable natural features, trees and shelter belts, or properly designed artificial shelter.</p>
              <p>The important thing is whether the horse can actually use it and whether it provides appropriate protection.</p>
            </Subsection>

            <Subsection title="Water">
              <p>Fresh, clean water should always be available.</p>
              <p>Check troughs regularly, particularly during periods of extreme weather, and make sure the horse cannot become trapped or injured around the water source.</p>
            </Subsection>

            <Subsection title="Companionship">
              <p>Horses are social animals.</p>
              <p>For many horses, appropriate equine companionship is an important part of their wellbeing. However, introducing a new horse isn't as simple as putting two horses in the same paddock.</p>
              <p>Introductions should be planned around the personalities, behaviour and needs of the horses involved.</p>
              <p>Sometimes a gradual introduction through adjoining paddocks or secure fencing is the safer option.</p>
            </Subsection>
          </Section>

          <Section title="How Much Land Does a Horse Need?">
            <p>There is no single acreage number that guarantees a property is suitable for a horse.</p>
            <p>Pasture quality, soil type, rainfall, climate, drainage, stocking rates, pasture management and supplementary feeding all affect how much land is appropriate.</p>
            <p>Rather than relying on a simple "one horse equals X acres" rule, consider whether the property can sustainably provide:</p>
            <BulletList items={["Adequate forage", "Safe movement", "Appropriate grazing management", "Space for separation when needed", "Suitable shelter", "Reliable water", "Safe fencing", "Areas that can be rested or rotated"]} />
            <p>A smaller property can require significantly more active management than a larger, well-managed grazing block.</p>
            <p>Land isn't just about how many horses can fit on it.</p>
            <p className="font-medium text-[#1a1a18]">It's about whether the property can continue to support their welfare.</p>
          </Section>

          <Section title="The Real Cost of Horse Adoption">
            <p>An adoption contribution is only one part of the financial commitment.</p>
            <p>Before adopting, create a realistic annual budget.</p>
            <p>Consider:</p>
            <h3 className="font-serif text-2xl text-[#1a1a18]">Routine costs</h3>
            <BulletList items={["Hay and pasture", "Hard feed where required", "Farrier care", "Dental care", "Veterinary care", "Vaccinations where appropriate", "Parasite management", "Rugs and equipment", "Fencing and property maintenance", "Transport", "Emergency veterinary treatment"]} />
            <p>Some horses will have additional requirements because of age, previous injury, dental issues, metabolic concerns, poor feet or ongoing rehabilitation.</p>
            <p>It is wise to have an emergency fund rather than budgeting only for the predictable expenses.</p>
            <p className="font-medium text-[#1a1a18]">The cost of owning a horse doesn't stop once the horse arrives home.</p>
          </Section>

          <Section title="Horse Welfare and Your Responsibilities in New Zealand">
            <p>Everyone responsible for a horse in New Zealand has obligations under the <strong>Animal Welfare Act 1999</strong> and relevant regulations and codes of welfare.</p>
            <p>The MPI Code of Welfare: Horses and Donkeys applies to horses and donkeys kept for a range of purposes, including companion animals, breeding, sport and work. It sets out minimum standards as well as recommended best practices.</p>
            <p>Owners and people in charge need to understand the welfare needs of the horses in their care and meet the applicable minimum standards.</p>
            <p>This includes providing appropriate food and water, shelter, care, handling, health management and protection from avoidable injury or suffering.</p>

            <Subsection title="Horse Identification in New Zealand">
              <p>Identification is an important part of responsible horse management.</p>
              <p>New Zealand's rules around equine identification have also changed.</p>
              <p><strong>From 9 May 2026, hot branding of horses, ponies and donkeys is prohibited.</strong> MPI states that hot branding is painful and that the previous exception allowing hot branding of these equids with authorised veterinary pain relief ended on that date.</p>
              <p>Microchipping can provide useful permanent identification, and MPI's Code of Welfare recommends that microchipping be carried out by a veterinarian or appropriately trained person using suitable technique.</p>
              <p>Identification requirements can depend on the circumstances, so owners should check the current NZ requirements relevant to their horse rather than assuming that one identification system applies to every situation.</p>
              <p>At Hawkez Haven, accurate identification and records form an important part of responsible horse management and rehoming.</p>
            </Subsection>
          </Section>

          <Section title="What Happens If the Match Isn't Right?">
            <p>Sometimes, despite careful planning, a placement doesn't work out.</p>
            <p>Circumstances can change.</p>
            <p>A horse's needs may turn out to be different from what was expected. A person's circumstances may change. The existing herd may not settle well together. Or the partnership simply may not be right.</p>
            <p>This is one reason it is important to understand the rescue's rehoming and return arrangements <strong>before</strong> committing to a horse.</p>
            <p>At Hawkez Haven, the welfare of the horse remains central to the rehoming process.</p>
            <p>If you're considering adoption, ask what happens if circumstances change, and make sure you understand the agreement before taking the horse home.</p>
            <p>Responsible adoption isn't about pretending everything will always be perfect.</p>
            <p className="font-medium text-[#1a1a18]">It's about having a responsible pathway when things don't go according to plan.</p>
          </Section>

          <Section title="Adopting a Companion-Only Horse">
            <p>Not every horse needs to be ridden to have a meaningful future.</p>
            <p>Some horses may be retired, unsuitable for riding, recovering from injury, or simply happier living as companions.</p>
            <p>A companion horse can still provide:</p>
            <BulletList items={["Equine companionship", "A sense of purpose", "Social stability within a herd", "A relationship with people", "The opportunity to enjoy a safe and peaceful life"]} />
            <p>If you aren't looking for a riding horse, don't overlook horses whose greatest future may be as a companion.</p>
            <p>Sometimes giving a horse a good life means changing our expectations of what that life needs to look like.</p>
          </Section>

          <Section title="What Makes a Successful Rescue Horse Adoption?">
            <p>Successful adoption isn't measured by how quickly a horse becomes settled or how soon they can be ridden.</p>
            <p>It can look like:</p>
            <BulletList items={["A horse becoming comfortable in their new paddock.", "A nervous horse approaching their new person.", "A horse learning that handling doesn't have to be frightening.", "A previously unsettled horse developing a predictable routine.", "A new owner learning to read the horse's body language.", "A partnership developing because both horse and human have been given time to understand each other."]} />
            <p>These things take patience.</p>
            <p>That's why <strong>Connection Before Correction</strong> is so important at Hawkez Haven.</p>
            <p>Before asking a horse to do more, we need to understand what they're communicating.</p>
          </Section>

          <Section title="Horse Adoption at Hawkez Haven">
            <p>At <strong>Hawkez Haven – Second Chances</strong>, our work centres on rescue, rehabilitation and responsible rehoming.</p>
            <p>The horses who come through the Haven are individuals.</p>
            <p>There is no single rehabilitation timeline and no single definition of what a successful outcome looks like.</p>
            <p>Some horses need physical recovery.</p>
            <p>Some need confidence.</p>
            <p>Some need retraining.</p>
            <p>Some need time to learn that people can be trusted.</p>
            <p>Some simply need a safe place to reset before their next chapter.</p>
            <p>Our goal is to understand each horse as an individual and find a home that is appropriate for their needs, temperament and future.</p>
            <p>We don't believe in rushing a horse simply because someone is waiting to take them home.</p>
            <p className="font-medium text-[#1a1a18]">A good match is worth waiting for.</p>

            <Subsection title="Our Approach: Connection Before Correction">
              <p>Our approach is built around communication, patience and understanding.</p>
              <p>That doesn't mean horses don't need boundaries.</p>
              <p>They do.</p>
              <p>It means we believe boundaries are most effective when they are built on understanding rather than fear.</p>
              <p>We want adopters to understand the horse they are taking home, not simply the horse they hope that horse will become.</p>
              <p>That is why education and honest communication are such important parts of responsible rehoming.</p>
            </Subsection>
          </Section>

          <section className="mt-14 rounded-[2rem] bg-[#ede5d4] p-7 md:p-10 border border-[#ddd4be]/70">
            <div className="flex items-center gap-3">
              <Heart className="text-[#b8922a]" size={30} strokeWidth={1.5} />
              <h2 className="font-serif text-3xl">Other Ways to Support a Rescue Horse</h2>
            </div>
            <p className="mt-5 text-[#4a4a42] leading-relaxed">Horse adoption isn't the only way to support rescue and rehabilitation. If bringing a horse home isn't right for you, there are other ways to contribute.</p>
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              <Link to="/sponsorship" className="bg-white rounded-2xl p-6 border border-[#ddd4be]/60 hover:border-[#b8922a] transition-colors">
                <h3 className="font-serif text-xl">Sponsor a Rescue Horse</h3>
                <p className="mt-2 text-sm text-[#4a4a42] leading-relaxed">Sponsorship helps provide ongoing care for horses who are still at the Haven and working through their rehabilitation journey.</p>
              </Link>
              <Link to="/foster" className="bg-white rounded-2xl p-6 border border-[#ddd4be]/60 hover:border-[#b8922a] transition-colors">
                <h3 className="font-serif text-xl">Foster a Rescue Horse</h3>
                <p className="mt-2 text-sm text-[#4a4a42] leading-relaxed">Fostering can provide a horse with a temporary home and help create space for continued rescue work.</p>
              </Link>
              <Link to="/education" className="bg-white rounded-2xl p-6 border border-[#ddd4be]/60 hover:border-[#b8922a] transition-colors">
                <h3 className="font-serif text-xl">Learn With Us</h3>
                <p className="mt-2 text-sm text-[#4a4a42] leading-relaxed">Horse experiences and horsemanship education can help people develop safer, more thoughtful relationships with horses.</p>
              </Link>
              <Link to="/about" className="bg-white rounded-2xl p-6 border border-[#ddd4be]/60 hover:border-[#b8922a] transition-colors">
                <h3 className="font-serif text-xl">About Hawkez Haven</h3>
                <p className="mt-2 text-sm text-[#4a4a42] leading-relaxed">Learn more about Hawkez Haven – Second Chances and the work behind the horses' next chapters.</p>
              </Link>
            </div>
          </section>

          <Section title="Frequently Asked Questions About Horse Adoption NZ">
            <Subsection title="How much does it cost to adopt a horse in New Zealand?">
              <p>There is no single adoption price across New Zealand. Contributions can vary between organisations and individual horses depending on their circumstances, rehabilitation, training and ongoing care.</p>
              <p>However, the adoption contribution is only one part of the financial commitment. Prospective adopters should budget for feed, farrier care, veterinary care, dental care, parasite management, equipment, transport and unexpected expenses.</p>
            </Subsection>
            <Subsection title="Can a beginner adopt a rescue horse?">
              <p>Potentially, yes — but it depends on the individual horse and the beginner's support network, facilities and experience.</p>
              <p>Some horses may be appropriate for less experienced handlers, while others require confident and experienced homes.</p>
              <p>Being honest about your experience helps the rescue determine whether a particular horse is appropriate.</p>
            </Subsection>
            <Subsection title="Do rescue horses have known histories?">
              <p>Sometimes.</p>
              <p>Some horses arrive with detailed records, while others arrive with limited or incomplete histories.</p>
              <p>A responsible rescue should clearly distinguish between documented history, information provided by previous owners and observations made during rehabilitation.</p>
            </Subsection>
            <Subsection title="Do I need other horses before adopting?">
              <p>Many horses benefit greatly from equine companionship, but the appropriate arrangement depends on the individual horse.</p>
              <p>If you already have horses, their temperament and compatibility should also be considered.</p>
            </Subsection>
            <Subsection title="Can I adopt a horse that isn't rideable?">
              <p>Absolutely.</p>
              <p>Companion horses can have wonderful lives and can be extremely valuable members of a herd.</p>
              <p>A horse does not need to be ridden to have a worthwhile future.</p>
            </Subsection>
            <Subsection title="What should I ask before adopting a rescue horse?">
              <p>Ask questions.</p>
              <p>At minimum, ask about:</p>
              <BulletList items={["Health", "Hooves", "Dental care", "Behaviour", "Handling", "Riding history", "Training", "Diet", "Medication", "Known injuries", "Herd behaviour", "Known triggers", "Current management", "What support is available after adoption", "What happens if the placement doesn't work"]} />
              <p>A good rescue should welcome sensible questions.</p>
            </Subsection>
            <Subsection title="Is hot branding still allowed in New Zealand?">
              <p><strong>No.</strong></p>
              <p>As of <strong>9 May 2026, hot branding of horses, ponies and donkeys is prohibited in New Zealand.</strong></p>
              <p>Other identification methods, including microchipping, can be used to help identify horses. MPI recommends that microchipping be performed by a veterinarian or appropriately trained person.</p>
            </Subsection>
            <Subsection title="How do I know whether I'm ready to adopt?">
              <p>Ask yourself whether you can provide the horse with appropriate care for the long term — financially, physically and emotionally.</p>
              <p>Consider your experience, property, existing horses, available time, budget and access to professional support.</p>
              <p>And remember: being ready doesn't mean knowing everything.</p>
              <p>It means being willing to learn, ask questions and put the horse's welfare first.</p>
            </Subsection>
          </Section>

          <section className="mt-16 rounded-[2rem] bg-[#1a1a18] text-[#f5f0e8] p-8 md:p-12">
            <div className="flex items-start gap-4">
              <ShieldCheck className="text-[#b8922a] shrink-0 mt-1" size={34} strokeWidth={1.5} />
              <div>
                <h2 className="font-serif text-3xl md:text-4xl">Giving a Rescue Horse a Second Chance</h2>
                <div className="mt-5 space-y-5 text-[#f5f0e8]/75 leading-relaxed">
                  <p>Horse adoption isn't about finding a perfect horse.</p>
                  <p>It is about finding the right partnership.</p>
                  <p>The horse you meet today may not be the same horse you see six months from now. Confidence can grow. Trust can develop. Training can change. Physical condition can improve. And sometimes, what you discover along the way is that the horse you thought you were helping has taught you just as much in return.</p>
                  <p>At <strong className="text-[#f5f0e8]">Hawkez Haven – Second Chances</strong>, we believe every horse deserves the opportunity to be understood as an individual.</p>
                  <p>That means looking beyond a horse's past.</p>
                  <p>It means being honest about their needs.</p>
                  <p>It means preparing the right home.</p>
                  <p>It means making thoughtful matches rather than rushed placements.</p>
                  <p>And it means remembering that successful rehoming isn't simply about where a horse goes next.</p>
                  <p className="font-medium text-[#f5f0e8]">It's about whether they can <strong>stay safe, understood and valued there.</strong></p>
                  <p>If you're considering <strong>horse adoption in NZ</strong>, take your time, ask questions, prepare properly and choose the partnership — not simply the horse.</p>
                  <p>Because second chances aren't about changing who a horse is.</p>
                  <p className="font-serif text-2xl text-[#f5f0e8]">They're about giving them the opportunity to show you who they can become.</p>
                </div>
                <div className="mt-8 pt-7 border-t border-[#f5f0e8]/15">
                  <p className="font-serif text-2xl">Hawkez Haven – Second Chances</p>
                  <p className="mt-1 text-sm tracking-[.08em] text-[#b8922a]">Where Second Chances Find Their Stride.</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </article>
    </div>
  );
}
