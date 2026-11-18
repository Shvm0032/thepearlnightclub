"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiSearch, FiCalendar } from "react-icons/fi";
import { MdCategory } from "react-icons/md";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center scale-105"
          style={{ backgroundImage: `url('/home/bg.jpg')` }}
        />
        {/* Gold confetti / dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.6)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[90vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-10 pb-28">
        {/* Center Logo */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mb-6"
        >
          <Image
            src="/logo-pearl.png"
            alt="The Pearl Gold Shell Logo"
            width={120}
            height={120}
            className="object-contain mx-auto"
            style={{ filter: "drop-shadow(0 0 25px rgba(212,175,55,0.5))" }}
            priority
          />
          <div className="mt-3">
            <p className="text-[#d4af37] text-sm tracking-[0.3em] uppercase font-light">The</p>
            <h2 className="gold-text font-serif text-5xl sm:text-6xl md:text-7xl font-bold leading-none tracking-wide">
              PEARL
            </h2>
            <p className="text-white/60 text-xs sm:text-sm tracking-[0.4em] uppercase mt-2">
              Bar | Club | Event
            </p>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mt-6 font-serif italic"
        >
          Join Us For An Exclusive Night
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="text-base sm:text-lg md:text-xl text-white/80 font-light mt-5 max-w-3xl leading-relaxed"
        >
          Experience luxury nightlife, curated cocktails, live DJ events, and unforgettable evenings
          at the city&apos;s most exclusive venue.
        </motion.p>

        {/* Search Bar */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="w-full max-w-5xl mt-10 px-2"
        >
          <div className="bg-[#111111]/90 backdrop-blur-md rounded-md shadow-2xl overflow-hidden border border-[#d4af37]/40 gold-frame">
            <div className="flex flex-col md:flex-row items-stretch">
              {/* Input Field */}
              <div className="flex items-center gap-3 px-5 py-4 border-b md:border-b-0 md:border-r border-[#d4af37]/20 flex-1">
                <FiSearch className="text-[#d4af37] text-xl shrink-0" />
                <input
                  type="text"
                  placeholder="Enter name"
                  className="w-full bg-transparent outline-none text-white placeholder-white/40 text-base"
                />
              </div>

              {/* Category Select */}
              <div className="flex items-center gap-3 px-5 py-4 border-b md:border-b-0 md:border-r border-[#d4af37]/20 flex-1 relative">
                <MdCategory className="text-[#d4af37] text-xl shrink-0" />
                <select className="w-full bg-transparent text-white text-base outline-none appearance-none cursor-pointer">
                  <option className="bg-[#111]">Select Category</option>
                  <option className="bg-[#111]">Bar</option>
                  <option className="bg-[#111]">Club</option>
                  <option className="bg-[#111]">Events</option>
                  <option className="bg-[#111]">VIP</option>
                  <option className="bg-[#111]">Overseas Events</option>
                </select>
                <FiCalendar className="text-[#d4af37] text-sm ml-auto" />
              </div>

              {/* Date */}
              <div className="flex items-center gap-3 px-5 py-4 md:border-r border-[#d4af37]/20 flex-1">
                <FiCalendar className="text-[#d4af37] text-xl shrink-0" />
                <input
                  type="date"
                  className="w-full bg-transparent outline-none text-white text-base [color-scheme:dark]"
                />
              </div>

              {/* Search Button */}
              <button className="btn-gold text-base font-bold px-8 py-4 whitespace-nowrap uppercase tracking-wider">
                Search Events
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Right - SCAN TO BOOK VVIP */}
      <div className="absolute bottom-6 right-4 sm:right-8 z-20">
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex items-center gap-3 bg-[#0a0a0a]/90 backdrop-blur-sm border border-[#d4af37]/50 rounded-lg px-4 py-3 shadow-xl"
        >
          <div className="w-14 h-14 bg-white p-1 rounded shrink-0">
            <Image
              src="/qrcode.webp"
              alt="Scan to book VVIP"
              width={48}
              height={48}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="leading-tight">
            <p className="text-[#d4af37] text-xs font-bold tracking-widest uppercase">Scan To Book</p>
            <p className="text-white text-lg font-bold tracking-wide">VVIP</p>
            <p className="text-white/50 text-[10px] mt-0.5">Instant reservation</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
