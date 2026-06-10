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
      <div className="h-9 w-[70px] rounded-full border border-[#c5d0f5] dark:border-blue-800/50 bg-white/60 dark:bg-white/5" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle Theme"
      className={`
        relative flex h-9 w-9 items-center justify-center
        rounded-xl border border-blue-200 dark:border-blue-800/50
        bg-white/60 dark:bg-white/5
        text-blue-800 dark:text-blue-200
        cursor-pointer
        transition-all duration-200
        hover:scale-110 hover:shadow-lg
        hover:border-[#1c3faa]/50 dark:hover:border-blue-400/30
        active:scale-95
      `}
    >
      <span className={`absolute left-[10px] transition-opacity duration-200 ${isDark ? "opacity-30" : "opacity-70"}`}>
        <Sun size={13} className="text-amber-500" />
      </span>
      <span className={`absolute right-[10px] transition-opacity duration-200 ${isDark ? "opacity-70" : "opacity-30"}`}>
        <Moon size={13} className="text-[#5c7cfa]" />
      </span>

      {/* Sliding pill */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className={`
          absolute h-[26px] w-[26px] rounded-full flex items-center justify-center shadow-md z-10
          ${isDark
            ? "right-[5px] bg-gradient-to-br from-[#3b5bdb] to-[#5c7cfa]"
            : "left-[5px] bg-gradient-to-br from-amber-400 to-orange-400"
          }
        `}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.span
              key="moon"
              initial={{ rotate: -30, opacity: 0, scale: 0.7 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 30, opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.18 }}
            >
              <Moon size={13} className="text-white" />
            </motion.span>
          ) : (
            <motion.span
              key="sun"
              initial={{ rotate: 30, opacity: 0, scale: 0.7 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -30, opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.18 }}
            >
              <Sun size={13} className="text-white" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </button>
  );
}