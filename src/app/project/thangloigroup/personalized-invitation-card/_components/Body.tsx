import Image1 from "../assets/eThiep1.png";
import Image2 from "../assets/eThiep2.png";

export default function PersonalizedInvitationCardBody() {
  return (
    <>
      <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-neutral-600 mb-6">
              <span>
                🏢 Company:{" "}
                <a href="https://thangloigroup.vn/" target="_blank" rel="noreferrer" className="text-primary hover:underline font-medium">
                  Thang Loi Group
                </a>
              </span>
              <span>🤖 Internal name: E-Thiep</span>
              <span>📅 Year: 2021</span>
            </div>
      
            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">Description</h2>
              <p className="text-sm md:text-base text-text-primary leading-relaxed">
                The Personalized invitation card application, which personalizes and automatically sends invitations
                with QR codes for check-in, mini-games, and enhances the customer experience at sales events.
              </p>
            </div>
      
            {/* Gallery */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">Gallery</h2>
              <div className="space-y-4">
                <img src={Image1} alt="eThiep Preview 1" loading="lazy" className="w-full rounded-xl border border-black/[0.06] shadow-sm object-cover" />
                <img src={Image2} alt="eThiep Preview 2" loading="lazy" className="w-full rounded-xl border border-black/[0.06] shadow-sm object-cover" />
              </div>
            </section>
    </>
  );
}
