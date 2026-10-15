import { useEffect, useRef, useState } from "react";
import { heroContent } from "@/app/home/_data/content";
import Reveal from "@/components/home/Reveal";

type HeroProps = {
  revealEnabled: boolean;
};

const ENGINEER_LABEL = heroContent.engineerLabel;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  return reduced;
}

function HeroEngineerTypewriter({ revealEnabled }: { revealEnabled: boolean }) {
  const blockRef = useRef<HTMLSpanElement>(null);
  const intervalRef = useRef<number | null>(null);
  const [visibleLen, setVisibleLen] = useState(0);
  const [inView, setInView] = useState(!revealEnabled);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!revealEnabled) {
      setInView(true);
      setVisibleLen(ENGINEER_LABEL.length);
      return;
    }
    const el = blockRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [revealEnabled]);

  useEffect(() => {
    if (!revealEnabled) return;
    if (!inView) return;

    if (reducedMotion) {
      setVisibleLen(ENGINEER_LABEL.length);
      return;
    }

    setVisibleLen(0);
    const startDelayMs = 450;
    const charMs = 78;

    const timeoutId = window.setTimeout(() => {
      let i = 0;
      intervalRef.current = window.setInterval(() => {
        i += 1;
        setVisibleLen(Math.min(i, ENGINEER_LABEL.length));
        if (i >= ENGINEER_LABEL.length && intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      }, charMs);
    }, startDelayMs);

    return () => {
      clearTimeout(timeoutId);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [revealEnabled, inView, reducedMotion]);

  const complete = visibleLen >= ENGINEER_LABEL.length;
  const visible = ENGINEER_LABEL.slice(0, visibleLen);

  return (
    <span ref={blockRef} className="hero-engineer-block">
      <span
        className={
          complete ? "hero-engineer-word hero-engineer-word--done" : "hero-engineer-word hero-engineer-word--typing"
        }
      >
        {visible}
      </span>
      {!complete && (
        <span className="hero-engineer-cursor" aria-hidden>
          |
        </span>
      )}
    </span>
  );
}

export default function Hero({ revealEnabled }: HeroProps) {
  return (
    <header className="min-h-screen flex flex-col justify-center gap-12 px-6 pt-32 md:pt-20 md:px-20">
      <Reveal enabled={revealEnabled} className="z-10 min-w-0 w-full">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-3 h-3 rounded-full bg-primary animate-pulse" />
          <p className="font-bold uppercase tracking-widest text-sm max-md:text-xs text-neutral-700">
            {heroContent.availabilityLabel}
          </p>
        </div>
        <h1
          aria-label={`${heroContent.titleLine1} ${heroContent.engineerLabel}`}
          className="text-[4rem] sm:text-[15rem] md:text-[8rem] lg:text-[10rem] font-bold uppercase leading-[0.9] tracking-tighter text-text-primary"
        >
          {heroContent.titleLine1}
          <br />
          <HeroEngineerTypewriter revealEnabled={revealEnabled} />
        </h1>
      </Reveal>

      <Reveal enabled={revealEnabled} className="w-full ">
        <p className="text-base md:text-xl text-neutral-700 border-l-2 border-primary pl-4 font-medium leading-relaxed">
          {heroContent.bio}
        </p>
      </Reveal>
    </header>
  );
}
