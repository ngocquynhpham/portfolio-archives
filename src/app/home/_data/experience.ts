export type ExperienceJob = {
  index: number;
  period: string;
  roleLines: [string, string];
  company: string;
  location: string;
  summary: string;
  bullets?: string[];
  tags: string[];
  last?: boolean;
};

export const EXPERIENCE_JOBS: ExperienceJob[] = [
  {
    index: 0,
    period: "Dec 2024 - Present",
    roleLines: ["Frontend", "Engineer"],
    company: "TechX VN (formerly Sungrove Tech)",
    location: "HCMC, Vietnam",
    summary:
      "Architecting responsive, mobile-first user interfaces. Bridging the gap between UI/UX design and technical execution to deliver high-performance web applications.",
    bullets: [
      "Developed a UI template library with 10+ responsive layouts, accelerating time-to-market for new features.",
      "Integrated templates into platforms supporting SMEs in Japan, ensuring cross-cultural UX standards.",
      "Enhanced system architecture by optimizing DOM rendering and reducing JS bundle sizes.",
    ],
    tags: ["Architecture", "JavaScript", "EChart.js", "Optimization"],
  },
  {
    index: 1,
    period: "Dec 2020 - Dec 2024",
    roleLines: ["Frontend", "Developer"],
    company: "Thang Loi Group",
    location: "HCMC, Vietnam",
    summary:
      "Spearheaded the frontend development for the Internal Business Management Toolkit using React and TypeScript, heavily focusing on optimizing internal operational workflows.",
    bullets: [
      "Researched and implemented a company-wide Design System, ensuring UI consistency and reducing redundant code.",
      "Built scalable event-focused web apps (booking platforms, digital magazines) to support marketing campaigns.",
      "Mentored 3+ junior developers, fostering an Agile and pragmatic engineering culture.",
    ],
    tags: ["ReactJS", "TypeScript", "Design System", "Agile"],
  },
  {
    index: 2,
    period: "Sep 2019 - Jun 2020",
    roleLines: ["Frontend", "Developer"],
    company: "FIOP JSC",
    location: "HCMC, Vietnam",
    summary:
      "Maintained and developed client websites, landing pages, and a mobile application for financial management.",
    tags: ["JavaScript", "NextJS", "React Native"],
    last: true,
  },
];
