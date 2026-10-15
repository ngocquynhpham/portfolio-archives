import { useId } from "react";
import { Link } from "react-router-dom";
import { getFeaturedProjects, type ProjectDefinition } from "@/data/mock/projects";
import { isExternalUrl } from "@/lib/is-external-url";
import Reveal from "@/components/home/Reveal";

function NewspaperTornTop() {
  const uid = useId().replace(/:/g, "");
  return (
    <svg
      className="w-full h-[15px] shrink-0 block text-[rgb(255,253,250)]"
      aria-hidden
      preserveAspectRatio="none"
      viewBox="0 0 200 9"
    >
      <defs>
        <pattern id={`torn-${uid}`} width="10" height="9" patternUnits="userSpaceOnUse">
          <path
            d="M0 9V3.5L5 0L10 3.5V9Z"
            fill="currentColor"
            stroke="#e2e8f0"
            strokeWidth="0.35"
            vectorEffect="non-scaling-stroke"
          />
        </pattern>
      </defs>
      <rect width="200" height="9" fill={`url(#torn-${uid})`} />
    </svg>
  );
}

function DashedRule({ className = "" }: { className?: string }) {
  return <div className={`border-t border-dashed border-neutral-300/80 ${className}`} aria-hidden />;
}

function ProjectCardNoImage({
  p,
  revealEnabled,
  indexLabel,
}: {
  p: ProjectDefinition;
  revealEnabled: boolean;
  indexLabel: string;
}) {
  const briefLine = `${p.tag.toUpperCase()} · ${indexLabel}`;
  const internalPath = p.detailPath!;
  const hasExternalUrl = isExternalUrl(p.link);

  return (
    <Reveal enabled={revealEnabled} className="break-inside-avoid mb-8">
      <div className="group w-full bg-[rgb(255,253,250)] border-x border-b border-[rgb(218,218,218)] shadow-[0_1px_0_rgba(15,23,42,0.04)] hover:shadow-md hover:border-[rgb(200,200,200)] flex flex-col transition-[box-shadow,border-color] duration-200 overflow-hidden">
        <NewspaperTornTop />
        <DashedRule />
        <div className="px-4 pt-4 pb-3 md:px-5 md:pt-5 md:pb-4 flex flex-col gap-3">
          <p className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-neutral-400 font-medium">
            {briefLine}
          </p>
          <h3 className="font-serif text-xl sm:text-2xl md:text-[1.65rem] font-bold leading-[1.15] text-text-primary tracking-tight group-hover:text-primary transition-colors">
            {p.title}
          </h3>
        </div>

        <DashedRule className="mx-4 md:mx-5" />

        <div className="px-4 py-3 md:px-5 md:py-4">
          <p className="font-sans text-sm leading-relaxed text-neutral-600 line-clamp-4">
            {p.summary}
          </p>
        </div>

        <DashedRule className="mx-4 md:mx-5" />

        <div className="px-4 py-3 md:px-5 md:py-4">
          <p className="font-sans text-xs sm:text-sm leading-relaxed text-neutral-600">
            <span className="font-semibold text-text-primary">Stack: </span>
            <span className="text-primary/90">{p.tech}</span>
          </p>
          <p className="mt-2 font-sans text-xs text-neutral-500">
            <span className="font-semibold text-neutral-600">Role: </span>
            {p.role}
          </p>
        </div>

        <DashedRule className="mx-4 md:mx-5" />

        <div className="flex w-full items-center bg-neutral-50/80">
          <Link
            to={internalPath}
            aria-label={`Read full brief: ${p.title}`}
            className="group/btn flex flex-1 cursor-pointer items-center justify-end px-4 py-3 md:px-5 md:py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary transition-colors text-right"
          >
            <span className="font-sans text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-primary">
              Read full brief
            </span>
          </Link>

          {hasExternalUrl && (
            <>
              <span className="w-px h-5 bg-neutral-300/80 shrink-0" aria-hidden />
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit live site: ${p.title}`}
                className="group/ext flex items-center gap-1.5 px-4 py-3 md:px-5 md:py-4 transition-colors text-right"
              >
                <span className="font-sans text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-neutral-500 group-hover/ext:text-primary transition-colors">
                  Live demo
                </span>
                <svg className="w-3 h-3 text-neutral-400 group-hover/ext:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </>
          )}
        </div>
      </div>
    </Reveal>
  );
}

type ProjectsProps = {
  revealEnabled: boolean;
};

export default function Projects({ revealEnabled }: ProjectsProps) {
  return (
    <section id="projects" className="px-6 md:px-20 pb-14 md:pb-24 scroll-mt-20">
      <div className="flex flex-col gap-4 sm:gap-6 sm:flex-row sm:items-end sm:justify-between mb-8 md:mb-16 max-w-7xl mx-auto">
        <Reveal enabled={revealEnabled}>
          <h2 className="text-3xl md:text-6xl font-bold uppercase text-text-primary">
            Project <br />
            <span className="text-primary">Briefs</span>
          </h2>
        </Reveal>
        <Reveal enabled={revealEnabled} className="shrink-0">
          <Link
            to="/project"
            className="inline-flex items-center gap-1.5 px-3 py-2 md:px-4 md:py-2.5 rounded-none border border-[rgb(218,218,218)] bg-primary/12 text-primary hover:bg-primary/20 hover:border-primary/35 transition-colors font-sans font-bold uppercase text-[10px] md:text-[11px] tracking-[0.14em]"
          >
            View all projects
            <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </Reveal>
      </div>

      <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 [column-gap:2rem] md:[column-gap:2.5rem]">
        {getFeaturedProjects().map((p, i) => {
          const indexLabel = String(i + 1).padStart(2, "0");
          return (
            <ProjectCardNoImage
              key={p.id}
              p={p}
              revealEnabled={revealEnabled}
              indexLabel={indexLabel}
            />
          );
        })}
      </div>
    </section>
  );
}
