import { useLayoutEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import Navbar from "./Navbar.tsx";
import Footer from "./Footer.tsx";
import SEO from "../SEO.tsx";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb.tsx";

const heroImages: Record<string, string> = {
  about: "/images/hero-electra.png",
  horses: "/images/hero-horses.jpg",
  adoption: "/images/hero-kahu.jpg",
  foster: "/images/hero-joey.png",
  volunteer: "/images/hero-kohan.png",
  support: "/images/hero-haven.jpg",
  contact: "/images/hero-pedro.jpg",
  experiences: "/images/hero-roadride-ritz.png",
  education: "/images/education-hero.jpg",
  hub: "/images/hero-khan.jpg",
};

const pageLabels: Record<string, string> = {
  about: "About",
  horses: "Our Horses",
  adoption: "Adoption",
  foster: "Foster",
  volunteer: "Volunteer",
  support: "Support",
  contact: "Contact",
  experiences: "Experiences",
  education: "Education",
  hub: "Horse Hub",
  sponsorship: "Sponsorship",
};

function PageHeroStyles({ page }: { page: string }) {
  const image = heroImages[page];

  return (
    <style>{`
      ${image ? `
      main.page-${page} > div > section:first-child {
        position: relative;
        min-height: 430px;
        display: flex;
        align-items: center;
        overflow: hidden;
        background-color: #1a1a18;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-image: linear-gradient(90deg,
          rgba(26,26,24,1) 0%,
          rgba(26,26,24,.98) 30%,
          rgba(26,26,24,.88) 43%,
          rgba(26,26,24,.52) 58%,
          rgba(26,26,24,.12) 76%,
          rgba(26,26,24,0) 100%);
      }

      main.page-${page} > div > section:first-child::after {
        content: "";
        position: absolute;
        inset: 0 0 0 auto;
        width: 52%;
        height: 100%;
        z-index: 1;
        background-image: url('${image}');
        background-repeat: no-repeat;
        background-position: right center;
        background-size: contain;
      }

      main.page-${page} > div > section:first-child > div {
        position: relative;
        z-index: 2;
        width: 48%;
        max-width: 760px;
        margin-left: 0;
        margin-right: auto;
      }

      @media (max-width: 767px) {
        main.page-${page} > div > section:first-child {
          min-height: 0;
          align-items: flex-start;
          background-image: linear-gradient(180deg,
            rgba(26,26,24,1) 0%,
            rgba(26,26,24,1) 58%,
            rgba(26,26,24,.88) 72%,
            rgba(26,26,24,.45) 86%,
            rgba(26,26,24,.12) 100%);
        }

        main.page-${page} > div > section:first-child::after {
          inset: auto 0 0 0;
          width: 100%;
          height: 42%;
          background-position: center bottom;
          background-size: contain;
        }

        main.page-${page} > div > section:first-child > div {
          width: 100%;
          max-width: none;
          padding-bottom: 260px;
        }

        main.page-${page} > div > section:first-child h1 {
          font-size: clamp(2.45rem, 8.8vw, 3.5rem);
          line-height: 1.05;
        }

        main.page-${page} > div > section:first-child p {
          font-size: 1rem;
          line-height: 1.65;
        }
      }
      ` : ""}

      /* Home keeps its Rip + Turbo hero exactly as supplied. */
      main.page-home > div > section:first-child {
        background-color: #1a1a18;
      }

      main.page-home > div > section:first-child > img {
        object-fit: contain;
        object-position: right center;
      }

      @media (max-width: 767px) {
        main.page-home > div > section:first-child > img {
          object-fit: contain;
          object-position: right center;
        }
      }

      /* Sponsorship uses the same responsive hero treatment as the inner pages. */
      main.page-sponsorship > div > section:first-child {
        position: relative;
        overflow: hidden;
        background-color: #1a1a18;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-image: linear-gradient(90deg,
          rgba(26,26,24,1) 0%,
          rgba(26,26,24,.96) 30%,
          rgba(26,26,24,.82) 44%,
          rgba(26,26,24,.38) 62%,
          rgba(26,26,24,.08) 82%,
          rgba(26,26,24,0) 100%);
      }

      main.page-sponsorship > div > section:first-child::after {
        content: "";
        position: absolute;
        inset: 0 0 0 auto;
        width: 52%;
        height: 100%;
        z-index: 1;
        background-image: url('/images/hero-diablo.jpg');
        background-repeat: no-repeat;
        background-position: right center;
        background-size: contain;
      }

      main.page-sponsorship > div > section:first-child > img {
        display: none;
      }

      main.page-sponsorship > div > section:first-child > div {
        position: relative;
        z-index: 2;
      }

      @media (max-width: 767px) {
        main.page-sponsorship > div > section:first-child {
          min-height: 0;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          background-image: none;
        }

        main.page-sponsorship > div > section:first-child > div {
          width: 100%;
          max-width: none;
          padding-bottom: 32px;
        }

        main.page-sponsorship > div > section:first-child::after {
          position: relative;
          inset: auto;
          width: 100%;
          height: 420px;
          flex: 0 0 420px;
          z-index: 1;
          background-position: center center;
          background-size: contain;
        }
      }
    `}</style>
  );
}

function Breadcrumbs({ pathname }: { pathname: string }) {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return null;

  const page = segments[0];
  const titleCase = (value: string) =>
    value.replace(/-/g, " ").replace(/\b\w/g, (character) => character.toUpperCase());
  const items = [{ label: pageLabels[page] ?? titleCase(page), href: `/${page}` }];

  if (segments.length > 1) {
    items.push({
      label: titleCase(segments[segments.length - 1]),
      href: pathname,
    });
  }

  const breadcrumbItems = [{ label: "Home", href: "/" }, ...items];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `https://hawkezhaven.org${item.href}`,
    })),
  };

  return (
    <div className="border-b border-border/50 bg-background/95">
      <div className="container mx-auto px-4 py-2 sm:px-6">
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbItems.map((item, index) => (
              <BreadcrumbItem key={item.href}>
                {index > 0 && <BreadcrumbSeparator />}
                {index === breadcrumbItems.length - 1 ? (
                  <BreadcrumbPage className="capitalize">{item.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={item.href} className="capitalize">{item.label}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </div>
    </div>
  );
}

export default function AppLayout() {
  const { pathname } = useLocation();
  const page = pathname.replace(/^\//, "").split("/")[0] || "home";
  const pageClass = `page-${page}`;

  useLayoutEffect(() => {
    // Static route files include a crawlable breadcrumb before the React root.
    // Replace it with the route-aware React version before the first client paint.
    document.getElementById("hawkez-haven-prerendered-breadcrumbs")?.remove();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO />
      <Navbar />
      <Breadcrumbs pathname={pathname} />
      <main className={`flex-1 ${pageClass}`}>
        <PageHeroStyles page={page} />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
