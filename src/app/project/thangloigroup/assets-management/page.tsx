import ProjectShell from '@/app/project/_components/ProjectShell';
import { Flex, Image, Title, Text, List } from "@mantine/core";
import Image1 from "./_assets/QLTS.png";
import { useViewportSize } from "@mantine/hooks";
import { NavLink } from "react-router-dom";

const AssetsManagement = () => {
  const { width } = useViewportSize();
  return (
    <ProjectShell>
          <Flex className="m-auto" direction={"column"} gap={24}>
          <Title className="project__title" order={width < 573 ? 4 : 2}>
              Assets Management
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
                📅 Duration: 3 months (04/2021 - 6/2021)
              </Text>
              <Text fs={"italic"}>✅ Role: Design & Developer</Text>
              <Text fs={"italic"}>
                👩‍💻 Technologies used: HTML, CSS, JS, Django template, QR
                Scanner.
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
                <Text className="inline" lh={"175%"} size="md">
                  Asset management solution featuring QR-based tracking,
                  detailed asset lifecycle management, and mobile-responsive
                  operations for enterprise-wide asset control and monitoring.
                </Text>
              </Flex>
            </Flex>
            <Image
              className="project__image--hero"
              h={"80%"}
              fit="cover"
              src={Image1}
              alt="AssetsManagement - Image"
            />
            
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
                    Built a mobile interface that reduced asset tracking time by
                    75%.
                  </List.Item>
                  <List.Item mb={4}>
                    QR scanning system improving asset operation accuracy and
                    conveniently.
                  </List.Item>
                  <List.Item mb={4}>
                  Created responsive data grids handling 3,000+ assets with advanced filtering.
                  </List.Item>
                </List>
              </Flex>
            </Flex>
            <Flex direction={"column"} gap={12}>
              <Title
                className="project__description"
                order={width < 573 ? 5 : 4}
              >
                Project Highlight
              </Title>
              <Flex direction={"column"} gap={8} mx={16}>
                <List size="md" className="hasOrder">
                  <List.Item mb={4}>
                    QR code-based asset tracking system.
                  </List.Item>
                  <List.Item mb={4}>
                  Mobile interface for QR scanning and asset operations.
                  </List.Item>
                  <List.Item mb={4}>
                    Advanced asset lifecycle workflows with comprehensive asset
                    operations (allocation, transfer, recovery).
                  </List.Item>
                  <List.Item mb={4}>Real-time asset status tracking.</List.Item>
                  <List.Item mb={4}>
                    Email notification system for asset operations.
                  </List.Item>
                </List>
              </Flex>
            </Flex>
          </Flex>
    </ProjectShell>
  );
};

export default AssetsManagement;
