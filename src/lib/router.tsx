import { createElement, lazy, Suspense, type ComponentType } from "react";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "../app/not-found/page";

type PageModule = { default: ComponentType };

/** Only routable segments — excludes `app/not-found` */
const pageModules = import.meta.glob<PageModule>(
  ["../app/home/page.tsx", "../app/project/**/page.tsx"],
  { eager: false },
);

function appSegmentToPath(segment: string): string | null {
  if (segment === "home") return "/";
  return `/${segment}`;
}

const pageFallback = createElement("div", {
  style: { minHeight: "100vh", background: "#fff" },
});

function lazyPage(loader: () => Promise<PageModule>) {
  const Lazy = lazy(loader);
  return createElement(
    Suspense,
    { fallback: pageFallback },
    createElement(Lazy),
  );
}

const appRoutes = Object.entries(pageModules).flatMap(([filePath, loader]) => {
  const segment = filePath
    .replace(/^\.\.\/app\//, "")
    .replace(/\/page\.tsx$/, "");
  const path = appSegmentToPath(segment);
  if (!path) return [];
  return [
    {
      path,
      element: lazyPage(loader),
    },
  ];
});

export const router = createBrowserRouter([
  ...appRoutes,
  { path: "*", element: createElement(NotFound) },
]);
