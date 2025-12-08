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

export default function EventCategories() {
  const categories = [
    {
      name: "Business",
      icon: <MdOutlineWork size={45} className="text-red-500" />,
      gradient: "bg-gradient-to-br from-red-200 to-white"
    },
    {
      name: "Concert",
      icon: <MdOutlineMusicNote size={45} className="text-red-500" />,
      gradient: "bg-gradient-to-br from-green-200 to-blue-200"
    },
    {
      name: "Food & Drink",
      icon: <MdOutlineLocalDrink size={45} className="text-red-500" />,
      gradient: "bg-gradient-to-br from-pink-200 to-gray-200"
    },
    {
      name: "Game Nights",
      icon: <MdOutlineSportsEsports size={45} className="text-red-500" />,
      gradient: "bg-gradient-to-br from-yellow-200 to-gray-200"
    },
    {
      name: "Party",
      icon: <MdOutlineCelebration size={45} className="text-red-500" />,
      gradient: "bg-gradient-to-br from-purple-200 to-gray-200"
    },
    {
      name: "Entertainment",
      icon: <MdOutlineTheaters size={45} className="text-red-500" />,
      gradient: "bg-gradient-to-br from-gray-200 to-yellow-200"
    },
    {
      name: "Europe Beach Partys",
      icon: <MdOutlineBeachAccess size={45} className="text-red-500" />,
      gradient: "bg-gradient-to-br from-blue-200 to-pink-200"
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-4 px-4 bg-white">
      <div className="max-w-full mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4"
        >
          {categories.map((cat, index) => (
            
            <Link href="/contact" key={index}>
  <motion.div
    variants={item}
    className={`
      w-full h-36 
      rounded-xl border border-black 
      shadow-sm p-6 
      flex flex-col items-center justify-center 
      text-center cursor-pointer 
      transition-all duration-300 
      hover:shadow-xl hover:scale-105 
      ${cat.gradient}
    `}
  >
    <div className="mb-3 flex items-center justify-center">
      {cat.icon}
    </div>

    <h3 className="font-bold text-lg text-black leading-tight">
      {cat.name}
    </h3>
  </motion.div>
</Link>


          ))}
        </motion.div>
      </div>
    </section>
  );
}
