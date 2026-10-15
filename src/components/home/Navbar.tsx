import { useCallback, useEffect, useState } from "react";
import { navLinks } from "@/app/home/_data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    document.documentElement.classList.add("lock-scroll");
    document.body.classList.add("lock-scroll");
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("lock-scroll");
      document.body.classList.remove("lock-scroll");
    };
  }, [open, close]);

  return (
    <>
      <nav className="fixed w-full z-50 p-6 flex justify-between items-center bg-white/90 backdrop-blur-md border-b border-black/[0.07] transition-colors duration-200">
        <a href="#" className="text-xl font-bold tracking-tighter uppercase text-text-primary hover:text-primary transition-colors">
          Ngoc.Quynh
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wide text-text-primary">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className={`block w-6 h-[2px] bg-text-primary rounded-full transition-transform duration-300 origin-center ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block w-6 h-[2px] bg-text-primary rounded-full transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[2px] bg-text-primary rounded-full transition-transform duration-300 origin-center ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {navLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={close}
            className="text-2xl font-bold uppercase tracking-wider text-text-primary hover:text-primary transition-colors"
          >
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}
