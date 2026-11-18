"use client";

import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Footers() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-300 overflow-x-hidden border-t border-[#d4af37]/15">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Image
                src="/logo-pearl.png"
                alt="The Pearl Logo"
                width={48}
                height={48}
                className="object-contain"
              />
              <div className="leading-none">
                <span className="text-[#d4af37] text-xl font-bold tracking-wide font-serif">
                  THE PEARL
                </span>
                <p className="text-white/50 text-[10px] tracking-[0.25em] uppercase mt-1">
                  Bar | Club | Event
                </p>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm">
              Experience luxury nightlife, curated cocktails, live DJ events, and
              unforgettable evenings at the city&apos;s most exclusive venue.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a href="#" aria-label="WhatsApp" className="w-9 h-9 flex items-center justify-center rounded-full border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all">
                <FaWhatsapp size={16} />
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 flex items-center justify-center rounded-full border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all">
                <FaInstagram size={16} />
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 flex items-center justify-center rounded-full border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all">
                <FaFacebookF size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#d4af37] text-base font-semibold mb-5 tracking-[0.15em] uppercase">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-[#d4af37] transition">Home</Link></li>
              <li><Link href="/bar" className="hover:text-[#d4af37] transition">Bar</Link></li>
              <li><Link href="/club" className="hover:text-[#d4af37] transition">Club</Link></li>
              <li><Link href="/events" className="hover:text-[#d4af37] transition">Events</Link></li>
              <li><Link href="/gallery" className="hover:text-[#d4af37] transition">Gallery</Link></li>
            </ul>
          </div>

          {/* Experiences */}
          <div>
            <h3 className="text-[#d4af37] text-base font-semibold mb-5 tracking-[0.15em] uppercase">
              Experiences
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/reserve" className="hover:text-[#d4af37] transition">VIP Services</Link></li>
              <li><Link href="/events" className="hover:text-[#d4af37] transition">Overseas Events</Link></li>
              <li><Link href="/reserve" className="hover:text-[#d4af37] transition">Bottle Service</Link></li>
              <li><Link href="/reserve" className="hover:text-[#d4af37] transition">Private Celebrations</Link></li>
              <li><Link href="/contact" className="hover:text-[#d4af37] transition">Reservations</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#d4af37] text-base font-semibold mb-5 tracking-[0.15em] uppercase">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <FaEnvelope size={16} className="text-[#d4af37] mt-1 shrink-0" />
                <span>thepearl149@hotmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <FaPhoneAlt size={16} className="text-[#d4af37] mt-1 shrink-0" />
                <span>+61 410 036 729</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Gold Divider */}
      <div className="gold-divider mx-auto max-w-7xl" />

      {/* Bottom Footer */}
      <div className="py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-gray-400 text-xs sm:text-sm">
          <span>© 2024 The Pearl. All rights reserved.</span>
          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            <Link href="/contact" className="hover:text-[#d4af37] transition">Privacy Policy</Link>
            <span className="text-[#d4af37]/40">•</span>
            <Link href="/contact" className="hover:text-[#d4af37] transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
