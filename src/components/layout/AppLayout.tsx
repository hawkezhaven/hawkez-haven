import { useLocation, Outlet } from "react-router-dom";
import Navbar from "./Navbar.tsx";
import Footer from "./Footer.tsx";
import SEO from "../SEO.tsx";

const heroImages: Record<string, string> = {
  about: "/images/electra.jpg",
  horses: "/images/pasture-haven.jpg",
  adoption: "/images/kahu.jpg",
  foster: "/images/joey-story.jpg",
  volunteer: "/images/saphira-khan.jpg",
  support: "/images/haven.jpg",
  contact: "/images/rip.jpg",
  experiences: "/images/ritz.jpg",
  education: "/images/ritz.jpg",
  hub: "/images/kohan.jpg",
};

function PageHeroStyles({ page }: { page: string }) {
  const image = heroImages[page];
  if (!image || page === "sponsorship") return null;

  return (
    <style>{`
      @media (min-width: 768px) {
        main.page-${page} > div > section:first-child {
          position: relative;
          min-height: 430px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background-color: #1a1a18;
          background-repeat: no-repeat;
          background-position: center, right center;
          background-size: 100% 100%, auto 100%;
          background-image: linear-gradient(90deg, #1a1a18 0%, #1a1a18 40%, rgba(26,26,24,.94) 54%, rgba(26,26,24,.25) 76%, rgba(26,26,24,0) 100%), url('${image}');
        }

        main.page-${page} > div > section:first-child > div {
          position: relative;
          z-index: 2;
          width: 52%;
          max-width: 760px;
          margin-left: 0;
          margin-right: auto;
        }
      }

      @media (max-width: 767px) {
        main.page-${page} > div > section:first-child {
          position: relative;
          min-height: 680px;
          display: flex;
          align-items: center;
          overflow: hidden;
          isolation: isolate;
          background: #1a1a18 !important;
        }

        main.page-${page} > div > section:first-child::after {
          content: "";
          position: absolute;
          z-index: -1;
          top: 0;
          right: 0;
          bottom: 0;
          width: 42%;
          background-image: linear-gradient(90deg, rgba(26,26,24,.25) 0%, rgba(26,26,24,0) 100%), url('${image}');
          background-repeat: no-repeat;
          background-position: center, center;
          background-size: 100% 100%, cover;
          opacity: .82;
        }

        main.page-${page} > div > section:first-child > div {
          position: relative;
          z-index: 1;
          width: 64%;
          max-width: none;
          margin-left: 0;
          margin-right: auto;
          padding-right: 0;
        }

        main.page-${page} > div > section:first-child h1 {
          font-size: clamp(2.65rem, 9vw, 3.5rem);
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
