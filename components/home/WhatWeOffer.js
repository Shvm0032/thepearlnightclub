"use client";

import { motion } from "framer-motion";

export default function WhatWeOffer() {
  return (
    <section className="py-20 bg-black px-4">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          What We Offer
        </h2>

        {/* Underline */}
        <div className="flex justify-center mt-4 mb-10">
          <span className="w-16 h-[3px] bg-blue-500 rounded-full"></span>
        </div>

        <p className="text-gray-300 mb-16 text-lg">
          Welcome to The Pearl, where every night pulses with energy and excitement!
        </p>

        {/* 3 Offer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src="/home/offer1.png" // replace with your image
              alt="Dynamic Events"
              className="w-full h-72 object-cover hover:scale-105 transition duration-500"
            />
            <div className="py-6 px-6">
              <h3 className="text-xl font-bold text-black mb-2">
                Dynamic Events
              </h3>
              <p className="text-gray-600">
                At The Pearl, we pride ourselves on curating an exciting calendar of events.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src="/home/offer2.png" // replace with your image
              alt="Live Entertainment"
              className="w-full h-72 object-cover hover:scale-105 transition duration-500"
            />
            <div className="py-6 px-6">
              <h3 className="text-xl font-bold text-black mb-2">
                Live Entertainment
              </h3>
              <p className="text-gray-600">
                Get ready to groove to live performances by local bands and DJs spinning
                the latest tracks.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src="/home/offer3.png" // replace with your image
              alt="Delectable Dining"
              className="w-full h-72 object-cover hover:scale-105 transition duration-500"
            />
            <div className="py-6 px-6">
              <h3 className="text-xl font-bold text-black mb-2">
                Delectable Dining
              </h3>
              <p className="text-gray-600">
                Complementing our stellar drinks is a menu filled with delicious dishes.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
