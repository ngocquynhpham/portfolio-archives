import Image2 from "../assets/report.png";

export default function GoalAndTaskManagementBody() {
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
                A comprehensive meeting-to-execution workflow system that manages organizational goals, tasks delegation,
                and progress tracking with hierarchical task management.
              </p>
            </div>
      
            {/* Key Features */}
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">Key Features</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-text-primary leading-relaxed">
                <li>Meeting minutes management with integrated task creation and team assignment.</li>
                <li>Hierarchical task management system.</li>
                <li>Progress and cost tracking.</li>
                <li>Real-time status monitoring with automated deadline alerts through email.</li>
                <li>Role-based task management (Chair, Secretary, Assigner, Assignee, Supporter).</li>
              </ul>
            </section>
      
            {/* Achievements */}
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">Achievements</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-text-primary leading-relaxed">
                <li>Streamlined task management workflow through intuitive UI/UX design, support 100+ users.</li>
                <li>Reduced meeting frequency through automated tracking and notifications.</li>
              </ul>
            </section>
      
            <hr className="border-black/10 mb-8" />
      
            {/* Meeting Management */}
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">Meeting Management</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-text-primary leading-relaxed">
                <li>Creating meeting minutes with objectives and task delegation.</li>
                <li>Participant management and role assignment.</li>
              </ul>
            </section>
      
            <hr className="border-black/10 mb-8" />
      
            {/* Task Management Features */}
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">Task Management Features</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-text-primary leading-relaxed">
                <li>Designed an interactive hierarchical task view supporting multi-level task relationships.</li>
                <li>Progress tracking and cost monitoring.</li>
                <li>Sub-task creation feature.</li>
                <li>Task's to-do list.</li>
                <li>Assign Supporter.</li>
                <li>Interfaces for managing task changes: Pending requests, Extend deadline, Change Assignee, Cancel task.</li>
                <li>Task progression report.</li>
              </ul>
            </section>
      
            <img src={Image2} alt="Goal and Task Report" loading="lazy" className="w-full rounded-xl border border-black/[0.06] shadow-sm mb-8 object-cover" />
      
            <hr className="border-black/10 mb-8" />
      
            {/* Status Tracking System */}
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-4">Status Tracking System</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-text-primary leading-relaxed">
                <li>Developed status tracking system with visual indicators.</li>
                <li>Custom status workflow: Received → In Progress → Near Deadline → Completed → Finalized.</li>
                <li>Real-time status updates across all user interfaces.</li>
              </ul>
            </section>
      
            <hr className="border-black/10 mb-8" />
      
            <section className="mb-4">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-text-primary mb-2">
                UI Based on User Roles
              </h2>
              <p className="text-sm md:text-base text-text-primary leading-relaxed">
                Chair, Secretary, Assigner, Assignee, Support.
              </p>
            </section>
    </>
  );
}
