"use client";

import { motion, useMotionValue, useSpring, useTransform, useInView, animate } from "framer-motion";
import { Calendar, Briefcase, Code2, Heart } from "lucide-react";
import { useRef, MouseEvent, useEffect } from "react";

const stats = [
  {
    value: 12,
    suffix: "+",
    label: "Months Experience",
    sublabel: "Building production-ready apps",
    icon: Calendar,
    accent: "#b8905b",
    bar: "from-[#b8905b] to-[#c4a572]",
  },
  {
    value: 5,
    suffix: "+",
    label: "Full-Stack Projects",
    sublabel: "End-to-end shipped products",
    icon: Briefcase,
    accent: "#b8905b",
    bar: "from-[#c4a572] to-[#d2bfa6]",
  },
  {
    value: 10,
    suffix: "+",
    label: "Core Technologies",
    sublabel: "From React to distributed systems",
    icon: Code2,
    accent: "#b8905b",
    bar: "from-[#b8905b] to-[#c4a572]",
  },
  {
    value: 100,
    suffix: "%",
    label: "On-Time Delivery",
    sublabel: "Every milestone, every time",
    icon: Heart,
    accent: "#b8905b",
    bar: "from-[#c4a572] to-[#d2bfa6]",
  },
];

function Counter({
  value,
  suffix,
  color,
}: {
  value: number;
  suffix: string;
  color: string;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 1.8,
        ease: [0.22, 1, 0.36, 1],
      });
      return controls.stop;
    }
  }, [isInView, count, value]);

  return (
    <span ref={ref} className="tabular-nums" style={{ color }}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

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
      className="group relative rounded-[1.5rem] overflow-hidden cursor-default shadow-[0_20px_40px_-10px_rgba(15,23,20,0.6)]"
    >
      {/* Card face */}
      <div className="relative pt-10 pb-8 px-4 sm:px-6 h-full rounded-[1.5rem] transition-all duration-300
        bg-[#152e2a] border border-[#2a5a40]/30
        hover:-translate-y-2 hover:border-[#b8905b]/30">

        {/* Subtle inner top glow to match design lighting */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

        {/* Hover glow */}
        <div className="absolute inset-0 rounded-[1.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: `radial-gradient(circle at 50% 0%, ${item.accent}15 0%, transparent 70%)` }} />

        <div className="relative z-10 flex flex-col items-center text-center gap-4">

          {/* Icon circle */}
          <div className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 bg-gradient-to-br from-[#d2bfa6] via-[#c4a572] to-[#a07c4b] shadow-[0_8px_20px_rgba(160,124,75,0.3)] border-[3px] border-[#152e2a]">
            <item.icon size={24} className="text-[#152e2a]" strokeWidth={2.5} />
          </div>

          {/* Number */}
          <span className="text-[2.5rem] font-black tracking-tight leading-none transition-colors mt-2 text-white">
            <Counter
              value={item.value}
              suffix={item.suffix}
              color="white"
            />
          </span>

          {/* Labels */}
          <div className="space-y-1.5 mt-1">
            <p className="text-[14px] font-bold leading-tight text-[#e8efe2] transition-colors">
              {item.label}
            </p>
            <p className="text-[11px] font-medium leading-relaxed text-[#a8c89c] transition-colors max-w-[90%] mx-auto">
              {item.sublabel}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Statistics() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#f4f6f0] dark:bg-[#0f1714] transition-colors duration-500">
      
      {/* Decorative Network Nodes Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* Left Network Design */}
        <div className="absolute left-[-200px] top-[-5%] w-[800px] h-[800px] opacity-[0.15] dark:opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(184,144,91,0.15),transparent_55%)]" />
          <svg className="absolute inset-0 w-full h-full text-[#b8905b]" viewBox="0 0 200 200">
            <g fill="currentColor">
              {/* Dense Web Lines */}
              <path d="M140 100 L110 50 L70 40 L40 80 L50 130 L90 160 L140 150 Z" fill="none" stroke="currentColor" strokeWidth="0.4" strokeOpacity="0.4" />
              <path d="M140 100 L100 80 L70 40 M100 80 L40 80 M100 80 L50 130 M100 80 L90 160 M100 80 L140 150" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.6" />
              <path d="M110 50 L100 80 M70 140 L100 80 M140 100 L180 120 L160 170 L90 160 M180 120 L140 150 M180 120 L170 60 L110 50 M170 60 L140 100" fill="none" stroke="currentColor" strokeWidth="0.4" strokeOpacity="0.3" />
              <path d="M70 40 L20 40 L40 80 M20 40 L30 110 L50 130 M30 110 L70 140 L90 160" fill="none" stroke="currentColor" strokeWidth="0.3" strokeOpacity="0.2" />
              <path d="M140 100 L110 100 L90 120 L50 130 M110 100 L100 60 L70 40" fill="none" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.7" />

              {/* Glowing Nodes */}
              <circle cx="140" cy="100" r="5" fill="#ffd7a0" />
              <circle cx="140" cy="100" r="14" fill="currentColor" fillOpacity="0.3" />
              <circle cx="110" cy="100" r="3" fill="#ffebd2" />
              <circle cx="100" cy="80" r="4" fill="#ffebd2" />
              
              <circle cx="110" cy="50" r="2.5" />
              <circle cx="70" cy="40" r="2" />
              <circle cx="40" cy="80" r="3" />
              <circle cx="50" cy="130" r="2.5" />
              <circle cx="90" cy="160" r="2" />
              <circle cx="140" cy="150" r="3" />
              <circle cx="180" cy="120" r="2" />
              <circle cx="170" cy="60" r="1.5" />
              <circle cx="20" cy="40" r="1" />
              <circle cx="30" cy="110" r="1.5" />
              <circle cx="70" cy="140" r="2" />
              <circle cx="100" cy="60" r="2" />
              <circle cx="90" cy="120" r="2.5" />
            </g>
          </svg>
        </div>

        {/* Right Network Design */}
        <div className="absolute right-[-200px] top-[10%] w-[800px] h-[800px] opacity-[0.15] dark:opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(184,144,91,0.15),transparent_55%)]" />
          <svg className="absolute inset-0 w-full h-full text-[#b8905b]" viewBox="0 0 200 200">
            <g fill="currentColor">
              {/* Dense Web Lines */}
              <path d="M60 100 L90 50 L130 40 L160 80 L150 130 L110 160 L60 150 Z" fill="none" stroke="currentColor" strokeWidth="0.4" strokeOpacity="0.4" />
              <path d="M60 100 L100 80 L130 40 M100 80 L160 80 M100 80 L150 130 M100 80 L110 160 M100 80 L60 150" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.6" />
              <path d="M90 50 L100 80 M130 140 L100 80 M60 100 L20 120 L40 170 L110 160 M20 120 L60 150 M20 120 L30 60 L90 50 M30 60 L60 100" fill="none" stroke="currentColor" strokeWidth="0.4" strokeOpacity="0.3" />
              <path d="M130 40 L180 40 L160 80 M180 40 L170 110 L150 130 M170 110 L130 140 L110 160" fill="none" stroke="currentColor" strokeWidth="0.3" strokeOpacity="0.2" />
              <path d="M60 100 L90 100 L110 120 L150 130 M90 100 L100 60 L130 40" fill="none" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.7" />

              {/* Glowing Nodes */}
              <circle cx="60" cy="100" r="5" fill="#ffd7a0" />
              <circle cx="60" cy="100" r="14" fill="currentColor" fillOpacity="0.3" />
              <circle cx="90" cy="100" r="3" fill="#ffebd2" />
              <circle cx="100" cy="80" r="4" fill="#ffebd2" />
              
              <circle cx="90" cy="50" r="2.5" />
              <circle cx="130" cy="40" r="2" />
              <circle cx="160" cy="80" r="3" />
              <circle cx="150" cy="130" r="2.5" />
              <circle cx="110" cy="160" r="2" />
              <circle cx="60" cy="150" r="3" />
              <circle cx="20" cy="120" r="2" />
              <circle cx="30" cy="60" r="1.5" />
              <circle cx="180" cy="40" r="1" />
              <circle cx="170" cy="110" r="1.5" />
              <circle cx="130" cy="140" r="2" />
              <circle cx="100" cy="60" r="2" />
              <circle cx="110" cy="120" r="2.5" />
            </g>
          </svg>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-3 text-[#b8905b] dark:text-[#c4a572]">
             <span className="w-12 h-[1px] bg-current opacity-30" />
             <span className="text-[8px] opacity-80">♦</span>
             <span className="text-[10px] uppercase tracking-[0.3em] font-extrabold px-2">
                BY THE NUMBERS
             </span>
             <span className="text-[8px] opacity-80">♦</span>
             <span className="w-12 h-[1px] bg-current opacity-30" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#1b3b36] dark:text-[#e8efe2] transition-colors">
            What I&apos;ve Delivered
          </h2>
          <p className="mt-3 text-[13px] font-semibold text-[#2a3b34]/60 dark:text-[#e8efe2]/60 max-w-md mx-auto transition-colors">
            Numbers that reflect real work, real deadlines, and real results.
          </p>
        </motion.div>

        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((item, i) => <StatCard key={item.label} item={item} index={i} />)}
        </motion.div>
      </div>
    </section>
  );
}