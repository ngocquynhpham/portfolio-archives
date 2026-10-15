import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/components/layout/RootLayout";
import HomePage from "@/app/home/page";
import { PROJECT_CASE_STUDY_ROUTES, ProjectArchivePage } from "@/lib/routes";
import { LazyPage } from "@/lib/lazy-page";

const NotFound = lazy(() => import("@/app/not-found/page"));

const projectChildren = [
  {
    path: "project",
    element: (
      <LazyPage>
        <ProjectArchivePage />
      </LazyPage>
    ),
  },
  ...PROJECT_CASE_STUDY_ROUTES.map(({ path, Page }) => ({
    path: `project/${path}`,
    element: (
      <LazyPage key={path}>
        <Page />
      </LazyPage>
    ),
  })),
  {
    path: "*",
    element: (
      <LazyPage>
        <NotFound />
      </LazyPage>
    ),
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ index: true, element: <HomePage /> }, ...projectChildren],
  },
]);
