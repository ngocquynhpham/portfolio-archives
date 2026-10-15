import ProjectShell from '@/app/project/_components/ProjectShell';
import { Flex, Image, Title, Text, List, Divider } from "@mantine/core";
import Image1 from "./_assets/CallCenter1.png";
import Image2 from "./_assets/CallCenter_Report.png";
import ImageBaseCRM from "./_assets/BaseCRM.png";
import { useViewportSize } from "@mantine/hooks";
import { NavLink } from "react-router-dom";

const CRMCallCenter = () => {
  const { width } = useViewportSize();
  return (
    <ProjectShell>
          <Flex className="m-auto" direction={"column"} gap={24}>
          <Title className="project__title" order={width < 573 ? 4 : 2}>
              Call Center & CRM Integration Platform
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
              <Text fs={"italic"}>
                📅 Duration: 6 months (06/2021 - 12/2021)
              </Text>
              <Text fs={"italic"}>✅ Role: Design & Developer</Text>
              <Text fs={"italic"}>
                ✅ Base: Manage customer relationship post-sales in real estate
                field.
              </Text>
              <Text fs={"italic"}>
                👩‍💻 Technologies used: HTML, CSS, Javascript, Django template,
                Web socket, Call center API.
              </Text>
              <Text fs={"italic"}>
                🗒️ Working remotely due to Covid-19 pandemic 😷
              </Text>
            </Flex>
            <Flex direction={"column"} gap={12}>
              <Title
                className="project__description"
                order={width < 573 ? 5 : 4}
              >
                Project Description
              </Title>
              <Flex direction={"column"} gap={8} mx={16}>
                <Text className="inline" lh={"175%"} size="md" >
                  A call center management system integrated with post-sales
                  CRM, featuring real-time call handling, customer data
                  management, and advanced workflow automation.
                </Text>
              </Flex>
            </Flex>
            <Flex direction={"column"} gap={12}>
              <Title
                className="project__description"
                order={width < 573 ? 5 : 4}
              >
                Achievements:
              </Title>
              <Flex direction={"column"} gap={8} mx={16}>
                <List size="md" className="hasOrder">
                  <List.Item mb={4}>
                    Developed a real-time call management interface handling
                    100+ daily customer interactions.
                  </List.Item>
                  <List.Item mb={4}>
                    Built a field-level role-based access control system
                    ensuring precise control over user permissions.
                  </List.Item>
                  <List.Item mb={4}>
                    Streamlined post-sale customers management workflow.
                  </List.Item>
                </List>
              </Flex>
              <Divider />
            </Flex>
            <Flex direction={"column"} gap={12}>
              <Title
                className="project__description"
                order={width < 573 ? 5 : 4}
              >
                Call Management & Communication interface:
              </Title>
              <Flex direction={"column"} gap={8} mx={16}>
                <List size="md" className="hasOrder">
                  <List.Item mb={4}>
                    Implemented WebSocket integration for instant call
                    notifications.
                  </List.Item>
                  <List.Item mb={4}>
                    Context-aware popup system showing relevant customer
                    information and call history.
                  </List.Item>
                  <List.Item mb={4}>
                    Created audio recording playback system.
                  </List.Item>
                  <List.Item mb={4}>
                    Agent presence management system with status tracking.
                  </List.Item>
                  <List.Item mb={4}>
                    A note-taking with auto-save and appointment scheduler that
                    are included in call popup.
                  </List.Item>
                </List>
              </Flex>
            </Flex>
            <Image
              className="project__image--hero"
              h={"80%"}
              fit="cover"
              src={Image1}
              alt="Call Center & CRM Integration Platform - Image"
            />
            <Flex direction={"column"} gap={12}>
              <Title
                className="project__description"
                order={width < 573 ? 5 : 4}
              >
                Administrative Features
              </Title>
              <Flex direction={"column"} gap={8} mx={16}>
                <List size="md" className="hasOrder">
                  <List.Item mb={4}>
                    Real-time agent status monitoring.
                  </List.Item>
                  <List.Item mb={4}>Role-based access control.</List.Item>
                  <List.Item mb={4}>
                    Field-level permission management.
                  </List.Item>
                </List>
              </Flex>
            </Flex>
            <Image
              className="project__image--hero"
              h={"80%"}
              fit="cover"
              src={Image2}
              alt="Call Center & CRM Integration Platform - Image"
            />
            <Flex direction={"column"} gap={12}>
              <Title
                className="project__description"
                order={width < 573 ? 5 : 4}
              >
                Customer Management
              </Title>
              <Text className="inline" lh={"175%"} size="md" >
                {" "}
                Built responsive layouts for complex customer data:
              </Text>
              <Flex direction={"column"} gap={8} mx={16}>
                <List size="md" className="hasOrder">
                  <List.Item mb={4}>
                    Comprehensive customer profile management.
                  </List.Item>
                  <List.Item mb={4}>
                    Comprehensive customer profile management.
                  </List.Item>
                  <List.Item mb={4}>Transfer agreement tracking.</List.Item>
                  <List.Item mb={4}>Survey results management.</List.Item>
                  <List.Item mb={4}>Extended customer information.</List.Item>
                  <List.Item mb={4}>Customer care history.</List.Item>
                  <List.Item mb={4}>Complaint management.</List.Item>
                  <List.Item mb={4}>
                    Advanced customer filtering system.
                  </List.Item>
                </List>
              </Flex>
            </Flex>
            <Image
              className="project__image--hero"
              h={"80%"}
              fit="cover"
              src={ImageBaseCRM}
              alt="Call Center & CRM Integration Platform - Image"
            />
          </Flex>
          <Flex direction={"column"} gap={12}>
            <Title className="project__description" order={width < 573 ? 5 : 4}>
              SMS campaign management system
            </Title>
            <Flex direction={"column"} gap={8} mx={16}>
              <List size="md" className="hasOrder">
                <List.Item mb={4}>Template builder with preview.</List.Item>
                <List.Item mb={4}>Campaign scheduling interface.</List.Item>
              </List>
            </Flex>
          </Flex>
    </ProjectShell>
  );
};

export default CRMCallCenter;
