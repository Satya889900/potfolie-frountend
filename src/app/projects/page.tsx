import ProjectGrid from "../../components/project/ProjectGrid";
import { getAllProjects } from "../../services/projectService";

export default async function ProjectsPage() {
  const projects =
    await getAllProjects();

  return (
    <ProjectGrid
      projects={projects}
    />
  );
}