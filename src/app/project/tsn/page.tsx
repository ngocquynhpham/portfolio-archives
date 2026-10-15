import CaseStudyBody from "./_components/Body";
import { CaseStudyPageLayout } from "../_components/CaseStudyPageLayout";

function TsnPage() {
  return (
    <CaseStudyPageLayout
      projectId="tsn"
      Body={CaseStudyBody}
    />
  );
}

export default TsnPage;
