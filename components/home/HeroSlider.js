"use client";

import { useState } from "react";
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
    <section className="relative w-full h-[85vh] overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('${slides[currentSlide].image}')` }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6">

        {/* Heading */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-tight"
        >
          {slides[currentSlide].title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="text-base sm:text-xl lg:text-2xl text-white font-light mt-3"
        >
          {slides[currentSlide].subtitle}
        </motion.p>

        {/* Search Bar */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="w-full max-w-6xl mt-10 px-2 sm:px-4"
        >
          <div className="bg-white rounded-md shadow-xl overflow-hidden border border-gray-200">

            <div className="flex flex-col md:flex-row items-stretch">

              {/* Input Field */}
              <div className="flex items-center gap-3 px-4 py-4 border-b md:border-b-0 md:border-r border-gray-200 flex-1 h-[68px]">
                <FiSearch className="text-[#E86C60] text-2xl" />
                <input
                  type="text"
                  placeholder="Enter name ..."
                  className="w-full outline-none text-gray-700 text-lg placeholder-gray-400"
                />
              </div>

              {/* Category Select */}
              <div className="flex items-center gap-3 px-4 py-4 border-b md:border-b-0 md:border-r border-gray-200 flex-1 relative h-[68px]">
                <MdCategory className="text-[#E86C60] text-2xl" />

                <select className="w-full bg-transparent text-gray-700 text-lg outline-none appearance-none">
                  <option>Select Category</option>
                  <option>Business</option>
                  <option>Concert</option>
                  <option>Entertainment</option>
                  <option>Europe Events</option>
                  <option>Food & Drink</option>
                  <option>DJ Nights</option>
                </select>

                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="20" height="20" fill="#E86C60" viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5" />
                  </svg>
                </div>
              </div>

              {/* Time Select */}
              <div className="flex items-center gap-3 px-4 py-4 flex-1 md:border-r border-gray-200 relative h-[68px]">
                <FiClock className="text-[#E86C60] text-2xl" />

                <select className="w-full bg-transparent text-gray-700 text-lg outline-none appearance-none">
                  <option>Today</option>
                  <option>Tomorrow</option>
                  <option>This Week</option>
                  <option>This Weekend</option>
                  <option>Next Week</option>
                  <option>Next Month</option>
                </select>

                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="20" height="20" fill="#E86C60" viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5" />
                  </svg>
                </div>
              </div>

              {/* Search Button */}
              <button className="bg-[#E86C60] hover:bg-[#d45a50] text-white font-bold text-lg px-10 py-4 md:py-0 h-[68px] transition-all duration-300 whitespace-nowrap">
                Search
              </button>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
