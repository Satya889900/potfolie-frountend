"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#f4f6f0] from-50% to-[#1a3023] to-50% dark:from-[#0f1714] dark:to-[#0a1511] transition-colors duration-500">
      

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* CTA Card */}
          <div
            className="relative rounded-[2.5rem] p-[1.5px]"
            style={{ background: "linear-gradient(135deg, rgba(200,170,118,0.4) 0%, rgba(42,67,50,0) 50%, rgba(200,170,118,0.2) 100%)" }}
          >
            {/* Background Layer with Overflow Hidden for Blobs */}
            <div
              className="absolute inset-[1.5px] rounded-[calc(2.5rem-1.5px)] overflow-hidden"
              style={{ background: "linear-gradient(135deg, #2d4f3b 0%, #1e3325 100%)" }}
            >
              {/* Decorative blobs */}
              <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#b8905b]/10 blur-[60px]" />
              <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-[#1b3b36]/40 blur-[60px]" />

              {/* Stars / dot pattern */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.15]"
                style={{
                  backgroundImage: "radial-gradient(circle, rgba(232,239,226,0.6) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
            </div>

            {/* Content Layer (No overflow hidden) */}
            <div className="relative z-10 px-8 py-12 md:px-16 md:py-14">

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 min-h-[350px]">
                <div className="w-full md:w-[55%] lg:w-[50%] text-left z-30">
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="inline-flex items-center gap-2 mb-4 text-[10px] uppercase tracking-[0.28em] font-bold text-[#c4a572]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c4a572] animate-pulse" />
                    Available for new Developer
                  </motion.span>

                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15, duration: 0.7 }}
                    className="text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4 text-[#e8efe2]"
                  >
                    Let&apos;s Build Something<br />
                    <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#e8efe2] via-[#c4a572] to-[#b8905b]">
                      Great
                    </span>
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 }}
                    className="text-[15px] md:text-base text-[#e8efe2]/60 max-w-md leading-relaxed mb-8"
                  >
                    Have a project in mind? Let&apos;s bring your ideas to life.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 }}
                    className="flex flex-col sm:flex-row items-start gap-4"
                  >
                    <Link
                      href="/contact"
                      className="group relative flex items-center justify-center gap-2.5 px-6 py-3 w-fit rounded-xl font-bold text-sm text-[#1b3b36] overflow-hidden transition-all duration-300 hover:-translate-y-1"
                      style={{
                        background: "linear-gradient(135deg, #d3bb93 0%, #c8aa76 60%, #a07c4b 100%)",
                        boxShadow: "0 8px 32px rgba(200,170,118,0.3)",
                      }}
                    >
                      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#c8aa76] via-[#d3bb93] to-[#c8aa76]" />
                      <span className="relative z-10">Get in Touch</span>
                      <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-6 flex items-center gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <p className="text-[12px] text-[#e8efe2]/40 tracking-wide">Typically responds within 14 hours</p>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="absolute right-0 md:-right-8 top-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[450px] md:h-[500px] lg:w-[600px] lg:h-[650px] z-20 pointer-events-none"
                >
                  <Image 
                    src="/cta_laptop_green.png" 
                    alt="Laptop" 
                    fill 
                    className="object-contain object-right drop-shadow-[0_0_40px_rgba(184,144,91,0.3)] mix-blend-lighten" 
                    priority 
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}