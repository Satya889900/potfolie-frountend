"use client";

import { motion, Variants } from "framer-motion";

const coreValues = [
  {
    title: "EMPATHY-DRIVEN.",
    description: "Designing with the end-user in mind, focusing on their needs.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "COLLABORATIVE SPIRIT.",
    description: "Fostering partnerships to build better, stronger solutions.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "CONSTANT LEARNING.",
    description: "Always acquiring new skills to stay ahead in tech.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="9" y1="18" x2="15" y2="18" />
        <line x1="10" y1="22" x2="14" y2="22" />
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
      </svg>
    ),
  },
  {
    title: "QUALITY CRAFTSMANSHIP.",
    description: "Committed to delivering clean, perfect code.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9.5 12l1.5 1.5L15 10" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Timeline() {
  return (
    <section className="relative w-full py-20 px-6 md:px-10 xl:px-16">
      <div className="max-w-7xl mx-auto">
        {/* ── Badge & Heading ── */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#a07c4b]"></span>
            <span className="text-[11px] font-extrabold tracking-[0.25em] text-[#a07c4b] uppercase">
              MY CORE VALUES
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[3.2rem] font-black tracking-tight text-[#1b3b36] dark:text-[#e8efe2]"
          >
            MY CORE VALUES.
          </motion.h2>
        </div>

        {/* ── Value cards grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {coreValues.map((value, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group p-7 rounded-2xl border transition-all duration-300 backdrop-blur-sm
                bg-white/60 border-[#c4a572]/15 hover:bg-white hover:shadow-xl hover:shadow-[#c4a572]/10
                dark:bg-white/[0.04] dark:border-white/[0.07] dark:hover:bg-white/[0.08] dark:hover:shadow-[#c4a572]/10"
            >
              {/* Icon circle */}
              <div
                className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110
                  bg-gradient-to-br from-[#c4a572] to-[#8a7645] text-white shadow-lg shadow-[#c4a572]/20"
              >
                {value.icon}
              </div>

              {/* Title */}
              <h3
                className="text-lg font-bold mb-3 tracking-tight
                  text-[#1a3023] dark:text-white transition-colors"
              >
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] leading-relaxed text-slate-600 dark:text-white/60 transition-colors">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}