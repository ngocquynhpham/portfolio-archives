import { NavLink } from "react-router-dom";
import "./CardInternalProject.scss";

const CardInternalProject = ({
  title,
  index,
  data_id,
  link_to,
}: {
  title: string;
  index: string;
  data_id: string;
  link_to: string;
}) => {
  return (
    <div role="listitem" className="project-item-2" data-id={data_id}>
      <NavLink to={link_to} className="project-content text-[#0CA16E] w-fit">
        <div className="project-item-left">
          <div className="text-size-medium text-weight-medium work-title px-4" >
            {index}.
          </div>
          <div className="project-details-wrapper">
            <div className="text-size-medium text-weight-medium work-title">
              {title}
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default CardInternalProject;
