import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import vm from "node:vm";

const distDir = resolve("dist");
const horsesSource = await readFile(resolve("src/lib/horses.ts"), "utf8");

// HORSES is the single source of truth for the horse pages. Read the existing
// data at build time so the crawlable HTML can never drift from the visible site.
const horsesCode = horsesSource
  .slice(horsesSource.indexOf("export const HORSES"))
  .replace("export const HORSES: Horse[] =", "const HORSES =")
  .concat("\n;globalThis.__HORSES = HORSES;");

const context = {};
vm.runInNewContext(horsesCode, context, { filename: "src/lib/horses.ts" });
const horses = context.__HORSES;

if (!Array.isArray(horses) || horses.length === 0) {
  throw new Error("Could not load HORSES from src/lib/horses.ts for SEO prerendering.");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function storyHtml(story) {
  return story
    .split("\n\n")
    .filter(Boolean)
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("\n");
}

function horseSchema(horse) {
  const path = `/horses/${horse.id}`;
  const url = `https://hawkezhaven.org${path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://hawkezhaven.org/#website",
        "url": "https://hawkezhaven.org/",
        "name": "Hawkez Haven",
        "inLanguage": "en-NZ",
      },
      {
        "@type": "AnimalShelter",
        "@id": "https://hawkezhaven.org/#organisation",
        "name": "Hawkez Haven",
        "url": "https://hawkezhaven.org/",
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        "url": url,
        "name": `${horse.name} | Hawkez Haven Horse Rescue New Zealand`,
        "description": horse.description,
        "inLanguage": "en-NZ",
        "isPartOf": { "@id": "https://hawkezhaven.org/#website" },
        "about": { "@id": `${url}#animal` },
        "mainEntity": { "@id": `${url}#animal` },
      },
      {
        "@type": "Animal",
        "@id": `${url}#animal`,
        "name": horse.name,
        "description": horse.description,
        "image": `https://hawkezhaven.org${horse.image}`,
        "breed": horse.breed,
        "color": horse.colour,
        "gender": horse.sex,
      },
    ],
  };
}

for (const horse of horses) {
  const file = resolve(distDir, "horses", horse.id, "index.html");
  let html = await readFile(file, "utf8");

  const story = storyHtml(horse.fullStory);
  const disciplines = (horse.disciplines ?? [])
    .map((discipline) => `<li>${escapeHtml(discipline)}</li>`)
    .join("");

  const body = `<main><article aria-labelledby="horse-title">
    <header>
      <p>${escapeHtml(horse.sex)} · ${escapeHtml(horse.breed)} · Journey Began ${escapeHtml(horse.journeyBegan)}</p>
      <h1 id="horse-title">${escapeHtml(horse.name)}</h1>
      <p>${escapeHtml(horse.tagline)}</p>
      <p>${escapeHtml(horse.description)}</p>
    </header>
    <section aria-labelledby="horse-details">
      <h2 id="horse-details">Horse Details</h2>
      <dl>
        <dt>Height</dt><dd>${escapeHtml(horse.height)}</dd>
        <dt>Colour</dt><dd>${escapeHtml(horse.colour)}</dd>
        <dt>Age</dt><dd>${escapeHtml(horse.age)}</dd>
        <dt>Sex</dt><dd>${escapeHtml(horse.sex)}</dd>
        <dt>Status</dt><dd>${escapeHtml(horse.status)}</dd>
        <dt>Rider Level</dt><dd>${escapeHtml(horse.riderLevel)}</dd>
      </dl>
      ${disciplines ? `<h3>Disciplines</h3><ul>${disciplines}</ul>` : ""}
    </section>
    <section aria-labelledby="my-journey">
      <h2 id="my-journey">${escapeHtml(horse.storyTitle)}</h2>
      ${story}
    </section>
    <section aria-labelledby="looking-forward">
      <h2 id="looking-forward">Looking Forward</h2>
      <p>${escapeHtml(horse.lookingForward)}</p>
    </section>
    <nav aria-label="Horse navigation">
      <a href="/horses">Back to Our Horses</a> ·
      <a href="/adoption">Horse Adoption</a> ·
      <a href="/support">Support Hawkez Haven</a> ·
      <a href="/contact">Contact Hawkez Haven</a>
    </nav>
  </article></main>`;

  html = html.replace('<div id="root"></div>', `<div id="root">${body}</div>`);

  const schemaStart = html.indexOf('<script id="hawkez-haven-prerendered-schema"');
  if (schemaStart !== -1) {
    const schemaEnd = html.indexOf("</script>", schemaStart);
    if (schemaEnd !== -1) {
      html = `${html.slice(0, schemaStart)}${html.slice(schemaEnd + "</script>".length)}`;
    }
  }

  html = html.replace(
    "</head>",
    `<script id="hawkez-haven-prerendered-schema" type="application/ld+json">${JSON.stringify(horseSchema(horse))}</script>\n  </head>`,
  );

  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, html, "utf8");
}

console.log(`Made ${horses.length} horse stories crawlable in their initial HTML.`);
