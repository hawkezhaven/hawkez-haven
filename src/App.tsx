import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useServiceWorker } from "@/hooks/use-service-worker.ts";
import { DefaultProviders } from "./components/providers/default.tsx";
import AppLayout from "./components/layout/AppLayout.tsx";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import AboutPage from "./pages/about.tsx";
import AdoptionPage from "./pages/adoption.tsx";
import HorsesPage from "./pages/horses/index.tsx";
import HorseDetailPage from "./pages/horses/detail.tsx";
import SponsorshipPage from "./pages/sponsorship.tsx";
import FosterPage from "./pages/foster.tsx";
import VolunteerPage from "./pages/volunteer.tsx";
import ExperiencesPage from "./pages/experiences.tsx";
import SupportPage from "./pages/support.tsx";
import GiftCardPage from "./pages/gift-card.tsx";
import ContactPage from "./pages/contact.tsx";
import HubPage from "./pages/hub.tsx";
import EnquiryPage from "./pages/enquire/EnquiryPage.tsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

export default function App() {
  useServiceWorker();
  return (
    <DefaultProviders>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/horses" element={<HorsesPage />} />
            <Route path="/horses/:id" element={<HorseDetailPage />} />
            <Route path="/adoption" element={<AdoptionPage />} />
            <Route path="/sponsorship" element={<SponsorshipPage />} />
            <Route path="/foster" element={<FosterPage />} />
            <Route path="/volunteer" element={<VolunteerPage />} />
            <Route path="/education" element={<ExperiencesPage />} />
            <Route path="/experiences" element={<ExperiencesPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/gift-card" element={<GiftCardPage />} />
            <Route path="/shop" element={<SupportPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/hub" element={<HubPage />} />
            <Route path="/enquire/general" element={<EnquiryPage type="general" />} />
            <Route path="/enquire/adoption" element={<EnquiryPage type="adoption" />} />
            <Route path="/enquire/sponsorship" element={<EnquiryPage type="sponsorship" />} />
            <Route path="/enquire/volunteer" element={<EnquiryPage type="volunteer" />} />
            <Route path="/enquire/foster" element={<EnquiryPage type="foster" />} />
            <Route path="/enquire/experiences" element={<EnquiryPage type="experiences" />} />
            <Route path="/enquire/lessons" element={<EnquiryPage type="experiences" />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </DefaultProviders>
  );
}
