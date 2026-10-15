import ProjectShell from '@/app/project/_components/ProjectShell';
import { Flex, Image, Title, Text, List } from "@mantine/core";
import Image1 from "./_assets/Library.png";
import { useViewportSize } from "@mantine/hooks";
import { NavLink } from "react-router-dom";

const DigitalLibrary = () => {
  const { width } = useViewportSize();

  return (
    <ProjectShell>
          <Flex className="m-auto" direction={"column"} gap={24}>
          <Title className="project__title" order={width < 573 ? 4 : 2}>
              Internal Digital Library
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
              <Text fs={"italic"}>✅ Role: Design & Developer</Text>
              <Text fs={"italic"}>
                👩‍💻 Technologies used: ReactJS, TypeScript, Video.js, PDF.js,
                Tailwind.
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
                  A digital library with streaming video feature, document
                  management, e-book, and cross-device accessibility.
                </Text>
              </Flex>
            </Flex>
            <Image
              className="project__image--hero"
              h={"80%"}
              fit="cover"
              src={Image1}
              alt=" Internal Digital Library - Image"
            />
            <Flex direction={"column"} gap={12}>
              <Title
                className="project__description"
                order={width < 573 ? 5 : 4}
              >
                Key Features
              </Title>
              <Flex direction={"column"} gap={8} mx={16}>
                <List size="md" className="hasOrder">
                  <List.Item mb={4}>
                    Adaptive video streaming across devices.
                  </List.Item>
                  <List.Item mb={4}>
                    Document viewer with PDF support.
                  </List.Item>
                  <List.Item mb={4}>
                    Content management system for admins.
                  </List.Item>
                  <List.Item mb={4}>
                    Cross-platform responsive design.
                  </List.Item>
                  <List.Item mb={4}>Tag-based content organization.</List.Item>
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
                    Built platform supporting 100+ learning resources.
                  </List.Item>
                  <List.Item mb={4}>
                    Implemented efficient video streaming reducing load times
                  </List.Item>
                </List>
              </Flex>
            </Flex>
            {/* <Flex direction={"column"} gap={12}>
              <Title
                className="project__description"
                order={width < 573 ? 5 : 4}
              >
                Project overview
              </Title>
              <Flex direction={"column"} gap={8} mx={16}>
                <List size="md" className="hasOrder">
                  <List.Item mb={4}>
                    Responsive content Viewer ensure cross device compatibility:
                    Video player; PDF viewer.
                  </List.Item>
                  <List.Item mb={4}>
                    Content Discovery:
                    <List.Item mb={4}>Related content suggestions</List.Item>
                    <List.Item mb={4}>
                      Responsive content grid with:
                      <List.Item mb={4}>
                        Lazy loading for optimal performance
                      </List.Item>
                      <List.Item mb={4}>Dynamic layout adaptation</List.Item>
                    </List.Item>
                  </List.Item>
                  <List.Item mb={4}>Management
                  <List.Item mb={4}>Tag management interface.</List.Item>
                  <List.Item mb={4}>User activity tracking.</List.Item>
                  <List.Item mb={4}>Content resources editor.</List.Item>
                  </List.Item>
                </List>
              </Flex>
            </Flex> */}
          </Flex>
    </ProjectShell>
  );
};

export default DigitalLibrary;
