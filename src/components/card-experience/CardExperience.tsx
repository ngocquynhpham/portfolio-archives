import "./CardExperience.scss";
import IconArrowLink2 from "../../assets/icons/IconArrowLink2";

const CardExperience = ({
  time = "Dec 2020 - Present",
  company,
  title,
  description,
  data_id,
  skills,
  link_to = "",
}: {
  time: string;
  company: string;
  title: string;
  description: string;
  data_id: string;
  link_to?: string;
  skills: string[];
}) => {
  return (
    <div
      data-id={data_id}
      className="group relative grid pb-1 transition-all grid-cols-1 lg:grid-cols-8 sm:gap-8 md:gap-4 py-8"
    >
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block " />
      <header
        className="text-[14px] md:text-[16px] z-10 mb-2 font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
        aria-label={time}
      >
        {time}
      </header>
      <div className="z-10 sm:col-span-6">
        <div className="font-medium leading-snug text-slate-200">
          <div>
            <a
              onClick={(e) => {
                if (link_to === "") {
                  e.preventDefault();
                }
              }}
              className="inline-flex items-baseline font-medium leading-tight text-[#0CA16E]  group/link text-xl"
              href={link_to}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${title} at ${company} (opens in a new tab)`}
            >
              <span className=" -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
              <span className="text-[16px] md:text-[20px]">
                {title} at{" "}
                <span className="inline-block">
                  {company}
                  {link_to !== "" && <IconArrowLink2 />}
                </span>
              </span>
            </a>
          </div>
        </div>
        <p
          className="mt-4 ml-0 text-[15px] sm:text-[16px] leading-7 md:leading-9"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
        <ul className="mt-2 flex flex-wrap item-tag" aria-label="Technologies used">
          {skills.map((item, index) => {
            return (
              <li className="li-tag"  key={index}>
                <div className="isTag text-[14px] flex items-center rounded-full font-medium leading-6 text-[#0CA16E]">
                  {item}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CardExperience;
