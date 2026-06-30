"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Download, Globe } from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   LIGHT MODE: Triangulated network canvas (sides only)
───────────────────────────────────────────────────────────── */
function NetworkCanvas({ side, dark = false }: { side: "left" | "right"; dark?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const basePoints = useMemo(
    () =>
      side === "left"
        ? [
            [0.04, 0.06], [0.22, 0.02], [0.44, 0.10], [0.65, 0.04],
            [0.10, 0.20], [0.32, 0.24], [0.54, 0.18], [0.74, 0.26],
            [0.02, 0.36], [0.18, 0.42], [0.40, 0.36], [0.62, 0.40],
            [0.08, 0.52], [0.28, 0.58], [0.50, 0.52], [0.70, 0.60],
            [0.14, 0.70], [0.36, 0.76], [0.56, 0.68], [0.76, 0.78],
            [0.05, 0.86], [0.26, 0.90], [0.48, 0.86], [0.68, 0.92],
            [0.20, 0.10], [0.60, 0.30], [0.35, 0.50], [0.15, 0.62],
          ]
        : [
            [0.36, 0.02], [0.55, 0.08], [0.76, 0.04], [0.96, 0.10],
            [0.28, 0.18], [0.46, 0.22], [0.66, 0.16], [0.88, 0.24],
            [0.34, 0.34], [0.58, 0.38], [0.80, 0.30], [0.98, 0.38],
            [0.30, 0.50], [0.52, 0.54], [0.74, 0.48], [0.94, 0.56],
            [0.25, 0.66], [0.48, 0.70], [0.70, 0.64], [0.92, 0.72],
            [0.32, 0.82], [0.56, 0.86], [0.78, 0.80], [0.96, 0.88],
            [0.42, 0.10], [0.84, 0.44], [0.62, 0.60], [0.38, 0.76],
          ],
    [side]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frameId: number;

    const draw = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      const pts = basePoints.map(([rx, ry]) => ({ x: rx * w, y: ry * h }));
      const maxDist = Math.min(w, h) * 0.48;

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * (dark ? 0.5 : 0.32);
            ctx.strokeStyle = dark
              ? `rgba(196, 165, 114, ${alpha})`
              : `rgba(175, 136, 72, ${alpha})`;
            ctx.lineWidth = dark ? 0.9 : 0.7;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }

      pts.forEach((pt, idx) => {
        const isHighlight = [0, 5, 11, 18, 23, 24].includes(idx);
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, isHighlight ? 3.2 : 2.0, 0, Math.PI * 2);
        ctx.fillStyle = dark
          ? isHighlight
            ? "rgba(230, 200, 140, 0.95)"
            : "rgba(196, 165, 114, 0.65)"
          : isHighlight
          ? "rgba(196, 165, 114, 0.85)"
          : "rgba(160, 124, 75, 0.50)";
        ctx.fill();
      });
    };

    const resize = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frameId);
    };
  }, [basePoints, dark]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden />;
}

/* ─────────────────────────────────────────────────────────────
   DARK MODE: Scattered star field across entire page
───────────────────────────────────────────────────────────── */
/* prettier-ignore */
const DARK_STARS: [number, number, number, number, number][] = [
  // [left%, top%, size, opacity, delay]
  [4,  8,  14, 0.70, 0.0],
  [62, 12, 10, 0.45, 1.4],
  [88, 6,  12, 0.60, 0.7],
  [15, 22, 8,  0.38, 2.2],
  [75, 20, 10, 0.55, 1.1],
  [95, 28, 8,  0.40, 3.0],
  [32, 16, 6,  0.30, 0.5],
  [50, 30, 7,  0.28, 1.8],
  [8,  38, 12, 0.55, 0.3],
  [92, 42, 10, 0.48, 2.5],
  [22, 48, 8,  0.36, 1.6],
  [80, 52, 9,  0.42, 0.9],
  [5,  58, 10, 0.50, 3.2],
  [68, 60, 7,  0.30, 0.4],
  [45, 65, 11, 0.45, 2.0],
  [18, 70, 8,  0.38, 1.3],
  [90, 68, 12, 0.52, 0.8],
  [35, 78, 7,  0.32, 2.7],
  [72, 82, 10, 0.46, 1.0],
  [10, 85, 9,  0.42, 0.2],
  [55, 88, 8,  0.35, 1.5],
  [85, 90, 11, 0.50, 2.3],
  [28, 92, 7,  0.28, 3.5],
  [60, 95, 6,  0.25, 0.6],
  [96, 15, 8,  0.38, 1.9],
  [48, 10, 6,  0.25, 2.8],
  [3,  72, 7,  0.32, 1.7],
  [97, 76, 9,  0.40, 0.1],
];

function StarField({
  stars,
  color,
  minOpacity = 0,
}: {
  stars: [number, number, number, number, number][];
  color: string;
  minOpacity?: number;
}) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
      {stars.map(([l, t, sz, op, delay], i) => (
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
            opacity: Math.max(op, minOpacity),
            color,
            filter: minOpacity > 0 ? `drop-shadow(0 0 ${sz * 0.4}px ${color})` : undefined,
            animation: `sparkle ${3.5 + (i % 4) * 0.6}s ease-in-out ${delay}s infinite`,
            willChange: "opacity, transform",
          }}
        >
          <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
        </svg>
      ))}
    </div>
  );
}

