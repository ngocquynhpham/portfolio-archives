import { Link } from "react-router-dom";

type SubpageNavProps = {
  backTo: string;
  backLabel: string;
};

export default function SubpageNav({ backTo, backLabel }: SubpageNavProps) {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/[0.07] px-6 md:px-10 py-4 flex items-center justify-between">
      <Link
        to="/"
        className="text-sm font-bold uppercase tracking-wide text-text-primary hover:text-primary transition-colors"
      >
        Ngoc.Quynh
      </Link>
      <Link
        to={backTo}
        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-text-primary hover:text-primary transition-colors"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        {backLabel}
      </Link>
    </nav>
  );
}
