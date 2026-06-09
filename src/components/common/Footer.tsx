"use client";

import Link from "next/link";
import { navLinks } from "../../constants/navLinks";
import { socialLinks } from "../../constants/socialLinks";
import { Heart } from "lucide-react";

/* split nav links into two balanced columns */
const mid = Math.ceil(navLinks.length / 2);
const colOne = navLinks.slice(0, mid);
const colTwo = navLinks.slice(mid);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-neutral-200/60 dark:border-white/5">
      {/* ── glow accent ──────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-violet-500/10 dark:bg-violet-500/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {/* ── top section ─────────────────────────── */}
        <div className="grid gap-10 py-12 md:grid-cols-12 md:gap-8 lg:py-16">
          {/* brand column */}
          <div className="md:col-span-4 lg:col-span-5">
            <Link
              href="/"
              className="inline-block text-2xl font-extrabold tracking-tight"
            >
              <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
                Satya
              </span>
              <span className="text-neutral-800 dark:text-white">.</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
              Full-stack developer crafting modern web experiences with clean
              code and creative design.
            </p>

            {/* social icons */}
            <div className="mt-5 flex gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="
                    flex h-9 w-9 items-center justify-center rounded-lg
                    border border-neutral-200 dark:border-white/10
                    bg-white/60 dark:bg-white/5
                    text-neutral-600 dark:text-neutral-400
                    transition-all duration-200
                    hover:scale-110 hover:border-violet-400/50
                    hover:text-violet-600 dark:hover:text-violet-400
                    hover:shadow-md
                  "
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* quick links column 1 */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {colOne.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 transition-colors duration-200 hover:text-violet-600 dark:text-neutral-400 dark:hover:text-violet-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* quick links column 2 */}
          <div className="md:col-span-4 lg:col-span-4">
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
              Explore
            </h4>
            <ul className="space-y-2">
              {colTwo.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 transition-colors duration-200 hover:text-violet-600 dark:text-neutral-400 dark:hover:text-violet-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── bottom bar ──────────────────────────── */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-neutral-200/60 dark:border-white/5 py-6 text-xs text-neutral-400 dark:text-neutral-500 sm:flex-row">
          <p>© {year} Satya Prakash. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart size={12} className="text-pink-500 animate-pulse" /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}