export type OrgType = "company" | "personal" | "freelance" | "outsource";

/** Shared shape for case-study shells, SEO, and listing cards */
export type Project = {
  title: string;
  tag: string;
  tech: string;
  role: string;
  summary: string;
  link: string;
  detailPath?: string;
};

export type ProjectDefinition = Project & {
  id: string;
  org: string;
  orgType: OrgType;
  year: string;
  /** Longer copy for the project archive list */
  description: string;
  /** TLG hub child platform */
  tlgPlatform?: boolean;
};

const defs: ProjectDefinition[] = [
  {
    id: "econwiki",
    detailPath: "/project/econwiki",
    title: "EconWiki Vietnamese Economics Dictionary",
    tag: "Personal Project",
    tech: "React, FastAPI, TypeScript, Admin dashboard",
    role: "Independent Full-stack Developer",
    summary:
      "Searchable Vietnamese economics dictionary with React frontend, FastAPI backend, and an admin dashboard for content management.",
    description:
      "Vietnamese economics dictionary app — React frontend, FastAPI backend, and admin dashboard for content management. Built independently with Cursor AI to accelerate development.",
    org: "ESG-Tech",
    orgType: "personal",
    year: "Dec 2025 – Present",
    link: "https://wiki.esg-tech.io.vn",
  },
  {
    id: "playground",
    detailPath: "/project/playground",
    title: "Frontend Playground & UI Archive",
    tag: "Aug 2017 – Present",
    tech: "HTML, CSS, JavaScript, UI Components, Web Experiments",
    role: "Independent Researcher & Developer",
    summary:
      "Personal archive of frontend experiments—from early CSS work to interactive layouts and UI components—hosted on GitHub Pages.",
    description:
      "A personal laboratory documenting my frontend journey since my student days—from first custom CSS buttons to complex interactive layouts, UI components, and research. A growing archive of daily learning on GitHub Pages.",
    org: "Personal Project",
    orgType: "personal",
    year: "Aug 2017 – Present",
    link: "https://ngocquynhpham.github.io",
  },
  {
    id: "portfolio-v0",
    title: "Portfolio — v0 (legacy)",
    tag: "Personal Project",
    tech: "HTML, CSS, JavaScript",
    role: "Developer",
    summary: "Previous iteration of this portfolio — preserved as a 2024 snapshot.",
    description:
      "Previous iteration of this portfolio — preserved as a snapshot of the 2024 layout and styling.",
    org: "Personal Project",
    orgType: "personal",
    year: "2024",
    link: "https://v0.ngocquynhpham.com/",
  },
  {
    id: "techx",
    detailPath: "/project/techx",
    title: "UI Template Library",
    tag: "TechX Viet Nam",
    tech: "HTML, CSS, JavaScript, ECharts.js, Swiper.js",
    role: "Developer",
    summary:
      "Library of 10+ responsive themes with modular UI components, integrated into two SaaS platforms for Japanese SMEs with a focus on SEO and performance.",
    description:
      "Library of 10+ responsive templates with modular components, integrated into two platforms to support SMEs in Japan.",
    org: "TechX Viet Nam",
    orgType: "company",
    year: "2023",
    link: "#",
  },
  {
    id: "lumitechie",
    detailPath: "/project/lumitechie",
    title: "Lumitechie Redesign",
    tag: "Freelance",
    tech: "ReactJS, TanStack, Tailwind CSS",
    role: "UI Design & Front-end Developer",
    summary:
      "Complete landing page redesign with mobile-first Tailwind, smoother interactions, and stronger performance and search visibility.",
    description:
      "Redesigned Lumitechie's landing page to modernize branding, enhance user experience, and improve performance.",
    org: "Freelance",
    orgType: "freelance",
    year: "2025",
    link: "https://lumitechie.com/",
  },
  {
    id: "baonhan-portfolio",
    detailPath: "/project/baonhan-portfolio",
    title: "Senior Business Analyst Portfolio",
    tag: "Freelance",
    tech: "HTML, CSS, JavaScript, GitHub Pages, i18n",
    role: "UI Design & Front-end Developer",
    summary:
      "Bilingual portfolio for a Senior BA — case study, TLG ecosystem map, skills, experience, and contact on GitHub Pages.",
    description:
      "Personal portfolio for Bùi Bảo Nhân (Senior Business Analyst, 10+ years) — PropOps Blueprint case study, VI/EN toggle, dark mode, and static deployment on GitHub Pages.",
    org: "Freelance — Bùi Bảo Nhân",
    orgType: "freelance",
    year: "2025",
    link: "https://baonhantk.github.io/",
  },
  {
    id: "thangloigroup",
    detailPath: "/project/thangloigroup",
    title: "Internal Business Systems",
    tag: "Thang Loi Group",
    tech: "React, TypeScript, Django REST, UI/UX Architecture",
    role: "Frontend Developer",
    summary:
      "Eight core enterprise platforms—HRM, CRM, e-sign, documents, assets, and more—built as a unified React ecosystem with Django REST backends.",
    description:
      "8 core enterprise platforms — HRM, CRM, E-Signature, Document & Asset Management, and more. A unified digital ecosystem for the entire organization.",
    org: "Thang Loi Group",
    orgType: "company",
    year: "2021 – 2024",
    link: "#",
  },
  {
    id: "hrm",
    detailPath: "/project/thangloigroup/hrm",
    title: "Human Resource Management - HRM",
    tag: "Thang Loi Group",
    tech: "ReactJS, TypeScript, React Syncfusion UI, Tailwind",
    role: "Design & Developer",
    summary:
      "Human Resource Management System for employee lifecycle, contracts, attendance, and payroll.",
    description:
      "Feature-rich Human Resource Management System that streamlines employee lifecycle management, contract handling, attendance tracking, payroll processing, etc.",
    org: "Thang Loi Group",
    orgType: "company",
    year: "2022 – 2024",
    link: "#",
    tlgPlatform: true,
  },
  {
    id: "e-sign",
    detailPath: "/project/thangloigroup/e-sign",
    title: "E-Signature & Workflow Automation Platform",
    tag: "Thang Loi Group",
    tech: "ReactJS, TypeScript, React Syncfusion UI, React-PDF, Drag and Drop",
    role: "Design & Developer",
    summary: "BPMN workflow automation with dynamic approval flows and digital signatures.",
    description:
      "Business process automation platform that turns static BPMN workflows into dynamic approval flows with digital signatures.",
    org: "Thang Loi Group",
    orgType: "company",
    year: "2022 – 2023",
    link: "#",
    tlgPlatform: true,
  },
  {
    id: "goal-and-task-management",
    detailPath: "/project/thangloigroup/goal-and-task-management",
    title: "Goal & Task Management",
    tag: "Thang Loi Group",
    tech: "ReactJS, TypeScript, React Syncfusion UI, Tailwind, RechartJS",
    role: "Design & Developer",
    summary:
      "Meeting-to-execution system for organizational goals, task delegation, and progress tracking.",
    description:
      "Meeting-to-execution workflow system that manages organizational goals, tasks delegation, and progress tracking with hierarchical task management.",
    org: "Thang Loi Group",
    orgType: "company",
    year: "2022 – 2023",
    link: "#",
    tlgPlatform: true,
  },
  {
    id: "doc-management",
    detailPath: "/project/thangloigroup/doc-management",
    title: "Document Management",
    tag: "Thang Loi Group",
    tech: "ReactJS, TypeScript, React Syncfusion UI, React-PDF, Rechart, Tailwind",
    role: "Design & Developer",
    summary:
      "Document management with scheduled publishing, distribution, and analytics tied to e-sign workflows.",
    description:
      "Document management system integrated with E-Signature & Workflow platform, featuring scheduled publishing, targeted distribution, and advanced analytics.",
    org: "Thang Loi Group",
    orgType: "company",
    year: "2022 – 2023",
    link: "#",
    tlgPlatform: true,
  },
  {
    id: "assets-management",
    detailPath: "/project/thangloigroup/assets-management",
    title: "Asset Management",
    tag: "Thang Loi Group",
    tech: "HTML, CSS, JS, Django Template, QR Scanner",
    role: "Design & Developer",
    summary: "QR-based asset tracking with lifecycle management and mobile-friendly operations.",
    description:
      "Asset management solution featuring QR-based tracking, detailed asset lifecycle management, and mobile-responsive operations for enterprise-wide asset control and monitoring.",
    org: "Thang Loi Group",
    orgType: "company",
    year: "2022",
    link: "#",
    tlgPlatform: true,
  },
  {
    id: "customer-service",
    detailPath: "/project/thangloigroup/customer-service",
    title: "Call Center & CRM Integration Platform",
    tag: "Thang Loi Group",
    tech: "HTML, CSS, JavaScript, Django Template, WebSocket, Call Center API",
    role: "Design & Developer",
    summary:
      "Call center and post-sales CRM with real-time handling, customer data, and workflow automation.",
    description:
      "Call center management system integrated with post-sales CRM, featuring real-time call handling, customer data management, and advanced workflow automation.",
    org: "Thang Loi Group",
    orgType: "company",
    year: "2022 – 2024",
    link: "#",
    tlgPlatform: true,
  },
  {
    id: "digital-library",
    detailPath: "/project/thangloigroup/digital-library",
    title: "Internal Digital Library",
    tag: "Thang Loi Group",
    tech: "ReactJS, TypeScript, Video.js, PDF.js, Tailwind",
    role: "Design & Developer",
    summary: "Internal library with streaming video, documents, e-books, and cross-device access.",
    description:
      "A digital library with streaming video feature, document management, e-book, and cross-device accessibility.",
    org: "Thang Loi Group",
    orgType: "company",
    year: "2022",
    link: "#",
    tlgPlatform: true,
  },
  {
    id: "personalized-invitation-card",
    detailPath: "/project/thangloigroup/personalized-invitation-card",
    title: "Personalized Invitation Card",
    tag: "Thang Loi Group",
    tech: "HTML, CSS, JavaScript",
    role: "Developer",
    summary: "Personalized event invitations with QR check-in and mini-games for sales events.",
    description:
      "Personalizes and automatically sends invitations with QR codes for check-in, mini-games, and enhances the customer experience at sales events.",
    org: "Thang Loi Group",
    orgType: "company",
    year: "2021",
    link: "#",
    tlgPlatform: true,
  },
  {
    id: "thermos",
    detailPath: "/project/thermos",
    title: "Thermos — Ecommerce Store",
    tag: "Personal Project",
    tech: "ReactJS, TypeScript, Tailwind CSS, Mantine UI, Django, Recharts",
    role: "Analyst, Design & Developer",
    summary:
      "Full ecommerce platform with admin dashboard, real-time revenue and inventory charts, product management, and customer storefront.",
    description:
      "End-to-end ecommerce site with admin dashboard, product management, discount system, and smooth shopping experience — built with React, Tailwind, and Django.",
    org: "Personal Project",
    orgType: "personal",
    year: "2024",
    link: "#",
  },
  {
    id: "nab",
    detailPath: "/project/nab",
    title: "Online Running Tournament",
    tag: "Outsource Project",
    tech: "HTML, CSS, JavaScript, Strava API",
    role: "UI Design & Front-end Developer",
    summary:
      "Charity running tournament site with Strava integration, leaderboards, and live performance tracking.",
    description:
      "Online charity running tournament with Strava API integration, dynamic leaderboards, and real-time performance tracking.",
    org: "Outsource — Nam A Bank",
    orgType: "outsource",
    year: "2024",
    link: "https://chayvituonglaixanh.com.vn/",
  },
  {
    id: "tsn",
    detailPath: "/project/tsn",
    title: "Tan Son Nhat International Airport — Customer Rating System",
    tag: "Outsource Project",
    tech: "ReactJS, TypeScript, React Syncfusion UI",
    role: "Front-end Developer",
    summary:
      "Airport customer feedback with QR scanning, flight info, indoor navigation, and notifications.",
    description:
      "Airport-wide customer feedback system with QR scanning, real-time flight info, indoor navigation, and automated notifications.",
    org: "Outsource",
    orgType: "outsource",
    year: "2022",
    link: "https://tia.wincore.asia/customer-review",
  },
];

