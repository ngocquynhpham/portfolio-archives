import { Plus } from "lucide-react";
import { EXPERIENCE_JOBS } from "../_data/experience";

type ExperienceSectionProps = {
  activeIndex: number | null;
  onToggle: (index: number) => void;
};

export default function ExperienceSection({
  activeIndex,
  onToggle,
}: ExperienceSectionProps) {
  return (
    <section id="experience" className="border-b border-border-gray">
      <div className="grid grid-cols-1 md:grid-cols-4 border-b border-border-gray">
        <div className="col-span-1 border-r border-border-gray p-6 flex items-end">
          <h2 className="text-sm font-mono uppercase">Work History</h2>
        </div>
        <div className="col-span-3 p-6 flex justify-end">
          <span className="text-sm font-mono text-accent-gray">
            4+ Years Experience
          </span>
        </div>
      </div>

      {EXPERIENCE_JOBS.map((job) => (
        <div
          key={job.index}
          className={`accordion-item${job.last ? "" : " border-b border-border-gray"} group${
            activeIndex === job.index ? " active" : ""
          }`}
        >
          <div
            className="grid grid-cols-1 md:grid-cols-4 cursor-pointer hover:bg-white transition-colors"
            onClick={() => onToggle(job.index)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onToggle(job.index);
              }
            }}
            role="button"
            tabIndex={0}
          >
            <div className="col-span-1 p-6 md:p-10 md:border-r border-border-gray flex flex-col justify-between">
              <span className="font-mono text-xs text-accent-gray">
                {job.period}
              </span>
              <h3 className="text-2xl font-serif italic mt-2">
                {job.roleLines[0]}
                <br />
                {job.roleLines[1]}
              </h3>
            </div>
            <div className="col-span-3 p-6 md:p-10 relative">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-bold mb-2">{job.company}</h4>
                  <p className="text-accent-gray text-sm">{job.location}</p>
                </div>
                <span className="accordion-icon w-8 h-8 flex items-center justify-center border border-border-gray rounded-full">
                  <Plus className="w-4 h-4" />
                </span>
              </div>

              <div className="accordion-content">
                <div className="pt-8 space-y-6">
                  <p className="leading-relaxed">{job.summary}</p>

                  {job.bullets && (
                    <div>
                      <h5 className="font-bold text-sm uppercase mb-3">
                        Product Value Delivered
                      </h5>
                      <ul className="list-disc pl-5 space-y-2 text-sm text-accent-gray leading-relaxed">
                        {job.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 pt-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-border-gray px-3 py-1 text-xs rounded-full bg-bg-cream"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
