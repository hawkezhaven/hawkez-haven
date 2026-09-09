import { readdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const distDir = resolve("dist");
const site = "https://hawkezhaven.org";
const servicePages = {
  adoption: { name: "Horse Adoption", description: "Welfare-first horse adoption and responsible matching for rescue horses at Hawkez Haven." },
  foster: { name: "Rescue Horse Fostering", description: "Foster opportunities that give rescue horses time, care and a safe place to rebuild confidence." },
  sponsorship: { name: "Rescue Horse Sponsorship", description: "Sponsorship that helps provide Hawkez Haven rescue horses with feed, veterinary care and rehabilitation." },
  education: { name: "Horse Education and Horsemanship", description: "Horse education, horsemanship and practical experiences centred on welfare, safety and understanding." },
};

const organisation = {
  "@type": ["AnimalShelter", "Organization"],
  "@id": `${site}/#organisation`,
  name: "Hawkez Haven",
  alternateName: "Hawkez Haven – Second Chances",
  url: `${site}/`,
  logo: `${site}/favicon.png`,
  image: `${site}/images/hero-horse.jpg`,
  description: "Independent equine rescue, rehabilitation, rehoming and connection-based horsemanship service in New Zealand.",
  areaServed: { "@type": "Country", name: "New Zealand" },
  slogan: "Where Second Chances Find Their Stride",
  email: "hawkezhaven@gmail.com",
  telephone: "+64 20 4053 6441",
  address: {
    "@type": "PostalAddress",
    streetAddress: "117 North Street",
    addressLocality: "Ashhurst",
    addressRegion: "Manawatū-Whanganui",
    postalCode: "4810",
    addressCountry: "NZ",
  },
  sameAs: ["https://www.facebook.com/HawkezHaven"],
  knowsAbout: ["Horse Rescue", "Equine Rehabilitation", "Horse Welfare", "Off-The-Track Thoroughbreds", "Horsemanship", "Horse Education"],
};

const entries = await readdir(distDir, { withFileTypes: true });
const pageDirs = entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name);

for (const slug of pageDirs) {
  const file = resolve(distDir, slug, "index.html");
  let html;
  try { html = await readFile(file, "utf8"); } catch { continue; }

  const match = html.match(/<script id="hawkez-haven-prerendered-schema" type="application\/ld\+json">([\s\S]*?)<\/script>/i);
  if (!match) continue;

  let data;
  try { data = JSON.parse(match[1]); } catch { continue; }
  const graph = Array.isArray(data["@graph"]) ? data["@graph"] : [];
  const organisationIndex = graph.findIndex((item) => item?.["@id"] === `${site}/#organisation`);
  if (organisationIndex >= 0) graph[organisationIndex] = { ...graph[organisationIndex], ...organisation };
  else graph.unshift(organisation);

  const service = servicePages[slug];
  if (service) {
    const serviceId = `${site}/${slug}#service`;
    const serviceNode = {
      "@type": "Service",
      "@id": serviceId,
      name: service.name,
      description: service.description,
      url: `${site}/${slug}`,
      areaServed: { "@type": "Country", name: "New Zealand" },
      provider: { "@id": `${site}/#organisation` },
    };
    const serviceIndex = graph.findIndex((item) => item?.["@id"] === serviceId);
    if (serviceIndex >= 0) graph[serviceIndex] = serviceNode;
    else graph.push(serviceNode);
  }

  data["@graph"] = graph;
  const replacement = `<script id="hawkez-haven-prerendered-schema" type="application/ld+json">${JSON.stringify(data)}</script>`;
  html = html.replace(match[0], replacement);
  await writeFile(file, html, "utf8");
}

console.log("Upgraded prerendered organisation and service schema.");
