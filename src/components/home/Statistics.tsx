"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Calendar, Briefcase, Code2, Heart } from "lucide-react";
import { useRef, MouseEvent } from "react";

const stats = [
  {
    number: "10+",
    label: "Months Experience",
    sublabel: "Building production-ready apps",
    icon: Calendar,
    lightAccent: "#1c3faa",
    lightBg: "rgba(28,63,170,0.08)",
    lightBorder: "rgba(28,63,170,0.15)",
    darkAccent: "#5c7cfa",
    darkGlow: "#1c3faa",
    bar: "from-[#1c3faa] to-[#3b5bdb]",
  },
  {
    number: "5+",
    label: "Full-Stack Projects",
    sublabel: "End-to-end shipped products",
    icon: Briefcase,
    lightAccent: "#7048e8",
    lightBg: "rgba(112,72,232,0.07)",
    lightBorder: "rgba(112,72,232,0.15)",
    darkAccent: "#a78bfa",
    darkGlow: "#7048e8",
    bar: "from-[#7048e8] to-[#a78bfa]",
  },
  {
    number: "10+",
    label: "Core Technologies",
    sublabel: "From React to distributed systems",
    icon: Code2,
    lightAccent: "#0ea5e9",
    lightBg: "rgba(14,165,233,0.07)",
    lightBorder: "rgba(14,165,233,0.15)",
    darkAccent: "#38bdf8",
    darkGlow: "#0ea5e9",
    bar: "from-[#0ea5e9] to-[#38bdf8]",
  },
  {
    number: "100%",
    label: "On-Time Delivery",
    sublabel: "Every milestone, every time",
    icon: Heart,
    lightAccent: "#3b5bdb",
    lightBg: "rgba(59,91,219,0.08)",
    lightBorder: "rgba(59,91,219,0.15)",
    darkAccent: "#748ffc",
    darkGlow: "#3b5bdb",
    bar: "from-[#3b5bdb] to-[#748ffc]",
  },
];

function StatCard({ item, index }: { item: (typeof stats)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 180, damping: 18 });
  const sy = useSpring(my, { stiffness: 180, damping: 18 });
  const rotateX = useTransform(sy, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(sx, [-0.5, 0.5], ["-7deg", "7deg"]);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={() => { mx.set(0); my.set(0); }}
      variants={{
        hidden: { opacity: 0, y: 36 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22,1,0.36,1], delay: index * 0.1 } },
      }}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className="group relative rounded-2xl overflow-hidden cursor-default"
    >
      {/* Card face */}
      <div className="relative p-8 h-full rounded-2xl border transition-all duration-300
        bg-white border-blue-100/80 shadow-sm hover:shadow-blue-100/60 hover:shadow-xl
        dark:bg-white/[0.035] dark:border-white/[0.07] dark:hover:bg-white/[0.06] dark:hover:border-white/[0.12]
        hover:-translate-y-1">

        {/* Top accent bar */}
        <div className={`absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl bg-gradient-to-r ${item.bar} opacity-70 group-hover:opacity-100 transition-opacity duration-300`} />

        {/* Hover glow — light mode */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none dark:hidden"
          style={{ background: `radial-gradient(circle at 50% 0%, ${item.lightBg} 0%, transparent 70%)` }} />

        {/* Hover glow — dark mode */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none hidden dark:block"
          style={{ background: `radial-gradient(circle at 50% 0%, ${item.darkAccent}18 0%, transparent 70%)` }} />

        <div className="relative z-10 flex flex-col items-center text-center gap-5">

          {/* Icon circle */}
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
            style={{ background: item.lightBg, border: `1px solid ${item.lightBorder}` }}>
            <item.icon size={24} style={{ color: item.lightAccent }} strokeWidth={1.6}
              className="dark:hidden" />
            <item.icon size={24} style={{ color: item.darkAccent }} strokeWidth={1.6}
              className="hidden dark:block" />
          </div>

          {/* Number */}
          <span className="text-5xl font-black tracking-tight leading-none transition-colors"
            style={{ color: item.lightAccent }}
          >
            <span className="dark:hidden">{item.number}</span>
            <span className="hidden dark:inline" style={{ color: item.darkAccent }}>{item.number}</span>
          </span>

          {/* Labels */}
          <div className="space-y-1.5">
            <p className="text-[15px] font-bold leading-snug
              text-slate-800 dark:text-white transition-colors">
              {item.label}
            </p>
            <p className="text-[12px] leading-snug
              text-slate-400 dark:text-white/35 transition-colors">
              {item.sublabel}
            </p>
          </div>

          {/* Bottom progress-style bar */}
          <div className="w-full h-[3px] rounded-full bg-slate-100 dark:bg-white/5 overflow-hidden mt-1">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: index * 0.15, ease: "easeOut" }}
              className={`h-full rounded-full bg-gradient-to-r ${item.bar}`}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Statistics() {
  return (
    <section className="py-28 relative overflow-hidden
      bg-gradient-to-b from-white via-blue-50/40 to-white
      dark:bg-[#060d24] dark:from-[#060d24] dark:via-[#060d24] dark:to-[#060d24]
      transition-colors duration-500">

      {/* Light mode decorative blobs */}
      <div aria-hidden className="dark:hidden pointer-events-none absolute top-0 left-1/4 w-80 h-80 rounded-full bg-blue-100/70 blur-[80px]" />
      <div aria-hidden className="dark:hidden pointer-events-none absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-violet-100/60 blur-[70px]" />

      {/* Dark mode blobs */}
      <div aria-hidden className="hidden dark:block pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[1px] bg-gradient-to-r from-transparent via-[#3b5bdb]/40 to-transparent" />
      <div aria-hidden className="hidden dark:block pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[1px] bg-gradient-to-r from-transparent via-[#3b5bdb]/40 to-transparent" />
      <div aria-hidden className="hidden dark:block pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1c3faa08_0%,_transparent_70%)]" />

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[10px] uppercase tracking-[0.35em] font-bold mb-4
            text-[#3b5bdb] dark:text-[#748ffc] transition-colors">
            ✦ By the numbers
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight
            text-[#1c3faa] dark:text-white transition-colors">
            What I&apos;ve{" "}
            <span className="text-transparent bg-clip-text
              bg-gradient-to-r from-[#1c3faa] via-[#3b5bdb] to-[#7048e8]
              dark:from-[#5c7cfa] dark:via-[#a5b4fc] dark:to-[#c4b5fd]">
              Delivered
            </span>
          </h2>
          <p className="mt-3 text-[15px] text-slate-500 dark:text-white/40 max-w-md mx-auto transition-colors">
            Numbers that reflect real work, real deadlines, and real results.
          </p>
        </motion.div>

        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {stats.map((item, i) => <StatCard key={item.label} item={item} index={i} />)}
        </motion.div>
      </div>
    </section>
  );
}