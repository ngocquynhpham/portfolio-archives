import ImageBPMN from "../assets/image.png";
import ImageDashboard from "../assets/eSign.png";
import ImageSignature from "../assets/signature_area.png";

export default function ESignBody() {
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
                A business process automation platform that turns static BPMN workflows into dynamic approval flows with digital signatures.
                It manages complex approval chains while ensuring document security and process integrity.
              </p>
            </div>
      
            {/* Key Features */}
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">Key Features</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-text-primary leading-relaxed">
                <li>
                  Dynamic workflow creation using{" "}
                  <a href="https://camunda.com/bpmn/" rel="noreferrer noopener" className="text-orange-500 font-bold hover:underline">
                    Camunda BPMN
                  </a>{" "}
                  with multi-company support.
                </li>
                <li>Interactive PDF signature placement with drag-and-drop interface.</li>
                <li>Real-time document tracking and notification system.</li>
              </ul>
              <img src={ImageBPMN} alt="BPMN Workflow" loading="lazy" className="w-full rounded-xl border border-black/[0.06] shadow-sm mt-4 object-cover" />
            </section>
      
            {/* Achievements */}
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">Achievements</h2>
              <p className="text-sm font-medium underline text-text-primary mb-2">Process automation:</p>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-text-primary leading-relaxed mb-4">
                <li>Reduced document approval time by 50% compared to paper-based system.</li>
                <li>Successfully handled 500+ document workflows across multiple companies.</li>
                <li>Decreased document errors by 80% through automated document workflow.</li>
              </ul>
              <p className="text-sm font-medium underline text-text-primary mb-2">User experience:</p>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-text-primary leading-relaxed">
                <li>Intuitive process creation and management.</li>
                <li>Dynamic form render based on BPMN defined condition and user inputs.</li>
                <li>Easy to use signature placement interface.</li>
              </ul>
            </section>
      
            <hr className="border-black/10 mb-8" />
      
            {/* Mobile-First Approval Interface */}
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">Mobile-First Approval Interface</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-text-primary leading-relaxed">
                <li>Developed dedicated mobile interface for approvers, provides quick access to review and approval functions.</li>
                <li>Approval workflow optimized for touch interfaces.</li>
                <li>Timeline visualization of document approval history.</li>
              </ul>
            </section>
      
            {/* Document Dashboard */}
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">Document Dashboard</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-text-primary leading-relaxed">
                <li>Mobile-first user experience for approvers, offers efficiently document tracking on mobile.</li>
                <li>Designed and developed an intuitive document management system.</li>
                <li>Role-specific views: showing relevant documents based on user role, provide clear separation between owned and assigned documents.</li>
              </ul>
              <img src={ImageDashboard} alt="eSign Dashboard" loading="lazy" className="w-full rounded-xl border border-black/[0.06] shadow-sm mt-4 object-cover" />
            </section>
      
            {/* Document Form */}
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">Document Form</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-text-primary leading-relaxed">
                <li>Auto generated input fields based on BPMN variables.</li>
                <li>Conditional input field display logic.</li>
                <li>Dynamic validation based on process requirement.</li>
                <li>Get approvers automatically based on BPMN process variables, user can preview and manual adjustment (if needed).</li>
              </ul>
            </section>
      
            {/* Signature Placement */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">Signature Placement System</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-text-primary leading-relaxed">
                <li>Multi-page PDF visualization.</li>
                <li>Drag-and-drop signature positioning.</li>
                <li>Page-specific signature tracking.</li>
              </ul>
              <img src={ImageSignature} alt="Signature Placement" loading="lazy" className="w-full rounded-xl border border-black/[0.06] shadow-sm mt-4 object-cover" />
            </section>
    </>
  );
}
