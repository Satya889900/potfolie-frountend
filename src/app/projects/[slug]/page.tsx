"use client";

import { motion, AnimatePresence } from "framer-motion";
import { use, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Code, ExternalLink, Code2, ChevronLeft, ChevronRight } from "lucide-react";
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
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchProject = async () => {
      const data = await getProjectBySlug(slug);
      setProject(data || null);
      setLoading(false);
    };
    fetchProject();
  }, [slug]);

  const nextSlide = () => {
    if (!project || !project.images) return;
    setCurrentSlide((prev) => (prev + 1) % project.images!.length);
  };

  const prevSlide = () => {
    if (!project || !project.images) return;
    setCurrentSlide((prev) => (prev - 1 + project.images!.length) % project.images!.length);
  };

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

          {/* Case Study Header */}
          <div className="mb-10">
            <span className="inline-block px-4 py-1.5 mb-4 rounded-full text-xs font-black tracking-widest text-[#243d2c] dark:text-[#c4a572] bg-[#c3a981]/20 uppercase w-fit backdrop-blur-sm">
              Case Study
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-[#1b3b36] dark:text-[#e8efe2] leading-tight mb-4">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-[#1b3b36]/80 dark:text-[#e8efe2]/70 font-semibold">
              {project.description}
            </p>
          </div>

          {/* Main Visual: Full Width Slideshow / Featured Image */}
          {project.images && project.images.length > 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative w-full aspect-[16/10] sm:aspect-video rounded-[2rem] overflow-hidden shadow-2xl shadow-[#1b3b36]/15 border-4 border-white/50 dark:border-white/5 bg-black mb-12 group select-none"
            >
              <div className="relative w-full h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 0.99 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.01 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="relative w-full h-full"
                  >
                    <Image
                      loader={cloudinaryLoader}
                      src={project.images[currentSlide].src}
                      alt={project.images[currentSlide].caption}
                      fill
                      className="object-contain"
                    />
                    {/* Caption overlay */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent p-6 pt-16 flex flex-col justify-end text-white text-left">
                      <p className="text-base sm:text-lg font-black tracking-wide uppercase text-[#b8905b]">
                        {project.images[currentSlide].caption}
                      </p>
                      <p className="text-xs opacity-60 font-semibold mt-0.5">
                        Image {currentSlide + 1} of {project.images.length}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/45 hover:bg-black/70 text-[#e8efe2] hover:text-[#b8905b] flex items-center justify-center backdrop-blur-sm border border-white/10 hover:scale-105 transition-all duration-200 cursor-pointer"
              >
                <ChevronLeft size={20} strokeWidth={3} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/45 hover:bg-black/70 text-[#e8efe2] hover:text-[#b8905b] flex items-center justify-center backdrop-blur-sm border border-white/10 hover:scale-105 transition-all duration-200 cursor-pointer"
              >
                <ChevronRight size={20} strokeWidth={3} />
              </button>

              {/* Bullet Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {project.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentSlide === i
                        ? "w-8 bg-[#b8905b]"
                        : "w-2.5 bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative w-full aspect-[16/10] sm:aspect-video rounded-[2rem] overflow-hidden shadow-2xl shadow-[#1b3b36]/15 border-4 border-white/50 dark:border-white/5 bg-[#1c3327] mb-12 group"
            >
              <Image
                loader={cloudinaryLoader}
                src={project.image || "/Projectimg.png"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b3b36]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          )}

          {/* Details & Info Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Side: Long description & Features */}
            <div className="lg:col-span-8 flex flex-col gap-10">
              <div className="p-8 rounded-[2rem] border backdrop-blur-sm bg-white/40 border-[#c4a572]/20 shadow-xl shadow-[#c4a572]/5 dark:bg-white/[0.03] dark:border-white/[0.08] dark:shadow-none">
                <h2 className="text-2xl font-black text-[#1b3b36] dark:text-[#e8efe2] mb-4 uppercase tracking-wide">
                  Project Overview
                </h2>
                <p className="text-base sm:text-lg leading-relaxed text-[#1b3b36]/80 dark:text-[#e8efe2]/80 font-medium">
                  {project.detailedDescription || project.description}
                </p>
              </div>

              {(project.features || [project.description]) && (
                <div className="p-8 md:p-10 rounded-[2rem] border backdrop-blur-sm bg-white/40 border-[#c4a572]/15 shadow-xl shadow-[#c4a572]/5 dark:bg-white/[0.04] dark:border-white/[0.07] dark:shadow-none relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#b8905b]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  
                  <h2 className="text-2xl font-black text-[#1b3b36] dark:text-[#e8efe2] mb-6 flex items-center gap-3 relative z-10">
                    <span className="w-1.5 h-6 bg-[#b8905b] rounded-full" />
                    Key Features & Achievements
                  </h2>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                    {(project.features || [project.description]).map((feature, i) => (
                      <li 
                        key={i} 
                        className="flex items-start gap-3 p-3 rounded-2xl hover:bg-white/40 dark:hover:bg-white/5 transition-colors border border-transparent hover:border-white/20"
                      >
                        <div className="mt-0.5 flex-shrink-0">
                          <CheckCircle2 size={18} className="text-[#b8905b]" />
                        </div>
                        <span className="text-sm sm:text-base font-semibold leading-relaxed text-[#1b3b36]/80 dark:text-[#e8efe2]/85">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right Side: Links & Tech Stack */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Action Links */}
              <div className="p-6 rounded-[2rem] border backdrop-blur-md bg-white/40 border-[#c4a572]/20 shadow-xl shadow-[#c4a572]/5 dark:bg-white/[0.03] dark:border-white/[0.08] dark:shadow-none flex flex-col gap-3">
                <h3 className="text-lg font-black text-[#1b3b36] dark:text-[#e8efe2] uppercase tracking-wide mb-2">
                  Project Links
                </h3>
                {project.liveUrl && project.liveUrl !== "#" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#243d2c] text-[#e8efe2] font-bold shadow-lg shadow-[#243d2c]/10 hover:bg-[#1b3b36] transition-all w-full text-center"
                  >
                    <ExternalLink size={16} />
                    Live Preview
                  </a>
                )}
                {project.githubUrl && project.githubUrl !== "#" && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-[#243d2c]/20 dark:border-white/20 text-[#243d2c] dark:text-white font-bold hover:bg-[#243d2c]/5 transition-all w-full text-center"
                  >
                    <Code size={16} />
                    Source Code
                  </a>
                )}
              </div>

              {/* Technologies */}
              <div className="p-6 rounded-[2rem] border backdrop-blur-md bg-white/40 border-[#c4a572]/20 shadow-xl shadow-[#c4a572]/5 dark:bg-white/[0.03] dark:border-white/[0.08] dark:shadow-none">
                <div className="flex items-center gap-2 mb-4">
                  <Code2 className="text-[#b8905b]" size={20} />
                  <h3 className="text-lg font-black text-[#1b3b36] dark:text-[#e8efe2] uppercase tracking-wide">
                    Technologies
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-xs font-bold text-[#1b3b36] dark:text-[#e8efe2] bg-white/60 dark:bg-white/5 border border-white/40 dark:border-white/10 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}