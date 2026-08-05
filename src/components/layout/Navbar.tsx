import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Horses", href: "/horses" },
  { label: "Support Us", href: "/support" },
  { label: "Contact", href: "/contact" },
];

const MORE_LINKS = [
  { label: "Adoption", href: "/adoption" },
  { label: "Sponsorship", href: "/sponsorship" },
  { label: "Foster Program", href: "/foster" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Education & Lessons", href: "/education" },
  { label: "The Hub", href: "/hub" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMoreOpen(false);
  }, [location.pathname]);

  const navBg = isHomePage
    ? scrolled
      ? "bg-[#b8922a]/95 backdrop-blur-sm"
      : "bg-transparent"
    : "bg-[#b8922a]";

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-500 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6 py-4">
          {/* Logo */}
          <Link to="/" aria-label="Hawkez Haven — Home" className="shrink-0">
            <img
              src="/images/hawkez-logo-transparent.png"
              alt="Hawkez Haven"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center justify-end gap-5 lg:gap-7">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                to={href}
                className={`text-xs transition-colors whitespace-nowrap ${
                  location.pathname === href
                    ? "text-[#1a1a18] font-medium"
                    : "text-[#1a1a18] hover:text-[#1a1a18] hover:underline"
                }`}
              >
                {label}
              </Link>
            ))}

            {/* More dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setMoreOpen(o => !o)}
                className="inline-flex items-center gap-1 text-xs text-[#1a1a18] hover:text-[#1a1a18] hover:underline transition-colors cursor-pointer"
                aria-expanded={moreOpen}
              >
                More
                <ChevronDown size={12} className={`transition-transform ${moreOpen ? "rotate-180" : ""}`} />
              </button>

              {moreOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setMoreOpen(false)} />
                  <div className="absolute right-0 top-full mt-2 z-20 bg-[#b8922a] border border-white/10 rounded-xl shadow-2xl min-w-[180px] py-2">
                    {MORE_LINKS.map(({ label, href }) => (
                      <Link
                        key={href}
                        to={href}
                        className="block px-4 py-2 text-xs text-[#1a1a18] hover:text-[#1a1a18] hover:underline hover:bg-white/10 transition-colors"
                        onClick={() => setMoreOpen(false)}
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/20 text-white cursor-pointer"
            onClick={() => setMobileOpen(o => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#b8922a] flex flex-col pt-20 px-6 pb-8 overflow-y-auto">
          <button
            type="button"
            className="absolute top-5 right-5 text-white/70 cursor-pointer"
            onClick={() => setMobileOpen(false)}
          >
            <X size={24} />
          </button>
          <nav className="flex flex-col gap-1">
            {[...NAV_LINKS, ...MORE_LINKS].map(({ label, href }) => (
              <Link
                key={href}
                to={href}
                className={`py-3 text-lg border-b border-white/10 transition-colors ${
                  location.pathname === href ? "text-white font-medium" : "text-white/80 hover:text-[#b8922a]"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
