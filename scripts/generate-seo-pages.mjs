import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const distDir = resolve("dist");
const template = await readFile(resolve(distDir, "index.html"), "utf8");
const site = "https://hawkezhaven.org";

const pages = {
  "/": { title: "Hawkez Haven | Equine Rescue & Rehabilitation in New Zealand", description: "Hawkez Haven is a New Zealand horse rescue and rehabilitation organisation. We rescue, rehabilitate and rehome horses, giving every horse a second chance." },
  "/about": { title: "About Hawkez Haven | Horse Rescue & Rehabilitation NZ", description: "Learn about Hawkez Haven, our welfare-first approach to horse rescue, rehabilitation, responsible rehoming and giving horses a genuine second chance." },
  "/horses": { title: "Our Horses | Hawkez Haven Horse Rescue NZ", description: "Meet the horses of Hawkez Haven and follow their individual journeys through rescue, rehabilitation, recovery and responsible rehoming." },
  "/adoption": { title: "Horse Adoption | Hawkez Haven New Zealand", description: "Learn how horse adoption works at Hawkez Haven, including our welfare-first matching process, approved homes and lifelong support." },
  "/sponsorship": { title: "Sponsor a Rescue Horse | Hawkez Haven NZ", description: "Support a Hawkez Haven rescue horse through sponsorship and help provide feed, veterinary care, rehabilitation and a second chance." },
  "/foster": { title: "Foster a Rescue Horse | Hawkez Haven New Zealand", description: "Find out how fostering can help a Hawkez Haven rescue horse recover, rebuild confidence and prepare for their next chapter." },
  "/volunteer": { title: "Volunteer | Hawkez Haven Horse Rescue NZ", description: "Volunteer with Hawkez Haven and help with horse care, rehabilitation, education and the day-to-day work behind a welfare-focused rescue." },
  "/education": { title: "Horse Education & Experiences | Hawkez Haven NZ", description: "Explore horse education, horsemanship and practical experiences at Hawkez Haven, with welfare and understanding at the heart of every lesson." },
  "/support": { title: "Support Hawkez Haven | Help Give Horses a Second Chance", description: "Support Hawkez Haven through donations and other ways to help provide rescue horses with care, rehabilitation and a safe future." },
  "/contact": { title: "Contact Hawkez Haven | Horse Rescue New Zealand", description: "Contact Hawkez Haven about horse rescue, adoption, sponsorship, volunteering, fostering, lessons and other enquiries." },
  "/gift-card": { title: "Hawkez Haven Gift Cards | Give a Second Chance", description: "Give a Hawkez Haven gift card and share meaningful horse experiences while supporting welfare-first rescue and rehabilitation." },
};

const horsePages = {
  rip: { name: "Rip", title: "Rip | Hawkez Haven Horse Rescue New Zealand", description: "Meet Rip, the Thoroughbred who inspired Hawkez Haven. Follow his rescue, rehabilitation, recovery and lifelong journey as the heart of the sanctuary.", image: "/images/rip.jpg" },
  haven: { name: "Haven", title: "Haven | Hawkez Haven Horse Rescue New Zealand", description: "Meet Haven, a Thoroughbred mare whose journey from uncertainty to trust made her a permanent resident and confidence-building horse at Hawkez Haven.", image: "/images/haven.jpg" },
  pedro: { name: "Pedro", title: "Pedro | Hawkez Haven Horse Rescue New Zealand", description: "Meet Pedro, the gentle chestnut Thoroughbred who became a teacher of partnership, confidence and horsemanship at Hawkez Haven.", image: "/images/pedro.jpg" },
  diablo: { name: "Diablo", title: "Diablo | Hawkez Haven Horse Rescue New Zealand", description: "Meet Diablo, Hawkez Haven's little rebel. Follow the young Thoroughbred's story of growth, recovery and finding a permanent place in the herd.", image: "/images/diablo.jpg" },
  khan: { name: "Khan", title: "Khan | Hawkez Haven Horse Rescue New Zealand", description: "Meet Khan, a striking Thoroughbred gelding whose scars tell a story of survival and whose future is protected at Hawkez Haven.", image: "/images/khan.jpg" },
  kohan: { name: "Kohan", title: "Kohan | Hawkez Haven Horse Rescue New Zealand", description: "Meet Kohan, an OTT Thoroughbred on his rehabilitation journey at Hawkez Haven, learning trust, confidence and a new chapter in life.", image: "/images/kohan.jpg" },
  joey: { name: "Joey", title: "Joey | Hawkez Haven Horse Rescue New Zealand", description: "Meet Joey, a Thoroughbred whose journey through soundness, rehabilitation and careful retraining continues at Hawkez Haven.", image: "/images/joey.jpg" },
  ritz: { name: "Ritz", title: "Ritz | Hawkez Haven Horse Rescue New Zealand", description: "Meet Ritz, a striking Thoroughbred gelding whose next chapter is being carefully matched to the right approved home through Hawkez Haven.", image: "/images/ritz.jpg" },
  electra: { name: "Electra", title: "Electra | Hawkez Haven Horse Rescue New Zealand", description: "Meet Electra, a young mare continuing her rehabilitation journey at Hawkez Haven while she builds confidence, trust and a safe future.", image: "/images/electra.jpg" },
  kahu: { name: "Kahu", title: "Kahu | Hawkez Haven Horse Rescue New Zealand", description: "Meet Kahu, a Thoroughbred gelding whose rehabilitation and ongoing development are part of his second-chance journey at Hawkez Haven.", image: "/images/kahu.jpg" },
};

