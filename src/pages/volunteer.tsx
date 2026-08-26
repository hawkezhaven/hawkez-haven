import { Link } from "react-router-dom";
import { ArrowRight, Users, Clock, Heart, Star, CheckCircle } from "lucide-react";
import EnquiryForm from "./_components/EnquiryForm.tsx";

export default function VolunteerPage() {
  const faqs = [
    {
      q: "Where is Hawkez Haven located?",
      a: "We are based on a private property in Ashhurst, in the Manawatū region of New Zealand (just a short drive from Palmerston North). Volunteers arrange their own transport to and from the property.",
    },
    {
      q: "Do I need previous horse experience?",
      a: "Not necessarily. We welcome enthusiastic helpers for property maintenance, gear care, and supervised horse care. For handling sensitive horses or assisting with rehabilitation groundwork, prior horse experience is valued.",
    },
    {
      q: "What is the time commitment?",
      a: "We offer flexible volunteering opportunities. Some volunteers join us for scheduled weekend working bees, while others commit to regular weekly or fortnightly sessions.",
    },
    {
      q: "Do you offer on-site accommodation or international placements?",
      a: "Because we are an independent, private rescue facility, we do not currently have on-site volunteer accommodation or host international exchange programs. Our roles are suited for local day volunteers.",
    },
    {
      q: "What should I wear and bring?",
      a: "Sturdy, closed-toe footwear (work boots or paddock boots) is mandatory for safety around horses. Please wear comfortable outdoor clothing that you don't mind getting dirty, and bring a water bottle.",
    },
  ];

  return (
    <div className="bg-[#f5f0e8]">
      {/* Header */}
      <section className="bg-[#1a1a18] text-[#f5f0e8] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-[#b8922a]">
            <span className="block h-px w-8 bg-[#b8922a]" />
            <span className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Volunteer</span>
          </div>
          <h1 className="mt-6 font-serif text-5xl md:text-6xl text-[#f5f0e8] leading-tight max-w-3xl">
            Some of the best days are spent with horses.
          </h1>
          <p className="mt-6 text-lg text-[#f5f0e8]/70 max-w-2xl leading-relaxed">
            Our volunteers are the heartbeat of Hawkez Haven in Ashhurst, Manawatū. Whether you're here to learn, to help, or simply to connect with horses in a calm environment — there is a place for you, whatever your experience level.
          </p>
        </div>
      </section>

      {/* Roles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center gap-3 mb-4">
          <span className="block h-px w-8 bg-[#b8922a]" />
          <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">How you can help</p>
        </div>
        <h2 className="font-serif text-4xl text-[#1a1a18] mb-10">Volunteer roles at Hawkez Haven</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: <Heart size={20} />,
              title: "Horse Care & Husbandry",
              desc: "Daily feeding routines, grooming, rugging, and general paddock care. Learn what it truly takes to keep horses healthy, happy, and thriving. This is hands-on practical experience under the gentle guidance of our team.",
              suit: "Suitable for all experience levels with appropriate supervision.",
            },
            {
              icon: <Users size={20} />,
              title: "Rehabilitation Support",
              desc: "Assist with the gentle handling, desensitisation, and trust-building groundwork that forms the foundation of our rehabilitation programme. Help a horse learn that people can be safe and kind again.",
              suit: "For those with some horse experience or a willingness to learn quietly.",
            },
            {
              icon: <Star size={20} />,
              title: "Gear & Yard Care",
              desc: "Cleaning and caring for horse gear, tidying areas used by horses and handlers, and keeping the tack shed and working areas clean, organized, and ready to use. Practical work that keeps every session running smoothly.",
              suit: "Great for those who like practical, hands-on tasks and take pride in a well-kept yard.",
            },
            {
              icon: <Clock size={20} />,
              title: "Horse Session Support",
              desc: "Help horse handlers during individual horse sessions from the ground where needed — keeping sessions safe, organized, and running smoothly. Your role is to assist, not to lead, always under handler guidance.",
              suit: "Suitable for those with a calm, patient nature and an understanding of horse safety basics.",
            },
          ].map(({ icon, title, desc, suit }) => (
            <div key={title} className="bg-white rounded-2xl p-8 border border-[#ddd4be]/50">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[#f0e4c4] text-[#8c6e1e] mb-5">
                {icon}
              </span>
              <h3 className="font-serif text-xl text-[#1a1a18] mb-3">{title}</h3>
              <p className="text-sm text-[#4a4a42] leading-relaxed mb-3">{desc}</p>
              <p className="text-xs text-[#8c6e1e] italic">{suit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What to expect & Philosophy */}
      <section className="bg-[#ede5d4] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <img
            src="/images/saphira-khan.jpg"
            alt="Volunteer with horses at Hawkez Haven"
            loading="lazy"
            className="w-full rounded-3xl object-cover aspect-[4/3]"
          />
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block h-px w-8 bg-[#b8922a]" />
              <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">What to expect</p>
            </div>
            <h2 className="font-serif text-4xl text-[#1a1a18] mb-6">Connection Before Correction</h2>
            <p className="text-sm text-[#4a4a42] leading-relaxed mb-6">
              Hawkez Haven is a calm, low-pressure environment dedicated to giving horses a second chance. Because many of our horses come from racing backgrounds or have experienced trauma, we prioritize safety, patience, and consistency above all else.
            </p>
            <ul className="space-y-4 text-sm text-[#4a4a42]">
              <li className="leading-relaxed flex items-start gap-2">
                <CheckCircle size={16} className="text-[#8c6e1e] shrink-0 mt-0.5" />
                <span>You'll receive a proper induction to the property, our horses, our methods, and our safety values before working unsupervised with any animal.</span>
              </li>
              <li className="leading-relaxed flex items-start gap-2">
                <CheckCircle size={16} className="text-[#8c6e1e] shrink-0 mt-0.5" />
                <span>All volunteers follow our welfare-first approach, which means slow, quiet, patient interactions — no rushing, no forcing.</span>
              </li>
              <li className="leading-relaxed flex items-start gap-2">
                <CheckCircle size={16} className="text-[#8c6e1e] shrink-0 mt-0.5" />
                <span>We welcome volunteers on a flexible basis — whether that's one Saturday a month for working bees or something more regular.</span>
              </li>
              <li className="leading-relaxed flex items-start gap-2">
                <CheckCircle size={16} className="text-[#8c6e1e] shrink-0 mt-0.5" />
                <span>Every volunteer leaves knowing more about horse body language, horsemanship, and compassionate care.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center gap-3 mb-4">
          <span className="block h-px w-8 bg-[#b8922a]" />
          <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Common Questions</p>
        </div>
        <h2 className="font-serif text-4xl text-[#1a1a18] mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-white rounded-2xl p-6 md:p-8 border border-[#ddd4be]/50">
              <h3 className="font-serif text-lg text-[#1a1a18] mb-2">{q}</h3>
              <p className="text-sm text-[#4a4a42] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cross Links to Other Ways to Help */}
      <section className="bg-[#f0e4c4]/40 border-y border-[#ddd4be]/50 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="font-serif text-xl text-[#1a1a18]">Looking for other ways to support our horses?</h3>
            <p className="text-sm text-[#4a4a42] mt-1">Explore horse sponsorship, adoption opportunities, or making a donation.</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/sponsorship"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#1a1a18] text-white text-xs font-medium hover:bg-[#b8922a] transition-colors"
            >
              Sponsorship
            </Link>
            <Link
              to="/adoption"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-[#ddd4be] text-[#1a1a18] text-xs font-medium hover:bg-[#f5f0e8] transition-colors"
            >
              Adoption
            </Link>
            <Link
              to="/support"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-[#ddd4be] text-[#1a1a18] text-xs font-medium hover:bg-[#f5f0e8] transition-colors"
            >
              Support Us
            </Link>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 py-20">
        <div className="flex items-center gap-3 mb-4">
          <span className="block h-px w-8 bg-[#b8922a]" />
          <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Apply</p>
        </div>
        <h2 className="font-serif text-4xl text-[#1a1a18] mb-3">Volunteer application</h2>
        <p className="text-[#4a4a42] mb-8 text-sm">Tell us a little about yourself and how you'd like to be involved. We'll be in touch about the next volunteer intake.</p>
        <EnquiryForm
          subject="Volunteer Enquiry"
          serverSend
          fields={[
            { id: "experience", label: "Your horse or practical experience" },
            { id: "availability", label: "Availability (days / times)" },
            { id: "role", label: "Which role interests you most?" },
          ]}
        />
      </section>
    </div>
  );
}
