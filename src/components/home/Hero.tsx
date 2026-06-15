"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cloudinaryLoader } from "../../lib/cloudinary";
import { Zap, Layout, Accessibility, Server, Shield, Cloud, Play, ChevronRight, BarChart2 } from "lucide-react";

/* ── Data ─────────────────────────────────────────────────── */
const frontendFeatures = [
  {
    icon: <Zap size={16} strokeWidth={2.5} />,
    title: "Fast & Optimized",
    sub: "Blazing fast performance",
  },
  {
    icon: <Layout size={16} strokeWidth={2.5} />,
    title: "Modern UI/UX",
    sub: "Clean, intuitive & responsive",
  },
  {
    icon: <Accessibility size={16} strokeWidth={2.5} />,
    title: "Accessible",
    sub: "Inclusive for everyone",
  },
];

const backendFeatures = [
  {
    icon: <BarChart2 size={16} strokeWidth={2.5} />,
    title: "Scalable",
    sub: "Built to handle growth",
  },
  {
    icon: <Shield size={16} strokeWidth={2.5} />,
    title: "Secure",
    sub: "Security by design",
  },
  {
    icon: <Cloud size={16} strokeWidth={2.5} />,
    title: "Reliable",
    sub: "99.9% uptime focus",
  },
];

const backendTechs = ["Node.js", "PostgreSQL", "REST", "AI"];

const stats = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
    value: "20+",
    label: "Projects completed",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    value: "10+",
    label: "Happy Clients",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
      </svg>
    ),
    value: "3+",
    label: "Years Experience",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    value: "Clean Code",
    label: "Best Practices",
  },
];

const centerTabs = ["UF/UX", "Vue", "API"];

