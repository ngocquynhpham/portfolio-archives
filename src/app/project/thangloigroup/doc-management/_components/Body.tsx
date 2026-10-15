export default function DocManagementBody() {
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
                Document management system integrated with E-Signature & Workflow platform, featuring scheduled publishing,
                targeted distribution, and advanced analytics.
              </p>
            </div>
      
            {/* Project Highlight */}
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">Project Highlight</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-text-primary leading-relaxed">
                <li>Incoming / Outgoing documents management.</li>
                <li>Integration with E-Signature workflow system.</li>
                <li>Scheduled document publishing.</li>
                <li>Document analytics and tracking.</li>
              </ul>
            </section>
      
            {/* Achievements */}
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">Achievements</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-text-primary leading-relaxed">
                <li>Reduced document processing time through optimized frontend workflows and intuitive UI.</li>
                <li>Designed and implemented a custom WYSIWYG email template editor with dynamic variable support.</li>
                <li>Successfully handled distribution and tracking of 1000+ documents across multiple companies.</li>
                <li>Improved document tracking accuracy with real-time status updates and analytics.</li>
              </ul>
            </section>
      
            <hr className="border-black/10 mb-8" />
      
            {/* Document Management Interface */}
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">Document Management Interface</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-text-primary leading-relaxed">
                <li>Used table component with pagination for large document lists.</li>
              </ul>
            </section>
      
            <hr className="border-black/10 mb-8" />
      
            {/* Document Form & Validation */}
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">Document Form & Validation</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-text-primary leading-relaxed">
                <li>Immediate / Scheduled publishing feature.</li>
                <li>{`Implemented an advanced WYSIWYG email template editor, allowing user to compose email template using dynamic placeholders such as {{document_code}}, {{publisher_name}}, {{document_title}}.`}</li>
              </ul>
            </section>
      
            <hr className="border-black/10 mb-8" />
      
            {/* Dashboard & Analytics */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">Dashboard & Analytics</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-text-primary leading-relaxed">
                <li>Built responsive dashboard using CSS Grid and Flexbox.</li>
                <li>Designed and developed interactive charts using Recharts.</li>
                <li>Dynamic filtering interface with real-time updates.</li>
              </ul>
            </section>
    </>
  );
}
