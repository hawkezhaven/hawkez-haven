import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FAQ_SECTIONS = [
  {
    title: "About Hawkez Haven",
    questions: [
      {
        q: "What is Hawkez Haven – Second Chances?",
        a: <>Hawkez Haven – Second Chances is a New Zealand equine rescue, rehabilitation, education and responsible rehoming organisation. Our approach is welfare-first, giving horses time, care, connection and genuine second chances.</>,
      },
      {
        q: "Where is Hawkez Haven located?",
        a: <>Hawkez Haven is based in Ashhurst, Manawatū, New Zealand. We work with suitable homes and supporters beyond the local area as well.</>,
      },
      {
        q: "What does Hawkez Haven do?",
        a: <>Hawkez Haven rescues horses in need, supports their physical and emotional recovery, provides rehabilitation and retraining where appropriate, and carefully matches suitable horses with responsible homes. We also provide horsemanship education and practical horse experiences.</>,
      },
      {
        q: "What types of horses does Hawkez Haven help?",
        a: <>Every horse is considered as an individual. Hawkez Haven works with horses who need rescue, rehabilitation or a carefully considered next chapter, including horses affected by neglect, injury, difficult experiences, or the challenges of life after racing. Some horses may be senior, companion-only or have ongoing physical limitations.</>,
      },
    ],
  },
  {
    title: "Rescue & Rehabilitation",
    questions: [
      {
        q: "What happens when a horse arrives at Hawkez Haven?",
        a: <>The horse's individual circumstances, health, behaviour, handling needs and welfare are considered so that their care and rehabilitation can be shaped around what they actually need. Some horses need veterinary or farrier care, nutrition support, confidence building, groundwork or simply time and consistency to settle.</>,
      },
      {
        q: "How is a rescued horse assessed?",
        a: <>Assessment is individual rather than a one-size-fits-all checklist. Hawkez Haven looks at the horse's history, health, temperament, behaviour, handling, confidence and practical needs, then uses those observations to guide rehabilitation and any future home matching.</>,
      },
      {
        q: "Does every horse receive veterinary assessment?",
        a: <>Every horse entering Hawkez Haven is assessed according to its individual health, history and circumstances, and veterinary care is sought whenever it is required. Depending on the horse, this can include assessment or treatment relating to weight and body condition, injuries or previous injuries, lameness or mobility concerns, feet and hoof condition, dental health, skin or other visible health problems, parasites and worming requirements, nutrition and dietary needs, medications or ongoing treatment, previous racing, riding or work history, and any other concern identified during rehabilitation. The type and level of veterinary care is not identical for every horse — some may require extensive veterinary intervention while another may require routine care and monitoring. The horse is assessed as an individual, and its care plan is based on what that horse actually requires.</>,
      },
      {
        q: "How long does rehabilitation take?",
        a: <>There is no fixed rehabilitation timeline. Every horse starts from a different place, so their journey is shaped around their individual needs, health, confidence and progress. Hawkez Haven does not rush a horse simply to meet a deadline.</>,
      },
      {
        q: "What happens when a horse isn't suitable for rehoming?",
        a: <>Not every horse that comes into Hawkez Haven will be suitable for rehoming, and being unable to be rehomed does not mean that horse is unwanted or has failed. Some horses may have permanent physical limitations, ongoing medical needs, significant behavioural or emotional needs, age-related requirements, or simply be unsuitable for the type of home available to them. Where a horse is not considered suitable for a conventional rehoming placement, Hawkez Haven looks at what that individual horse actually needs for the rest of its life. Depending on the circumstances, this may mean remaining under Hawkez Haven's care, remaining as a companion horse, living a non-ridden life, requiring ongoing veterinary, hoof, dietary or management support, or being placed only with a home that can genuinely meet its specific needs. A horse will not be placed into an unsuitable home simply to make room for another horse. Some horses may therefore remain with Hawkez Haven indefinitely when that is the safest and most appropriate outcome available to them.</>,
      },
      {
        q: "Do you help senior horses?",
        a: <>Yes. Senior horses can have very different needs from younger horses, and Hawkez Haven considers companion and non-ridden placements where appropriate. The adoption process focuses on finding a home that can meet the individual horse's needs.</>,
      },
      {
        q: "Do you help horses with injuries or ongoing limitations?",
        a: <>Yes. Horses with injuries, physical limitations or ongoing management needs may require a different rehabilitation pathway or a specialised home. Their needs are considered individually rather than treating every horse as though the same outcome is appropriate.</>,
      },
    ],
  },
  {
    title: "Adoption & Rehoming",
    questions: [
      {
        q: "How does adoption work?",
        a: <>The process begins with learning about the horse and submitting an enquiry. Hawkez Haven then considers your experience, setup, goals and the life you can offer, discusses suitability, arranges a visit where appropriate, and formalises an adoption agreement when everyone is confident the match is right. <Link to="/adoption" className="text-[#8c6e1e] underline underline-offset-2">Learn more about adoption</Link>.</>,
      },
      {
        q: "What are the requirements to adopt a horse?",
        a: <>Hawkez Haven is looking for genuine, committed homes — not temporary homes, impulse purchases or placements based simply on wanting a horse. Adoption is intended to be a <strong>long-term, lifelong commitment wherever possible.</strong> Before adopting, applicants need to be confident that they are prepared to care for the horse throughout its life, including through <strong>changes in circumstances and the horse's changing needs as it ages.</strong> An approved adopter must be willing to provide safe, appropriate accommodation and daily care, meet the horse's feed, hoof, dental, veterinary and general welfare needs, provide appropriate companionship and management, have the experience, knowledge or support necessary for that particular horse, respect any restrictions or special requirements relating to the horse, communicate honestly with Hawkez Haven, agree to Hawkez Haven's <strong>Approved Home Agreement</strong> and associated adoption documentation, and commit to the horse's long-term welfare. Every horse is different, so the requirements aren't identical for every adoption. Approval is based on whether the individual horse and individual home are a suitable match.</>,
      },
      {
        q: "Do you require references?",
        a: <>References or additional information may be requested as part of assessing a proposed home, particularly where more information is needed to understand the experience, setup or suitability of the placement.</>,
      },
      {
        q: "Can a beginner adopt a rescue horse?",
        a: <>Yes, potentially — but being a beginner does not automatically make a horse suitable for you. Some horses may be appropriate for a less experienced owner when the right support system is in place, while others will require an experienced handler. For a beginner, Hawkez Haven may look at whether you have reliable access to someone who can help you learn and make safe decisions, such as a qualified riding instructor, an experienced horse-owning friend, a knowledgeable sibling or parent, a partner with appropriate horse experience, or another trusted local horse professional. The important thing is whether you have the support, willingness to learn and commitment required to safely care for the particular horse you're applying for. Hawkez Haven would rather say “this horse isn't the right one for you” than place a beginner with a horse that is beyond their current experience. A good match gives both horse and human the opportunity to build confidence together.</>,
      },
      {
        q: "How do you decide which home is suitable for each horse?",
        a: <>Matching is based on compatibility rather than speed. Hawkez Haven considers the horse's temperament, needs and future goals alongside the adopter's experience, setup, lifestyle and ability to provide the right long-term care.</>,
      },
      {
        q: "What happens if an adopter can no longer keep the horse?",
        a: <>Hawkez Haven's first priority is making sure the horse remains safe. If circumstances change and an adopter can no longer keep their horse, the adopter must contact Hawkez Haven rather than simply selling, giving away or passing the horse on without communication. The adopter can have two options, depending on the circumstances: the horse can be returned to Hawkez Haven for assessment and the next appropriate placement to be considered, or the adopter may be able to help Hawkez Haven find a suitable new home themselves, provided the proposed home is approved and is willing to enter into the same required agreements and welfare conditions. Any new placement must continue to protect the horse's welfare and maintain the information and history needed to safely track its future. The aim is not to prevent an adopter from ever finding another home for their horse. The aim is to prevent a Hawkez Haven horse from disappearing into an unknown chain of homes where nobody knows where it has gone or what has happened to it.</>,
      },
      {
        q: "Why are Hawkez Haven horses placed in approved homes?",
        a: <>Because where a rescue horse goes next can be just as important as what happens to it while it is in rescue. Horses can be sold, given away or passed on with good intentions, only for circumstances to change afterwards. A horse may end up with someone who does not understand its needs, is inexperienced with its temperament, expected it to perform at a level it cannot safely manage, wanted a riding horse but received a horse requiring rehabilitation, loses interest once the novelty wears off, does not understand the horse's previous trauma or limitations, or simply turns out not to be the person they presented themselves as when obtaining it. Sometimes the horse and human simply do not connect. A horse may become anxious, confused or lose confidence in a new environment, while a rider may lose confidence because they do not understand the horse's behaviour. Handling mistakes can escalate, and a horse that was previously progressing can begin to regress. Eventually the horse may acquire a reputation or label based on that failed relationship. Once a horse is labelled as “difficult,” “dangerous,” “naughty,” “unrideable” or “problematic,” it can attract the wrong kind of attention and be passed to someone who approaches the horse through force rather than understanding why it is struggling. That can create another cycle of fear, loss of confidence and failed placement. In the worst circumstances, a horse can continue moving from home to home, become neglected, lose condition, receive inadequate care, or end up in a situation where its welfare is seriously compromised. That is exactly the cycle Hawkez Haven is trying to interrupt. An approved home is not about judging people or making adoption unnecessarily difficult. It is about taking the time to establish who this horse is, what this horse needs, who the person applying is, what they can realistically provide, and whether these two are actually going to work together. The goal is a safe, appropriate and lasting connection rather than simply getting a horse out of rescue quickly. That is why Hawkez Haven uses approved-home agreements and why adopters are expected to remain accountable for the horse's welfare. The horse's story should not end when it leaves Hawkez Haven. We want to know that the next chapter is a safe one.</>,
      },
    ],
  },
  {
    title: "Volunteering",
    questions: [
      {
        q: "How can I volunteer?",
        a: <>You can learn about current volunteer roles and submit an enquiry through the <Link to="/volunteer" className="text-[#8c6e1e] underline underline-offset-2">Volunteer page</Link>. Roles can include horse care and husbandry, rehabilitation support, gear and yard care, and session support.</>,
      },
      {
        q: "What sort of volunteer work is available?",
        a: <>Volunteer roles include horse care and husbandry, rehabilitation support, gear and yard care, and helping handlers during individual horse sessions. The level of horse handling depends on experience and appropriate supervision.</>,
      },
      {
        q: "Do I need horse experience to volunteer?",
        a: <>Not necessarily. Hawkez Haven welcomes helpers for property maintenance, gear care and supervised horse care. Previous horse experience is valued for handling sensitive horses or assisting with rehabilitation groundwork.</>,
      },
      {
        q: "How do I apply?",
        a: <>Use the enquiry options on the <Link to="/volunteer" className="text-[#8c6e1e] underline underline-offset-2">Volunteer page</Link> to get in touch and discuss your experience, availability and the kind of work you would like to help with.</>,
      },
    ],
  },
  {
    title: "Supporting Hawkez Haven",
    questions: [
      {
        q: "How can I donate?",
        a: <>You can support Hawkez Haven through the <Link to="/support" className="text-[#8c6e1e] underline underline-offset-2">Support page</Link>, which includes options for one-off giving and specific needs such as hay, feed, veterinary care, hoof care and equipment.</>,
      },
      {
        q: "Can I sponsor a horse?",
        a: <>Yes. Hawkez Haven offers rescue-horse sponsorship, allowing supporters to contribute toward the care of an individual horse. <Link to="/sponsorship" className="text-[#8c6e1e] underline underline-offset-2">Learn about sponsorship</Link>.</>,
      },
      {
        q: "Can I donate hay, feed or equipment?",
        a: <>Hay, feed, veterinary care, hoof care and practical equipment are all part of the ongoing cost of caring for rescue horses. If you would like to discuss a specific physical donation, please <Link to="/contact" className="text-[#8c6e1e] underline underline-offset-2">contact Hawkez Haven</Link> first so the current need can be confirmed.</>,
      },
      {
        q: "How can businesses support Hawkez Haven?",
        a: <>Businesses interested in supporting Hawkez Haven can get in touch to discuss ways they may be able to contribute to rescue, rehabilitation, education or the practical needs of the horses. <Link to="/contact" className="text-[#8c6e1e] underline underline-offset-2">Contact Hawkez Haven</Link> to start the conversation.</>,
      },
    ],
  },
  {
    title: "Education",
    questions: [
      {
        q: "Does Hawkez Haven offer horsemanship education?",
        a: <>Yes. Hawkez Haven offers horse education, horsemanship and practical experiences with welfare, safety and understanding at the heart of the programme. <Link to="/education" className="text-[#8c6e1e] underline underline-offset-2">Explore Education & Horsemanship</Link>.</>,
      },
      {
        q: "What do students learn?",
        a: <>Depending on the experience, students can learn about horse care, body language, equine welfare, groundwork, communication, handling, life after racing and the rehabilitation journey of rescue horses.</>,
      },
      {
        q: "Do you offer children's programmes?",
        a: <>Yes. Hawkez Haven offers experiences designed for school-aged children and families, including education about horses, horse care, welfare and understanding behaviour. Suitable sessions and age requirements are listed on the Education & Horsemanship page.</>,
      },
    ],
  },
] as const;

