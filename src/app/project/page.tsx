import ProjectShell from '@/app/project/_components/ProjectShell';
import { Flex, Title } from "@mantine/core";
import CardAllProject from "@/components/card-all-project/CardAllProject";
import { projectsRegistry, projectUrl } from "@/data/projects.registry";

export default function ProjectArchivePage() {
  return (
    <ProjectShell backTo="/" trailingSpace={false}>
          <Flex py={32}>
            <Title className="project__title" order={3}>
              My Project Archive
            </Title>
          </Flex>
          <div className="projects-collection">
            <ul role="list" className="projects-list">
              {projectsRegistry.map((project, index) => (
                <li key={project.detailPath}>
                  <CardAllProject
                    data_id={`quynhptn-${index + 1}`}
                    key={`quynhptn-${index + 1}`}
                    index={(index + 1).toString()}
                    title={project.title}
                    description={project.description}
                    link_to={projectUrl(project.detailPath)}
                    type={
                      project.type ?? { name: "Project", id: 0 }
                    }
                  />
                </li>
              ))}
            </ul>
          </div>
    </ProjectShell>
  );
}
