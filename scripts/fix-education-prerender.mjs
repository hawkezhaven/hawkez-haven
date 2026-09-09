import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const contactBody = `<main><article><h1>Contact Hawkez Haven</h1><p>Hawkez Haven is based at 117 North Street, Ashhurst, Manawatū 4810, New Zealand. Visits are by appointment only.</p><h2>Find Hawkez Haven</h2><p>117 North Street, Ashhurst, Manawatū 4810, New Zealand</p><iframe title="Map showing Hawkez Haven at 117 North Street, Ashhurst, Manawatū" src="https://www.google.com/maps?q=117+North+Street,+Ashhurst,+Manawatu+4810,+New+Zealand&amp;output=embed" width="100%" height="380" style="border:0;max-width:100%;" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><p><a href="https://www.google.com/maps/search/?api=1&amp;query=117+North+Street%2C+Ashhurst%2C+Manawatu+4810%2C+New+Zealand">Open in Google Maps</a></p><p>Contact us about horse rescue, adoption, sponsorship, volunteering, fostering, lessons and other enquiries.</p></article></main>`;

const contactPath = resolve("dist", "contact", "index.html");
try {
  const html = await readFile(contactPath, "utf8");
  const updated = html.replace(/<div id="root">[\s\S]*?<\/div>/, `<div id="root">${contactBody}</div>`);
  await writeFile(contactPath, updated, "utf8");
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}

const educationPath = resolve("dist", "education", "index.html");
const educationFaqs = [
  ["Do I need horse experience?", "Not always. Horse Care Discovery and the Family Horse Experience are suitable for beginners. Other sessions have their own experience requirements."],
  ["Are the experiences suitable for children?", "Children are welcome in suitable sessions. Tell us the ages of everyone attending so we can choose an appropriate horse and activity."],
  ["Do you offer riding lessons?", "Yes. Riding lessons are available for beginner to intermediate riders and are built around safe handling, balance, communication and horse suitability."],
  ["What does an experience cost?", "Current introductory prices are listed on the Education & Horsemanship page and are confirmed at booking."],
  ["How many people can attend?", "Group sizes are kept small. The maximum number is listed for each experience."],
  ["Where are sessions held?", "All experiences take place at Hawkez Haven in Ashhurst, Manawatū, New Zealand, by appointment only."],
  ["What should I wear?", "Closed-toe shoes are required and long trousers are recommended. We will tell you about any additional safety equipment needed."],
  ["How do I book?", "Use the enquiry form on the page to tell us which experience you want, how many people are attending and your preferred dates."],
];
const faqJson = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: educationFaqs.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
});
const faqBody = `<section><h2>Frequently Asked Questions</h2><dl>${educationFaqs.map(([question, answer]) => `<dt><strong>${question}</strong></dt><dd>${answer}</dd>`).join("")}</dl></section>`;
try {
  const html = await readFile(educationPath, "utf8");
  const updated = html
    .replace(/<title>[\s\S]*?<\/title>/i, "<title>Education &amp; Horsemanship | Hawkez Haven NZ</title>")
    .replace(/Horse Education &amp; Experiences \| Hawkez Haven NZ/g, "Education &amp; Horsemanship | Hawkez Haven NZ")
    .replace(/<h1>[\s\S]*?<\/h1>/i, "<h1>Education &amp; Horsemanship</h1>")
    .replace(/<\/main>/i, `${faqBody}</main>`)
    .replace(/<\/head>/i, `<script id="hawkez-haven-education-faq-schema" type="application/ld+json">${faqJson}</script>\n</head>`);
  await writeFile(educationPath, updated, "utf8");
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}

const servicePages = {
  "/adoption": {
    name: "Horse Adoption",
    serviceType: "Horse adoption and responsible rehoming",
    description: "Welfare-first horse adoption and responsible rehoming through careful matching, approved homes and ongoing support.",
  },
  "/foster": {
    name: "Rescue Horse Foster Program",
    serviceType: "Rescue horse fostering",
    description: "A supported foster pathway giving rescue horses a safe, suitable home while they wait for the right permanent placement.",
  },
  "/sponsorship": {
    name: "Rescue Horse Sponsorship",
    serviceType: "Horse rescue sponsorship",
    description: "Horse sponsorship that helps provide feed, veterinary care, farrier care, rehabilitation and ongoing welfare.",
  },
  "/education": {
    name: "Horse Education and Horsemanship",
    serviceType: "Horse education and horsemanship experiences",
    description: "Horse care, groundwork, horsemanship and practical education focused on welfare, safety, understanding and connection.",
  },
};

const organisation = {
  "@type": ["AnimalShelter", "Organization"],
  "@id": "https://hawkezhaven.org/#organisation",
  name: "Hawkez Haven",
  alternateName: ["Hawkez Haven – Second Chances", "Hawkez Haven Second Chances"],
  url: "https://hawkezhaven.org/",
  logo: "https://hawkezhaven.org/favicon.png",
  image: "https://hawkezhaven.org/images/hero-horse.jpg",
  description: "Independent New Zealand equine rescue, rehabilitation, responsible rehoming and connection-based horsemanship organisation.",
  areaServed: { "@type": "Country", name: "New Zealand" },
  slogan: "Where Second Chances Find Their Stride",
  email: "hawkezhaven@gmail.com",
  telephone: "+64 20 4053 6441",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ashhurst",
    addressRegion: "Manawatū-Whanganui",
    addressCountry: "NZ",
  },
  sameAs: ["https://www.facebook.com/HawkezHaven", "https://www.wikidata.org/wiki/Q141190304"],
  knowsAbout: ["Horse Rescue", "Equine Rehabilitation", "Off-The-Track Thoroughbred Retraining", "Horsemanship Lessons", "Horse Welfare"],
};

for (const [path, service] of Object.entries(servicePages)) {
  const file = resolve("dist", path.slice(1), "index.html");
  try {
    const html = await readFile(file, "utf8");
    const schemaMatch = html.match(/<script id="hawkez-haven-prerendered-schema" type="application\/ld\+json">([\s\S]*?)<\/script>/i);
    if (!schemaMatch) continue;

    const schema = JSON.parse(schemaMatch[1]);
    const graph = Array.isArray(schema["@graph"]) ? schema["@graph"] : [];
    const orgIndex = graph.findIndex((item) => item["@id"] === organisation["@id"]);
    if (orgIndex >= 0) graph[orgIndex] = { ...graph[orgIndex], ...organisation };
    else graph.push(organisation);

    const serviceId = `https://hawkezhaven.org${path}#service`;
    const serviceNode = {
      "@type": "Service",
      "@id": serviceId,
      name: service.name,
      serviceType: service.serviceType,
      description: service.description,
      url: `https://hawkezhaven.org${path}`,
      provider: { "@id": organisation["@id"] },
      areaServed: organisation.areaServed,
    };
    const serviceIndex = graph.findIndex((item) => item["@id"] === serviceId);
    if (serviceIndex >= 0) graph[serviceIndex] = serviceNode;
    else graph.push(serviceNode);

    const updatedSchema = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
    const updatedHtml = html.replace(schemaMatch[0], `<script id="hawkez-haven-prerendered-schema" type="application/ld+json">${updatedSchema}</script>`);
    await writeFile(file, updatedHtml, "utf8");
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
}

console.log("Verified Contact map prerender, Education FAQ content, and strengthened prerendered organization and service schema.");
