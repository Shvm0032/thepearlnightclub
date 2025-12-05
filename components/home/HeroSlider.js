"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiSearch, FiClock } from "react-icons/fi";
import { MdCategory } from "react-icons/md";

export default function HeroSection() {
  const [currentSlide] = useState(0);

  const slides = [
    {
      title: "Join Us For An Exclusive Bar Event",
      subtitle: "Discover Our Upcoming Bar Event",
      image: "/home/bg.jpg",
    },
  ];

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Background Image + Overlay */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('${slides[currentSlide].image}')`,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content - Perfectly Centered */}
      <div className="relative h-full flex flex-col md:items-center items-start justify-center text-center px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-4xl sm:text-6xl md:text-4xl lg:text-5xl font-black text-white leading-tight"
          >
            {slides[currentSlide].title}
          </motion.h1>

      
        </div>

            {/* Subtitle */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="text-xl sm:text-2xl md:text-xl text-white font-light mt-2 tracking-wide"
          >
            {slides[currentSlide].subtitle}
          </motion.p>

        {/* Search Form - Exactly like your screenshot */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute md:bottom-36 bottom-8 left-1/2 -translate-x-1/2 w-full max-w-6xl px-4"
        >
          <div className="bg-white rounded-sm shadow-2xl overflow-hidden border border-gray-200">
            <div className="flex flex-col md:flex-row items-stretch">
              {/* Name Input */}
              <div className="flex items-center gap-4 px-6 py-5 border-b md:border-b-0 md:border-r border-gray-200 flex-1">
                <FiSearch className="text-[#E86C60] text-2xl" />
                <input
                  type="text"
                  placeholder="Enter name ..."
                  className="w-full outline-none text-gray-700 text-lg placeholder-gray-400"
                />
              </div>

              {/* Category Dropdown */}
              <div className="flex items-center gap-4 px-6 py-5 border-b md:border-b-0 md:border-r border-gray-200 flex-1">
                <MdCategory className="text-[#E86C60] text-2xl" />
                <select className="w-full outline-none text-gray-700 text-lg bg-transparent">
                  <option>Select Category</option>
                  <option>DJ Night</option>
                  <option>Live Band</option>
                  <option>Cocktail Party</option>
                  <option>Beach Party</option>
                </select>
              </div>

              {/* Time Dropdown */}
              <div className="flex items-center gap-4 px-6 py-5 flex-1">
                <FiClock className="text-[#E86C60] text-2xl" />
                <select className="w-full outline-none text-gray-700 text-lg bg-transparent">
                  <option>All Time</option>
                  <option>Today</option>
                  <option>This Weekend</option>
                  <option>Next Week</option>
                </select>
              </div>

              {/* Search Button */}
              <button className="bg-[#E86C60] hover:bg-[#d45a50] text-white font-bold text-lg px-12 py-5 transition-all duration-300">
                Search
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}