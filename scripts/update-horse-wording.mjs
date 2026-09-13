import fs from "node:fs";

const horsePath = "src/lib/horses.ts";
let horseContent = fs.readFileSync(horsePath, "utf8");

const horseReplacements = [
  [
    'lookingForward: "Electra is a future rehoming candidate. When ready, her future home will require horse experience and an understanding of sensitive, intelligent mares.",',
    'lookingForward: "Electra is a future rehoming candidate, but there is no rush. Following her significant injury, she is being given time to physically and mentally readjust, rebuild confidence and gradually return to appropriate work. As she progresses, we will assess what type of riding life, if any, best suits her.",',
  ],
  [
    'lookingForward: "Kohan is a future rehoming candidate seeking an experienced, active equestrian partner who appreciates his drive, intelligence, and warrior spirit.",',
    'lookingForward: "Kohan is a future rehoming candidate, but there is no rush. Following his significant injury and recovery, he is being given time to physically and mentally readjust, rebuild confidence and gradually return to appropriate work. As he progresses, we will assess what type of riding life best suits him.",',
  ],
  [
    'image: "/images/miss-ele.jpg",',
    'image: "/images/ELECTRIC-web.jpg",',
  ],
  [
    'image: "/images/kahu-tacked.jpg",',
    'image: "/images/kahu-tacked-web.jpg",',
  ],
];

for (const [from, to] of horseReplacements) {
  if (!horseContent.includes(from)) {
    throw new Error(`Expected horse content was not found: ${from}`);
  }
  horseContent = horseContent.replace(from, to);
}

fs.writeFileSync(horsePath, horseContent);

const seoPath = "scripts/generate-seo-pages.mjs";
let seoContent = fs.readFileSync(seoPath, "utf8");
const seoFrom = 'electra: { name: "Electra", title: "Electra | Hawkez Haven Horse Rescue New Zealand", description: "Meet Electra, a young mare continuing her rehabilitation journey at Hawkez Haven while she builds confidence, trust and a safe future.", image: "/images/electra.jpg" },';
const seoTo = 'electra: { name: "Electra", title: "Electra | Hawkez Haven Horse Rescue New Zealand", description: "Meet Electra, a young mare continuing her rehabilitation journey at Hawkez Haven while she builds confidence, trust and a safe future.", image: "/images/ELECTRIC-web.jpg" },';

if (!seoContent.includes(seoFrom)) {
  throw new Error("Expected Electra SEO image entry was not found.");
}
seoContent = seoContent.replace(seoFrom, seoTo);
fs.writeFileSync(seoPath, seoContent);

const experiencePath = "src/pages/experiences.tsx";
let experienceContent = fs.readFileSync(experiencePath, "utf8");

const experienceReplacements = [
  [
    'subtitle: "With Peanut, Pedro, Haven, Khan & eventually Diablo",',
    'subtitle: "With Peanut, our boarding resident, alongside Pedro, Haven, Khan & eventually Diablo",',
  ],
  [
    'including Peanut, our bush pony mare who is an amazing asset for younger and smaller students building confidence, alongside Pedro, Haven and Khan.',
    'including Peanut, our boarding resident at Hawkez Haven. Peanut is here while we help her owner, and she is an amazing asset for younger and smaller students building confidence, alongside Pedro, Haven and Khan.',
  ],
  [
    'price: "TBC",\n    priceNote: "",\n    maxPeople: "Private (1 rider)",',
    'price: "$60",\n    priceNote: "per person",\n    maxPeople: "Private (1 rider)",',
  ],
];

for (const [from, to] of experienceReplacements) {
  if (experienceContent.includes(from)) {
    experienceContent = experienceContent.replace(from, to);
  }
}

const experienceCardsAnchor = '      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-8">';
const experienceIntro = `      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">\n        <div className="rounded-3xl bg-white border border-[#ddd4be]/60 shadow-sm p-8 md:p-12">\n          <div className="flex items-center gap-3 text-[#b8922a] mb-5"><span className="block h-px w-8 bg-[#b8922a]" /><span className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Welcome</span></div>\n          <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a18] leading-tight mb-5">Welcome to Hawkez Haven</h2>\n          <div className="space-y-4 text-[#4a4a42] leading-relaxed">\n            <p>Step away from the rush and experience horses differently.</p>\n            <p>At Hawkez Haven, our experiences are built on partnership, mutual respect, and unhurried time on the land. Whether you're looking to slow down with a gentle family experience, sharpen your horsemanship in our paddock obstacle session, or head out on an adventurous trail ride down to the Ashhurst River, there is a space here waiting for you.</p>\n            <p><strong className="text-[#1a1a18]">Choose your path below and start your journey with us.</strong></p>\n          </div>\n        </div>\n      </section>\n\n      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">\n        <div className="rounded-3xl bg-[#1a1a18] text-[#f5f0e8] border border-[#b8922a]/30 shadow-sm p-8 md:p-12">\n          <div className="flex items-center gap-3 text-[#b8922a] mb-5"><span className="block h-px w-8 bg-[#b8922a]" /><span className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Where your contribution goes</span></div>\n          <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-5">Where Your Experience Contribution Goes</h2>\n          <div className="space-y-4 text-[#f5f0e8]/80 leading-relaxed">\n            <p>Every experience booked with Hawkez Haven directly supports the horses in our care.</p>\n            <p>Your contribution helps us meet the real, ongoing costs of rescue, rehabilitation and everyday horse welfare — from <strong className="text-[#f5f0e8]">veterinary care and senior supplements to feed, hay, farrier care, worming, first-aid supplies and other essential needs.</strong></p>\n            <p>Some of our larger experiences may help us put more towards significant veterinary expenses, while smaller contributions can help keep the everyday essentials covered.</p>\n            <p><strong className="text-[#f5f0e8]">You aren't just booking an experience — you're helping provide a horse with another chance.</strong></p>\n          </div>\n        </div>\n      </section>\n\n${experienceCardsAnchor}`;

if (!experienceContent.includes("Where Your Experience Contribution Goes")) {
  if (!experienceContent.includes(experienceCardsAnchor)) {
    throw new Error("Experience cards section anchor was not found.");
  }
  experienceContent = experienceContent.replace(experienceCardsAnchor, experienceIntro);
}

fs.writeFileSync(experiencePath, experienceContent);

console.log("Updated Electra and Kohan rehabilitation wording, unified optimised horse image references, and refreshed experience messaging.");
