import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, AlertTriangle, Heart, Leaf, ShieldCheck, Stethoscope, Scale } from "lucide-react";

const topics = [
  { icon: AlertTriangle, title: "Why you must never feed an unfamiliar horse", text: "You cannot see a horse's medical history, dietary plan or medication needs from the other side of a fence. Even familiar foods and small treats may be unsuitable for an individual horse.", points: ["The horse may have insulin dysregulation, EMS or PPID.", "It may have a history of laminitis or be on a carefully controlled diet.", "It may have allergies, choke risks, dental problems or other veterinary needs.", "You may disrupt a prescribed feeding or medication routine."] },
  { icon: Leaf, title: "A bare paddock can be responsible management", text: "A horse or pony on a dry lot or restricted grazing is not automatically neglected. For some horses, limiting access to pasture is an important part of managing body condition and metabolic risk.", points: ["Pasture sugar and energy content can vary with season, weather and growth.", "Some horses need measured forage and controlled access to grass.", "A dry lot should still provide appropriate forage, clean water, shelter, companionship and safe footing.", "A management plan should be individualised with veterinary guidance."] },
  { icon: Stethoscope, title: "Laminitis: a painful condition that needs attention", text: "Laminitis affects the sensitive structures within the hoof and can cause severe pain and lasting damage. It can be associated with endocrine and metabolic disease, excess body weight, and other triggers.", points: ["Watch for reluctance to move, short or pottery steps, shifting weight or unusual hoof heat and digital pulses.", "Suspected laminitis needs prompt veterinary advice.", "Do not exercise a horse with suspected laminitis unless directed by the vet.", "Prevention and management depend on the individual horse and its risk factors."] },
  { icon: Heart, title: "PPID and EMS need individual care", text: "PPID (often called equine Cushing's disease) and Equine Metabolic Syndrome (EMS) are different conditions, but both can affect how a horse should be managed. Insulin dysregulation is an important laminitis risk.", points: ["PPID is a hormonal disorder and may require veterinary diagnosis, medication and monitoring.", "EMS commonly involves insulin dysregulation and is often managed through diet, weight management and appropriate exercise.", "Not every horse with PPID has EMS, and not every horse with EMS has PPID.", "Never change medication, feed or turnout plans based on guesswork."] },
  { icon: Scale, title: "Reading body condition without jumping to conclusions", text: "A horse's outline from a roadside view does not tell the whole story. Body condition is assessed by looking at and feeling several areas of the body, alongside health history and veterinary advice.", points: ["A rounded belly alone does not prove a horse is overweight or well-conditioned.", "A thin-looking horse may be elderly, recovering from illness or have an underlying health issue.", "Prominent ribs, spine or hip bones can be warning signs that deserve a closer welfare assessment.", "If you are concerned, record what you observe and seek advice rather than feeding the horse yourself."] },
  { icon: ShieldCheck, title: "Lawn clippings and garden waste are not horse feed", text: "Do not leave mower clippings where horses can reach them. They are not a safe substitute for properly offered forage and can create risks including choking, digestive upset and exposure to unsuitable plants or lawn chemicals.", points: ["Freshly cut grass can be eaten rapidly and in large mouthfuls.", "Clippings may contain poisonous plants, weeds or residues from lawn treatments.", "Never dump grass catcher contents beside a horse fence or in a paddock.", "Ask the horse's owner before leaving any feed or garden material near their animals."] },
];

