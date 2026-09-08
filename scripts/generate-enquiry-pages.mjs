import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const distDir = resolve("dist");
const template = await readFile(resolve(distDir, "index.html"), "utf8");
const site = "https://hawkezhaven.org";

const pages = {
  "/enquire/adoption": {
    title: "Horse Adoption Enquiry | Hawkez Haven NZ",
    description: "Start a horse adoption enquiry with Hawkez Haven. Tell us about your experience, setup and the home you can offer a rescue horse.",
    canonical: "/adoption",
    heading: "Adoption Enquiry",
    text: "Tell us about yourself, your experience with horses and the home you can offer. Every adoption enquiry is considered with the horse's welfare and long-term future in mind.",
  },
  "/enquire/experiences": {
    title: "Horse Experience Enquiry | Hawkez Haven NZ",
    description: "Enquire about horse education, horsemanship and practical experiences at Hawkez Haven, including care, groundwork, connection and riding.",
    canonical: "/education",
    heading: "Book an Experience",
    text: "Tell us what you would like to learn or experience with the horses at Hawkez Haven, and we can help find the right session for you.",
  },
  "/enquire/foster": {
    title: "Foster Horse Enquiry | Hawkez Haven NZ",
    description: "Enquire about fostering a Hawkez Haven rescue horse and helping provide a safe place to recover, rebuild confidence and prepare for a new chapter.",
    canonical: "/foster",
    heading: "Foster Horse Enquiry",
    text: "Tell us about your experience, facilities and the support you could provide to a horse in rehabilitation or transition.",
  },
  "/enquire/volunteer": {
    title: "Volunteer Enquiry | Hawkez Haven NZ",
    description: "Enquire about volunteering with Hawkez Haven and helping with horse care, rehabilitation, education and day-to-day rescue work.",
    canonical: "/volunteer",
    heading: "Volunteer Enquiry",
    text: "Tell us a little about yourself, your experience and how you would like to help Hawkez Haven.",
  },
};

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}

function replaceHeadTag(html, pattern, tag) {
  const headEnd = html.search(/<\/head>/i);
  if (headEnd === -1) throw new Error("Cannot prerender enquiry metadata: </head> is missing from dist/index.html");
  const head = html.slice(0, headEnd).replace(pattern, "");
  const tail = html.slice(headEnd);
  return `${head}${tag}\n  ${tail}`;
}

function renderPage(path, meta) {
  const canonical = `${site}${meta.canonical}`;
  let html = template;
  html = replaceHeadTag(html, /<title>[\s\S]*?<\/title>/gi, `<title>${escapeHtml(meta.title)}</title>`);
  html = replaceHeadTag(html, /<meta\s+name=["']description["'][^>]*>/gi, `<meta name="description" content="${escapeHtml(meta.description)}" />`);
  html = replaceHeadTag(html, /<meta\s+name=["']robots["'][^>]*>/gi, `<meta name="robots" content="noindex,follow" />`);
  html = replaceHeadTag(html, /<link\s+rel=["']canonical["'][^>]*>/gi, `<link rel="canonical" href="${canonical}" />`);
  html = replaceHeadTag(html, /<meta\s+property=["']og:title["'][^>]*>/gi, `<meta property="og:title" content="${escapeHtml(meta.title)}" />`);
  html = replaceHeadTag(html, /<meta\s+property=["']og:description["'][^>]*>/gi, `<meta property="og:description" content="${escapeHtml(meta.description)}" />`);
  html = html.replace(/<script\s+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>\s*/gi, "");
  const body = `<main><article><h1>${escapeHtml(meta.heading)}</h1><p>${escapeHtml(meta.text)}</p><p><a href="${meta.canonical}">Return to ${escapeHtml(meta.canonical.slice(1))}</a> · <a href="/contact">Contact Hawkez Haven</a></p></article></main>`;
  html = html.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  return { html, output: resolve(distDir, path.slice(1), "index.html") };
}

for (const [path, meta] of Object.entries(pages)) {
  const { html, output } = renderPage(path, meta);
  await mkdir(resolve(output, ".."), { recursive: true });
  await writeFile(output, html, "utf8");
}
