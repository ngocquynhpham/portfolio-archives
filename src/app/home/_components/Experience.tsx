import IconArrowRight from "@/assets/icons/IconArrowRight";
import CardExperience from "@/components/card-experience/CardExperience";
import { experienceEntries } from "../_data/experience";
import "./section.scss";

export default function Experience() {
  return (
    <div className="projects-collection">
      <ul role="list" className="projects-list">
        {experienceEntries.map((experience, index) => (
          <li className="mb-6" key={experience.title}>
            <CardExperience
              data_id={`quynhptn-${index + 1}`}
              key={`quynhptn-${index + 1}`}
              title={experience.title}
              description={experience.description}
              link_to={experience.link_to}
              company={experience.company || ""}
              skills={experience?.skills || []}
              time={experience.time || ""}
            />
          </li>
        ))}

        <a
          href="#"
          className="view-full-btn"
          aria-label="View Full Resume"
          onClick={(e) => e.preventDefault()}
        >
          <div className="text-[18px] md:text-[24px]">View Full Resume</div>
          <IconArrowRight />
        </a>
      </ul>
    </div>
  );
}
