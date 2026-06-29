"use client";

import { motion } from "framer-motion";
import { Download, Eye } from "lucide-react";

export default function ResumeViewer() {
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

      <div className="relative z-10 flex-1 flex flex-col min-h-screen py-24 px-6 md:px-10 xl:px-16">
        <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center">
          
          {/* Header */}
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 mb-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#a07c4b]"></span>
              <span className="text-[11px] font-extrabold tracking-[0.25em] text-[#a07c4b] uppercase">
                MY CREDENTIALS
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-[3.2rem] font-black tracking-tight text-[#1b3b36] dark:text-[#e8efe2]"
            >
              RESUME.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mt-4 text-[14px] text-[#1b3b36]/60 dark:text-[#e8efe2]/60 max-w-md mx-auto font-medium"
            >
              Download or view my detailed curriculum vitae in PDF format.
            </motion.p>
          </div>

          {/* Cards & Buttons Wrapper */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-md p-8 md:p-10 rounded-[2rem] border backdrop-blur-sm flex flex-col items-center gap-8
              bg-white/60 border-[#c4a572]/15 shadow-xl shadow-[#c4a572]/5
              dark:bg-white/[0.04] dark:border-white/[0.07] dark:shadow-none"
          >
            {/* CV icon container */}
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#c4a572] to-[#8a7645] text-white shadow-lg">
              <Download size={28} />
            </div>

            <div className="w-full flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/resume/Satya-Prakash-Resume.pdf"
                download
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-[13px] text-[#1b3b36] shadow-sm hover:scale-105 active:scale-95 transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #d3bb93 0%, #c8aa76 60%, #a07c4b 100%)",
                }}
              >
                Download PDF
                <Download size={14} />
              </a>

              <a
                href="/resume/Satya-Prakash-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border font-bold text-[13px] text-[#1b3b36] dark:text-[#e8efe2] hover:bg-white/40 dark:hover:bg-white/5 border-[#1b3b36]/10 dark:border-white/15 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                View Online
                <Eye size={14} />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}