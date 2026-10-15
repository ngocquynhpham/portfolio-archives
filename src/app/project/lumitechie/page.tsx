import ProjectShell from '@/app/project/_components/ProjectShell';
import { Flex,  Title, Text, List } from "@mantine/core";
import { NavLink } from "react-router-dom";
import { useViewportSize } from "@mantine/hooks";

const Lumi = () => {
  const { width } = useViewportSize();
  return (
    <ProjectShell>
          <Flex direction={"column"} gap={24}>
          <Title className="project__title" order={width < 573 ? 4 : 2}>
              Lumitechie Website Redesign
            </Title>
            <Flex gap={12}>
              <div className="w-fit flex items-center rounded-full bg-gray-300/20 px-3 py-1 font-medium leading-6 text-gray-500">
                Freelance
              </div>
            </Flex>
            <Flex direction={"column"} gap={12} ml={12}>
              <Text fs={"italic"}>
                🌐{" "}
                <NavLink
                  to={"https://lumitechie.com/"}
                  className={"text-blue-500"}
                >
                  https://lumitechie.com/
                </NavLink>
              </Text>
              <Text fs={"italic"}>📅 Year: 2025</Text>
              <Text fs={"italic"}>✅ Role: UI Design; Front-end Developer</Text>
              <Text fs={"italic"}>
                👩‍💻 Technologies used: ReactJS, TanStack, Tailwind CSS
              </Text>
              <Text fs={"italic"}>
                🌱 Note: This was a redesign project of the company’s landing
                page to improve branding, performance, and SEO.
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
                {" "}
                <Text lh={"175%"} size="md">
                  Lumitechie is a Vietnamese technology solutions provider. I
                  worked on redesigning their landing page to modernize the
                  branding and improve both user experience and technical
                  performance.
                </Text>
                <Flex direction={"column"} gap={12}>
                 <Text>The new design focused on:</Text>
                  <Flex direction={"column"} gap={8} mx={16}>
                    <List size="md" className="hasOrder">
                      <List.Item mb={4}>
                        Responsive, mobile-first layout with Tailwind CSS for consistent UI across devices.
                      </List.Item>
                      <List.Item mb={4}>
                        Applied basic SEO setup and semantic HTML to improve search visibility.
                      </List.Item>
                      <List.Item mb={4}>
                        Performance improvements by reducing JS size, optimizing rendering, and applying modern React practices.
                      </List.Item>
                      <List.Item mb={4}>
                        Smooth user experience with interactive components powered by TanStack and React.
                      </List.Item>
                    </List>
                  </Flex>
                </Flex>
                <Text>
                  This project delivered a cleaner, faster, and more engaging web presence for Lumitechie, aligning with their business goals and enhancing their online credibility.
                </Text>
              </Flex>
            </Flex>
          </Flex>
    </ProjectShell>
  );
};

export default Lumi;
