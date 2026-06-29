"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Mail, User, MessageSquare, ArrowRight } from "lucide-react";
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
    <main className="relative min-h-screen w-full overflow-hidden flex flex-col bg-[#eef2ff] dark:bg-[#07071a] transition-colors duration-500">
      {/* ── LIGHT MODE background ── */}
      <div aria-hidden className="dark:hidden pointer-events-none absolute inset-0 bg-[#f4f6f0]" />

      {/* ── DARK MODE background ── */}
      <div aria-hidden className="hidden dark:block pointer-events-none absolute inset-0 bg-[#0f1714]" />

      {/* Dot grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(184,144,91,0.15) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />

      <div className="relative z-10 flex-1 flex flex-col min-h-screen py-16 px-6 md:px-10 xl:px-16">
        <div className="max-w-3xl mx-auto w-full">
          
          {/* Header */}
          <div className="mb-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 mb-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#a07c4b]"></span>
              <span className="text-[11px] font-extrabold tracking-[0.25em] text-[#a07c4b] uppercase">
                GET IN TOUCH
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-[3.2rem] font-black tracking-tight text-[#1b3b36] dark:text-[#e8efe2]"
            >
              CONTACT ME.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mt-3 text-[14px] text-[#1b3b36]/60 dark:text-[#e8efe2]/60 max-w-md mx-auto font-medium"
            >
              Have a question or want to work together? Drop me a message below.
            </motion.p>
          </div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 md:p-10 rounded-[2rem] border backdrop-blur-sm
              bg-white/60 border-[#c4a572]/15 shadow-xl shadow-[#c4a572]/5
              dark:bg-white/[0.04] dark:border-white/[0.07] dark:shadow-none"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name field */}
              <div className="relative">
                <label className="block text-[11px] font-black tracking-wider text-[#1b3b36]/70 dark:text-[#e8efe2]/70 uppercase mb-2">
                  Name
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1b3b36]/40 dark:text-[#e8efe2]/40">
                    <User size={18} />
                  </span>
                  <input
                    {...register("name")}
                    placeholder="Enter your name"
                    className="w-full border rounded-xl py-3.5 pl-12 pr-4 text-[14px] font-semibold transition-all duration-300
                      bg-white/60 border-[#c4a572]/20 text-[#1b3b36] placeholder-[#1b3b36]/40
                      dark:bg-[#0f1714]/40 dark:border-white/10 dark:text-[#e8efe2] dark:placeholder-[#e8efe2]/30
                      focus:border-[#c4a572] focus:ring-1 focus:ring-[#c4a572] outline-none"
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1.5 font-bold pl-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email field */}
              <div className="relative">
                <label className="block text-[11px] font-black tracking-wider text-[#1b3b36]/70 dark:text-[#e8efe2]/70 uppercase mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1b3b36]/40 dark:text-[#e8efe2]/40">
                    <Mail size={18} />
                  </span>
                  <input
                    {...register("email")}
                    placeholder="Enter your email"
                    className="w-full border rounded-xl py-3.5 pl-12 pr-4 text-[14px] font-semibold transition-all duration-300
                      bg-white/60 border-[#c4a572]/20 text-[#1b3b36] placeholder-[#1b3b36]/40
                      dark:bg-[#0f1714]/40 dark:border-white/10 dark:text-[#e8efe2] dark:placeholder-[#e8efe2]/30
                      focus:border-[#c4a572] focus:ring-1 focus:ring-[#c4a572] outline-none"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1.5 font-bold pl-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message field */}
              <div className="relative">
                <label className="block text-[11px] font-black tracking-wider text-[#1b3b36]/70 dark:text-[#e8efe2]/70 uppercase mb-2">
                  Message
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-5 text-[#1b3b36]/40 dark:text-[#e8efe2]/40">
                    <MessageSquare size={18} />
                  </span>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Describe your project or query..."
                    className="w-full border rounded-xl py-3.5 pl-12 pr-4 text-[14px] font-semibold transition-all duration-300
                      bg-white/60 border-[#c4a572]/20 text-[#1b3b36] placeholder-[#1b3b36]/40
                      dark:bg-[#0f1714]/40 dark:border-white/10 dark:text-[#e8efe2] dark:placeholder-[#e8efe2]/30
                      focus:border-[#c4a572] focus:ring-1 focus:ring-[#c4a572] outline-none resize-none"
                  />
                </div>
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1.5 font-bold pl-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-[13px] text-[#1b3b36] shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer disabled:opacity-50"
                  style={{
                    background: "linear-gradient(135deg, #d3bb93 0%, #c8aa76 60%, #a07c4b 100%)",
                  }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </main>
  );
}