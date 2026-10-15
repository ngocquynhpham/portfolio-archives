import { ArrowUpRight } from "lucide-react";
import type { NavSectionId } from "@/hooks/useSectionSpy";
import { NAV_LINKS, navLinkClassName } from "../_data/navigation";
import NavBookmark from "./NavBookmark";

type HeaderProps = {
  activeSection: NavSectionId;
  onOpenResume: () => void;
  onToggleMobileMenu: () => void;
  mobileMenuOpen: boolean;
};

export default function Header({
  activeSection,
  onOpenResume,
  onToggleMobileMenu,
  mobileMenuOpen,
}: HeaderProps) {
  return (
    <header className="fixed top-0 w-full z-40 bg-bg-cream/90 backdrop-blur-sm border-b border-border-gray">
      <div className="grid grid-cols-2 md:grid-cols-4 h-16 md:h-20">
        <div className="col-span-1 border-r border-border-gray flex items-center px-6">
          <a
            href="#"
            className="text-xl font-serif font-bold tracking-tight"
            onClick={(e) => e.preventDefault()}
          >
            Q.PHAM
          </a>
        </div>

        <nav
          className="hidden md:flex col-span-2 border-r border-border-gray items-center justify-center gap-12 text-sm tracking-wide"
          aria-label="Primary"
        >
          {NAV_LINKS.map(({ id, href, label }) => {
            const isActive = activeSection === id;
            return (
              <a
                key={id}
                href={href}
                className={navLinkClassName(isActive, "header")}
                aria-current={isActive ? "true" : undefined}
              >
                <NavBookmark active={isActive} />
                {label}
              </a>
            );
          })}
        </nav>

        <div className="hidden md:flex col-span-1 items-center justify-center">
          <button
            type="button"
            onClick={onOpenResume}
            className="text-sm font-bold uppercase hover:bg-text-black hover:text-white transition-colors w-full h-full flex items-center justify-center gap-2"
          >
            Resume <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <button
          type="button"
          id="menu-btn"
          className="md:hidden col-span-1 flex items-center justify-end px-6"
          onClick={onToggleMobileMenu}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5 cursor-pointer group">
            <span className="block w-6 h-0.5 bg-black transition-transform group-hover:rotate-180" />
            <span className="block w-6 h-0.5 bg-black transition-transform group-hover:-rotate-180" />
          </div>
        </button>
      </div>
    </header>
  );
}
