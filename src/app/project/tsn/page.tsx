import ProjectShell from '@/app/project/_components/ProjectShell';
import {
  Flex,
  Image,
  Title,
  Text,
  Blockquote,
  List,
} from "@mantine/core";
import ImageTIA from "./_assets/TIA.png";
import { NavLink } from "react-router-dom";
import { useViewportSize } from "@mantine/hooks";

const TanSonNhat = () => {
  const { width } = useViewportSize();
  return (
    <ProjectShell>
          <Flex className="m-auto" direction={"column"} gap={20}>
          <Title className="project__title" order={width < 573 ? 4 : 2}>
              Tan Son Nhat International Airport Customer Rating System
            </Title>
            <div className="w-fit flex items-center rounded-full bg-gray-300/20 px-3 py-1 font-medium leading-6 text-gray-500">
              Outsource Project
            </div>
            <Flex direction={"column"} gap={12} ml={12}>
              <Text fs={"italic"}>
                🌐{" "}
                <NavLink
                  to={"https://tia.wincore.asia/customer-review"}
                  target="_blank"
                  className={"text-blue-500"}
                >
                  https://tia.wincore.asia/customer-review
                </NavLink>
              </Text>
              <Text fs={"italic"}>📅 Duration: 2 months (2022)</Text>
              <Text fs={"italic"}>✅ Role: Front-end Developer</Text>
              <Text fs={"italic"}>
                👩‍💻 Technologies used: ReactJS, TypeScript, React Syncfusion UI.
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
                <Text lh={"175%"} >
                Gathering customer feedback collection via QR code scanning throughout the airport. Integrating with the airport's API, the app provides real-time flight info, indoor navigation, and automated notifications to improve traveler satisfaction.
                </Text>
                <Blockquote fs={"italic"} p={16} color="blue" mb={16} mt={16}>
                The project has been rolled out at Tan Son Nhat International Airport.
                </Blockquote>
              </Flex>
            </Flex>
            <Flex direction={"column"} gap={12}>
              <Title
                className="project__description"
                order={width < 573 ? 5 : 4}
              >
                Customer-Facing Features
              </Title>
              <Flex direction={"column"} gap={8} mx={16}>
                <List size="md" className="hasOrder">
                  <List.Item mb={4}>
                    Feedback system with multi-media support (text, photos,
                    voice recording).
                  </List.Item>
                  <List.Item mb={4}>
                    Location-aware QR scanning system for service feedback
                    collection.
                  </List.Item>
                  <List.Item mb={4}>
                    Real-time flight information display.
                  </List.Item>
                  <List.Item mb={4}>
                    Interactive indoor navigation with integration to flight
                    information systems.
                  </List.Item>
                </List>
              </Flex>
            </Flex>
            <Flex direction={"column"} gap={12}>
              <Title
                className="project__description"
                order={width < 573 ? 5 : 4}
              >
                Admin Interface
              </Title>
              <Flex direction={"column"} gap={8} mx={16}>
                <List size="md" className="hasOrder">
                  <List.Item mb={4}>
                    Role-based access control system for secure.
                  </List.Item>
                  <List.Item mb={4}>
                    Role-based access control system for secure.
                  </List.Item>
                  <List.Item mb={4}>
                    Automated email notification workflow with customizable
                    templates.
                  </List.Item>
                  <List.Item mb={4}>
                    Interactive analytics dashboard for temporal data
                    visualization.
                  </List.Item>
                </List>
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
                    Successfully integrated with airport API infrastructure.
                  </List.Item>
                  <List.Item mb={4}>
                    Implemented responsive design supporting hundred of users
                    daily.
                  </List.Item>
                  <List.Item mb={4}>
                    Reduced customer service response time through automated
                    notification system.
                  </List.Item>
                </List>
              </Flex>
            </Flex>
            {/* <Flex direction={"column"} gap={12}>
              {" "}
              <Title
                className="project__description"
                order={width < 573 ? 5 : 4}
              >
                Project Role(s):
              </Title>
              <List ml={12} size="md">
                <List.Item mb={4}>UI Design</List.Item>
                <List.Item mb={4}>Front-end Develop</List.Item>
              </List>
            </Flex> */}

            <NavLink
              target="_blank"
              to={"https://tia.wincore.asia/customer-review"}
            >
              <Image
                className="project__image--hero"
                h={"80%"}
                fit="cover"
                src={ImageTIA}
                alt="Online Running Tournament 🪴"
              />
            </NavLink>
            <Flex direction={"column"} gap={8} mx={4}>
              <Text lh={"175%"} ml={16} size="md" fs="italic">
                Have a smooth and pleasant flight ✈️
              </Text>
            </Flex>
          </Flex>
    </ProjectShell>
  );
};

export default TanSonNhat;
