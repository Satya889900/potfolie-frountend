"use client";

import { motion } from "framer-motion";
import { use, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Code, ExternalLink, Code2 } from "lucide-react";
import { getProjectBySlug } from "../../../services/projectService";
import type { Project } from "../../../../types/Project";
import Image from "next/image";
import { cloudinaryLoader } from "../../../lib/cloudinary";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProjectDetailsPage({ params }: Props) {
  const { slug } = use(params);
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      const data = await getProjectBySlug(slug);
      setProject(data || null);
      setLoading(false);
    };
    fetchProject();
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#eef2ff] dark:bg-[#07071a]">
        <div className="w-10 h-10 border-4 border-[#b8905b] border-t-transparent rounded-full animate-spin"></div>
      </main>
    );
  }

  if (!project) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-[#eef2ff] dark:bg-[#07071a]">
        <h1 className="text-3xl font-black text-[#1b3b36] dark:text-[#e8efe2] mb-4">Project Not Found</h1>
        <Link href="/projects" className="text-[#b8905b] hover:underline font-bold">
          Go back to projects
        </Link>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen w-full overflow-hidden flex flex-col bg-[#eef2ff] dark:bg-[#07071a] transition-colors duration-500">
      {/* ── LIGHT MODE background ── */}
      <div aria-hidden className="dark:hidden pointer-events-none absolute inset-0 bg-[#f4f6f0]" />

      {/* ── DARK MODE background ── */}
      <div aria-hidden className="hidden dark:block pointer-events-none absolute inset-0 bg-[#0f1714]" />

      {/* Dot grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(184,144,91,0.15) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />

      <div className="relative z-10 flex-1 flex flex-col min-h-screen py-24 px-6 md:px-10 xl:px-16">
        <div className="max-w-5xl mx-auto w-full">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#b8905b] hover:text-[#1b3b36] dark:hover:text-[#e8efe2] transition-colors"
            >
              <ArrowLeft size={16} /> Back to Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Content / Hero section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1.5 mb-6 rounded-full text-xs font-black tracking-widest text-[#243d2c] dark:text-[#c4a572] bg-[#c3a981]/20 uppercase w-fit backdrop-blur-sm"
              >
                Case Study
              </motion.span>

              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-black tracking-tight text-[#1b3b36] dark:text-[#e8efe2] leading-tight mb-6"
              >
                {project.title}
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl leading-relaxed text-[#1b3b36]/80 dark:text-[#e8efe2]/80 font-medium mb-10"
              >
                {project.detailedDescription || project.description}
              </motion.p>

              {/* Action Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4 mb-10"
              >
                {project.liveUrl && project.liveUrl !== "#" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#243d2c] text-[#e8efe2] font-bold shadow-lg shadow-[#243d2c]/20 hover:bg-[#1b3b36] hover:-translate-y-1 transition-all"
                  >
                    <ExternalLink size={18} />
                    Live Preview
                  </a>
                )}
                {project.githubUrl && project.githubUrl !== "#" && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#243d2c]/20 dark:border-white/20 text-[#243d2c] dark:text-white font-bold hover:bg-[#243d2c]/5 dark:hover:bg-white/5 hover:-translate-y-1 transition-all"
                  >
                    <Code size={18} />
                    Source Code
                  </a>
                )}
              </motion.div>
            </motion.div>

            {/* Right Content / Image & Tech Stack */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl shadow-[#1b3b36]/10 border-4 border-white/50 dark:border-white/5 bg-[#1c3327] mb-8 group">
                <Image
                  loader={cloudinaryLoader}
                  src={project.image || "/Projectimg.png"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b3b36]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-8 rounded-[2rem] border backdrop-blur-md bg-white/40 border-[#c4a572]/20 shadow-xl shadow-[#c4a572]/5 dark:bg-white/[0.03] dark:border-white/[0.08] dark:shadow-none">
                <div className="flex items-center gap-3 mb-6">
                  <Code2 className="text-[#b8905b]" size={24} />
                  <h3 className="text-xl font-black text-[#1b3b36] dark:text-[#e8efe2] uppercase tracking-wide">
                    Technologies
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.05 }}
                      key={tech}
                      className="px-4 py-2 rounded-xl text-sm font-bold text-[#1b3b36] dark:text-[#e8efe2] bg-white/60 dark:bg-white/5 border border-white/40 dark:border-white/10 shadow-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#1b3b36]/20 dark:via-white/20 to-transparent my-16" />

          {/* Features Section */}
          {(project.features || project.description) && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto p-8 md:p-12 rounded-[2.5rem] border backdrop-blur-sm bg-white/60 border-[#c4a572]/15 shadow-xl shadow-[#c4a572]/5 dark:bg-white/[0.04] dark:border-white/[0.07] dark:shadow-none relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#b8905b]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <h2 className="text-2xl md:text-3xl font-black text-[#1b3b36] dark:text-[#e8efe2] mb-8 flex items-center gap-4 relative z-10">
                <span className="w-2 h-8 bg-[#b8905b] rounded-full" />
                Key Features & Achievements
              </h2>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                {(project.features || [project.description]).map((feature, i) => (
                  <motion.li 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    key={i} 
                    className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/40 dark:hover:bg-white/5 transition-colors border border-transparent hover:border-white/20"
                  >
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle2 size={20} className="text-[#b8905b]" />
                    </div>
                    <span className="text-base font-semibold leading-relaxed text-[#1b3b36]/80 dark:text-[#e8efe2]/80">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </main>
  );
}