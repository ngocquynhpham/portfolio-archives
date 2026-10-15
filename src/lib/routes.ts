import { lazy, type ComponentType, type LazyExoticComponent } from "react";
import { getCaseStudyRouteSlugs } from "@/data/mock/projects";

export type ProjectRouteEntry = {
  path: string;
  Page: LazyExoticComponent<ComponentType>;
};

type PageLoader = () => Promise<{ default: ComponentType }>;

const pageModules = import.meta.glob<{ default: ComponentType }>("@/app/project/**/page.tsx");

function normalizeKey(key: string): string {
  return key.replace(/\\/g, "/");
}

function findPageLoader(slug: string): PageLoader {
  const suffix = `/app/project/${slug}/page.tsx`;
  const key = Object.keys(pageModules).find((k) => normalizeKey(k).endsWith(suffix));
  if (!key) {
    throw new Error(
      `[routes] Missing app/project/${slug}/page.tsx for a project detailPath in data/mock/projects.ts`,
    );
  }
  return pageModules[key];
}

/** Case-study routes under `/project/*` (excluding the archive index). Built from the project registry + page files. */
export const PROJECT_CASE_STUDY_ROUTES: ProjectRouteEntry[] = getCaseStudyRouteSlugs().map(
  (slug) => ({
    path: slug,
    Page: lazy(findPageLoader(slug)),
  }),
);

export const ProjectArchivePage = lazy(() => import("@/app/project/page"));
