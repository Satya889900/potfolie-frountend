"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

export default function CertificateGrid() {
  const certificates = [
    {
      title: "Java Programming",
      issuer: "Udemy",
      year: "2024",
    },
    {
      title: "Spring Boot",
      issuer: "Udemy",
      year: "2025",
    },
    {
      title: "React.js",
      issuer: "Coursera",
      year: "2025",
    },
    {
      title: "MERN Stack",
      issuer: "Udemy",
      year: "2025",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

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

      <div className="relative z-10 flex-1 flex flex-col min-h-screen py-16 px-6 md:px-10 xl:px-16">
        <div className="max-w-6xl mx-auto w-full">
          
          {/* Header */}
          <div className="mb-12 ml-2">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#a07c4b]"></span>
              <span className="text-[11px] font-extrabold tracking-[0.25em] text-[#a07c4b] uppercase">
                ACHIEVEMENTS
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-[3.2rem] font-black tracking-tight text-[#1b3b36] dark:text-[#e8efe2]"
            >
              CERTIFICATIONS.
            </motion.h1>
          </div>

          {/* Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {certificates.map((certificate, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="group relative p-6 rounded-3xl border transition-all duration-300 backdrop-blur-sm flex flex-col justify-between min-h-[200px]
                  bg-white/60 border-[#c4a572]/15 hover:bg-white hover:shadow-xl hover:shadow-[#c4a572]/10
                  dark:bg-white/[0.04] dark:border-white/[0.07] dark:hover:bg-white/[0.08] dark:hover:shadow-[#c4a572]/10"
              >
                <div>
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br from-[#c4a572] to-[#8a7645] text-white shadow-md">
                    <Award size={20} />
                  </div>

                  <h2 className="text-[16px] font-bold text-[#1b3b36] dark:text-white group-hover:text-[#b8905b] transition-colors duration-200 tracking-tight leading-snug">
                    {certificate.title}
                  </h2>

                  <p className="mt-1 text-[13px] font-semibold text-[#1b3b36]/60 dark:text-[#e8efe2]/60">
                    {certificate.issuer}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-[11px] font-black tracking-wider text-[#1b3b36]/40 dark:text-[#e8efe2]/40 uppercase">
                    Year: {certificate.year}
                  </span>

                  <button className="inline-flex items-center gap-1 text-[11px] font-bold text-[#243d2c] dark:text-[#c4a572] hover:underline transition-all duration-200">
                    View
                    <ExternalLink size={10} />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </main>
  );
}