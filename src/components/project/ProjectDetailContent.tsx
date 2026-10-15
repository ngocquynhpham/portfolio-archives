import type { PortfolioProject } from "@/data/projects";

export default function ProjectDetailContent({
  project,
}: {
  project: PortfolioProject;
}) {
  const id = project.id;

  return (
    <>
      <div className="h-[40vh] md:h-[50vh] bg-gray-100 flex items-center justify-center border-b border-border-gray relative overflow-hidden">
        {id === 1 ? (
          <div className="w-full h-full bg-stone-900 flex flex-col items-center justify-center text-accent-gray font-serif">
            <span className="text-white italic text-5xl md:text-6xl mb-4">
              React + FastAPI
            </span>
            <span className="tracking-widest uppercase text-sm">
              [ System Architecture ]
            </span>
          </div>
        ) : (
          <span className="text-4xl text-gray-300 font-serif italic">
            Project Interface
          </span>
        )}
      </div>
      <div className="p-8 md:p-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="col-span-2">
          <h2 className="text-4xl md:text-5xl font-serif italic mb-8">
            {project.title}
          </h2>
          <div className="space-y-6 text-accent-gray leading-relaxed text-sm md:text-base">
            <div>
              <strong className="text-black block mb-1">The Problem</strong>
              <p>{project.problem}</p>
            </div>
            <div>
              <strong className="text-black block mb-1">The Solution</strong>
              <p>{project.solution}</p>
            </div>
            <div>
              <strong className="text-black block mb-1">Business Value</strong>
              <p>{project.value}</p>
            </div>
          </div>
          <div className="border-t border-border-gray pt-6 mt-8">
            <h4 className="font-bold uppercase text-xs mb-4">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((s) => (
                <span
                  key={s}
                  className="border border-border-gray px-3 py-1 text-sm rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-1 md:border-l border-border-gray md:pl-8">
          <p className="font-mono text-sm text-accent-gray mb-2">Project Type</p>
          <p className="font-bold mb-8 text-xl">{project.type}</p>
          <button
            type="button"
            className="bg-black text-white px-6 py-4 w-full font-bold uppercase hover:bg-gray-800 transition-colors"
          >
            Launch Project
          </button>
        </div>
      </div>
    </>
  );
}
