"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const includes = [
  "Private Entrance",
  "Personal Photographers",
  "Security Escort",
  "Champagne on Arrival",
  "Dancers",
  "World Class DJs",
  "Live Music",
];

export default function VipIncludes() {
  return (
    <section className="py-20 px-4 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - includes list */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#d4af37] text-sm font-semibold tracking-[0.3em] uppercase mb-6">
              Your VIP Includes
            </h2>
            <ul className="space-y-4">
              {includes.map((item, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#d4af37] shrink-0">
                    <FaCheck size={12} />
                  </span>
                  <span className="text-white/85 text-base sm:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right - image + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="relative w-full max-w-md rounded-lg overflow-hidden border border-[#d4af37]/30">
              <Image
                src="/home/bg.jpg"
                alt="VIP Champagne Experience"
                width={600}
                height={350}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <Link
              href="/contact"
              className="btn-gold mt-8 px-10 py-4 rounded-md text-base font-bold uppercase tracking-wider"
            >
              Reserve Your VIP Night
            </Link>
          </motion.div>
        </div>

        {/* Footer tagline */}
        <div className="mt-16 text-center">
          <p className="text-white/50 text-xs sm:text-sm tracking-[0.25em] uppercase">
            The Pearl Bar Club Event <span className="text-[#d4af37]">•</span> VIP Services{" "}
            <span className="text-[#d4af37]">•</span> 5★ Experience{" "}
            <span className="text-[#d4af37]">•</span> Black &amp; Gold Luxury
          </p>
        </div>
      </div>
    </section>
  );
}
