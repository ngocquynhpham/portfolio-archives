import { type CSSProperties, type ReactNode, useEffect, useRef, useState } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  enabled?: boolean;
};

export default function Reveal({ children, className = "", style, enabled = true }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActive(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [enabled]);

  return (
    <div ref={ref} className={`reveal-elem ${active ? "active" : ""} ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}