/* ── Component ─────────────────────────────────────────────── */
export default function Hero() {
  const [hoverSide, setHoverSide] = useState<"left" | "right" | null>(null);

  const leftWidth = hoverSide === "left" ? "70%" : hoverSide === "right" ? "30%" : "50%";
  const rightWidth = hoverSide === "right" ? "70%" : hoverSide === "left" ? "30%" : "50%";

  return (
    <section className="relative w-full overflow-hidden flex flex-col pb-12">
      {/* ── SPLIT BACKGROUND ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 flex z-0">
        <div className="h-full bg-[#f4f6f0] transition-all duration-700 ease-in-out" style={{ width: leftWidth }} />
        <div className="h-full bg-[#1b3b36] transition-all duration-700 ease-in-out" style={{ width: rightWidth }} />
      </div>

      {/* Decorative stars */}
      <div aria-hidden className="pointer-events-none absolute top-32 right-[25%] text-[#b8905b]/60 z-10">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16.4 5.6 21.2 8 14 2 9.2h7.6z"/></svg>
      </div>
      <div aria-hidden className="pointer-events-none absolute top-48 left-[20%] text-[#b8905b]/40 z-10">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16.4 5.6 21.2 8 14 2 9.2h7.6z"/></svg>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 flex flex-col w-full">

        {/* Three-column layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-10 xl:px-20 pt-8 pb-12 w-full max-w-full 2xl:max-w-[1900px] mx-auto gap-8 lg:gap-4">

          {/* ════════════════════════════════════
              LEFT — Frontend
          ════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            onMouseEnter={() => setHoverSide("left")}
            onMouseLeave={() => setHoverSide(null)}
            className={`flex flex-col w-full lg:w-[25%] xl:w-[25%] max-w-[500px] pointer-events-auto items-start text-left transition-all duration-700 ${
              hoverSide === "right" ? "opacity-15 blur-[5px] scale-85" : "opacity-100 blur-0 scale-100"
            }`}
          >
            {/* Top badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8 w-fit bg-[#e8efe2] border-[#d2bfa6]/60 text-[#b8905b] text-[10px] font-extrabold tracking-[0.18em] uppercase shadow-[0_2px_10px_rgba(184,144,91,0.1)]">
              <Zap size={11} fill="currentColor" className="text-[#b8905b]" /> FULL STACK DEVELOPER
            </div>

            {/* Label */}
            <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 text-[#a07c4b]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a07c4b]" />
              VISUAL LAYER
            </span>

            {/* Heading */}
            <h1 className="text-[3.2rem] sm:text-[4.2rem] xl:text-[5.5rem] font-black leading-[0.9] tracking-tight mb-4 text-[#1b3b36]">
              frontend.
            </h1>

            {/* Description */}
            <p className="text-[14px] leading-relaxed mb-10 text-[#1b3b36]/80 font-medium max-w-[90%]">
              Pixel-perfect interfaces with modern, accessibility, and depth.
            </p>

            {/* Feature lists */}
            <div className="flex flex-col gap-5 mb-10 w-full pl-1">
              {frontendFeatures.map(({ icon, title, sub }) => (
                <div key={title} className="flex items-center gap-4 group cursor-default">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-[#b8905b] text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                    <div className="scale-[0.8]">{icon}</div>
                  </div>
                  <div className="text-left">
                    <p className="text-[15px] font-extrabold leading-tight text-[#1b3b36] mb-0.5">{title}</p>
                    <p className="text-[12px] text-[#1b3b36]/70 font-medium">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-5 w-full">
              <Link href="/projects"
                className="flex items-center gap-2 px-6 py-3 rounded-full text-[13px] font-bold text-[#1b3b36] bg-gradient-to-r from-[#c4a572] to-[#a07c4b] shadow-[0_8px_20px_rgba(160,124,75,0.3)] hover:scale-105 transition-transform duration-300">
                View Projects
                <ChevronRight size={14} strokeWidth={3} />
              </Link>
              <Link href="/about"
                className="group flex items-center gap-2 text-[13px] font-extrabold text-[#1b3b36] hover:text-[#a07c4b] transition-colors duration-300">
                See My Work
                <div className="w-7 h-7 rounded-full border-2 border-current flex items-center justify-center text-[#1b3b36] group-hover:text-[#a07c4b] transition-colors">
                  <Play size={10} fill="currentColor" className="ml-0.5" />
                </div>
              </Link>
            </div>
          </motion.div>

          {/* ════════════════════════════════════
              CENTER — Static Hero Image
          ════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative flex-shrink-0 z-20 w-full lg:w-[50%] xl:w-[50%] max-w-[900px] flex flex-col items-center"
          >
            {/* Tabs floating above */}
            <div className="flex justify-center gap-3 mb-4 w-full relative z-30">
              <div className="px-5 py-1.5 rounded-full text-[10px] font-extrabold tracking-wider uppercase backdrop-blur-md border shadow-sm bg-[#f4f6f0]/80 border-[#1b3b36]/10 text-[#1b3b36]">
                UF/UX
              </div>
              <div className="px-5 py-1.5 rounded-full text-[10px] font-extrabold tracking-wider uppercase backdrop-blur-md border shadow-sm bg-[#1b3b36]/80 border-[#b8905b]/20 text-[#e8efe2]">
                Vue
              </div>
              <div className="px-5 py-1.5 rounded-full text-[10px] font-extrabold tracking-wider uppercase backdrop-blur-md border shadow-sm bg-[#1b3b36]/80 border-[#b8905b]/20 text-[#e8efe2]">
                API
              </div>
            </div>

            {/* Image container with floating tabs */}
            <div 
              className="relative w-full aspect-[4/3.5] rounded-[2rem] overflow-hidden shadow-2xl shadow-[#1b3b36]/30 border-4 border-[#1b3b36]/5 bg-[#1b3b36] transition-all duration-700 ease-in-out"
              style={{
                transform: hoverSide === "left" ? "perspective(1200px) rotateY(10deg) scale(1.1)" : hoverSide === "right" ? "perspective(1200px) rotateY(-10deg) scale(1.1)" : "perspective(1200px) rotateY(0deg) scale(1)",
              }}
            >
              {/* Image */}
              <Image loader={cloudinaryLoader} src="/hero_split.png" alt="Frontend and Backend Developer" fill className="object-cover" priority />
              
              {/* Bottom labels inside image */}
              <div className="absolute bottom-4 inset-x-0 flex justify-between px-10 text-white text-[10px] font-extrabold tracking-[0.2em] uppercase">
                <span className="flex items-center gap-2"><Layout size={12}/> FRONTEND</span>
                <span className="flex items-center gap-2"><Server size={12}/> BACKEND</span>
              </div>
            </div>
          </motion.div>

          {/* ════════════════════════════════════
              RIGHT — Backend
          ════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            onMouseEnter={() => setHoverSide("right")}
            onMouseLeave={() => setHoverSide(null)}
            className={`flex flex-col w-full lg:w-[25%] xl:w-[25%] max-w-[500px] pointer-events-auto items-start text-left mt-12 lg:mt-0 transition-all duration-700 ${
              hoverSide === "left" ? "opacity-15 blur-[5px] scale-85" : "opacity-100 blur-0 scale-100"
            }`}
          >
            {/* Label */}
            <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3 text-[#c4a572]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c4a572]" />
              LOGIC LAYER
            </span>

            {/* Heading */}
            <h1 className="text-[3.2rem] sm:text-[4.2rem] xl:text-[5.5rem] font-bold leading-[0.9] tracking-tight mb-4 font-serif text-[#d2bfa6] drop-shadow-[0_0_15px_rgba(210,191,166,0.3)]">
              &lt;backend/&gt;
            </h1>

            {/* Description */}
            <p className="text-[14px] leading-relaxed mb-10 text-[#e8efe2]/80 font-medium max-w-[90%]">
              Scalable, secure, and resilient server architectures built to last.
            </p>

            {/* Feature lists */}
            <div className="flex flex-col gap-5 mb-10 w-full pl-1">
              {backendFeatures.map(({ icon, title, sub }) => (
                <div key={title} className="flex items-center gap-4 group cursor-default">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-[#c4a572] text-[#1b3b36] shadow-md group-hover:scale-110 transition-transform duration-300">
                    <div className="scale-[0.8]">{icon}</div>
                  </div>
                  <div className="text-left">
                    <p className="text-[15px] font-extrabold leading-tight text-[#e8efe2] mb-0.5">{title}</p>
                    <p className="text-[12px] text-[#e8efe2]/60 font-medium">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-2 justify-start">
              {backendTechs.map((t) => (
                <span key={t}
                  className="text-[11px] font-bold px-4 py-1.5 rounded-xl border tracking-wider bg-transparent border-[#c4a572]/30 text-[#e8efe2]/80">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ════════════════════════════════════
            BOTTOM STATS BAR
        ════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-[1000px] px-6 relative z-30"
        >
          <div className="rounded-[2rem] bg-white shadow-[0_10px_40px_rgba(27,59,54,0.15)] overflow-hidden">
            <div className="flex flex-col md:flex-row divide-y-2 md:divide-y-0 md:divide-x-2 divide-[#f4f6f0]">
              {stats.map(({ icon, value, label }) => (
                <div key={label} className="flex-1 flex items-center justify-center gap-4 py-6 px-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-[#1b3b36] text-[#b8905b] shadow-inner">
                    {icon}
                  </div>
                  <div className="text-left">
                    <p className="text-xl font-black text-[#1b3b36] leading-none mb-1">
                      {value}
                    </p>
                    <p className="text-[11px] font-extrabold text-[#1b3b36]/60 leading-tight uppercase tracking-wider">
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}