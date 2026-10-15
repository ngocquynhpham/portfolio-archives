export type PortfolioProject = {
  id: number;
  title: string;
  archiveTitle: string;
  archiveType: string;
  problem: string;
  solution: string;
  value: string;
  tech: string[];
  type: string;
  cardSubtitle: string;
  cardTitleLines: [string, string];
};

export const portfolioProjects: Record<number, PortfolioProject> = {
  1: {
    id: 1,
    title: "Lean Cafe Take-away",
    archiveTitle: "Lean Cafe Take-away (MVP)",
    archiveType: "Fullstack System",
    problem:
      "Traditional cafe ordering processes are bloated, leading to long queues and friction during peak hours.",
    solution:
      "Architected a lean, mobile-first web app utilizing FastAPI for asynchronous order queuing and React for a minimalist checkout experience.",
    value:
      "Aims to reduce order placement time by 40%, optimizing kitchen workflow and validating a lean business model.",
    tech: ["React", "FastAPI", "PostgreSQL", "System Architecture"],
    type: "MVP / Fullstack System",
    cardSubtitle: "MVP / Fullstack",
    cardTitleLines: ["Lean Cafe", "Take-away"],
  },
  2: {
    id: 2,
    title: "Business Toolkit",
    archiveTitle: "Business Management Toolkit",
    archiveType: "Internal Tool",
    problem:
      "Internal operations were scattered across multiple disjointed tools, slowing down daily workflows.",
    solution:
      "Spearheaded an intuitive, centralized dashboard built with modern React and a strict component design system.",
    value:
      "Transformed core operations, drastically reducing onboarding time for new staff and increasing daily task efficiency.",
    tech: ["ReactJS", "TypeScript", "UX Design", "Tailwind"],
    type: "Internal Tool",
    cardSubtitle: "Internal Tool / React",
    cardTitleLines: ["Business", "Toolkit"],
  },
  3: {
    id: 3,
    title: "UI Template Library",
    archiveTitle: "UI Template Library",
    archiveType: "SaaS Platform",
    problem:
      "Development time for new client features was too slow due to building UI components from scratch each time.",
    solution:
      "Developed a comprehensive library of 10+ responsive templates and modular components (tables, sliders).",
    value:
      "Accelerated time-to-market for SME platforms in Japan while ensuring cross-cultural UI/UX consistency.",
    tech: ["HTML/CSS", "JavaScript", "Responsive", "Performance"],
    type: "SaaS Platform",
    cardSubtitle: "SaaS Platform",
    cardTitleLines: ["UI Template", "Library"],
  },
  4: {
    id: 4,
    title: "HRM System",
    archiveTitle: "Human Resource Management",
    archiveType: "HRM System",
    problem:
      "HR departments struggled with manual contract handling and disjointed attendance tracking.",
    solution:
      "Built a feature-rich frontend for a Human Resource Management System with complex data visualization.",
    value:
      "Streamlined the entire employee lifecycle management, reducing manual HR workload significantly.",
    tech: ["React", "Data Viz", "Complex Logic"],
    type: "System",
    cardSubtitle: "",
    cardTitleLines: ["", ""],
  },
  5: {
    id: 5,
    title: "Running Tournament",
    archiveTitle: "Online Running Tournament",
    archiveType: "Event Platform",
    problem:
      "Lack of engaging platforms to promote community health events online.",
    solution:
      "Developed an online charity race platform featuring real-time tracking, gamification, and leaderboards.",
    value:
      "Boosted community participation and promoted a green lifestyle through engaging digital interaction.",
    tech: ["React", "Gamification", "Event Handling"],
    type: "Event Platform",
    cardSubtitle: "",
    cardTitleLines: ["", ""],
  },
};

export const archiveProjectIds = [1, 2, 3, 4, 5] as const;
