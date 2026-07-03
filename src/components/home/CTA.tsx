"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { cloudinaryLoader } from "../../lib/cloudinary";

export default function CTA() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#f4f6f0] from-50% to-[#1a3023] to-50% dark:from-[#0f1714] dark:to-[#0a1511] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* CTA Card */}
          <div
            className="relative rounded-[2.5rem] border border-[#c4a572]/45 overflow-hidden"
            style={{ background: "linear-gradient(135deg, rgba(200,170,118,0.25) 0%, rgba(42,67,50,0) 50%, rgba(200,170,118,0.15) 100%)" }}
          >
            {/* Inner background with overflow hidden for dot pattern */}
            <div
              className="absolute inset-[1px] rounded-[calc(2.5rem-1px)] overflow-hidden -z-10"
              style={{ background: "linear-gradient(135deg, #11251c 0%, #0a1711 100%)" }}
            >
              {/* Dot pattern */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.09]"
                style={{
                  backgroundImage: "radial-gradient(circle, rgba(232,239,226,0.7) 1px, transparent 1px)",
                  backgroundSize: "26px 26px",
                }}
              />
            </div>

            {/* Content layer */}
            <div className="relative z-10 px-5 sm:px-8 py-8 sm:py-10 md:px-14 md:py-12 overflow-hidden">
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 min-h-[280px]">

                {/* Left: text */}
                <div className="w-full md:w-[50%] lg:w-[52%] text-left z-30">
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="inline-flex items-center gap-1.5 sm:gap-2 mb-4 text-[8px] sm:text-[9px] uppercase tracking-[0.2em] sm:tracking-[0.28em] font-bold text-[#c4a572]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c4a572] animate-pulse" />
                    Available for new Developer
                  </motion.span>

                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15, duration: 0.7 }}
                    className="text-[26px] min-[400px]:text-[30px] lg:text-[38px] font-black tracking-tight leading-tight mb-3 text-[#e8efe2] break-words"
                  >
                    Let&apos;s Build{" "}
                    <span className="font-serif italic bg-gradient-to-r from-[#e8c97a] via-[#c4a572] to-[#b8905b] bg-clip-text text-transparent">
                      Something Great
                    </span>
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 }}
                    className="text-[12px] md:text-sm text-[#e8efe2]/50 max-w-xs leading-relaxed mb-7"
                  >
                    Have a project in mind? Let&apos;s bring your ideas to life.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 }}
                  >
                    <Link
                      href="/contact"
                      className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-[12px] text-[#1b3b36] overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
                      style={{
                        background: "linear-gradient(135deg, #d3bb93 0%, #c8aa76 60%, #a07c4b 100%)",
                        boxShadow: "0 8px 28px rgba(200,170,118,0.3)",
                      }}
                    >
                      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#c8aa76] via-[#d3bb93] to-[#c8aa76]" />
                      <span className="relative z-10">Get in Touch</span>
                      <ArrowRight size={14} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-5 flex items-center gap-2.5"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <p className="text-[11px] text-[#e8efe2]/30 tracking-wide">Typically responds within 14 hours</p>
                  </motion.div>
                </div>

                {/* Right: Tech 3D Illustration */}
                <motion.div
                  initial={{ opacity: 0, x: 40, scale: 0.92 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="relative md:absolute right-0 md:right-4 lg:right-6 top-0 md:top-1/2 transform-none md:-translate-y-1/2 mt-8 md:mt-0 self-center w-[240px] h-[220px] sm:w-[280px] sm:h-[260px] md:w-[380px] md:h-[350px] lg:w-[460px] lg:h-[420px] z-20 pointer-events-none"
                >
                  <div 
                    className="relative w-full h-full"
                    style={{
                      maskImage: "radial-gradient(circle, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 75%)",
                      WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 75%)"
                    }}
                  >
                    <Image
                      loader={cloudinaryLoader}
                      src="/cta_3d_isometric.png"
                      alt="Web Development Illustration"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain"
                      priority
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
