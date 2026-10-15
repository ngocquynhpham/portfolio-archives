import { Link } from "react-router-dom";
import { getArchiveListItems, type OrgType } from "@/data/mock/projects";
import { isExternalUrl } from "@/lib/is-external-url";
import Footer from "@/components/layout/Footer";
import SubpageNav from "@/components/layout/SubpageNav";
import SEO from "@/components/ui/SEO";

const orgColors: Record<OrgType, { bg: string; text: string }> = {
  company: { bg: "bg-blue-50", text: "text-blue-600" },
  personal: { bg: "bg-teal-50", text: "text-teal-600" },
  freelance: { bg: "bg-violet-50", text: "text-violet-600" },
  outsource: { bg: "bg-neutral-100", text: "text-neutral-500" },
};

export default function ProjectArchivePage() {
  const projects = getArchiveListItems();

  return (
    <div className="landing-page landing-bg font-sans antialiased selection:bg-primary selection:text-white relative text-text-primary min-h-screen">
      <SEO
        title="Project Archive"
        description="Explore my full project archive — 19+ web development projects spanning enterprise systems, data platforms, ecommerce, and creative experiments."
        keywords="web projects, portfolio, frontend projects, React projects, enterprise systems, Ngoc Quynh Pham"
        path="/project"
      />
      <SubpageNav backTo="/#projects" backLabel="Back" />

      <header className="w-full px-6 md:px-20 pt-12 md:pt-16 pb-10 md:pb-14 border-b border-white/10 bg-[#1e293b]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/50 font-semibold mb-3">
            Portfolio — All Works
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-none">
            Project Archive
          </h1>
          <div className="mt-4 flex items-center justify-center gap-4 text-xs text-white/40">
            <span>{projects.length} projects</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span>2017 — Present</span>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 md:px-20">
        <div className="border-b-2 border-black" />
      </div>

      <div className="px-6 md:px-20 py-10 md:py-16">
        <div className="max-w-5xl mx-auto">
          {projects.map((p, i) => {
            const ext = isExternalUrl(p.link);
            const colors = orgColors[p.orgType];
            const inner = (
              <article className="group grid grid-cols-[auto_1fr] md:grid-cols-[3rem_1fr_auto] gap-x-4 md:gap-x-6 items-start py-6 md:py-7">
                <span className="text-xs font-bold text-neutral-300 pt-1 tabular-nums text-right select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0">
                  <h2 className="text-base md:text-lg font-bold text-text-primary group-hover:text-primary transition-colors leading-snug mb-1.5">
                    {p.title}
                  </h2>
                  <p className="text-sm text-neutral-600 leading-relaxed line-clamp-2 mb-3">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${colors.bg} ${colors.text}`}
                    >
                      {p.org}
                    </span>
                    <span className="text-[10px] font-medium text-neutral-400 tracking-wide">
                      {p.year}
                    </span>
                  </div>
                </div>

                <div className="hidden md:flex items-center pt-1 text-neutral-300 group-hover:text-primary transition-colors">
                  <svg
                    className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-200"
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
                </div>
              </article>
            );

            const borderClass = i < projects.length - 1 ? "border-b border-black/[0.07]" : "";

            return ext ? (
              <a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className={`block no-underline ${borderClass}`}
              >
                {inner}
              </a>
            ) : (
              <Link key={p.title} to={p.link} className={`block no-underline ${borderClass}`}>
                {inner}
              </Link>
            );
          })}
        </div>
      </div>

      <section className="px-6 md:px-20 bg-white border-t border-black/[0.07]">
        <Footer full />
      </section>
    </div>
  );
}
