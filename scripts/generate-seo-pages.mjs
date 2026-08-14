import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const distDir = resolve("dist");
const template = await readFile(resolve(distDir, "index.html"), "utf8");

const site = "https://hawkezhaven.org";

const pages = {
  "/": {
    title: "Hawkez Haven | Equine Rescue & Rehabilitation in New Zealand",
    description:
      "Hawkez Haven is a New Zealand horse rescue and rehabilitation organisation. We rescue, rehabilitate and rehome horses, giving every horse a second chance.",
  },
  "/about": {
    title: "About Hawkez Haven | Horse Rescue & Rehabilitation NZ",
    description:
      "Learn about Hawkez Haven, our welfare-first approach to horse rescue, rehabilitation, responsible rehoming and giving horses a genuine second chance.",
  },
  "/horses": {
    title: "Our Horses | Hawkez Haven Horse Rescue NZ",
    description:
      "Meet the horses of Hawkez Haven and follow their individual journeys through rescue, rehabilitation, recovery and responsible rehoming.",
  },
  "/adoption": {
    title: "Horse Adoption | Hawkez Haven New Zealand",
    description:
      "Learn how horse adoption works at Hawkez Haven, including our welfare-first matching process, approved homes and lifelong support.",
  },
  "/sponsorship": {
    title: "Sponsor a Rescue Horse | Hawkez Haven NZ",
    description:
      "Support a Hawkez Haven rescue horse through sponsorship and help provide feed, veterinary care, rehabilitation and a second chance.",
  },
  "/foster": {
    title: "Foster a Rescue Horse | Hawkez Haven New Zealand",
    description:
      "Find out how fostering can help a Hawkez Haven rescue horse recover, rebuild confidence and prepare for their next chapter.",
  },
  "/volunteer": {
    title: "Volunteer | Hawkez Haven Horse Rescue NZ",
    description:
      "Volunteer with Hawkez Haven and help with horse care, rehabilitation, education and the day-to-day work behind a welfare-focused rescue.",
  },
  "/education": {
    title: "Horse Education & Experiences | Hawkez Haven NZ",
    description:
      "Explore horse education, horsemanship and practical experiences at Hawkez Haven, with welfare and understanding at the heart of every lesson.",
  },
  "/experiences": {
    title: "Horse Experiences & Horsemanship | Hawkez Haven NZ",
    description:
      "Discover horsemanship experiences and education at Hawkez Haven, designed to build knowledge, confidence, safety and a better understanding of horses.",
  },
  "/support": {
    title: "Support Hawkez Haven | Help Give Horses a Second Chance",
    description:
      "Support Hawkez Haven through donations and other ways to help provide rescue horses with care, rehabilitation and a safe future.",
  },
  "/contact": {
    title: "Contact Hawkez Haven | Horse Rescue New Zealand",
    description:
      "Contact Hawkez Haven about horse rescue, adoption, sponsorship, volunteering, fostering, lessons and other enquiries.",
  },
};

// These pages are included in the sitemap and need their own crawlable HTML
// document rather than falling back to the root SPA shell.
const horsePages = {
  rip: {
    name: "Rip",
    title: "Rip | Hawkez Haven Horse Rescue New Zealand",
    description:
      "Meet Rip, the Thoroughbred who inspired Hawkez Haven. Follow his rescue, rehabilitation, recovery and lifelong journey as the heart of the sanctuary.",
    image: "/images/rip.jpg",
  },
  haven: {
    name: "Haven",
    title: "Haven | Hawkez Haven Horse Rescue New Zealand",
    description:
      "Meet Haven, a Thoroughbred mare whose journey from uncertainty to trust made her a permanent resident and confidence-building horse at Hawkez Haven.",
    image: "/images/haven.jpg",
  },
  pedro: {
    name: "Pedro",
    title: "Pedro | Hawkez Haven Horse Rescue New Zealand",
    description:
      "Meet Pedro, the gentle chestnut Thoroughbred who became a teacher of partnership, confidence and horsemanship at Hawkez Haven.",
    image: "/images/pedro.jpg",
  },
  diablo: {
    name: "Diablo",
    title: "Diablo | Hawkez Haven Horse Rescue New Zealand",
    description:
      "Meet Diablo, Hawkez Haven's little rebel. Follow the young Thoroughbred's story of growth, recovery and finding a permanent place in the herd.",
    image: "/images/diablo.jpg",
  },
  khan: {
    name: "Khan",
    title: "Khan | Hawkez Haven Horse Rescue New Zealand",
    description:
      "Meet Khan, a striking Thoroughbred gelding whose scars tell a story of survival and whose future is protected at Hawkez Haven.",
    image: "/images/khan.jpg",
  },
  kohan: {
    name: "Kohan",
    title: "Kohan | Hawkez Haven Horse Rescue New Zealand",
    description:
      "Meet Kohan, an OTT Thoroughbred on his rehabilitation journey at Hawkez Haven, learning trust, confidence and a new chapter in life.",
    image: "/images/kohan.jpg",
  },
  joey: {
    name: "Joey",
    title: "Joey | Hawkez Haven Horse Rescue New Zealand",
    description:
      "Meet Joey, a Thoroughbred whose journey through soundness, rehabilitation and careful retraining continues at Hawkez Haven.",
    image: "/images/joey.jpg",
  },
  ritz: {
    name: "Ritz",
    title: "Ritz | Hawkez Haven Horse Rescue New Zealand",
    description:
      "Meet Ritz, a striking Thoroughbred gelding whose next chapter is being carefully matched to the right approved home through Hawkez Haven.",
    image: "/images/ritz.jpg",
  },
  electra: {
    name: "Electra",
    title: "Electra | Hawkez Haven Horse Rescue New Zealand",
    description:
      "Meet Electra, a young mare continuing her rehabilitation journey at Hawkez Haven while she builds confidence, trust and a safe future.",
    image: "/images/electra.jpg",
  },
  kahu: {
    name: "Kahu",
    title: "Kahu | Hawkez Haven Horse Rescue New Zealand",
    description:
      "Meet Kahu, a Thoroughbred gelding whose rehabilitation and ongoing development are part of his second-chance journey at Hawkez Haven.",
    image: "/images/kahu.jpg",
  },
};

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

