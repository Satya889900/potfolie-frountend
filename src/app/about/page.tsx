import AboutInfo from "../../components/about/AboutInfo";
import Education from "../../components/about/Education";
import Timeline from "../../components/about/Timeline";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden flex flex-col bg-[#eef2ff] dark:bg-[#07071a] transition-colors duration-500">
      {/* ── LIGHT MODE background ── */}
      <div aria-hidden className="dark:hidden pointer-events-none absolute inset-0"
        style={{ background: "linear-gradient(135deg,#e8eeff 0%,#f4f0ff 40%,#eef2ff 100%)" }} />
      <div aria-hidden className="dark:hidden pointer-events-none absolute -top-32 -left-32 w-[640px] h-[640px] rounded-full bg-blue-300/50 blur-[120px]" />
      <div aria-hidden className="dark:hidden pointer-events-none absolute -bottom-32 -right-32 w-[700px] h-[700px] rounded-full bg-violet-300/55 blur-[140px]" />

      {/* ── DARK MODE background ── */}
      <div aria-hidden className="hidden dark:block pointer-events-none absolute inset-0"
        style={{ background: "linear-gradient(135deg,#07071a 0%,#0d0d2b 50%,#07071a 100%)" }} />
      <div aria-hidden className="hidden dark:block pointer-events-none absolute -top-40 -left-40 w-[750px] h-[750px] rounded-full bg-blue-700/30 blur-[130px]" />
      <div aria-hidden className="hidden dark:block pointer-events-none absolute -bottom-40 -right-40 w-[850px] h-[850px] rounded-full bg-violet-800/38 blur-[150px]" />

      {/* Dot grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(99,102,241,0.10) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }} />

      <div className="relative z-10 flex-1 flex flex-col min-h-screen pb-20">
        <AboutInfo />
        <Education />
        <Timeline />
      </div>
    </main>
  );
}