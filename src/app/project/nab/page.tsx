import CaseStudyBody from "./_components/Body";
import { CaseStudyPageLayout } from "../_components/CaseStudyPageLayout";

function NabPage() {
  return (
    <CaseStudyPageLayout
      projectId="nab"
      Body={CaseStudyBody}
    />
  );
}

export default NabPage;
