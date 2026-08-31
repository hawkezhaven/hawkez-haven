import { readdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const distDir = resolve("dist");
const site = "https://hawkezhaven.org";
const labels = {
  about: "About",
  horses: "Our Horses",
  adoption: "Adoption",
  sponsorship: "Sponsorship",
  foster: "Foster",
  volunteer: "Volunteer",
  education: "Education",
  experiences: "Experiences",
  support: "Support",
  contact: "Contact",
  hub: "Horse Hub",
  "gift-card": "Gift Cards",
};

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}

function titleCase(value) {
  return value.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
}

function breadcrumbStyles() {
  return `<style id="hawkez-haven-prerendered-breadcrumb-styles">
    .site-breadcrumbs { background: color-mix(in srgb, var(--background, #fff) 95%, transparent); border-bottom: 1px solid color-mix(in srgb, var(--border, #dedede) 50%, transparent); color: var(--muted-foreground, #666); font-family: Inter, Arial, sans-serif; }
    .site-breadcrumbs__inner { box-sizing: border-box; margin: 0 auto; max-width: 80rem; padding: .5rem 1rem; }
    .site-breadcrumbs__list { align-items: center; display: flex; flex-wrap: wrap; gap: .375rem; list-style: none; margin: 0; padding: 0; font-size: .875rem; line-height: 1.25rem; }
    .site-breadcrumbs__item { align-items: center; display: inline-flex; gap: .375rem; min-width: 0; }
    .site-breadcrumbs a { color: inherit; text-decoration: none; transition: color .15s ease; }
    .site-breadcrumbs a:hover, .site-breadcrumbs a:focus-visible { color: var(--foreground, #1a1a18); text-decoration: underline; text-underline-offset: .1875rem; }
    .site-breadcrumbs [aria-current="page"] { color: var(--foreground, #1a1a18); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .site-breadcrumbs__separator { color: var(--muted-foreground, #666); user-select: none; }
    @media (min-width: 640px) { .site-breadcrumbs__inner { padding-left: 1.5rem; padding-right: 1.5rem; } .site-breadcrumbs__list { gap: .625rem; } .site-breadcrumbs__item { gap: .625rem; } }
    @media (max-width: 399px) { .site-breadcrumbs__list { flex-wrap: nowrap; } .site-breadcrumbs__item:last-child { flex: 1 1 auto; overflow: hidden; } }
  </style>`;
}

function makeBreadcrumbs(path) {
  const segments = path.split("/").filter(Boolean);
  if (!segments.length) return null;

  const items = [{ name: "Home", url: `${site}/` }];
  const first = segments[0];
  items.push({ name: labels[first] ?? titleCase(first), url: `${site}/${first}` });

  if (segments.length > 1) {
    const last = segments.at(-1);
    items.push({ name: titleCase(last), url: `${site}${path}` });
  }

  const links = items.map((item, index) => {
    const isCurrent = index === items.length - 1;
    const content = isCurrent
      ? `<span aria-current="page">${escapeHtml(item.name)}</span>`
      : `<a href="${escapeHtml(item.url.replace(site, ""))}">${escapeHtml(item.name)}</a>`;
    const separator = index ? '<span class="site-breadcrumbs__separator" aria-hidden="true">›</span>' : "";
    return `<li class="site-breadcrumbs__item">${separator}${content}</li>`;
  }).join("");

  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  });

  return {
    html: `<nav id="hawkez-haven-prerendered-breadcrumbs" aria-label="Breadcrumb" class="site-breadcrumbs"><div class="site-breadcrumbs__inner"><ol class="site-breadcrumbs__list">${links}</ol></div></nav>`,
    jsonLd: `<script id="hawkez-haven-breadcrumb-schema" type="application/ld+json">${jsonLd}</script>`,
  };
}

async function getHtmlFiles(dir, prefix = "") {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const relative = `${prefix}/${entry.name}`;
    const absolute = resolve(dir, entry.name);
    if (entry.isDirectory()) files.push(...await getHtmlFiles(absolute, relative));
    else if (entry.name === "index.html" && relative !== "/index.html") files.push(relative.slice(0, -"/index.html".length));
  }
  return files;
}

const paths = await getHtmlFiles(distDir);
for (const path of paths) {
  const file = resolve(distDir, path.slice(1), "index.html");
  let html = await readFile(file, "utf8");
  const breadcrumbs = makeBreadcrumbs(path);
  if (!breadcrumbs) continue;

  html = html.replace(/<script\s+id="hawkez-haven-breadcrumb-schema"\s+type="application\/ld\+json">[\s\S]*?<\/script>\s*/gi, "");
  html = html.replace(/<nav(?: id="hawkez-haven-prerendered-breadcrumbs")? aria-label="Breadcrumb" class="site-breadcrumbs">[\s\S]*?<\/nav>/gi, "");
  html = html.replace(/<style id="hawkez-haven-prerendered-breadcrumb-styles">[\s\S]*?<\/style>\s*/gi, "");
  html = html.replace("</head>", `${breadcrumbStyles()}\n${breadcrumbs.jsonLd}\n</head>`);
  // Keep the crawlable navigation outside the React root so it is available
  // before JavaScript runs. AppLayout removes this static copy before client
  // paint and renders the existing route-aware React breadcrumbs in its place.
  html = html.replace('<div id="root">', `${breadcrumbs.html}<div id="root">`);

  const hasVisibleBreadcrumbs = /<nav id="hawkez-haven-prerendered-breadcrumbs" aria-label="Breadcrumb" class="site-breadcrumbs">/.test(html);
  const hasBreadcrumbSchema = /<script id="hawkez-haven-breadcrumb-schema" type="application\/ld\+json">[\s\S]*?"@type":"BreadcrumbList"/.test(html);
  if (!hasVisibleBreadcrumbs || !hasBreadcrumbSchema) {
    throw new Error(`Breadcrumb prerender verification failed for ${file}`);
  }
  await writeFile(file, html, "utf8");
}

console.log(`Added prerendered breadcrumbs and BreadcrumbList JSON-LD to ${paths.length} routes.`);
