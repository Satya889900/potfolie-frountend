export interface ProjectImage {
  src: string;
  caption: string;
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  detailedDescription?: string;

  technologies: string[];
  features?: string[];

  githubUrl: string;
  liveUrl: string;

  image: string;
  category: "company" | "personal";
  images?: ProjectImage[];
}