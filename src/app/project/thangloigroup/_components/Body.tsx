import ImageInternal from "../assets/internal_pro.png";

export default function ThangloigroupBody() {
  return (
    <>
      <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-neutral-600 mb-6">
        <span className="inline-flex items-center gap-1.5">
          <span className="font-semibold text-neutral-700">Company:</span>
          <a
            href="https://thangloigroup.vn/"
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:underline font-medium"
          >
            Thang Loi Group
          </a>
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="font-semibold text-neutral-700">Industry:</span> Real Estate
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="font-semibold text-neutral-700">Timeline:</span> Aug 2021 – Oct 2024
        </span>
      </div>

      <div className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">
          Description
        </h2>
        <div className="space-y-4 text-sm md:text-base text-text-primary leading-relaxed">
          <p>
            Designed and developed end-to-end web applications using modern React with responsive UI and
            intuitive UX on the frontend, integrated with Django REST APIs on the backend to build efficient,
            scalable internal tools.
          </p>
          <p>
            These systems transformed and optimized core business operations across HR, CRM, document
            management, and more—enabling the organization to manage its resources, processes, and data from a
            single unified ecosystem.
          </p>
        </div>
      </div>

      <img
        src={ImageInternal}
        alt="Internal Business Systems"
        loading="lazy"
        className="w-full rounded-xl border border-black/[0.06] shadow-sm mb-8 object-cover"
      />
    </>
  );
}
