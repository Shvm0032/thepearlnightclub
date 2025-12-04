"use client"

import { motion } from "framer-motion"

export default function OurStory() {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-5xl font-bold text-white mb-8 neon-glow">Our Story</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            The Pearl was founded with a simple vision: to create a space where exceptional experiences come to life.
            For years, we've been crafting unforgettable memories through carefully curated events, premium spirits, and
            genuine hospitality.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Our name, The Pearl, reflects the rarity and value we bring to every moment. Like a pearl formed from the
            friction of sand and shell, our venue has been refined through countless nights, conversations, and
            celebrations. Each event, each cocktail, and each guest interaction has shaped us into what we are today.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            We're not just a nightclub; we're a community hub where professionals network, friends celebrate, and
            strangers become part of something special. Every corner of The Pearl tells a story, and we invite you to
            become part of ours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            { number: "1000+", label: "Happy Guests" },
            { number: "500+", label: "Events Hosted" },
            { number: "50+", label: "Premium Cocktails" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-6 border border-orange-500/30 rounded-lg hover:border-orange-500 transition"
            >
              <p className="text-4xl font-bold text-orange-500 neon-glow mb-2">{stat.number}</p>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
