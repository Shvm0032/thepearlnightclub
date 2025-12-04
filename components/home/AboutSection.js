"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function AboutSection() {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96"
          >
            <div
              className="absolute inset-0 bg-cover bg-center rounded-lg overflow-hidden"
              style={{
                backgroundImage: "url(/placeholder.svg?height=400&width=500&query=nightclub-interior)",
              }}
            />
            <div className="absolute inset-0 bg-linear-to-r from-orange-500/30 to-transparent" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-orange-500 font-bold text-sm uppercase tracking-wider mb-4">Know About Us</p>
            <h2 className="text-5xl font-bold text-white mb-6 neon-glow">Who We Are</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              At The Pearl, we're passionate about crafting experiences that transcend the ordinary. From our carefully
              curated selection of spirits to our team of expert mixologists, each element is meticulously designed to
              elevate your evenings. We believe in creating more than just drinks; we craft moments and memories that
              linger long after the last sip. Whether it's our themed events, live music sessions, or exclusive
              gatherings, we strive to offer a vibrant, welcoming space for those seeking an exceptional nightlife
              experience. Come join us and become part of our spirited community at The Pearl. Cheers to unforgettable
              nights!
            </p>
            <Link
              href="/about"
              className="inline-block px-8 py-3 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black font-bold rounded transition"
            >
              Know More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
