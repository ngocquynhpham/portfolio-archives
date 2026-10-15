export default function EconwikiBody() {
  return (
    <>
      {/* Project info */}
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-neutral-600 mb-6">
              <span className="text-text-primary font-medium">EconWiki</span>
              <span className="hidden md:inline text-neutral-300">|</span>
              <span>Independent Full-stack Project</span>
              <span className="hidden md:inline text-neutral-300">|</span>
              <span>Dec 2025 – Present</span>
            </div>
      
            {/* Description */}
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">
                Project Description
              </h2>
              <div className="space-y-4 text-sm md:text-base text-text-primary leading-relaxed">
                <p>
                  EconWiki is a dedicated Vietnamese economics dictionary designed for
                  learners and professionals who previously relied on scattered
                  spreadsheet notes and fragmented articles. The platform centralizes
                  economic terminology with fast search, clean definitions, and a
                  structured admin dashboard for content curation.
                </p>
                <blockquote className="border-l-4 border-primary/40 pl-4 italic text-neutral-600">
                  A dictionary is only as good as its search speed and editorial
                  pipeline — both had to be built from scratch, in one cohesive stack.
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
                  Designed and built the entire application independently — from
                  database schema and API design to the end-user interface and admin
                  dashboard.
                </li>
                <li>
                  Developed a React frontend with TypeScript for type-safe,
                  component-driven UI, including real-time search with debounced
                  queries and keyboard navigation.
                </li>
                <li>
                  Built a FastAPI backend with structured endpoints for CRUD
                  operations, search, and content categorization, ensuring fast
                  response times for dictionary lookups.
                </li>
                <li>
                  Created an admin dashboard for content curators to manage terms,
                  review submissions, and maintain editorial quality without touching
                  code.
                </li>
                <li>
                  Leveraged Cursor AI to accelerate scaffolding, repetitive UI
                  patterns, and refactoring cycles — reducing solo development time
                  significantly.
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
                    Full-stack TypeScript + Python architecture — React handles the
                    presentation layer while FastAPI serves a clean REST API, keeping
                    concerns fully separated.
                  </li>
                  <li>
                    Optimized search with indexed queries and debounced input,
                    delivering near-instant results even as the dictionary scales.
                  </li>
                  <li>
                    Admin dashboard with role-based access, allowing curators to add,
                    edit, and categorize terms through a streamlined editorial
                    workflow.
                  </li>
                  <li>
                    AI-assisted development with Cursor — used for scaffolding
                    components, generating boilerplate, and accelerating code reviews,
                    demonstrating effective human–AI collaboration in a real product.
                  </li>
                </ul>
                <p>
                  EconWiki demonstrates the ability to independently ship a full
                  product — from concept and system design to deployment — while
                  effectively integrating AI tools into a professional development
                  workflow.
                </p>
              </div>
            </section>
    </>
  );
}
