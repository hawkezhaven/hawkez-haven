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
      ["A Practical Way to Support Rescue", "Sponsoring a horse is a meaningful way to support their individual journey while learning more about the horse and the work involved in responsible rehabilitation and rehoming."],
      ["What Does Rescue Horse Sponsorship Pay For?", "Sponsorship helps with the everyday and unexpected costs of keeping a rescue horse safe and well. Depending on the horse's needs, support can contribute toward feed, hay, veterinary treatment, hoof care, rehabilitation, handling, equipment and other welfare needs."],
      ["Why Ongoing Support Matters", "Rehabilitation does not always have a fixed timetable. A horse may need continued nutrition, health care, confidence-building or retraining before they are ready for their next step. Sponsorship helps Hawkez Haven make decisions based on welfare rather than financial pressure to move a horse on too quickly."]
    ]
  },
  "/foster": {
    h1: "Foster a Rescue Horse",
    sections: [
      ["Fostering Creates Space for Recovery", "All horses currently available for adoption may also be considered for foster placement. Fostering gives a Hawkez Haven horse a safe, supportive home with grazing and daily care while they wait for the right forever home, allowing foster homes to be part of their journey up close without the lifelong commitment of ownership."],
      ["Fostering and Adoption Are Connected", "Fostering and adoption are connected, but they are not the same commitment. A horse may be fostered while Hawkez Haven continues looking for their permanent home, and a foster placement does not automatically mean the horse is being adopted by the foster family."],
      ["Welfare Comes First", "Fostering is more than providing extra grazing. The horse's management, handling, nutrition, health requirements and safety must be appropriate, with clear communication between Hawkez Haven and the foster home. The right foster home gives the horse stability while supporting their long-term welfare."],
      ["What Does Fostering a Rescue Horse Involve?", "A foster home provides the day-to-day care and environment a horse needs while Hawkez Haven remains involved in their welfare and rehoming journey. This can include safe grazing, routine care, observation, communication and following the horse's agreed management plan."],
      ["Who Is Foster Care Suitable For?", "Foster suitability depends on the individual horse and the home available. Hawkez Haven considers the property's safety, grazing and shelter, the carer's experience, the horse's temperament and handling needs, and whether the arrangement can provide consistent care. Fostering is a shared responsibility, not simply a short-term way to keep a horse."],
      ["What Happens If a Foster Placement Is Not the Right Fit?", "The welfare of the horse comes first. If a foster arrangement is no longer suitable, Hawkez Haven works with the foster home to determine the safest next step rather than allowing an unsuitable placement to continue. Clear communication is an important part of responsible foster care."]
    ]
  },
  "/volunteer": {
    h1: "Volunteer with Hawkez Haven",
    sections: [
      ["Help Horses Find Their Second Chance", "Volunteers support the everyday work behind a welfare-focused horse rescue, including horse care, grooming, feeding, rugging, tack care, paddock maintenance, rehabilitation support and education."],
      ["Learning and Horsemanship", "Volunteering is an opportunity to build practical understanding of horse behaviour, safe handling, grooming and welfare while contributing to the care of rescued horses."],
      ["Safety and Welfare", "Volunteer activities are matched to experience and the needs of the horses. Safe handling, patience and respect for the horse are central to the Hawkez Haven approach."],
      ["What Does a Horse Rescue Volunteer Do?", "Volunteer tasks vary with the needs of the horses and the experience of each person. Practical help can include grooming, feeding, paddock and equipment care, general horse care and supporting rehabilitation routines under appropriate guidance."],
      ["Can Volunteering Include Horse Education?", "Yes. Volunteering can help people develop a better understanding of horse behaviour, welfare and safe handling while they contribute to the rescue. Education is about learning to listen to the horse and make safer, more thoughtful decisions, not simply getting more time in the saddle."]
    ]
  },
  "/education": {
    h1: "Horse Education and Horsemanship",
    sections: [
      ["Learn to Understand Horses", "Hawkez Haven provides horse education and horsemanship experiences with welfare, safety and understanding at the heart of every lesson. Education can include grooming, tack identification, horse care, anatomy, groundwork, safe handling and mounted work where appropriate."],
      ["For Children and Adults", "Learning is adapted to the person's age, experience and confidence. The aim is to develop practical knowledge and a respectful understanding of horses rather than simply teaching someone to ride."],
      ["Connection Before Correction", "Students are encouraged to understand what a horse is communicating, build trust and make safe decisions before asking for performance."],
      ["What Can I Learn Through Horse Education and Horsemanship?", "Learning can cover practical horse care, grooming, tack, anatomy, behaviour, groundwork, connection, safe handling and horsemanship. Experiences are adapted to the person and the horse rather than following a one-size-fits-all lesson plan."],
      ["What Makes Rescue Horse Education Different?", "Learning around rescue horses can provide insight into rehabilitation, trust, confidence and the ways previous experiences can affect behaviour. The focus is on understanding why a horse may respond a certain way and choosing safe, welfare-focused ways to build communication."],
      ["Who Are Hawkez Haven's Horse Experiences For?", "Experiences can suit children, adults, beginners and people wanting to deepen existing horse knowledge, with activities matched to age, confidence, experience and the individual horse. Safety and welfare remain more important than completing a particular activity."]
    ]
  },
  "/support": {
    h1: "Support Hawkez Haven",
    sections: [
      ["Help Give Horses a Second Chance", "Hawkez Haven relies on support to provide rescue horses with food, veterinary care, farrier care, rehabilitation, safe accommodation and ongoing welfare."],
      ["Every Contribution Helps", "Support can help cover the practical costs of caring for horses while they recover and prepare for the future. Sponsorship, donations, volunteering and responsible community support all make a difference."],
      ["Welfare Before Quantity", "Hawkez Haven focuses on caring properly for the horses already in its care rather than taking in more horses than available resources can support."],
      ["What Does a Horse Rescue Need Support For?", "The cost of rescue is ongoing. Horses may need feed and hay, hoof care, veterinary treatment, medication, rehabilitation, safe equipment and everyday care. Support helps Hawkez Haven meet those needs while making welfare-based decisions for each horse."],
      ["How Can I Help Hawkez Haven?", "There are several ways to help: make a donation, sponsor a rescue horse, provide suitable support or services, volunteer where appropriate, share the rescue's work, or consider fostering or adopting when the right match becomes available. Every form of support helps build better outcomes for horses."],
      ["Why Small Contributions Matter", "Rescue care is made up of many practical expenses, and smaller contributions can still help cover part of a horse's daily or medical needs. Hawkez Haven values consistent, sustainable support because rehabilitation and recovery can take time."]
    ]
  },
  "/contact": {
    h1: "Contact Hawkez Haven",
    sections: [
      ["Get in Touch", "Contact Hawkez Haven about horse rescue, adoption, sponsorship, fostering, volunteering, horse education, lessons or general enquiries."],
      ["Responsible Enquiries", "If you are looking to surrender, adopt, foster or support a horse, providing clear information about your circumstances helps Hawkez Haven understand what assistance may be appropriate."],
      ["New Zealand Horse Rescue and Rehabilitation", "Hawkez Haven is a New Zealand equine rescue, rehabilitation and responsible rehoming organisation focused on welfare, patience, education and long-term outcomes."],
      ["How Do I Contact Hawkez Haven About a Rescue Horse?", "The contact page is the starting point for enquiries about rescue, adoption, fostering, sponsorship, volunteering and horse education. Providing useful details about your situation helps Hawkez Haven understand your enquiry and respond appropriately."],
      ["What Information Should I Include in an Enquiry?", "For an adoption or foster enquiry, useful information can include your location, horse experience, property or grazing arrangements, the type of horse you are looking for and what you hope to do with the horse. For a surrender or welfare enquiry, explain the horse's circumstances and any known health, handling or management needs."],
      ["Where Is Hawkez Haven Located?", "Hawkez Haven is based in Ashhurst in the Manawatū-Whanganui region of New Zealand. Enquiries can be made about horses, support and education, with suitability and welfare considered individually rather than assuming every service or placement is available to every person."]
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
