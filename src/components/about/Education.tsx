"use client";

import { motion } from "framer-motion";

export default function Education() {
  const educationData = [
    {
      degree: "Bachelor Degree",
      major: "Computer Science & Engineering",
      year: "2020 - 2024",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      ),
    },
    {
      degree: "High School",
      major: "Science Background",
      year: "2018 - 2020",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative w-full py-20 px-6 md:px-10 xl:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-4 w-fit mx-auto
            bg-white/80 border-indigo-200/80 text-indigo-700 shadow-sm
            dark:bg-white/[0.06] dark:border-indigo-500/25 dark:text-indigo-300
            text-[11px] font-bold tracking-[0.2em] uppercase backdrop-blur-sm">
            <span>🎓</span> Academics
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#1c2a6e] dark:text-white transition-colors">
            Education & Certifications
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10"
        >
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-3xl border transition-all duration-300
                bg-white/60 border-blue-100/70 hover:bg-white hover:shadow-xl hover:shadow-blue-200/40
                dark:bg-white/[0.04] dark:border-white/[0.07] dark:hover:bg-white/[0.08] dark:hover:shadow-violet-900/20
                backdrop-blur-md relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                {edu.icon}
              </div>
              
              <div className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center
                bg-gradient-to-br from-[#1c3faa] to-[#7048e8] text-white shadow-lg">
                {edu.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                {edu.degree}
              </h3>
              
              <p className="text-[#3b5bdb] dark:text-[#a5b4fc] font-semibold tracking-wide mb-4">
                {edu.major}
              </p>
              
              <div className="inline-flex items-center px-3 py-1 rounded-lg text-sm font-medium
                bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-white/70">
                {edu.year}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}