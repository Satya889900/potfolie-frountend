"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { Blog } from "@/types/Blog";

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group relative p-6 rounded-3xl border transition-all duration-300 backdrop-blur-sm flex flex-col justify-between min-h-[260px]
        bg-white/60 border-[#c4a572]/15 hover:bg-white hover:shadow-xl hover:shadow-[#c4a572]/10
        dark:bg-white/[0.04] dark:border-white/[0.07] dark:hover:bg-white/[0.08] dark:hover:shadow-[#c4a572]/10"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-black tracking-wider text-[#243d2c] dark:text-[#c4a572] bg-[#c3a981]/25 uppercase">
            {blog.category}
          </span>
          <span className="text-[#1b3b36]/40 dark:text-[#e8efe2]/40">
            <BookOpen size={16} />
          </span>
        </div>

        <h2 className="text-xl font-bold text-[#1b3b36] dark:text-white group-hover:text-[#b8905b] transition-colors duration-200 tracking-tight leading-snug">
          {blog.title}
        </h2>

        <p className="mt-3 text-[13px] font-medium leading-relaxed text-[#1b3b36]/65 dark:text-[#e8efe2]/60 line-clamp-3">
          {blog.description}
        </p>
      </div>

      <div className="mt-6">
        <Link
          href={`/blog/${blog.slug}`}
          className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#243d2c] dark:text-[#c4a572] hover:underline"
        >
          Read More
          <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}