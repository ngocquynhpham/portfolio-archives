import Image1 from "../assets/CallCenter1.png";
import Image2 from "../assets/CallCenter_Report.png";
import ImageBaseCRM from "../assets/BaseCRM.png";

export default function CustomerServiceBody() {
  return (
    <>
      <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-neutral-600 mb-6">
              <span>
                🏢 Company:{" "}
                <a href="https://thangloigroup.vn/" target="_blank" rel="noreferrer" className="text-primary hover:underline font-medium">
                  Thang Loi Group
                </a>
              </span>
              <span>🗒️ Working remotely due to Covid-19 pandemic</span>
            </div>
      
            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">Description</h2>
              <p className="text-sm md:text-base text-text-primary leading-relaxed">
                A call center management system integrated with post-sales CRM, featuring real-time call handling,
                customer data management, and advanced workflow automation.
              </p>
            </div>
      
            {/* Achievements */}
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">Achievements</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-text-primary leading-relaxed">
                <li>Developed a real-time call management interface handling 100+ daily customer interactions.</li>
                <li>Built a field-level role-based access control system ensuring precise control over user permissions.</li>
                <li>Streamlined post-sale customers management workflow.</li>
              </ul>
            </section>
      
            <hr className="border-black/10 mb-8" />
      
            {/* Call Management */}
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">Call Management & Communication Interface</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-text-primary leading-relaxed">
                <li>Implemented WebSocket integration for instant call notifications.</li>
                <li>Context-aware popup system showing relevant customer information and call history.</li>
                <li>Created audio recording playback system.</li>
                <li>Agent presence management system with status tracking.</li>
                <li>A note-taking with auto-save and appointment scheduler that are included in call popup.</li>
              </ul>
            </section>
      
            <img src={Image1} alt="Call Center Interface" loading="lazy" className="w-full rounded-xl border border-black/[0.06] shadow-sm mb-8 object-cover" />
      
            {/* Administrative Features */}
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">Administrative Features</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-text-primary leading-relaxed">
                <li>Real-time agent status monitoring.</li>
                <li>Role-based access control.</li>
                <li>Field-level permission management.</li>
              </ul>
            </section>
      
            <img src={Image2} alt="Call Center Report" loading="lazy" className="w-full rounded-xl border border-black/[0.06] shadow-sm mb-8 object-cover" />
      
            {/* Customer Management */}
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">Customer Management</h2>
              <p className="text-sm md:text-base text-text-primary leading-relaxed mb-3">
                Built responsive layouts for complex customer data:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-text-primary leading-relaxed">
                <li>Comprehensive customer profile management.</li>
                <li>Transfer agreement tracking.</li>
                <li>Survey results management.</li>
                <li>Extended customer information.</li>
                <li>Customer care history.</li>
                <li>Complaint management.</li>
                <li>Advanced customer filtering system.</li>
              </ul>
            </section>
      
            <img src={ImageBaseCRM} alt="Base CRM" loading="lazy" className="w-full rounded-xl border border-black/[0.06] shadow-sm mb-8 object-cover" />
      
            {/* SMS Campaign */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">SMS Campaign Management System</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-text-primary leading-relaxed">
                <li>Template builder with preview.</li>
                <li>Campaign scheduling interface.</li>
              </ul>
            </section>
    </>
  );
}