/* prettier-ignore */
const LIGHT_SPARKLES: [number, number, number, number, number][] = [
  [5,  15, 16, 0.55, 0.0 ],
  [12, 32, 11, 0.38, 1.3 ],
  [7,  52, 9,  0.32, 2.6 ],
  [16, 68, 13, 0.42, 0.7 ],
  [8,  82, 10, 0.35, 1.9 ],
  [92, 18, 14, 0.50, 0.5 ],
  [86, 36, 10, 0.36, 2.1 ],
  [94, 58, 12, 0.42, 1.4 ],
  [88, 74, 9,  0.32, 0.2 ],
  [82, 88, 11, 0.38, 3.0 ],
];

/* ─────────────────────────────────────────────────────────────
   Self-contained keyframes — no globals.css edit required
───────────────────────────────────────────────────────────── */
function SparkleStyles() {
  return (
    <style jsx global>{`
      @keyframes sparkle {
        0%, 100% { opacity: 0.2; transform: scale(0.85) rotate(0deg); }
        50% { opacity: 1; transform: scale(1.15) rotate(15deg); }
      }
    `}</style>
  );
}

/* ─────────────────────────────────────────────────────────────
   Main Resume Component
───────────────────────────────────────────────────────────── */
export default function ResumeViewer() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch: only trust theme after mount
  useEffect(() => setMounted(true), []);
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <main
      className="relative min-h-screen w-full overflow-hidden flex flex-col"
      style={{
        background: isDark
          ? "radial-gradient(ellipse at 50% 0%, #1a2e24 0%, #0c1610 40%, #080e0a 100%)"
          : "#f4f6f0",
        transition: "background 0.3s ease",
      }}
    >
      <SparkleStyles />

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

      {/* ── Dark mode: radial vignette overlay for depth ── */}
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

      {/* ── Triangulated network panels (both modes, themed) ── */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-[38%] z-0">
        <NetworkCanvas side="left" dark={isDark} />
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-[38%] z-0">
        <NetworkCanvas side="right" dark={isDark} />
      </div>

      {/* ── Sparkles: gold in light mode, glowing stars in dark mode ── */}
      {!isDark && <StarField stars={LIGHT_SPARKLES} color="#b8905b" />}
      {isDark && <StarField stars={DARK_STARS} color="#e6c88c" minOpacity={0.55} />}

      {/* ── Page content ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center py-32 md:py-40 px-6 md:px-10 xl:px-16 min-h-screen">
        <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-16"
          >
            {/* Badge */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#a07c4b]" />
              <span className="text-sm md:text-base font-extrabold tracking-[0.28em] text-[#a07c4b] uppercase">
                My Credentials
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none mb-7"
              style={{ color: isDark ? "#e8efe2" : "#1b3b36" }}
            >
              RESUME.
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg md:text-xl max-w-xl mx-auto font-medium leading-relaxed"
              style={{ color: isDark ? "rgba(232,239,226,0.55)" : "rgba(27,59,54,0.65)" }}
            >
              Download or view my detailed curriculum vitae in PDF format.
            </p>
          </motion.div>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="w-full max-w-[560px] px-12 py-16 rounded-[2.5rem] flex flex-col items-center gap-12 backdrop-blur-sm"
            style={{
              background: isDark
                ? "rgba(255,255,255,0.04)"
                : "rgba(255,255,255,0.78)",
              border: isDark
                ? "1px solid rgba(255,255,255,0.07)"
                : "1px solid rgba(196,165,114,0.22)",
              boxShadow: isDark
                ? "0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.05)"
                : "0 24px 60px rgba(196,165,114,0.12), 0 2px 8px rgba(160,124,75,0.08)",
            }}
          >
            {/* Download icon button */}
            <div
              className="w-[96px] h-[96px] rounded-3xl flex items-center justify-center text-white"
              style={{
                background:
                  "linear-gradient(145deg, #d3bb93 0%, #c0a060 45%, #8a6d35 100%)",
                boxShadow: "0 8px 28px rgba(160,124,75,0.40)",
              }}
            >
              <Download size={40} strokeWidth={2} />
            </div>

            {/* Action buttons */}
            <div className="w-full flex flex-col sm:flex-row gap-5 justify-center">
              {/* Download PDF */}
              <a
                href="/resume/Satya-Prakash-Resume.pdf"
                download
                id="resume-download-btn"
                className="inline-flex items-center justify-center gap-2 px-9 py-[18px] rounded-xl font-bold text-base text-[#1b3b36] hover:scale-[1.04] active:scale-[0.97] transition-transform duration-150"
                style={{
                  background:
                    "linear-gradient(135deg, #d8c298 0%, #c4a572 55%, #a07c4b 100%)",
                  boxShadow: "0 4px 18px rgba(160,124,75,0.30)",
                }}
              >
                Download PDF
                <Download size={18} strokeWidth={2.5} />
              </a>

              {/* View Online */}
              <a
                href="/resume/Satya-Prakash-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                id="resume-view-btn"
                className="inline-flex items-center justify-center gap-2 px-9 py-[18px] rounded-xl font-bold text-base hover:scale-[1.04] active:scale-[0.97] transition-all duration-150"
                style={{
                  color: isDark ? "#e8efe2" : "#1b3b36",
                  border: isDark
                    ? "1px solid rgba(255,255,255,0.15)"
                    : "1px solid rgba(196,165,114,0.45)",
                  background: "transparent",
                }}
              >
                View Online
                <Globe size={18} strokeWidth={2.5} />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}