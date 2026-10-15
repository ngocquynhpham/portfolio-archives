type ProjectType = { name: string; id: number };

type ProjectRegistryEntry = {
  title: string;
  description: string;
  /** Folder path under `src/app/`, e.g. `project/techx` → URL `/project/techx` */
  detailPath: string;
  type?: ProjectType;
  /** Listed on home “Selected Project” */
  featured?: boolean;
  homeOrder?: number;
};

export function projectUrl(detailPath: string): string {
  return `/${detailPath.replace(/^\//, "")}`;
}

export const projectsRegistry: ProjectRegistryEntry[] = [
  {
    title: "UI Template Library for SaaS Platforms",
    description:
      "Library of 10+ responsive templates with modular components, integrated into two platforms to support SMEs in Japan.",
    detailPath: "project/techx",
    type: { name: "TechX Viet Nam", id: 1 },
    featured: true,
    homeOrder: 1,
  },
  {
    title: "Internal Business Management Toolkit",
    description:
      "Built using modern React for an efficient, user-friendly frontend combined with an intuitive UX to transform and optimize core business operations, enabling the organization to manage its resources, processes, and data more effectively.",
    detailPath: "project/thangloigroup",
    type: { name: "Thang Loi Group", id: 1 },
    featured: true,
    homeOrder: 2,
  },
  {
    title: "Lumitechie Website Redesign",
    description:
      "Redesigned the company website to improve branding consistency, responsive layout, and SEO performance.",
    detailPath: "project/lumitechie",
    type: { name: "Freelance", id: 4 },
    featured: true,
    homeOrder: 3,
  },
  {
    title: "Human Resource Management - HRM",
    description:
      "Feature-rich Human Resource Management System that streamlines employee lifecycle management, contract handling, attendance tracking, payroll processing, etc.",
    detailPath: "project/thangloigroup/hrm",
    type: { name: "Thang Loi Group", id: 1 },
    featured: true,
    homeOrder: 4,
  },
  {
    title: "Online Running Tournament 🪴",
    description:
      "It is an online charity race, promoting a green lifestyle in the community.",
    detailPath: "project/nab",
    type: { name: "Outsource Project", id: 3 },
    featured: true,
    homeOrder: 5,
  },
  {
    title: "E-Signature & Workflow Automation Platform",
    description:
      "Business process automation platform that turns static BPMN workflows into dynamic approval flows with digital signatures.",
    detailPath: "project/thangloigroup/e-sign",
    type: { name: "Thang Loi Group", id: 1 },
  },
  {
    title: "Goal & Task Management",
    description:
      "Meeting-to-execution workflow system that manages organizational goals, tasks delegation, and progress tracking with hierarchical task management.",
    detailPath: "project/thangloigroup/goal-and-task-management",
    type: { name: "Thang Loi Group", id: 1 },
  },
  {
    title: "Document Management",
    description:
      "Document management system integrated with E-Signature & Workflow platform, featuring scheduled publishing, targeted distribution, and advanced analytics.",
    detailPath: "project/thangloigroup/doc-management",
    type: { name: "Thang Loi Group", id: 1 },
  },
  {
    title: "Asset Management",
    description:
      "Asset management solution featuring QR-based tracking, detailed asset lifecycle management, and mobile-responsive operations for enterprise-wide asset control and monitoring.",
    detailPath: "project/thangloigroup/assets-management",
    type: { name: "Thang Loi Group", id: 1 },
  },
  {
    title: "Call Center & CRM Integration Platform",
    description:
      "Call center management system integrated with post-sales CRM, featuring real-time call handling, customer data management, and advanced workflow automation.",
    detailPath: "project/thangloigroup/customer-service",
    type: { name: "Thang Loi Group", id: 1 },
  },
  {
    title: "Internal Digital Library",
    description:
      "A digital library with streaming video feature, document management, e-book, and cross-device accessibility",
    detailPath: "project/thangloigroup/digital-library",
    type: { name: "Thang Loi Group", id: 1 },
  },
  {
    title: "Personalized invitation card",
    description:
      "The Personalized invitation card application, which personalizes and automatically sends invitations with QR codes for check-in, mini-games, and enhances the customer experience at sales events.",
    detailPath: "project/thangloigroup/personalized-invitation-card",
    type: { name: "Thang Loi Group", id: 1 },
  },
  {
    title: "Thermos - Ecommerce Store",
    description:
      "Back in 2019, I began learning about websites, HTML/CSS, and JavaScript. I built a website to sell watches, which has now been upgraded to Thermos -  an Ecommerce site selling thermos flasks.",
    detailPath: "project/thermos",
    type: { name: "Personal Project", id: 2 },
  },
  {
    title: "Tan Son Nhat International Airport Customer Rating System",
    description:
      "It collects customer feedback (rated 1-5 stars) on service quality at the airport, with options for text, audio, and video submissions.",
    detailPath: "project/tsn",
    type: { name: "Outsource Project", id: 3 },
  },
];

export const featuredProjects = projectsRegistry
  .filter((p) => p.featured)
  .sort((a, b) => (a.homeOrder ?? 0) - (b.homeOrder ?? 0));

export const thangLoiGroupProjects = [
  "Human Resource Management - HRM",
  "E-Signature & Workflow Automation Platform",
  "Goal & Task Management",
  "Document Management",
  "Call Center & CRM Integration Platform",
  "Asset Management",
  "Internal Digital Library",
  "Personalized invitation card",
].map((title) => {
  const entry = projectsRegistry.find((p) => p.title === title);
  if (!entry) throw new Error(`Missing registry entry: ${title}`);
  return {
    title: entry.title,
    link_to: projectUrl(entry.detailPath),
  };
});
