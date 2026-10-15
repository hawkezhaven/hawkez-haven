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
  available?: boolean;
};

const EXPERIENCE_OPTIONS: string[] = [
  "Horse Care & Discovery",
  "Inside the Herd",
  "Groundwork & Connection",
  "Riding Lessons",
  "Rescue & Rehabilitation",
  "Jasper & Onyx — Little Minis",
];

const EXPERIENCES: Experience[] = [
  {
    id: "horse-care",
    title: "Horse Care Discovery",
    subtitle: "Horse care, welfare and discovery",
    duration: "2 hours",
    price: "Optional donation",
    priceNote: "",
    maxPeople: "Up to 4 people",
    level: "All ages & experience levels",
    available: true,
    desc: "Step into the daily life of a horse rescuer. Learn the foundations of horse ownership — what they eat, how they think, and what they need to feel safe and loved. You'll groom, feed, handle and connect with suitable horses from the herd in a relaxed, guided session that's perfect for curious beginners, families, and anyone thinking about owning horses one day. No particular horse is promised or pre-booked. The horse and activities available will depend on each horse’s schooling, behaviour, confidence and learning skills at the time of your visit.",
    learn: ["Grooming techniques and why they matter", "Feed, nutrition and daily routines", "Rugging, health checks and water requirements", "Reading a horse's body language and mood", "What it truly costs to care for a horse"],
  },
  {
    id: "homeschool-workshop",
    title: "Inside the Herd",
    subtitle: "Equine learning, observation and herd behaviour",
    duration: "3 hours",
    price: "Optional donation",
    priceNote: "",
    maxPeople: "Spaces strictly limited",
    level: "Suitable for all school-aged children — no prior horse experience required",
    available: true,
    desc: "Step away from the textbooks and step into the pasture! Designed specifically for homeschoolers and young animal lovers, this immersive 3-hour workshop brings science, empathy, and practical horsemanship together. Kids will discover how horses really think, feel, and communicate, all while learning safe, respectful handling alongside our rescued herd.\n\nWhat they'll learn & experience:\n• The Meadow Observation Circle: Sit quietly near the pasture to learn horse body language, herd dynamics, and how to regulate personal energy.\n• The Rescue Story & Care Station: Meet residents up close, hear individual rescue stories, and learn foundations of grooming and health care.\n• Live Lunge Line Demonstration: Watch a Hawkez Haven team member demonstrate clear communication, energy, and timing on the lunge line—showing how we ask a horse to transition smoothly and always end on a positive note.\n• Leading with Heart & Respect: Hands-on practice learning safe handling, personal space, pressure-and-release, and how to lead a calm sanctuary horse with confidence.\n\nA wonderful, unhurried day focused on education before expectation. Spaces are strictly limited to keep the experience calm and personal for both kids and horses.\n\nBring a packed lunch and drink. The day is arranged around the horses and safe learning opportunities available at the time.",
    learn: ["Horse body language and herd dynamics", "Grooming and basic horse health care", "Communication, energy and timing on the lunge line", "Safe handling, personal space and pressure-and-release", "Understanding horses through science, empathy and observation"],
  },
  {
    id: "groundwork",
    title: "Groundwork & Connection",
    subtitle: "Groundwork, communication and connection",
    duration: "2.5 hours",
    price: "Optional donation",
    priceNote: "",
    maxPeople: "Up to 3 people",
    level: "Confident beginners / intermediate beginners — some horse-handling experience required",
    available: true,
    desc: "Groundwork is where a great horse-human partnership begins. This session is for people who already have some basic horse-handling experience and want to develop their confidence, communication and feel. Discover how horses communicate through body language, space, timing and pressure-and-release, while learning to build connection without rushing or overwhelming the horse. If you're completely new to horses, start with Horse Care Discovery first.",
    learn: ["The language horses use with each other", "Leading with confidence and respect", "Personal space, pressure and release", "Building trust through consistency", "Connection Before Correction in practice"],
  },
  {
    id: "riding-lessons",
    title: "Riding Lessons",
    subtitle: "Private lessons built around the rider and suitable horse",
    image: "/images/pedro-lesson.jpg",
    duration: "1 hour",
    price: "",
    priceNote: "",
    priceLines: ["Children aged 15 and under — $50 per 1-hour lesson", "Ages 16 and over — $70 per 1-hour lesson"],
    maxPeople: "Private (1 rider per lesson)",
    level: "Beginners welcome (all ages)",
    available: true,
    desc: "Private, progressive horsemanship and riding lessons focused on building confident, capable horse people — not just riders who can sit in a saddle. Lessons include safe handling, grooming, tacking up, groundwork, horse behaviour and ridden skills tailored to the rider's experience and the horse's needs.\n\nWe have horses and ponies to suit different ages and stages. Horse allocation is based on the rider's experience and each horse's schooling, behaviour, confidence, learning skills and suitability at the time. No particular horse is promised or pre-booked.\n\nFor children completing a riding milestone, Hawkez Haven provides a universal graduation completion card featuring a photo of the horse or pony they worked with. The same reusable card is used for every student, with the rider's name, horse, date and achievement recorded for their keepsake.\n\nBeginners are welcome. A suitable horse or pony is provided. No particular horse is guaranteed. By appointment.",
    learn: ["Safe handling, grooming and horse care", "Tacking up and preparation", "Groundwork and communication before riding", "Balance, position, feel and ridden skills", "Reading your horse and adapting to their responses", "Working toward riding milestones and completion"],
  },
  {
    id: "rescue-education",
    title: "Rescue & Rehabilitation Experience",
    subtitle: "Behind the scenes at Hawkez Haven",
    duration: "3 hours",
    price: "Optional donation",
    priceNote: "",
    maxPeople: "Up to 4 people",
    level: "All levels — no riding required",
    available: true,
    desc: "Go behind the scenes of a real horse rescue. Meet our horses, hear their stories, and learn about the rehabilitation journey — from the moment a horse arrives frightened and unsure, to the day they find their stride again. This is an honest, moving and educational experience for horse lovers who want to understand welfare at a deeper level.\n\nThere is no fixed fee for this summer experience and no obligation to donate. If you choose to contribute, your donation helps support essential care across the rescue.",
    learn: ["What equine rescue really looks like", "The physical and emotional toll of neglect", "How we assess and plan each horse's rehabilitation", "Life after racing and competition", "How to advocate for better horse welfare in NZ"],
  },
  {
    id: "little-minis",
    title: "Little Minis Day — Jasper & Onyx",
    image: "/images/Jasper and Onyx-experience.png",
    subtitle: "A gentle mini-horse experience for little kids",
    duration: "30 minutes",
    price: "Optional donation",
    priceNote: "",
    maxPeople: "By enquiry",
    level: "Little kids — age suitability confirmed when you enquire",
    available: true,
    desc: "A gentle, welfare-led experience with Jasper and Onyx. Children can brush and pat the minis, have a photo with them, and take them for a short in-hand walk as part of their daily exercise. There is no riding — just grooming, learning, connection and little-mini-horse fun.\n\nMorning or afternoon sessions may be available. Only one Little Minis Day session will be offered per day, even if the other time of day remains available, so Jasper and Onyx have plenty of rest and the experience stays enjoyable for them.\n\nBookings are enquiry-only. Hawkez Haven will confirm the date, morning or afternoon time, child suitability and whether the minis are happy and comfortable to participate on the day.",
    learn: ["Brushing and gentle grooming", "Safe, respectful interaction with miniature horses", "Reading simple horse body language", "A short supervised in-hand walk", "A photo memory with Jasper & Onyx"],
  },
];

