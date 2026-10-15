import { MARQUEE_ITEMS } from "../_data/marquee";

function MarqueeStrip({ copy }: { copy: "a" | "b" }) {
  return (
    <div
      className="flex shrink-0 items-center whitespace-nowrap"
      aria-hidden={copy === "b" ? true : undefined}
    >
      {MARQUEE_ITEMS.map((item) => (
        <span
          key={`${copy}-${item.text}`}
          className={`text-4xl mx-8 ${
            item.outline
              ? "font-sans font-bold uppercase text-transparent"
              : "font-serif italic"
          }`}
          style={
            item.outline ? { WebkitTextStroke: "1px #000" } : undefined
          }
        >
          {item.text}
        </span>
      ))}
    </div>
  );
}

export default function MarqueeSection() {
  return (
    <div className="border-y border-border-gray py-4 overflow-hidden bg-white">
      <div className="flex w-max animate-marquee will-change-transform">
        <MarqueeStrip copy="a" />
        <MarqueeStrip copy="b" />
      </div>
    </div>
  );
}
