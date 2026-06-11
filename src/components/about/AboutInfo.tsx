"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutInfo() {
  const facts = [
    { label: "Location", value: "India" },
    { label: "Experience", value: "3+ Years" },
    { label: "Focus", value: "Full Stack Web" },
    { label: "Availability", value: "Open to Work" },
  ];

  return (
    <section className="relative w-full py-20 px-6 md:px-10 xl:px-16 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
        
        {/* Left Side: Image / Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: -40 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full max-w-[400px] lg:max-w-[450px] aspect-[4/5] rounded-[2.5rem] overflow-hidden"
          style={{
            boxShadow:
              "0 0 0 1.5px rgba(99,102,241,0.35), 0 30px 60px rgba(28,63,170,0.25), 0 0 60px rgba(124,58,237,0.15)",
          }}
        >
          <Image src="/imges45.jpg" alt="Satya Prakash" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c2a6e]/80 via-transparent to-transparent dark:from-[#07071a]/90 transition-colors" />
          
          <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl backdrop-blur-md border bg-white/20 border-white/30 dark:bg-black/20 dark:border-white/10 shadow-xl">
            <p className="text-white font-bold text-lg">Satya Prakash</p>
            <p className="text-blue-200 dark:text-blue-300 text-sm font-medium">Full Stack Developer</p>
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex-1"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 w-fit
            bg-white/80 border-blue-200/80 text-[#1c3faa] shadow-sm
            dark:bg-white/[0.06] dark:border-blue-500/25 dark:text-blue-300
            text-[11px] font-bold tracking-[0.2em] uppercase backdrop-blur-sm">
            <span>👋</span> Get to know me
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-6
            text-[#1c2a6e] dark:text-white transition-colors">
            Crafting digital <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text
              bg-gradient-to-br from-[#1c3faa] via-[#3b5bdb] to-[#7048e8]
              dark:from-[#818cf8] dark:via-[#a5b4fc] dark:to-[#c4b5fd]">
              experiences.
            </span>
          </h2>

          <div className="h-[3px] w-24 rounded-full mb-8
            bg-gradient-to-r from-[#1c3faa] to-[#7048e8]
            dark:from-[#818cf8] dark:to-[#c4b5fd]" />

          <p className="text-[16px] md:text-[18px] leading-relaxed mb-8
            text-slate-600 dark:text-white/60 transition-colors">
            Hi, I&apos;m Satya Prakash, a passionate Full Stack Developer specializing in Next.js, React, Java, Spring Boot, MongoDB, and MySQL. I enjoy bridging the gap between elegant frontend interfaces and robust backend architectures.
            <br/><br/>
            My goal is to build scalable applications that solve real-world problems while constantly learning and adopting modern technologies.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {facts.map((fact, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-4 rounded-2xl border transition-all duration-300
                  bg-white/60 border-blue-100/70 hover:bg-white hover:shadow-lg hover:shadow-blue-200/40
                  dark:bg-white/[0.04] dark:border-white/[0.07] dark:hover:bg-white/[0.08] dark:hover:shadow-violet-900/20
                  backdrop-blur-sm"
              >
                <p className="text-[12px] uppercase tracking-wider text-slate-400 dark:text-white/40 mb-1">{fact.label}</p>
                <p className="text-[16px] font-bold text-slate-800 dark:text-white">{fact.value}</p>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}