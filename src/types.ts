export interface Skill {
  name: string;
  level?: string;
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  domainNumber: string;
  title: string;
  description: string;
  iconName: string;
  color: 'primary' | 'secondary' | 'tertiary' | 'slate';
  skills: string[];
}

export interface Project {
  id: string;
  projectNumber: string;
  type: string;
  title: string;
  subtitle: string;
  description: string;
  previewUrlDisplay: string;
  highlights: string[];
  techStack: { name: string; highlight?: 'primary' | 'secondary' | 'tertiary' }[];
  githubUrl: string;
  demoUrl: string;
  accentColor: string;
  icon: string;
  previewBadge: {
    title: string;
    subtitle: string;
  };
}

export interface Certification {
  id: string;
  issuer: string;
  issuerBadge: string;
  title: string;
  description: string;
  icon: string;
  color: 'primary' | 'secondary' | 'tertiary' | 'emerald';
  verifiedDate: string;
  credentialId?: string;
}

export interface MetricItem {
  value: string;
  label: string;
  colorClass: string;
}
