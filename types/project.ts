export interface Technology {
  name: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  label: string;
}

export interface ProjectLinks {
  live?: string;
  github?: string;
  caseStudy?: string;
}

export interface ProjectMetrics {
  label: string;
  value: string;
}

export type ProjectStatus = "ongoing" | "completed";

export interface Project {
  slug: string;

  title: string;

  status: ProjectStatus;

  category: string;

  tagline: string;

  overview: string;

  client: string;

  industry: string;

  duration: string;

  role: string;

  featured: boolean;

  technologies: Technology[];

  cover: ProjectImage;

  gallery: ProjectImage[];

  links: ProjectLinks;

  challenge: string;

  solution: string;

  outcome: string;

  features: string[];

  metrics: ProjectMetrics[];
}