import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import EnquiryForm from "./_components/EnquiryForm.tsx";

export default function FosterPage() {
  return (
    <div className="bg-[#f5f0e8]">
      <section className="bg-[#1a1a18] text-[#f5f0e8] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-[#b8922a]">
            <span className="block h-px w-8 bg-[#b8922a]" />
            <span className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Foster Program</span>
          </div>
          <h1 className="mt-6 font-serif text-5xl md:text-6xl text-[#f5f0e8] leading-tight max-w-3xl">Open your heart. Change a life.</h1>
          <p className="mt-6 text-lg text-[#f5f0e8]/70 max-w-2xl leading-relaxed">
            Fostering gives a Hawkez Haven rescue a safe, supportive home while we work towards finding the right forever home for them. All horses currently available for adoption may also be considered for foster placement, giving foster homes the chance to support a horse's journey up close without the lifelong commitment of ownership.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center gap-3 mb-4">
          <span className="block h-px w-8 bg-[#b8922a]" />
          <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Fostering a Hawkez Haven horse</p>
        </div>
        <h2 className="font-serif text-4xl text-[#1a1a18] mb-6">A safe home while they wait for their person.</h2>
        <div className="max-w-3xl space-y-5 text-[#4a4a42] leading-relaxed">
          <p>Foster homes provide grazing, daily care and a chance to become part of a rescue horse's journey while they wait for the right forever home. It is a practical way to support a horse while experiencing their connection, progress and personality up close.</p>
          <p>For a rescue horse, a suitable foster placement can provide stability, routine and a quieter environment in which to continue settling and rebuilding confidence. The aim is not simply to move a horse somewhere else; it is to give them an appropriate home environment while Hawkez Haven continues working towards the best long-term outcome.</p>
          <p>Fostering and adoption are connected, but they are not the same commitment. A horse may be fostered while we continue looking for their permanent home, and a foster placement does not automatically mean the horse is being adopted by the foster family.</p>
        </div>
      </section>

      <section className="bg-[#ede5d4] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-serif text-2xl text-[#1a1a18] mb-4">What we ask of foster families</h3>
            <p className="text-sm text-[#4a4a42] leading-relaxed mb-6">Foster homes need to be able to provide a safe, suitable environment and consistent day-to-day care. We talk through your property, experience and circumstances before agreeing to a placement.</p>
            <ul className="space-y-3">
              {["Safe fencing and suitable shelter.", "Grazing and daily care for the horse.", "Good communication with Hawkez Haven.", "Commitment to the welfare of the horse.", "Willingness to provide updates and photographs."].map(item => (
                <li key={item} className="flex items-start gap-3"><CheckCircle size={17} className="text-[#b8922a] mt-0.5 shrink-0" /><span className="text-sm text-[#4a4a42]">{item}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-2xl text-[#1a1a18] mb-4">What Hawkez Haven provides</h3>
            <p className="text-sm text-[#4a4a42] leading-relaxed mb-6">Fostering is a shared responsibility. We stay involved so the foster home is not left to work everything out alone.</p>
            <ul className="space-y-3">
              {["Ongoing support and guidance.", "Honest disclosure of each horse's needs.", "Regular check-ins.", "Assistance wherever possible.", "A community that shares your passion for giving horses a second chance."].map(item => (
                <li key={item} className="flex items-start gap-3"><CheckCircle size={17} className="text-[#b8922a] mt-0.5 shrink-0" /><span className="text-sm text-[#4a4a42]">{item}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a18] mb-6">Is fostering right for you?</h2>
        <div className="space-y-4 text-[#4a4a42] leading-relaxed">
          <p>Fostering may suit you if you have suitable grazing, safe fencing, time for daily horse care and a genuine willingness to work with a rescue horse. You do not need to know exactly which horse you want before making an enquiry. We can talk about the horses currently needing foster homes and whether your experience and setup are a good match.</p>
          <p>Every placement is considered around the individual horse. Temperament, health, handling needs, herd situation, property setup and the foster family's experience all matter. A successful match is about more than having space available — it is about finding an environment where the horse can be safe, supported and understood.</p>
          <p>If you are interested in fostering, start by telling us about yourself, your location, your property and your horse experience. From there, we can have an honest conversation about what fostering would involve and whether there is a suitable match.</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12 text-center">
        <blockquote className="font-serif italic text-2xl md:text-3xl text-[#1a1a18] leading-relaxed">
          "Every horse deserves the opportunity to heal.<br />
          Every horse deserves a chance.<br />
          And sometimes, all it takes is one person willing to say:<br />
          <span className="text-[#b8922a]">'You can stay with me until you're ready.'</span>"
        </blockquote>
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
