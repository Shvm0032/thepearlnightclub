"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-20 px-4 bg-[#1b1919]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT — IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="/home/about.jpg"   
              alt="About The Pearl"
              className="rounded-lg w-full h-[420px] object-cover"
            />
          </motion.div>

          {/* RIGHT — CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Orange Line */}
            <div className="flex items-center gap-4 mb-4">
              <span className="w-16 h-[3px] bg-[#e86c60]"></span>
              <p className="text-[#e86c60] font-semibold tracking-wider uppercase text-md">
                Know About Us
              </p>
            </div>

            <h2 className="text-5xl font-extrabold text-white mb-6 leading-tight">
              Who We Are
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              At The Pearl, we're passionate about crafting experiences that transcend
              the ordinary. From our carefully curated selection of spirits to our team
              of expert mixologists, each element is meticulously designed to elevate
              your evenings.
              <br /><br />
              Whether it's our themed events, live music sessions, or exclusive
              gatherings, we strive to offer a vibrant, welcoming space for those
              seeking an exceptional nightlife experience.
              <br /><br />
              Cheers to unforgettable nights!
            </p>

            {/* Button */}
            <Link
              href="/about"
              className="inline-block px-8 py-3 border-2 border-[#e86c60] 
              text-[#e86c60] hover:bg-[#e86c60] hover:text-black 
              font-bold rounded-md transition duration-300"
            >
              Know More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
