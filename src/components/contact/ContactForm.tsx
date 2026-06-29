"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Mail, User, MessageSquare, ArrowRight, MapPin } from "lucide-react";
import { sendContactForm } from "../../services/contactService";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.email("Invalid email"),
  message: z.string().min(10, "Message is required"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    const response = await sendContactForm(data);
    if (response.success) {
      toast.success(response.message);
      reset();
    } else {
      toast.error(response.message || "Failed to send message.");
    }
  };

  return (
    <main className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden flex flex-col bg-[#fbfbf9] dark:bg-[#0f1714] font-sans transition-colors duration-300">
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

      <div className="relative z-10 flex-1 flex flex-col pt-12 pb-24 px-6 md:px-12 xl:px-16 max-w-7xl xl:max-w-[1400px] mx-auto w-full">
        {/* Header */}
        <div className="mb-14 text-left">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl text-[#a07c4b]">✦</span>
            <span className="text-base font-semibold tracking-widest text-[#a07c4b] uppercase">
              GET IN TOUCH
            </span>
          </div>
          <h1 className="text-5xl lg:text-[4.2rem] font-bold text-[#1b3b36] dark:text-[#e8efe2] uppercase tracking-tight">
            CONTACT ME.
          </h1>
          <p className="mt-3 text-[1.15rem] lg:text-[1.3rem] text-black dark:text-[#e8efe2]/80 font-medium">
            Have a question or want to work together? Drop me a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">
          
          {/* Left Column - Contact Info Cards */}
          <div className="flex flex-col gap-6">
            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-[#2a3b34] dark:bg-[#1a2823] p-8 lg:p-10 rounded-[1.5rem] shadow-lg flex flex-col gap-4"
            >
              <div className="bg-[#b8905b] w-14 h-12 rounded-xl flex items-center justify-center text-[#2a3b34] mb-1">
                <Mail size={26} />
              </div>
              <div className="flex flex-col text-white font-medium">
                <span className="text-[19px] lg:text-[21px] break-all">satyaprakash121122@gmail.com</span>
                <span className="text-base lg:text-[17px] opacity-80 mt-1">(as requested from the resume) [cite: 1]</span>
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#2a3b34] dark:bg-[#1a2823] p-8 lg:p-10 rounded-[1.5rem] shadow-lg flex flex-col gap-4"
            >
              <div className="bg-[#b8905b] w-14 h-12 rounded-xl flex items-center justify-center text-[#2a3b34] mb-1">
                <MapPin size={26} />
              </div>
              <div className="flex flex-col text-white font-medium">
                <span className="text-[19px] lg:text-[21px]">Bangalore, India <span className="text-base lg:text-[17px] font-normal opacity-80">(as requested from</span></span>
                <span className="text-base lg:text-[17px] opacity-80">the resume) [cite: 1]</span>
              </div>
            </motion.div>

            {/* LinkedIn Profile Button */}
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full mt-3"
            >
              <div style={{ background: "linear-gradient(90deg, #d8b87c 0%, #b8905b 100%)" }} 
                   className="py-4 lg:py-5 px-8 rounded-2xl flex items-center gap-6 shadow-md text-[#2a3b34] font-bold">
                <span className="text-lg lg:text-[20px]">[cite: 1]</span>
                <span className="text-[19px] lg:text-[22px]">LinkedIn Profile</span>
              </div>
            </motion.a>

            {/* GitHub Profile Button */}
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="w-full"
            >
              <div style={{ background: "linear-gradient(90deg, #d8b87c 0%, #b8905b 100%)" }} 
                   className="py-4 lg:py-5 px-8 rounded-2xl flex items-center gap-6 shadow-md text-[#2a3b34] font-bold">
                <span className="text-lg lg:text-[20px]">[cite: 1]</span>
                <span className="text-[19px] lg:text-[22px]">GitHub Profile</span>
              </div>
            </motion.a>
          </div>

          {/* Right Column - Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-8 lg:p-12 xl:p-14 rounded-[2rem] bg-white dark:bg-[#1a2823]/80 shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-none border border-gray-100 dark:border-white/5"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-7 lg:space-y-8">
              {/* Name */}
              <div>
                <label className="block text-[16px] lg:text-[18px] font-medium text-black dark:text-white mb-3">
                  Name
                </label>
                <div className="relative">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
                    <User size={22} />
                  </span>
                  <input
                    {...register("name")}
                    placeholder="Name"
                    className="w-full border-2 rounded-2xl py-4 lg:py-5 pl-14 pr-5 text-[16px] lg:text-[18px]
                      bg-white border-gray-200 text-black placeholder-gray-400
                      dark:bg-[#0f1714] dark:border-gray-700 dark:text-white
                      focus:border-[#c4a572] focus:ring-0 outline-none transition-colors"
                  />
                </div>
                {errors.name && <p className="text-red-500 text-sm mt-2 font-bold pl-1">{errors.name.message}</p>}
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-[16px] lg:text-[18px] font-medium text-black dark:text-white mb-3">
                  Email Address
                </label>
                <div className="relative">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
                    <Mail size={22} />
                  </span>
                  <input
                    {...register("email")}
                    placeholder="Email Address"
                    className="w-full border-2 rounded-2xl py-4 lg:py-5 pl-14 pr-5 text-[16px] lg:text-[18px]
                      bg-white border-gray-200 text-black placeholder-gray-400
                      dark:bg-[#0f1714] dark:border-gray-700 dark:text-white
                      focus:border-[#c4a572] focus:ring-0 outline-none transition-colors"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-sm mt-2 font-bold pl-1">{errors.email.message}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="block text-[16px] lg:text-[18px] font-medium text-black dark:text-white mb-3">
                  Message
                </label>
                <div className="relative">
                  <span className="absolute left-5 top-5 text-gray-400">
                    <MessageSquare size={22} />
                  </span>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Message"
                    className="w-full border-2 rounded-2xl py-4 lg:py-5 pl-14 pr-5 text-[16px] lg:text-[18px]
                      bg-white border-gray-200 text-black placeholder-gray-400
                      dark:bg-[#0f1714] dark:border-gray-700 dark:text-white
                      focus:border-[#c4a572] focus:ring-0 outline-none resize-none transition-colors"
                  />
                </div>
                {errors.message && <p className="text-red-500 text-sm mt-2 font-bold pl-1">{errors.message.message}</p>}
              </div>

              {/* Submit Button */}
              <div className="pt-4 lg:pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 lg:py-5 rounded-2xl font-bold text-[18px] lg:text-[20px] text-[#2a3b34] shadow-lg hover:opacity-90 active:scale-[0.99] transition-all cursor-pointer disabled:opacity-50"
                  style={{ background: "linear-gradient(90deg, #d8b87c 0%, #b8905b 100%)" }}
                >
                  {isSubmitting ? "Sending..." : "Send Message →"}
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </main>
  );
}