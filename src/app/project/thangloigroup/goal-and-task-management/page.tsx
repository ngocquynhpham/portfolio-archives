import CaseStudyBody from "./_components/Body";
import { CaseStudyPageLayout } from "../../_components/CaseStudyPageLayout";

function GoalAndTaskManagementPage() {
  return (
    <CaseStudyPageLayout
      projectId="goal-and-task-management"
      Body={CaseStudyBody}
    />
  );
}

export default GoalAndTaskManagementPage;
