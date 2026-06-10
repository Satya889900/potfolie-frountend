"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, ArrowRight, Zap } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-28 relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white dark:bg-[#060d24] dark:from-[#060d24] dark:via-[#060d24] dark:to-[#060d24] transition-colors duration-500">

      {/* Light mode ambient */}
      <div aria-hidden className="dark:hidden pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,_#dbeafe_0%,_transparent_70%)]" />
      <div aria-hidden className="dark:hidden pointer-events-none absolute top-10 left-10 w-80 h-80 rounded-full bg-violet-100/60 blur-[80px]" />
      <div aria-hidden className="dark:hidden pointer-events-none absolute bottom-10 right-10 w-72 h-72 rounded-full bg-blue-100/60 blur-[70px]" />

      {/* Dark mode ambient */}
      <div aria-hidden className="hidden dark:block pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,_#0f1f5c18_0%,_transparent_70%)]" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22,1,0.36,1] }}
        >

          {/* ── LIGHT MODE CARD ── */}
          <div className="dark:hidden relative rounded-[2.5rem] overflow-hidden p-[1.5px]"
            style={{ background: "linear-gradient(135deg, #1c3faa44, #7048e844, #0ea5e944, #1c3faa44)" }}>
            <div className="relative rounded-[calc(2.5rem-1.5px)] overflow-hidden px-8 py-16 md:px-16 md:py-20 text-center"
              style={{ background: "linear-gradient(135deg, #eff6ff 0%, #f5f3ff 50%, #eff6ff 100%)" }}>

              {/* Light blobs inside card */}
              <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-blue-200/50 blur-[60px]" />
              <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-violet-200/50 blur-[60px]" />
              <div aria-hidden className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] rounded-full bg-indigo-100/80 blur-[50px]" />

              {/* Dot pattern */}
              <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.4]"
                style={{
                  backgroundImage: "radial-gradient(circle, rgba(28,63,170,0.1) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }} />

              <div className="relative z-10">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border font-bold text-[10px] uppercase tracking-[0.28em]
                    border-[#1c3faa]/20 bg-[#1c3faa]/8 text-[#1c3faa]">
                  <Zap size={10} className="fill-[#1c3faa]" />
                  Available for hire
                </motion.span>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15, duration: 0.7 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6 text-[#1c3faa]">
                  Let&apos;s Build{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1c3faa] via-[#7048e8] to-[#0ea5e9]">
                    Something Great
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 }}
                  className="text-[16px] md:text-lg text-[#1e40af]/60 max-w-xl mx-auto leading-relaxed mb-12">
                  Open to freelance projects and full-time roles. If you have an idea, a product, or a problem — let&apos;s talk.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 }}
                  className="flex flex-col sm:flex-row justify-center items-center gap-4">

                  {/* Primary — light */}
                  <Link href="/contact"
                    className="group relative flex items-center justify-center gap-2.5 px-8 py-4 w-full sm:w-auto rounded-2xl font-bold text-[15px] text-white overflow-hidden transition-all duration-300 hover:-translate-y-1"
                    style={{ background: "linear-gradient(135deg, #1c3faa 0%, #3b5bdb 50%, #5c7cfa 100%)", boxShadow: "0 8px 32px rgba(28,63,170,0.35), 0 0 0 1px rgba(59,91,219,0.3)" }}>
                    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: "linear-gradient(135deg, #3b5bdb 0%, #5c7cfa 50%, #7048e8 100%)" }} />
                    <Mail size={18} className="relative z-10" />
                    <span className="relative z-10">Get in Touch</span>
                    <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  {/* Ghost — light */}
                  <Link href="/projects"
                    className="group flex items-center justify-center gap-2.5 px-8 py-4 w-full sm:w-auto rounded-2xl font-bold text-[15px] transition-all duration-300 hover:-translate-y-1 border-2
                      border-[#1c3faa]/25 text-[#1c3faa] hover:border-[#1c3faa]/50 hover:bg-[#1c3faa]/8">
                    View Projects
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="mt-10 flex items-center justify-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <p className="text-[12px] text-slate-400 tracking-wide">Typically responds within 24 hours</p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* ── DARK MODE CARD ── */}
          <div className="hidden dark:block relative rounded-[2.5rem] overflow-hidden p-[1px]"
            style={{ background: "linear-gradient(135deg, #3b5bdb44, #7048e822, #0ea5e922, #3b5bdb44)" }}>
            <div className="relative rounded-[calc(2.5rem-1px)] overflow-hidden px-8 py-16 md:px-16 md:py-20 text-center bg-[#0a0f2e]">

              {/* Dark blobs inside card */}
              <div aria-hidden className="pointer-events-none absolute -top-28 -left-28 w-80 h-80 rounded-full bg-[#3b5bdb]/22 blur-[70px]" />
              <div aria-hidden className="pointer-events-none absolute -bottom-28 -right-28 w-72 h-72 rounded-full bg-[#7048e8]/18 blur-[65px]" />
              <div aria-hidden className="pointer-events-none absolute top-0 right-1/3 w-40 h-40 rounded-full bg-[#0ea5e9]/12 blur-[50px]" />

              {/* Dot pattern */}
              <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }} />

              <div className="relative z-10">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border font-bold text-[10px] uppercase tracking-[0.28em]
                    border-[#5c7cfa]/30 bg-[#5c7cfa]/10 text-[#a5b4fc]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available for hire
                </motion.span>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15, duration: 0.7 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6 text-white">
                  Let&apos;s Build{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5c7cfa] via-[#c4b5fd] to-[#38bdf8]">
                    Something Great
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 }}
                  className="text-[16px] md:text-lg text-white/50 max-w-xl mx-auto leading-relaxed mb-12">
                  Open to freelance projects and full-time roles. If you have an idea, a product, or a problem — let&apos;s talk.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 }}
                  className="flex flex-col sm:flex-row justify-center items-center gap-4">

                  {/* Primary — dark */}
                  <Link href="/contact"
                    className="group relative flex items-center justify-center gap-2.5 px-8 py-4 w-full sm:w-auto rounded-2xl font-bold text-[15px] text-white overflow-hidden transition-all duration-300 hover:-translate-y-1"
                    style={{ background: "linear-gradient(135deg, #3b5bdb 0%, #5c7cfa 60%, #7048e8 100%)", boxShadow: "0 8px 32px rgba(92,124,250,0.4), 0 0 0 1px rgba(92,124,250,0.25)" }}>
                    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#5c7cfa] via-[#7048e8] to-[#38bdf8]" />
                    <Mail size={18} className="relative z-10" />
                    <span className="relative z-10">Get in Touch</span>
                    <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  {/* Ghost — dark */}
                  <Link href="/projects"
                    className="group flex items-center justify-center gap-2.5 px-8 py-4 w-full sm:w-auto rounded-2xl font-bold text-[15px] transition-all duration-300 hover:-translate-y-1 border-2
                      border-white/12 text-white/70 hover:border-white/28 hover:bg-white/5 hover:text-white">
                    View Projects
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="mt-10 flex items-center justify-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <p className="text-[12px] text-white/28 tracking-wide">Typically responds within 24 hours</p>
                </motion.div>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}