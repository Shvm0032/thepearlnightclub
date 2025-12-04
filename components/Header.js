"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaLinkedin, FaFacebook } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [eventMenu, setEventMenu] = useState(false);
  const [mobileEvent, setMobileEvent] = useState(false);

  return (
    <nav className="w-full shadow-lg overflow-x-hidden">
      {/* ---------- TOP BAR ---------- */}
      <div className="w-full bg-gray-100 text-gray-800 text-sm border-b border-orange-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between py-3 sm:py-0 sm:h-10">
            {/* Left: Email + Phone */}
            <div className="flex items-center gap-4 sm:gap-6 mb-2 sm:mb-0">
              <a
                href="tel:61410036729"
                className="flex items-center gap-1.5 hover:text-[#E86C60] transition-colors duration-200"
              >
                <FaPhoneAlt size={14} className="text-[#E86C60]" />
                <span className="text-xs sm:text-sm">61410036729</span>
              </a>
              <a
                href="mailto:thepearl149@hotmail.com"
                className="flex items-center gap-1.5 hover:text-[#E86C60] transition-colors duration-200"
              >
                <MdEmail size={14} className="text-[#E86C60]" />
                <span className="text-xs sm:text-sm">thepearl149@hotmail.com</span>
              </a>
            </div>

            {/* Right: Social Icons */}
            <div className="flex items-center gap-3">
              <a 
                href="#" 
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#4E69A2] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                aria-label="Facebook"
              >
                <FaFacebook size={14} className="sm:w-4 sm:h-4" />
              </a>
              <a 
                href="#" 
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-linear-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram size={14} className="sm:w-4 sm:h-4" />
              </a>
              <a 
                href="#" 
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0A66C2] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={14} className="sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- MAIN NAVBAR ---------- */}
      <div className="bg-[#020101] py-1 sm:py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo with increased width */}
            <Link href="/" className="shrink-0">
              <Image
                src="/logo-pearl.png"
                width={120}  
                height={60}  
                alt="The Pearl Logo"
                className="object-contain hover:opacity-90 transition-opacity"
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 mx-auto">
              <Link 
                href="/" 
                className="px-4 py-2 text-white hover:text-[#E86C60] font-medium transition-colors duration-200 rounded-md hover:bg-white/5"
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="px-4 py-2 text-white hover:text-[#E86C60] font-medium transition-colors duration-200 rounded-md hover:bg-white/5"
              >
                About Us
              </Link>
              <Link 
                href="/gallery" 
                className="px-4 py-2 text-white hover:text-[#E86C60] font-medium transition-colors duration-200 rounded-md hover:bg-white/5"
              >
                Gallery
              </Link>

              {/* Desktop Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setEventMenu(true)}
                onMouseLeave={() => setEventMenu(false)}
              >
                <button className="px-4 py-2 text-white hover:text-[#E86C60] font-medium transition-colors duration-200 rounded-md hover:bg-white/5 flex items-center gap-1">
                  Upcoming Events <ChevronDown size={16} className={`transition-transform ${eventMenu ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {eventMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-3 z-50"
                    >
                      <div className="bg-white border border-gray-200 shadow-xl rounded-lg py-2 min-w-[220px]">
                        <Link
                          href="/events/bands"
                          className="block px-5 py-3 text-gray-800 hover:text-[#E86C60] font-medium hover:bg-orange-50 transition-colors duration-200"
                        >
                          Bands
                        </Link>
                        <Link
                          href="/events/cocktail-carnival"
                          className="block px-5 py-3 text-gray-800 hover:text-[#E86C60] font-medium hover:bg-orange-50 transition-colors duration-200"
                        >
                          Cocktail Carnival
                        </Link>
                        <Link
                          href="/events/beach-parties"
                          className="block px-5 py-3 text-gray-800 hover:text-[#E86C60] font-medium hover:bg-orange-50 transition-colors duration-200"
                        >
                          Beach Parties
                        </Link>
                        <Link
                          href="/events/live-music"
                          className="block px-5 py-3 text-gray-800 hover:text-[#E86C60] font-medium hover:bg-orange-50 transition-colors duration-200"
                        >
                          Live Music
                        </Link>
                        <Link
                          href="/events/dj-night"
                          className="block px-5 py-3 text-gray-800 hover:text-[#E86C60] font-medium hover:bg-orange-50 transition-colors duration-200"
                        >
                          DJ Night
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link 
                href="/contact" 
                className="px-4 py-2 text-white hover:text-[#E86C60] font-medium transition-colors duration-200 rounded-md hover:bg-white/5"
              >
                Contact
              </Link>
            </div>

            {/* CTA Button for Desktop */}
            <div className="hidden lg:block shrink-0">
              <Link
                href="/book-now"
                className="ml-4 px-6 py-3 bg-linear-to-r from-[#E86C60] to-orange-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white hover:text-[#E86C60] transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* ---------- Mobile Menu ---------- */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="px-4 sm:px-6 pt-6 pb-8 space-y-1 bg-[#0f0f0f] border-t border-gray-800">
                <Link
                  href="/"
                  className="block py-3 px-4 text-white hover:text-[#E86C60] font-medium hover:bg-white/5 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block py-3 px-4 text-white hover:text-[#E86C60] font-medium hover:bg-white/5 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/gallery"
                  className="block py-3 px-4 text-white hover:text-[#E86C60] font-medium hover:bg-white/5 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Gallery
                </Link>

                {/* Mobile Dropdown */}
                <div className="space-y-1">
                  <button
                    onClick={() => setMobileEvent(!mobileEvent)}
                    className="w-full flex items-center justify-between py-3 px-4 text-white hover:text-[#E86C60] font-medium hover:bg-white/5 rounded-lg transition-colors"
                  >
                    <span>Upcoming Events</span>
                    <ChevronDown 
                      size={18} 
                      className={`transition-transform duration-200 ${mobileEvent ? 'rotate-180' : ''}`} 
                    />
                  </button>

                  {mobileEvent && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="ml-4 pl-4 border-l border-gray-700 space-y-1"
                    >
                      <Link
                        href="/events/bands"
                        className="block py-2.5 px-4 text-gray-300 hover:text-[#E86C60] font-medium hover:bg-white/5 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Bands
                      </Link>
                      <Link
                        href="/events/cocktail-carnival"
                        className="block py-2.5 px-4 text-gray-300 hover:text-[#E86C60] font-medium hover:bg-white/5 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Cocktail Carnival
                      </Link>
                      <Link
                        href="/events/beach-parties"
                        className="block py-2.5 px-4 text-gray-300 hover:text-[#E86C60] font-medium hover:bg-white/5 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Beach Parties
                      </Link>
                      <Link
                        href="/events/live-music"
                        className="block py-2.5 px-4 text-gray-300 hover:text-[#E86C60] font-medium hover:bg-white/5 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Live Music
                      </Link>
                      <Link
                        href="/events/dj-night"
                        className="block py-2.5 px-4 text-gray-300 hover:text-[#E86C60] font-medium hover:bg-white/5 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        DJ Night
                      </Link>
                    </motion.div>
                  )}
                </div>

                <Link
                  href="/contact"
                  className="block py-3 px-4 text-white hover:text-[#E86C60] font-medium hover:bg-white/5 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>

                {/* Mobile CTA Button */}
                <div className="pt-4">
                  <Link
                    href="/book-now"
                    className="block w-full text-center py-3.5 bg-linear-to-r from-[#E86C60] to-orange-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 active:scale-95"
                    onClick={() => setIsOpen(false)}
                  >
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