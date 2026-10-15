import Image1 from "../assets/QLTS.png";

export default function AssetsManagementBody() {
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
                Asset management solution featuring QR-based tracking, detailed asset lifecycle management,
                and mobile-responsive operations for enterprise-wide asset control and monitoring.
              </p>
            </div>
      
            <img src={Image1} alt="Asset Management" loading="lazy" className="w-full rounded-xl border border-black/[0.06] shadow-sm mb-8 object-cover" />
      
            {/* Achievements */}
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">Achievements</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-text-primary leading-relaxed">
                <li>Built a mobile interface that reduced asset tracking time by 75%.</li>
                <li>QR scanning system improving asset operation accuracy and conveniently.</li>
                <li>Created responsive data grids handling 3,000+ assets with advanced filtering.</li>
              </ul>
            </section>
      
            {/* Project Highlight */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">Project Highlight</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-text-primary leading-relaxed">
                <li>QR code-based asset tracking system.</li>
                <li>Mobile interface for QR scanning and asset operations.</li>
                <li>Advanced asset lifecycle workflows with comprehensive asset operations (allocation, transfer, recovery).</li>
                <li>Real-time asset status tracking.</li>
                <li>Email notification system for asset operations.</li>
              </ul>
            </section>
    </>
  );
}
