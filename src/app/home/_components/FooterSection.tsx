import { ArrowRight } from "lucide-react";

type FooterSectionProps = {
  clock: string;
  onOpenResume: () => void;
};

export default function FooterSection({ clock, onOpenResume }: FooterSectionProps) {
  return (
    <footer
      id="contact"
      className="bg-text-black text-bg-cream pt-20 pb-8 px-6 md:px-12"
    >
      <div className="flex flex-col items-center text-center">
        <p className="font-mono text-xs uppercase mb-6 tracking-widest text-white/65">
          I am looking forward to hearing from you
        </p>
        <a
          href="mailto:contact@ngocquynhpham.com"
          className="text-[12vw] font-serif leading-none hover:italic transition-all duration-500"
        >
          Let&apos;s Talk
        </a>
        <div className="mt-12">
          <a
            href="mailto:contact@ngocquynhpham.com"
            className="border border-white/20 px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all inline-flex items-center gap-2"
          >
            Start a Conversation <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-32 pt-8 border-t border-white/20 text-sm text-white/80">
        <div className="col-span-2 md:col-span-1 text-white/70">
          © 2026 Ngoc Quynh Pham
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-white font-bold uppercase text-xs">Socials</span>
          <a href="#" className="text-white/80 hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">
            GitHub
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-white font-bold uppercase text-xs">Resources</span>
          <button
            type="button"
            onClick={onOpenResume}
            className="text-white/80 hover:text-white text-left transition-colors"
          >
            Resume
          </button>
        </div>
        <div className="flex flex-col gap-2 text-right">
          <span className="text-white font-bold uppercase text-xs">Local Time</span>
          <span id="clock" className="text-white/80 tabular-nums">
            {clock}
          </span>
        </div>
      </div>
    </footer>
  );
}
