import CaseStudyBody from "./_components/Body";
import { CaseStudyPageLayout } from "../../_components/CaseStudyPageLayout";

function CustomerServicePage() {
  return (
    <CaseStudyPageLayout
      projectId="customer-service"
      Body={CaseStudyBody}
    />
  );
}

export default CustomerServicePage;