const routeBody = {
  "/about": `<main><article><h1>More Than A Rescue.</h1><p>Hawkez Haven was built on one simple belief: every horse deserves the opportunity to heal, to be understood and to find where they truly belong.</p><h2>Why Hawkez Haven Exists</h2><p>Hawkez Haven was created to give horses the time, patience and understanding they deserve. Rehabilitation is about rebuilding confidence, trust and hope, at each horse's own pace.</p><p><a href="/horses">Meet our horses</a> · <a href="/adoption">Learn about adoption</a> · <a href="/support">Support Hawkez Haven</a></p></article></main>`,
  "/adoption": `<main><article><h1>A Lifetime Commitment Begins Here</h1><p>Every horse deserves the right home — not just the next home. Our adoption process is designed to match each horse with the people best suited to their future.</p><h2>The right match matters more than a quick match.</h2><p>We take time to understand each horse's temperament, needs and future goals, and we learn about your experience, setup and the life you can offer.</p><p><a href="/horses">Meet our horses</a> · <a href="/enquire/adoption">Start an adoption enquiry</a></p></article></main>`,
  "/sponsorship": `<main><article><h1>Support a Rescue Horse</h1><p>Sponsor a Hawkez Haven horse and help provide the feed, veterinary care, rehabilitation and day-to-day support that makes a second chance possible.</p><h2>Every contribution helps</h2><p>Your support helps us keep welfare at the centre of each horse's rehabilitation journey.</p><p><a href="/horses">Meet the horses</a> · <a href="/support">Other ways to support Hawkez Haven</a></p></article></main>`,
  "/foster": `<main><article><h1>Foster a Rescue Horse</h1><p>Fostering can give a rescue horse a safe place to recover, rebuild confidence and prepare for their next chapter.</p><p><a href="/enquire/foster">Ask about fostering</a> · <a href="/horses">Meet the horses</a></p></article></main>`,
  "/volunteer": `<main><article><h1>Volunteer with Hawkez Haven</h1><p>Help with horse care, rehabilitation, education and the day-to-day work behind a welfare-focused rescue.</p><p><a href="/enquire/volunteer">Volunteer enquiry</a> · <a href="/about">Learn about our approach</a></p></article></main>`,
  "/education": `<main><article><h1>Horse Education &amp; Experiences</h1><p>Explore horse education, horsemanship and practical experiences at Hawkez Haven, with welfare and understanding at the heart of every lesson.</p><h2>Learn With The Horse In Mind.</h2><p>Our education and horsemanship experiences are designed to build knowledge, confidence, safety and a better understanding of horses. Sessions cover horse care, groundwork, connection, riding, rescue and rehabilitation, and thoughtful time with horses.</p><p><a href="/enquire/experiences">Make an education or experience enquiry</a> · <a href="/contact">Contact Hawkez Haven</a></p></article></main>`,
  "/support": `<main><article><h1>Support Hawkez Haven</h1><p>Help provide rescue horses with feed, care, rehabilitation and a safe future.</p><p><a href="/sponsorship">Sponsor a horse</a> · <a href="/contact">Contact Hawkez Haven</a></p></article></main>`,
  "/contact": `<main><article><h1>Contact Hawkez Haven</h1><p>Contact us about horse rescue, adoption, sponsorship, volunteering, fostering, lessons and other enquiries.</p><p><a href="/enquire/general">Start a general enquiry</a></p></article></main>`,
  "/gift-card": `<main><article><h1>Give a Hawkez Haven Gift Card</h1><p>Give a meaningful horse experience while supporting Hawkez Haven's welfare-first rescue and rehabilitation work.</p><p><a href="/education">Explore horse education and experiences</a> · <a href="/support">Support Hawkez Haven</a></p></article></main>`,
};

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}

