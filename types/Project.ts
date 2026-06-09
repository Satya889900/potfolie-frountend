export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;

  technologies: string[];

  githubUrl: string;
  liveUrl: string;

  image: string;
}