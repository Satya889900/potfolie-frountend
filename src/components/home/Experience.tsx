"use client";

import { motion, Variants } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

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

export default function Experience() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#f4f6f0] dark:bg-[#0f1714] transition-colors duration-500">
      {/* Decorative blobs */}
      <div aria-hidden className="pointer-events-none absolute top-20 right-0 w-[420px] h-[420px] rounded-full bg-[#1b3b36]/5 dark:bg-[#1b3b36]/15 blur-[95px]" />
      <div aria-hidden className="pointer-events-none absolute bottom-10 left-0 w-[360px] h-[360px] rounded-full bg-[#b8905b]/5 dark:bg-[#b8905b]/10 blur-[80px]" />

      {/* Dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(184,144,91,0.15) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

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
                MY CAREER PATH
             </span>
             <span className="text-[8px] opacity-80">♦</span>
             <span className="w-12 h-[1px] bg-current opacity-30" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#1b3b36] dark:text-[#e8efe2] transition-colors">
            Work Experience
          </h2>
          <p className="mt-3 text-[13px] font-semibold text-[#2a3b34]/60 dark:text-[#e8efe2]/60 max-w-md mx-auto transition-colors">
            A track record of engineering scalable platforms, optimizing APIs, and building clean web apps.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="relative border-l-2 border-[#c4a572]/30 ml-2 sm:ml-4 md:ml-10 space-y-10 sm:space-y-12 py-2"
          >
            {experiences.map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="relative pl-4 sm:pl-8 md:pl-12 w-full">
                {/* Timeline node */}
                <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-[#f4f6f0] dark:bg-[#0f1714] border-4 border-[#b8905b] shadow-[0_0_10px_rgba(184,144,91,0.5)] z-10 transition-colors" />

                {/* Content card */}
                <motion.div
                  whileHover={{ y: -3 }}
                  style={{ willChange: "transform" }}
                  className="p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-[2rem] border backdrop-blur-sm
                    bg-white/80 border-[#c4a572]/20 hover:bg-white hover:shadow-xl hover:shadow-[#c4a572]/10
                    dark:bg-white/[0.03] dark:border-white/[0.07] dark:hover:bg-white/[0.05]
                    transition-all duration-300 relative overflow-hidden group w-full"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#b8905b]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 mb-5 sm:mb-6 relative z-10">
                    <div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#1b3b36] dark:text-[#e8efe2] leading-tight mb-2">
                        {item.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-[#1b3b36]/80 dark:text-[#e8efe2]/80">
                        <span className="text-sm sm:text-base font-bold text-[#b8905b] uppercase tracking-wider">
                          {item.company}
                        </span>
                        <span className="hidden sm:inline text-sm opacity-50">|</span>
                        <span className="text-sm sm:text-base font-semibold">{item.location}</span>
                      </div>
                    </div>
                    <span
                      className="inline-block px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-black tracking-wider uppercase w-fit whitespace-nowrap
                      bg-[#b8905b]/10 text-[#b8905b] border border-[#b8905b]/20 dark:bg-[#b8905b]/15 dark:text-[#c4a572]"
                    >
                      {item.duration}
                    </span>
                  </div>

                  <ul className="space-y-2.5 sm:space-y-3 relative z-10">
                    {item.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 sm:gap-3">
                        <div className="mt-1 flex-shrink-0">
                          <CheckCircle2 size={16} className="text-[#b8905b] sm:w-[18px] sm:h-[18px]" />
                        </div>
                        <span className="text-sm sm:text-base leading-relaxed text-[#1b3b36]/75 dark:text-[#e8efe2]/80 font-semibold">
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

        {/* Call to action at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <Link
            href="/resume"
            className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 bg-[#243d2c] text-[#e8efe2] hover:bg-[#1c3327] shadow-md dark:bg-[#243d2c] dark:text-[#e8efe2]"
          >
            View Full Resume
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
