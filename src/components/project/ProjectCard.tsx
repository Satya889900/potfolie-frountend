import Link from "next/link";
import type { Project } from "../../../types/Project";

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <div className="group border border-blue-100 dark:border-blue-800/30 rounded-2xl p-6 bg-white/70 dark:bg-blue-950/30 hover:shadow-xl hover:shadow-blue-100/50 hover:border-[#1c3faa]/30 transition-all duration-300">

      <h2 className="text-xl font-bold text-blue-950 dark:text-white">
        {project.title}
      </h2>

      <p className="mt-3 text-sm leading-relaxed text-blue-900/70 dark:text-blue-200/80">
        {project.description}
      </p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.technologies.map((t) => (
          <span
            key={t}
            className="rounded-full bg-blue-100/80 dark:bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-[#1c3faa] dark:text-blue-300"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-3 mt-6">
        <Link
          href={`/projects/${project.slug}`}
          className="px-4 py-2 rounded-lg bg-[#1c3faa] text-white text-sm font-medium hover:bg-[#1a2f7a] transition-colors"
        >
          Details
        </Link>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-blue-200 dark:border-blue-800/40 rounded-lg text-sm font-medium text-blue-900 dark:text-blue-200 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}