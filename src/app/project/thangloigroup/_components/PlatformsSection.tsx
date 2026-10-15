import { Link } from "react-router-dom";
import { getTlgPlatformProjects } from "@/data/mock/projects";

export default function ThangLoiPlatformsSection() {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">
        Platforms
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {getTlgPlatformProjects().map((p, i) => (
          <li key={p.detailPath}>
            <Link
              to={p.detailPath!}
              className="group flex items-center gap-3 rounded-lg border border-black/[0.06] bg-neutral-50 px-5 py-4 hover:border-primary/30 hover:bg-primary/5 transition-colors"
            >
              <span className="text-primary font-bold text-lg w-6 shrink-0">{i + 1}</span>
              <span className="text-sm md:text-base font-medium text-text-primary group-hover:text-primary transition-colors">
                {p.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
