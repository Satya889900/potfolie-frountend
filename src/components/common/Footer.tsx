"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
} from "./BrandIcons";

function YoutubeIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
    </svg>
  );
}

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
];

const exploreLinks = [
  { name: "Contact", href: "/contact" },
  { name: "Experience", href: "/experience" },
  { name: "Certificates", href: "/certifications" },
  { name: "Resume", href: "/resume" },
];

const socialIcons = [
  { name: "Twitter", icon: TwitterIcon, href: "https://twitter.com" },
  { name: "GitHub", icon: GithubIcon, href: "https://github.com" },
  { name: "YouTube", icon: YoutubeIcon, href: "https://youtube.com" },
  { name: "LinkedIn", icon: LinkedinIcon, href: "https://linkedin.com/in/satya-prakash-542611211" },
];

/* Triangle mesh polygon/vertex data shared between left and right groups */
const MeshPolygons = () => (
  <>
    {/* Bottom row */}
    <polygon points="-20,240 40,175 100,240" fill="rgba(52,211,153,0.04)"/>
    <polygon points="40,175 100,240 160,175" fill="rgba(52,211,153,0.03)"/>
    <polygon points="100,240 160,175 220,240" fill="rgba(52,211,153,0.04)"/>
    <polygon points="160,175 220,240 280,175" fill="rgba(52,211,153,0.025)"/>
    <polygon points="220,240 280,175 340,240" fill="rgba(52,211,153,0.03)"/>
    {/* Mid row */}
    <polygon points="-20,175 40,110 100,175" fill="rgba(52,211,153,0.04)"/>
    <polygon points="40,110 100,175 160,110" fill="rgba(52,211,153,0.035)"/>
    <polygon points="100,175 160,110 220,175" fill="rgba(52,211,153,0.03)"/>
    <polygon points="160,110 220,175 280,110" fill="rgba(52,211,153,0.04)"/>
    <polygon points="220,175 280,110 340,175" fill="rgba(52,211,153,0.025)"/>
    <polygon points="280,110 340,175 400,110" fill="rgba(52,211,153,0.02)"/>
    {/* Upper row */}
    <polygon points="-20,110 40,45 100,110" fill="rgba(52,211,153,0.03)"/>
    <polygon points="40,45 100,110 160,45" fill="rgba(52,211,153,0.025)"/>
    <polygon points="100,110 160,45 220,110" fill="rgba(52,211,153,0.03)"/>
    <polygon points="160,45 220,110 280,45" fill="rgba(52,211,153,0.025)"/>
    <polygon points="220,110 280,45 340,110" fill="rgba(52,211,153,0.02)"/>
    <polygon points="280,45 340,110 400,45" fill="rgba(52,211,153,0.015)"/>
    {/* Top row */}
    <polygon points="-20,45 40,-20 100,45" fill="rgba(52,211,153,0.02)"/>
    <polygon points="40,-20 100,45 160,-20" fill="rgba(52,211,153,0.015)"/>
    <polygon points="100,45 160,-20 220,45" fill="rgba(52,211,153,0.02)"/>
    <polygon points="160,-20 220,45 280,-20" fill="rgba(52,211,153,0.015)"/>
    {/* Inverted gap-fillers */}
    <polygon points="40,175 100,240 40,240" fill="rgba(52,211,153,0.02)"/>
    <polygon points="-20,240 40,175 -20,175" fill="rgba(52,211,153,0.025)"/>
    <polygon points="40,110 100,175 40,175" fill="rgba(52,211,153,0.03)"/>
    <polygon points="-20,175 40,110 -20,110" fill="rgba(52,211,153,0.02)"/>
    <polygon points="100,110 160,175 100,175" fill="rgba(52,211,153,0.025)"/>
    <polygon points="160,110 220,175 160,175" fill="rgba(52,211,153,0.02)"/>
    <polygon points="220,110 280,175 220,175" fill="rgba(52,211,153,0.025)"/>
    <polygon points="40,45 100,110 40,110" fill="rgba(52,211,153,0.025)"/>
    <polygon points="100,45 160,110 100,110" fill="rgba(52,211,153,0.02)"/>
    <polygon points="160,45 220,110 160,110" fill="rgba(52,211,153,0.025)"/>
    {/* Vertex dots */}
    <circle cx="-20" cy="240" r="2.5" fill="rgba(52,211,153,0.35)"/>
    <circle cx="40" cy="175" r="3" fill="rgba(52,211,153,0.4)"/>
    <circle cx="100" cy="240" r="2.5" fill="rgba(52,211,153,0.3)"/>
    <circle cx="160" cy="175" r="3" fill="rgba(52,211,153,0.38)"/>
    <circle cx="220" cy="240" r="2" fill="rgba(52,211,153,0.28)"/>
    <circle cx="280" cy="175" r="2.5" fill="rgba(52,211,153,0.3)"/>
    <circle cx="340" cy="240" r="2" fill="rgba(52,211,153,0.22)"/>
    <circle cx="-20" cy="175" r="2.5" fill="rgba(52,211,153,0.32)"/>
    <circle cx="40" cy="110" r="3" fill="rgba(52,211,153,0.42)"/>
    <circle cx="100" cy="175" r="2.5" fill="rgba(52,211,153,0.35)"/>
    <circle cx="160" cy="110" r="3" fill="rgba(52,211,153,0.38)"/>
    <circle cx="220" cy="175" r="2.5" fill="rgba(52,211,153,0.3)"/>
    <circle cx="280" cy="110" r="2.5" fill="rgba(52,211,153,0.32)"/>
    <circle cx="340" cy="175" r="2" fill="rgba(52,211,153,0.25)"/>
    <circle cx="400" cy="110" r="2" fill="rgba(52,211,153,0.18)"/>
    <circle cx="-20" cy="110" r="2.5" fill="rgba(52,211,153,0.3)"/>
    <circle cx="40" cy="45" r="2.5" fill="rgba(52,211,153,0.35)"/>
    <circle cx="100" cy="110" r="2.5" fill="rgba(52,211,153,0.32)"/>
    <circle cx="160" cy="45" r="2.5" fill="rgba(52,211,153,0.3)"/>
    <circle cx="220" cy="110" r="2.5" fill="rgba(52,211,153,0.28)"/>
    <circle cx="280" cy="45" r="2" fill="rgba(52,211,153,0.25)"/>
    <circle cx="340" cy="110" r="2" fill="rgba(52,211,153,0.2)"/>
    <circle cx="400" cy="45" r="1.8" fill="rgba(52,211,153,0.15)"/>
    <circle cx="-20" cy="45" r="2" fill="rgba(52,211,153,0.28)"/>
    <circle cx="40" cy="-20" r="2" fill="rgba(52,211,153,0.25)"/>
    <circle cx="100" cy="45" r="2" fill="rgba(52,211,153,0.28)"/>
    <circle cx="160" cy="-20" r="1.8" fill="rgba(52,211,153,0.22)"/>
    <circle cx="220" cy="45" r="1.8" fill="rgba(52,211,153,0.2)"/>
    <circle cx="280" cy="-20" r="1.5" fill="rgba(52,211,153,0.18)"/>
  </>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative pt-0 overflow-hidden bg-[#1a3023] dark:bg-[#0a1511] transition-colors duration-500">

      {/* ── Full Triangle Mesh Background ── */}
      <svg
        aria-hidden
        className="text-[#1a3023] dark:text-[#0a1511] pointer-events-none absolute inset-0 w-full h-full z-0"
        viewBox="0 0 960 240"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left mesh */}
        <g stroke="rgba(52,211,153,0.18)" strokeWidth="0.7" fill="none">
          <MeshPolygons />
        </g>

        {/* Right mesh — mirror of left */}
        <g stroke="rgba(52,211,153,0.18)" strokeWidth="0.7" fill="none" transform="translate(960,0) scale(-1,1)">
          <MeshPolygons />
        </g>

        {/* Centre fade so mesh doesn't fight the content */}
        <defs>
          <linearGradient id="fadeC" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0"/>
            <stop offset="30%" stopColor="currentColor" stopOpacity="0.92"/>
            <stop offset="70%" stopColor="currentColor" stopOpacity="0.92"/>
            <stop offset="100%" stopColor="currentColor" stopOpacity="0"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="960" height="240" fill="url(#fadeC)"/>
      </svg>

      {/* ── Giant Star decoration (top-right) ── */}
      <div className="absolute right-[5%] md:right-[10%] top-[-40px] w-40 h-40 z-[2] pointer-events-none opacity-90" style={{ transform: "rotate(15deg)" }}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 0 C50 40 60 50 100 50 C60 50 50 60 50 100 C50 60 40 50 0 50 C40 50 50 40 50 0 Z" fill="#9db0a5" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 z-10">
        {/* ── Top grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-12 lg:py-16 max-w-6xl mx-auto border-b border-[#e8efe2]/10">

          {/* Brand */}
          <div className="md:col-span-1 pr-4">
            <Link href="/" className="inline-block text-3xl font-extrabold tracking-tight mb-2">
              <span className="text-[#b8905b] dark:text-[#c4a572]">Satya</span>
              <span className="text-white dark:text-[#e8efe2]">.</span>
            </Link>
            <p className="mt-1 text-sm leading-relaxed text-[#e8efe2]/60">
              Full stack developer crafting custom art experiences with open source and creative design.
            </p>
            <div className="mt-3 w-9 h-[1.5px] rounded-full bg-[#b8905b]" />
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1 md:pl-8">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#b8905b] dark:text-[#c4a572]">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#e8efe2]/60 transition-colors duration-200 hover:text-[#c4a572]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div className="md:col-span-1 md:pl-4">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#b8905b] dark:text-[#c4a572]">
              Explore
            </h4>
            <ul className="space-y-2">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#e8efe2]/60 transition-colors duration-200 hover:text-[#c4a572]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#b8905b] dark:text-[#c4a572]">
              Let&apos;s Contact
            </h4>
            <p className="text-sm leading-relaxed text-[#e8efe2]/60 mb-4">
              Open to freelance opportunities and collaborations.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {socialIcons.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex h-[33px] w-[33px] items-center justify-center rounded-[7px] bg-[#a7b9af] text-[#12241b] transition-all duration-200 hover:scale-110 hover:bg-[#c6d6ce]"
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col items-center justify-between gap-2 py-4 pb-5 text-xs text-[#e8efe2]/40 sm:flex-row flex-wrap">
          <p>&copy; {year} Satya Prakash. All rights reserved.</p>
          <div className="flex items-center gap-3.5">
            <span className="hover:text-[#c4a572] cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-[#c4a572] cursor-pointer transition-colors">Sub-Assignments</span>
            <span className="hover:text-[#c4a572] cursor-pointer transition-colors">Terms of Service</span>
          </div>
          <p className="flex items-center gap-1">
            Built with <Heart size={12} className="text-[#b8905b] dark:text-[#c4a572] animate-pulse" /> using React.js
          </p>
        </div>
      </div>
    </footer>
  );
}