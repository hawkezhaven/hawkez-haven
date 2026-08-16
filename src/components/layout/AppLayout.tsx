import { useLocation, Outlet } from "react-router-dom";
import Navbar from "./Navbar.tsx";
import Footer from "./Footer.tsx";
import SEO from "../SEO.tsx";

export default function AppLayout() {
  const { pathname } = useLocation();
  const pageClass = `page-${pathname.replace(/^\//, "").replace(/\//g, "-") || "home"}`;

  return (
    <div className="min-h-screen flex flex-col">
      <SEO />
      <Navbar />
      <main className={`flex-1 ${pageClass}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
