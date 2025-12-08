"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaLinkedin, FaFacebook } from "react-icons/fa";
import { Instagram, ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [eventMenu, setEventMenu] = useState(false);
  const [mobileEvent, setMobileEvent] = useState(false);

  const active = "text-[#E86C60]";
  const inactive = "text-white hover:text-[#E86C60]";

  const isEventActive = pathname.startsWith("/events");

  return (
    <nav className="w-full relative z-50 bg-[#020101]">

      {/* TOP BAR */}
      <div className="w-full bg-gray-100 text-gray-800 text-sm border-b border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between py-2 sm:h-10">

            <div className="flex items-center gap-6">
              <a href="tel:61410036729" className="flex items-center gap-1.5 hover:text-[#E86C60]">
                <FaPhoneAlt size={14} className="text-[#E86C60]" />
                <span className="text-xs sm:text-sm">61410036729</span>
              </a>

              <a href="mailto:thepearl149@hotmail.com" className="flex items-center gap-1.5 hover:text-[#E86C60]">
                <MdEmail size={14} className="text-[#E86C60]" />
                <span className="text-xs sm:text-sm">thepearl149@hotmail.com</span>
              </a>
            </div>

            <div className="flex gap-3 mt-2 sm:mt-0">
              <a className="w-8 h-8 rounded-full bg-[#4E69A2] flex items-center justify-center text-white">
                <FaFacebook size={14} />
              </a>
              <a className="w-8 h-8 rounded-full bg-linear-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white">
                <Instagram size={14} />
              </a>
              <a className="w-8 h-8 rounded-full bg-[#0A66C2] flex items-center justify-center text-white">
                <FaLinkedin size={14} />
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <div className="py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">

            {/* LOGO */}
            <Link href="/">
              <Image
                src="/logo-pearl.png"
                alt="The Pearl Logo"
                width={140}
                height={40}
                className="object-contain"
              />
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-12 mx-auto">

              <Link href="/" className={`font-medium text-lg ${pathname === "/" ? active : inactive}`}>
                Home
              </Link>

              <Link href="/about" className={`font-medium text-lg ${pathname === "/about" ? active : inactive}`}>
                About Us
              </Link>

              <Link href="/gallery" className={`font-medium text-lg ${pathname === "/gallery" ? active : inactive}`}>
                Gallery
              </Link>

              {/* DROPDOWN */}
              <div
                className="relative"
                onMouseEnter={() => setEventMenu(true)}
                onMouseLeave={() => setEventMenu(false)}
              >
                <button className={`flex items-center gap-1 font-medium text-lg ${isEventActive ? active : inactive}`}>
                  Upcoming Events
                  <ChevronDown size={16} className={`${eventMenu ? "rotate-180" : ""} transition`} />
                </button>

                <AnimatePresence>
                  {eventMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="absolute left-1/2 -translate-x-1/2 top-12 z-50"
                    >
                      <div className="bg-white rounded-md shadow-xl py-2 min-w-60 border">
                        {[
                          ["Bands", "/events/bands"],
                          ["Cocktail Carnival", "/events/cocktail-carnival"],
                          ["Beach Parties", "/events/beach-parties"],
                          ["Live Music", "/events/live-music"],
                          ["DJ Night", "/events/dj-night"],
                        ].map(([label, path]) => (
                          <Link
                            key={path}
                            href={path}
                            className={`block px-4 py-2 ${
                              pathname === path
                                ? "text-[#E86C60] font-semibold"
                                : "text-gray-800 hover:bg-gray-100"
                            }`}
                          >
                            {label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/contact" className={`font-medium text-lg ${pathname === "/contact" ? active : inactive}`}>
                Contact
              </Link>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="hidden lg:block px-5 py-2 bg-[#E86C60] text-white font-semibold rounded-md hover:bg-[#d05a50]"
            >
              Book Now
            </Link>

            {/* MOBILE TOGGLE */}
            <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-[#0f0f0f] border-t border-gray-800"
            >
              <div className="px-4 py-6 space-y-2">
                {["/", "/about", "/gallery", "/contact"].map((path) => (
                  <Link
                    key={path}
                    href={path}
                    className={`block py-2 ${
                      pathname === path ? active : "text-white hover:text-[#E86C60]"
                    }`}
                  >
                    {path === "/" ? "Home" : path.replace("/", "").toUpperCase()}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
