import { ArrowUpRight, Download, X } from "lucide-react";
import ModalWrap from "@/components/modal/ModalWrap";
import ProjectDetailContent from "@/components/project/ProjectDetailContent";
import {
  archiveProjectIds,
  portfolioProjects,
  type PortfolioProject,
} from "@/data/projects";

export type SiteModalId = "archive-modal" | "detail-modal" | "resume-modal" | null;

type SiteModalsProps = {
  activeModal: SiteModalId;
  detailProject: PortfolioProject | null;
  onClose: () => void;
  onOpenProject: (id: number) => void;
};

export default function SiteModals({
  activeModal,
  detailProject,
  onClose,
  onOpenProject,
}: SiteModalsProps) {
  return (
    <>
      <ModalWrap
        id="archive-modal"
        active={activeModal === "archive-modal"}
        onClose={onClose}
      >
        <div className="bg-white w-full max-w-5xl h-[85vh] shadow-2xl overflow-hidden flex flex-col border border-border-gray mx-4">
          <div className="p-6 border-b border-border-gray flex justify-between items-center bg-bg-cream">
            <h2 className="text-2xl font-serif italic">Project Archive</h2>
            <button
              type="button"
              onClick={onClose}
              className="hover:rotate-90 transition-transform"
              aria-label="Close archive"
            >
              <X className="w-8 h-8" />
            </button>
          </div>
          <div className="flex-1 overflow-auto p-0">
            <table className="w-full text-left">
              <thead className="bg-bg-cream sticky top-0">
                <tr className="text-xs font-mono uppercase border-b border-border-gray">
                  <th className="p-6 font-normal">#</th>
                  <th className="p-6 font-normal">Project Name</th>
                  <th className="p-6 font-normal hidden md:table-cell">Type</th>
                  <th className="p-6 font-normal text-right">View</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {archiveProjectIds.map((id) => {
                  const p = portfolioProjects[id];
                  return (
                    <tr
                      key={id}
                      className="border-b border-border-gray hover:bg-bg-cream transition-colors cursor-pointer"
                      onClick={() => onOpenProject(id)}
                    >
                      <td className="p-6 font-mono text-accent-gray">
                        {String(id).padStart(2, "0")}
                      </td>
                      <td className="p-6 font-bold">{p.archiveTitle}</td>
                      <td className="p-6 hidden md:table-cell text-accent-gray">
                        {p.archiveType}
                      </td>
                      <td className="p-6 text-right">
                        <ArrowUpRight className="w-4 h-4 ml-auto" />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </ModalWrap>

      <ModalWrap
        id="detail-modal"
        active={activeModal === "detail-modal" && detailProject !== null}
        onClose={onClose}
      >
        <div className="bg-white w-full max-w-5xl h-[90vh] shadow-2xl overflow-y-auto flex flex-col border border-border-gray mx-4 relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-6 right-6 z-10 bg-white rounded-full p-2 hover:rotate-90 transition-transform shadow-lg border border-gray-200"
            aria-label="Close project detail"
          >
            <X className="w-6 h-6" />
          </button>
          {detailProject && <ProjectDetailContent project={detailProject} />}
        </div>
      </ModalWrap>

      <ModalWrap
        id="resume-modal"
        active={activeModal === "resume-modal"}
        onClose={onClose}
      >
        <div className="bg-white w-full max-w-3xl shadow-2xl border border-border-gray mx-4 p-8 md:p-12 text-center relative max-h-[90vh] overflow-y-auto">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-6 right-6 hover:rotate-90 transition-transform"
            aria-label="Close resume"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="mb-8">
            <h2 className="text-4xl font-serif italic mb-2">Resume Preview</h2>
            <p className="text-accent-gray font-mono text-sm">
              Updated: March 2026
            </p>
          </div>

          <div className="bg-bg-cream border border-border-gray p-8 text-left mb-8 space-y-6">
            <div className="flex justify-between items-start border-b border-gray-300 pb-4">
              <div>
                <h3 className="font-bold text-xl">Ngoc Quynh Pham</h3>
                <p className="text-sm text-accent-gray">
                  Frontend Engineer & Product Owner
                </p>
              </div>
              <div className="text-right text-xs font-mono">
                HCMC, Vietnam
                <br />
                4+ Years Exp
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-sm uppercase mb-2">Experience</h4>
                <ul className="text-sm space-y-2 text-accent-gray">
                  <li>
                    <strong>TechX VN</strong> (2024-Present): Frontend Engineer
                  </li>
                  <li>
                    <strong>Thang Loi Group</strong> (2020-2024): Frontend
                    Developer
                  </li>
                  <li>
                    <strong>FIOP JSC</strong> (2019-2020): Frontend Developer
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase mb-2">
                  Tech & Product Skills
                </h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-white border px-2 py-1">
                    ReactJS / NextJS
                  </span>
                  <span className="bg-white border px-2 py-1">
                    Python / FastAPI
                  </span>
                  <span className="bg-white border px-2 py-1">
                    System Architecture
                  </span>
                  <span className="bg-white border px-2 py-1">Agile / Scrum</span>
                  <span className="bg-white border px-2 py-1">UI/UX</span>
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="bg-black text-white px-8 py-4 w-full font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
          >
            Download Full PDF <Download className="w-4 h-4" />
          </button>
        </div>
      </ModalWrap>
    </>
  );
}
