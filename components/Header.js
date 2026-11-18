"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [eventMenu, setEventMenu] = useState(false);
  const [mobileEvent, setMobileEvent] = useState(false);

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "BAR", href: "/bar" },
    { label: "CLUB", href: "/club" },
    { label: "EVENTS", href: "/events" },
    { label: "GALLERY", href: "/gallery" },
    { label: "CONTACT", href: "/contact" },
    { label: "RESERVE", href: "/reserve" },
  ];

  const isEventActive = pathname.startsWith("/events");

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="w-full sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#d4af37]/15">
      <div className="py-3 sm:py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between gap-4">

            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <div className="relative">
                <Image
                  src="/logo-pearl.png"
                  alt="The Pearl Logo"
                  width={56}
                  height={56}
                  className="object-contain"
                  style={{ filter: "drop-shadow(0 0 8px rgba(212,175,55,0.4))" }}
                />
              </div>
              <div className="hidden sm:flex flex-col leading-none">
                <span className="text-[#d4af37] text-xl sm:text-2xl font-bold tracking-wide font-serif">
                  THE PEARL
                </span>
                <span className="text-white/70 text-[10px] sm:text-xs tracking-[0.25em] uppercase">
                  Bar | Club | Event
                </span>
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-7 mx-auto">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative font-medium text-sm tracking-wide uppercase transition-colors duration-300 pb-1 ${
                    isActive(item.href)
                      ? "text-[#d4af37]"
                      : "text-white/80 hover:text-[#d4af37]"
                  }`}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-[#d4af37] rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* LOGIN BUTTON */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <Link
                href="/reserve"
                className="px-5 py-2 border border-[#d4af37]/60 text-[#d4af37] text-sm font-semibold tracking-wide uppercase rounded hover:bg-[#d4af37] hover:text-black transition-all duration-300"
              >
                Reserve
              </Link>
              <Link
                href="/login"
                className="px-5 py-2 text-white/80 text-sm font-semibold tracking-wide uppercase border border-white/20 rounded hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-300"
              >
                Login
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <div className="lg:hidden">
              <button
                className="text-[#d4af37] p-1"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-[#0a0a0a] border-t border-[#d4af37]/15"
          >
            <div className="px-4 py-6 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 px-3 rounded text-base font-medium tracking-wide uppercase transition-colors ${
                    isActive(item.href)
                      ? "text-[#d4af37] bg-[#d4af37]/10"
                      : "text-white/80 hover:text-[#d4af37] hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <Link
                  href="/reserve"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center px-5 py-3 border border-[#d4af37]/60 text-[#d4af37] text-sm font-semibold tracking-wide uppercase rounded"
                >
                  Reserve
                </Link>
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center px-5 py-3 text-white/80 text-sm font-semibold tracking-wide uppercase border border-white/20 rounded"
                >
                  Login
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
