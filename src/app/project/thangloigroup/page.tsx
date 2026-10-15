import ProjectShell from '@/app/project/_components/ProjectShell';
import { Flex, Title, Text, Image } from "@mantine/core";
import { NavLink } from "react-router-dom";
import ImageInternal from "@/assets/internal_pro.png";
import { useViewportSize } from "@mantine/hooks";
import CardInternalProject from "@/components/card-internal-project/CardInternalProject";
import { thangLoiGroupProjects } from "@/data/projects.registry";

export default function ThangLoiGroupHubPage() {
  const { width } = useViewportSize();
  return (
    <ProjectShell trailingSpace={false}>
          <Flex className="m-auto" direction={"column"} gap={24}>
            <Title className="project__title" order={width < 573 ? 4 : 2}>
              Internal Business Management Toolkit
            </Title>
            <Flex direction={"column"} gap={12} ml={12}>
              <Text fs={"italic"}>
                🏢 Company:{" "}
                <NavLink
                  to={"https://thangloigroup.vn/"}
                  className={"text-blue-500"}
                  target="_blank"
                >
                  Thang Loi Group
                </NavLink>
              </Text>
              <Text fs={"italic"}>🏗️ Base: Real Estate Industry</Text>
              <Text fs={"italic"}>📅 Dec 2020 - Dec 2024</Text>
              <Text fs={"italic"}>👩‍💻 Title: Frontend Developer</Text>
            </Flex>
            <Flex direction={"column"} gap={12}>
              <Title
                className="project__description"
                order={width < 573 ? 5 : 4}
              >
                Description
              </Title>

              <Flex direction={"column"} gap={8} mx={16}>
                <Text className="inline" lh={"175%"} size="md">
                  Designed and developed end-to-end web applications, combining
                  modern React with responsive UI and intuitive UX on the
                  frontend, while integrating with Django REST APIs to create
                  efficient, user-friendly applications that transformed business
                  operations.
                </Text>
                <Text className="inline" lh={"175%"} size="md" mt="md">
                  Built using modern React for an efficient, user-friendly
                  frontend combined with an intuitive UX to transform and
                  optimize core business operations, enabling the organization
                  to manage its resources, processes, and data more effectively.
                </Text>
              </Flex>
            </Flex>
            <Image
              className="project__image--hero"
              h={"80%"}
              fit="cover"
              src={ImageInternal}
              alt=" Internal Business Management Toolkit - Image"
            />
            <div className="projects-collection">
              <ul role="list" className="projects-list-2">
                {thangLoiGroupProjects.map((project, index) => (
                  <li key={project.link_to}>
                    <CardInternalProject
                      data_id={`quynhptn-${index + 1}`}
                      key={`quynhptn-${index + 1}`}
                      index={(index + 1).toString()}
                      title={project.title}
                      link_to={project.link_to}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </Flex>
    </ProjectShell>
  );
}