export const projectsById: Record<string, ProjectDefinition> = Object.fromEntries(
  defs.map((d) => [d.id, d]),
);

/** Homepage featured column order */
export const FEATURED_PROJECT_IDS = [
  "techx",
  "thangloigroup",
  "lumitechie",
  "econwiki",
  "playground",
  "thermos",
] as const;

/** Full archive list order (All Projects page) */
export const ARCHIVE_PROJECT_IDS = [
  "econwiki",
  "playground",
  "portfolio-v0",
  "techx",
  "lumitechie",
  "baonhan-portfolio",
  "thangloigroup",
  "hrm",
  "e-sign",
  "goal-and-task-management",
  "doc-management",
  "assets-management",
  "customer-service",
  "digital-library",
  "personalized-invitation-card",
  "thermos",
  "nab",
  "tsn",
] as const;

/** TLG hub platform links order */
export const TLG_PLATFORM_IDS = [
  "hrm",
  "e-sign",
  "goal-and-task-management",
  "doc-management",
  "customer-service",
  "assets-management",
  "digital-library",
  "personalized-invitation-card",
] as const;

export function toProject(def: ProjectDefinition): Project {
  return {
    title: def.title,
    tag: def.tag,
    tech: def.tech,
    role: def.role,
    summary: def.summary,
    link: def.link,
    detailPath: def.detailPath,
  };
}

