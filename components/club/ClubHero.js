"use client";

import { motion } from "framer-motion";

export default function ClubHero() {
  return (
    <section className="relative w-full min-h-[75vh] overflow-hidden flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('/nightclub-interior-2.jpg')` }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full text-center px-6 py-20">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold leading-tight">
            <span className="gold-text">THE CLUB</span>
          </h1>
          <p className="text-white italic font-light text-3xl sm:text-5xl md:text-6xl mt-2 font-serif">
            Dance The Night
          </p>
          <div className="gold-divider w-48 mx-auto mt-7" />
          <p className="text-white/80 text-base sm:text-lg mt-6 font-light tracking-wide">
            World Class DJs <span className="text-[#d4af37]">•</span> Live Music{" "}
            <span className="text-[#d4af37]">•</span> Unforgettable Nights
          </p>
        </motion.div>
      </div>
    </section>
  );
}
