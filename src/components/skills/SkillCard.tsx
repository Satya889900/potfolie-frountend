"use client";

import { motion } from "framer-motion";

interface SkillCardProps {
  skill: string;
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      className="group relative p-5 rounded-2xl border transition-all duration-300 backdrop-blur-sm cursor-pointer
        bg-white/60 border-[#c4a572]/15 hover:bg-white hover:shadow-xl hover:shadow-[#c4a572]/10
        dark:bg-white/[0.04] dark:border-white/[0.07] dark:hover:bg-white/[0.08] dark:hover:shadow-[#c4a572]/10"
    >
      <h3 className="text-[15px] font-bold text-[#1b3b36] dark:text-[#e8efe2] group-hover:text-[#b8905b] transition-colors duration-200">
        {skill}
      </h3>
    </motion.div>
  );
}