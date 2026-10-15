export default function HeroSection() {
  return (
    <section className="pt-20 md:pt-24 min-h-[90vh] flex flex-col">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-4">
        <div className="hidden md:block col-span-1 border-r border-border-gray relative overflow-hidden bg-white">
          <div className="absolute bottom-10 left-6 text-xs font-mono uppercase text-accent-gray rotate-90 origin-bottom-left">
            Ngoc Quynh Pham
          </div>
        </div>

        <div className="col-span-1 md:col-span-3 flex flex-col justify-center px-6 md:px-20 py-20 relative">
          <h1 className="text-[12vw] md:text-[8vw] leading-[0.9] font-serif tracking-tighter mb-8">
            <span className="block italic">Frontend</span>
            <span className="block ml-[5vw] md:ml-[10vw]">Engineer &</span>
            <span className="block">Product Owner</span>
          </h1>
          <div className="flex flex-col md:flex-row items-start justify-between md:items-end gap-8 border-t border-border-gray pt-8 mt-4 max-w-4xl">
            <p className="text-lg md:text-xl font-light max-w-xl leading-relaxed">
              Building scalable architectures and user-centric experiences.
              Bridging the gap between technical execution and business value
              with a pragmatic approach.
            </p>
            <div className="flex items-center gap-4 shrink-0">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-mono uppercase">Based in HCMC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
