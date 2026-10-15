import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { useEffect, useMemo } from "react";
import type { Project } from "@/data/mock/projects";
import { getOtherFeaturedProjects } from "@/data/mock/projects";
import { isExternalUrl } from "@/lib/is-external-url";
import Footer from "@/components/layout/Footer";
import SubpageNav from "@/components/layout/SubpageNav";
import SEO from "@/components/ui/SEO";

type Props = {
  project: Project;
  children?: ReactNode;
  childrenAfterContent?: ReactNode;
};

export default function ProjectDetailShell({
  project,
  children,
  childrenAfterContent,
}: Props) {
  const hasLiveUrl = isExternalUrl(project.link);
  const otherProjects = useMemo(
    () => getOtherFeaturedProjects(project.detailPath, 3),
    [project.detailPath],
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [project.detailPath]);

  return (
    <div className="landing-page landing-bg font-sans antialiased selection:bg-primary selection:text-white relative text-text-primary min-h-screen">
      <SEO
        title={project.title}
        description={`${project.summary} Built with ${project.tech}.`}
        keywords={`${project.tech}, ${project.tag}, ${project.title}, Ngoc Quynh Pham`}
        path={project.detailPath ?? "/project"}
      />
      <SubpageNav backTo="/project" backLabel="Back to Projects" />

      <div className="w-full px-6 md:px-20 pt-12 md:pt-16 pb-10 md:pb-14 border-b border-white/10 bg-[#1e293b]">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block px-3 py-1.5 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded-md w-fit mb-4 shadow-sm shadow-primary/30">
            {project.tag}
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase text-white tracking-tight">
            {project.title}
          </h1>
        </div>
      </div>

      <div className="px-6 md:px-20 py-10 md:py-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-10 pb-8 border-b border-black/10">
            <div className="flex-1">
              <span className="block text-[10px] uppercase tracking-widest text-neutral-700 font-bold mb-1">
                Technologies
              </span>
              <p className="text-text-primary font-medium text-sm md:text-base">
                {project.tech}
              </p>
            </div>
            <div className="hidden md:block w-px h-8 bg-black/10" />
            <div className="flex-1">
              <span className="block text-[10px] uppercase tracking-widest text-neutral-700 font-bold mb-1">
                My Role
              </span>
              <p className="text-primary font-bold text-sm md:text-base">
                {project.role}
              </p>
            </div>
          </div>

          {children && <div className="mb-12">{children}</div>}

          {childrenAfterContent && (
            <div className="mb-10">{childrenAfterContent}</div>
          )}

          {hasLiveUrl && (
            <div className="pt-8 border-t border-black/10 flex flex-col sm:flex-row flex-wrap gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-primary text-white rounded-full hover:bg-[#088f5a] transition-colors font-bold uppercase text-sm inline-flex items-center justify-center shadow-md"
              >
                Visit live site
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>

      {otherProjects.length > 0 && (
        <section className="px-6 md:px-20 py-12 md:py-16 bg-neutral-50 border-t border-black/[0.07]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-8">
              Other projects
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 list-none p-0 m-0">
              {otherProjects.map((p) => (
                <li key={p.detailPath}>
                  <Link
                    to={p.detailPath!}
                    className="group flex flex-col h-full rounded-xl border border-black/[0.08] bg-white overflow-hidden shadow-sm hover:border-primary/35 hover:shadow-md transition-[box-shadow,border-color] duration-200"
                  >
                    <div className="p-4 flex flex-col flex-1 gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                        {p.tag}
                      </span>
                      <span className="font-bold text-text-primary text-sm md:text-base leading-snug group-hover:text-primary transition-colors line-clamp-2">
                        {p.title}
                      </span>
                      <span className="text-xs text-neutral-600 line-clamp-2 leading-relaxed mt-auto">
                        {p.summary}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="px-6 md:px-20 bg-white border-t border-black/[0.07]">
        <Footer full />
      </section>
    </div>
  );
}
