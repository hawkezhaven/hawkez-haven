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
    'image: "/images/ELECTRIC.jpg",',
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
const seoTo = 'electra: { name: "Electra", title: "Electra | Hawkez Haven Horse Rescue New Zealand", description: "Meet Electra, a young mare continuing her rehabilitation journey at Hawkez Haven while she builds confidence, trust and a safe future.", image: "/images/ELECTRIC.jpg" },';

if (!seoContent.includes(seoFrom)) {
  throw new Error("Expected Electra SEO image entry was not found.");
}
seoContent = seoContent.replace(seoFrom, seoTo);
fs.writeFileSync(seoPath, seoContent);

console.log("Updated Electra and Kohan rehabilitation wording and unified Electra image references.");
