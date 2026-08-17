import { useLocation, Outlet } from "react-router-dom";
import Navbar from "./Navbar.tsx";
import Footer from "./Footer.tsx";
import SEO from "../SEO.tsx";

const heroImages: Record<string, string> = {
  about: "/images/hero-electra.png",
  horses: "/images/hero-horses.jpg",
  adoption: "/images/hero-kahu.jpg",
  foster: "/images/hero-joey.png",
  volunteer: "/images/hero-kohan.png",
  support: "/images/hero-haven.jpg",
  contact: "/images/hero-pedro.jpg",
  experiences: "/images/hero-ritzz.png",
  education: "/images/hero-ritzz.png",
  hub: "/images/hero-khan.jpg",
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
          min-height: 680px;
          background-image: linear-gradient(90deg,
            rgba(26,26,24,1) 0%,
            rgba(26,26,24,.98) 30%,
            rgba(26,26,24,.82) 46%,
            rgba(26,26,24,.38) 66%,
            rgba(26,26,24,.08) 84%,
            rgba(26,26,24,0) 100%);
        }

        main.page-${page} > div > section:first-child::after {
          width: 58%;
          background-position: right bottom;
          background-size: contain;
        }

        main.page-${page} > div > section:first-child > div {
          width: 62%;
          max-width: none;
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

      /* Home keeps its Rip + Turbo hero exactly as supplied, while matching
         the same dark reading-space treatment used by the inner heroes. */
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

      /* Sponsorship keeps Diablo, but uses the same banner structure and
         readable dark-to-photo flow as every other hero. */
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
        main.page-sponsorship > div > section:first-child::after {
          width: 58%;
          background-position: right bottom;
          background-size: contain;
        }
      }
    `}</style>
  );
}

export default function AppLayout() {
  const { pathname } = useLocation();
  const page = pathname.replace(/^\//, "").split("/")[0] || "home";
  const pageClass = `page-${page}`;

  return (
    <div className="min-h-screen flex flex-col">
      <SEO />
      <Navbar />
      <main className={`flex-1 ${pageClass}`}>
        <PageHeroStyles page={page} />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
