import Image1 from "../assets/Library.png";

export default function DigitalLibraryBody() {
  return (
    <>
      <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-neutral-600 mb-6">
              <span>
                🏢 Company:{" "}
                <a href="https://thangloigroup.vn/" target="_blank" rel="noreferrer" className="text-primary hover:underline font-medium">
                  Thang Loi Group
                </a>
              </span>
            </div>
      
            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">Description</h2>
              <p className="text-sm md:text-base text-text-primary leading-relaxed">
                A digital library with streaming video feature, document management, e-book, and cross-device accessibility.
              </p>
            </div>
      
            <img src={Image1} alt="Digital Library" loading="lazy" className="w-full rounded-xl border border-black/[0.06] shadow-sm mb-8 object-cover" />
      
            {/* Key Features */}
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">Key Features</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-text-primary leading-relaxed">
                <li>Adaptive video streaming across devices.</li>
                <li>Document viewer with PDF support.</li>
                <li>Content management system for admins.</li>
                <li>Cross-platform responsive design.</li>
                <li>Tag-based content organization.</li>
              </ul>
            </section>
      
            {/* Achievements */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">Achievements</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-text-primary leading-relaxed">
                <li>Built platform supporting 100+ learning resources.</li>
                <li>Implemented efficient video streaming reducing load times.</li>
              </ul>
            </section>
    </>
  );
}
