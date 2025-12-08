"use client";

import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Instagram } from "lucide-react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Facebook } from 'lucide-react';

export default function Footers() {
  return (
    <footer className="bg-[#2C2B47] text-gray-300 overflow-x-hidden">
      {/* ---------- Top Footer ---------- */}
      <div className="max-w-screen-7xl mx-auto px-4 sm:px-6 lg:px-24 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* About Us */}
        <div className="pr-6">
          <h3 className="text-white text-xl md:text-2xl font-semibold mb-4">About Us</h3>
          <p className="text-gray-300 leading-relaxed">
            Our venue is meticulously designed to create an environment that
            balances sophistication and excitement, setting the stage for
            memorable moments…
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-3">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
            <li><a href="/gallery" className="hover:text-white transition">Gallery</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Events */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Upcoming Events</h3>
          <ul className="space-y-3">
            <li><a href="/events/bands" className="hover:text-white transition">Bands</a></li>
            <li><a href="/events/cocktail-carnival" className="hover:text-white transition">Cocktail Carnival</a></li>
            <li><a href="/events/beach-parties" className="hover:text-white transition">Beach Parties</a></li>
            <li><a href="/events/live-music" className="hover:text-white transition">Live Music</a></li>
            <li><a href="/events/dj-night" className="hover:text-white transition">DJ Nights</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Contact Us</h3>

          <ul className="space-y-3">
            <li className="flex gap-3">
              <FaMapMarkerAlt size={18} /> 149 Waymoth st Adelaide 5000
            </li>
            <li className="flex gap-3">
              <MdEmail size={18} /> thepearl149@hotmail.com
            </li>
            <li className="flex gap-3">
              <FaPhoneAlt size={18} /> +61 410 036 729
            </li>
          </ul>

        {/* Social Icons */}
<div className="flex items-center gap-1 mt-5">

  <a className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#e86c60]  bg-transparent hover:opacity-90 transition cursor-pointer">
      <Facebook size={22} className="text-[#cccccc] hover:text-white" />
  </a>

  <a className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#e86c60]  bg-transparent hover:opacity-90 transition cursor-pointer">
    <Instagram size={22} className="text-[#cccccc] hover:text-white" />
  </a>

  <a className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#e86c60]  bg-transparent hover:opacity-90 transition cursor-pointer">
    <FaLinkedin size={22} className="text-[#cccccc] hover:text-white" />
  </a>

</div>

        </div>
      </div>

      {/* ---------- Bottom Footer ---------- */}
      <div className="border-t border-[#4E4D6B] bg-[#22213f] py-4">
        <div className="max-w-screen-7xl mx-auto px-4 sm:px-6 lg:px-24 flex flex-col sm:flex-row justify-between items-center text-gray-200 text-md">
          <span>© Copyright 2024 <span className="text-[#ffffff] font-bold">The Pearl</span>  | All Rights Reserved.</span>

          <div className="flex items-center gap-2 mt-2 sm:mt-0">
            <a href="#" className="hover:text-[#E86C60] transition">Terms of use</a>
            <span>|</span>
            <a href="#" className="hover:text-[#E86C60] transition">Privacy policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
