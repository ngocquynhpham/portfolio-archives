import CaseStudyBody from "./_components/Body";
import { CaseStudyPageLayout } from "../../_components/CaseStudyPageLayout";

function HrmPage() {
  return (
    <CaseStudyPageLayout
      projectId="hrm"
      Body={CaseStudyBody}
    />
  );
}

export default HrmPage;
