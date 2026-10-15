export default function TechxBody() {
  return (
    <>
      {/* Project info */}
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-neutral-600 mb-6">
              <span className="text-text-primary font-medium">TechX Viet Nam</span>
              <span className="hidden md:inline text-neutral-300">|</span>
              <span>
                Platform:{" "}
                <span className="text-primary font-medium">Easier</span>
                {" & "}
                <span className="text-primary font-medium">It'szai</span>
              </span>
              <span className="hidden md:inline text-neutral-300">|</span>
              <span>Project Team: 20+ members</span>
            </div>
      
            {/* My Responsibilities */}
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">
                What I Did
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-text-primary leading-relaxed">
                <li>
                  Translated Figma designs from Japanese designers into
                  pixel-perfect, production-ready HTML/CSS/JS templates with
                  full responsiveness across devices.
                </li>
                <li>
                  Built reusable UI modules — Swiper-based carousels, ECharts
                  dashboards (bar, pie, line), pricing tables, and hero banners —
                  so new landing pages could be assembled in hours instead of days.
                </li>
                <li>
                  Applied semantic HTML, structured data, and SEO best practices
                  to ensure each page ranked well in Japanese local search results.
                </li>
                <li>
                  Maintained cross-browser compatibility and handled Japanese
                  typography edge cases (font fallbacks, vertical text, spacing).
                </li>
              </ul>
            </section>
      
            {/* Technical Highlights */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">
                Technical Highlights
              </h2>
              <div className="space-y-4 text-sm md:text-base text-text-primary leading-relaxed">
                <blockquote className="border-l-4 border-primary/40 pl-4 italic text-neutral-600">
                  The key challenge was balancing creative freedom for each business
                  domain while keeping a modular architecture that scaled across both
                  the Easier and It'szai platforms.
                </blockquote>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Component-driven theme architecture — each theme shared a
                    common utility layer (grid, spacing, color tokens) but allowed
                    domain-specific overrides for industry verticals (restaurants,
                    clinics, salons, etc.).
                  </li>
                  <li>
                    Lightweight builds with zero framework overhead — vanilla
                    JS + CSS kept bundle sizes minimal, critical for Japanese
                    mobile networks.
                  </li>
                  <li>
                    Bilingual workflow — communicated requirements and review
                    feedback between Vietnamese dev team and Japanese design team,
                    iterating through structured Figma hand-off cycles.
                  </li>
                </ul>
              </div>
            </section>
    </>
  );
}
