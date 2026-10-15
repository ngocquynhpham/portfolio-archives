import CaseStudyBody from "./_components/Body";
import { CaseStudyPageLayout } from "../_components/CaseStudyPageLayout";

function PlaygroundPage() {
  return (
    <CaseStudyPageLayout
      projectId="playground"
      Body={CaseStudyBody}
    />
  );
}

export default PlaygroundPage;
