import { NavLink } from "react-router-dom";
import IconArrowRight from "../../assets/icons/IconArrowRight";
import "./CardAllProject.scss";

const CardAllProject = ({
  title,
  description,
  type,
  index,
  data_id,
  link_to,
}: {
  title: string;
  description: string;
  index: string;
  type: { name: string; id: number };
  data_id: string;
  link_to: string;

  //   type: { name: string; id: 1,2,3 };
}) => {
  return (
    <div role="listitem" className="project-item" data-id={data_id}>
      <NavLink to={link_to} className="all-project-content">
        <div className="project-item-left">
          <div className="text-size-medium text-weight-medium work-title px-4">
            {index}.
          </div>
          <div className="project-details-wrapper">
            <div className="text-size-medium text-weight-medium work-title text-[#0CA16E]">
              {title}
            </div>
            <div className="spacer-small"></div>
            <div className="text-[14px] md:text-[16px] text-dark-grey project-summary-2">
              {description}
            </div>
            <div
              className={`text-[14px] w-fit flex items-center rounded-full  mt-4 px-3 py-1 font-medium leading-6 ${
                type.id === 1
                  ? "bg-blue-300/10"
                  : type.id === 2
                  ? "bg-teal-300/10"
                  : "bg-gray-300/20"
              } ${
                type.id === 1
                  ? "text-blue-500"
                  : type.id === 2
                  ? "text-teal-500"
                  : "text-gray-500"
              }`}
            >
              {type.name}
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
        <IconArrowRight />
        </div>
      </NavLink>
    </div>
  );
};

export default CardAllProject;
