"use client";

import { motion } from "framer-motion";

export default function KnowMoreAboutUs() {
  return (
    <section className="w-full py-0 overflow-x-hidden">
      <div className="grid grid-cols-1 md:grid-cols-[60%_40%]">

        {/* LEFT SIDE — BLUE CONTENT BOX */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}   // <-- Reduced for no overflow
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#273171] text-white py-14 px-6 md:py-16 md:px-14 flex flex-col justify-center max-w-full"
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="w-10 h-0.5 bg-white"></span>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              Know More <span className="font-bold">About Us</span>
            </h2>
          </div>

          <p className="leading-relaxed text-white/90 text-[15px] md:text-[17px]">
            At The Pearl, we embody the spirit of celebration, where each night unfolds
            into a unique tapestry of experiences. Welcome to The Pearl, where every night
            comes alive with the vibrancy of our carefully curated events and the
            enchantment of a perfect pour.
          </p>
        </motion.div>

        {/* RIGHT SIDE — IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}   // <-- Reduced for no overflow
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full h-80 md:h-auto max-w-full overflow-hidden"
        >
          <img
            src="/about/knowmoreabout.jpg"
            alt="Know More About Us"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
