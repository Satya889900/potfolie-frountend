"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
} from "./BrandIcons";

/* YouTube Icon */
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
  { name: "Instagram", icon: InstagramIcon, href: "https://instagram.com" },
  { name: "YouTube", icon: YoutubeIcon, href: "https://youtube.com" },
  { name: "LinkedIn", icon: LinkedinIcon, href: "https://linkedin.com/in/satya-prakash-542611211" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative pt-24 overflow-hidden bg-[#1a3023] dark:bg-[#0a1511] transition-colors duration-500">
      {/* Decorative Network Nodes Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Left Network Design */}
        <div className="absolute left-[-150px] bottom-0 w-[500px] h-[500px] opacity-[0.4] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(36,62,46,0.5),transparent_50%)]" />
          <svg className="absolute inset-0 w-full h-full text-[#243e2e]" viewBox="0 0 200 200">
            <g fill="currentColor">
              <path d="M40 180 L80 140 L120 160 L140 200 M80 140 L100 100 L160 120 M100 100 L50 80 L20 120 L80 140 M50 80 L30 30 L80 60 L100 100" fill="none" stroke="currentColor" strokeWidth="0.4" strokeOpacity="0.4" />
              <path d="M40 180 L20 120 M120 160 L160 120 M100 100 L140 60 L80 60" fill="none" stroke="currentColor" strokeWidth="0.3" strokeOpacity="0.2" />
              <circle cx="40" cy="180" r="2" /><circle cx="80" cy="140" r="3" /><circle cx="120" cy="160" r="2" /><circle cx="100" cy="100" r="3" /><circle cx="160" cy="120" r="2" /><circle cx="50" cy="80" r="2" /><circle cx="20" cy="120" r="1.5" /><circle cx="80" cy="60" r="2" /><circle cx="140" cy="60" r="1.5" />
            </g>
          </svg>
        </div>
        {/* Right Network Design */}
        <div className="absolute right-[-150px] bottom-0 w-[500px] h-[500px] opacity-[0.4] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(36,62,46,0.5),transparent_50%)]" />
          <svg className="absolute inset-0 w-full h-full text-[#243e2e]" viewBox="0 0 200 200">
            <g fill="currentColor">
              <path d="M160 180 L120 140 L80 160 L60 200 M120 140 L100 100 L40 120 M100 100 L150 80 L180 120 L120 140 M150 80 L170 30 L120 60 L100 100" fill="none" stroke="currentColor" strokeWidth="0.4" strokeOpacity="0.4" />
              <path d="M160 180 L180 120 M80 160 L40 120 M100 100 L60 60 L120 60" fill="none" stroke="currentColor" strokeWidth="0.3" strokeOpacity="0.2" />
              <circle cx="160" cy="180" r="2" /><circle cx="120" cy="140" r="3" /><circle cx="80" cy="160" r="2" /><circle cx="100" cy="100" r="3" /><circle cx="40" cy="120" r="2" /><circle cx="150" cy="80" r="2" /><circle cx="180" cy="120" r="1.5" /><circle cx="120" cy="60" r="2" /><circle cx="60" cy="60" r="1.5" />
            </g>
          </svg>
        </div>
      </div>
      {/* ── glow accent ──────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-[#1b3b36]/8 dark:bg-[#1b3b36]/10 blur-3xl -z-10"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {/* ── top section ─────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-12 lg:py-16 max-w-6xl mx-auto">
          {/* brand column */}
          <div className="md:col-span-1 pr-4">
            <Link
              href="/"
              className="inline-block text-2xl font-extrabold tracking-tight"
            >
              <span className="text-[#b8905b] dark:text-[#c4a572]">
                Satya
              </span>
              <span className="text-white dark:text-[#e8efe2]">.</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-[#e8efe2]/70">
              Full-stack developer crafting custom web
              experiences with clean code and creative design.
            </p>
          </div>

          {/* quick links */}
          <div className="md:col-span-1 md:pl-8">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#b8905b] dark:text-[#c4a572]">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#e8efe2]/70 transition-colors duration-200 hover:text-[#c4a572] dark:text-[#e8efe2]/60 dark:hover:text-[#c4a572]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* explore links */}
          <div className="md:col-span-1 md:pl-4">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#b8905b] dark:text-[#c4a572]">
              Explore
            </h4>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#e8efe2]/70 transition-colors duration-200 hover:text-[#c4a572] dark:text-[#e8efe2]/60 dark:hover:text-[#c4a572]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* let's contact */}
          <div className="md:col-span-1">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#b8905b] dark:text-[#c4a572]">
              Let&apos;s Contact
            </h4>
            <p className="text-sm leading-relaxed text-[#e8efe2]/70 dark:text-[#e8efe2]/60">
              Open to freelance opportunities and collaborations.
            </p>
            {/* social icons */}
            <div className="mt-6 flex flex-wrap gap-2">
              {socialIcons.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className={`
                    flex h-9 w-9 items-center justify-center rounded-lg
                    border border-[#2a4332] dark:border-[#b8905b]/15
                    bg-[#213928] dark:bg-[#1b3b36]/20
                    text-[#e8efe2]/70 dark:text-[#e8efe2]/60
                    transition-all duration-200
                    hover:scale-110 hover:border-[#b8905b]/40
                    hover:text-[#c4a572] dark:hover:text-[#c4a572]
                    hover:shadow-md hover:shadow-[#b8905b]/10
                  `}
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── bottom bar ──────────────────────────── */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-[#e8efe2]/10 py-6 text-xs text-[#e8efe2]/60 sm:flex-row relative z-10">
          <p>&copy; {year} Satya Prakash. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-[#c4a572] cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-[#c4a572] cursor-pointer transition-colors">Sub-Assigments</span>
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