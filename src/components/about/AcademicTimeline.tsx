"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Languages, Calendar, MapPin, Star, BadgeCheck } from "lucide-react";

interface AcademicTimelineProps {
  showLanguages?: boolean;
}

export default function AcademicTimeline({ showLanguages = true }: AcademicTimelineProps) {
  const education = [
    {
      degree: "B.Tech – Computer Science & Engineering",
      institution: "Future Institute of Engineering & Management",
      location: "Sonarpur, Kolkata, West Bengal",
      duration: "2020 – 2024",
      grade: "CGPA: 7.65 / 10.0",
      description: "Focused on core computer science subjects, database systems, software engineering, and web development fundamentals."
    },
    {
      degree: "Higher Secondary (Science, 10+2)",
      institution: "Vishunpur High School",
      location: "Vishunpur, Ranipur, Nalanda, Bihar",
      duration: "2018 – 2020",
      grade: "First Class",
      description: "Specialized in Science stream with focus on Physics, Chemistry, and Mathematics."
    }
  ];

  const certifications = [
    {
      title: "5-Star Java — HackerRank",
      provider: "HackerRank",
      year: "2020",
      description: "Achieved a 5-Star rating in Java programming, demonstrating advanced understanding of algorithms, data structures, and object-oriented principles."
    },
    {
      title: "CodeChef Competitive Programming",
      provider: "CodeChef",
      year: "2020",
      description: "Ranked among the top 5,000 participants in CodeChef competitive programming contests globally."
    }
  ];

  const languages = [
    { name: "English", proficiency: "Professional Proficiency" },
    { name: "Hindi", proficiency: "Native Proficiency" }
  ];

  return (
    <section className="relative w-full py-16 px-6 md:px-10 xl:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10 ml-2 lg:ml-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* ── Left Column: Education ── */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-[#b8905b]/10 text-[#b8905b] flex items-center justify-center dark:bg-[#b8905b]/20">
                <GraduationCap size={22} />
              </div>
              <div>
                <span className="text-[10px] font-extrabold tracking-[0.2em] text-[#a07c4b] uppercase block">
                  Learning Journey
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#1b3b36] dark:text-[#e8efe2] uppercase tracking-tight">
                  Education.
                </h3>
              </div>
            </div>

            <div className="space-y-8 relative before:absolute before:left-5 before:top-2 before:bottom-2 before:w-[1px] before:bg-[#c4a572]/30">
              {education.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="relative pl-12 group"
                >
                  {/* Bullet */}
                  <div className="absolute left-3.5 top-1.5 w-3.5 h-3.5 rounded-full bg-[#f4f6f0] dark:bg-[#0f1714] border-2 border-[#b8905b] group-hover:scale-125 transition-transform duration-200 z-10" />

                  <div className="p-6 rounded-2xl border backdrop-blur-sm bg-white/70 border-[#c4a572]/15 hover:bg-white hover:shadow-lg dark:bg-white/[0.03] dark:border-white/[0.07] dark:hover:bg-white/[0.05] transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <h4 className="text-lg font-black text-[#1b3b36] dark:text-[#e8efe2] leading-tight">
                        {item.degree}
                      </h4>
                      <span className="inline-block px-3 py-1 rounded-lg text-xs font-bold bg-[#b8905b]/10 text-[#b8905b] dark:bg-[#b8905b]/20 dark:text-[#c4a572] w-fit whitespace-nowrap">
                        {item.duration}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-semibold text-[#1b3b36]/70 dark:text-[#e8efe2]/60 mb-3">
                      <span className="flex items-center gap-1">
                        <Star size={12} className="text-[#b8905b]" />
                        {item.institution}
                      </span>
                      <span className="hidden sm:inline opacity-30">|</span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {item.location}
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-extrabold bg-[#243d2c]/5 text-[#243d2c] border border-[#243d2c]/10 dark:bg-white/5 dark:text-gray-200 dark:border-white/10 mb-3">
                      <BadgeCheck size={13} className="text-[#b8905b]" />
                      {item.grade}
                    </div>

                    <p className="text-xs sm:text-sm leading-relaxed text-[#1b3b36]/60 dark:text-[#e8efe2]/50 font-semibold">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Right Column: Certifications & Languages ── */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            
            {/* Certifications Block */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#b8905b]/10 text-[#b8905b] flex items-center justify-center dark:bg-[#b8905b]/20">
                  <Award size={22} />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold tracking-[0.2em] text-[#a07c4b] uppercase block">
                    Verified Badges
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#1b3b36] dark:text-[#e8efe2] uppercase tracking-tight">
                    Certifications.
                  </h3>
                </div>
              </div>

              <div className="space-y-6">
                {certifications.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="p-6 rounded-2xl border backdrop-blur-sm bg-white/70 border-[#c4a572]/15 hover:bg-white hover:shadow-lg dark:bg-white/[0.03] dark:border-white/[0.07] dark:hover:bg-white/[0.05] transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h4 className="text-base font-black text-[#1b3b36] dark:text-[#e8efe2]">
                        {cert.title}
                      </h4>
                      <span className="text-xs font-bold text-[#b8905b]">
                        {cert.year}
                      </span>
                    </div>
                    <span className="text-xs font-extrabold text-[#b8905b] block mb-2 uppercase tracking-wide">
                      {cert.provider}
                    </span>
                    <p className="text-xs leading-relaxed text-[#1b3b36]/60 dark:text-[#e8efe2]/50 font-semibold">
                      {cert.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Languages Block */}
            {showLanguages && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#b8905b]/10 text-[#b8905b] flex items-center justify-center dark:bg-[#b8905b]/20">
                    <Languages size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold tracking-[0.2em] text-[#a07c4b] uppercase block">
                      Communication
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#1b3b36] dark:text-[#e8efe2] uppercase tracking-tight">
                      Languages.
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {languages.map((lang, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      className="p-5 rounded-xl border backdrop-blur-sm bg-white/70 border-[#c4a572]/15 hover:bg-white hover:shadow-md dark:bg-white/[0.03] dark:border-white/[0.07] dark:hover:bg-white/[0.05] transition-all duration-300 flex flex-col gap-1"
                    >
                      <span className="text-base font-black text-[#1b3b36] dark:text-[#e8efe2]">
                        {lang.name}
                      </span>
                      <span className="text-xs font-bold text-[#b8905b]">
                        {lang.proficiency}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
