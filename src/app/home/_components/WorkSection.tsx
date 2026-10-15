import { ArrowRight } from "lucide-react";
import ProjectCardPreview, {
  ProjectCardHoverOverlay,
} from "@/components/project/ProjectCardPreview";

type WorkSectionProps = {
  onOpenArchive: () => void;
  onOpenProject: (id: number) => void;
};

export default function WorkSection({
  onOpenArchive,
  onOpenProject,
}: WorkSectionProps) {
  return (
    <section id="work" className="border-b border-border-gray">
      <div className="grid grid-cols-1 md:grid-cols-4 border-b border-border-gray">
        <div className="col-span-1 border-r border-border-gray p-6 flex items-end">
          <h2 className="text-sm font-mono uppercase">Selected Case Studies</h2>
        </div>
        <div className="col-span-3 p-6 flex justify-end">
          <button
            type="button"
            onClick={onOpenArchive}
            className="group flex items-center gap-2 text-sm uppercase font-bold hover:italic transition-all"
          >
            View Archive{" "}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-4 group cursor-pointer"
        onClick={() => onOpenProject(1)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onOpenProject(1);
        }}
        role="button"
        tabIndex={0}
      >
        <div className="col-span-1 md:border-r border-border-gray p-6 md:p-10 flex flex-col justify-between bg-white md:bg-transparent">
          <div>
            <span className="text-xs font-mono text-accent-gray mb-2 block">
              01
            </span>
            <h3 className="text-2xl font-serif italic mb-2">
              Lean Cafe
              <br />
              Take-away
            </h3>
          </div>
          <div className="mt-8">
            <p className="text-sm border-t border-border-gray pt-4 text-accent-gray">
              MVP / Fullstack
            </p>
          </div>
        </div>
        <div className="col-span-3 project-card overflow-hidden h-[40vh] md:h-[50vh] relative border-b md:border-b-0 border-border-gray bg-gray-50">
          <ProjectCardPreview variant="lean-cafe" />
          <ProjectCardHoverOverlay />
        </div>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-4 group cursor-pointer border-t border-border-gray"
        onClick={() => onOpenProject(2)}
        role="button"
        tabIndex={0}
      >
        <div className="col-span-3 project-card overflow-hidden h-[40vh] md:h-[50vh] relative order-2 md:order-1 border-r border-border-gray bg-gray-50">
          <ProjectCardPreview variant="dashboard" />
          <ProjectCardHoverOverlay />
        </div>
        <div className="col-span-1 p-6 md:p-10 flex flex-col justify-between bg-white md:bg-transparent order-1 md:order-2">
          <div>
            <span className="text-xs font-mono text-accent-gray mb-2 block">
              02
            </span>
            <h3 className="text-2xl font-serif italic mb-2">
              Business
              <br />
              Toolkit
            </h3>
          </div>
          <div className="mt-8">
            <p className="text-sm border-t border-border-gray pt-4 text-accent-gray">
              Internal Tool / React
            </p>
          </div>
        </div>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-4 group cursor-pointer border-t border-border-gray"
        onClick={() => onOpenProject(3)}
        role="button"
        tabIndex={0}
      >
        <div className="col-span-1 md:border-r border-border-gray p-6 md:p-10 flex flex-col justify-between bg-white md:bg-transparent">
          <div>
            <span className="text-xs font-mono text-accent-gray mb-2 block">
              03
            </span>
            <h3 className="text-2xl font-serif italic mb-2">
              UI Template
              <br />
              Library
            </h3>
          </div>
          <div className="mt-8">
            <p className="text-sm border-t border-border-gray pt-4 text-accent-gray">
              SaaS Platform
            </p>
          </div>
        </div>
        <div className="col-span-3 project-card overflow-hidden h-[40vh] md:h-[50vh] relative bg-gray-50">
          <ProjectCardPreview variant="components" />
          <ProjectCardHoverOverlay />
        </div>
      </div>
    </section>
  );
}
