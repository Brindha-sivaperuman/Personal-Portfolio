import { SkillCategory, Project, Certification, MetricItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Brindha S',
  role: 'Aspiring Software Engineer & Full-Stack Developer',
  tagline: '7th Sem Engineering Student',
  institution: "Women's Engineering College, Pondicherry Technological University (PTU)",
  batch: 'Batch of 2027',
  status: 'Available for Internships & Full-time Roles (2027 Graduate)',
  email: 'brindhas0120@gmail.com',
  github: 'https://github.com/brindha-sivaperuman',
  linkedin: 'https://www.linkedin.com/in/brindha-sivaperuman-b93376364',
  location: 'Puducherry, India',
  summary:
    'Passionate about building modern, human-centric web applications, engineering responsive architectures, and actively exploring Generative AI & autonomous AI agents to solve real-world technical problems.',
  initials: 'BS',
};

export const METRICS: MetricItem[] = [
  { value: '7th', label: 'Semester / PTU', colorClass: 'text-secondary' },
  { value: '04+', label: 'Certifications', colorClass: 'text-primary' },
  { value: '02+', label: 'Core Web Apps', colorClass: 'text-tertiary' },
  { value: '2027', label: 'Batch Graduate', colorClass: 'text-secondary-fixed-dim' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    domainNumber: 'DOMAIN 01',
    title: 'Frontend Development',
    description: 'Crafting accessible, pixel-accurate, dynamic browser applications.',
    iconName: 'Layout',
    color: 'primary',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS', 'Responsive Web Design'],
  },
  {
    id: 'backend',
    domainNumber: 'DOMAIN 02',
    title: 'Backend & Databases',
    description: 'Robust server-side logic, query design, and persistent storage.',
    iconName: 'Database',
    color: 'secondary',
    skills: ['Python', 'Node.js', 'REST APIs', 'SQL', 'Database Management'],
  },
  {
    id: 'ai',
    domainNumber: 'DOMAIN 03',
    title: 'Emerging Tech & AI',
    description: 'Autonomous cognitive agents, prompt systems, and cloud fundamentals.',
    iconName: 'Brain',
    color: 'tertiary',
    skills: ['AI Agents', 'Generative AI', 'LLMs & Prompt Engineering', 'Cloud Computing Foundations'],
  },
  {
    id: 'tools',
    domainNumber: 'DOMAIN 04',
    title: 'Tools & Workflows',
    description: 'Version control, AI accelerators, and cloud deployments.',
    iconName: 'Wrench',
    color: 'slate',
    skills: ['Git', 'GitHub', 'VS Code', 'Google Stitch', 'Google AI Studio', 'Vercel / Netlify'],
  },
  {
    id: 'soft-skills',
    domainNumber: 'DOMAIN 05',
    title: 'Professional & Soft Skills',
    description: 'Certified behavioral attributes ensuring effective cross-functional team delivery.',
    iconName: 'Award',
    color: 'secondary',
    skills: ['Communication', 'Problem Solving', 'Teamwork', 'Time Management (NPTEL Certified)'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'tourism-platform',
    projectNumber: 'PROJECT 01 // WEB APP',
    type: 'Interactive Web Application',
    title: 'Tourism Exploration & Guide Platform',
    subtitle: 'Pondicherry & Beyond Heritage & Coastal Itineraries',
    description:
      'An interactive web application showcasing travel destinations, curated tour itineraries, cultural highlights, and booking inquiries. Designed to provide visitors with seamless navigation across historical landmarks, local attractions, and dynamic guides.',
    previewUrlDisplay: 'tourism-platform.app',
    highlights: [
      'Dynamic destination search and categorized filtering.',
      'Interactive photo galleries with modal view.',
      'Customer reviews, testimonials & booking inquiry form.',
    ],
    techStack: [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'JavaScript' },
      { name: 'Responsive UI', highlight: 'primary' },
      { name: 'Interactive Maps', highlight: 'secondary' },
    ],
    githubUrl: 'https://github.com/brindha-sivaperuman',
    demoUrl: '#tourism-demo',
    accentColor: '#8083ff',
    icon: 'Compass',
    previewBadge: {
      title: 'Pondicherry & Beyond',
      subtitle: 'Curated Heritage & Coastal Itineraries',
    },
  },
  {
    id: 'weather-forecast',
    projectNumber: 'PROJECT 02 // API UTILITY',
    type: 'Real-Time Meteorological Utility',
    title: 'Real-Time Weather Forecast Application',
    subtitle: 'Puducherry & Global Weather Pulse',
    description:
      'A clean, intuitive weather forecasting tool providing instant real-time meteorological metrics, multi-day predictions, and location-based insights with reactive state management and modern dynamic graphics.',
    previewUrlDisplay: 'weather-pulse.io',
    highlights: [
      'Live temperature, humidity, wind velocity, and condition updates.',
      'Multi-day forecast projections with dynamic SVG weather icons.',
      'City search with auto-complete & browser Geolocation detection.',
    ],
    techStack: [
      { name: 'React / JS', highlight: 'primary' },
      { name: 'Weather REST API' },
      { name: 'Tailwind CSS', highlight: 'secondary' },
      { name: 'Dynamic SVG' },
      { name: 'Geolocation API' },
    ],
    githubUrl: 'https://github.com/brindha-sivaperuman',
    demoUrl: '#weather-demo',
    accentColor: '#4edea3',
    icon: 'CloudSun',
    previewBadge: {
      title: '29°C · Clear Sky',
      subtitle: 'Puducherry, IN · Humidity 78%',
    },
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'simplilearn-ai-agents',
    issuer: 'Simplilearn',
    issuerBadge: 'SIMPLILEARN',
    title: 'AI Agents',
    description:
      'Professional training on intelligent autonomous agents, goal-directed planning, agentic workflows, and tool integration.',
    icon: 'Bot',
    color: 'primary',
    verifiedDate: 'Verified Credential',
    credentialId: 'SIMP-AI-AGENTS-2024',
  },
  {
    id: 'simplilearn-cloud',
    issuer: 'Simplilearn',
    issuerBadge: 'SIMPLILEARN',
    title: 'Introduction to Cloud Computing',
    description:
      'Fundamental architecture of cloud services (IaaS, PaaS, SaaS), virtualization, resource scaling, and cloud security basics.',
    icon: 'Cloud',
    color: 'secondary',
    verifiedDate: 'Verified Credential',
    credentialId: 'SIMP-CLOUD-COMP-2024',
  },
  {
    id: 'simplilearn-genai',
    issuer: 'Simplilearn',
    issuerBadge: 'SIMPLILEARN',
    title: 'Generative AI Foundations & Applications',
    description:
      'Comprehensive study of transformer architectures, large language model capabilities, prompt structuring, and practical AI applications.',
    icon: 'Sparkles',
    color: 'tertiary',
    verifiedDate: 'Verified Credential',
    credentialId: 'SIMP-GENAI-FOUND-2024',
  },
  {
    id: 'nptel-soft-skills',
    issuer: 'NPTEL / IIT',
    issuerBadge: 'NPTEL / IIT',
    title: 'Enhancing Soft Skills & Personality',
    description:
      'National Programme certification focusing on interpersonal communication, team dynamics, workplace emotional intelligence, and presentation skills.',
    icon: 'GraduationCap',
    color: 'emerald',
    verifiedDate: 'Verified Credential',
    credentialId: 'NPTEL24HS20S1',
  },
];
