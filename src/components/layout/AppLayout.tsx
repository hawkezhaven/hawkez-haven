import { useLocation, Outlet } from "react-router-dom";
import Navbar from "./Navbar.tsx";
import Footer from "./Footer.tsx";
import SEO from "../SEO.tsx";

const heroImages: Record<string, string> = {
  about: "/images/electra.jpg",
  horses: "/images/pasture.jpg",
  adoption: "/images/kahu.jpg",
  foster: "/images/joey-story.jpg",
  volunteer: "/images/kohan.jpg",
  support: "/images/haven.jpg",
  contact: "/images/rip.jpg",
  experiences: "/images/ritz.jpg",
  education: "/images/ritz.jpg",
  hub: "/images/khan.jpg",
};

function PageHeroStyles({ page }: { page: string }) {
  const image = heroImages[page];
  if (!image || page === "sponsorship") return null;

  return (
    <style>{`
      main.page-${page} > div > section:first-child {
        position: relative;
        min-height: 430px;
        display: flex;
        align-items: center;
        overflow: hidden;
        background-color: #1a1a18;
        background-repeat: no-repeat;
        background-position: center, right center;
        background-size: 100% 100%, contain;
        background-image:
          linear-gradient(90deg,
            rgba(26,26,24,1) 0%,
            rgba(26,26,24,.98) 32%,
            rgba(26,26,24,.82) 46%,
            rgba(26,26,24,.38) 64%,
            rgba(26,26,24,.08) 82%,
            rgba(26,26,24,0) 100%),
          url('${image}');
      }

      main.page-${page} > div > section:first-child > div {
        position: relative;
        z-index: 2;
        width: 52%;
        max-width: 760px;
        margin-left: 0;
        margin-right: auto;
      }

      @media (max-width: 767px) {
        main.page-${page} > div > section:first-child {
          min-height: 680px;
          background-position: center, right center;
          background-size: 100% 100%, contain;
          background-image:
            linear-gradient(90deg,
              rgba(26,26,24,1) 0%,
              rgba(26,26,24,.97) 34%,
              rgba(26,26,24,.72) 48%,
              rgba(26,26,24,.24) 67%,
              rgba(26,26,24,0) 100%),
            url('${image}');
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
