"use client";

import { motion, Variants } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

const certificates = [
  { title: "Java Programming", issuer: "Udemy", year: "2024" },
  { title: "Spring Boot", issuer: "Udemy", year: "2025" },
  { title: "React.js", issuer: "Coursera", year: "2025" },
  { title: "MERN Stack", issuer: "Udemy", year: "2025" },
];

export default function CertificateGrid() {
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
        <div className="max-w-6xl mx-auto w-full">

          {/* Header — static, no framer-motion = instant */}
          <div className="mb-12 ml-2">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a07c4b]" />
              <span className="text-[11px] font-extrabold tracking-[0.25em] text-[#a07c4b] uppercase">
                ACHIEVEMENTS
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[3.2rem] font-black tracking-tight text-[#1b3b36] dark:text-[#e8efe2]">
              CERTIFICATIONS.
            </h1>
          </div>

          {/* Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                style={{ willChange: "transform" }}
                className="group relative p-6 rounded-3xl border flex flex-col justify-between min-h-[200px]
                  bg-white/70 border-[#c4a572]/20 hover:bg-white hover:shadow-xl hover:shadow-[#c4a572]/10
                  dark:bg-white/[0.05] dark:border-white/[0.08] dark:hover:bg-white/[0.09]
                  transition-shadow duration-200"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br from-[#c4a572] to-[#8a7645] text-white shadow-md">
                    <Award size={20} />
                  </div>
                  <h2 className="text-[16px] font-bold text-[#1b3b36] dark:text-white group-hover:text-[#b8905b] transition-colors duration-150 tracking-tight leading-snug">
                    {cert.title}
                  </h2>
                  <p className="mt-1 text-[13px] font-semibold text-[#1b3b36]/60 dark:text-[#e8efe2]/60">
                    {cert.issuer}
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-[11px] font-black tracking-wider text-[#1b3b36]/40 dark:text-[#e8efe2]/40 uppercase">
                    Year: {cert.year}
                  </span>
                  <button className="inline-flex items-center gap-1 text-[11px] font-bold text-[#243d2c] dark:text-[#c4a572] hover:underline">
                    View <ExternalLink size={10} />
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