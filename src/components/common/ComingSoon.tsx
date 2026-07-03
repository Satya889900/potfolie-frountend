"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Clock, ArrowLeft } from "lucide-react";

/* ── scattered star positions for dark mode (same style as Resume page) ── */
const DARK_STARS = [
  [4, 8, 14, 0.65, 0.0], [62, 12, 10, 0.45, 1.4], [88, 6, 12, 0.58, 0.7],
  [15, 22, 8, 0.38, 2.2], [75, 20, 10, 0.52, 1.1], [95, 28, 8, 0.40, 3.0],
  [32, 16, 6, 0.30, 0.5], [50, 30, 7, 0.28, 1.8], [8, 38, 12, 0.55, 0.3],
  [92, 42, 10, 0.48, 2.5], [22, 48, 8, 0.34, 1.6], [80, 52, 9, 0.42, 0.9],
  [5, 58, 10, 0.50, 3.2], [68, 60, 7, 0.30, 0.4], [45, 65, 11, 0.44, 2.0],
  [18, 70, 8, 0.36, 1.3], [90, 68, 12, 0.52, 0.8], [35, 78, 7, 0.30, 2.7],
  [72, 82, 10, 0.46, 1.0], [10, 85, 9, 0.40, 0.2], [55, 88, 8, 0.32, 1.5],
  [85, 90, 11, 0.48, 2.3], [28, 92, 7, 0.26, 3.5], [96, 15, 8, 0.36, 1.9],
];

/* ── light mode edge sparkles ── */
const LIGHT_SPARKLES = [
  [5, 15, 16, 0.50, 0.0], [12, 32, 11, 0.36, 1.3], [7, 52, 9, 0.30, 2.6],
  [16, 68, 13, 0.40, 0.7], [8, 82, 10, 0.32, 1.9], [92, 18, 14, 0.48, 0.5],
  [86, 36, 10, 0.34, 2.1], [94, 58, 12, 0.40, 1.4], [88, 74, 9, 0.30, 0.2],
  [82, 88, 11, 0.36, 3.0],
];

const STAR_PATH = "M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z";

interface ComingSoonPageProps {
  /** The main heading, e.g. "BLOG." or "CERTIFICATIONS." */
  title: string;
  /** Small badge label above the heading, e.g. "MY ARTICLES & INSIGHTS" */
  badge: string;
}

export default function ComingSoonPage({ title, badge }: ComingSoonPageProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <main
      className="relative min-h-screen w-full overflow-hidden flex flex-col"
      style={{
        background: isDark
          ? "radial-gradient(ellipse at 50% 0%, #1a2e24 0%, #0c1610 40%, #080e0a 100%)"
          : "#f4f6f0",
      }}
    >
      {/* ── Light mode: dot grid ── */}
      {!isDark && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(184,144,91,0.10) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      )}

      {/* ── Dark mode: vignette ── */}
      {isDark && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, rgba(4,8,6,0.55) 100%)",
          }}
        />
      )}

      {/* ── Stars ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        {(isDark ? DARK_STARS : LIGHT_SPARKLES).map(([l, t, sz, op, delay], i) => (
          <svg
            key={i}
            aria-hidden
            width={sz}
            height={sz}
            viewBox="0 0 24 24"
            fill="currentColor"
            className="absolute"
            style={{
              left: `${l}%`,
              top: `${t}%`,
              opacity: op,
              color: isDark ? "#c4a572" : "#b8905b",
              animation: `sparkle ${3.5 + (i % 4) * 0.6}s ease-in-out ${delay}s infinite`,
            }}
          >
            <path d={STAR_PATH} />
          </svg>
        ))}
      </div>

      {/* ── Page content ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center py-20 sm:py-28 px-4 sm:px-6 md:px-10 xl:px-16 overflow-hidden w-full">
        <div className="max-w-xl mx-auto w-full flex flex-col items-center text-center gap-8">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#a07c4b]" />
            <span className="text-[11px] font-extrabold tracking-[0.28em] text-[#a07c4b] uppercase">
              {badge}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.06 }}
            className="text-3xl min-[400px]:text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-black tracking-tight leading-none break-words"
            style={{ color: isDark ? "#e8efe2" : "#1b3b36" }}
          >
            {title}
          </motion.h1>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.14 }}
            className="w-full px-5 min-[400px]:px-6 sm:px-10 py-8 sm:py-12 rounded-3xl sm:rounded-[2rem] flex flex-col items-center gap-6 sm:gap-7 backdrop-blur-sm"
            style={{
              background: isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.78)",
              border: isDark
                ? "1px solid rgba(255,255,255,0.07)"
                : "1px solid rgba(196,165,114,0.22)",
              boxShadow: isDark
                ? "0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.05)"
                : "0 24px 60px rgba(196,165,114,0.12), 0 2px 8px rgba(160,124,75,0.08)",
            }}
          >
            {/* Clock icon */}
            <div
              className="w-[72px] h-[72px] rounded-2xl flex items-center justify-center text-white"
              style={{
                background: "linear-gradient(145deg, #d3bb93 0%, #c0a060 45%, #8a6d35 100%)",
                boxShadow: "0 8px 28px rgba(160,124,75,0.40)",
              }}
            >
              <Clock size={30} strokeWidth={2} />
            </div>

            {/* Text */}
            <div className="flex flex-col items-center gap-3">
              <p
                className="text-[22px] font-black tracking-tight"
                style={{ color: isDark ? "#e8efe2" : "#1b3b36" }}
              >
                Coming Soon
              </p>
              <p
                className="text-[14px] font-medium leading-relaxed max-w-xs"
                style={{ color: isDark ? "rgba(232,239,226,0.50)" : "rgba(27,59,54,0.60)" }}
              >
                This page is currently under construction. Check back soon — great things are on the way!
              </p>
            </div>

            {/* Back button */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-[13px] text-[#1b3b36] hover:scale-[1.04] active:scale-[0.97] transition-transform duration-150"
              style={{
                background: "linear-gradient(135deg, #d8c298 0%, #c4a572 55%, #a07c4b 100%)",
                boxShadow: "0 4px 18px rgba(160,124,75,0.30)",
              }}
            >
              <ArrowLeft size={14} strokeWidth={2.5} />
              Back to Home
            </Link>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
