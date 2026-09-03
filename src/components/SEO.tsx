import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE = "https://hawkezhaven.org";
const DEFAULT_TITLE = "Hawkez Haven | Equine Rescue & Rehabilitation in New Zealand";
const DEFAULT_DESCRIPTION =
  "Hawkez Haven is a New Zealand horse rescue and rehabilitation organisation. We rescue, rehabilitate and rehome horses, giving every horse a second chance.";
const AI_KEYWORDS =
  "horse rescue New Zealand, horse rescue organisation NZ, equine rescue New Zealand, horse rehabilitation NZ, rescued horse adoption NZ, adopt a rescued horse in NZ, responsible horse rehoming, equine rehabilitation, horsemanship, horse riding lessons, horse care education, groundwork, Ashhurst, Manawatu";

type Meta = { title: string; description: string; canonical?: string };

const PAGE_META: Record<string, Meta> = {
  "/": { title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION },
  "/about": { title: "About Hawkez Haven | Horse Rescue & Rehabilitation NZ", description: "Learn about Hawkez Haven, our welfare-first approach to horse rescue, rehabilitation, responsible rehoming and giving horses a genuine second chance." },
  "/horses": { title: "Our Horses | Hawkez Haven Horse Rescue NZ", description: "Meet the horses of Hawkez Haven and follow their individual journeys through rescue, rehabilitation, recovery and responsible rehoming." },
  "/adoption": { title: "Horse Adoption | Hawkez Haven New Zealand", description: "Learn how horse adoption works at Hawkez Haven, including our welfare-first matching process, approved homes and lifelong support." },
  "/sponsorship": { title: "Sponsor a Rescue Horse | Hawkez Haven NZ", description: "Support a Hawkez Haven rescue horse through sponsorship and help provide feed, veterinary care, rehabilitation and a second chance." },
  "/foster": { title: "Foster a Rescue Horse | Hawkez Haven New Zealand", description: "Find out how fostering can help a Hawkez Haven rescue horse recover, rebuild confidence and prepare for their next chapter." },
  "/volunteer": { title: "Volunteer | Hawkez Haven Horse Rescue NZ", description: "Volunteer with Hawkez Haven and help with horse care, rehabilitation, education and the day-to-day work behind a welfare-focused rescue." },
  "/education": { title: "Education & Horsemanship | Hawkez Haven NZ", description: "Explore horse education, horsemanship and practical experiences at Hawkez Haven, with welfare and understanding at the heart of every lesson." },
  "/support": { title: "Support Hawkez Haven | Help Give Horses a Second Chance", description: "Support Hawkez Haven through donations and other ways to help provide rescue horses with care, rehabilitation and a safe future." },
  "/contact": { title: "Contact Hawkez Haven | Horse Rescue New Zealand", description: "Contact Hawkez Haven about horse rescue, adoption, sponsorship, volunteering, fostering, lessons and other enquiries." },
  "/gift-card": { title: "Hawkez Haven Gift Cards | Give a Second Chance", description: "Give a Hawkez Haven gift card and share meaningful horse experiences while supporting welfare-first rescue and rehabilitation." },
  "/privacy": { title: "Privacy Statement | Hawkez Haven NZ", description: "Learn how Hawkez Haven collects, uses, stores and protects personal information in connection with our website, enquiries, bookings and support." },
  "/terms": { title: "Terms of Use | Hawkez Haven NZ", description: "Read the terms that apply to use of the Hawkez Haven website, enquiries, bookings, experiences, gift cards and donations." },
};

const HORSE_NAMES: Record<string, string> = { rip: "Rip", haven: "Haven", pedro: "Pedro", diablo: "Diablo", khan: "Khan", kohan: "Kohan", joey: "Joey", ritz: "Ritz", electra: "Electra", kahu: "Kahu" };

function setMeta(name: string, content: string) {
  let element = document.querySelector(`meta[name="${name}"]`);
  if (!element) { element = document.createElement("meta"); element.setAttribute("name", name); document.head.appendChild(element); }
  element.setAttribute("content", content);
}

function setProperty(property: string, content: string) {
  let element = document.querySelector(`meta[property="${property}"]`);
  if (!element) { element = document.createElement("meta"); element.setAttribute("property", property); document.head.appendChild(element); }
  element.setAttribute("content", content);
}

function setCanonical(url: string) {
  let element = document.querySelector('link[rel="canonical"]');
  if (!element) { element = document.createElement("link"); element.setAttribute("rel", "canonical"); document.head.appendChild(element); }
  element.setAttribute("href", url);
}

function setStructuredData(id: string, data: Record<string, unknown>) {
  let element = document.getElementById(id) as HTMLScriptElement | null;
  if (!element) { element = document.createElement("script"); element.id = id; element.type = "application/ld+json"; document.head.appendChild(element); }
  element.textContent = JSON.stringify(data);
}

