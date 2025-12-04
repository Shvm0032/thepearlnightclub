"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaLinkedin, FaFacebook } from "react-icons/fa";
import { Instagram, ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [eventMenu, setEventMenu] = useState(false);
  const [mobileEvent, setMobileEvent] = useState(false);

  return (
    <nav className="w-full shadow-lg overflow-x-hidden relative z-9999">
      {/* TOP BAR */}
      <div className="w-full bg-gray-100 text-gray-800 text-sm border-b border-orange-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between py-3 sm:py-0 sm:h-10">
            
            {/* Left: Phone + Email */}
            <div className="flex items-center gap-4 sm:gap-6 mb-2 sm:mb-0">
              <a href="tel:61410036729" className="flex items-center gap-1.5 hover:text-[#E86C60]">
                <FaPhoneAlt size={14} className="text-[#E86C60]" />
                <span className="text-xs sm:text-sm">61410036729</span>
              </a>

              <a href="mailto:thepearl149@hotmail.com" className="flex items-center gap-1.5 hover:text-[#E86C60]">
                <MdEmail size={14} className="text-[#E86C60]" />
                <span className="text-xs sm:text-sm">thepearl149@hotmail.com</span>
              </a>
            </div>

            {/* Right: Social Icons */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#4E69A2] flex items-center justify-center text-white">
                <FaFacebook size={14} />
              </a>
              <a href="#" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white bg-linear-to-br from-purple-600 to-pink-600">
                <Instagram size={14} />
              </a>
              <a href="#" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0A66C2] flex items-center justify-center text-white">
                <FaLinkedin size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <div className="bg-[#020101] py-1 sm:py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* LOGO */}
            <Link href="/" className="shrink-0">
              <div className="w-36 sm:w-32 lg:w-32 py-2">
                <Image
                  src="/logo-pearl.png"
                  alt="The Pearl Logo"
                  width={300}
                  height={80}
                  className="object-contain w-full h-auto"
                />
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 mx-auto">
              <Link href="/" className="px-4 py-2 text-white hover:text-[#E86C60] hover:bg-white/5 rounded-md">
                Home
              </Link>

              <Link href="/about" className="px-4 py-2 text-white hover:text-[#E86C60] hover:bg-white/5 rounded-md">
                About Us
              </Link>

              <Link href="/gallery" className="px-4 py-2 text-white hover:text-[#E86C60] hover:bg-white/5 rounded-md">
                Gallery
              </Link>

              {/* SIMPLE DESKTOP DROPDOWN — NO SCROLL, NO ANIMATION */}
              <div
                className="relative"
                onMouseEnter={() => setEventMenu(true)}
                onMouseLeave={() => setEventMenu(false)}
              >
                <button className="px-4 py-2 text-white hover:text-[#E86C60] hover:bg-white/5 rounded-md flex items-center gap-1">
                  Upcoming Events
                  <ChevronDown size={16} className={`${eventMenu ? "rotate-180" : ""}`} />
                </button>

                {eventMenu && (
                  <div className="absolute top-full left-0 pt-2 z-99999">
                    <div className="bg-white border shadow-xl rounded-lg py-2 min-w-[220px]">
                      <Link href="/events/bands" className="block px-5 py-2 hover:bg-gray-100">
                        Bands
                      </Link>
                      <Link href="/events/cocktail-carnival" className="block px-5 py-2 hover:bg-gray-100">
                        Cocktail Carnival
                      </Link>
                      <Link href="/events/beach-parties" className="block px-5 py-2 hover:bg-gray-100">
                        Beach Parties
                      </Link>
                      <Link href="/events/live-music" className="block px-5 py-2 hover:bg-gray-100">
                        Live Music
                      </Link>
                      <Link href="/events/dj-night" className="block px-5 py-2 hover:bg-gray-100">
                        DJ Night
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/contact" className="px-4 py-2 text-white hover:text-[#E86C60] hover:bg-white/5 rounded-md">
                Contact
              </Link>
            </div>

            {/* DESKTOP CTA */}
            <div className="hidden lg:block">
              <Link href="/book-now" className="px-6 py-3 bg-linear-to-r from-[#E86C60] to-orange-500 text-white font-semibold rounded-full hover:scale-105 transition">
                Book Now
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU — SAME AS BEFORE */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-[#0f0f0f] border-t border-gray-800"
            >
              <div className="px-4 pt-6 pb-8 space-y-1">

                <Link href="/" className="block py-3 px-4 text-white hover:text-[#E86C60] hover:bg-white/5 rounded-lg">
                  Home
                </Link>

                <Link href="/about" className="block py-3 px-4 text-white hover:text-[#E86C60] hover:bg-white/5 rounded-lg">
                  About Us
                </Link>

                <Link href="/gallery" className="block py-3 px-4 text-white hover:text-[#E86C60] hover:bg-white/5 rounded-lg">
                  Gallery
                </Link>

                {/* MOBILE DROPDOWN */}
                <div>
                  <button
                    onClick={() => setMobileEvent(!mobileEvent)}
                    className="w-full flex items-center justify-between py-3 px-4 text-white hover:text-[#E86C60] hover:bg-white/5 rounded-lg"
                  >
                    Upcoming Events
                    <ChevronDown size={18} className={`${mobileEvent ? "rotate-180" : ""}`} />
                  </button>

                  {mobileEvent && (
                    <div className="ml-4 pl-4 border-l border-gray-700 space-y-1">
                      <Link href="/events/bands" className="block py-2.5 px-4 text-gray-300 hover:text-white">
                        Bands
                      </Link>
                      <Link href="/events/cocktail-carnival" className="block py-2.5 px-4 text-gray-300 hover:text-white">
                        Cocktail Carnival
                      </Link>
                      <Link href="/events/beach-parties" className="block py-2.5 px-4 text-gray-300 hover:text-white">
                        Beach Parties
                      </Link>
                      <Link href="/events/live-music" className="block py-2.5 px-4 text-gray-300 hover:text-white">
                        Live Music
                      </Link>
                      <Link href="/events/dj-night" className="block py-2.5 px-4 text-gray-300 hover:text-white">
                        DJ Night
                      </Link>
                    </div>
                  )}
                </div>

                <Link href="/contact" className="block py-3 px-4 text-white hover:text-[#E86C60] hover:bg-white/5 rounded-lg">
                  Contact
                </Link>

                <div className="pt-4">
                  <Link href="/book-now" className="block py-3.5 bg-linear-to-r from-[#E86C60] to-orange-500 rounded-lg text-center text-white font-semibold">
                    Book Now
                  </Link>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
