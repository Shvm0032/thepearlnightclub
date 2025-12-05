"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/about/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/30"></div>

      {/* Content */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative px-6 md:mx-24 mx-4 max-w-xl md:max-w-5xl"
      >
        <h1 className="text-white text-4xl md:text-[70px] font-black leading-tight md:leading-[1.1] text-center md:text-left">
          Crafting Unforgettable <br className="hidden md:block" /> Experiences
        </h1>

        <p className="text-white/90 text-base md:text-lg mt-4 max-w-lg md:max-w-2xl text-center md:text-left">
          Our journey began with a vision: to create a space where every visit is
          not just an event but a cherished memory.
        </p>

        <div className="mt-6 md:mt-8 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <button className="bg-[#e86c60] hover:bg-[#d75b54] text-white px-6 py-3 md:py-4 rounded-md font-semibold w-full md:w-auto text-center">
            Book Your Event
          </button>

          <button className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-md w-full md:w-auto">
            ▶ Watch Video
          </button>
        </div>
      </motion.div>
    </section>
  );
}
