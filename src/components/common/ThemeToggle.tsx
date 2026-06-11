"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-1">
        <div className="h-8 w-8 rounded-full bg-white/60 dark:bg-white/5 border border-[#1b3b36]/10" />
        <div className="h-8 w-8 rounded-full bg-white/60 dark:bg-white/5 border border-[#1b3b36]/10" />
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div className="flex items-center gap-1">
      {/* Sun (light mode) button */}
      <button
        onClick={() => setTheme("light")}
        aria-label="Light mode"
        className={`
          relative flex h-9 w-9 items-center justify-center
          rounded-xl border
          cursor-pointer
          transition-all duration-200
          hover:scale-110
          active:scale-95
          ${!isDark
            ? "bg-[#b8905b]/15 border-[#b8905b]/30 text-[#b8905b] shadow-sm"
            : "bg-white/5 border-[#1b3b36]/15 dark:border-[#b8905b]/10 text-[#2a3b34]/50 dark:text-[#e8efe2]/30 hover:text-[#b8905b]"
          }
        `}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key="sun"
            initial={{ rotate: 30, opacity: 0, scale: 0.7 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -30, opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.18 }}
          >
            <Sun size={16} />
          </motion.span>
        </AnimatePresence>
      </button>

      {/* Moon (dark mode) button */}
      <button
        onClick={() => setTheme("dark")}
        aria-label="Dark mode"
        className={`
          relative flex h-9 w-9 items-center justify-center
          rounded-xl border
          cursor-pointer
          transition-all duration-200
          hover:scale-110
          active:scale-95
          ${isDark
            ? "bg-[#b8905b]/15 border-[#b8905b]/30 text-[#c4a572] shadow-sm"
            : "bg-white/60 border-[#1b3b36]/15 text-[#2a3b34]/50 hover:text-[#1b3b36]"
          }
        `}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key="moon"
            initial={{ rotate: -30, opacity: 0, scale: 0.7 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 30, opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.18 }}
          >
            <Moon size={16} />
          </motion.span>
        </AnimatePresence>
      </button>
    </div>
  );
}