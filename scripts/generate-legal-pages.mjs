import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const site = "https://hawkezhaven.org";
const distDir = resolve("dist");
const template = await readFile(resolve(distDir, "index.html"), "utf8");

const pages = {
  privacy: {
    title: "Privacy Statement | Hawkez Haven NZ",
    description: "Learn how Hawkez Haven collects, uses, stores and protects personal information in connection with our website, enquiries, bookings and support.",
    body: `<main><article><h1>Privacy Statement</h1><p>Last updated: September 2026</p><p>Hawkez Haven – Second Chances respects your privacy. This statement explains what personal information we collect, why we collect it, how we use it, and how you can contact us about your information.</p><h2>What information we collect</h2><p>When you contact us, enquire about a horse, book an education experience, volunteer, foster, adopt, sponsor, or otherwise communicate with us, we may collect your name, email address, phone number, location and other details you choose to provide.</p><p>We may also receive transaction information when you use a payment provider or purchase a gift card or service. Full payment card details are handled by the relevant payment provider.</p><h2>Why we use your information</h2><ul><li>To respond to enquiries and communicate with you.</li><li>To manage adoption, foster, volunteer, sponsorship and education enquiries.</li><li>To arrange bookings, payments and gift cards where applicable.</li><li>To provide services and keep appropriate records.</li><li>To protect our website, horses, visitors and systems from misuse.</li><li>To meet legal, accounting or other legitimate obligations.</li></ul><h2>Service providers</h2><p>We use service providers for website hosting, enquiry/backend services, email delivery, mapping and payment services. These providers may process information on our behalf. We do not sell your personal information.</p><h2>Storage, security and retention</h2><p>We take reasonable steps to protect personal information from loss, misuse, unauthorised access, disclosure or alteration. Information is retained only as long as reasonably needed for the purpose collected, ongoing relationships, legitimate records or legal obligations.</p><h2>Your privacy rights</h2><p>Under New Zealand privacy law, you can ask for access to personal information we hold about you and ask us to correct information that is inaccurate or incomplete.</p><h2>Contact us</h2><p>For privacy questions or an access/correction request, email <a href="mailto:hawkezhaven@gmail.com">hawkezhaven@gmail.com</a> or call 020 4053 6441. Hawkez Haven is based at 117 North Street, Ashhurst, Manawatū 4810, New Zealand.</p><p><a href="/terms">Read our Terms of Use</a> · <a href="/contact">Contact Hawkez Haven</a></p></article></main>`
  },
  terms: {
    title: "Terms of Use | Hawkez Haven NZ",
    description: "Read the terms that apply to use of the Hawkez Haven website, enquiries, bookings, experiences, gift cards and donations.",
    body: `<main><article><h1>Terms of Use</h1><p>Last updated: September 2026</p><p>These terms apply to your use of the Hawkez Haven website and to enquiries, bookings and purchases made through or in connection with it. Please use the website lawfully and respectfully.</p><h2>Website information</h2><p>We aim to keep information about horses, services, prices, availability and rescue work accurate and current. Horse availability, suitability, prices and programme details can change, and website information does not guarantee that a particular horse, service or date will be available.</p><h2>Enquiries and bookings</h2><p>Submitting an enquiry is not a confirmed booking or an offer of a horse. A booking is confirmed only when Hawkez Haven confirms the arrangement with you and any required payment has been received.</p><h2>Horse welfare and safety</h2><p>Hawkez Haven is a working horse property. Visitors must follow reasonable safety instructions, staff directions and horse-handling requirements. Activities may be changed, postponed or cancelled where horse welfare, weather, property conditions or safety require it. No horse is guaranteed to participate in a particular experience.</p><h2>Payments, gift cards and donations</h2><p>Payment methods and applicable conditions are shown at the time of booking or purchase. Third-party payment providers have their own terms. Gift card conditions will be stated with the relevant gift card. Donations are voluntary contributions supporting Hawkez Haven and its horses.</p><h2>Cancellations and changes</h2><p>If you need to change or cancel a booking, contact us as soon as possible. We will work with you on a reasonable alternative where possible. Hawkez Haven may also need to change or cancel a session where horse welfare or safety makes the planned activity unsuitable.</p><h2>Intellectual property</h2><p>Unless otherwise stated, Hawkez Haven branding, photographs, written content and other original website material belong to Hawkez Haven or are used with permission. Do not copy or commercially reuse this material without permission.</p><h2>External services and links</h2><p>The website may link to third-party payment, mapping or social media services. Those services operate under their own terms and privacy policies.</p><h2>Contact</h2><p>Questions about these terms can be sent to <a href="mailto:hawkezhaven@gmail.com">hawkezhaven@gmail.com</a> or 020 4053 6441. Hawkez Haven is based at 117 North Street, Ashhurst, Manawatū 4810, New Zealand.</p><p><a href="/privacy">Read our Privacy Statement</a> · <a href="/contact">Contact Hawkez Haven</a></p></article></main>`
  }
};

function escapeHtml(value) { return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;"); }
function upsert(html, pattern, tag) {
  const headEnd = html.search(/<\/head>/i);
  if (headEnd < 0) throw new Error("Cannot prerender legal pages: </head> is missing");
  return `${html.slice(0, headEnd).replace(pattern, "")}${tag}\n${html.slice(headEnd)}`;
}

for (const [slug, page] of Object.entries(pages)) {
  let html = template;
  html = upsert(html, /<title>[\s\S]*?<\/title>/gi, `<title>${escapeHtml(page.title)}</title>`);
  html = upsert(html, /<meta\s+name=["']description["'][^>]*>/gi, `<meta name="description" content="${escapeHtml(page.description)}" />`);
  html = upsert(html, /<link\s+rel=["']canonical["'][^>]*>/gi, `<link rel="canonical" href="${site}/${slug}" />`);
  html = html.replace('<div id="root"></div>', `<div id="root">${page.body}</div>`);
  const output = resolve(distDir, slug, "index.html");
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, html, "utf8");
}

console.log("Generated prerendered Privacy Statement and Terms of Use pages.");
