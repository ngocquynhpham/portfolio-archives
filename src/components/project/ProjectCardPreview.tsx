type ProjectCardPreviewProps = {
  variant: "lean-cafe" | "dashboard" | "components";
};

export default function ProjectCardPreview({ variant }: ProjectCardPreviewProps) {
  if (variant === "lean-cafe") {
    return (
      <div className="absolute inset-0 flex items-center justify-center p-12">
        <div className="w-full h-full bg-stone-900 shadow-xl border border-gray-100 flex flex-col items-center justify-center text-accent-gray font-serif text-2xl">
          <span className="text-white italic text-4xl mb-4">React + FastAPI</span>
          [ Architecture Preview ]
        </div>
      </div>
    );
  }
  if (variant === "dashboard") {
    return (
      <div className="absolute inset-0 flex items-center justify-center p-12">
        <div className="w-full h-full bg-white shadow-xl border border-gray-100 flex items-center justify-center text-gray-300 font-serif text-4xl">
          Dashboard UI
        </div>
      </div>
    );
  }
  return (
    <div className="absolute inset-0 flex items-center justify-center p-12">
      <div className="w-full h-full bg-white shadow-xl border border-gray-100 flex items-center justify-center text-gray-300 font-serif text-4xl">
        Components UI
      </div>
    </div>
  );
}

export function ProjectCardHoverOverlay() {
  return (
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
      <div className="bg-white text-black rounded-full w-24 h-24 flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300">
        <span className="text-xs font-bold uppercase">View</span>
      </div>
    </div>
  );
}
