import type { NavSectionId } from "@/hooks/useSectionSpy";

export const NAV_LINKS: { id: NavSectionId; href: string; label: string }[] = [
  { id: "about", href: "#about", label: "About" },
  { id: "experience", href: "#experience", label: "Experience" },
  { id: "work", href: "#work", label: "Case Studies" },
];

export function navLinkClassName(
  isActive: boolean,
  variant: "header" | "mobile",
) {
  if (variant === "header") {
    return [
      "relative inline-flex items-center gap-2 transition-all uppercase",
      isActive
        ? "font-bold line-through decoration-text-black decoration-2 underline-offset-4"
        : "font-medium hover:line-through",
    ].join(" ");
  }
  return [
    "text-5xl font-serif transition-all inline-flex items-center gap-4",
    isActive ? "italic underline decoration-2 underline-offset-8" : "hover:italic",
  ].join(" ");
}
