import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import EnquiryForm from "./_components/EnquiryForm.tsx";

type Experience = {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  price: string;
  priceNote: string;
  priceLines?: string[];
  maxPeople: string;
  level: string;
  desc: string;
  learn: string[];
  image?: string;
};

const EXPERIENCE_OPTIONS: string[] = [
  "Horse Care Discovery",
  "Groundwork & Connection",
  "Horsemanship Deep Dive",
  "Riding at Hawkez Haven",
  "Road Ride",
  "Rescue & Rehabilitation Experience",
  "Senior Horse & Companion Session",
  "Family Horse Experience",
  "Riding Lessons",
];

const EXPERIENCES: Experience[] = [
  {
    id: "horse-care",
    title: "Horse Care Discovery",
    subtitle: "With Khan, Rip & Diablo",
    duration: "2 hours",
    price: "$50",
    priceNote: "per person",
    maxPeople: "Up to 4 people",
    level: "All ages & experience levels",
    desc: "Step into the daily life of a horse rescuer. Learn the foundations of horse ownership — what they eat, how they think, and what they need to feel safe and loved. You'll groom, feed, handle and connect with Khan, Rip and Diablo in a relaxed, guided session that's perfect for curious beginners, families, and anyone thinking about owning horses one day. Another suitable horse in Hawkez Haven's care may also be involved depending on availability and suitability at the time.",
    learn: ["Grooming techniques and why they matter", "Feed, nutrition and daily routines", "Rugging, health checks and water requirements", "Reading a horse's body language and mood", "What it truly costs to care for a horse"],
  },
  {
    id: "groundwork",
    title: "Groundwork & Connection",
    subtitle: "With Haven & Diablo",
    duration: "2.5 hours",
    price: "$45",
    priceNote: "per person",
    maxPeople: "Up to 3 people",
    level: "Confident beginners / intermediate beginners — some horse-handling experience required",
    desc: "Groundwork is where a great horse-human partnership begins. This session is for people who already have some basic horse-handling experience and want to develop their confidence, communication and feel. Discover how horses communicate through body language, space, timing and pressure-and-release, while learning to build connection without rushing or overwhelming the horse. If you're completely new to horses, start with Horse Care Discovery first.",
    learn: ["The language horses use with each other", "Leading with confidence and respect", "Personal space, pressure and release", "Building trust through consistency", "Connection Before Correction in practice"],
  },
  {
    id: "horsemanship",
    title: "Horsemanship Deep Dive",
    subtitle: "With Pedro, Khan, Haven & Diablo",
    duration: "3 hours",
    price: "$65",
    priceNote: "per person",
    maxPeople: "Up to 2 people",
    level: "Some horse experience preferred",
    desc: "An immersive session for those who want to go deeper. You'll work with our horses to develop real feel, timing and understanding — the three pillars of great horsemanship. This session draws on the quiet wisdom of Pedro, Khan, Haven and Diablo and your own willingness to slow down, listen and learn.",
    learn: ["Pressure, release and timing", "Emotional regulation around horses", "How to read resistance versus confusion", "Building a genuine partnership", "Why trust must come before training"],
  },
  {
    id: "riding",
    title: "Riding at Hawkez Haven",
    subtitle: "A relaxed riding experience at the Haven",
    image: "/images/Peanut-riding-lessons.jpg",
    duration: "Up to 2 hours",
    price: "$80",
    priceNote: "per person",
    maxPeople: "Up to 2 riders",
    level: "Beginner to intermediate riders",
    desc: "A riding experience built around you and the horse in front of you — not a one-size-fits-all lesson. You'll begin on the ground, building connection before you get in the saddle, then work through balance, feel and communication at a pace that suits you and your horse. Each ride is matched to the right horse for the rider, including suitable horses and ponies at Hawkez Haven depending on availability and suitability.",
    learn: ["Groundwork before riding", "Balance, position and feel", "Communicating through the reins and seat", "Building confidence in and out of the saddle", "Understanding your horse's responses"],
  },
  {
    id: "road-ride",
    title: "Road Ride",
    subtitle: "A longer ride beyond the Haven",
    duration: "Up to 3 hours",
    price: "$120",
    priceNote: "per person",
    maxPeople: "Up to 2 riders",
    level: "Confident riders with suitable experience",
    desc: "Take your horsemanship out beyond the property on a longer, guided ride. Road riding requires a horse and rider who are both ready for the environment, so this experience is for confident riders with suitable previous riding experience. We will discuss your experience before booking and match you with an appropriate horse where possible.",
    learn: ["Preparing yourself and your horse for a longer ride", "Awareness and safety around roads and surroundings", "Maintaining connection outside the arena or property", "Rider balance and confidence over distance", "Reading your horse in a changing environment"],
  },
  {
    id: "riding-lessons",
    title: "Riding Lessons",
    subtitle: "With Peanut, Pedro, Haven, Khan & eventually Diablo",
    image: "/images/pedro-lesson.jpg",
    duration: "1 hour",
    price: "",
    priceNote: "",
    priceLines: ["Children under 15 — $50 per 1-hour lesson", "Ages 16+ / Adults — $70 per 1-hour lesson"],
    maxPeople: "Private (1 rider per lesson)",
    level: "Beginners welcome (all ages)",
    desc: "Private, progressive horsemanship and riding lessons focused on building confident, capable horse people — not just riders who can sit in a saddle. Lessons include safe handling, grooming, tacking up, groundwork, horse behaviour and ridden skills tailored to the rider's experience and the horse's needs.\n\nWe have horses and ponies to suit different ages and stages, including Peanut, our bush pony mare who is an amazing asset for younger and smaller students building confidence, alongside Pedro, Haven and Khan.\n\nBeginners are welcome. Horse or pony provided. By appointment.",
    learn: ["Safe handling, grooming and horse care", "Tacking up and preparation", "Groundwork and communication before riding", "Balance, position, feel and ridden skills", "Reading your horse and adapting to their responses"],
  },
  {
    id: "rescue-education",
    title: "Rescue & Rehabilitation Experience",
    subtitle: "With Rip, Joey, Electra & Kohan",
    duration: "3 hours",
    price: "$35",
    priceNote: "per person",
    maxPeople: "Up to 4 people",
    level: "All levels — no riding required",
    desc: "Go behind the scenes of a real horse rescue. Meet our horses, hear their stories, and learn about the rehabilitation journey — from the moment a horse arrives frightened and unsure, to the day they find their stride again. This is an honest, moving and educational experience for horse lovers who want to understand welfare at a deeper level.",
    learn: ["What equine rescue really looks like", "The physical and emotional toll of neglect", "How we assess and plan each horse's rehabilitation", "Life after racing and competition", "How to advocate for better horse welfare in NZ"],
  },
  {
    id: "family",
    title: "Family Horse Experience",
    subtitle: "A hands-on experience for the whole family",
    duration: "2 hours",
    price: "$180",
    priceNote: "per family",
    maxPeople: "Up to 4 people",
    level: "No experience required — all ages welcome",
    desc: "A private, hands-on, ground-based horse experience created for families to enjoy together. Meet the Hawkez Haven horses, hear their stories, learn how horses communicate, and enjoy grooming, feeding, safe handling and simple groundwork activities.\n\nEach family receives their own horse treat bag to share with the horses during their visit.\n\nNear the end of the experience, children can choose the horse they connected with most and, with supervision, paint their name on their favourite horse using horse-safe, washable colours — with an opportunity for a photo together before they leave.\n\nActivities can be adapted to suit the ages and confidence levels within the family.\n\nThis is a ground-based experience. Riding experiences are booked separately.",
    learn: ["How horses communicate and show emotion", "Safe handling, grooming and feeding", "Simple groundwork activities", "Each horse's rescue story", "Supervised name-painting on their favourite horse"],
  },
  {
    id: "retirement",
    title: "Senior Horse & Companion Session",
    subtitle: "With Joey",
    duration: "1.5 hours",
    price: "$30",
    priceNote: "per person",
    maxPeople: "Up to 4 people",
    level: "Suitable for all ages including children",
    desc: "Spend gentle, meaningful time with Joey — our wise, much-loved elder. This session is entirely at Joey's pace and on his terms. We ask for quiet, calm and patience, and in return Joey offers his presence, his history and a connection that is truly special. You'll learn what it means to give an older horse a life full of dignity, comfort and choice. There is no performance here, no agenda — just two species taking time to simply be together. Perfect for those who want a heartfelt, unhurried connection with a horse who has earned his peace.",
    learn: ["Senior horse care and needs", "What a companion home looks like", "Managing aging horses with kindness", "Quality of life decisions", "The profound gift of a peaceful retirement"],
  },
];

