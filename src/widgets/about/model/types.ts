export interface AboutExperienceProject {
  title: string;
  description: string;
  details: string[];
  techStack: string;
}

export interface AboutExperienceItem {
  period: string;
  company: string;
  position: string;
  projects?: AboutExperienceProject[];
  details?: string[];
}

export interface AboutEducationItem {
  period: string;
  institution: string;
  degree?: string;
  program: string;
  details?: string[];
}
