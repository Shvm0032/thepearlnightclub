"use client";

import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Instagram } from "lucide-react";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#343353] text-gray-300 overflow-x-hidden box-border">
      {/* ---------- Top Footer: 4 Columns ---------- */}
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 box-border">
        {/* Column 1: About Us */}
        <div className="wrap-break-words">
          <h3 className="text-white text-xl font-semibold mb-4">About Us</h3>
          <p className="text-gray-300 text-lg  wrap-break-words">
            Our venue is meticulously designed to create an environment that
            balances sophistication and excitement, setting the stage for
            memorable moments…..
          </p>
        </div>

        {/* Column 2: Useful Links */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">
            Useful Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="hover:text-white text-lg transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-white text-lg transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/gallery"
                className="hover:text-white text-lg transition-colors"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-white text-lg transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Upcoming Events */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">
            Upcoming Events
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/events/bands"
                className="hover:text-white text-lg transition-colors"
              >
                Bands
              </a>
            </li>
            <li>
              <a
                href="/events/cocktail-carnival"
                className="hover:text-white text-lg transition-colors"
              >
                Cocktail Carnival
              </a>
            </li>
            <li>
              <a
                href="/events/beach-parties"
                className="hover:text-white text-lg transition-colors"
              >
                Beach Parties
              </a>
            </li>
            <li>
              <a
                href="/events/live-music"
                className="hover:text-white text-lg transition-colors"
              >
                Live Music
              </a>
            </li>
            <li>
              <a
                href="/events/dj-night"
                className="hover:text-white text-lg transition-colors"
              >
                DJ Nights
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Us */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-300 text-lg">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt size={16} className="text-gray-300" />
              149 Waymoth st Adelaide 5000
            </li>
            <li className="flex items-center gap-2">
              <MdEmail size={16} className="text-gray-300" />{" "}
              thepearl149@hotmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt size={16} className="text-gray-300" /> +61 410 036
              729
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <a
              href="#"
              className="w-7 h-7 rounded-full bg-[#4E69A2] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
              aria-label="Facebook"
            >
              <FaFacebook size={14} />
            </a>
            <a
              href="#"
              className="w-7 h-7 rounded-full bg-black flex items-center justify-center text-white hover:opacity-90 transition-opacity"
              aria-label="Instagram"
            >
              <Instagram size={14} />
            </a>
            <a
              href="#"
              className="w-7 h-7 rounded-full bg-[#0A66C2] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* ---------- Bottom Footer: Copyright ---------- */}
      <div className="border-t border-gray-800 py-4">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-6 flex flex-col sm:flex-row justify-between items-center text-gray-200 text-sm box-border">
          <span>© Copyright 2024 The Pearl | All Rights Reserved.</span>
          <div className="flex items-center gap-2 mt-2 sm:mt-0 flex-wrap">
            <a href="#" className="hover:text-[#E86C60] transition-colors">
              Terms of use
            </a>
            <span>|</span>
            <a href="#" className="hover:text-[#E86C60] transition-colors">
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
