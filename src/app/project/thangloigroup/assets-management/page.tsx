import CaseStudyBody from "./_components/Body";
import { CaseStudyPageLayout } from "../../_components/CaseStudyPageLayout";

function AssetsManagementPage() {
  return (
    <CaseStudyPageLayout
      projectId="assets-management"
      Body={CaseStudyBody}
    />
  );
}

export default AssetsManagementPage;
