import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.tsx";
import Footer from "./Footer.tsx";
import SEO from "../SEO.tsx";
import HeroBanner from "./HeroBanner.tsx";

const HERO_PATHS = new Set([
  "/about",
  "/horses",
  "/support",
  "/contact",
  "/adoption",
  "/sponsorship",
  "/foster",
  "/volunteer",
  "/education",
  "/experiences",
  "/hub",
]);

export default function AppLayout() {
  const { pathname } = useLocation();
  const hasPageHero = HERO_PATHS.has(pathname);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO />
      <Navbar />
      <main className="flex-1" data-page-hero={hasPageHero ? "true" : undefined}>
        <HeroBanner />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}