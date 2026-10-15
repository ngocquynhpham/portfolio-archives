import { Link } from "react-router-dom";
import { experienceSection } from "@/app/home/_data/content";
import Reveal from "@/components/home/Reveal";
import Tag from "@/components/ui/Tag";

type ExperienceProps = {
  revealEnabled: boolean;
};

export default function Experience({ revealEnabled }: ExperienceProps) {
  const { titleLine1, titleLine2, entries } = experienceSection;

  return (
    <section id="experience" className="px-6 md:px-20 pb-14 pt-8 md:pb-24 md:pt-12 bg-white backdrop-blur-sm transition-colors duration-200">
      <Reveal enabled={revealEnabled}>
        <h2 className="text-3xl md:text-6xl font-bold uppercase mb-8 md:mb-16 text-text-primary">
          {titleLine1}
          <br />
          <span className="text-outline">{titleLine2}</span>
        </h2>
      </Reveal>

      <div className="flex flex-col border-t-2 border-text-primary">
        {entries.map((job) => (
          <Reveal
            key={job.company + job.period}
            enabled={revealEnabled}
            className="py-7 md:py-12 border-b border-black/15 px-4 md:px-8"
          >
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-16">
              <div className="w-full lg:w-1/3">
                <h3 className="text-xl md:text-3xl font-bold text-primary">{job.roleTitle}</h3>
                <div className="mt-3">
                  <p className="font-bold text-base md:text-lg text-text-primary">{job.company}</p>
                  {job.companySubtitle && (
                    <p className="text-neutral-700 text-sm font-medium mt-1">{job.companySubtitle}</p>
                  )}
                  {job.website && (
                    <a
                      href={job.website.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm font-medium text-primary underline underline-offset-2 mt-2"
                    >
                      {job.website.label}
                    </a>
                  )}
                  <p className="mt-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Showcase</span>
                    <br />
                    <Link
                      to={job.showcase.path}
                      className="text-sm font-medium text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
                    >
                      {job.showcase.displayUrl}
                    </Link>
                  </p>
                </div>
                <div className="mt-6">
                  <p className="font-bold text-sm uppercase tracking-widest border-l-2 border-primary pl-3 text-text-primary">
                    {job.period}
                  </p>
                  <p className="text-sm text-neutral-700 mt-1 pl-3.5">{job.location}</p>
                </div>
              </div>
              <div className="w-full lg:w-2/3">
                <div className="text-neutral-700 text-sm md:text-base leading-relaxed space-y-3 md:space-y-4">
                  <p>{job.intro}</p>
                  <h4 className="font-bold text-text-primary text-sm uppercase tracking-wider mt-6 mb-2">
                    {job.highlightsHeading}
                  </h4>
                  <ul className="list-disc pl-5 space-y-2.5 marker:text-primary">
                    {job.highlights.map((item) => (
                      <li key={item.title}>
                        <span className="font-semibold text-text-primary">{item.title}</span>
                        {" — "}
                        {item.description}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                  {job.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
