import CaseStudyBody from "./_components/Body";
import { CaseStudyPageLayout } from "../../_components/CaseStudyPageLayout";

function DigitalLibraryPage() {
  return (
    <CaseStudyPageLayout
      projectId="digital-library"
      Body={CaseStudyBody}
    />
  );
}

export default DigitalLibraryPage;
