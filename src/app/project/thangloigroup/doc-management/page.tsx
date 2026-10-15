import CaseStudyBody from "./_components/Body";
import { CaseStudyPageLayout } from "../../_components/CaseStudyPageLayout";

function DocManagementPage() {
  return (
    <CaseStudyPageLayout
      projectId="doc-management"
      Body={CaseStudyBody}
    />
  );
}

export default DocManagementPage;
