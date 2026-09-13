import { readFile, writeFile } from "node:fs/promises";

const replacements = new Map([
  ["src/lib/horses.ts", [
    ["      \"Sanctuary Resident\",", "      \"Hawkez Haven Resident\","],
  ]],
  ["index.html", [
    ["Equine Rescue & Rehabilitation Sanctuary in New Zealand", "Equine Rescue & Rehabilitation Organisation in New Zealand"],
    ["New Zealand equine rescue and rehabilitation sanctuary", "New Zealand equine rescue and rehabilitation organisation"],
  ]],
  ["public/site.webmanifest", [
    ["Hawkez Haven horse sanctuary and rescue", "Hawkez Haven horse rescue and rehabilitation"],
  ]],
  ["scripts/generate-seo-pages.mjs", [
    ["as the heart of the sanctuary", "as the heart of Hawkez Haven"],
    ["connection-based horsemanship sanctuary in New Zealand", "connection-based horsemanship and horse welfare organisation in New Zealand"],
  ]],
]);

for (const [file, pairs] of replacements) {
  let content = await readFile(file, "utf8");
  for (const [from, to] of pairs) content = content.replaceAll(from, to);
  await writeFile(file, content, "utf8");
}

console.log("Removed sanctuary wording from Hawkez Haven site content and SEO metadata.");
