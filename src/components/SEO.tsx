import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE = "https://hawkezhaven.org";
const DEFAULT_TITLE = "Hawkez Haven | Equine Rescue & Rehabilitation in New Zealand";
const DEFAULT_DESCRIPTION =
  "Hawkez Haven is a New Zealand horse rescue and rehabilitation organisation. We rescue, rehabilitate and rehome horses, giving every horse a second chance.";

const PAGE_META: Record<string, { title: string; description: string }> = {
  "/": { title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION },
  "/about": {
    title: "About Hawkez Haven | Equine Rescue & Rehabilitation",
    description:
      "Learn about Hawkez Haven, our welfare-first approach, and why Connection Before Correction guides our horse rescue, rehabilitation and rehoming work.",
  },
  "/horses": {
    title: "Our Horses | Hawkez Haven",
    description:
      "Meet the horses of Hawkez Haven and read their stories, personalities and journeys through rescue, rehabilitation and second chances.",
  },
  "/adoption": {
    title: "Horse Adoption | Hawkez Haven",
    description:
      "Explore horse adoption through Hawkez Haven, including our welfare-first matching process and requirements for responsible lifelong homes.",
  },
  "/sponsorship": {
    title: "Sponsor a Horse | Hawkez Haven",
    description:
      "Support a Hawkez Haven horse through sponsorship and help provide feed, veterinary care, farrier care, rehabilitation and ongoing welfare.",
  },
  "/foster": {
    title: "Foster a Horse | Hawkez Haven",
    description:
      "Learn about fostering horses with Hawkez Haven and how a safe, suitable foster home can help a horse on their journey toward a better future.",
  },
  "/volunteer": {
    title: "Volunteer | Hawkez Haven",
    description:
      "Find out how you can volunteer with Hawkez Haven and support horses through rehabilitation, care, education and day-to-day rescue work.",
  },
  "/experiences": {
    title: "Equine Education & Experiences | Hawkez Haven",
    description:
      "Explore Hawkez Haven horsemanship lessons, education and practical equine experiences built around safety, connection and understanding.",
  },
  "/support": {
    title: "Support Hawkez Haven | Help Give Horses a Second Chance",
    description:
      "Support Hawkez Haven's horse rescue and rehabilitation work through donations, sponsorship and other ways to help horses find their second chance.",
  },
  "/contact": {
    title: "Contact Hawkez Haven | Equine Rescue & Rehabilitation",
    description:
      "Contact Hawkez Haven in New Zealand about horse rescue, rehabilitation, adoption, sponsorship, volunteering, lessons and general enquiries.",
  },
};

const HORSE_NAMES: Record<string, string> = {
  rip: "Rip",
  haven: "Haven",
  pedro: "Pedro",
  diablo: "Diablo",
  khan: "Khan",
  kohan: "Kohan",
  joey: "Joey",
  ritz: "Ritz",
  electra: "Electra",
  kahu: "Kahu",
};

function setMeta(name: string, content: string) {
  let element = document.querySelector(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("name", name);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function setProperty(property: string, content: string) {
  let element = document.querySelector(`meta[property="${property}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("property", property);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function setCanonical(url: string) {
  let element = document.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }
  element.setAttribute("href", url);
}

function setStructuredData(id: string, data: Record<string, unknown>) {
  let element = document.getElementById(id) as HTMLScriptElement | null;
  if (!element) {
    element = document.createElement("script");
    element.id = id;
    element.type = "application/ld+json";
    document.head.appendChild(element);
  }
  element.textContent = JSON.stringify(data);
}

export default function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const horseMatch = pathname.match(/^\/horses\/([^/]+)$/);
    const horseSlug = horseMatch?.[1];
    const horseName = horseSlug ? HORSE_NAMES[horseSlug] : undefined;
    const basePath = pathname === "/education" ? "/experiences" : pathname === "/shop" ? "/support" : pathname;
    const isNoIndex =
      pathname === "/hub" ||
      pathname.startsWith("/enquire/") ||
      pathname === "/education" ||
      pathname === "/shop";

    const meta = horseName
      ? {
          title: `${horseName} | Hawkez Haven Horse Rescue`,
          description: `Read ${horseName}'s journey at Hawkez Haven, including their story, personality, rehabilitation and future.`,
          canonical: `/horses/${horseSlug}`,
        }
      : PAGE_META[basePath] || {
          title: "Hawkez Haven | Second Chances for Horses",
          description: DEFAULT_DESCRIPTION,
        };

    const canonical = `${SITE}${meta.canonical || basePath}`;
    document.title = meta.title;
    setMeta("description", meta.description);
    setMeta("robots", isNoIndex ? "noindex,follow" : "index,follow");
    setProperty("og:title", meta.title);
    setProperty("og:description", meta.description);
    setProperty("og:url", canonical);
    setProperty("og:type", horseName ? "profile" : "website");
    setProperty("og:image", `${SITE}/images/hero-horse.jpg`);
    setProperty("og:image:type", "image/jpeg");
    setProperty("og:site_name", "Hawkez Haven");
    setProperty("og:locale", "en_NZ");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", meta.title);
    setMeta("twitter:description", meta.description);
    setMeta("twitter:image", `${SITE}/images/hero-horse.jpg`);
    setCanonical(canonical);

    setStructuredData("hawkez-haven-organization-schema", {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Hawkez Haven",
      url: SITE,
      description: DEFAULT_DESCRIPTION,
      areaServed: "New Zealand",
    });

    setStructuredData("hawkez-haven-website-schema", {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Hawkez Haven",
      url: SITE,
      inLanguage: "en-NZ",
    });

    if (horseName && horseSlug) {
      setStructuredData("hawkez-haven-horse-schema", {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: `${horseName} | Hawkez Haven Horse Rescue`,
        url: canonical,
        description: meta.description,
        isPartOf: { "@type": "WebSite", name: "Hawkez Haven", url: SITE },
      });
    } else {
      document.getElementById("hawkez-haven-horse-schema")?.remove();
    }
  }, [pathname]);

  return null;
}
