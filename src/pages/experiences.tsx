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

export default function ExperiencesPage() {
  return (
    <div className="bg-[#f5f0e8]">
      <section className="bg-[#1a1a18] text-[#f5f0e8] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-[#b8922a]"><span className="block h-px w-8 bg-[#b8922a]" /><span className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Education & Horsemanship • Ashhurst, Manawatū</span></div>
          <h1 className="mt-6 font-serif text-5xl md:text-6xl text-[#f5f0e8] leading-tight max-w-4xl">Learn to understand horses, not just ride them.</h1>
          <p className="mt-6 text-lg text-[#f5f0e8]/70 max-w-3xl leading-relaxed">Hawkez Haven offers horse riding lessons, groundwork, horse care education and practical horsemanship experiences in Ashhurst, Manawatū. Our aim is simple: build knowledgeable, confident horse people who can listen, communicate and make better decisions for the horses in their care.</p>
          <div className="mt-8 inline-flex items-center rounded-full border border-[#b8922a]/40 bg-[#b8922a]/10 px-5 py-3 text-sm text-[#f5f0e8]/80"><span className="text-[#b8922a] font-medium mr-2">Introductory pricing</span> Selected experiences are currently offered at introductory rates while we build our education programme and community.</div>
          <p className="mt-4 text-[#f5f0e8]/50 text-sm">All sessions are by appointment. Numbers are kept small so every person receives genuine time and attention.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20"><div className="rounded-3xl bg-white border border-[#ddd4be]/60 shadow-sm p-8 md:p-12"><div className="flex items-center gap-3 text-[#b8922a] mb-5"><span className="block h-px w-8 bg-[#b8922a]" /><span className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Education before expectation</span></div><h2 className="font-serif text-3xl md:text-4xl text-[#1a1a18] leading-tight mb-5">Knowledge, feel and connection — with the horse at the centre.</h2><div className="space-y-4 text-[#4a4a42] leading-relaxed"><p>Good horsemanship is more than getting a horse to do what we ask. It is learning to notice what the horse is saying, understanding why they respond the way they do, and knowing when to slow down, change the question or simply listen.</p><p>At Hawkez Haven, education is welfare-first and practical. We teach horse care, safe handling, groundwork, communication, ridden skills and the thinking behind them. You will learn to read body language, recognise tension and uncertainty, develop timing and feel, and build trust without rushing the horse.</p><p>Whether you are a complete beginner, a returning rider, a parent wanting your child to learn safely, or an experienced horse person wanting to deepen your understanding, the goal is the same: <strong className="text-[#1a1a18]">become the kind of horse person your horse can trust.</strong></p></div></div></section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"><div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">{EXPERIENCES.map(experience => <article key={experience.id} className="bg-white rounded-2xl border border-[#ddd4be]/50 shadow-sm p-7"><p className="text-xs uppercase tracking-widest text-[#8c6e1e] font-medium">{experience.level}</p><h2 className="font-serif text-3xl text-[#1a1a18] mt-2">{experience.title}</h2><p className="text-sm text-[#6a675d] mt-2">{experience.subtitle} · {experience.duration}</p><div className="mt-4 text-2xl font-serif text-[#1a1a18]">{experience.price || "See lesson rates"} {experience.priceNote && <span className="text-sm font-sans text-[#6a675d]">{experience.priceNote}</span>}</div>{experience.priceLines && <div className="mt-2 text-sm text-[#4a4a42]">{experience.priceLines.map(line => <p key={line}>{line}</p>)}</div>}<p className="mt-5 text-[#4a4a42] leading-relaxed whitespace-pre-line">{experience.desc}</p><ul className="mt-5 space-y-2 text-sm text-[#4a4a42]">{experience.learn.map(item => <li key={item}>• {item}</li>)}</ul></article>)}</div></section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 text-center"><h2 className="font-serif text-4xl text-[#1a1a18]">Connection Before Correction.</h2><p className="mt-4 text-[#4a4a42] leading-relaxed">We don't believe good horsemanship is about forcing a horse into compliance. Understanding comes first. When you can read the horse, recognise tension, communicate clearly and adjust your approach, training becomes a conversation rather than a battle.</p><Link to="/enquire/experiences" className="mt-7 inline-flex items-center gap-2 px-7 py-3 bg-[#b8922a] text-white rounded-full text-sm font-medium">Make an education or lesson enquiry <ArrowRight size={16} /></Link></section>
      <EnquiryForm />
    </div>
  );
}
