import Image1 from "../assets/diagram.png";
import Image2 from "../assets/HRM.png";
import Image3 from "../assets/Workshift.png";

export default function HrmBody() {
  return (
    <>
      <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-neutral-600 mb-6">
              <span>
                🏢 Company:{" "}
                <a href="https://thangloigroup.vn/" target="_blank" rel="noreferrer" className="text-primary hover:underline font-medium">
                  Thang Loi Group
                </a>
              </span>
              <span>🎗️ Team-size: ~5 – 10</span>
            </div>
      
            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">
                Description
              </h2>
              <p className="text-sm md:text-base text-text-primary leading-relaxed">
                A feature-rich Human Resource Management System that streamlines employee lifecycle management,
                contract handling, attendance tracking, payroll processing, etc. This project supports multiple
                companies and includes role-based access control for enhanced security. With a user base of over
                200 employees across various organizations, this system has significantly reduced HR
                administrative tasks and improved overall efficiency.
              </p>
            </div>
      
            <img src={Image1} alt="HRM Diagram" loading="lazy" className="w-full rounded-xl border border-black/[0.06] shadow-sm mb-8 object-cover" />
      
            {/* Key Learning */}
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">Key Learning</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-text-primary leading-relaxed">
                <li>Created a design system for enterprise-level application, including design principles, components, and templates for consistent and scalable UX across all products.</li>
                <li>Building enterprise-scale HR systems with complex business logic, balancing flexibility with maintainability while ensuring high performance across multiple companies and user roles.</li>
                <li>Paginated data grid for efficient loading and display of large datasets.</li>
                <li>Advanced filtering options to quickly find specific employees, contracts, etc.</li>
              </ul>
            </section>
      
            {/* Achievements */}
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">Achievements</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-text-primary leading-relaxed">
                <li>Successfully deployed across multiple companies with 200+ users.</li>
                <li>Automated payroll processing, reducing time and effort on manual calculations.</li>
                <li>Improved attendance accuracy and flexibility by integrating GPS and facial recognition technology.</li>
                <li>Minimized HR administrative workload.</li>
              </ul>
            </section>
      
            <hr className="border-black/10 mb-8" />
      
            {/* Employee Personal Portal */}
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">Employee Personal Portal</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-text-primary leading-relaxed">
                <li>Designed and developed mobile-first employee portal, ensuring optimal experience across all devices.</li>
                <li>Integrated biometric check-in functionality with geolocation verification for accurate attendance tracking.</li>
                <li>Implemented secure personal information management features including profile updates, attendance history viewing, leave balance tracking and salary.</li>
              </ul>
            </section>
      
            <hr className="border-black/10 mb-8" />
      
            {/* Employee Management */}
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">Employee Management</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-text-primary leading-relaxed">
                <li>Comprehensive employee profile management with multi-position assignment feature.</li>
                <li>Any changes to employee information must be reviewed and approved by HR before being finalized.</li>
              </ul>
            </section>
      
            <hr className="border-black/10 mb-8" />
      
            {/* Contract Management */}
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">Contract Management</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-text-primary leading-relaxed">
                <li>Company-specific contract and addendum creation.</li>
              </ul>
            </section>
      
            <hr className="border-black/10 mb-8" />
      
            {/* Payroll Management */}
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">Payroll Management</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-text-primary leading-relaxed">
                <li>Customizable salary template configuration: Company-specific salary rules; Employee-specific salary rules; System variable integration; Custom formula support.</li>
                <li>Manual salary detail adjustment.</li>
                <li>Generate dynamic column based on payroll formula.</li>
                <li>Added column-level permission system for sensitive data.</li>
                <li>HR department set supported employee-related password rule for month (for example birth date, employee ID formats).</li>
                <li>Viewing and salary confirmation.</li>
              </ul>
            </section>
      
            <hr className="border-black/10 mb-8" />
      
            {/* Work Shift Management */}
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">Work Shift Management</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-text-primary leading-relaxed">
                <li>Flexible shift configuration.</li>
                <li>User-friendly week/month view toggle.</li>
                <li>
                  Multi-level shift configuration:
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Company-wide shift templates.</li>
                    <li>Department-based assignments.</li>
                    <li>Individual schedule customization.</li>
                  </ul>
                </li>
              </ul>
              <img src={Image3} alt="Work Shift" loading="lazy" className="w-full rounded-xl border border-black/[0.06] shadow-sm mt-4 object-cover" />
            </section>
      
            <hr className="border-black/10 mb-8" />
      
            {/* Attendance & Time Management */}
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">Attendance & Time Management</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-text-primary leading-relaxed">
                <li>Monthly view, color-coded work status visualization.</li>
                <li>Automated attendance management.</li>
                <li>
                  Quick summary statistics:
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Unauthorized absences.</li>
                    <li>Permitted leaves.</li>
                    <li>Late check-in / early checkout.</li>
                    <li>Missed check-ins count.</li>
                  </ul>
                </li>
                <li>Mobile-based facial recognition with GPS validation.</li>
                <li>Scheduling attendance monthly locking.</li>
              </ul>
            </section>
      
            <hr className="border-black/10 mb-8" />
      
            {/* Leave Management */}
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">Leave Management & Overtime Request System</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-text-primary leading-relaxed">
                <li>Dynamic request workflow: Multiple leave type support (vacation, sick leave, maternity); Overtime work hours request handling.</li>
              </ul>
            </section>
      
            {/* Gallery */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">Gallery</h2>
              <p className="text-xs italic text-neutral-500 mb-3">* Provided if required.</p>
              <img src={Image2} alt="HRM Gallery" loading="lazy" className="w-full rounded-xl border border-black/[0.06] shadow-sm mb-2 object-cover" />
              <p className="text-xs italic text-neutral-500">
                The visuals have been modified compared to the original software, including color schemes, special business functionalities, etc.
              </p>
            </section>
    </>
  );
}
