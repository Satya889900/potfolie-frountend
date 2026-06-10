"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import ProjectCard from "../project/ProjectCard";
import { projects } from "../../constants/projects";

export default function FeaturedProjects() {
  return (
    <section className="py-28 relative overflow-hidden
      bg-gradient-to-b from-white via-indigo-50/30 to-blue-50/50
      dark:bg-[#060d24] dark:from-[#060d24] dark:via-[#07102a] dark:to-[#060d24]
      transition-colors duration-500">

      {/* Light mode blobs */}
      <div aria-hidden className="dark:hidden pointer-events-none absolute top-20 left-0 w-[420px] h-[420px] rounded-full bg-blue-100/80 blur-[90px]" />
      <div aria-hidden className="dark:hidden pointer-events-none absolute bottom-10 right-0 w-[360px] h-[360px] rounded-full bg-violet-100/60 blur-[80px]" />
      <div aria-hidden className="dark:hidden pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] rounded-full bg-indigo-50 blur-[60px]" />

      {/* Dark mode blobs */}
      <div aria-hidden className="hidden dark:block pointer-events-none absolute top-20 left-0 w-[500px] h-[500px] rounded-full bg-[#1c3faa]/12 blur-[110px]" />
      <div aria-hidden className="hidden dark:block pointer-events-none absolute bottom-10 right-0 w-[400px] h-[400px] rounded-full bg-[#7048e8]/10 blur-[100px]" />

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
              text-[#3b5bdb] dark:text-[#748ffc] transition-colors">
              <Sparkles size={11} />
              Selected work
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight
              text-[#1c3faa] dark:text-white transition-colors">
              Featured{" "}
              <span className="text-transparent bg-clip-text
                bg-gradient-to-r from-[#3b5bdb] via-[#7048e8] to-[#0ea5e9]
                dark:from-[#5c7cfa] dark:via-[#c4b5fd] dark:to-[#38bdf8]">
                Projects
              </span>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed
              text-slate-500 dark:text-white/45 transition-colors">
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
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 border
                border-[#1c3faa]/20 text-[#1c3faa] bg-[#1c3faa]/5 hover:bg-[#1c3faa]/10 hover:border-[#1c3faa]/35
                dark:border-[#5c7cfa]/25 dark:text-[#a5b4fc] dark:bg-[#5c7cfa]/8 dark:hover:bg-[#5c7cfa]/14 dark:hover:border-[#5c7cfa]/50">
              View all projects
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] mb-12
          bg-gradient-to-r from-transparent via-blue-200/80 to-transparent
          dark:via-[#3b5bdb]/30 transition-colors" />

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project, index) => (
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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 flex justify-center"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-blue-200 dark:to-white/10" />
            <Link href="/projects"
              className="group flex items-center gap-2 text-sm font-medium transition-colors duration-200
                text-slate-400 hover:text-[#1c3faa]
                dark:text-white/35 dark:hover:text-white/70">
              See {projects.length - 3} more projects
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-blue-200 dark:to-white/10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}