"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields!");
      return;
    }
    if (!validateEmail(formData.email)) {
      alert("Please enter a valid email!");
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
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setSuccess(false);
      }
    } catch (error) {
      console.error(error);
      setSuccess(false);
    }
    setLoading(false);
  };

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 px-6 lg:px-12">

        {/* LEFT – INFO BOXES */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-1">Contact Info</h2>
          <div className="w-20 h-[3px] bg-[#e86c60] mb-8"></div>

          <p className="text-gray-600 leading-relaxed mb-10">
            Have a question or want to get in touch with us?
            We’re here and ready to assist! At The Pearl, 
            we value your inquiries, feedback, and suggestions.
          </p>

          {/* ICON BOXES */}
          <div className="space-y-5">

            {/* Phone */}
            <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-xl shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center bg-[#e86c60] text-white rounded-xl text-xl">
                <FaPhoneAlt />
              </div>
              <p className="text-lg font-medium text-gray-700">61 410 036 729</p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-xl shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center bg-[#e86c60] text-white rounded-xl text-xl">
                <FaEnvelope />
              </div>
              <p className="text-lg font-medium text-gray-700">thepearl149@hotmail.com</p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-xl shadow-sm">
              <div className="w-12 h-12 flex items-center justify-center bg-[#e86c60] text-white rounded-xl text-xl">
                <FaMapMarkerAlt />
              </div>
              <p className="text-lg font-medium text-gray-700">149 Waymoth St Adelaide 5000</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 mt-8">
            <a className="bg-blue-600 text-white p-3 rounded-full shadow-md hover:scale-110 transition cursor-pointer">
              <FaFacebookF className="text-xl" />
            </a>
            <a className="bg-sky-400 text-white p-3 rounded-full shadow-md hover:scale-110 transition cursor-pointer">
              <FaTwitter className="text-xl" />
            </a>
            <a className="bg-blue-700 text-white p-3 rounded-full shadow-md hover:scale-110 transition cursor-pointer">
              <FaLinkedinIn className="text-xl" />
            </a>
            <a className="bg-black text-white p-3 rounded-full shadow-md hover:scale-110 transition cursor-pointer">
              <FaInstagram className="text-xl" />
            </a>
          </div>
        </motion.div>

        {/* RIGHT – FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-100 rounded-xl shadow-lg p-10"
        >
          <h2 className="text-3xl font-bold">Get In Touch</h2>
          <div className="w-24 h-[3px] bg-[#e86c60] my-3"></div>

          <p className="text-gray-600 mb-6">
            Fill out the form below and our team will get back to you shortly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block font-semibold mb-1">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded border border-gray-300 focus:ring-2 focus:ring-[#e86c60]"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded border border-gray-300 focus:ring-2 focus:[#e86c60]"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 rounded border border-gray-300 focus:ring-2 focus:ring-red-400"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Message *</label>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded border border-gray-300 focus:ring-2 focus:ring-red-400"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#e86c60] hover:bg-[#d05a50] text-white text-lg font-semibold py-3 rounded-md transition"
            >
              {loading ? "Sending..." : "Submit"}
            </button>

            {success === true && (
              <p className="text-green-600 font-medium">Message sent successfully!</p>
            )}
            {success === false && (
              <p className="text-[#e86c60] font-medium">Something went wrong. Try again!</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
