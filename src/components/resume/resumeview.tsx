"use client";

import { motion } from "framer-motion";
import { Download, Eye } from "lucide-react";

export default function ResumeViewer() {
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

      <div className="relative z-10 flex-1 flex flex-col py-24 px-6 md:px-10 xl:px-16">
        <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center">

          {/* Header — static */}
          <div className="mb-12">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a07c4b]" />
              <span className="text-[11px] font-extrabold tracking-[0.25em] text-[#a07c4b] uppercase">
                MY CREDENTIALS
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[3.2rem] font-black tracking-tight text-[#1b3b36] dark:text-[#e8efe2]">
              RESUME.
            </h1>
            <p className="mt-4 text-[14px] text-[#1b3b36]/60 dark:text-[#e8efe2]/60 max-w-md mx-auto font-medium">
              Download or view my detailed curriculum vitae in PDF format.
            </p>
          </div>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35 }}
            className="w-full max-w-md p-8 md:p-10 rounded-[2rem] border flex flex-col items-center gap-8
              bg-white/80 border-[#c4a572]/15 shadow-xl shadow-[#c4a572]/5
              dark:bg-white/[0.05] dark:border-white/[0.08] dark:shadow-none"
          >
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#c4a572] to-[#8a7645] text-white shadow-lg">
              <Download size={28} />
            </div>

            <div className="w-full flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/resume/Satya-Prakash-Resume.pdf"
                download
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-[13px] text-[#1b3b36] shadow-sm hover:scale-105 active:scale-95 transition-transform duration-150"
                style={{ background: "linear-gradient(135deg, #d3bb93 0%, #c8aa76 60%, #a07c4b 100%)" }}
              >
                Download PDF <Download size={14} />
              </a>

              <a
                href="/resume/Satya-Prakash-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border font-bold text-[13px] text-[#1b3b36] dark:text-[#e8efe2] hover:bg-white/40 dark:hover:bg-white/5 border-[#1b3b36]/10 dark:border-white/15 hover:scale-105 active:scale-95 transition-transform duration-150"
              >
                View Online <Eye size={14} />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}