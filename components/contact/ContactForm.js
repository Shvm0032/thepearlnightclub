"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
  FaClock,
  FaCalendarAlt,
  FaUsers,
} from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    occasion: "",
    guests: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.date) {
      alert("Please fill in your name and date.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        setFormData({ name: "", date: "", occasion: "", guests: "" });
      } else {
        setSuccess(false);
      }
    } catch {
      setSuccess(false);
    }
    setLoading(false);
  };

  const contactInfo = [
    { icon: <FaWhatsapp />, label: "WhatsApp", value: "+1 (305) 555-PEARL" },
    { icon: <FaInstagram />, label: "Instagram", value: "@thepearlbarclub" },
    { icon: <FaFacebookF />, label: "Facebook", value: "/thepearlbarclub" },
    { icon: <FaEnvelope />, label: "Email", value: "reservations@thepearlbarclub.com" },
    { icon: <FaGlobe />, label: "Website", value: "www.thepearlbarclub.com" },
    { icon: <FaMapMarkerAlt />, label: "Location", value: "777 Ocean Drive, Miami, FL 33139" },
    { icon: <FaClock />, label: "Opening Hours", value: "Thu–Sat • 8PM – 3AM" },
  ];

  return (
    <section className="py-16 px-4 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT – BOOK YOUR RESERVATION */}
        <div className="bg-[#0d0d0d] border border-[#d4af37]/30 rounded-lg p-8 gold-frame">
          <h2 className="text-center text-[#d4af37] text-xl sm:text-2xl font-bold tracking-[0.15em] uppercase mb-8 font-serif">
            Book Your Reservation
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-white/90 text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="pearl-input w-full px-4 py-3 rounded-md"
              />
            </div>

            {/* Date */}
            <div>
              <label className="block text-white/90 text-sm font-medium mb-2">Date</label>
              <div className="relative">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="pearl-input w-full px-4 py-3 rounded-md pr-12 [color-scheme:dark]"
                />
                <FaCalendarAlt className="absolute right-4 top-1/2 -translate-y-1/2 text-[#d4af37] pointer-events-none" />
              </div>
            </div>

            {/* Occasion */}
            <div>
              <label className="block text-white/90 text-sm font-medium mb-2">Occasion</label>
              <select
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
                className="pearl-input w-full px-4 py-3 rounded-md appearance-none cursor-pointer"
              >
                <option value="" className="bg-[#0d0d0d]">Birthday / Corporate / Table / VIP / Other</option>
                <option value="Birthday" className="bg-[#0d0d0d]">Birthday</option>
                <option value="Corporate" className="bg-[#0d0d0d]">Corporate</option>
                <option value="Table" className="bg-[#0d0d0d]">Table</option>
                <option value="VIP" className="bg-[#0d0d0d]">VIP</option>
                <option value="Other" className="bg-[#0d0d0d]">Other</option>
              </select>
            </div>

            {/* Guests */}
            <div>
              <label className="block text-white/90 text-sm font-medium mb-2">Number of Guests</label>
              <div className="relative">
                <input
                  type="number"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  min="1"
                  placeholder="e.g. 4 guests"
                  className="pearl-input w-full px-4 py-3 rounded-md pr-12"
                />
                <FaUsers className="absolute right-4 top-1/2 -translate-y-1/2 text-[#d4af37] pointer-events-none" />
              </div>
            </div>

            {/* Button */}
            <div className="text-center pt-2">
              <button
                type="submit"
                disabled={loading}
                className="btn-gold px-12 py-4 rounded-md text-base font-bold uppercase tracking-wider"
              >
                {loading ? "Booking..." : "Book Now"}
              </button>
            </div>

            {success === true && (
              <p className="text-green-400 text-center font-medium">Reservation request sent successfully!</p>
            )}
            {success === false && (
              <p className="text-[#d4af37] text-center font-medium">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>

        {/* RIGHT – CONTACT INFO */}
        <div className="bg-[#0d0d0d] border border-[#d4af37]/30 rounded-lg p-8 gold-frame">
          <h2 className="text-center text-[#d4af37] text-xl sm:text-2xl font-bold tracking-[0.15em] uppercase mb-8 font-serif">
            Contact Info
          </h2>

          <ul className="space-y-5">
            {contactInfo.map((item, idx) => (
              <li key={idx} className="flex items-center gap-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] shrink-0">
                  {item.icon}
                </span>
                <div className="leading-tight">
                  <span className="text-white/50 text-xs uppercase tracking-wider">{item.label}:</span>
                  <p className="text-white/90 text-sm sm:text-base">{item.value}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* QR Code Box */}
          <div className="mt-8 border border-[#d4af37]/40 rounded-lg p-6 text-center bg-[#111111]/50">
            <div className="w-28 h-28 mx-auto bg-white p-2 rounded mb-4">
              <Image
                src="/qrcode.webp"
                alt="Scan to book"
                width={100}
                height={100}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-[#d4af37] font-bold text-base tracking-wide">Scan To Book</p>
            <p className="text-white/60 text-sm mt-1">Scan for instant booking</p>
          </div>
        </div>
      </div>
    </section>
  );
}
