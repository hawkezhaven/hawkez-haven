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
    image: "/education-hero.jpg",
    eyebrow: "Education & Horsemanship",
    title: "Learn With The Horse In Mind.",
    alt: "Kohan and Saphira at Hawkez Haven",
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
      <section className="relative min-h-[48vh] sm:min-h-[56vh] md:min-h-[64vh] overflow-hidden bg-[#1a1a18] text-[#f5f0e8]">
        <img
          src={hero.image}
          alt={hero.alt}
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a18]/90 via-[#1a1a18]/35 to-[#1a1a18]/10" />

        <div className="relative z-10 flex min-h-[48vh] sm:min-h-[56vh] md:min-h-[64vh] items-end">
          <div className="w-full px-4 sm:px-6 lg:px-8 pb-0 sm:pb-14 md:pb-20">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-3xl bg-[#1a1a18]/90 px-5 py-5 sm:bg-transparent sm:px-0 sm:py-0 sm:backdrop-blur-none">
                <div className="inline-flex items-center gap-3 text-[#d4ad43]">
                  <span className="block h-px w-7 bg-[#d4ad43]" />
                  <span className="text-[0.62rem] sm:text-[0.65rem] tracking-[0.18em] uppercase font-medium">
                    {hero.eyebrow}
                  </span>
                </div>
                <h1 className="mt-3 sm:mt-5 max-w-2xl font-serif text-[2.15rem] leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl text-[#f5f0e8] text-balance drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]">
                  {hero.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
