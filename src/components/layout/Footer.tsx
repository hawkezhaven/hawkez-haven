import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a18] text-[#f5f0e8] mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid gap-14 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        {/* Brand */}
        <div className="max-w-sm">
          <img
            src="/images/hawkez-logo-transparent.png"
            alt="Hawkez Haven"
            className="h-16 w-auto object-contain brightness-0 invert sepia saturate-200 hue-rotate-10"
          />
          <p className="mt-6 text-sm text-[#f5f0e8]/70 leading-relaxed">
            A New Zealand horse rescue, rehabilitation, education and rehoming service.
            Every horse in our care is given the time, space and love to find their stride again.
          </p>
        </div>

        {/* Explore */}
        <div>
          <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium text-[#b8922a]">Explore</p>
          <ul className="mt-5 space-y-3">
            {[
              { label: "About", href: "/about" },
              { label: "Meet Our Horses", href: "/horses" },
              { label: "Adoption", href: "/adoption" },
              { label: "Sponsorship", href: "/sponsorship" },
              { label: "Foster Program", href: "/foster" },
            ].map(({ label, href }) => (
              <li key={href}>
                <Link to={href} className="text-sm text-[#f5f0e8]/75 hover:text-[#b8922a] transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Get Involved */}
        <div>
          <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium text-[#b8922a]">Get Involved</p>
          <ul className="mt-5 space-y-3">
            {[
              { label: "Volunteer", href: "/volunteer" },
              { label: "Experiences & Lessons", href: "/experiences" },
              { label: "Support Us", href: "/support" },
              { label: "The Hub", href: "/hub" },
            ].map(({ label, href }) => (
              <li key={label}>
                <Link to={href} className="text-sm text-[#f5f0e8]/75 hover:text-[#b8922a] transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium text-[#b8922a]">Get in Touch</p>
          <ul className="mt-5 space-y-4 text-sm text-[#f5f0e8]/75">
            <li>
              <p className="text-[0.6rem] tracking-widest uppercase flex items-center gap-2 text-[#f5f0e8]/50">
                Facebook
              </p>
              <div className="mt-2 space-y-1.5">
                <a
                  href="https://www.facebook.com/profile.php?id=61591877430343"
                  target="_blank" rel="noopener noreferrer"
                  className="block hover:text-[#b8922a] transition-colors"
                >
                  Hawkez Haven – Second Chances
                </a>
                <a
                  href="https://www.facebook.com/HORSENCO/"
                  target="_blank" rel="noopener noreferrer"
                  className="block hover:text-[#b8922a] transition-colors"
                >
                  HORSENCO
                </a>
              </div>
            </li>
            <li>
              <p className="text-[0.6rem] tracking-widest uppercase flex items-center gap-2 text-[#f5f0e8]/50">
                <Mail size={12} /> Email
              </p>
              <a href="mailto:hawkezhaven@gmail.com" className="mt-2 block hover:text-[#b8922a] transition-colors">
                hawkezhaven@gmail.com
              </a>
            </li>
            <li>
              <p className="text-[0.6rem] tracking-widest uppercase flex items-center gap-2 text-[#f5f0e8]/50">
                <Phone size={12} /> Phone
              </p>
              <a href="tel:+642040536441" className="mt-2 block hover:text-[#b8922a] transition-colors">
                020 4053 6441
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#f5f0e8]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#f5f0e8]/50">
          <p>© {new Date().getFullYear()} Hawkez Haven, Second Chances. Aotearoa, New Zealand.</p>
          <p>An independent equine rescue · Made with care.</p>
        </div>
      </div>
    </footer>
  );
}
