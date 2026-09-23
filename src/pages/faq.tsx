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
        a: <>Veterinary care is part of Hawkez Haven's welfare and rehabilitation work, with the horse's health needs considered individually. The type and level of veterinary care depends on the circumstances and needs of each horse.</>,
      },
      {
        q: "How long does rehabilitation take?",
        a: <>There is no fixed rehabilitation timeline. Every horse starts from a different place, so their journey is shaped around their individual needs, health, confidence and progress. Hawkez Haven does not rush a horse simply to meet a deadline.</>,
      },
      {
        q: "What happens when a horse isn't suitable for rehoming?",
        a: <>A horse's future is considered around their individual welfare and needs. Hawkez Haven does not believe a horse should be pushed into an unsuitable home simply because they are difficult to place.</>,
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
        a: <>Requirements vary by horse. Hawkez Haven considers the adopter's horse experience, understanding of equine behaviour and body language, intended rider or handler, environment, available support and ability to meet that particular horse's needs.</>,
      },
      {
        q: "Do you require references?",
        a: <>References or additional information may be requested as part of assessing a proposed home, particularly where more information is needed to understand the experience, setup or suitability of the placement.</>,
      },
      {
        q: "Can a beginner adopt a rescue horse?",
        a: <>Some horses may suit beginners or younger riders, but this is always assessed individually. Hawkez Haven will not place a horse where the knowledge, confidence or support required to safely meet that horse's needs is not present.</>,
      },
      {
        q: "How do you decide which home is suitable for each horse?",
        a: <>Matching is based on compatibility rather than speed. Hawkez Haven considers the horse's temperament, needs and future goals alongside the adopter's experience, setup, lifestyle and ability to provide the right long-term care.</>,
      },
      {
        q: "What happens if an adopter can no longer keep the horse?",
        a: <>Hawkez Haven would rather a horse be returned than placed into an unsuitable situation. The organisation remains a support network after adoption and can discuss what needs to happen if circumstances change.</>,
      },
      {
        q: "Why are Hawkez Haven horses placed in approved homes?",
        a: <>The approved-home process helps make sure the horse's next home is suitable for their individual needs, experience level, environment and long-term welfare. The goal is not simply to find a home, but to find the right home.</>,
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
