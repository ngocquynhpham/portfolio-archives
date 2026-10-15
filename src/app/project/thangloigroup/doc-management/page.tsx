import ProjectShell from '@/app/project/_components/ProjectShell';
import { Flex, Title, Text, List, Divider } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { NavLink } from "react-router-dom";

const DocMan = () => {
  const { width } = useViewportSize();
  return (
    <ProjectShell>
          <Flex className="m-auto" direction={"column"} gap={24}>
          <Title className="project__title" order={width < 573 ? 4 : 2}>
              Document Management
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
                📅 Duration: 3 months (04/2023 - 06/2023)
              </Text>
              <Text fs={"italic"}>✅ Role: Design & Developer</Text>
              <Text fs={"italic"}>
                👩‍💻 Technologies used: ReactJS, TypeScript, React Syncfusion UI,
                React-PDF, Rechart, Tailwind.
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
                  Document management system integrated with E-Signature &
                  Workflow platform, featuring scheduled publishing, targeted
                  distribution, and advanced analytics.
                </Text>
              </Flex>
            </Flex>
            <Flex direction={"column"} gap={12}>
              <Title
                className="project__description"
                order={width < 573 ? 5 : 4}
              >
                Project highlight
              </Title>
              <Flex direction={"column"} gap={8} mx={16}>
                <List size="md" className="hasOrder">
                  <List.Item mb={4}>
                    Incoming / Outgoing documents management.
                  </List.Item>
                  <List.Item mb={4}>
                    Integration with E-Signature workflow system
                  </List.Item>
                  <List.Item mb={4}>Scheduled document publishing.</List.Item>
                  <List.Item mb={4}>Document analytics and tracking.</List.Item>
                </List>
              </Flex>
            </Flex>
            <Flex direction={"column"} gap={12}>
              <Title
                className="project__description"
                order={width < 573 ? 5 : 4}
              >
                Achievements
              </Title>
              <Flex direction={"column"} gap={8} mx={16}>
                <List size="md" className="hasOrder">
                  <List.Item mb={4}>
                    Reduced document processing time through optimized frontend
                    workflows and intuitive UI.
                  </List.Item>
                  <List.Item mb={4}>
                    Designed and implemented a custom WYSIWYG email template
                    editor with dynamic variable support.
                  </List.Item>
                  <List.Item mb={4}>
                    Successfully handled distribution and tracking of 1000+
                    documents across multiple companies.
                  </List.Item>
                  <List.Item mb={4}>
                    Improved document tracking accuracy with real-time status
                    updates and analytics.
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
                Document Management Interface
              </Title>
              <Flex direction={"column"} gap={8} mx={16}>
                <List size="md" className="hasOrder">
                  <List.Item mb={4}>
                    Used table component with pagination for large document
                    lists.
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
                Document Form & Validation
              </Title>
              <Flex direction={"column"} gap={8} mx={16}>
                <List size="md" className="hasOrder">
                  <List.Item mb={4}>
                    Immediate / Scheduled publishing feature.
                  </List.Item>
                  <List.Item mb={4}>
                    {` Implemented an advance WYSIWYG email template editor, allowing user to compose email template using dynamic placeholders such as {{document_code}}, {{publisher_name}}, {{document_title}}.`}
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
                Dashboard & Analytics
              </Title>
              <Flex direction={"column"} gap={8} mx={16}>
                <List size="md" className="hasOrder">
                  <List.Item mb={4}>
                    Built responsive dashboard using CSS Grid and Flexbox.
                  </List.Item>
                  <List.Item mb={4}>
                    Designed and developed interactive charts using Recharts.
                  </List.Item>
                  <List.Item mb={4}>
                    Dynamic filtering interface with real-time updates.
                  </List.Item>
                </List>
              </Flex>
            </Flex>
          </Flex>
    </ProjectShell>
  );
};

export default DocMan;