export default function FAQPage() {
  return (
    <div className="bg-[#f5f0e8] text-[#1a1a18]">
      <section className="bg-[#1a1a18] text-[#f5f0e8] py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-[#b8922a]">
            <span className="block h-px w-8 bg-[#b8922a]" />
            <span className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Hawkez Haven – Second Chances</span>
          </div>
          <h1 className="mt-6 font-serif text-5xl md:text-6xl leading-tight">Frequently Asked Questions</h1>
          <p className="mt-6 text-lg text-[#f5f0e8]/70 max-w-3xl leading-relaxed">
            Straightforward answers about rescue, rehabilitation, adoption, volunteering, support and education at Hawkez Haven.
          </p>
        </div>
      </section>

      {FAQ_SECTIONS.map((section, index) => (
        <section
          key={section.title}
          className={index % 2 === 1 ? "bg-[#ede5d4] py-20 md:py-24" : "py-20 md:py-24"}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="block h-px w-8 bg-[#b8922a]" />
              <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium text-[#8c6e1e]">{section.title}</p>
            </div>
            <div className="space-y-5">
              {section.questions.map(({ q, a }) => (
                <article key={q} className="bg-white rounded-2xl p-6 md:p-8 border border-[#ddd4be]/60 shadow-sm">
                  <h2 className="font-serif text-xl md:text-2xl text-[#1a1a18] leading-snug">{q}</h2>
                  <div className="mt-3 text-sm md:text-base text-[#4a4a42] leading-relaxed">{a}</div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-[#1a1a18] text-[#f5f0e8] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl">Still have a question?</h2>
          <p className="mt-4 text-[#f5f0e8]/70 leading-relaxed">
            If you cannot find what you are looking for, get in touch and we can talk through your question and what you need.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 px-7 py-3 bg-[#b8922a] text-white text-sm font-medium rounded-full hover:bg-[#8c6e1e] transition-colors"
          >
            Contact Hawkez Haven <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