function upsertHeadTag(html, pattern, tag) {
  const headEnd = html.search(/<\/head>/i);
  if (headEnd === -1) throw new Error("Cannot prerender SEO metadata: </head> is missing from dist/index.html");
  const head = html.slice(0, headEnd);
  const tail = html.slice(headEnd);
  const cleanedHead = head.replace(pattern, "");
  return `${cleanedHead}${tag}\n  ${tail}`;
}

function structuredData(meta, path) {
  const canonical = `${site}${path}`;
  const graph = [
    { "@type": "WebSite", "@id": `${site}/#website`, url: `${site}/`, name: "Hawkez Haven", description: "Hawkez Haven is a New Zealand horse rescue and rehabilitation organisation.", inLanguage: "en-NZ" },
    { "@type": "AnimalShelter", "@id": `${site}/#organisation`, name: "Hawkez Haven", url: `${site}/`, logo: `${site}/icon/icon-192.png`, description: "Independent equine rescue, rehabilitation and connection-based horsemanship sanctuary in New Zealand.", areaServed: "New Zealand", slogan: "Where Second Chances Find Their Stride" },
    { "@type": "WebPage", "@id": `${canonical}#webpage`, url: canonical, name: meta.title, description: meta.description, inLanguage: "en-NZ", isPartOf: { "@id": `${site}/#website` }, about: { "@id": `${site}/#organisation` } },
  ];
  return `<script id="hawkez-haven-prerendered-schema" type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@graph": graph })}</script>`;
}

