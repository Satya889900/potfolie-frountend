import AboutInfo from "../../components/about/AboutInfo";
import Education from "../../components/about/Education";
import Timeline from "../../components/about/Timeline";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden flex flex-col bg-[#eef2ff] dark:bg-[#07071a] transition-colors duration-500">
      {/* ── LIGHT MODE background ── */}
      <div aria-hidden className="dark:hidden pointer-events-none absolute inset-0 bg-[#f4f6f0]" />

      {/* ── DARK MODE background ── */}
      <div aria-hidden className="hidden dark:block pointer-events-none absolute inset-0 bg-[#0f1714]" />

      {/* Dot grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(184,144,91,0.15) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />

      <div className="relative z-10 flex-1 flex flex-col min-h-screen pb-20">
        <AboutInfo />
        <Education />
        <Timeline />
      </div>
    </main>
  );
}