const FAQS = [
  ["Do I need horse experience?", "Not always. Horse Care Discovery and the Family Horse Experience are suitable for beginners. Other sessions have their own experience requirements."],
  ["Are the experiences suitable for children?", "Children are welcome in suitable sessions. Tell us the ages of everyone attending when you enquire so we can choose an appropriate horse and activity."],
  ["Do you offer riding lessons?", "Yes. Riding lessons are available for beginner to intermediate riders, with lessons built around safe handling, balance, communication and the suitability of the horse."],
  ["What does an experience cost?", "Current introductory prices are listed on the Education & Horsemanship page. Prices may change as the programme grows, and the current price will be confirmed when you book."],
  ["How many people can attend?", "Group sizes are kept small so each person receives genuine time and attention. The maximum group size is listed for each experience."],
  ["Where are the sessions held?", "All experiences take place at Hawkez Haven in Ashhurst, Manawatū, New Zealand. Visits are by appointment only."],
  ["What should I wear?", "Closed-toe shoes are required and long trousers are recommended. We'll tell you about any additional safety equipment needed for your session."],
  ["How do I book?", "Use the enquiry form on this page to tell us which experience you want, how many people are attending and your preferred dates. We'll confirm availability and payment details."],
] as const;

export default function ExperiencesPage() {
  return (
    <div className="bg-[#f5f0e8]">
      <section className="bg-[#1a1a18] text-[#f5f0e8] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-[#b8922a]"><span className="block h-px w-8 bg-[#b8922a]" /><span className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Education & Horsemanship • Ashhurst, Manawatū</span></div>
          <h1 className="mt-6 font-serif text-5xl md:text-6xl text-[#f5f0e8] leading-tight max-w-4xl">Education & Horsemanship</h1>
          <p className="mt-6 text-lg text-[#f5f0e8]/70 max-w-3xl leading-relaxed">Learn to understand horses, not just ride them. Hawkez Haven offers horse riding lessons, groundwork, horse care education and practical horsemanship experiences in Ashhurst, Manawatū. Our aim is simple: build knowledgeable, confident horse people who can listen, communicate and make better decisions for the horses in their care.</p>
          <div className="mt-8 inline-flex items-center rounded-full border border-[#b8922a]/40 bg-[#b8922a]/10 px-5 py-3 text-sm text-[#f5f0e8]/80"><span className="text-[#b8922a] font-medium mr-2">Introductory pricing</span> Selected experiences are currently offered at introductory rates while we build our education programme and community. Prices may change as the programme grows; current pricing will be confirmed at the time of booking.</div>
          <p className="mt-4 text-[#f5f0e8]/50 text-sm">All sessions are by appointment. Numbers are kept small so every person receives genuine time and attention.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20"><div className="rounded-3xl bg-white border border-[#ddd4be]/60 shadow-sm p-8 md:p-12"><div className="flex items-center gap-3 text-[#b8922a] mb-5"><span className="block h-px w-8 bg-[#b8922a]" /><span className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Education before expectation</span></div><h2 className="font-serif text-3xl md:text-4xl text-[#1a1a18] leading-tight mb-5">Knowledge, feel and connection — with the horse at the centre.</h2><div className="space-y-4 text-[#4a4a42] leading-relaxed"><p>Good horsemanship is more than getting a horse to do what we ask. It is learning to notice what the horse is saying, understanding why they respond the way they do, and knowing when to slow down, change the question or simply listen.</p><p>At Hawkez Haven, education is welfare-first and practical. We teach horse care, safe handling, groundwork, communication, ridden skills and the thinking behind them. You will learn to read body language, recognise tension and uncertainty, develop timing and feel, and build trust without rushing the horse.</p><p>Whether you are a complete beginner, a returning rider, a parent wanting your child to learn safely, or an experienced horse person wanting to deepen your understanding, the goal is the same: <strong className="text-[#1a1a18]">become the kind of horse person your horse can trust.</strong></p></div></div></section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-8">
        {EXPERIENCES.map((exp, i) => (
          <div key={exp.id} id={exp.id} className={`rounded-3xl overflow-hidden grid lg:grid-cols-[1fr_1.6fr] border border-[#ddd4be]/50 shadow-sm ${i % 2 === 1 ? "bg-[#ede5d4]" : "bg-white"}`}>
            <div className="p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-[#ddd4be]/50"><p className="text-xs italic text-[#b8922a] mb-2">{exp.subtitle}</p><h2 className="font-serif text-3xl text-[#1a1a18] leading-tight">{exp.title}</h2><div className="mt-6 space-y-3 text-sm text-[#4a4a42]"><div className="flex items-center gap-3"><span className="text-[#b8922a] font-medium w-20 shrink-0">Duration</span><span>{exp.duration}</span></div><div className="flex items-start gap-3"><span className="text-[#b8922a] font-medium w-20 shrink-0">Price</span>{exp.priceLines ? <div className="space-y-0.5">{exp.priceLines.map(line => <p key={line} className="text-sm text-[#1a1a18]">{line}</p>)}</div> : <span className="font-serif text-xl text-[#1a1a18]">{exp.price} <span className="text-sm font-sans text-[#4a4a42]">{exp.priceNote}</span></span>}</div><div className="flex items-center gap-3"><span className="text-[#b8922a] font-medium w-20 shrink-0">Group</span><span>{exp.maxPeople}</span></div><div className="flex items-start gap-3"><span className="text-[#b8922a] font-medium w-20 shrink-0">Level</span><span>{exp.level}</span></div></div><Link to="/enquire/experiences" className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#b8922a] text-white text-sm font-medium rounded-full hover:bg-[#8c6e1e] transition-colors cursor-pointer">Book this experience <ArrowRight size={16} /></Link></div>
            <div className="p-8 md:p-10 flex flex-col justify-between"><div>{exp.image && <div className="mb-6 overflow-hidden rounded-2xl bg-[#ede5d4]/60 border border-[#ddd4be]/50 shadow-sm flex items-center justify-center p-2"><img src={exp.image} alt={exp.title} loading="lazy" className="w-full max-h-80 sm:max-h-96 object-contain rounded-xl" /></div>}<p className="text-[#4a4a42] leading-relaxed mb-6 whitespace-pre-line">{exp.desc}</p><h4 className="text-[0.65rem] tracking-[0.18em] uppercase font-medium text-[#b8922a] mb-4">What you'll learn</h4><ul className="space-y-2">{exp.learn.map(item => <li key={item} className="flex items-start gap-2 text-sm text-[#4a4a42]"><span className="mt-2 block w-1.5 h-1.5 rounded-full bg-[#b8922a] shrink-0" />{item}</li>)}</ul></div></div>
          </div>
        ))}
      </section>

      <section className="bg-[#ede5d4] py-20"><div className="max-w-3xl mx-auto px-4 sm:px-6"><div className="flex items-center gap-3 mb-4"><span className="block h-px w-8 bg-[#b8922a]" /><p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Good to know</p></div><h2 className="font-serif text-3xl text-[#1a1a18] mb-8">Before you book</h2><div className="grid md:grid-cols-2 gap-6">{[{title:"Location",desc:"All experiences take place at Hawkez Haven, Ashhurst, New Zealand. We are a working property — please do not drop in unannounced."},{title:"What to wear",desc:"Closed-toe shoes are required. Long trousers are recommended. We'll provide any additional safety equipment needed."},{title:"Booking",desc:"All sessions are by appointment only and subject to availability. We keep group sizes small so every visit is personal and meaningful."},{title:"Cancellations",desc:"We understand things come up. Please give us as much notice as possible if you need to reschedule. We'll do our best to find a suitable alternative."},{title:"Children",desc:"Children are welcome in most sessions. Please mention their ages when booking so we can match them with the right horse and experience."},{title:"Payment",desc:"Payment is due at time of booking. We accept bank transfer and PayPal. Contact us for group pricing for 5+ people."}].map(({title,desc})=><div key={title} className="bg-white rounded-xl p-5 border border-[#ddd4be]/50"><h3 className="font-medium text-[#1a1a18] text-sm mb-1">{title}</h3><p className="text-sm text-[#4a4a42] leading-relaxed">{desc}</p></div>)}</div></div></section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20"><div className="flex items-center gap-3 mb-4"><span className="block h-px w-8 bg-[#b8922a]" /><p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Frequently asked questions</p></div><h2 className="font-serif text-3xl md:text-4xl text-[#1a1a18] mb-8">Questions before you visit?</h2><div className="space-y-4">{FAQS.map(([question, answer]) => <details key={question} className="bg-white rounded-2xl border border-[#ddd4be]/50 p-5"><summary className="cursor-pointer font-medium text-[#1a1a18]">{question}</summary><p className="mt-3 text-sm text-[#4a4a42] leading-relaxed">{answer}</p></details>)}</div></section>

      <section className="max-w-2xl mx-auto px-4 sm:px-6 py-20"><div className="flex items-center gap-3 mb-4"><span className="block h-px w-8 bg-[#b8922a]" /><p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Book an experience</p></div><h2 className="font-serif text-4xl text-[#1a1a18] mb-3">Ready to visit?</h2><p className="text-[#4a4a42] mb-8 text-sm">Tell us which experience you're interested in, how many people, and your preferred dates. We'll confirm availability and send payment details.</p><EnquiryForm subject="Experience Booking Enquiry" serverSend fields={[{id:"experience",label:"Which experience(s) interest you?",type:"select",options:EXPERIENCE_OPTIONS},{id:"people",label:"Number of people"},{id:"dates",label:"Preferred dates / times"},{id:"level",label:"Your horse experience (if any)"}]} /></section>
    </div>
  );
}