const homepageBody = `
  <main>
    <article>
      <header>
        <p>Aotearoa · Equine Rescue &amp; Rehabilitation</p>
        <h1>Where Second Chances Find Their Stride</h1>
        <p>Connection Before Correction.</p>
        <p>Every horse deserves the chance to heal, trust again and find the home they were always meant to have.</p>
      </header>
      <section>
        <h2>A place built on patience, trust and second chances.</h2>
        <p>Hawkez Haven is an equine rescue, rehabilitation and rehoming service in New Zealand, built on one simple belief: every horse deserves to be understood. We take in horses through owner surrender, off-the-track rehabilitation, and situations where owners are no longer able to provide ongoing care.</p>
        <p>Every horse is given the time, space and support they need to heal and move forward. Rehabilitation here is not about rushing a horse to fit a timeline. It is about trust, connection and meeting each horse where they are.</p>
      </section>
      <section>
        <h2>What we do</h2>
        <h3>Rescue</h3><p>Emergency intake, veterinary triage and a safe soft landing.</p>
        <h3>Rehabilitation</h3><p>Nutrition, farrier care, bodywork and unhurried retraining.</p>
        <h3>Education</h3><p>Horsemanship lessons and practical education for all ages.</p>
        <h3>Rehoming</h3><p>Careful matching of horse and human, with welfare at the centre.</p>
      </section>
      <nav aria-label="Hawkez Haven main resources">
        <h2>Explore Hawkez Haven</h2>
        <ul>
          <li><a href="/horses">Meet Our Horses</a></li>
          <li><a href="/adoption">Horse Adoption</a></li>
          <li><a href="/sponsorship">Sponsor a Rescue Horse</a></li>
          <li><a href="/volunteer">Volunteer</a></li>
          <li><a href="/about">About Hawkez Haven</a></li>
          <li><a href="/support">Support Hawkez Haven</a></li>
          <li><a href="/contact">Contact Hawkez Haven</a></li>
        </ul>
      </nav>
    </article>
  </main>
`;

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NonprofitOrganization",
  "name": "Hawkez Haven",
  "url": site,
  "logo": `${site}/icon/icon-192.png`,
  "description": pages["/"].description,
  "areaServed": "New Zealand",
};

function renderPage(path, meta, body = "") {
  const canonical = `${site}${path === "/" ? "/" : path}`;
  let html = template;

  html = html.replace(/<title>.*?<\/title>/i, `<title>${escapeHtml(meta.title)}</title>`);
  html = html.replace(
    /<meta name="description" content=".*?"\s*\/>/i,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`,
  );
  html = html.replace(
    /<link rel="canonical" href=".*?"\s*\/>/i,
    `<link rel="canonical" href="${canonical}" />`,
  );
  html = html.replace(
    /<meta property="og:title" content=".*?"\s*\/>/i,
    `<meta property="og:title" content="${escapeHtml(meta.title)}" />`,
  );
  html = html.replace(
    /<meta property="og:description" content=".*?"\s*\/>/i,
    `<meta property="og:description" content="${escapeHtml(meta.description)}" />`,
  );

  if (path === "/") {
    html = html.replace(
      "</head>",
      `<script type="application/ld+json">${JSON.stringify(organizationSchema)}</script>\n  </head>`,
    );
  }

  if (body) {
    html = html.replace(
      '<div id="root"></div>',
      `<div id="root">${body}</div>`,
    );
  }

  const output = path === "/" ? resolve(distDir, "index.html") : resolve(distDir, path.slice(1), "index.html");
  return { html, output };
}

for (const [path, meta] of Object.entries(pages)) {
  const body = path === "/" ? homepageBody : "";
  const { html, output } = renderPage(path, meta, body);
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, html, "utf8");
}

for (const [id, horse] of Object.entries(horsePages)) {
  const path = `/horses/${id}`;
  const body = `<main><article><h1>${escapeHtml(horse.name)}</h1><p>${escapeHtml(horse.description)}</p><img src="${escapeHtml(horse.image)}" alt="${escapeHtml(horse.name)} at Hawkez Haven" /></article></main>`;
  const { html, output } = renderPage(path, horse, body);
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, html, "utf8");
}

console.log(
  `Generated SEO-aware entry HTML for ${Object.keys(pages).length} routes and ${Object.keys(horsePages).length} horse pages.`,
);
