import { projects } from "../data/projects";

export async function getAllProjects() {
  return projects;
}

export async function getProjectBySlug(
  slug: string
) {
  return projects.find(
    (project) => project.slug === slug
  );
}

export async function getFeaturedProjects() {
  return projects.slice(0, 3);
}