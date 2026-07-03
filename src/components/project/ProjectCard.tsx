"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, MouseEvent } from "react";
import { ArrowRight, Code2, ExternalLink } from "lucide-react";
import { cloudinaryLoader } from "../../lib/cloudinary";
import type { Project } from "../../../types/Project";

export default function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, visible: false });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setSpotlight({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      visible: true,
    });
  };

  const handleMouseLeave = () =>
    setSpotlight((s) => ({ ...s, visible: false }));

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative border border-[#1b3b36]/10 rounded-3xl p-4 sm:p-5 bg-[#e5e8df] dark:bg-[#1c3327] hover:shadow-lg hover:shadow-[#1b3b36]/10 transition-all duration-300 overflow-hidden flex flex-col sm:flex-row gap-4 sm:gap-5"
    >
      {/* Mouse spotlight glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300"
        style={{
          opacity: spotlight.visible ? 1 : 0,
          background: `radial-gradient(circle 200px at ${spotlight.x}% ${spotlight.y}%, rgba(184,144,91,0.12) 0%, transparent 80%)`,
        }}
      />

      {/* Image Container */}
      {project.image && (
        <div className="relative z-10 w-full sm:w-[220px] lg:w-[260px] shrink-0 aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-[#1c3327] p-3">
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <Image
              loader={cloudinaryLoader}
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#b8905b]/8 dark:bg-[#07071a]/20 group-hover:bg-transparent transition-colors duration-500" />
          </div>
        </div>
      )}

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-center py-1 flex-1">
        <h2 className="text-base sm:text-[18px] font-black text-[#1c3327] dark:text-[#e8efe2] group-hover:text-[#b8905b] transition-colors duration-200 leading-snug">
          {project.title}
        </h2>

        <p className="mt-1 sm:mt-2 text-xs sm:text-[13px] font-semibold leading-relaxed text-[#2a4332] dark:text-[#e8efe2]/70 line-clamp-3">
          {project.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="rounded-full bg-[#c3a981] px-3 py-0.5 text-[10px] font-black tracking-wider text-[#243d2c] transition-colors duration-200 uppercase"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mt-4">
          {/* Primary: View Details → project detail page */}
          <Link
            href={`/projects/${project.slug}`}
            className="group/btn inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#243d2c] text-[#e8efe2] text-[12px] font-bold hover:bg-[#1c3327] transition-colors shadow-sm"
          >
            View Details
            <ArrowRight size={12} className="group-hover/btn:translate-x-0.5 transition-transform" />
          </Link>

          {/* GitHub link (only if set) */}
          {project.githubUrl && project.githubUrl !== "#" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[#243d2c]/20 dark:border-[#e8efe2]/20 text-[#243d2c] dark:text-[#e8efe2] text-[12px] font-bold hover:bg-[#243d2c]/10 transition-colors"
            >
              <Code2 size={12} />
              Code
            </a>
          )}

          {/* Live preview link (only if set) */}
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[#b8905b]/30 text-[#b8905b] text-[12px] font-bold hover:bg-[#b8905b]/10 transition-colors"
            >
              <ExternalLink size={12} />
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
