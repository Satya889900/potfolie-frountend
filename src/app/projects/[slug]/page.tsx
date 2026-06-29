"use client";

import { motion } from "framer-motion";
import { use } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProjectDetailsPage({ params }: Props) {
  const { slug } = use(params);

  const features = [
    "Authentication",
    "CRUD Operations",
    "Responsive UI",
    "REST APIs"
  ];

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

      <div className="relative z-10 flex-1 flex flex-col min-h-screen py-16 px-6 md:px-10 xl:px-16">
        <div className="max-w-4xl mx-auto w-full">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#b8905b] hover:text-[#1b3b36] dark:hover:text-[#e8efe2] transition-colors"
            >
              <ArrowLeft size={14} /> Back to Projects
            </Link>
          </div>

          {/* Card Wrapper */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 md:p-12 rounded-[2.5rem] border backdrop-blur-sm
              bg-white/60 border-[#c4a572]/15 shadow-xl shadow-[#c4a572]/5
              dark:bg-white/[0.04] dark:border-white/[0.07] dark:shadow-none"
          >
            <span className="inline-block px-3 py-1 mb-4 rounded-full text-[10px] font-black tracking-wider text-[#243d2c] dark:text-[#c4a572] bg-[#c3a981]/25 uppercase">
              Project Details
            </span>

            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-[#1b3b36] dark:text-[#e8efe2] leading-tight mb-6 uppercase">
              {slug.replaceAll("-", " ")}.
            </h1>

            <div className="w-full h-px bg-[#1b3b36]/10 dark:bg-white/10 my-6" />

            <p className="text-[15px] leading-relaxed text-[#1b3b36]/75 dark:text-[#e8efe2]/70 font-semibold mb-8">
              Detailed project information goes here. This application features state-of-the-art architectures, modern responsive frontend flows, and robust backend endpoints.
            </p>

            <h2 className="text-xl font-black text-[#1b3b36] dark:text-[#e8efe2] mb-4 uppercase">
              Key Features
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-2.5 text-[14px] font-bold text-[#1b3b36]/70 dark:text-[#e8efe2]/70">
                  <CheckCircle2 size={16} className="text-[#b8905b]" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </main>
  );
}