const FAQS = [
  ["Do I need horse experience?", "Not always. Inside the Herd and the Family Horse Experience are suitable for beginners, and riding lessons can be tailored to beginner riders."],
  ["Are the experiences suitable for children?", "Children are welcome in suitable sessions. Tell us the ages of everyone attending when you enquire, and we will discuss what is appropriate at the time."],
  ["Can I ride during my visit?", "Riding is considered individually and is never guaranteed. We assess the participant, horse, activity, supervision, weather and welfare needs before deciding whether riding is suitable. Regular riding lessons are a separate, priced service."],
  ["Are donations compulsory?", "No. Summer experience visits are donation-supported, with no fixed fee and absolutely no obligation to donate. Regular riding lessons remain separately priced, and any lesson price will be confirmed before you book."],
  ["Will I be matched with a particular horse?", "No. Horses are not pre-booked for specific experience cards. The horse and activities are chosen at the time based on each horse’s schooling, behaviour, confidence, learning skills and welfare."],
  ["How many people can attend?", "Group sizes are kept small so each person receives genuine time and attention. The maximum group size is listed for each experience."],
  ["Where are the sessions held?", "All experiences take place at Hawkez Haven in Ashhurst, Manawatū, New Zealand. Visits are by appointment only."],
  ["What should I wear?", "Closed-toe shoes are required and long trousers are recommended. We'll tell you about any additional safety equipment needed for your session."],
  ["How do I arrange a visit?", "All visits are enquiry-only. Tell us who would like to attend, ages, horse experience, interests and preferred dates. We will discuss suitable options and confirm arrangements personally. Please do not arrive without a confirmed appointment."],
] as const;

