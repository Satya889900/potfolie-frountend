"use client";

import { motion, Variants } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const experiences = [
  {
    company: "Kods Technologies Pvt. Ltd",
    location: "Bangalore, India",
    role: "Executive Full Stack Developer",
    duration: "Jan 2026 - Present",
    description: [
      "Developed and maintained 5+ full-stack MERN applications for real-world client projects, reducing delivery time by 25% through reusable component architecture.",
      "Designed and implemented RESTful APIs for authentication, payment processing, and user management, supporting 1,000+ monthly active users.",
      "Integrated Razorpay payment gateway processing 500+ monthly transactions with 0 payment failures and automated subscription renewals.",
      "Implemented Firebase Cloud Messaging (FCM) delivering real-time push notifications to 800+ web and mobile users.",
      "Integrated Brevo for transactional email and SMS automation, alongside Twilio for OTP verification and WhatsApp Business messaging via Meta API.",
      "Built advanced pagination, filtering, and search features reducing average API response time by 40%.",
      "Deployed applications using Docker containers on Render and Vercel with CI/CD pipelines, achieving 99.9% uptime.",
    ],
  },
  {
    company: "Kods Technologies Pvt. Ltd",
    location: "Bangalore, India",
    role: "Software Engineer Intern",
    duration: "Sep 2025 - Dec 2025",
    description: [
      "Built 10+ backend APIs using Node.js and Express.js for core product features shipped to production.",
      "Implemented JWT-based authentication system with role-based access control (RBAC), securing 15+ API endpoints.",
      "Designed and managed MongoDB schemas with optimized indexing, improving query speed by 35%.",
      "Collaborated within an Agile/Scrum team of 6, delivering 100% of sprint tasks on schedule across 4 sprints.",
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden flex flex-col bg-[#f4f6f0] dark:bg-[#0c1310] transition-colors duration-500">
      {/* Dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-100 dark:opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(184,144,91,0.13) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Network / triangle line pattern */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 w-full h-full opacity-40 dark:opacity-[0.25]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="netGrid" width="180" height="180" patternUnits="userSpaceOnUse">
            <path
              d="M0 90 L90 0 L180 90 L90 180 Z M90 0 L90 180 M0 90 L180 90"
              fill="none"
              stroke="#b8905b"
              strokeWidth="0.6"
            />
            <circle cx="90" cy="0" r="2" fill="#b8905b" />
            <circle cx="0" cy="90" r="2" fill="#b8905b" />
            <circle cx="180" cy="90" r="2" fill="#b8905b" />
            <circle cx="90" cy="180" r="2" fill="#b8905b" />
            <circle cx="90" cy="90" r="2" fill="#b8905b" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#netGrid)" />
      </svg>

      <div className="relative z-10 flex-1 flex flex-col py-16 px-6 md:px-10 xl:px-16">
        <div className="max-w-4xl mx-auto w-full">
          {/* Header */}
          <div className="mb-16 ml-4 md:ml-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a07c4b]" />
              <span className="text-[11px] font-extrabold tracking-[0.25em] text-[#a07c4b] uppercase">
                MY CAREER PATH
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[3.2rem] font-black tracking-tight text-[#1b3b36] dark:text-[#e8efe2]">
              WORK EXPERIENCE.
            </h1>
          </div>

          {/* Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="relative border-l-2 border-[#c4a572]/30 ml-4 md:ml-10 space-y-12 py-2"
          >
            {experiences.map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="relative pl-8 md:pl-12">
                {/* Timeline node */}
                <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-[#f4f6f0] dark:bg-[#0c1310] border-4 border-[#b8905b] shadow-[0_0_10px_rgba(184,144,91,0.5)] z-10" />

                {/* Content card */}
                <motion.div
                  whileHover={{ y: -3 }}
                  style={{ willChange: "transform" }}
                  className="p-6 md:p-8 rounded-[2rem] border backdrop-blur-sm
                    bg-white/80 border-[#c4a572]/20 hover:bg-white hover:shadow-xl hover:shadow-[#c4a572]/10
                    dark:bg-white/[0.04] dark:border-white/[0.08] dark:hover:bg-white/[0.07]
                    transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#b8905b]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6 relative z-10">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-black text-[#1b3b36] dark:text-[#e8efe2] leading-tight mb-2">
                        {item.role}
                      </h2>
                      <div className="flex flex-wrap items-center gap-2 text-[#1b3b36]/80 dark:text-[#e8efe2]/80">
                        <h3 className="text-sm font-bold text-[#b8905b] uppercase tracking-wider">
                          {item.company}
                        </h3>
                        <span className="hidden sm:inline text-xs opacity-50">|</span>
                        <span className="text-sm font-semibold">{item.location}</span>
                      </div>
                    </div>
                    <span
                      className="inline-block px-4 py-2 rounded-xl text-xs font-black tracking-wider uppercase w-fit whitespace-nowrap
                      bg-[#b8905b]/10 text-[#b8905b] border border-[#b8905b]/20 dark:bg-[#b8905b]/15 dark:text-[#c4a572]"
                    >
                      {item.duration}
                    </span>
                  </div>

                  <ul className="space-y-3 relative z-10">
                    {item.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0">
                          <CheckCircle2 size={16} className="text-[#b8905b]" />
                        </div>
                        <span className="text-[14px] leading-relaxed text-[#1b3b36]/75 dark:text-[#e8efe2]/80 font-semibold">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </main>
  );
}