import ProjectShell from '@/app/project/_components/ProjectShell';
import { Flex, Title, Text, List, Divider, Image } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { NavLink } from "react-router-dom";
import ImageBPMN from "./_assets/image.png";
import ImageDashboard from "./_assets/eSign.png";
import ImageSignature from "./_assets/signature_area.png";

const ESign = () => {
  const { width } = useViewportSize();
  return (
    <ProjectShell>
          <Flex className="m-auto" direction={"column"} gap={24}>
            <Title className="project__title" order={width < 573 ? 4 : 2}>
              E-Signature & Workflow Automation Platform
            </Title>
            <div className="w-fit flex items-center rounded-full bg-blue-300/10 px-3 py-1 font-medium leading-6 text-blue-500">
              Internal Application
            </div>
            <Flex direction={"column"} gap={12} ml={12}>
              <Text fs={"italic"}>
                🏢 Company:{" "}
                <NavLink
                  to={"/project/thangloigroup"}
                  className={"text-blue-500"}
                >
                  Thang Loi Group
                </NavLink>
              </Text>
              <Text fs={"italic"}>📅 Duration: 7 months</Text>
              <Text fs={"italic"}>✅ Role: Design & Developer</Text>
              <Text fs={"italic"}>
                👩‍💻 Technologies used: ReactJS, TypeScript, React Syncfusion UI,
                React-PDF, Drag and drop
              </Text>
            </Flex>
            <Flex direction={"column"} gap={12}>
              <Title
                className="project__description"
                order={width < 768 ? 6 : 4}
              >
                Project Description
              </Title>
              <Flex direction={"column"} gap={8} mx={16}>
                <Text className="inline" lh={"175%"} size="md">
                  A business process automation platform that turns static BPMN
                  workflows into dynamic approval flows with digital signatures.
                  It manages complex approval chains while ensuring document
                  security and process integrity.
                </Text>
              </Flex>
            </Flex>
            <Flex direction={"column"} gap={12}>
              <Title
                className="project__description"
                order={width < 768 ? 6 : 4}
              >
                Key Features
              </Title>
              <Flex direction={"column"} gap={8} mx={16}>
                <List size="md" className="hasOrder">
                  <List.Item mb={4}>
                    Dynamic workflow creation using{" "}
                    <a
                      href="https://camunda.com/bpmn/"
                      rel="noreferrer noopener"
                    >
                      <strong className="text-orange-500">Camunda BPMN </strong>
                    </a>{" "}
                    with multi-company support.
                  </List.Item>
                  <List.Item mb={4}>
                    Interactive PDF signature placement with drag-and-drop
                    interface.
                  </List.Item>
                  <List.Item mb={4}>
                    Real-time document tracking and notification system.
                  </List.Item>
                </List>
              </Flex>
              <Image
                className="project__image--hero"
                h={"80%"}
                fit="cover"
                src={ImageBPMN}
                alt=" E-Signature & Workflow Automation Platform - Image"
              />
            </Flex>
            <Flex direction={"column"} gap={12}>
              <Title
                className="project__description"
                order={width < 768 ? 6 : 4}
              >
                Achievements
              </Title>
              <Flex direction={"column"} gap={8} mx={16}>
                <Text td={"underline"}> Process automation:</Text>
                <List size="md" className="hasOrder">
                  <List.Item mb={4}>
                    Reduced document approval time by 50% compared to
                    paper-based system.
                  </List.Item>
                  <List.Item mb={4}>
                    Successfully handled 500+ document workflows across multiple
                    companies.
                  </List.Item>
                  <List.Item mb={4}>
                    Decreased document errors by 80% through automated document
                    workflow.
                  </List.Item>
                </List>
                <List  size="md" className="hasOrder">
                  <Text td={"underline"}> User experience:</Text>
                  <List.Item mt={8} mb={4}>
                    Intuitive process creation and management.
                  </List.Item>
                  <List.Item mb={4}>
                    Dynamic form render based on BPMN defined condition and user
                    inputs.
                  </List.Item>
                  <List.Item mb={4}>
                    Easy to use signature placement interface.
                  </List.Item>
                </List>
              </Flex>
            </Flex>
            <Divider />
            <Flex direction={"column"} gap={12}>
              <Title
                className="project__description"
                order={width < 768 ? 6 : 4}
              >
                Mobile-First Approval Interface
              </Title>
              <Flex direction={"column"} gap={8} mx={16}>
                <List size="md" className="hasOrder">
                  <List.Item mb={4}>
                    Developed dedicated mobile interface for approvers, provides
                    quick access to review and approval functions.
                  </List.Item>
                  <List.Item mb={4}>
                    Approval workflow optimized for touch interfaces.
                  </List.Item>
                  <List.Item mb={4}>
                    Timeline visualization of document approval history.
                  </List.Item>
                </List>
              </Flex>
            </Flex>
            <Flex direction={"column"} gap={12}>
              <Title
                className="project__description"
                order={width < 768 ? 6 : 4}
              >
                Document Dashboard
              </Title>
              <Flex direction={"column"} gap={8} mx={16}>
                <List size="md" className="hasOrder">
                  <List.Item mb={4}>
                    Mobile-first user experience for approvers, offers
                    efficiently document tracking on mobile.
                  </List.Item>
                  <List.Item mb={4}>
                    Designed and developed an intuitive document management
                    system.
                  </List.Item>
                  <List.Item mb={4}>
                    Role-specific views: showing relevant documents based on
                    user role, provide clear separation between owned and
                    assigned documents.
                  </List.Item>
                </List>
              </Flex>
              <Image
                className="project__image--hero"
                h={"80%"}
                fit="cover"
                src={ImageDashboard}
                alt=" E-Signature & Workflow Automation Platform - Image"
              />
            </Flex>
            <Flex direction={"column"} gap={12}>
              <Title
                className="project__description"
                order={width < 768 ? 6 : 4}
              >
                Document Form
              </Title>
              <Flex direction={"column"} gap={8} mx={16}>
                <List size="md" className="hasOrder">
                  <List.Item mb={4}>
                    Auto generated input fields based on BPMN variables.
                  </List.Item>
                  <List.Item mb={4}>
                    Conditional input field display logic.
                  </List.Item>
                  <List.Item mb={4}>
                    Dynamic validation based on process requirement.
                  </List.Item>
                  <List.Item mb={4}>
                    Get approvers automatically based on BPMN process variables,
                    user can preview and manual adjustment (if needed).
                  </List.Item>
                </List>
              </Flex>
            </Flex>
            <Flex direction={"column"} gap={12}>
              <Title
                className="project__description"
                order={width < 768 ? 6 : 4}
              >
                Signature placement system
              </Title>
              <Flex direction={"column"} gap={8} mx={16}>
                <List size="md" className="hasOrder">
                  <List.Item mb={4}>Multi-page PDF visualization.</List.Item>
                  <List.Item mb={4}>
                    Drag-and-drop signature positioning.
                  </List.Item>
                  <List.Item mb={4}>Page-specific signature tracking</List.Item>
                </List>
              </Flex>
            </Flex>
            <Image
              className="project__image--hero"
              h={"80%"}
              fit="cover"
              src={ImageSignature}
              alt=" E-Signature & Workflow Automation Platform - Image"
            />
          </Flex>
    </ProjectShell>
  );
};

export default ESign;
