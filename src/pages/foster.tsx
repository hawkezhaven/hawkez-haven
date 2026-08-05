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
            Not every horse arrives ready for their forever home. Some need time. Some need healing. Our Foster Program allows members of the community to become part of a horse's journey without the lifelong commitment of ownership.
          </p>
        </div>
      </section>

      {/* Types */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center gap-3 mb-4">
          <span className="block h-px w-8 bg-[#b8922a]" />
          <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Ways to foster</p>
        </div>
        <h2 className="font-serif text-4xl text-[#1a1a18] mb-10">Types of foster opportunities</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Emergency Foster", desc: "For horses requiring immediate placement due to welfare concerns or urgent circumstances. You become a safe landing when it matters most." },
            { title: "Rehabilitation Foster", desc: "For horses needing time to recover physically and emotionally before finding their forever homes. Patient, consistent care makes all the difference." },
            { title: "Retirement & Companion Foster", desc: "Provide a peaceful and loving environment for our older horses who deserve comfort and companionship in their later years." },
            { title: "Foster to Adopt", desc: "Sometimes a temporary arrangement becomes forever. Foster families may be considered for adoption if the match is right and both horse and person are ready." },
          ].map(({ title, desc }) => (
            <div key={title} className="bg-white rounded-2xl p-8 border border-[#ddd4be]/50">
              <div className="w-2 h-2 rounded-full bg-[#b8922a] mb-4" />
              <h3 className="font-serif text-xl text-[#1a1a18] mb-3">{title}</h3>
              <p className="text-sm text-[#4a4a42] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What we ask / provide */}
      <section className="bg-[#ede5d4] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-serif text-2xl text-[#1a1a18] mb-6">What we ask of foster families</h3>
            <ul className="space-y-3">
              {[
                "Safe fencing and suitable shelter.",
                "Daily care and monitoring.",
                "Good communication with Hawkez Haven.",
                "Commitment to the welfare of the horse.",
                "Willingness to provide updates and photographs.",
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={17} className="text-[#b8922a] mt-0.5 shrink-0" />
                  <span className="text-sm text-[#4a4a42]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-2xl text-[#1a1a18] mb-6">What Hawkez Haven provides</h3>
            <ul className="space-y-3">
              {[
                "Ongoing support and guidance.",
                "Honest disclosure of each horse's needs.",
                "Regular check-ins.",
                "Assistance wherever possible.",
                "A community that shares your passion for giving horses a second chance.",
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={17} className="text-[#b8922a] mt-0.5 shrink-0" />
                  <span className="text-sm text-[#4a4a42]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="max-w-3xl mx-auto px-4 py-16 text-center">
        <blockquote className="font-serif italic text-2xl md:text-3xl text-[#1a1a18] leading-relaxed">
          "Every horse deserves the opportunity to heal.<br />
          Every horse deserves a chance.<br />
          And sometimes, all it takes is one person willing to say:<br />
          <span className="text-[#b8922a]">'You can stay with me until you're ready.'</span>"
        </blockquote>
      </section>

      {/* Form */}
      <section className="bg-[#ede5d4] py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="block h-px w-8 bg-[#b8922a]" />
            <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Apply</p>
          </div>
          <h2 className="font-serif text-4xl text-[#1a1a18] mb-3">Become a foster family</h2>
          <p className="text-[#4a4a42] mb-8 text-sm">Tell us a little about you and your property. We'll be in touch to talk through the horses currently looking for a foster home.</p>
          <EnquiryForm
            subject="Foster Enquiry"
            serverSend
            fields={[
              { id: "location", label: "Your location" },
              { id: "property", label: "Property size / setup" },
              { id: "experience", label: "Your horse experience" },
              { id: "fosterType", label: "Type of foster interest (Emergency / Rehabilitation / Retirement / Foster-to-Adopt)" },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
