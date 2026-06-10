"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const smoothMouseX = useSpring(mouseX, { stiffness: 280, damping: 28 });

  const clipPath = useTransform(
    smoothMouseX,
    (v) => `polygon(${v * 100}% 0%, 100% 0%, 100% 100%, ${v * 100}% 100%)`
  );

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(Math.max(0.05, Math.min((e.clientX - rect.left) / rect.width, 0.95)));
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => mouseX.set(0.5)}
      className="
      relative min-h-screen w-full overflow-hidden select-none
      flex flex-col items-center justify-center
      bg-white dark:bg-[#060d24]
      transition-colors duration-500
    ">

      {/* ── LIGHT MODE background ── */}
      <div aria-hidden className="dark:hidden pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, #dbeafe 0%, #eff6ff 40%, #ffffff 100%)" }} />
      <div aria-hidden className="dark:hidden pointer-events-none absolute top-[-60px] left-[-60px] w-[480px] h-[480px] rounded-full bg-blue-200/60 blur-[90px]" />
      <div aria-hidden className="dark:hidden pointer-events-none absolute bottom-[-40px] right-[-40px] w-[400px] h-[400px] rounded-full bg-indigo-200/50 blur-[80px]" />
      <div aria-hidden className="dark:hidden pointer-events-none absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-violet-100/60 blur-[70px]" />

      {/* ── DARK MODE background ── */}
      <div aria-hidden className="hidden dark:block pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, #0f1f5c 0%, #060d24 50%, #060d24 100%)" }} />
      <div aria-hidden className="hidden dark:block pointer-events-none absolute top-[-100px] left-[-100px] w-[560px] h-[560px] rounded-full bg-[#1c3faa]/25 blur-[100px]" />
      <div aria-hidden className="hidden dark:block pointer-events-none absolute bottom-[-80px] right-[-80px] w-[460px] h-[460px] rounded-full bg-[#3b5bdb]/18 blur-[90px]" />
      <div aria-hidden className="hidden dark:block pointer-events-none absolute top-1/3 right-1/4 w-[280px] h-[280px] rounded-full bg-violet-700/10 blur-[60px]" />

      {/* Dot grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(28,63,170,0.12) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />

      {/* ── TYPOGRAPHY COLUMNS ── */}
      <div className="absolute inset-0 flex items-center justify-between px-8 md:px-16 xl:px-24 pointer-events-none z-10">

        {/* Left: Frontend */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="hidden md:flex flex-col w-[32%]"
        >
          <span className="text-[10px] uppercase tracking-[0.35em] font-bold mb-3 block
            text-[#3b5bdb] dark:text-[#748ffc]">
            ✦ Visual Layer
          </span>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black leading-[0.95] tracking-tight mb-5
            text-[#1c3faa] dark:text-white transition-colors">
            front<span className="text-transparent bg-clip-text
              bg-gradient-to-br from-[#1c3faa] via-[#3b5bdb] to-[#7048e8]
              dark:from-[#5c7cfa] dark:via-[#a5b4fc] dark:to-[#c4b5fd]">
              end.
            </span>
          </h1>
          <div className="flex items-center gap-2 mb-5">
            <div className="h-[2px] w-8 rounded-full bg-gradient-to-r from-[#1c3faa] to-[#7048e8] dark:from-[#5c7cfa] dark:to-[#c4b5fd]" />
            <div className="h-[2px] w-3 rounded-full bg-[#1c3faa]/20 dark:bg-white/15" />
          </div>
          <p className="text-[14px] leading-relaxed max-w-[220px]
            text-[#1e40af]/65 dark:text-white/45 transition-colors">
            Pixel-perfect interfaces with motion, accessibility, and depth.
          </p>
          {/* Tech pills */}
          <div className="flex flex-wrap gap-2 mt-5">
            {["React", "Next.js", "Tailwind"].map((t) => (
              <span key={t} className="text-[10px] font-semibold px-2.5 py-1 rounded-full border tracking-wide
                border-[#1c3faa]/20 text-[#1c3faa]/70 bg-[#1c3faa]/5
                dark:border-[#5c7cfa]/25 dark:text-[#a5b4fc] dark:bg-[#5c7cfa]/8
                transition-colors">
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right: Backend */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="hidden md:flex flex-col items-end w-[32%] text-right"
        >
          <span className="text-[10px] uppercase tracking-[0.35em] font-bold mb-3 block
            text-[#3b5bdb] dark:text-[#748ffc]">
            Logic Layer ✦
          </span>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black leading-[0.95] tracking-tight mb-5 font-mono
            text-[#1c3faa] dark:text-white transition-colors">
            &lt;back<span className="text-transparent bg-clip-text
              bg-gradient-to-bl from-[#7048e8] via-[#3b5bdb] to-[#1c3faa]
              dark:from-[#c4b5fd] dark:via-[#a5b4fc] dark:to-[#5c7cfa]">
              end/&gt;
            </span>
          </h1>
          <div className="flex items-center justify-end gap-2 mb-5">
            <div className="h-[2px] w-3 rounded-full bg-[#1c3faa]/20 dark:bg-white/15" />
            <div className="h-[2px] w-8 rounded-full bg-gradient-to-l from-[#1c3faa] to-[#7048e8] dark:from-[#5c7cfa] dark:to-[#c4b5fd]" />
          </div>
          <p className="text-[14px] leading-relaxed max-w-[220px]
            text-[#1e40af]/65 dark:text-white/45 transition-colors">
            Scalable, secure, and resilient server architectures built to last.
          </p>
          {/* Tech pills */}
          <div className="flex flex-wrap justify-end gap-2 mt-5">
            {["Node.js", "PostgreSQL", "REST"].map((t) => (
              <span key={t} className="text-[10px] font-semibold px-2.5 py-1 rounded-full border tracking-wide
                border-[#7048e8]/20 text-[#7048e8]/80 bg-[#7048e8]/5
                dark:border-[#c4b5fd]/20 dark:text-[#c4b5fd] dark:bg-[#c4b5fd]/8
                transition-colors">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── INTERACTIVE IMAGE REVEAL ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className="relative w-[340px] h-[430px] sm:w-[420px] sm:h-[520px] lg:w-[500px] lg:h-[620px] xl:w-[580px] xl:h-[720px] z-20 pointer-events-none rounded-[2rem] overflow-hidden touch-none"
        style={{
          boxShadow: "0 0 0 1px rgba(59,91,219,0.2), 0 30px 80px rgba(28,63,170,0.28), 0 0 0 6px rgba(255,255,255,0.06)",
        }}
      >
        {/* Base image — Frontend */}
        <div className="absolute inset-0">
          <Image src="/imges45.jpg" alt="Frontend" fill className="object-cover" priority />
          <div className="absolute inset-0
            bg-gradient-to-t from-blue-900/30 via-transparent to-transparent
            dark:from-[#060d24]/40 dark:via-transparent dark:to-transparent
            transition-colors" />
        </div>

        {/* Reveal image — Backend */}
        <motion.div style={{ clipPath }} className="absolute inset-0">
          <Image src="/imge4.jpg" alt="Backend" fill className="object-cover" priority />
          <div className="absolute inset-0
            bg-gradient-to-t from-violet-900/30 via-transparent to-transparent
            dark:from-[#060d24]/40 dark:via-transparent dark:to-transparent
            transition-colors" />
        </motion.div>

        {/* Divider line */}
        <motion.div
          style={{ left: useTransform(smoothMouseX, (v) => `${v * 100}%`) }}
          className="absolute top-0 bottom-0 w-[2px] z-30 -translate-x-1/2 pointer-events-none"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-90" />
          {/* Handle knob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center shadow-xl
            bg-white/80 border-2 border-[#3b5bdb]/30 backdrop-blur-md
            dark:bg-white/10 dark:border-white/30">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5 8H1M11 8H15M5 5L1 8L5 11M11 5L15 8L11 11"
                stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
                className="text-[#1c3faa] dark:text-white"/>
            </svg>
          </div>
        </motion.div>

        {/* Corner labels */}
        <div className="absolute top-4 left-4 z-40 px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wider backdrop-blur-md border
          bg-white/80 border-blue-200/80 text-[#1c3faa]
          dark:bg-[#060d24]/70 dark:border-white/10 dark:text-white/80
          transition-colors shadow-sm">
          UI / UX
        </div>
        <div className="absolute top-4 right-4 z-40 px-3 py-1.5 rounded-full text-[11px] font-mono font-bold tracking-wider backdrop-blur-md border
          bg-white/80 border-violet-200/80 text-[#7048e8]
          dark:bg-[#060d24]/70 dark:border-white/10 dark:text-[#c4b5fd]
          transition-colors shadow-sm">
          API
        </div>

        {/* Bottom gradient text overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-30 p-5 flex justify-between items-end pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(0,0,20,0.55) 0%, transparent 100%)" }}>
          <span className="text-white/80 text-[11px] font-semibold tracking-widest uppercase">Frontend</span>
          <span className="text-white/80 text-[11px] font-semibold tracking-widest uppercase font-mono">Backend</span>
        </div>
      </motion.div>

      {/* Mobile hint */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-8 left-0 right-0 z-40 text-center md:hidden pointer-events-none"
      >
        <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium backdrop-blur-md border
          bg-white/70 border-blue-200/60 text-[#1c3faa]
          dark:bg-white/5 dark:border-white/10 dark:text-white/60
          transition-colors">
          ← Drag to reveal →
        </span>
      </motion.p>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2 z-20"
      >
        <span className="text-[9px] uppercase tracking-[0.28em] [writing-mode:vertical-lr]
          text-[#1c3faa]/40 dark:text-white/25 transition-colors">
          Scroll
        </span>
        <motion.div
          animate={{ scaleY: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-10 origin-top rounded-full
            bg-gradient-to-b from-[#1c3faa]/50 dark:from-white/30 to-transparent"
        />
      </motion.div>

      {/* Name badge — center top */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="absolute top-8 left-1/2 -translate-x-1/2 z-30 px-5 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md border
          bg-white/80 border-blue-200/70 text-[#1c3faa]
          dark:bg-white/5 dark:border-[#3b5bdb]/30 dark:text-[#a5b4fc]
          transition-colors shadow-sm hidden md:block"
      >
        Full-Stack Developer
      </motion.div>
    </section>
  );
}