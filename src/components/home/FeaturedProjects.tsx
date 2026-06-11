"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import ProjectCard from "../project/ProjectCard";
import { projects } from "../../constants/projects";

export default function FeaturedProjects() {
  return (
    <section className="py-28 relative overflow-hidden bg-[#f4f6f0] dark:bg-[#0f1714] transition-colors duration-500">

      {/* Decorative blobs */}
      <div aria-hidden className="pointer-events-none absolute top-20 left-0 w-[420px] h-[420px] rounded-full bg-[#1b3b36]/5 dark:bg-[#1b3b36]/20 blur-[90px]" />
      <div aria-hidden className="pointer-events-none absolute bottom-10 right-0 w-[360px] h-[360px] rounded-full bg-[#b8905b]/5 dark:bg-[#b8905b]/10 blur-[80px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] font-bold mb-4
              text-[#b8905b] transition-colors">
              <Sparkles size={11} />
              Selected work
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight
              text-[#1b3b36] dark:text-[#e8efe2] transition-colors">
              Featured{" "}
              <span className="text-[#b8905b]">
                Projects
              </span>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#2a3b34]/70 dark:text-[#e8efe2]/60 transition-colors">
              Full-stack builds — from design system to deployment. Scalable architecture, clean UI, real users.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Link href="/projects"
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 bg-[#243d2c] text-[#e8efe2] hover:bg-[#1c3327] shadow-md dark:bg-[#243d2c] dark:text-[#e8efe2]">
              View all projects
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] mb-12 bg-gradient-to-r from-transparent via-[#1b3b36]/10 dark:via-[#b8905b]/20 to-transparent transition-colors" />

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.slice(0, 2).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.65, ease: [0.22,1,0.36,1] }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* Pagination Dots */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex justify-center items-center gap-2"
        >
          <div className="w-8 h-2 rounded-full bg-[#1b3b36] dark:bg-[#b8905b]" />
          <div className="w-2 h-2 rounded-full bg-[#1b3b36]/30 dark:bg-[#b8905b]/30" />
          <div className="w-2 h-2 rounded-full bg-[#1b3b36]/30 dark:bg-[#b8905b]/30" />
        </motion.div>
      </div>
    </section>
  );
}