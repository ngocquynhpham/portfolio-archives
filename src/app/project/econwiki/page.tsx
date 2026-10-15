import CaseStudyBody from "./_components/Body";
import { CaseStudyPageLayout } from "../_components/CaseStudyPageLayout";

function EconwikiPage() {
  return (
    <CaseStudyPageLayout
      projectId="econwiki"
      Body={CaseStudyBody}
    />
  );
}

export default EconwikiPage;
