export default function LumitechieBody() {
  return (
    <>
      {/* Project info */}
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-neutral-600 mb-6">
              <span className="text-text-primary font-medium">Lumitechie</span>
              <span className="hidden md:inline text-neutral-300">|</span>
              <span>Freelance — UI Redesign & Frontend</span>
              <span className="hidden md:inline text-neutral-300">|</span>
              <span>Year: 2025</span>
            </div>
      
            {/* Description */}
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">
                Project Description
              </h2>
              <div className="space-y-4 text-sm md:text-base text-text-primary leading-relaxed">
                <p>
                  Lumitechie is a Vietnamese technology solutions provider whose legacy
                  landing page suffered from outdated branding, slow loading times, and
                  poor search visibility. I led a complete UI redesign and frontend
                  overhaul to modernize their digital presence and align it with their
                  business growth goals.
                </p>
                <blockquote className="border-l-4 border-primary/40 pl-4 italic text-neutral-600">
                  A tech company's website is its first impression — the redesign
                  needed to be fast, mobile-first, and instantly credible.
                </blockquote>
              </div>
            </section>
      
            {/* What I Did */}
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">
                What I Did
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-text-primary leading-relaxed">
                <li>
                  Redesigned the full landing page with a mobile-first approach using
                  Tailwind CSS, ensuring consistent and responsive UI across all
                  screen sizes.
                </li>
                <li>
                  Applied structured SEO practices and semantic HTML to improve
                  search engine visibility and organic reach.
                </li>
                <li>
                  Reduced JavaScript bundle size and optimized React rendering cycles
                  to achieve noticeably faster page loads.
                </li>
                <li>
                  Implemented smooth, interactive components powered by TanStack
                  and React for a polished user experience.
                </li>
              </ul>
            </section>
      
            {/* Technical Highlights */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">
                Technical Highlights
              </h2>
              <div className="space-y-4 text-sm md:text-base text-text-primary leading-relaxed">
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Migrated from a heavy legacy codebase to a lean React +
                    Tailwind CSS stack, cutting initial load time significantly.
                  </li>
                  <li>
                    Leveraged TanStack Query for efficient data fetching and cache
                    management, eliminating redundant network requests and improving
                    perceived performance.
                  </li>
                  <li>
                    Established semantic HTML structure with proper heading
                    hierarchy, meta tags, and Open Graph data for stronger SEO
                    signals.
                  </li>
                  <li>
                    Delivered the project end-to-end as a freelancer — from design
                    concept through to production deployment.
                  </li>
                </ul>
                <p>
                  The redesign resulted in a cleaner, faster, and more engaging web
                  presence that strengthened Lumitechie's online credibility and
                  supported their client acquisition efforts.
                </p>
              </div>
            </section>
    </>
  );
}
