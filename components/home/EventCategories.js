"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MdOutlineWork,
  MdOutlineMusicNote,
  MdOutlineLocalDrink,
  MdOutlineSportsEsports,
  MdOutlineCelebration,
  MdOutlineTheaters,
  MdOutlineBeachAccess,
} from "react-icons/md";

const categories = [
  { name: "Business", icon: <MdOutlineWork size={36} className="text-[#d4af37]" /> },
  { name: "Concert", icon: <MdOutlineMusicNote size={36} className="text-[#d4af37]" /> },
  { name: "Food & Drink", icon: <MdOutlineLocalDrink size={36} className="text-[#d4af37]" /> },
  { name: "Game Nights", icon: <MdOutlineSportsEsports size={36} className="text-[#d4af37]" /> },
  { name: "Party", icon: <MdOutlineCelebration size={36} className="text-[#d4af37]" /> },
  { name: "Entertainment", icon: <MdOutlineTheaters size={36} className="text-[#d4af37]" /> },
  { name: "Beach Parties", icon: <MdOutlineBeachAccess size={36} className="text-[#d4af37]" /> },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function EventCategories() {
  return (
    <section className="py-12 px-4 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4"
        >
          {categories.map((cat, index) => (
            <Link href="/events" key={index}>
              <motion.div
                variants={item}
                className="w-full h-32 rounded-lg border border-[#d4af37]/20 bg-[#111111] shadow-sm p-4 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 hover:border-[#d4af37]/60 hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] hover:-translate-y-1"
              >
                <div className="mb-2 flex items-center justify-center">{cat.icon}</div>
                <h3 className="font-semibold text-sm text-white/85 leading-tight">{cat.name}</h3>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
