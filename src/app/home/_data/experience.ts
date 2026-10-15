export type ExperienceEntry = {
  title: string;
  description: string;
  link_to?: string;
  company?: string;
  time?: string;
  skills?: string[];
};

export const experienceEntries: ExperienceEntry[] = [
  {
    title: "Frontend Engineer",
    description: `
      <ul>
        <li>Engineered responsive, mobile-first user interfaces using HTML, CSS, and JavaScript, ensuring seamless cross-browser compatibility.</li>
        <li>Created interactive UI components and dynamic data visualizations with ECharts.js and Swiper.js to boost user engagement.</li>
        <li>Implemented semantic HTML and foundational SEO strategies to enhance accessibility and search engine visibility.</li>
        <li>Worked within Agile/Scrum processes (sprint planning, stand-ups, retrospectives) and provided mentorship to Junior developers.</li>
      </ul>

      <strong>Key Achievements</strong>
      <ul class="pl-6 list-disc">
      <li>Developed a UI template library with 10+ responsive layouts, built with modular components (tables, sliders, galleries, forms), enabling faster development and flexible assembly.</li>
      <li>Integrated templates into two platforms (<strong><a target="_blank" href="https://easier.jp/">Easier</a></strong>, <strong><a target="_blank" href="https://www.sungrove.co.jp/itszai/">It’szai</a></strong>  ), supporting SMEs across Japan in digital marketing and customer engagement.</li>
      <li>Improved UI performance by optimizing DOM structure and reducing JavaScript bundle size.</li>
      <li>Increased UX consistency with responsive, cross-browser design and delivered smoother user experiences with interactive charts and animations.</li>
      </ul>
    `,
    link_to: "https://www.sungrovetech.vn/",
    company: "TechX VN (formerly Sungrove Tech Vietnam) - HCMC)",
    time: "Dec 2024 - Present",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "EChart.js",
      "Swiper.js",
      "SEO",
      "Responsive Design",
    ],
  },
  {
    title: "Frontend Developer",
    description: `
      <ul class="item-des">
        <li>
        Built key <strong><a href="/project/thangloigroup">Internal Business Management Toolkit</a></strong> features using React and TypeScript.
        </li>
        <li>Researched and developed a company design system, using design principles, creating reusable UI components, templates, and documentation to standardize the look and feel across applications.
        </li>
        <li>Built various event-focused web apps to support events, including event booking platforms, digital magazines, minigames for company events, and sports tournaments.
        </li>
        <li>Collaborated with cross-functional teams to deliver refined digital solutions.</li>
        <li>Mentored 3+ frontend development interns, providing technical guidance and training on HTML, CSS, JavaScript, and Git.</li>
      </ul>
    `,
    link_to: "https://thangloigroup.vn/",
    company: "Thang Loi Group, HCMC",
    time: "Dec 2020 - Dec 2024",
    skills: ["ReactJS", "JavaScript", "TypeScript", "Tailwind", "Bootstrap"],
  },
  {
    title: "Frontend Developer",
    description: `Maintained and developed a client website, a landing page for a company's website, and a mobile application - an individual assistant aimed at financial management and giving advice.`,
    time: "Sep 2019 - Jun 2020",
    company: "FIOP JSC, HCMC",
    skills: ["JavaScript", "NextJS", "React Native", "jQuery"],
  },
];
