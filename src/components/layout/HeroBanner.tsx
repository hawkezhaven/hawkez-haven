import { useLocation } from "react-router-dom";

type HeroConfig = {
  image: string;
  eyebrow: string;
  title: string;
  alt: string;
};

const HEROES: Record<string, HeroConfig> = {
  "/about": {
    image: "/images/electra.jpg",
    eyebrow: "Our Story",
    title: "More Than A Rescue.",
    alt: "Electra at Hawkez Haven",
  },
  "/horses": {
    image: "/images/pasture.jpg",
    eyebrow: "Meet The Horses",
    title: "Every Horse Has A Story.",
    alt: "Horses together in the paddock at Hawkez Haven",
  },
  "/support": {
    image: "/images/haven.jpg",
    eyebrow: "Support A Second Chance",
    title: "Be Part Of Every Journey.",
    alt: "Haven and Rob looking in opposite directions at Hawkez Haven",
  },
  "/contact": {
    image: "/images/rip.jpg",
    eyebrow: "Contact Hawkez Haven",
    title: "Come And Be Part Of The Story.",
    alt: "Rip and Saphira riding together",
  },
  "/adoption": {
    image: "/images/kahu.jpg",
    eyebrow: "Adoption",
    title: "A Lifetime Commitment Begins Here.",
    alt: "Kahu at Hawkez Haven",
  },
  "/sponsorship": {
    image: "/images/pedro.jpg",
    eyebrow: "Sponsor A Horse",
    title: "Help A Horse Keep Their Second Chance.",
    alt: "Pedro being ridden along a gravel road",
  },
  "/foster": {
    image: "/images/joey-story.jpg",
    eyebrow: "Foster",
    title: "Open Your Paddock To A Second Chance.",
    alt: "Joey with Paris on him in the paddock",
  },
  "/volunteer": {
    image: "/images/diablo.jpg",
    eyebrow: "Volunteer",
    title: "There Is A Place For You Here.",
    alt: "Diablo in black and white",
  },
  "/education": {
    image: "/images/hero-ritz.png",
    eyebrow: "Education & Lessons",
    title: "Learn With The Horse In Mind.",
    alt: "Ritz being ridden at Hawkez Haven",
  },
  "/experiences": {
    image: "/images/hero-ritz.png",
    eyebrow: "Education & Lessons",
    title: "Learn With The Horse In Mind.",
    alt: "Ritz being ridden at Hawkez Haven",
  },
  "/hub": {
    image: "/images/khan.jpg",
    eyebrow: "Hawkez Haven Hub",
    title: "A Place To Learn, Connect And Belong.",
    alt: "Khan standing calmly in the paddock at Hawkez Haven",
  },
};

export default function HeroBanner() {
  const { pathname } = useLocation();
  const hero = HEROES[pathname];

  if (!hero) return null;

  return (
    <>
      <style>{`
        main[data-page-hero="true"] > div > section:first-child { display: none; }
      `}</style>
      <section className="relative min-h-[56vh] md:min-h-[64vh] overflow-hidden bg-[#1a1a18] text-[#f5f0e8]">
        <img
          src={hero.image}
          alt={hero.alt}
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a18]/85 via-[#1a1a18]/35 to-[#1a1a18]/10" />
        <div className="relative z-10 flex min-h-[56vh] md:min-h-[64vh] items-end">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-14 md:pb-20">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-[#b8922a]">
                <span className="block h-px w-8 bg-[#b8922a]" />
                <span className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">
                  {hero.eyebrow}
                </span>
              </div>
              <h1 className="mt-5 font-serif text-5xl md:text-6xl lg:text-7xl text-[#f5f0e8] leading-[1.02] text-balance">
                {hero.title}
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
