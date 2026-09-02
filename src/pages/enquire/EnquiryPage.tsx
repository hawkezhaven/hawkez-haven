import EnquiryForm from "../_components/EnquiryForm.tsx";
import { Link } from "react-router-dom";

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

const ENQUIRY_TYPES: Record<string, { title: string; subtitle: string; fields: { id: string; label: string; type?: "text" | "textarea" | "select"; options?: string[] }[] }> = {
  general: {
    title: "General Enquiry",
    subtitle: "Not sure where to start? Send us a message and we'll point you in the right direction.",
    fields: [{ id: "subject", label: "What is your enquiry about?" }],
  },
  adoption: {
    title: "Adoption Enquiry",
    subtitle: "Tell us about yourself, your experience and the home you can offer.",
    fields: [
      { id: "experience", label: "Your horse experience" },
      { id: "setup", label: "Your property setup (fencing, shelter, pasture size)" },
      { id: "horse", label: "Which horse(s) are you interested in? (or 'open to guidance')" },
    ],
  },
  sponsorship: {
    title: "Sponsorship Enquiry",
    subtitle: "Let us know which horse you'd like to sponsor and we'll send the next steps.",
    fields: [
      { id: "horse", label: "Horse you'd like to sponsor (or 'where needed most')" },
      { id: "amount", label: "Preferred monthly amount (optional)" },
    ],
  },
  volunteer: {
    title: "Volunteer Enquiry",
    subtitle: "Tell us a little about yourself and how often you'd like to help.",
    fields: [
      { id: "experience", label: "Your horse or practical experience" },
      { id: "availability", label: "Availability (days / times)" },
      { id: "role", label: "Which volunteer role interests you most?" },
    ],
  },
  foster: {
    title: "Foster Enquiry",
    subtitle: "Tell us about your property and experience. We'll talk through the horses currently looking for a foster home.",
    fields: [
      { id: "location", label: "Your location" },
      { id: "property", label: "Property size / setup" },
      { id: "experience", label: "Your horse experience" },
      { id: "fosterType", label: "Type of foster interest (Emergency / Rehab / Retirement / Foster-to-Adopt)" },
    ],
  },
  experiences: {
    title: "Book an Experience",
    subtitle: "Tell us which experience you're interested in and your preferred dates.",
    fields: [
      { id: "experience", label: "Which experience(s) interest you?", type: "select", options: EXPERIENCE_OPTIONS },
      { id: "people", label: "Number of people" },
      { id: "dates", label: "Preferred dates / times" },
      { id: "level", label: "Your horse experience (if any)" },
    ],
  },
};

const OTHER_LINKS = [
  { label: "General Enquiry", href: "/enquire/general" },
  { label: "Adoption Enquiry", href: "/enquire/adoption" },
  { label: "Sponsorship Enquiry", href: "/enquire/sponsorship" },
  { label: "Volunteer Enquiry", href: "/enquire/volunteer" },
  { label: "Foster Enquiry", href: "/enquire/foster" },
  { label: "Book an Experience", href: "/enquire/experiences" },
];

type Props = { type: keyof typeof ENQUIRY_TYPES };

export default function EnquiryPage({ type }: Props) {
  const info = ENQUIRY_TYPES[type] ?? ENQUIRY_TYPES.general;

  return (
    <div className="bg-[#f5f0e8]">
      <section className="bg-[#1a1a18] text-[#f5f0e8] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-[#b8922a]">
            <span className="block h-px w-8 bg-[#b8922a]" />
            <span className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Enquiry</span>
          </div>
          <h1 className="mt-6 font-serif text-4xl md:text-5xl text-[#f5f0e8]">{info.title}</h1>
          <p className="mt-4 text-[#f5f0e8]/70 max-w-xl">{info.subtitle}</p>
          <p className="mt-3 text-sm text-[#f5f0e8]/50">We are a small team — responses may take 24–72 hours. Thank you for your patience.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-[1fr_2fr] gap-14">
        {/* Sidebar */}
        <div>
          <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium text-[#b8922a] mb-4">Other enquiries</p>
          <ul className="space-y-2">
            {OTHER_LINKS.filter(l => !l.href.includes(type)).map(({ label, href }) => (
              <li key={href}>
                <Link to={href} className="text-sm text-[#4a4a42] hover:text-[#b8922a] transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Form */}
        <div>
          <EnquiryForm subject={info.title + " – Hawkez Haven"} fields={info.fields} serverSend />
        </div>
      </section>
    </div>
  );
}
