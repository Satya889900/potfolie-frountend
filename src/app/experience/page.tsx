"use client";

import { motion, Variants } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const experiences = [
  {
    company: "Kods",
    role: "Full Stack Developer",
    duration: "2025 - Present",
    description:
      "Working on Next.js, React, Spring Boot, WhatsApp Automation, CRM and Dashboard Applications.",
  },
  {
    company: "Personal Projects",
    role: "MERN Stack Developer",
    duration: "2024 - 2025",
    description:
      "Built Student Management System, Employee Management System and Full Stack Applications.",
  },
];

export default function ExperienceTimeline() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden flex flex-col bg-[#f4f6f0] dark:bg-[#0f1714]">
      {/* Dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(184,144,91,0.13) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 flex-1 flex flex-col py-16 px-6 md:px-10 xl:px-16">
        <div className="max-w-4xl mx-auto w-full">

          {/* Header — no animation, instant load */}
          <div className="mb-16 ml-4 md:ml-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a07c4b]" />
              <span className="text-[11px] font-extrabold tracking-[0.25em] text-[#a07c4b] uppercase">
                MY CAREER PATH
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[3.2rem] font-black tracking-tight text-[#1b3b36] dark:text-[#e8efe2]">
              WORK EXPERIENCE.
            </h1>
          </div>

          {/* Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="relative border-l-2 border-[#c4a572]/30 ml-4 md:ml-10 space-y-12 py-2"
          >
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline node */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#f4f6f0] dark:bg-[#0f1714] border-4 border-[#b8905b] shadow-[0_0_10px_rgba(184,144,91,0.5)] z-10" />

                {/* Content card — no backdrop-blur for performance */}
                <motion.div
                  whileHover={{ y: -3 }}
                  style={{ willChange: "transform" }}
                  className="p-6 md:p-8 rounded-3xl border
                    bg-white/70 border-[#c4a572]/20 hover:bg-white hover:shadow-xl hover:shadow-[#c4a572]/10
                    dark:bg-white/[0.05] dark:border-white/[0.08] dark:hover:bg-white/[0.09]
                    transition-shadow duration-200"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h2 className="text-xl md:text-2xl font-black text-[#1b3b36] dark:text-white leading-tight">
                        {item.role}
                      </h2>
                      <h3 className="text-sm font-bold text-[#b8905b] uppercase tracking-wider mt-1">
                        {item.company}
                      </h3>
                    </div>
                    <span className="inline-block px-3.5 py-1.5 rounded-full text-[11px] font-extrabold tracking-wider uppercase w-fit
                      bg-[#1b3b36]/5 text-[#1b3b36] dark:bg-white/5 dark:text-[#e8efe2] border border-[#1b3b36]/10 dark:border-white/10">
                      {item.duration}
                    </span>
                  </div>
                  <p className="text-[14px] leading-[1.7] text-[#1b3b36]/75 dark:text-[#e8efe2]/75 font-medium">
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </main>
  );
}