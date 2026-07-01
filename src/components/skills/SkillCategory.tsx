"use client";

import { motion } from "framer-motion";

export default function SkillCategory() {
  const sections = [
    {
      label: "Frontend",
      suffix: "(as in watermarked_img_16254415848574187010.png)",
      skills: [
        { name: "HTML.  ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
        { name: "CSS.  ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
        { name: "JavaScript (ES6+)  ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { name: "React ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Next.js ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
        { name: "Tailwind CSS ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      ],
    },
    {
      label: "Backend & APIs",
      suffix: "(as in watermarked_img_16254415848574187010.png)",
      skills: [
        { name: "Node.js.  ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
        { name: "Express  ", icon: "https://cdn.simpleicons.org/express/000000" },
        { name: "Spring Boot ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
        { name: "Java  ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
        { name: "MySQL ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
        { name: "PostgreSQL ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
        { name: "REST APIs  ", icon: "https://cdn.simpleicons.org/postman/FF6C37" }, // Using postman icon as a proxy for REST APIs
      ],
    },
    {
      label: "DevOps & Deployment",
      suffix: "(as in watermarked_img_16254415848574187010.png)",
      skills: [
        { name: "AWS EC2 (Added as requested).", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Docker ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
        { name: "CI/CD Pipelines ", icon: "https://cdn.simpleicons.org/githubactions/2088FF" }, // proxy for CI/CD
        { name: "Git & GitHub ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        { name: "Vercel ", icon: "https://cdn.simpleicons.org/vercel/000000" },
        { name: "Render ", icon: "https://cdn.simpleicons.org/render/46E3B7" },
      ],
    },
    {
      label: "Database",
      suffix: "",
      skills: [
        { name: "MongoDB (Aggregation & Indexition & Indexing)  ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
      ],
    },
    {
      label: "Communications & Auth",
      suffix: "",
      skills: [
        { name: "JWT & RBAC (Authentication)  ", icon: "https://cdn.simpleicons.org/jsonwebtokens/000000" },
        { name: "Socket.io (Real-Time)  ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg" },
        { name: "Firebase FCM (Push Notifications)  ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" },
        { name: "Brevo (Email/SMS Automation)  ", icon: "https://cdn.simpleicons.org/brevo/009286" },
        { name: "Twilio (SMS/Voice/OTP)  ", icon: "https://www.vectorlogo.zone/logos/twilio/twilio-icon.svg" },
        { name: "WhatsApp Business API (Meta)  ", icon: "https://cdn.simpleicons.org/whatsapp/25D366" },
        { name: "Razorpay Gateway (Payments)  ", icon: "https://cdn.simpleicons.org/razorpay/02042B" },
      ],
    },
  ];

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden flex flex-col bg-[#fbfbf9] dark:bg-[#0f1714] font-sans transition-colors duration-300">
      {/* Network Background SVG */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <svg className="absolute left-0 top-0 h-full w-full opacity-60 dark:opacity-20" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1440 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Left side web */}
          <path d="M-100 100 L250 250 L-50 450 Z" stroke="#c4a572" strokeWidth="1" strokeOpacity="0.8" />
          <path d="M250 250 L450 100 L150 -50" stroke="#c4a572" strokeWidth="1" strokeOpacity="0.6" />
          <path d="M-50 450 L150 700 L350 400 L250 250" stroke="#c4a572" strokeWidth="1" strokeOpacity="0.7" />
          <path d="M350 400 L600 600 L150 700" stroke="#c4a572" strokeWidth="1" strokeOpacity="0.5" />
          <path d="M600 600 L400 900 L0 1000" stroke="#c4a572" strokeWidth="1" strokeOpacity="0.6" />
          <path d="M-100 800 L200 950 L100 1100" stroke="#c4a572" strokeWidth="1" strokeOpacity="0.7" />
          <path d="M150 700 L200 950" stroke="#c4a572" strokeWidth="1" strokeOpacity="0.6" />

          {/* Right side web */}
          <path d="M1500 150 L1250 300 L1600 450 Z" stroke="#c4a572" strokeWidth="1" strokeOpacity="0.8" />
          <path d="M1250 300 L1050 50 L1500 -50" stroke="#c4a572" strokeWidth="1" strokeOpacity="0.6" />
          <path d="M1600 450 L1350 700 L1150 400 L1250 300" stroke="#c4a572" strokeWidth="1" strokeOpacity="0.7" />
          <path d="M1150 400 L900 650 L1350 700" stroke="#c4a572" strokeWidth="1" strokeOpacity="0.5" />
          <path d="M900 650 L1100 950 L1500 1050" stroke="#c4a572" strokeWidth="1" strokeOpacity="0.6" />
          <path d="M1500 850 L1200 1000 L1400 1150" stroke="#c4a572" strokeWidth="1" strokeOpacity="0.7" />
          <path d="M1350 700 L1200 1000" stroke="#c4a572" strokeWidth="1" strokeOpacity="0.6" />
          
          {/* Nodes */}
          <circle cx="250" cy="250" r="2.5" fill="#c4a572" />
          <circle cx="450" cy="100" r="2.5" fill="#c4a572" />
          <circle cx="-50" cy="450" r="2.5" fill="#c4a572" />
          <circle cx="150" cy="700" r="2.5" fill="#c4a572" />
          <circle cx="350" cy="400" r="2.5" fill="#c4a572" />
          <circle cx="600" cy="600" r="2.5" fill="#c4a572" />
          <circle cx="400" cy="900" r="2.5" fill="#c4a572" />
          <circle cx="200" cy="950" r="2.5" fill="#c4a572" />
          <circle cx="1250" cy="300" r="2.5" fill="#c4a572" />
          <circle cx="1050" cy="50" r="2.5" fill="#c4a572" />
          <circle cx="1150" cy="400" r="2.5" fill="#c4a572" />
          <circle cx="1350" cy="700" r="2.5" fill="#c4a572" />
          <circle cx="900" cy="650" r="2.5" fill="#c4a572" />
          <circle cx="1100" cy="950" r="2.5" fill="#c4a572" />
          <circle cx="1200" cy="1000" r="2.5" fill="#c4a572" />
        </svg>
      </div>

      <div className="relative z-10 flex-1 flex flex-col pt-12 pb-24 px-6 md:px-16 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl text-[#a07c4b]">✦</span>
            <span className="text-sm font-semibold tracking-widest text-[#a07c4b] uppercase">
              MY TECH STACK
            </span>
          </div>
          <h1 className="text-[2.75rem] font-bold text-[#1b3b36] dark:text-[#e8efe2] uppercase tracking-tight">
            PROFESSIONAL SKILLS.
          </h1>
        </div>

        {/* Skill Sections */}
        <div className="flex flex-col gap-8">
          {sections.map((section, idx) => (
            <div key={idx} className="flex flex-col">
              <h2 className="text-[1.35rem] font-semibold text-[#1a3831] dark:text-[#a8c89c] mb-5 flex items-baseline flex-wrap gap-2">
                <span className="text-[#305a4a] dark:text-[#a8c89c]">— {section.label}.</span>
                {section.suffix && (
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-normal tracking-tight">
                    {section.suffix}
                  </span>
                )}
              </h2>
              
              <div className="flex flex-wrap gap-3">
                {section.skills.map((skill, sIdx) => (
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    key={sIdx}
                    className="flex items-center gap-4 bg-white dark:bg-white/[0.05] px-6 py-4 rounded-full border border-gray-100 dark:border-white/10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:shadow-none"
                  >
                    <div className="w-10 h-10 flex items-center justify-center shrink-0">
                      {/* Using regular img for ease, can be optimized later */}
                      <img src={skill.icon} alt={skill.name} className="max-w-full max-h-full object-contain" />
                    </div>
                    <span className="text-lg font-semibold text-[#1b3b36] dark:text-[#e8efe2] whitespace-nowrap">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Strip */}
    
    </main>
  );
}