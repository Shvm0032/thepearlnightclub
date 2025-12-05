"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

export default function OurStory() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="w-full py-20 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* ------- LEFT SIDE : VIDEO THUMBNAIL ------- */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[350px] md:h-[420px] rounded-xl overflow-hidden shadow-lg"
        >
          {!showVideo ? (
            <>
              <img
                src="/about/storyvideobg.jpg" // change to your image
                alt="Our Story Video"
                className="w-full h-full object-cover rounded-xl"
              />

              <button
                onClick={() => setShowVideo(true)}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition">
                  <Play size={38} className="text-red-500 ml-1" />
                </div>
              </button>
            </>
          ) : (
            <iframe
              className="w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1"
              title="Our Story Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </motion.div>

        {/* ------- RIGHT SIDE : CONTENT ------- */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-red-500 text-xl font-semibold mb-2">About Us!</h4>

          <h2 className="text-5xl font-black mb-6">Our Story</h2>

          <p className="text-black md:text-md leading-relaxed mb-4">
            At The Pearl, we’re passionate about crafting experiences that transcend the ordinary.
            From our carefully curated selection of spirits to our team of expert mixologists, each
            element is meticulously designed to elevate your evenings.
          </p>

          <p className="text-black md:text-md leading-relaxed mb-4">
            We believe in creating more than just drinks; we craft moments and memories that linger
            long after the last sip. Whether it’s our themed events, live music sessions, or exclusive
            gatherings, we strive to offer a vibrant, welcoming space for those seeking an exceptional
            nightlife experience.
          </p>

          <p className="text-black md:text-md leading-relaxed">
            Join us and become part of our spirited community at The Pearl. Cheers to unforgettable
            nights! Our team is dedicated to crafting evenings filled with laughter, music that moves
            your soul, and libations that awaken your senses.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
