"use client";

import { motion } from "framer-motion";

export default function Timeline() {
  const items = [
    {
      year: "2024",
      title: "Started Full Stack Development",
      description: "Began my journey diving deep into modern web technologies, focusing on responsive design and performant backends.",
    },
    {
      year: "2025",
      title: "Worked on MERN Projects",
      description: "Built and deployed several full-stack applications utilizing MongoDB, Express, React, and Node.js.",
    },
    {
      year: "2026",
      title: "Building Enterprise Applications",
      description: "Scaling robust solutions with Next.js, Spring Boot, and advanced database architectures.",
    },
  ];

  return (
    <section className="relative w-full py-20 px-6 md:px-10 xl:px-16">
      <div className="max-w-4xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-4 w-fit mx-auto
            bg-white/80 border-purple-200/80 text-purple-700 shadow-sm
            dark:bg-white/[0.06] dark:border-purple-500/25 dark:text-purple-300
            text-[11px] font-bold tracking-[0.2em] uppercase backdrop-blur-sm">
            <span>🚀</span> Experience
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#1c2a6e] dark:text-white transition-colors">
            My Journey
          </h2>
        </motion.div>

        <div className="relative border-l-[3px] border-indigo-200 dark:border-indigo-500/30 ml-4 md:ml-10 space-y-12">
          {items.map((item, idx) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
              className="relative pl-10 md:pl-16"
            >
              {/* Glowing Node */}
              <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-white dark:bg-[#07071a] border-4 border-[#3b5bdb] dark:border-[#a5b4fc] shadow-[0_0_15px_rgba(59,91,219,0.5)] z-10" />

              <div className="p-6 rounded-3xl border transition-all duration-300
                bg-white/60 border-blue-100/70 hover:bg-white hover:shadow-lg hover:shadow-blue-200/40
                dark:bg-white/[0.04] dark:border-white/[0.07] dark:hover:bg-white/[0.08] dark:hover:shadow-violet-900/20
                backdrop-blur-md">
                
                <span className="inline-block px-3 py-1 mb-4 rounded-md text-sm font-bold
                  bg-indigo-100 text-[#1c3faa] dark:bg-indigo-500/20 dark:text-[#a5b4fc]">
                  {item.year}
                </span>

                <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}