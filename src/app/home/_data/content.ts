export const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export const heroContent = {
  availabilityLabel: "Available for work",
  titleLine1: "Frontend",
  engineerLabel: "Engineer.",
  bio:
    "Frontend Engineer with 4+ years of experience building performant, user-focused web applications — fast, accessible, and easy to use. Along the way, studying UI/UX design helped me think about how something feels, not just how it works. I've been expanding into Python backend and diving into AI - why stop at the frontend when there's so much more to build?",
} as const;

/** Items shown in the marquee; duplicated in the UI for a seamless loop. */
export const marqueeItems = [
  "React",
  "TypeScript",
  "ECharts.js",
  "SaaS UI",
  "FastAPI",
  "Design systems",
  "REST APIs",
  "Performance & SEO",
] as const;

export const aboutContent = {
  titleBefore: "Beyond the ",
  titleAccent: "Code.",
  intro:
    "I don't just build UI — I solve business problems through data. With a certificate in user interface and user experience design and a background in business administration, I bridge the gap between complex datasets and intuitive interfaces that drive decisions.",
  skills: [
    "Data Visualization & ECharts.js",
    "Design System Architecture",
    "Performance & SEO Optimization",
    "Full-stack with Python / FastAPI",
  ],
  education: [
    {
      lines: ["Business Administration,", "National Economics University, Distance Learning"],
    },
    {
      lines: ["Information Technology", "University of Science, VNUHCM"],
    },
  ],
  certifications: [
    "User Interface and User Experience Design — DIA Academy",
    "Google Gemini Certified Educator",
  ],
} as const;

export type ExperienceHighlight = {
  title: string;
  description: string;
};

export type ExperienceEntry = {
  roleTitle: string;
  company: string;
  companySubtitle?: string;
  website?: { href: string; label: string };
  showcase: { path: string; displayUrl: string };
  period: string;
  location: string;
  intro: string;
  highlightsHeading: string;
  highlights: ExperienceHighlight[];
  tags: string[];
};

export const experienceSection = {
  titleLine1: "Professional",
  titleLine2: "Experience",
  entries: [
    {
      roleTitle: "Web Engineer",
      company: "TechX Vietnam",
      companySubtitle: "Subsidiary of Sungrove Inc., Japan",
      website: { href: "https://tech-x.vn", label: "tech-x.vn" },
      showcase: {
        path: "/project/techx",
        displayUrl: "ngocquynhpham.com/project/techx",
      },
      period: "Dec 2024 – Mar 2026",
      location: "Ho Chi Minh City",
      intro:
        "I worked on the frontend of two SaaS platforms (Easier and It'szai) — pairing with a Japanese design team into production-ready interfaces within Agile/Scrum sprints, building reusable layouts and dashboards that stayed consistent across both products.",
      highlightsHeading: "What that looked like",
      highlights: [
        {
          title: "UI infrastructure",
          description:
            "A modular template library with 10+ responsive layouts, so teams could ship new features roughly 30% faster and users saw the same patterns whether they opened Easier or It'szai.",
        },
        {
          title: "Data visualization",
          description:
            "Configurable ECharts dashboards built as reusable templates, handling dynamic data inputs without a custom implementation every time.",
        },
        {
          title: "Performance & SEO",
          description:
            "Vanilla JS with zero framework overhead for fast load times, plus semantic HTML and structured data optimized for Japanese local search.",
        },
      ],
      tags: ["HTML", "CSS", "JavaScript", "ECharts.js", "SEO", "Agile / Scrum"],
    },
    {
      roleTitle: "Frontend Developer",
      company: "Thang Loi Group",
      website: { href: "https://thangloigroup.vn", label: "thangloigroup.vn" },
      showcase: {
        path: "/project/thangloigroup",
        displayUrl: "ngocquynhpham.com/project/thangloigroup",
      },
      period: "Aug 2021 – Oct 2024",
      location: "Ho Chi Minh City",
      intro:
        "At Thang Loi Group, I designed and built internal platforms - HR, E-signature approval workflows, CRM, asset tracking and more - replacing manual, paper-based processes with systems people actually relied on daily. The organization had a connected digital ecosystem where approvals ran automatically, data was centralized, and people could do their jobs without the paperwork.",
      highlightsHeading: "What that looked like",
      highlights: [
        {
          title: "Design system",
          description:
            "Built a shared component library, templates, and documentation that standardized the look, feel, and patterns across all platforms.",
        },
        {
          title: "Complex interactions",
          description:
            "Approval flows that adapted to workflow state, forms that generated themselves from business variables, drag-and-drop PDF annotation, and a WYSIWYG editor with live variable injection — interactions where the rules were complex but the experience stayed clear.",
        },
        {
          title: "Data at scale",
          description:
            "Analytics dashboards, dynamic reporting, and real-time status tracking across multiple domains — designed for decision-making, not just data display.",
        },
        {
          title: "Role-based",
          description:
            "The platform showed different layouts, and different actions depending on who was signed in. Strict business rules that still felt intuitive to use.",
        },
        {
          title: "Mentorship",
          description:
            "Guided 3 frontend interns from fundamentals to shipping real features, covering HTML, CSS, JavaScript, and Git workflows.",
        },
      ],
      tags: ["React", "TypeScript", "JavaScript (ES6+)", "Design System", "Git", "Django REST"],
    },
  ] satisfies ExperienceEntry[],
} as const;
