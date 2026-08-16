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
          background-image: linear-gradient(90deg, #1a1a18 0%, #1a1a18 44%, rgba(26,26,24,.92) 58%, rgba(26,26,24,.22) 78%, rgba(26,26,24,0) 100%), url('${image}');
        }
      }
      @media (max-width: 767px) {
        main.page-${page} > div > section:first-child {
          background-color: #1a1a18;
          background-repeat: no-repeat;
          background-position: center, right bottom;
          background-size: 100% 100%, auto 58%;
          background-image: linear-gradient(180deg, rgba(26,26,24,1) 0%, rgba(26,26,24,.94) 55%, rgba(26,26,24,.42) 100%), url('${image}');
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
