import CaseStudyBody from "./_components/Body";
import { CaseStudyPageLayout } from "../_components/CaseStudyPageLayout";
import PlatformsSection from "./_components/PlatformsSection";

function ThangLoiGroupPage() {
  return (
    <CaseStudyPageLayout
      projectId="thangloigroup"
      Body={CaseStudyBody}
      After={PlatformsSection}
    />
  );
}

export default ThangLoiGroupPage;
