import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const file = resolve("dist/adoption/index.html");
let html = await readFile(file, "utf8");

const title = "Horse Adoption NZ | Rescue Horse Adoption | Hawkez Haven";
const description = "Adopt a rescue horse in New Zealand through Hawkez Haven. Our welfare-first process matches horses with suitable homes and provides ongoing support.";

html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);
html = html.replace(/<meta\s+name=["']description["'][^>]*>/i, `<meta name="description" content="${description}" />`);

await writeFile(file, html, "utf8");
console.log(`Updated Adoption SEO metadata in ${file}`);
