import CaseStudyBody from "./_components/Body";
import { CaseStudyPageLayout } from "../_components/CaseStudyPageLayout";

function ThermosPage() {
  return (
    <CaseStudyPageLayout
      projectId="thermos"
      Body={CaseStudyBody}
    />
  );
}

export default ThermosPage;
