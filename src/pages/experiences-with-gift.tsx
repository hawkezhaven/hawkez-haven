import { Link } from "react-router-dom";
import { ArrowRight, Gift } from "lucide-react";
import ExperiencesPage from "./experiences.tsx";

function GiftCardSection() {
  return (
    <section className="bg-[#1a1a18] text-[#f5f0e8] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#b8922a]/60 text-[#b8922a]">
          <Gift size={24} />
        </div>
        <p className="mt-6 text-[0.65rem] tracking-[0.18em] uppercase font-medium text-[#b8922a]">
          Give a little Hawkez Haven
        </p>
        <h2 className="mt-3 font-serif text-4xl md:text-5xl text-[#f5f0e8]">
          Give the Gift of a Hawkez Haven Experience
        </h2>
        <p className="mt-5 mx-auto max-w-2xl text-[#f5f0e8]/70 leading-relaxed">
          Looking for something a little different for a friend, family member or someone special? Give them time with horses, a new experience to remember, or the chance to learn something they love.
        </p>
        <p className="mt-3 mx-auto max-w-2xl text-[#f5f0e8]/70 leading-relaxed">
          A Hawkez Haven Gift Card is a meaningful way to give an experience, a memory and a little bit of connection.
        </p>
        <Link
          to="/gift-card"
          className="mt-8 inline-flex items-center gap-2 px-7 py-3 bg-[#b8922a] text-white text-sm font-medium rounded-full hover:bg-[#8c6e1e] transition-colors"
        >
          Gift a Hawkez Haven Gift Card <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}

export default function ExperiencesWithGiftPage() {
  return (
    <>
      <ExperiencesPage />
      <GiftCardSection />
    </>
  );
}
