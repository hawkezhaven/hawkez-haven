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

console.log("Verified Contact map prerender; Experiences/Education are left to their real React page layout.");
