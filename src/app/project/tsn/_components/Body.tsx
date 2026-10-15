import ImageTIA from "../assets/TIA.png";

export default function TsnBody() {
  return (
    <>
      <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-neutral-600 mb-6">
              <span>
                🌐{" "}
                <a
                  href="https://tia.wincore.asia/customer-review"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  tia.wincore.asia/customer-review
                </a>
              </span>
              <span>📅 Duration: 2 months (2022)</span>
            </div>
      
            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">
                Project Description
              </h2>
              <div className="space-y-4 text-sm md:text-base text-text-primary leading-relaxed">
                <p>
                  Gathering customer feedback via QR code scanning throughout the
                  airport. Integrating with the airport's API, the app provides
                  real-time flight info, indoor navigation, and automated
                  notifications to improve traveler satisfaction.
                </p>
                <blockquote className="border-l-4 border-primary/40 pl-4 italic text-neutral-600">
                  The project has been rolled out at Tan Son Nhat International
                  Airport.
                </blockquote>
              </div>
            </div>
      
            {/* Customer-Facing Features */}
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">
                Customer-Facing Features
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-text-primary leading-relaxed">
                <li>
                  Feedback system with multi-media support (text, photos, voice
                  recording).
                </li>
                <li>
                  Location-aware QR scanning system for service feedback collection.
                </li>
                <li>Real-time flight information display.</li>
                <li>
                  Interactive indoor navigation with integration to flight information
                  systems.
                </li>
              </ul>
            </section>
      
            {/* Admin Interface */}
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">
                Admin Interface
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-text-primary leading-relaxed">
                <li>Role-based access control system for secure management.</li>
                <li>
                  Automated email notification workflow with customizable templates.
                </li>
                <li>
                  Interactive analytics dashboard for temporal data visualization.
                </li>
              </ul>
            </section>
      
            {/* Achievements */}
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">
                Achievements
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-text-primary leading-relaxed">
                <li>Successfully integrated with airport API infrastructure.</li>
                <li>
                  Implemented responsive design supporting hundreds of users daily.
                </li>
                <li>
                  Reduced customer service response time through automated
                  notification system.
                </li>
              </ul>
            </section>
      
            {/* Gallery */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">
                Gallery
              </h2>
              <a
                href="https://tia.wincore.asia/customer-review"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={ImageTIA}
                  alt="Tan Son Nhat Airport – Customer Rating"
                  loading="lazy"
                  className="w-full rounded-xl border border-black/[0.06] shadow-sm object-cover hover:shadow-md transition-shadow"
                />
              </a>
              <p className="text-xs italic text-neutral-500 mt-3">
                Have a smooth and pleasant flight ✈️
              </p>
            </section>
    </>
  );
}
