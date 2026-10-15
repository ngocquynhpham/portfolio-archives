import { useCallback, useEffect, useState } from "react";
import { portfolioProjects, type PortfolioProject } from "@/data/projects";
import { NAV_SECTIONS, useSectionSpy } from "@/hooks/useSectionSpy";
import AboutSection from "./_components/AboutSection";
import ExperienceSection from "./_components/ExperienceSection";
import FooterSection from "./_components/FooterSection";
import Header from "./_components/Header";
import HeroSection from "./_components/HeroSection";
import MarqueeSection from "./_components/MarqueeSection";
import MobileMenu from "./_components/MobileMenu";
import SiteModals, { type SiteModalId } from "./_components/SiteModals";
import WorkSection from "./_components/WorkSection";

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [activeModal, setActiveModal] = useState<SiteModalId>(null);
  const [detailProject, setDetailProject] = useState<PortfolioProject | null>(
    null,
  );
  const [clock, setClock] = useState("00:00 AM");
  const activeSection = useSectionSpy(NAV_SECTIONS);

  const closeModal = useCallback(() => setActiveModal(null), []);

  const openModal = useCallback((id: Exclude<SiteModalId, null>) => {
    setActiveModal(id);
  }, []);

  const openProjectDetail = useCallback((id: number) => {
    const p = portfolioProjects[id];
    if (!p) return;
    setDetailProject(p);
    setActiveModal("detail-modal");
  }, []);

  const toggleAccordion = (index: number) => {
    setActiveAccordion((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    document.body.classList.add("portfolio-site", "antialiased", "relative");
    return () => {
      document.body.classList.remove(
        "portfolio-site",
        "antialiased",
        "relative",
      );
    };
  }, []);

  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeModal]);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setClock(
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      );
    };
    updateClock();
    const id = window.setInterval(updateClock, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="portfolio-site min-h-screen bg-bg-cream text-text-black font-sans">
      <Header
        activeSection={activeSection}
        onOpenResume={() => openModal("resume-modal")}
        onToggleMobileMenu={() => setMobileMenuOpen((o) => !o)}
        mobileMenuOpen={mobileMenuOpen}
      />

      <MobileMenu
        open={mobileMenuOpen}
        activeSection={activeSection}
        onClose={() => setMobileMenuOpen(false)}
        onOpenResume={() => openModal("resume-modal")}
      />

      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ExperienceSection
        activeIndex={activeAccordion}
        onToggle={toggleAccordion}
      />
      <WorkSection
        onOpenArchive={() => openModal("archive-modal")}
        onOpenProject={openProjectDetail}
      />
      <FooterSection
        clock={clock}
        onOpenResume={() => openModal("resume-modal")}
      />

      <SiteModals
        activeModal={activeModal}
        detailProject={detailProject}
        onClose={closeModal}
        onOpenProject={openProjectDetail}
      />
    </div>
  );
}
