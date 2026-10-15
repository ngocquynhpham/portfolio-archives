import ProjectShell from '@/app/project/_components/ProjectShell';
import { Flex, Title, Text, List, Divider,Image } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { NavLink } from "react-router-dom";
import Image2 from "./_assets/report.png";
const GoalTask = () => {
  const { width } = useViewportSize();
  return (
    <ProjectShell>
          <Flex className="m-auto" direction={"column"} gap={24}>
          <Title className="project__title" order={width < 573 ? 5 : 4}>
              Goal & Task Management
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
              <Text fs={"italic"}>📅 Duration: 3 months</Text>
              <Text fs={"italic"}>✅ Role: Design & Developer</Text>
              <Text fs={"italic"}>
                👩‍💻 Technologies used: ReactJS, TypeScript, React Syncfusion UI,
                Tailwind, RechartJS.
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
                  A comprehensive meeting-to-execution workflow system that
                  manages organizational goals, tasks delegation, and progress
                  tracking with hierarchical task management.
                </Text>
              </Flex>
            </Flex>
            <Flex direction={"column"} gap={12}>
              <Title
                className="project__description"
                order={width < 573 ? 5 : 4}
              >
                Key features
              </Title>
              <Flex direction={"column"} gap={8} mx={16}>
                <List size="md" className="hasOrder">
                  <List.Item mb={4}>
                    Meeting minutes management with integrated task creation and
                    team assignment.
                  </List.Item>
                  <List.Item mb={4}>
                    Hierarchical task management system.
                  </List.Item>
                  <List.Item mb={4}>Progress and cost tracking.</List.Item>
                  <List.Item mb={4}>
                    Real-time status monitoring with automated deadline alerts
                    through email.
                  </List.Item>
                  <List.Item mb={4}>
                    Role-based task management (Chair, Secretary, Assigner,
                    Assignee, Supporter).
                  </List.Item>
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
                    Streamlined task management workflow through intuitive UI/UX
                    design, support 100+ users.
                  </List.Item>
                  <List.Item mb={4}>
                    Reduced meeting frequency through automated tracking and
                    notifications.
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
                Meeting Management
              </Title>
              <Flex direction={"column"} gap={8} mx={16}>
                <List size="md" className="hasOrder">
                  <List.Item mb={4}>
                    Creating meeting minutes with objectives and task
                    delegation.
                  </List.Item>
                  <List.Item mb={4}>
                    Participant management and role assignment.
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
                Task Management Features
              </Title>
              <Flex direction={"column"} gap={8} mx={16}>
                <List size="md" className="hasOrder">
                  <List.Item mb={4}>
                    Designed an interactive hierarchical task view supporting
                    multi-level task relationships.
                  </List.Item>
                  <List.Item mb={4}>
                    Progress tracking and cost monitoring.
                  </List.Item>
                  <List.Item mb={4}>Sub-task creation feature.</List.Item>
                  <List.Item mb={4}>Task’s to-do list.</List.Item>
                  <List.Item mb={4}>Assign Supporter.</List.Item>
                  <List.Item mb={4}>
                    Interfaces for managing task changes: Pending requests,
                    Extend deadline, Change Assignee , Cancel task.
                  </List.Item>
                  <List.Item mb={4}>Task progression report.</List.Item>
                </List>
              </Flex>
              <Divider />
            </Flex>
            <Image
              className="project__image--hero"
              h={"80%"}
              fit="cover"
              src={Image2}
              alt="Goal and Task - Image"
            />
            <Flex direction={"column"} gap={12}>
              <Title
                className="project__description"
                order={width < 573 ? 5 : 4}
              >
                Status Tracking System
              </Title>
              <Flex direction={"column"} gap={8} mx={16}>
                <List size="md" className="hasOrder">
                  <List.Item mb={4}>
                    Developed status tracking system with visual indicators.
                  </List.Item>
                  <List.Item mb={4}>
                      Custom status workflow: Received → In Progress → Near
                      Deadline → Completed → Finalized.
                    </List.Item>
                    <List.Item mb={4}>
                      Real-time status updates across all user interfaces.
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
                UI based on user roles: Chair, Secretary, Assigner, Assignee,
                Support.
              </Title>
            </Flex>
            <Flex direction={"column"} gap={12}>
              <Title
                className="project__description"
                order={width < 573 ? 5 : 4}
              >
                Dashboard: Indevelopment.
              </Title>
            </Flex>
          </Flex>
    </ProjectShell>
  );
};

export default GoalTask;
