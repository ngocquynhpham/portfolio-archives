import { marqueeItems } from "@/app/home/_data/content";

function MarqueeTrack() {
  return (
    <>
      {marqueeItems.map((item, i) => (
        <span key={`${item}-${i}`} className="contents">
          <span>{item}</span>
          <span className="text-white/70">•</span>
        </span>
      ))}
    </>
  );
}

export default function Marquee() {
  return (
    <section className="py-3 md:py-6 bg-primary text-white my-4 md:my-12 relative border-y border-white/15 overflow-hidden">
      <div className="marquee-container -skew-x-2 origin-center">
        <div className="marquee-content text-2xl md:text-5xl font-bold uppercase tracking-tighter items-center gap-4 md:gap-6">
          <MarqueeTrack />
          <MarqueeTrack />
        </div>
      </div>
    </section>
  );
}
