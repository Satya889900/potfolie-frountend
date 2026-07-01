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
        sticky top-0 z-50 w-full h-[88px] flex items-center bg-[#f4f6f0] dark:bg-[#0f1714]
        transition-all duration-300 ease-out
        ${scrolled ? "shadow-md" : ""}
      `}
    >
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 md:px-10 xl:px-16">
        {/* ── logo ─────────────────────────────────── */}
        <Link
          href="/"
          className="group relative text-2xl font-black tracking-tight select-none"
        >
          <span className="text-[#b8905b]">
            Satya
          </span>
          <span className="text-[#1b3b36] dark:text-[#e8efe2]">.</span>
        </Link>

        {/* ── desktop nav ──────────────────────────── */}
        <nav className="hidden md:flex items-center justify-center bg-white/60 dark:bg-white/5 px-2 py-1.5 rounded-full border border-[#1b3b36]/5 dark:border-[#b8905b]/10 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            // 🚧 Coming Soon links — rendered as disabled, non-navigable items
            if (link.comingSoon) {
              return (
                <div key={link.name} className="relative group">
                  <span
                    className="relative z-10 rounded-full px-4 py-2 text-sm font-extrabold tracking-widest uppercase
                      text-[#1b3b36]/35 dark:text-[#e8efe2]/30 cursor-not-allowed select-none flex items-center gap-1.5"
                    title={`${link.name} — Coming Soon`}
                  >
                    {link.name}
                    {/* "Soon" badge */}
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[8px] font-black tracking-wider uppercase
                      bg-[#c4a572]/20 text-[#a07c4b] dark:bg-[#c4a572]/15 dark:text-[#c4a572] leading-none">
                      Soon
                    </span>
                  </span>
                </div>
              );
            }

            return (
               <div key={link.name} className="relative">
                 <Link
                   href={link.href}
                   className={`
                     relative z-10 rounded-full px-4 py-2 text-sm font-extrabold tracking-widest uppercase
                     transition-colors duration-200 block
                     ${
                       isActive
                         ? "text-white"
                         : "text-[#1b3b36] hover:text-[#b8905b] dark:text-[#e8efe2] dark:hover:text-[#c4a572]"
                     }
                   `}
                 >
                   {link.name}
                 </Link>
                 {isActive && (
                   <motion.div
                     layoutId="nav-pill"
                     className="absolute inset-0 z-0 rounded-full bg-[#1b3b36] dark:bg-[#b8905b]/30 shadow-sm"
                     transition={{
                       type: "spring",
                       stiffness: 400,
                       damping: 28,
                     }}
                   />
                 )}
               </div>
            );
          })}
        </nav>

        {/* ── right actions ────────────────────────── */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="relative rounded-lg p-2 transition-colors md:hidden text-[#1b3b36] dark:text-[#e8efe2]"
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
              className="fixed inset-0 z-40 bg-[#1b3b36]/40 backdrop-blur-sm md:hidden"
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
                         bg-[#f4f6f0]/95 dark:bg-[#0f1714]/95 backdrop-blur-2xl
                         border-l border-[#1b3b36]/10 dark:border-white/10
                         shadow-2xl shadow-[#1b3b36]/20 dark:shadow-black/40 md:hidden`}
            >
              {/* close button */}
              <div className="flex items-center justify-between px-5 py-4">
                <span className="text-lg font-bold text-[#b8905b]">
                  Menu
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-2 text-[#1b3b36] dark:text-[#e8efe2] transition-colors hover:bg-[#1b3b36]/10 dark:hover:bg-white/10"
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
                className="flex flex-1 flex-col gap-2 overflow-y-auto px-4 py-4"
              >
                {navLinks.map((link) => {
                  const isActive =
                    pathname === link.href ||
                    (link.href !== "/" && pathname.startsWith(link.href));

                  // 🚧 Coming Soon links — disabled in mobile drawer too
                  if (link.comingSoon) {
                    return (
                      <motion.div key={link.name} variants={linkItem}>
                        <span
                          className="flex items-center justify-between rounded-xl px-5 py-3.5 text-[15px] font-bold
                            text-[#2a3b34]/35 dark:text-[#e8efe2]/30 cursor-not-allowed select-none"
                        >
                          {link.name}
                          {/* "Coming Soon" pill */}
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-black tracking-wider uppercase
                            bg-[#c4a572]/20 text-[#a07c4b] dark:bg-[#c4a572]/15 dark:text-[#c4a572] leading-none">
                            Coming Soon
                          </span>
                        </span>
                      </motion.div>
                    );
                  }

                  return (
                    <motion.div key={link.name} variants={linkItem}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`
                          flex items-center rounded-xl px-5 py-3.5 text-[15px] font-bold
                          transition-all duration-200
                          ${
                            isActive
                              ? "bg-[#1b3b36] dark:bg-[#b8905b]/30 text-[#e8efe2] dark:text-white shadow-md"
                              : "text-[#2a3b34] dark:text-[#e8efe2] hover:bg-[#1b3b36]/5 dark:hover:bg-white/5"
                          }
                        `}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.nav>

              {/* bottom footer */}
              <div className="h-px bg-[#1b3b36]/10 dark:bg-white/10 mx-4" />
              <div className="px-5 py-5 text-xs font-medium text-[#2a3b34]/50 dark:text-[#e8efe2]/50">
                © {new Date().getFullYear()} Satya Prakash
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}