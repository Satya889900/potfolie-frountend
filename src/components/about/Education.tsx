"use client";

import { motion, Variants } from "framer-motion";

const statsData = [
  {
    number: "1+",
    label: "YEARS.",
    sub: "In Professional Development",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    number: "3+",
    label: "SUCCESSFUL DEPLOYMENTS.",
    sub: "On time, within budget",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    number: "500+",
    label: "PROBLEMS SOLVED.",
    sub: "Complex solutions",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    number: "100+",
    label: "KEY INNOVATIONS.",
    sub: "Delivered in-house",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
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

export default function Education() {
  return (
    <section className="relative w-full py-16 px-6 md:px-10 xl:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {statsData.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl p-6 md:p-7 transition-all duration-300"
              style={{
                background: "linear-gradient(145deg, #8a7645 0%, #6b5d3a 100%)",
                boxShadow: "0 8px 30px rgba(107,93,58,0.3)",
              }}
            >
              {/* Subtle decorative circle in background */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/[0.06] group-hover:bg-white/[0.1] transition-colors duration-300" />

              {/* Icon circle */}
              <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center mb-5 text-[#e8efe2] relative z-10">
                {stat.icon}
              </div>

              {/* Number */}
              <h3 className="text-4xl md:text-5xl font-black text-white mb-1 relative z-10 tracking-tight">
                {stat.number}
              </h3>

              {/* Label */}
              <p className="text-[13px] font-bold tracking-[0.1em] text-[#e8efe2] mb-2 relative z-10 uppercase">
                {stat.label}
              </p>

              {/* Sub-description */}
              <p className="text-[13px] text-white/50 relative z-10 leading-relaxed">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}