import Link from "next/link";
import type { Project } from "../../../types/Project";

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <div className="group border border-neutral-200 dark:border-white/10 rounded-2xl p-6 bg-white/50 dark:bg-white/5 hover:shadow-xl hover:border-violet-400/30 transition-all duration-300">

      <h2 className="text-xl font-bold text-neutral-800 dark:text-white">
        {project.title}
      </h2>

      <p className="mt-3 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
        {project.description}
      </p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.technologies.map((t) => (
          <span
            key={t}
            className="rounded-full bg-violet-100 dark:bg-violet-500/10 px-2.5 py-0.5 text-xs font-medium text-violet-700 dark:text-violet-300"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-3 mt-6">
        <Link
          href={`/projects/${project.slug}`}
          className="px-4 py-2 rounded-lg bg-violet-600 text-white text-sm font-medium hover:bg-violet-700 transition-colors"
        >
          Details
        </Link>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-neutral-200 dark:border-white/10 rounded-lg text-sm font-medium hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}