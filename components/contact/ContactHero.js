"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative w-full py-24 px-4 bg-[#0a0a0a] overflow-hidden">
      {/* decorative marble/gold texture background */}
      <div
        className="absolute inset-0 opacity-[0.08] bg-cover bg-center"
        style={{ backgroundImage: `url('/contact/bg.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold leading-tight gold-text"
        >
          CONTACT
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-serif text-2xl sm:text-3xl md:text-4xl text-white italic font-light mt-2"
        >
          Reserve Your Night
        </motion.p>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white/80 text-base sm:text-lg mt-5 font-light tracking-wide"
        >
          Book In 30 Seconds
        </motion.p>
      </div>
    </section>
  );
}
