"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative w-full h-[80vh]  overflow-hidden flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('/about/hero.jpg')", 
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-5xl mx-24  px-6"
      >
        <h1 className="text-white text-5xl md:text-[70px] font-black leading-tight">
          Crafting Unforgettable <br /> Experiences
        </h1>

        <p className="text-white/90 text-lg mt-4 max-w-2xl">
          Our journey began with a vision: to create a space where every visit is
          not just an event but a cherished memory.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-[#e86c60] hover:bg-[#d75b54] text-white px-6 py-4 rounded-md font-semibold">
            Book Your Event
          </button>

          <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-md">
            ▶ Watch Video
          </button>
        </div>
      </motion.div>
    </section>
  );
}
