import { useEffect, useState } from "react";

export const NAV_SECTIONS = ["about", "experience", "work"] as const;
export type NavSectionId = (typeof NAV_SECTIONS)[number];

const HEADER_OFFSET_PX = 88;
/** Section tops at or above this line (below header) can become active */
const ACTIVATION_LINE_PX = HEADER_OFFSET_PX + 160;

function resolveActiveSection(
  sectionIds: readonly NavSectionId[],
): NavSectionId {
  let current: NavSectionId = sectionIds[0];
  let bestTop = -Infinity;

  for (const id of sectionIds) {
    const el = document.getElementById(id);
    if (!el) continue;
    const { top } = el.getBoundingClientRect();
    if (top <= ACTIVATION_LINE_PX && top > bestTop) {
      bestTop = top;
      current = id;
    }
  }

  if (bestTop === -Infinity) {
    const lastId = sectionIds[sectionIds.length - 1];
    const lastEl = document.getElementById(lastId);
    if (lastEl && lastEl.getBoundingClientRect().top < HEADER_OFFSET_PX) {
      return lastId;
    }
  }

  return current;
}

function sectionIdFromHash(
  sectionIds: readonly NavSectionId[],
): NavSectionId | null {
  const hash = window.location.hash.replace("#", "");
  if (!hash) return null;
  return sectionIds.includes(hash as NavSectionId)
    ? (hash as NavSectionId)
    : null;
}

export function useSectionSpy(sectionIds: readonly NavSectionId[]) {
  const [activeSection, setActiveSection] = useState<NavSectionId>(
    sectionIds[0],
  );

  useEffect(() => {
    const update = () => {
      setActiveSection(resolveActiveSection(sectionIds));
    };

    const onHashChange = () => {
      const fromHash = sectionIdFromHash(sectionIds);
      if (fromHash) {
        setActiveSection(fromHash);
      }
      window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [sectionIds]);

  return activeSection;
}
