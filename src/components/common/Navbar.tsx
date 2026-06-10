"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "../../constants/navLinks";
import ThemeToggle from "./ThemeToggle";
import { useScrolled } from "../../hooks/useScrolled";

/* ── mobile-menu animation variants ─────────────────────── */
const overlay = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const drawer = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 30 },
  },
  exit: {
    x: "100%",
    transition: { type: "spring" as const, stiffness: 300, damping: 30 },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.04 } },
};

const linkItem = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
};

/* ── component ───────────────────────────────────────────── */
export default function Navbar() {
  const pathname = usePathname();
  const scrolled = useScrolled(20);
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`
        sticky top-0 z-50 w-full
        transition-all duration-300 ease-out
        ${
          scrolled
            ? "bg-white/80 dark:bg-blue-950/70 backdrop-blur-xl shadow-[0_1px_3px_rgba(28,63,170,.10)] border-b border-blue-100/60 dark:border-blue-800/50"
            : "bg-transparent"
        }
      `}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        {/* ── logo ─────────────────────────────────── */}
        <Link
          href="/"
          className="group relative text-2xl font-extrabold tracking-tight select-none"
        >
          <span className="bg-gradient-to-r from-[#1c3faa] via-[#3b5bdb] to-[#5c7cfa] bg-clip-text text-transparent">
            Satya
          </span>
          <span className="text-blue-900 dark:text-white">.</span>
          <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-gradient-to-r from-[#1c3faa] to-[#5c7cfa] transition-all duration-300 group-hover:w-full" />
        </Link>

        {/* ── desktop nav ──────────────────────────── */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`
                  relative rounded-lg px-3 py-1.5 text-sm font-medium
                  transition-colors duration-200
                  ${
                    isActive
                      ? "text-[#1c3faa] dark:text-blue-400"
                      : "text-blue-800 hover:text-[#1c3faa] dark:text-blue-200 dark:hover:text-white"
                  }
                `}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-lg bg-[#1c3faa]/10 dark:bg-blue-500/15"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 28,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* ── right actions ────────────────────────── */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="relative rounded-lg p-2 text-blue-900 transition-colors hover:bg-blue-50 dark:text-blue-200 dark:hover:bg-white/10 md:hidden"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* ── mobile drawer ──────────────────────────── */}
      <AnimatePresence>
        {open && (
          <>
            {/* backdrop */}
            <motion.div
              key="backdrop"
              variants={overlay}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-40 bg-[#1c3faa]/30 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
            />

            {/* drawer panel */}
            <motion.div
              key="drawer"
              variants={drawer}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`fixed right-0 top-0 z-50 flex h-full w-72 flex-col
                         bg-white/95 dark:bg-blue-950/90 backdrop-blur-2xl
                         border-l border-blue-100 dark:border-blue-900/50
                         shadow-2xl shadow-blue-200/30 md:hidden`}
            >
              {/* close button */}
              <div className="flex items-center justify-between px-5 py-4">
                <span className="text-lg font-bold bg-gradient-to-r from-[#1c3faa] to-[#5c7cfa] bg-clip-text text-transparent">
                  Menu
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-2 text-blue-600 transition-colors hover:bg-blue-50 dark:text-blue-300 dark:hover:bg-white/10"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* links */}
              <motion.nav
                variants={stagger}
                initial="hidden"
                animate="visible"
                className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-2"
              >
                {navLinks.map((link) => {
                  const isActive =
                    pathname === link.href ||
                    (link.href !== "/" && pathname.startsWith(link.href));

                  return (
                    <motion.div key={link.name} variants={linkItem}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`
                          flex items-center rounded-xl px-4 py-3 text-[15px] font-medium
                          transition-colors duration-200
                          ${
                            isActive
                              ? "bg-[#1c3faa]/10 text-[#1c3faa] dark:text-blue-400"
                              : "text-blue-800 hover:bg-blue-50 dark:text-blue-200 dark:hover:bg-white/5"
                          }
                        `}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.nav>

              {/* bottom gradient */}
              <div className="h-px bg-gradient-to-r from-transparent via-[#1c3faa]/30 to-transparent mx-4" />
              <div className="px-5 py-4 text-xs text-blue-500">
                © {new Date().getFullYear()} Satya Prakash
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}