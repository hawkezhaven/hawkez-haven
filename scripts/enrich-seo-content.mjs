import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { mkdir } from "node:fs/promises";

const distDir = resolve("dist");
const site = "https://hawkezhaven.org";

const content = {
  "/about": {
    h1: "More Than a Rescue",
    sections: [
      ["Why Hawkez Haven Exists", "Hawkez Haven is a New Zealand equine rescue, rehabilitation and responsible rehoming organisation built on a welfare-first approach. Horses are given time, patience and understanding to recover physically and emotionally before their next chapter is decided."],
      ["Our Philosophy", "Connection comes before correction. Patience comes before pressure. Understanding comes before judgement. We focus on individual rehabilitation, honest horse matching, education and lifelong support rather than rushing horses to meet a timeline."],
      ["What Makes Hawkez Haven Different", "Each horse receives care shaped by their history, health, temperament and future needs. Adoption decisions are based on compatibility, experience, environment and welfare. We take in only what we can care for properly and remain available to support horses and adopters after placement."],
      ["Our Promise", "Every decision about medical care, rehabilitation, rehoming or retirement is made with the horse's best interests at heart. We aim to be honest and transparent with adopters, volunteers and supporters about what each horse needs to thrive."]
    ]
  },
  "/horses": {
    h1: "Our Horses",
    sections: [
      ["Rescue, Rehabilitation and Second Chances", "Meet the horses of Hawkez Haven and follow their individual journeys through rescue, rehabilitation, recovery and responsible rehoming. Every horse is treated as an individual rather than a number."],
      ["Welfare First", "Our horses may arrive through owner surrender, rehabilitation situations or circumstances where ongoing care is no longer possible. Their needs are assessed individually, with veterinary, farrier, nutrition, confidence-building and retraining support provided as appropriate."],
      ["Responsible Rehoming", "Where a horse is suitable for a new home, Hawkez Haven carefully considers the horse, the prospective adopter, experience, environment and long-term compatibility. The right home matters more than a quick placement."]
    ]
  },
  "/adoption": {
    h1: "Horse Adoption in New Zealand",
    sections: [
      ["Where Can I Adopt or Rehome a Horse Responsibly in Manawatū, New Zealand?", "Hawkez Haven provides responsible horse adoption and rehoming support in New Zealand, including the Manawatū region. Our approach is welfare-first: we take time to understand each horse, assess prospective homes and match horses with people based on compatibility rather than speed."],
      ["The Adoption Process", "Prospective adopters can meet available horses, submit an enquiry, discuss suitability, arrange a visit, complete the appropriate adoption agreement and receive ongoing support. The process considers horse experience, intended use, property or grazing arrangements, management needs and the individual horse's temperament and rehabilitation history."],
      ["The Right Match Matters More Than a Quick Match", "Every horse deserves the right home, not simply the next home. Hawkez Haven may consider homes throughout New Zealand when they meet the horse's needs. Transport and ongoing care must be suitable for the individual horse."],
      ["If an Adoption Does Not Work Out", "Hawkez Haven would rather a horse be returned than remain in an unsuitable situation. Ongoing support is part of responsible rehoming, and the welfare of the horse remains the priority."],
      ["Adoption Contributions", "Adoption contributions reflect care, rehabilitation and preparation rather than simply a market value. Every horse and prospective home is assessed individually, and the right home matters more than the highest offer."]
    ]
  },
  "/sponsorship": {
    h1: "Sponsor a Rescue Horse",
    sections: [
      ["Help Give a Horse a Second Chance", "Sponsorship helps Hawkez Haven provide rescue horses with feed, veterinary care, farrier care, rehabilitation, handling and a safe future. Support can help a horse while they recover or continue their journey toward a permanent home."],
      ["Where Your Support Goes", "Horse rescue involves ongoing practical costs including nutrition, routine care, veterinary treatment, farrier work, rehabilitation and safe accommodation. Sponsorship contributes directly to the care of horses at Hawkez Haven."],
      ["A Practical Way to Support Rescue", "Sponsoring a horse is a meaningful way to support their individual journey while learning more about the horse and the work involved in responsible rehabilitation and rehoming."]
    ]
  },
  "/foster": {
    h1: "Foster a Rescue Horse",
    sections: [
      ["Fostering Creates Space for Recovery", "Foster homes can help suitable Hawkez Haven horses recover, rebuild confidence and prepare for their next chapter. Foster arrangements are considered carefully around the horse's needs and the experience and environment available."],
      ["Welfare Comes First", "A foster placement is not simply extra grazing. The horse's management, handling, nutrition, health requirements and safety must be appropriate, with clear communication between Hawkez Haven and the foster home."],
      ["A Step Toward a Safe Future", "For the right horse and the right home, fostering can provide valuable stability while a longer-term plan is developed."]
    ]
  },
  "/volunteer": {
    h1: "Volunteer with Hawkez Haven",
    sections: [
      ["Help Horses Find Their Second Chance", "Volunteers support the everyday work behind a welfare-focused horse rescue, including horse care, grooming, feeding, rugging, tack care, paddock maintenance, rehabilitation support and education."],
      ["Learning and Horsemanship", "Volunteering is an opportunity to build practical understanding of horse behaviour, safe handling, grooming and welfare while contributing to the care of rescued horses."],
      ["Safety and Welfare", "Volunteer activities are matched to experience and the needs of the horses. Safe handling, patience and respect for the horse are central to the Hawkez Haven approach."]
    ]
  },
  "/education": {
    h1: "Horse Education and Horsemanship",
    sections: [
      ["Learn to Understand Horses", "Hawkez Haven provides horse education and horsemanship experiences with welfare, safety and understanding at the heart of every lesson. Education can include grooming, tack identification, horse care, anatomy, groundwork, safe handling and mounted work where appropriate."],
      ["For Children and Adults", "Learning is adapted to the person's age, experience and confidence. The aim is to develop practical knowledge and a respectful understanding of horses rather than simply teaching someone to ride."],
      ["Connection Before Correction", "Students are encouraged to understand what a horse is communicating, build trust and make safe decisions before asking for performance."]
    ]
  },
  "/experiences": {
    h1: "Horse Experiences and Horsemanship",
    sections: [
      ["Practical Horse Experiences", "Hawkez Haven offers practical horsemanship experiences designed to build confidence, knowledge, safety and a better understanding of horses."],
      ["More Than Riding", "Experiences can include grooming, handling, groundwork, horse care, tack knowledge and other practical education. Mounted work is approached according to the horse, rider and safety requirements."],
      ["A Welfare-First Approach", "The goal is to create informed, confident people who understand horses and can make safer, kinder decisions around them."]
    ]
  },
  "/support": {
    h1: "Support Hawkez Haven",
    sections: [
      ["Help Give Horses a Second Chance", "Hawkez Haven relies on support to provide rescue horses with food, veterinary care, farrier care, rehabilitation, safe accommodation and ongoing welfare."],
      ["Every Contribution Helps", "Support can help cover the practical costs of caring for horses while they recover and prepare for the future. Sponsorship, donations, volunteering and responsible community support all make a difference."],
      ["Welfare Before Quantity", "Hawkez Haven focuses on caring properly for the horses already in its care rather than taking in more horses than available resources can support."]
    ]
  },
  "/contact": {
    h1: "Contact Hawkez Haven",
    sections: [
      ["Get in Touch", "Contact Hawkez Haven about horse rescue, adoption, sponsorship, fostering, volunteering, horse education, lessons or general enquiries."],
      ["Responsible Enquiries", "If you are looking to surrender, adopt, foster or support a horse, providing clear information about your circumstances helps Hawkez Haven understand what assistance may be appropriate."],
      ["New Zealand Horse Rescue and Rehabilitation", "Hawkez Haven is a New Zealand equine rescue, rehabilitation and responsible rehoming organisation focused on welfare, patience, education and long-term outcomes."]
    ]
  }
};

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

for (const [path, page] of Object.entries(content)) {
  const file = resolve(distDir, path.slice(1), "index.html");
  let html = await readFile(file, "utf8");
  const sections = page.sections.map(([heading, text]) => `<section><h2>${escapeHtml(heading)}</h2><p>${escapeHtml(text)}</p></section>`).join("\n");
  const body = `<main><article><h1>${escapeHtml(page.h1)}</h1>${sections}<p><a href="${site}/contact">Contact Hawkez Haven</a> · <a href="${site}/horses">Meet Our Horses</a> · <a href="${site}/adoption">Horse Adoption</a></p></article></main>`;
  html = html.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, html, "utf8");
}

console.log(`Added crawlable content to ${Object.keys(content).length} important routes.`);
