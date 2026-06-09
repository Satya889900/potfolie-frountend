"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-blue-600 font-semibold mb-4"
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-6xl md:text-8xl font-bold"
        >
          Satya Prakash
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-2xl md:text-4xl font-semibold text-gray-600 dark:text-gray-300"
        >
          Full Stack Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="max-w-2xl mt-6 text-lg text-gray-500"
        >
          I build scalable web applications using
          Next.js, React, Spring Boot, Java,
          MongoDB, MySQL and modern cloud technologies.
        </motion.p>

        <div className="flex gap-4 mt-10 flex-wrap">
          <button className="px-8 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
            Hire Me
          </button>

          <button className="px-8 py-3 rounded-lg border hover:bg-gray-100 dark:hover:bg-zinc-800 transition">
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
}