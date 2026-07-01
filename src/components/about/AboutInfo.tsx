"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cloudinaryLoader } from "../../lib/cloudinary";

export default function AboutInfo() {
  const contentSections = [
    {
      title: "OUR MISSION.",
      body: "Our mission is to create innovative and resilient experiences that elevate opportunities, including more emotional, designs for cross communications, and modernizing the evolving web.",
    },
    {
      title: "EXPERTISE & PASSION.",
      body: "Fostering partnerships to build better, stronger solutions. Allowing our cutting-edge frontend and backend skills to shine, with training and deep technology knowledge.",
    },
    {
      title: "A DEVELOPER'S JOURNEY.",
      body: "Descriptions use the detailed copy structure, a scalable process for pragmatic services, and milestones that vary across projects with one constant: innovation and ever more.",
    },
  ];

  return (
    <section className="relative w-full py-16 px-6 md:px-10 xl:px-16 mt-8 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* ── Badge & Heading — static for instant paint ── */}
        <div className="mb-8 lg:mb-12 ml-2 lg:ml-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a07c4b]" />
            <span className="text-[11px] font-extrabold tracking-[0.25em] text-[#a07c4b] uppercase">
              ABOUT ME
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[3.2rem] font-black tracking-tight text-[#1b3b36] dark:text-[#e8efe2]">
            ABOUT SATYA.
          </h2>
        </div>

        {/* ── Two-column layout ── */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20 ml-2 lg:ml-8">
          
          {/* Left Side: Photo inside tablet frame */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-start">
            
            {/* ── STRICT RELATIVE WRAPPER ── */}
            {/* This ensures the SVG and Mock Windows are locked EXACTLY to the photo frame bounds */}
            <div className="relative w-full max-w-[340px] lg:max-w-[400px]">
              
              {/* Background SVG Network strictly behind the image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] pointer-events-none z-0 opacity-40">
                <svg className="w-full h-full text-[#c4a572] stroke-current" viewBox="0 0 200 200" fill="none">
                  <path d="M100 10 L190 100 L100 190 L10 100 Z" strokeWidth="0.4" />
                  <path d="M100 10 L100 190 M10 100 L190 100" strokeWidth="0.4" />
                  <path d="M100 10 L55 55 L10 100 L55 145 L100 190 L145 145 L190 100 L145 55 Z" strokeWidth="0.2" strokeOpacity="0.5" />
                  <circle cx="100" cy="10" r="1.5" fill="currentColor"/>
                  <circle cx="190" cy="100" r="1.5" fill="currentColor"/>
                  <circle cx="100" cy="190" r="1.5" fill="currentColor"/>
                  <circle cx="10" cy="100" r="1.5" fill="currentColor"/>
                  <circle cx="100" cy="100" r="2.5" fill="#b8905b"/>
                  <circle cx="55" cy="55" r="1" fill="currentColor"/>
                  <circle cx="145" cy="55" r="1" fill="currentColor"/>
                  <circle cx="145" cy="145" r="1" fill="currentColor"/>
                  <circle cx="55" cy="145" r="1" fill="currentColor"/>
                </svg>
              </div>

              {/* Floating UI Window - Top Left */}
              <motion.div 
                animate={{ y: [0, -8, 0] }} 
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                style={{ willChange: "transform" }}
                className="absolute -left-6 lg:-left-16 top-[15%] w-24 h-16 bg-[#f4f6f0] border border-[#c4a572]/20 rounded-lg shadow-lg p-1.5 z-20 opacity-90"
              >
                <div className="flex gap-1 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                </div>
                <div className="w-full h-[2px] bg-[#1b3b36]/20 mb-1 rounded"></div>
                <div className="w-3/4 h-[2px] bg-[#1b3b36]/10 mb-1 rounded"></div>
                <div className="w-1/2 h-[2px] bg-[#1b3b36]/10 rounded"></div>
              </motion.div>

              {/* Floating UI Window - Bottom Right */}
              <motion.div 
                animate={{ y: [0, 10, 0] }} 
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                style={{ willChange: "transform" }}
                className="absolute -right-4 lg:-right-12 bottom-[15%] w-28 h-20 bg-[#f4f6f0] border border-[#c4a572]/20 rounded-lg shadow-lg p-1.5 z-20 opacity-90"
              >
                <div className="flex gap-1 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                </div>
                <div className="w-full h-[2px] bg-[#1b3b36]/20 mb-1.5 rounded"></div>
                <div className="w-5/6 h-[2px] bg-[#1b3b36]/10 mb-1.5 rounded"></div>
                <div className="w-4/6 h-[2px] bg-[#1b3b36]/10 mb-1.5 rounded"></div>
                <div className="w-2/6 h-[2px] bg-[#1b3b36]/10 rounded"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full z-10"
              >
                {/* Outer Tablet Frame */}
                <div className="relative rounded-[2rem] p-3.5 bg-gradient-to-b from-[#ffffff] to-[#e5e5e5] shadow-[0_20px_50px_rgba(27,59,54,0.15)] border border-white/60">
                  {/* Inner screen bezel */}
                 <div className="relative aspect-[3/4] rounded-[1.2rem] overflow-hidden bg-[#2a3b34] shadow-inner">
  <Image
    src="https://i.ibb.co/zqj1JWj/my.jpg"
    alt="Satya Prakash"
    fill
    sizes="(max-width: 768px) 100vw, 400px"
    className="object-cover"
    priority
    unoptimized
  />
</div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Content sections */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-[50%] flex flex-col gap-10 lg:pt-4"
          >
            {contentSections.map((section, idx) => (
              <div key={idx} className="flex flex-col">
                <h3 className="text-xl lg:text-[22px] font-black tracking-tight mb-2.5 text-[#1b3b36] dark:text-[#e8efe2]">
                  {section.title}
                </h3>
                <p className="text-[13px] lg:text-[14px] leading-[1.7] font-semibold text-[#1b3b36]/70 dark:text-[#e8efe2]/60 max-w-[95%]">
                  {section.body}
                </p>
              </div>
            ))}

            {/* View Projects Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-2"
            >
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-2 rounded-xl font-bold text-[12px] text-[#1b3b36] shadow-[0_10px_20px_rgba(184,144,91,0.25)] hover:scale-105 transition-transform duration-300"
                style={{
                  background: "linear-gradient(135deg, #d3bb93 0%, #c8aa76 60%, #a07c4b 100%)",
                }}
              >
                View Projects 
                <span className="text-[14px] leading-none ml-1 font-black">&gt;</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}