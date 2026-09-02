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

      {/* Foster relationship */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center gap-3 mb-4">
          <span className="block h-px w-8 bg-[#b8922a]" />
          <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Fostering a Hawkez Haven horse</p>
        </div>
        <h2 className="font-serif text-4xl text-[#1a1a18] mb-6">A safe home while they wait for their person.</h2>
        <p className="text-[#4a4a42] max-w-3xl leading-relaxed mb-6">
          Foster homes provide grazing, daily care and a chance to become part of a rescue horse's journey while they wait for the right forever home. It is a practical way to support a horse, while experiencing their connection, progress and personality up close.
        </p>
        <p className="text-[#4a4a42] max-w-3xl leading-relaxed">
          Fostering and adoption are connected, but they are not the same commitment. A horse may be fostered while we continue looking for their permanent home, and a foster placement does not automatically mean the horse is being adopted by the foster family.
        </p>
      </section>

      {/* What we ask / provide */}
      <section className="bg-[#ede5d4] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-serif text-2xl text-[#1a1a18] mb-6">What we ask of foster families</h3>
            <ul className="space-y-3">
              {[
                "Safe fencing and suitable shelter.",
                "Grazing and daily care for the horse.",
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
              { id: "fosterType", label: "Foster interest" },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
