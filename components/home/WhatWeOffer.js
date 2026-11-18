"use client";

import { motion } from "framer-motion";

export default function WhatWeOffer() {
  return (
    <section className="py-20 bg-[#0a0a0a] px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white">What We Offer</h2>

        <div className="flex justify-center mt-4 mb-10">
          <span className="w-16 h-[3px] bg-[#d4af37] rounded-full"></span>
        </div>

        <p className="text-gray-400 mb-16 text-lg">
          Welcome to The Pearl, where every night pulses with energy and excitement!
        </p>

        {/* 3 Offer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              img: "/home/offer1.png",
              title: "Dynamic Events",
              desc: "At The Pearl, we pride ourselves on curating an exciting calendar of events.",
            },
            {
              img: "/home/offer2.png",
              title: "Live Entertainment",
              desc: "Get ready to groove to live performances by local bands and DJs spinning the latest tracks.",
            },
            {
              img: "/home/offer3.png",
              title: "Delectable Dining",
              desc: "Complementing our stellar drinks is a menu filled with delicious dishes.",
            },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111111] rounded-lg overflow-hidden shadow-lg border border-[#d4af37]/15 card-lift"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-72 object-cover hover:scale-105 transition duration-500"
              />
              <div className="py-6 px-6">
                <h3 className="text-xl font-bold text-[#d4af37] mb-2">{card.title}</h3>
                <p className="text-gray-400">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
