export interface Project {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  role: string;
  techStack: string[];
  highlights: string[];
}

export interface ExperienceRole {
  title: string;
  period: string;
}

export interface Experience {
  company: string;
  location: string;
  roles: ExperienceRole[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  detail?: string;
}

export interface Achievement {
  title: string;
  organization: string;
  description: string;
  link?: string;
}
