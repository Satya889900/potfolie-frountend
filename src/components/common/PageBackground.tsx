"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

/* ─────────────────────────────────────────────────────────────
   Triangulated network canvas — used in light mode on sides
───────────────────────────────────────────────────────────── */
const LEFT_POINTS = [
  [0.04, 0.06], [0.22, 0.02], [0.44, 0.10], [0.65, 0.04],
  [0.10, 0.20], [0.32, 0.24], [0.54, 0.18], [0.74, 0.26],
  [0.02, 0.36], [0.18, 0.42], [0.40, 0.36], [0.62, 0.40],
  [0.08, 0.52], [0.28, 0.58], [0.50, 0.52], [0.70, 0.60],
  [0.14, 0.70], [0.36, 0.76], [0.56, 0.68], [0.76, 0.78],
  [0.05, 0.86], [0.26, 0.90], [0.48, 0.86], [0.68, 0.92],
  [0.20, 0.10], [0.60, 0.30], [0.35, 0.50], [0.15, 0.62],
];

const RIGHT_POINTS = [
  [0.36, 0.02], [0.55, 0.08], [0.76, 0.04], [0.96, 0.10],
  [0.28, 0.18], [0.46, 0.22], [0.66, 0.16], [0.88, 0.24],
  [0.34, 0.34], [0.58, 0.38], [0.80, 0.30], [0.98, 0.38],
  [0.30, 0.50], [0.52, 0.54], [0.74, 0.48], [0.94, 0.56],
  [0.25, 0.66], [0.48, 0.70], [0.70, 0.64], [0.92, 0.72],
  [0.32, 0.82], [0.56, 0.86], [0.78, 0.80], [0.96, 0.88],
  [0.42, 0.10], [0.84, 0.44], [0.62, 0.60], [0.38, 0.76],
];

const HIGHLIGHT_IDX = [0, 5, 11, 18, 23, 24];

function NetworkCanvas({ side }: { side: "left" | "right" }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const basePoints = side === "left" ? LEFT_POINTS : RIGHT_POINTS;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const pts = basePoints.map(([rx, ry]) => ({ x: rx * w, y: ry * h }));
      const maxDist = Math.min(w, h) * 0.48;

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.30;
            ctx.strokeStyle = `rgba(175, 136, 72, ${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }

      pts.forEach((pt, idx) => {
        const isHighlight = HIGHLIGHT_IDX.includes(idx);
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, isHighlight ? 3.2 : 2.0, 0, Math.PI * 2);
        ctx.fillStyle = isHighlight
          ? "rgba(196, 165, 114, 0.85)"
          : "rgba(160, 124, 75, 0.50)";
        ctx.fill();
      });
    };

    draw();
    window.addEventListener("resize", draw);
    return () => window.removeEventListener("resize", draw);
  }, [basePoints]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="absolute inset-0 w-full h-full"
    />
  );
}

/* ─────────────────────────────────────────────────────────────
   Star path (4-pointed)
───────────────────────────────────────────────────────────── */
const STAR_PATH = "M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z";

/* ─────────────────────────────────────────────────────────────
   Dark mode: full-page scattered golden stars
   [left%, top%, size, opacity, animDelay]
───────────────────────────────────────────────────────────── */
const DARK_STARS: number[][] = [
  [4, 8, 14, 0.70, 0.0], [62, 12, 10, 0.45, 1.4], [88, 6, 12, 0.60, 0.7],
  [15, 22, 8, 0.38, 2.2], [75, 20, 10, 0.55, 1.1], [95, 28, 8, 0.40, 3.0],
  [32, 16, 6, 0.30, 0.5], [50, 30, 7, 0.28, 1.8], [8, 38, 12, 0.55, 0.3],
  [92, 42, 10, 0.48, 2.5], [22, 48, 8, 0.36, 1.6], [80, 52, 9, 0.42, 0.9],
  [5, 58, 10, 0.50, 3.2], [68, 60, 7, 0.30, 0.4], [45, 65, 11, 0.45, 2.0],
  [18, 70, 8, 0.38, 1.3], [90, 68, 12, 0.52, 0.8], [35, 78, 7, 0.32, 2.7],
  [72, 82, 10, 0.46, 1.0], [10, 85, 9, 0.42, 0.2], [55, 88, 8, 0.35, 1.5],
  [85, 90, 11, 0.50, 2.3], [28, 92, 7, 0.28, 3.5], [60, 95, 6, 0.25, 0.6],
  [96, 15, 8, 0.38, 1.9], [48, 10, 6, 0.25, 2.8], [3, 72, 7, 0.32, 1.7],
  [97, 76, 9, 0.40, 0.1],
];

/* ─────────────────────────────────────────────────────────────
   Light mode: edge-only sparkles
───────────────────────────────────────────────────────────── */
const LIGHT_SPARKLES: number[][] = [
  [5, 15, 16, 0.55, 0.0], [12, 32, 11, 0.38, 1.3], [7, 52, 9, 0.32, 2.6],
  [16, 68, 13, 0.42, 0.7], [8, 82, 10, 0.35, 1.9], [92, 18, 14, 0.50, 0.5],
  [86, 36, 10, 0.36, 2.1], [94, 58, 12, 0.42, 1.4], [88, 74, 9, 0.32, 0.2],
  [82, 88, 11, 0.38, 3.0],
];

/* ─────────────────────────────────────────────────────────────
   PageBackground — drop this inside any page's <main> as the
   very first child (absolute-positioned, pointer-events-none).
───────────────────────────────────────────────────────────── */
export default function PageBackground() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <>
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

      {/* ── Dark mode: depth vignette ── */}
      {isDark && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 30%, transparent 30%, rgba(4,8,6,0.50) 100%)",
          }}
        />
      )}

      {/* ── Light mode: triangulated network panels on left & right ── */}
      {!isDark && (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-[32%] z-0"
          >
            <NetworkCanvas side="left" />
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-[32%] z-0"
          >
            <NetworkCanvas side="right" />
          </div>
        </>
      )}

      {/* ── Stars (dark → full page, light → edge only) ── */}
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
    </>
  );
}