const EDUCATION_FAQS = [
  ["Do I need horse experience?", "Not always. Horse Care Discovery and the Family Horse Experience are suitable for beginners. Other sessions have their own experience requirements."],
  ["Are the experiences suitable for children?", "Children are welcome in suitable sessions. Tell us the ages of everyone attending so we can choose an appropriate horse and activity."],
  ["Do you offer riding lessons?", "Yes. Riding lessons are available for beginner to intermediate riders and are built around safe handling, balance, communication and horse suitability."],
  ["What does an experience cost?", "Current introductory prices are listed on the Education & Horsemanship page and are confirmed at booking."],
  ["How many people can attend?", "Group sizes are kept small. The maximum number is listed for each experience."],
  ["Where are sessions held?", "All experiences take place at Hawkez Haven in Ashhurst, Manawatū, New Zealand, by appointment only."],
  ["What should I wear?", "Closed-toe shoes are required and long trousers are recommended. We will tell you about any additional safety equipment needed."],
  ["How do I book?", "Use the enquiry form on the page to tell us which experience you want, how many people are attending and your preferred dates."],
] as const;

export default function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const horseMatch = pathname.match(/^\/horses\/([^/]+)$/);
    const horseSlug = horseMatch?.[1];
    const horseName = horseSlug ? HORSE_NAMES[horseSlug] : undefined;
    const basePath = pathname === "/shop" ? "/support" : pathname;
    const isNoIndex = pathname === "/hub" || pathname.startsWith("/enquire/") || pathname === "/experiences" || pathname === "/shop";
    const meta: Meta = horseName
      ? { title: `${horseName} | Hawkez Haven Horse Rescue New Zealand`, description: `Meet ${horseName}, follow their rescue, rehabilitation and second-chance journey at Hawkez Haven Horse Rescue New Zealand.`, canonical: `/horses/${horseSlug}` }
      : PAGE_META[basePath] || { title: "Hawkez Haven | Second Chances for Horses", description: DEFAULT_DESCRIPTION };

    const canonical = `${SITE}${meta.canonical || basePath}`;
    document.title = meta.title;
    setMeta("description", meta.description);
    setMeta("robots", isNoIndex ? "noindex,follow" : "index,follow");
    setMeta("keywords", AI_KEYWORDS);
    setProperty("og:title", meta.title);
    setProperty("og:description", meta.description);
    setProperty("og:url", canonical);
    setProperty("og:type", horseName ? "profile" : "website");
    setProperty("og:image", `${SITE}/images/hero-horse.jpg`);
    setProperty("og:image:type", "image/jpeg");
    setProperty("og:image:alt", `${meta.title} — Hawkez Haven`);
    setProperty("og:site_name", "Hawkez Haven");
    setProperty("og:locale", "en_NZ");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", meta.title);
    setMeta("twitter:description", meta.description);
    setMeta("twitter:image", `${SITE}/images/hero-horse.jpg`);
    setMeta("twitter:image:alt", `${meta.title} — Hawkez Haven`);
    setCanonical(canonical);

    setStructuredData("hawkez-haven-organisation-schema", {
      "@context": "https://schema.org", "@type": "AnimalShelter", name: "Hawkez Haven", url: SITE, logo: `${SITE}/icon/icon-192.png`, description: DEFAULT_DESCRIPTION, areaServed: "New Zealand", slogan: "Where Second Chances Find Their Stride", knowsAbout: ["horse rescue", "equine rescue", "horse rehabilitation", "equine rehabilitation", "rescued horse adoption", "responsible horse rehoming", "horse welfare", "horsemanship education", "horse riding lessons", "groundwork", "horse care education"],
    });
    setStructuredData("hawkez-haven-website-schema", { "@context": "https://schema.org", "@type": "WebSite", name: "Hawkez Haven", url: SITE, inLanguage: "en-NZ", description: DEFAULT_DESCRIPTION, keywords: AI_KEYWORDS });
    setStructuredData("hawkez-haven-page-schema", { "@context": "https://schema.org", "@type": "WebPage", name: meta.title, url: canonical, description: meta.description, inLanguage: "en-NZ", isPartOf: { "@type": "WebSite", name: "Hawkez Haven", url: SITE }, about: { "@type": "AnimalShelter", name: "Hawkez Haven", url: SITE }, keywords: AI_KEYWORDS });

    if (horseName && horseSlug) {
      setStructuredData("hawkez-haven-horse-schema", { "@context": "https://schema.org", "@type": "WebPage", name: `${horseName} | Hawkez Haven Horse Rescue New Zealand`, url: canonical, description: meta.description, about: { "@type": "Animal", name: horseName, description: meta.description }, isPartOf: { "@type": "WebSite", name: "Hawkez Haven", url: SITE } });
    } else {
      document.getElementById("hawkez-haven-horse-schema")?.remove();
    }

    if (pathname === "/education") {
      setStructuredData("hawkez-haven-education-faq-schema", { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: EDUCATION_FAQS.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) });
    } else {
      document.getElementById("hawkez-haven-education-faq-schema")?.remove();
    }
  }, [pathname]);

  return null;
}
