import ImageThermos from "../assets/title_img.png";
import ImageAdminPros from "../assets/admin-pros.png";
import ImageAdminPro from "../assets/amin-pro.png";
import ImageWarranty from "../assets/img_warranty.png";

export default function ThermosBody() {
  return (
    <>
      {/* Project info */}
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-neutral-600 mb-6">
              <span className="text-text-primary font-medium">
                Thermos — Ecommerce Store
              </span>
              <span className="hidden md:inline text-neutral-300">|</span>
              <span>Personal Project</span>
              <span className="hidden md:inline text-neutral-300">|</span>
              <span>Year: 2024</span>
              <span className="hidden md:inline text-neutral-300">|</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold">
                Pending
              </span>
            </div>
      
            {/* Description */}
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">
                Project Description
              </h2>
              <div className="space-y-4 text-sm md:text-base text-text-primary leading-relaxed">
                <p>
                  Thermos is a full-stack ecommerce platform built to explore
                  end-to-end product development — from storefront shopping experience
                  to a data-driven admin dashboard with real-time analytics. The
                  project covers the complete lifecycle: product catalog, order
                  management, discount systems, and visual business reporting.
                </p>
                <blockquote className="border-l-4 border-primary/40 pl-4 italic text-neutral-600">
                  An ecommerce platform is only as useful as the insights it gives
                  back — raw product and order data needs to become actionable
                  dashboards that drive decisions.
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
                  Designed and built a full admin dashboard with real-time visual
                  charts (Recharts) for revenue, order volume, inventory levels, and
                  product performance — turning raw data into actionable business
                  insights.
                </li>
                <li>
                  Implemented complete CRUD operations for Products, Categories,
                  Collections, Events, Discounts, Coupons, and Orders — handling
                  complex relational data flows between frontend and Django REST API.
                </li>
                <li>
                  Architected the React frontend with TypeScript and Mantine UI,
                  managing complex admin state across deeply nested forms, bulk
                  actions, and paginated data tables.
                </li>
                <li>
                  Built a responsive customer-facing storefront with product browsing,
                  cart management, discount code application, and order tracking.
                </li>
              </ul>
            </section>
      
            {/* Technical Highlights */}
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">
                Technical Highlights
              </h2>
              <div className="space-y-4 text-sm md:text-base text-text-primary leading-relaxed">
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Data visualization layer with Recharts — interactive line, bar,
                    and pie charts aggregating revenue trends, order distribution, and
                    inventory status across configurable time ranges.
                  </li>
                  <li>
                    Complex state management for admin workflows — handling concurrent
                    CRUD on products with variants, nested category trees, and
                    discount rules with date-range and quantity conditions.
                  </li>
                  <li>
                    Django REST integration with structured API contracts — paginated
                    list endpoints, filtered queries, and batch operations for
                    efficient data transfer on large product catalogs.
                  </li>
                  <li>
                    Dual-role architecture — cleanly separated admin and customer
                    experiences with role-based routing, shared data models, and
                    independent UI optimizations for each context.
                  </li>
                </ul>
                <p>
                  Thermos demonstrates the ability to build data-intensive admin
                  interfaces with real-time analytics alongside a polished consumer
                  experience — bridging the gap between backend data and frontend
                  decision-making tools.
                </p>
              </div>
            </section>
      
            {/* Gallery */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">
                Gallery
              </h2>
              <div className="space-y-4">
                <img
                  src={ImageThermos}
                  alt="Thermos – Hero"
                  loading="lazy"
                  className="w-full rounded-xl border border-black/[0.06] shadow-sm object-cover"
                />
                <img
                  src={ImageAdminPros}
                  alt="Thermos – Admin Products"
                  loading="lazy"
                  className="w-full rounded-xl border border-black/[0.06] shadow-sm object-cover"
                />
                <img
                  src={ImageAdminPro}
                  alt="Thermos – Admin Dashboard"
                  loading="lazy"
                  className="w-full rounded-xl border border-black/[0.06] shadow-sm object-cover"
                />
                <img
                  src={ImageWarranty}
                  alt="Thermos – Warranty"
                  loading="lazy"
                  className="w-full rounded-xl border border-black/[0.06] shadow-sm object-cover"
                />
              </div>
            </section>
    </>
  );
}