function renderPage(path, meta, body = "") {
  const canonical = `${site}${path}`;
  let html = template;
  if (path !== "/") html = html.replace(/<script\s+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>\s*/gi, "");
  html = upsertHeadTag(html, /<title>[\s\S]*?<\/title>/gi, `<title>${escapeHtml(meta.title)}</title>`);
  html = upsertHeadTag(html, /<meta\s+name=["']description["'][^>]*>/gi, `<meta name="description" content="${escapeHtml(meta.description)}" />`);
  html = upsertHeadTag(html, /<link\s+rel=["']canonical["'][^>]*>/gi, `<link rel="canonical" href="${canonical}" />`);
  html = upsertHeadTag(html, /<meta\s+property=["']og:title["'][^>]*>/gi, `<meta property="og:title" content="${escapeHtml(meta.title)}" />`);
  html = upsertHeadTag(html, /<meta\s+property=["']og:description["'][^>]*>/gi, `<meta property="og:description" content="${escapeHtml(meta.description)}" />`);
  if (path !== "/") html = upsertHeadTag(html, /<script id=["']hawkez-haven-prerendered-schema["'][\s\S]*?<\/script>\s*/gi, structuredData(meta, path));
  if (body) html = html.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  return { html, output: path === "/" ? resolve(distDir, "index.html") : resolve(distDir, path.slice(1), "index.html") };
}

const horseLinks = Object.entries(horsePages).map(([id, horse]) => `<li><a href="/horses/${id}">${escapeHtml(horse.name)}</a> — ${escapeHtml(horse.description)}</li>`).join("\n");
const homepageBody = `<main><article><header><p>Aotearoa · Equine Rescue &amp; Rehabilitation</p><h1>Where Second Chances Find Their Stride</h1><p>Connection Before Correction.</p><p>Every horse deserves the chance to heal, trust again and find the home they were always meant to have.</p></header><section><h2>A place built on patience, trust and second chances.</h2><p>Hawkez Haven is an equine rescue, rehabilitation and rehoming service in New Zealand, built on one simple belief: every horse deserves to be understood.</p><p>Every horse is given the time, space and support they need to heal and move forward.</p></section><nav aria-label="Hawkez Haven main resources"><h2>Explore Hawkez Haven</h2><ul><li><a href="/horses">Meet Our Horses</a></li><li><a href="/adoption">Horse Adoption</a></li><li><a href="/sponsorship">Sponsor a Rescue Horse</a></li><li><a href="/foster">Foster a Rescue Horse</a></li><li><a href="/volunteer">Volunteer</a></li><li><a href="/education">Horse Education &amp; Horsemanship</a></li><li><a href="/about">About Hawkez Haven</a></li><li><a href="/support">Support Hawkez Haven</a></li><li><a href="/contact">Contact Hawkez Haven</a></li></ul></nav></article></main>`;
const horsesBody = `<main><article><h1>Our Horses</h1><p>Meet the horses of Hawkez Haven and follow their individual journeys through rescue, rehabilitation, recovery and responsible rehoming.</p><section aria-labelledby="horse-stories"><h2 id="horse-stories">Horse Rescue Stories</h2><ul>${horseLinks}</ul></section><p><a href="/adoption">Learn about horse adoption</a> · <a href="/support">Support Hawkez Haven</a> · <a href="/contact">Contact Hawkez Haven</a></p></article></main>`;

const generatedFiles = [];
for (const [path, meta] of Object.entries(pages)) {
  const body = path === "/" ? homepageBody : path === "/horses" ? horsesBody : routeBody[path] || "";
  const { html, output } = renderPage(path, meta, body);
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, html, "utf8");
  generatedFiles.push([output, meta]);
}

for (const [id, horse] of Object.entries(horsePages)) {
  const path = `/horses/${id}`;
  const horseMeta = { ...horse, canonical: path };
  const body = `<main><article><h1>${escapeHtml(horse.name)}</h1><p>${escapeHtml(horse.description)}</p><img src="${escapeHtml(horse.image)}" alt="${escapeHtml(horse.name)} at Hawkez Haven" width="1200" height="800" /><nav aria-label="Horse navigation"><a href="/horses">Back to Our Horses</a> · <a href="/adoption">Horse Adoption</a> · <a href="/support">Support Hawkez Haven</a></nav></article></main>`;
  let { html, output } = renderPage(path, horseMeta, body);
  html = html.replace(/<script id=["']hawkez-haven-prerendered-schema["'][\s\S]*?<\/script>\s*/gi, "");
  const horseSchema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", "@id": `${site}/#website`, url: `${site}/`, name: "Hawkez Haven", inLanguage: "en-NZ" },
      { "@type": "AnimalShelter", "@id": `${site}/#organisation`, name: "Hawkez Haven", url: `${site}/` },
      { "@type": "WebPage", "@id": `${site}${path}#webpage`, url: `${site}${path}`, name: horse.title, description: horse.description, inLanguage: "en-NZ", isPartOf: { "@id": `${site}/#website` }, about: { "@id": `${site}${path}#animal` } },
      { "@type": "Animal", "@id": `${site}${path}#animal`, name: horse.name, description: horse.description },
    ],
  };
  html = html.replace(/<\/head>/i, `<script id="hawkez-haven-prerendered-schema" type="application/ld+json">${JSON.stringify(horseSchema)}</script>\n  </head>`);
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, html, "utf8");
  generatedFiles.push([output, horseMeta]);
}

for (const [output, meta] of generatedFiles) {
  const html = await readFile(output, "utf8");
  const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1];
  const description = html.match(/<meta\s+name=["']description["'][^>]*content=["']([^"']+)["'][^>]*>/i)?.[1];
  if (!title || !description || title !== escapeHtml(meta.title) || description !== escapeHtml(meta.description)) {
    throw new Error(`SEO prerender verification failed for ${output}: expected title and description in the generated <head>`);
  }
  if (output !== resolve(distDir, "index.html") && !/<script id="hawkez-haven-prerendered-schema" type="application\/ld\+json">/.test(html)) {
    throw new Error(`SEO prerender verification failed for ${output}: expected page-specific structured data`);
  }
}

console.log(`Verified prerendered title, description and structured data for ${generatedFiles.length} pages.`);
