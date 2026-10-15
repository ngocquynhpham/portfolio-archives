import type { ComponentType } from "react";
import { projectForPage } from "@/data/mock/projects";
import ProjectDetailShell from "./ProjectDetailShell";

type CaseStudyPageLayoutProps = {
  projectId: string;
  Body: ComponentType;
  After?: ComponentType;
};

/** Shared shell for case-study routes (use inside a named page component for Fast Refresh). */
export function CaseStudyPageLayout({ projectId, Body, After }: CaseStudyPageLayoutProps) {
  return (
    <ProjectDetailShell
      key={projectId}
      project={projectForPage(projectId)}
      childrenAfterContent={After ? <After /> : undefined}
    >
      <Body />
    </ProjectDetailShell>
  );
}
