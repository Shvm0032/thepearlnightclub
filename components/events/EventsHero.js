"use client";

import { motion } from "framer-motion";

export default function EventsHero() {
  return (
    <section className="relative w-full min-h-[70vh] overflow-hidden flex items-end">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('/events/beach.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/40 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16 pt-20">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold leading-tight text-white">
            EVENTS <span className="text-white/60 font-light">- Overseas Events</span>
          </h1>
          <p className="text-white/80 text-lg sm:text-xl mt-4 font-light italic">
            The Pearl Goes Worldwide
          </p>
        </motion.div>
      </div>
    </section>
  );
}
