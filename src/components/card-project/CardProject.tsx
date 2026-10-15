import { NavLink } from "react-router-dom";
import IconArrowRight from "../../assets/icons/IconArrowRight";
import "./CardProject.scss";

const CardProject = ({
  title,
  description,
  index,
  data_id,
  link_to,
}: {
  title: string;
  description: string;
  index: string;
  data_id: string;
  link_to: string;
}) => {
  return (
    <div role="listitem" className="project-item" data-id={data_id}>
      <NavLink to={link_to} className="project-content">
        <div className="project-item-left">
          <div className="text-[16px] sm:text-[18px] md:text-[20px] text-weight-medium work-title-haha px-2 md:px-4" >
            {index}.
          </div>
          <div className="project-details-wrapper">
            <div className="text-[16px] sm:text-[18px] md:text-[20px] text-weight-medium work-title text-[#0CA16E]">
              {title}
            </div>
            <div className="spacer-small"></div>
            <div className="text-dark-grey project-summary text-[14px] sm:text-[16px] leading-5 sm:leading-6">{description}</div>
          </div>
        </div>
        <div className="hidden lg:block">
        <IconArrowRight />
        </div>
      </NavLink>
    </div>
  );
};

export default CardProject;
