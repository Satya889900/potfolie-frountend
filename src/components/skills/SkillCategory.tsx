"use client";

import { motion, Variants } from "framer-motion";
import SkillCard from "./SkillCard";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.04 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const sectionHeadVariants: Variants = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

export default function SkillCategory() {
  const frontend = [
    "HTML", "CSS", "JavaScript", "TypeScript",
    "React", "Next.js", "Tailwind CSS",
  ];
  const backend = ["Java", "Spring Boot", "Node.js", "Express.js"];
  const database = ["MongoDB", "MySQL", "PostgreSQL"];

  const sections = [
    { label: "Frontend", skills: frontend },
    { label: "Backend", skills: backend },
    { label: "Database", skills: database },
  ];

  return (
    <main className="relative min-h-screen w-full overflow-hidden flex flex-col bg-[#f4f6f0] dark:bg-[#0f1714]">
      {/* Dot grid — static, no repaint */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(184,144,91,0.13) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 flex-1 flex flex-col py-16 px-6 md:px-10 xl:px-16">
        <div className="max-w-6xl mx-auto w-full">

          {/* Header */}
          <div className="mb-12 ml-2">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a07c4b]" />
              <span className="text-[11px] font-extrabold tracking-[0.25em] text-[#a07c4b] uppercase">
                MY TECH STACK
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[3.2rem] font-black tracking-tight text-[#1b3b36] dark:text-[#e8efe2]">
              PROFESSIONAL SKILLS.
            </h1>
          </div>

          {sections.map(({ label, skills }) => (
            <div key={label} className="mb-14 ml-2">
              <motion.h2
                variants={sectionHeadVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className="text-2xl font-black text-[#1b3b36] dark:text-[#e8efe2] mb-6 flex items-center gap-3"
              >
                <span className="w-4 h-[2px] bg-[#c4a572]" />
                {label}
              </motion.h2>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
              >
                {skills.map((skill) => (
                  <motion.div key={skill} variants={itemVariants}>
                    <SkillCard skill={skill} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}

        </div>
      </div>
    </main>
  );
}