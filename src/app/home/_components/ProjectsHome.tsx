import { NavLink } from "react-router-dom";
import IconArrowRight from "@/assets/icons/IconArrowRight";
import CardProject from "@/components/card-project/CardProject";
import {
  featuredProjects,
  projectUrl,
} from "@/data/projects.registry";
import "./section.scss";

export default function ProjectsHome() {
  return (
    <div className="projects-collection">
      <ul role="list" className="projects-list">
        {featuredProjects.map((project, index) => (
          <li data-id={index} key={project.detailPath}>
            <CardProject
              data_id={`quynhptn-${index + 1}`}
              key={`quynhptn-${index + 1}`}
              index={(index + 1).toString()}
              title={project.title}
              description={project.description}
              link_to={projectUrl(project.detailPath)}
            />
          </li>
        ))}
        <NavLink
          to="/project"
          className="view-full-btn"
          rel="noreferrer noopener"
          aria-label="View Full Project Archive (opens in a new tab)"
        >
          <div className="text-[18px] md:text-[24px]">
            View Full Project Archive
          </div>
          <IconArrowRight />
        </NavLink>
      </ul>
    </div>
  );
}
