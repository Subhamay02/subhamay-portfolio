export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Publications', href: '#publications' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export const siteInfo = {
  name: 'Subhamay Kumar',
  initials: 'SK',
  roleLine: 'Data Analyst | Python | SQL | Power BI',
};

export const heroContent = {
  greeting: "Hello, I'm",
  name: siteInfo.name,
  roleHighlight: 'Data Analyst',
  roleSuffix: '| Python | SQL | Power BI',
  summary:
    'Transforming complex data into actionable insights. Passionate about analytics, data visualization, and building data-driven solutions for real-world problems.',
  actions: [
    { label: 'View Projects', href: '#projects', variant: 'primary' },
    { label: 'Contact Me', href: '#contact', variant: 'secondary' },
  ],
};

export const contactContent = {
  intro:
    "I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
  email: 'subhamaykumar2005@gmail.com',
  socials: [
    {
      label: 'LinkedIn profile',
      href: 'https://www.linkedin.com/in/subhamay-kumar-a002b3378',
      icon: 'linkedin',
    },
    {
      label: 'GitHub profile',
      href: 'https://github.com/Subhamay02',
      icon: 'github',
    },
  ],
};

export const skillsData = [
  { category: 'Database & Data Handling', items: ['Python', 'SQL', 'Pandas', 'NumPy', 'DBMS'] },
  { category: 'Languages', items: ['C', 'C++', 'Java', 'JavaScript (ES6+)'] },
  { category: 'Web Development', items: ['React', 'HTML5', 'CSS3', 'Bootstrap'] },
  { category: 'Tools & Concepts', items: ['Power BI', 'Git/GitHub', 'VS Code', 'OOPS', 'DSA'] },
];

export const projects = [
  {
    title: 'IoT-Based Automotive Anti-Collision System',
    description:
      'Designed the architecture for an intelligent IoT-based vehicle collision prevention model. Implemented proximity detection and microcontroller logic for real-time alerting. Secured 2nd place at Circuit Craft 2024 for innovative concept and implementation feasibility.',
    tags: ['IoT', 'Microcontrollers', 'Proximity Detection', 'System Architecture'],
  },
  {
    title: 'IoT-Powered Agricultural Drone System',
    description:
      'Contributed to the foundational development of an AI-powered agricultural drone. Worked on IoT-based monitoring workflows for crop health optimization and integrated AI-driven decision models for agricultural automation.',
    tags: ['IoT', 'AI', 'Drone Tech', 'Precision Agriculture'],
  },
];

export const publications = [
  {
    title: 'Visual Authenticity in the Age of AI: Identifying AI-Generated and Edited Images',
    journal: 'Google Scholar Indexed Publication',
    year: '2026',
    description:
      'Explored techniques to distinguish AI-generated and manipulated images from real visuals. Analyzed patterns, inconsistencies, and detection strategies in synthetic media. Focused on practical implications for digital forensics and content authenticity.',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Uu9tbnoAAAAJ&citation_for_view=Uu9tbnoAAAAJ:WF5omc3nYNoC',
  },
];

export const achievements = [
  {
    title: '2nd Place - IoT-Based Automotive Anti-Collision System',
    organization: 'Circuit Craft 2024',
    year: '2024',
    description:
      'Designed an intelligent collision prevention model and secured 2nd place for innovative concept and feasibility.',
  },
  {
    title: 'Core Contributor',
    organization: 'Agricultural Drone System Project',
    year: '2024',
    description:
      'Contributed to AI-powered Agricultural Drone System for crop management and health optimization workflows.',
  },
  {
    title: 'Advanced Data Science and Analysis Using Python',
    organization: 'Training Course',
    year: 'Completed',
    description:
      'Focused on advanced data analytics, preprocessing, and exploratory data analysis using Python.',
  },
];
