"use client";

import { useTheme } from "next-themes";
import PageBackground from "../../components/common/PageBackground";
import AboutInfo from "../../components/about/AboutInfo";
import Education from "../../components/about/Education";
import Timeline from "../../components/about/Timeline";

export default function AboutPage() {
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
      {/* ── Shared resume-style background (network + stars) ── */}
      <PageBackground />

      {/* ── Page content above background ── */}
      <div className="relative z-10 flex-1 flex flex-col min-h-screen pb-20">
        <AboutInfo />
        <Education />
        <Timeline />
      </div>
    </main>
  );
}