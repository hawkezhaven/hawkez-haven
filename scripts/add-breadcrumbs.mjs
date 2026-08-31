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
};

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}

function titleCase(value) {
  return value.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
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
    return `${index ? '<span aria-hidden="true">/</span>' : ""}${content}`;
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
    html: `<nav aria-label="Breadcrumb" class="site-breadcrumbs"><div>${links}</div></nav>`,
    jsonLd: `<script type="application/ld+json">${jsonLd}</script>`,
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

  html = html.replace(/<script type="application\/ld\+json">\s*\{\s*"@context":"https:\/\/schema.org"[\s\S]*?"@type":"BreadcrumbList"[\s\S]*?<\/script>/gi, "");
  html = html.replace(/<nav aria-label="Breadcrumb" class="site-breadcrumbs">[\s\S]*?<\/nav>/gi, "");
  html = html.replace("</head>", `${breadcrumbs.jsonLd}\n</head>`);
  html = html.replace('<div id="root">', `${breadcrumbs.html}<div id="root">`);
  await writeFile(file, html, "utf8");
}

console.log(`Added prerendered breadcrumbs and BreadcrumbList JSON-LD to ${paths.length} routes.`);
