export default function PlaygroundBody() {
  return (
    <>
      {/* Project info */}
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-neutral-600 mb-6">
              <span className="text-text-primary font-medium">
                Frontend Playground & UI Archive
              </span>
              <span className="hidden md:inline text-neutral-300">|</span>
              <span>Personal Project — Ongoing since 2017</span>
              <span className="hidden md:inline text-neutral-300">|</span>
              <span>
                Live at{" "}
                <a
                  href="https://ngocquynhpham.github.io"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  ngocquynhpham.github.io
                </a>
              </span>
            </div>
      
            {/* Description */}
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">
                Project Description
              </h2>
              <div className="space-y-4 text-sm md:text-base text-text-primary leading-relaxed">
                <p>
                  This playground is my personal laboratory — a living archive that
                  documents every stage of my frontend journey since university. From
                  the very first custom CSS button to complex interactive layouts, it
                  captures years of curiosity, experimentation, and continuous
                  learning.
                </p>
                <blockquote className="border-l-4 border-primary/40 pl-4 italic text-neutral-600">
                  A developer's growth is best measured not by polished products alone,
                  but by the raw, unedited trail of experiments they leave behind.
                </blockquote>
              </div>
            </section>
      
            {/* What's Inside */}
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">
                What's Inside
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-text-primary leading-relaxed">
                <li>
                  Hand-crafted CSS components — buttons, cards, navigation bars,
                  tooltips, and form elements built from scratch to deeply understand
                  layout and styling fundamentals.
                </li>
                <li>
                  Interactive UI experiments — accordion panels, modals, tab systems,
                  dropdown menus, and animated transitions exploring vanilla
                  JavaScript and DOM manipulation.
                </li>
                <li>
                  Responsive layout studies — Flexbox and CSS Grid compositions,
                  mobile-first patterns, and adaptive design techniques tested across
                  various screen sizes.
                </li>
                <li>
                  Animation and micro-interaction snippets — CSS keyframes, scroll
                  effects, hover states, and transition choreography prototyped as
                  isolated, reusable demos.
                </li>
                <li>
                  Research and learning notes — small proof-of-concept pages for
                  concepts like semantic HTML, accessibility patterns, and CSS
                  architecture approaches.
                </li>
              </ul>
            </section>
      
            {/* Why It Matters */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">
                Why It Matters
              </h2>
              <div className="space-y-4 text-sm md:text-base text-text-primary leading-relaxed">
                <p>
                  Unlike portfolio pieces that showcase finished work, this playground
                  is intentionally raw and unfiltered. It reflects the day-to-day
                  habit of breaking things apart, rebuilding them, and pushing the
                  boundaries of what can be done with HTML, CSS, and JavaScript.
                </p>
                <p>
                  Over 9 years, it has grown from a student's first coding exercises
                  into a comprehensive reference library — proof that consistent,
                  curiosity-driven practice is the foundation of every skill I bring
                  to professional projects today.
                </p>
              </div>
            </section>
    </>
  );
}
