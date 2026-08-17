"use client";

import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types/Project";
import PageBackground from "../common/PageBackground";

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [activeTab, setActiveTab] = useState<"all" | "company" | "personal">("all");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const filteredProjects = projects.filter((project) => {
    if (activeTab === "all") return true;
    return project.category === activeTab;
  });

  return (
    <main
      className="relative min-h-screen w-full overflow-hidden flex flex-col"
      style={{
        background: isDark
          ? "radial-gradient(ellipse at 50% 0%, #1a2e24 0%, #0c1610 40%, #080e0a 100%)"
          : "#f4f6f0",
      }}
    >
      {/* ── Shared resume-style background (network canvas + stars) ── */}
      <PageBackground />

      <div className="relative z-10 flex-1 flex flex-col min-h-screen py-12 sm:py-16 px-4 sm:px-6 md:px-10 xl:px-16">
        <div className="max-w-6xl mx-auto w-full">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 ml-1 sm:ml-2">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 mb-1 sm:mb-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#a07c4b]"></span>
                <span className="text-[10px] sm:text-[11px] font-extrabold tracking-[0.25em] text-[#a07c4b] uppercase">
                  MY PORTFOLIO
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-black tracking-tight text-[#1b3b36] dark:text-[#e8efe2]"
              >
                PROJECTS.
              </motion.h1>
            </div>

            {/* Filter Tabs */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="flex bg-black/5 dark:bg-white/5 p-1 rounded-2xl w-fit border border-[#1b3b36]/5 dark:border-white/10 backdrop-blur-sm self-start md:self-auto"
            >
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === "all"
                    ? "bg-[#243d2c] text-[#e8efe2] dark:bg-[#b8905b] dark:text-[#0c1610] shadow-md"
                    : "text-[#2a3b34]/60 dark:text-[#e8efe2]/60 hover:text-[#1b3b36] dark:hover:text-[#e8efe2]"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveTab("company")}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === "company"
                    ? "bg-[#243d2c] text-[#e8efe2] dark:bg-[#b8905b] dark:text-[#0c1610] shadow-md"
                    : "text-[#2a3b34]/60 dark:text-[#e8efe2]/60 hover:text-[#1b3b36] dark:hover:text-[#e8efe2]"
                }`}
              >
                Company Projects
              </button>
              <button
                onClick={() => setActiveTab("personal")}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === "personal"
                    ? "bg-[#243d2c] text-[#e8efe2] dark:bg-[#b8905b] dark:text-[#0c1610] shadow-md"
                    : "text-[#2a3b34]/60 dark:text-[#e8efe2]/60 hover:text-[#1b3b36] dark:hover:text-[#e8efe2]"
                }`}
              >
                Personal Projects
              </button>
            </motion.div>
          </div>

          {/* Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </main>
  );
}