export function getProjectById(id: string): ProjectDefinition | undefined {
  return projectsById[id];
}

export function projectForPage(id: string): Project {
  const def = getProjectById(id);
  if (!def) {
    throw new Error(`Unknown project id: ${id}`);
  }
  return toProject(def);
}

export function getFeaturedProjects(): ProjectDefinition[] {
  return FEATURED_PROJECT_IDS.map((id) => projectsById[id]).filter(Boolean);
}

export function getArchiveProjects(): ProjectDefinition[] {
  return ARCHIVE_PROJECT_IDS.map((id) => projectsById[id]).filter(Boolean);
}

export function getTlgPlatformProjects(): ProjectDefinition[] {
  return TLG_PLATFORM_IDS.map((id) => projectsById[id]).filter(Boolean);
}

/** URL segment(s) after `/project/` for each case study (from `detailPath`). */
export function getCaseStudyRouteSlugs(): string[] {
  const slugs = defs
    .filter((d): d is ProjectDefinition & { detailPath: string } => Boolean(d.detailPath))
    .map((d) => d.detailPath.replace(/^\/project\//, ""));

  return [...slugs].sort((a, b) => {
    const depth = b.split("/").length - a.split("/").length;
    return depth !== 0 ? depth : a.localeCompare(b);
  });
}

export function getOtherFeaturedProjects(
  currentDetailPath: string | undefined,
  limit = 3,
): Project[] {
  return FEATURED_PROJECT_IDS.filter((id) => {
    const p = projectsById[id];
    return p.detailPath && p.detailPath !== currentDetailPath;
  })
    .slice(0, limit)
    .map((id) => toProject(projectsById[id]));
}

export type ArchiveListItem = {
  title: string;
  org: string;
  orgType: OrgType;
  year: string;
  description: string;
  link: string;
};

export function getArchiveListItems(): ArchiveListItem[] {
  return getArchiveProjects().map((p) => ({
    title: p.title,
    org: p.org,
    orgType: p.orgType,
    year: p.year,
    description: p.description,
    link: p.detailPath ?? p.link,
  }));
}
