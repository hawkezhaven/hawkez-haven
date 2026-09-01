import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import EnquiryForm from "./_components/EnquiryForm.tsx";

export default function ContactPage() {
  return (
    <div className="bg-[#f5f0e8]">
      <section className="bg-[#1a1a18] text-[#f5f0e8] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-[#b8922a]">
            <span className="block h-px w-8 bg-[#b8922a]" />
            <span className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Contact</span>
          </div>
          <h1 className="mt-6 font-serif text-5xl md:text-6xl text-[#f5f0e8] leading-tight max-w-3xl">
            At Hawkez Haven, home to all our horses.
          </h1>
          <p className="mt-6 text-lg text-[#f5f0e8]/70 max-w-xl leading-relaxed">
            We are a small, privately run equine rescue based in Ashhurst, New Zealand. We care for horses daily and work full-time — responses may take 24–72 hours.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-[1fr_1.6fr] gap-14">
        {/* Contact info */}
        <div>
          <h2 className="font-serif text-3xl text-[#1a1a18] mb-8">Get in touch</h2>
          <ul className="space-y-6 text-sm text-[#4a4a42]">
            <li className="flex items-start gap-4">
              <MapPin size={18} className="text-[#b8922a] mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-[#1a1a18] mb-1">Location</p>
                <p>117 North Street, Ashhurst, Manawatū 4810, New Zealand</p>
                <p className="text-xs text-[#4a4a42]/70 mt-1">Visits are by appointment only. We're a working property — please let us know before dropping in.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Mail size={18} className="text-[#b8922a] mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-[#1a1a18] mb-1">Email</p>
                <a href="mailto:hawkezhaven@gmail.com" className="hover:text-[#b8922a] transition-colors">hawkezhaven@gmail.com</a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Phone size={18} className="text-[#b8922a] mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-[#1a1a18] mb-1">Phone</p>
                <a href="tel:+642040536441" className="hover:text-[#b8922a] transition-colors">020 4053 6441</a>
              </div>
            </li>
          </ul>

          <div className="mt-10">
            <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium text-[#b8922a] mb-4">Follow our journey</p>
            <div className="space-y-3">
              <a href="https://www.facebook.com/profile.php?id=61591877430343" target="_blank" rel="noopener noreferrer" className="block text-sm text-[#4a4a42] hover:text-[#b8922a] transition-colors">
                Hawkez Haven – Second Chances
              </a>
              <a href="https://www.facebook.com/HORSENCO/" target="_blank" rel="noopener noreferrer" className="block text-sm text-[#4a4a42] hover:text-[#b8922a] transition-colors">
                HORSENCO — Heather's Horse Journey
              </a>
            </div>
          </div>

          <div className="mt-10">
            <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium text-[#b8922a] mb-4">Specific enquiries</p>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Adoption enquiry", href: "/enquire/adoption" },
                { label: "Sponsorship enquiry", href: "/enquire/sponsorship" },
                { label: "Volunteer enquiry", href: "/enquire/volunteer" },
                { label: "Foster enquiry", href: "/enquire/foster" },
                { label: "Book an experience", href: "/enquire/experiences" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link to={href} className="text-[#4a4a42] hover:text-[#b8922a] transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Map + form */}
        <div>
          <div className="mb-12">
            <h2 className="font-serif text-3xl text-[#1a1a18] mb-3">Find Hawkez Haven</h2>
            <p className="text-sm text-[#4a4a42] mb-6">117 North Street, Ashhurst, Manawatū 4810, New Zealand</p>
            <div className="overflow-hidden rounded-2xl border border-[#1a1a18]/10 shadow-sm bg-white">
              <iframe
                title="Map showing Hawkez Haven at 117 North Street, Ashhurst, Manawatū"
                src="https://www.google.com/maps?q=117+North+Street,+Ashhurst,+Manawatu+4810,+New+Zealand&output=embed"
                className="w-full h-[320px] md:h-[380px] border-0"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=117+North+Street%2C+Ashhurst%2C+Manawatu+4810%2C+New+Zealand"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#1a1a18] hover:text-[#b8922a] transition-colors"
            >
              Open in Google Maps <ExternalLink size={15} />
            </a>
          </div>

          <h2 className="font-serif text-3xl text-[#1a1a18] mb-6">Send us a message</h2>
          <EnquiryForm subject="General Enquiry – Hawkez Haven" serverSend />
        </div>
      </section>
    </div>
  );
}
