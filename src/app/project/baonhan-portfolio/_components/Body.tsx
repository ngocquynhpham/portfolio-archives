export default function BaonhanPortfolioBody() {
  return (
    <>
      <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-neutral-600 mb-6">
        <span className="text-text-primary font-medium">Bùi Bảo Nhân — Senior BA</span>
        <span className="hidden md:inline text-neutral-300">|</span>
        <span>Freelance — Portfolio website</span>
        <span className="hidden md:inline text-neutral-300">|</span>
        <span>
          Live at{" "}
          <a
            href="https://baonhantk.github.io/"
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:underline font-medium"
          >
            baonhantk.github.io
          </a>
        </span>
      </div>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">
          Project Description
        </h2>
        <div className="space-y-4 text-sm md:text-base text-text-primary leading-relaxed">
          <p>
            A personal portfolio for Bùi Bảo Nhân, a Senior Business Analyst with 10+ years across
            HRM, CRM, and PropTech. The site presents his profile, skills, experience, and a flagship
            case study — PropOps Blueprint — that maps the Thắng Lợi Group digital ecosystem (HRM,
            Goal &amp; Task, assets, documents, e-signature, call center, and more) in a way
            recruiters and stakeholders can scan quickly.
          </p>
          <blockquote className="border-l-4 border-primary/40 pl-4 italic text-neutral-600">
            A BA portfolio has to read like a brief, not a résumé dump — clear sections, bilingual
            copy, and one strong case study up front.
          </blockquote>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">
          What I Built
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-text-primary leading-relaxed">
          <li>
            Single-page layout with anchored sections — About, Skills, Strengths, Experience,
            featured case study, Projects, and Contact — structured for hiring managers and client
            conversations.
          </li>
          <li>
            PropOps Blueprint case-study block with ecosystem visualization tying internal platforms
            to his BA work on requirements, BPMN, and delivery.
          </li>
          <li>
            Vietnamese / English language toggle with content driven from a central data layer, so
            copy stays maintainable without duplicating markup.
          </li>
          <li>
            Light and dark themes with system preference detection and persisted user choice via
            localStorage.
          </li>
          <li>
            Responsive navigation with a mobile menu overlay, availability banner, CV download, and
            contact form aligned to a professional analyst brand.
          </li>
          <li>
            SEO and social sharing — semantic HTML, meta description, and Open Graph tags for
            LinkedIn and link previews.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">
          Technical Highlights
        </h2>
        <div className="space-y-4 text-sm md:text-base text-text-primary leading-relaxed">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Vanilla HTML, CSS, and JavaScript — no framework overhead — deployed as static assets
              on GitHub Pages for fast loads and simple hosting.
            </li>
            <li>
              Modular CSS (reset, layout, profile styles) and a small app script for nav rendering,
              theme, language, and mobile interactions.
            </li>
            <li>
              Content separated in{" "}
              <code className="text-sm bg-neutral-100 px-1 rounded">js/data.js</code> so the client
              can update experience and project copy without touching structure.
            </li>
            <li>
              Inter font, Font Awesome icons, and accessible patterns (ARIA labels, keyboard-friendly
              menu controls) on a clean analyst-focused visual system.
            </li>
          </ul>
          <p>
            The result is a focused, bilingual portfolio that showcases senior BA credibility and
            real enterprise context — including platforms I also helped build at Thang Loi Group — in
            one shareable URL.
          </p>
        </div>
      </section>
    </>
  );
}