export default function ExperiencesPage() {
  return (
    <div className="bg-[#f5f0e8]">
      <section className="bg-[#1a1a18] text-[#f5f0e8] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-[#b8922a]"><span className="block h-px w-8 bg-[#b8922a]" /><span className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Education & Horsemanship • Ashhurst, Manawatū</span></div>
          <h1 className="mt-6 font-serif text-5xl md:text-6xl text-[#f5f0e8] leading-tight max-w-4xl">Education & Horsemanship</h1>
          <p className="mt-6 text-lg text-[#f5f0e8]/70 max-w-3xl leading-relaxed">Learn to understand horses, not just ride them. Hawkez Haven offers horse riding lessons, groundwork, horse care education and practical horsemanship experiences in Ashhurst, Manawatū. Our aim is simple: build knowledgeable, confident horse people who can listen, communicate and make better decisions for the horses in their care.</p>
          <div className="mt-8 inline-flex items-center rounded-full border border-[#b8922a]/40 bg-[#b8922a]/10 px-5 py-3 text-sm text-[#f5f0e8]/80"><span className="text-[#b8922a] font-medium mr-2">Summer launch</span> Summer experience visits are donation-supported, with no fixed fee and no obligation to donate. Regular riding lessons remain separately priced. All visits are arranged individually by enquiry.</div>
          <p className="mt-4 text-[#f5f0e8]/50 text-sm">Enquiry-only visits • Riding considered individually • Horse welfare comes first. Please wait for confirmation before visiting.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20"><div className="rounded-3xl bg-white border border-[#ddd4be]/60 shadow-sm p-8 md:p-12"><div className="flex items-center gap-3 text-[#b8922a] mb-5"><span className="block h-px w-8 bg-[#b8922a]" /><span className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Education before expectation</span></div><h2 className="font-serif text-3xl md:text-4xl text-[#1a1a18] leading-tight mb-5">Knowledge, feel and connection — with the horse at the centre.</h2><div className="space-y-4 text-[#4a4a42] leading-relaxed"><p>Good horsemanship is more than getting a horse to do what we ask. It is learning to notice what the horse is saying, understanding why they respond the way they do, and knowing when to slow down, change the question or simply listen.</p><p>At Hawkez Haven, education is welfare-first and practical. We teach horse care, safe handling, groundwork, communication, ridden skills and the thinking behind them. You will learn to read body language, recognise tension and uncertainty, develop timing and feel, and build trust without rushing the horse.</p><p>Whether you are a complete beginner, a returning rider, a parent wanting your child to learn safely, or an experienced horse person wanting to deepen your understanding, the goal is the same: <strong className="text-[#1a1a18]">become the kind of horse person your horse can trust.</strong></p></div></div></section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12"><div className="rounded-3xl bg-white border border-[#ddd4be]/50 shadow-sm p-8 md:p-10"><div className="flex items-center gap-3 mb-4"><span className="block h-px w-8 bg-[#b8922a]" /><p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium text-[#b8922a]">Build your pathway</p></div><h2 className="font-serif text-3xl md:text-4xl text-[#1a1a18] mb-4">Build Your Hawkez Haven Experience</h2><p className="text-[#4a4a42] leading-relaxed mb-6">Want to keep learning? Choose the experience that best suits your goals and current confidence. If you'd like a more tailored visit, mention what you'd like to learn when you enquire and we'll talk through the options currently available.</p><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm"><div className="bg-[#f5f0e8] rounded-2xl p-5"><strong className="text-[#1a1a18]">Discover</strong><p className="mt-2 text-[#4a4a42]">Family Horse Experience or Inside the Herd</p></div><div className="bg-[#f5f0e8] rounded-2xl p-5"><strong className="text-[#1a1a18]">Connect</strong><p className="mt-2 text-[#4a4a42]">Rescue & Rehabilitation</p></div><div className="bg-[#f5f0e8] rounded-2xl p-5"><strong className="text-[#1a1a18]">Understand</strong><p className="mt-2 text-[#4a4a42]">Practical rescue and welfare learning</p></div><div className="bg-[#f5f0e8] rounded-2xl p-5"><strong className="text-[#1a1a18]">Ride</strong><p className="mt-2 text-[#4a4a42]">Riding Lessons</p></div></div></div></section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-8">
        {EXPERIENCES.map((exp, i) => (
          <div key={exp.id} id={exp.id} className={`rounded-3xl overflow-hidden grid lg:grid-cols-[1fr_1.6fr] border border-[#ddd4be]/50 shadow-sm ${i % 2 === 1 ? "bg-[#ede5d4]" : "bg-white"} ${exp.available === false ? "opacity-75" : ""}`}>
            <div className="p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-[#ddd4be]/50"><p className="text-xs italic text-[#b8922a] mb-2">{exp.subtitle}</p><h2 className="font-serif text-3xl text-[#1a1a18] leading-tight">{exp.title}</h2><div className="mt-6 space-y-3 text-sm text-[#4a4a42]"><div className="flex items-center gap-3"><span className="text-[#b8922a] font-medium w-20 shrink-0">Duration</span><span>{exp.duration}</span></div><div className="flex items-start gap-3"><span className="text-[#b8922a] font-medium w-20 shrink-0">Cost</span>{exp.priceLines ? <div className="space-y-0.5">{exp.priceLines.map(line => <p key={line} className="text-sm text-[#1a1a18]">{line}</p>)}</div> : <span className="font-serif text-xl text-[#1a1a18]">{exp.price} <span className="text-sm font-sans text-[#4a4a42]">{exp.priceNote}</span></span>}</div><div className="flex items-center gap-3"><span className="text-[#b8922a] font-medium w-20 shrink-0">Group</span><span>{exp.maxPeople}</span></div><div className="flex items-start gap-3"><span className="text-[#b8922a] font-medium w-20 shrink-0">Level</span><span>{exp.level}</span></div></div><Link to="/enquire/experiences" className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#b8922a] text-white text-sm font-medium rounded-full hover:bg-[#8c6e1e] transition-colors cursor-pointer">{exp.available ? "Enquire about this experience" : "Ask about availability"} <ArrowRight size={16} /></Link></div>
            <div className="p-8 md:p-10 flex flex-col justify-between"><div>{exp.image && <div className="mb-6 overflow-hidden rounded-2xl bg-[#ede5d4]/60 border border-[#ddd4be]/50 shadow-sm flex items-center justify-center p-2"><img src={exp.image} alt={exp.title} loading="lazy" className="w-full max-h-80 sm:max-h-96 object-contain rounded-xl" /></div>}<p className="text-[#4a4a42] leading-relaxed mb-6 whitespace-pre-line">{exp.desc}</p><h4 className="text-[0.65rem] tracking-[0.18em] uppercase font-medium text-[#b8922a] mb-4">What you'll learn</h4><ul className="space-y-2">{exp.learn.map(item => <li key={item} className="flex items-start gap-2 text-sm text-[#4a4a42]"><span className="mt-2 block w-1.5 h-1.5 rounded-full bg-[#b8922a] shrink-0" />{item}</li>)}</ul></div></div>
          </div>
        ))}
      </section>

      <section className="bg-[#ede5d4] py-20"><div className="max-w-3xl mx-auto px-4 sm:px-6"><div className="flex items-center gap-3 mb-4"><span className="block h-px w-8 bg-[#b8922a]" /><p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Good to know</p></div><h2 className="font-serif text-3xl text-[#1a1a18] mb-8">Before you book</h2><div className="grid md:grid-cols-2 gap-6">{[{title:"Location",desc:"All experiences take place at Hawkez Haven, Ashhurst, New Zealand. We are a working property — please do not drop in unannounced."},{title:"What to wear",desc:"Closed-toe shoes are required. Long trousers are recommended. We'll provide any additional safety equipment needed."},{title:"Booking",desc:"All sessions are by appointment only and subject to availability. We keep group sizes small so every visit is personal and meaningful."},{title:"Cancellations",desc:"We understand things come up. Please give us as much notice as possible if you need to reschedule. We'll do our best to find a suitable alternative."},{title:"Children",desc:"Children are welcome in most sessions. Please mention their ages when booking so we can match them with the right horse and experience."},{title:"Donations & lessons",desc:"Summer experience donations are entirely optional and there is no fixed fee. Regular riding lessons remain separately priced. We will explain any arrangements before confirming your visit."}].map(({title,desc})=><div key={title} className="bg-white rounded-xl p-5 border border-[#ddd4be]/50"><h3 className="font-medium text-[#1a1a18] text-sm mb-1">{title}</h3><p className="text-sm text-[#4a4a42] leading-relaxed">{desc}</p></div>)}</div></div></section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20"><div className="flex items-center gap-3 mb-4"><span className="block h-px w-8 bg-[#b8922a]" /><p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Frequently asked questions</p></div><h2 className="font-serif text-3xl md:text-4xl text-[#1a1a18] mb-8">Questions before you visit?</h2><div className="space-y-4">{FAQS.map(([question, answer]) => <details key={question} className="bg-white rounded-2xl border border-[#ddd4be]/50 p-5"><summary className="cursor-pointer font-medium text-[#1a1a18]">{question}</summary><p className="mt-3 text-sm text-[#4a4a42] leading-relaxed">{answer}</p></details>)}</div></section>

      <section className="max-w-2xl mx-auto px-4 sm:px-6 py-20"><div className="flex items-center gap-3 mb-4"><span className="block h-px w-8 bg-[#b8922a]" /><p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Book an experience</p></div><h2 className="font-serif text-4xl text-[#1a1a18] mb-3">Ready to visit?</h2><p className="text-[#4a4a42] mb-8 text-sm">Every visit is arranged individually. Tell us who is coming, their ages and experience, what they hope to learn and their preferred dates. We will discuss suitable options and confirm the visit with you. Donations are completely optional.</p><EnquiryForm subject="Summer Experience & Horsemanship Enquiry" serverSend fields={[{id:"experience",label:"What would you like to explore?",type:"select",options:EXPERIENCE_OPTIONS},{id:"people",label:"Number of participants"},{id:"ages",label:"Ages of everyone attending"},{id:"dates",label:"Preferred dates or general availability"},{id:"level",label:"Your horse experience (if any)"},{id:"learning_goals",label:"What would you most like to learn or experience?"}]} /></section>
    </div>
  );
}
