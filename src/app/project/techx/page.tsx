import CaseStudyBody from "./_components/Body";
import { CaseStudyPageLayout } from "../_components/CaseStudyPageLayout";

function TechxPage() {
  return (
    <CaseStudyPageLayout
      projectId="techx"
      Body={CaseStudyBody}
    />
  );
}

export default TechxPage;