export default function BehindTheFencePage() {
  return (
    <div className="bg-[#f5f0e8] text-[#1a1a18]">
      <section className="bg-[#1a1a18] text-[#f5f0e8] py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/hub" className="inline-flex items-center gap-2 text-sm text-[#d4ad43] hover:text-white"><ArrowLeft size={16} /> Back to The Hub</Link>
          <div className="mt-10 flex items-center gap-3 text-[#d4ad43]"><span className="h-px w-8 bg-[#d4ad43]" /><span className="text-xs tracking-[.18em] uppercase">Hawkez Haven Education Hub</span></div>
          <h1 className="mt-5 max-w-4xl font-serif text-4xl md:text-6xl leading-tight">Behind the Fence: What You See Isn't Always What You Know.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#f5f0e8]/75">A practical guide to responsible feeding, restricted grazing, laminitis, metabolic conditions and recognising genuine welfare concerns. Good intentions matter — but informed decisions protect horses.</p>
          <p className="mt-8 text-sm text-[#d4ad43] tracking-wide uppercase">Education · Welfare · Responsible horse care</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="rounded-3xl border border-[#ddd4be] bg-white p-7 md:p-10">
          <p className="text-xs tracking-[.16em] uppercase text-[#8c6e1e] font-semibold">The most important rule</p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">Please don't feed a horse you don't know.</h2>
          <p className="mt-5 text-[#4a4a42] leading-relaxed">If you do not own the horse, are not responsible for its care, or have not received clear permission from its owner, do not offer food, treats or grass. Being able to reach a horse over a fence does not mean it is safe to feed.</p>
          <div className="mt-6 rounded-2xl bg-[#f5f0e8] p-5 text-sm leading-relaxed"><strong>Ask first — every time.</strong> The owner may be managing a medical condition, weight, medication, allergies or a specific feeding plan that you cannot see.</div>
        </div>
      </section>

      <section className="bg-[#ede5d4] py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl"><p className="text-xs tracking-[.18em] uppercase text-[#8c6e1e] font-semibold">Understand before you assume</p><h2 className="mt-3 font-serif text-3xl md:text-4xl">Six things every horse neighbour should know</h2><p className="mt-4 text-[#4a4a42] leading-relaxed">A horse's feeding and turnout plan is individual. These are some of the reasons a horse may look different from what you expect — and why guessing can cause harm.</p></div>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {topics.map(({ icon: Icon, title, text, points }, index) => (
              <article key={title} className="rounded-3xl bg-white border border-[#ddd4be]/70 p-7 shadow-sm">
                <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1a1a18] text-[#d4ad43]"><Icon size={19} /></span><span className="text-xs uppercase tracking-[.14em] text-[#8c6e1e]">Guide {String(index + 1).padStart(2, "0")}</span></div>
                <h3 className="mt-5 font-serif text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4a4a42]">{text}</p>
                <ul className="mt-5 space-y-2 text-sm leading-relaxed text-[#4a4a42]">{points.map(point => <li key={point} className="flex gap-2"><span className="text-[#b8922a]">•</span><span>{point}</span></li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-8">
          <div><h2 className="font-serif text-3xl">What if you genuinely suspect neglect?</h2><p className="mt-4 text-sm leading-relaxed text-[#4a4a42]">Don't ignore a horse that appears seriously underweight, injured, unwell or without appropriate care. But don't try to solve the situation by feeding it over a fence. Note what you have observed, speak respectfully with the owner where safe and appropriate, and contact an animal welfare authority for guidance if you remain concerned.</p></div>
          <div><h2 className="font-serif text-3xl">What should you do instead?</h2><ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#4a4a42]"><li>• Ask the owner before offering anything.</li><li>• Keep food, lawn clippings and garden waste away from fences and paddocks.</li><li>• If a horse may have eaten something unsafe, tell the owner promptly.</li><li>• If the horse appears acutely unwell or in pain, encourage immediate veterinary help.</li></ul></div>
        </div>
      </section>

      <section className="bg-[#1a1a18] text-[#f5f0e8] py-14 md:py-18">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4"><ShieldCheck className="text-[#d4ad43] shrink-0 mt-1" size={30} /><div><h2 className="font-serif text-3xl">Welfare comes before appearances.</h2><p className="mt-4 max-w-3xl leading-relaxed text-[#f5f0e8]/75">A pony on a dry lot may be receiving careful, necessary management. A horse in poor body condition may need help. You cannot reliably tell the whole story from a glance across a fence. Ask, learn and seek appropriate help — and never feed an unfamiliar horse without permission.</p><p className="mt-5 text-sm text-[#d4ad43]">Connection before assumption. Welfare before appearance.</p></div></div>
          <div className="mt-10 flex flex-wrap gap-4"><Link to="/horses" className="inline-flex items-center gap-2 rounded-full bg-[#b8922a] px-6 py-3 text-sm font-medium text-white hover:bg-[#8c6e1e]">Meet our horses <ArrowRight size={16} /></Link><Link to="/education" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm text-white hover:bg-white/10">Education & Horsemanship <ArrowRight size={16} /></Link><Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm text-white hover:bg-white/10">Contact Hawkez Haven <ArrowRight size={16} /></Link></div>
          <p className="mt-8 text-xs leading-relaxed text-[#f5f0e8]/50">This information is general education, not a diagnosis or substitute for veterinary advice. Feeding, turnout and treatment decisions should be made for each horse with appropriate veterinary guidance.</p>
        </div>
      </section>
    </div>
  );
}
