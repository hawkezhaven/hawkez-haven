import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import EnquiryForm from "./_components/EnquiryForm.tsx";

export default function FosterPage() {
  return (
    <div className="bg-[#f5f0e8]">
      <section className="bg-[#1a1a18] text-[#f5f0e8] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-[#b8922a]"><span className="block h-px w-8 bg-[#b8922a]" /><span className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Foster Program</span></div>
          <h1 className="mt-6 font-serif text-5xl md:text-6xl text-[#f5f0e8] leading-tight max-w-3xl">Foster a Rescue Horse</h1>
          <p className="mt-6 text-lg text-[#f5f0e8]/70 max-w-2xl leading-relaxed">Fostering can give a rescue horse a safe place to recover, rebuild confidence and prepare for their next chapter.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center gap-3 mb-4"><span className="block h-px w-8 bg-[#b8922a]" /><p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Fostering a Hawkez Haven horse</p></div>
        <h2 className="font-serif text-4xl text-[#1a1a18] mb-6">A safe home while they wait for their person.</h2>
        <div className="max-w-3xl space-y-5 text-[#4a4a42] leading-relaxed">
          <p>At Hawkez Haven, fostering is about giving a rescue horse time, stability and a safe environment while they continue their rehabilitation. Every horse is different, and every foster arrangement is considered around the individual needs of the horse and the circumstances of the foster home.</p>
          <p>Foster homes provide a safe place to live, consistent care and routine, and the opportunity to become part of a rescue horse's journey while they recover, rebuild confidence and prepare for what comes next.</p>
          <p>Fostering and adoption are connected, but they are not the same commitment. A horse may be fostered while we continue looking for their permanent home, and a foster placement does not automatically mean the horse is being adopted by the foster family.</p>
        </div>
      </section>

      <section className="bg-[#ede5d4] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-serif text-2xl text-[#1a1a18] mb-4">What fostering involves</h3>
            <p className="text-sm text-[#4a4a42] leading-relaxed mb-6">Every horse is different, so there is no one-size-fits-all foster arrangement. Depending on the horse's needs, fostering may involve providing:</p>
            <ul className="space-y-3">
              {["A safe and suitable place for the horse to live.","Consistent care and routine.","Patience while the horse settles and builds trust.","Support with rehabilitation and groundwork where appropriate.","Good communication with Hawkez Haven about the horse's progress and wellbeing."].map(item=>(<li key={item} className="flex items-start gap-3"><CheckCircle size={17} className="text-[#b8922a] mt-0.5 shrink-0" /><span className="text-sm text-[#4a4a42]">{item}</span></li>))}
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-2xl text-[#1a1a18] mb-4">Hawkez Haven remains involved</h3>
            <p className="text-sm text-[#4a4a42] leading-relaxed mb-6">Hawkez Haven retains ownership of all horses placed into foster care. This allows us to remain involved in their care and welfare throughout the foster arrangement and make decisions based on what is best for the horse.</p>
            <ul className="space-y-3">
              {["Ongoing support and guidance.","Honest disclosure of each horse's needs.","Regular communication about the horse's wellbeing.","Individual discussion of practical arrangements and responsibilities.","A welfare-first approach to every placement."].map(item=>(<li key={item} className="flex items-start gap-3"><CheckCircle size={17} className="text-[#b8922a] mt-0.5 shrink-0" /><span className="text-sm text-[#4a4a42]">{item}</span></li>))}
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a18] mb-6">Foster arrangements</h2>
        <div className="space-y-4 text-[#4a4a42] leading-relaxed">
          <p>Any costs, responsibilities and practical arrangements are personally discussed and agreed upon for each individual circumstance, taking into account the needs of the horse and the foster home.</p>
          <p>Some horses may need a temporary foster placement while they continue their rehabilitation. Others may benefit from a longer-term arrangement while the right permanent home is being considered.</p>
          <p>Foster placements are considered carefully. Temperament, health, handling needs, herd situation, property setup and the foster family's experience all matter. A successful match is about more than having space available — it is about finding an environment where the horse can be safe, supported and understood.</p>
        </div>
      </section>

      <section className="bg-[#ede5d4] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a18] mb-6">Could fostering lead to adoption?</h2>
          <div className="space-y-4 text-[#4a4a42] leading-relaxed">
            <p>Yes. Where it is the right outcome for the horse, <strong>foster-to-adopt can be considered.</strong></p>
            <p>Sometimes a foster placement develops into exactly what everyone hoped for — the horse finds a person and environment where they can truly thrive. If both the horse and foster home are a good match, adoption can be discussed and considered through Hawkez Haven's usual approval process.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a18] mb-6">Could you foster a rescue horse?</h2>
        <div className="space-y-4 text-[#4a4a42] leading-relaxed">
          <p>You do not need to be perfect, and you do not necessarily need years of professional experience. What matters is having a suitable environment, a willingness to learn and a genuine commitment to the horse's wellbeing.</p>
          <p>If you are interested in fostering a rescue horse with Hawkez Haven, tell us a little about yourself, your experience with horses, your location and the situation you can provide. We will talk through what is involved and whether fostering could be a good fit.</p>
        </div>
      </section>

      <section className="bg-[#ede5d4] py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-4"><span className="block h-px w-8 bg-[#b8922a]" /><p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Apply</p></div>
          <h2 className="font-serif text-4xl text-[#1a1a18] mb-3">Become a foster family</h2>
          <p className="text-[#4a4a42] mb-8 text-sm">Tell us a little about you and your property. We'll be in touch to talk through the horses currently looking for a foster home.</p>
          <EnquiryForm subject="Foster Enquiry" serverSend fields={[{ id: "location", label: "Your location" }, { id: "property", label: "Property size / setup" }, { id: "experience", label: "Your horse experience" }, { id: "horse", label: "Horse you're interested in fostering (if known)" }]} />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="font-serif text-3xl text-[#1a1a18] mb-4">Learn more about giving a horse a second chance.</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Link to="/adoption" className="inline-flex items-center gap-2 px-7 py-3 bg-[#b8922a] text-white text-sm font-medium rounded-full hover:bg-[#8c6e1e] transition-colors cursor-pointer">Horse Adoption <ArrowRight size={16} /></Link>
          <Link to="/horses" className="inline-flex items-center gap-2 px-7 py-3 border border-[#1a1a18] text-[#1a1a18] text-sm font-medium rounded-full hover:bg-[#1a1a18] hover:text-[#f5f0e8] transition-colors cursor-pointer">Meet the Horses <ArrowRight size={16} /></Link>
        </div>
      </section>
    </div>
  );
}
