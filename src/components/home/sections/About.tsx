import { aboutContent } from "@/app/home/_data/content";
import Reveal from "@/components/home/Reveal";

function SkillBullet() {
  return (
    <span className="relative flex h-3 w-3 shrink-0 items-center justify-center" aria-hidden>
      <span className="absolute inset-0 rounded-full bg-primary/20" />
      <span className="relative h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_rgba(12,161,110,0.45)]" />
    </span>
  );
}

type AboutProps = {
  revealEnabled: boolean;
};

export default function About({ revealEnabled }: AboutProps) {
  const { titleBefore, titleAccent, intro, skills, education, certifications } = aboutContent;

  return (
    <section
      id="about"
      className="px-6 md:px-20 py-12 md:py-24 bg-dark backdrop-blur-sm border-y border-white/[0.08]"
    >
      <Reveal enabled={revealEnabled} className="w-full max-w-none">
        <h2 className="text-3xl md:text-6xl font-bold uppercase mb-5 md:mb-8 text-white">
          {titleBefore}
          <span className="text-primary">{titleAccent}</span>
        </h2>
        <p className="text-white/85 text-base md:text-lg leading-relaxed max-w-none">{intro}</p>
      </Reveal>

      <Reveal enabled={revealEnabled} className="mt-10 md:mt-14 min-w-0 max-w-3xl">
        <div className="flex flex-col gap-3 md:gap-4 text-xs md:text-sm uppercase tracking-widest font-bold text-white">
          {skills.map((line) => (
            <p key={line} className="flex items-center gap-4">
              <SkillBullet />
              {line}
            </p>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-6 border-t border-white/10 pt-8 md:mt-10 md:pt-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary font-extrabold mb-2">Education</p>
            {education.map((block) => (
              <p
                key={block.lines[0]}
                className="text-sm font-bold text-white mb-4 last:mb-0 leading-relaxed"
              >
                {block.lines.map((line, i) => (
                  <span key={line}>
                    {line}
                    {i < block.lines.length - 1 && <br />}
                  </span>
                ))}
              </p>
            ))}
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-primary font-extrabold mb-2">Certification</p>
            {certifications.map((line, i) => (
              <p
                key={line}
                className={`text-sm font-bold text-white leading-relaxed ${i > 0 ? "mt-4" : ""}`}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
