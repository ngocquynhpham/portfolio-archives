import type { NavSectionId } from "@/hooks/useSectionSpy";
import { NAV_LINKS, navLinkClassName } from "../_data/navigation";

type MobileMenuProps = {
  open: boolean;
  activeSection: NavSectionId;
  onClose: () => void;
  onOpenResume: () => void;
};

export default function MobileMenu({
  open,
  activeSection,
  onClose,
  onOpenResume,
}: MobileMenuProps) {
  return (
    <div
      id="mobile-menu"
      className={`fixed inset-0 z-30 bg-bg-cream flex flex-col items-center justify-center gap-8${
        open ? " open" : ""
      }`}
    >
      {NAV_LINKS.map(({ id, href, label }) => {
        const isActive = activeSection === id;
        return (
          <a
            key={id}
            href={href}
            className={navLinkClassName(isActive, "mobile")}
            aria-current={isActive ? "true" : undefined}
            onClick={onClose}
          >
            {isActive && (
              <span className="w-2 h-5 bg-text-black shrink-0" aria-hidden />
            )}
            {label}
          </a>
        );
      })}
      <button
        type="button"
        onClick={() => {
          onClose();
          onOpenResume();
        }}
        className="text-lg font-mono mt-8 border-b border-black"
      >
        View Resume
      </button>
    </div>
  );
}
