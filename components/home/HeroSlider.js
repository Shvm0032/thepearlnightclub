"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Join Us For An Exclusive Bar Event",
      subtitle: "Discover Our Upcoming Bar Event",
      bg: "linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(255,69,0,0.2) 100%)",
      image: "/nightclub-bar-event.jpg",
    },
    {
      title: "Join Us For An Exclusive Bar Event",
      subtitle: "Discover Our Upcoming Bar Event",
      bg: "linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(255,69,0,0.2) 100%)",
      image: "/nightclub-bar-event.jpg",
    },
    {
      title: "Join Us For An Exclusive Bar Event",
      subtitle: "Discover Our Upcoming Bar Event",
      bg: "linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(255,69,0,0.2) 100%)",
      image: "/nightclub-bar-event.jpg",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-[80vh] md:h-screen overflow-hidden">
      <AnimatePresence>
        {slides.map(
          (slide, idx) =>
            idx === currentSlide && (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url('${slide.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0" style={{ background: slide.bg }} />

                {/* Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  >
                    <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
                      {slide.title}
                    </h1>
                  </motion.div>

                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 px-2"
                  >
                    {slide.subtitle}
                  </motion.p>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Search Bar */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute bottom-10 md:bottom-20 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 z-20"
      >
        <div className="flex flex-col md:flex-row gap-4 bg-white/20 backdrop-blur-md p-4 rounded-lg border border-orange-500/40">
          <input
            type="text"
            placeholder="Enter name..."
            className="flex-1 px-4 py-3 bg-white rounded text-gray-900 placeholder-gray-500 focus:outline-none"
          />

          <select className="flex-1 px-4 py-3 bg-white rounded text-gray-900 focus:outline-none">
            <option>Select Category</option>
            <option>Concert</option>
            <option>Party</option>
            <option>Business Event</option>
          </select>

          <select className="flex-1 px-4 py-3 bg-white rounded text-gray-900 focus:outline-none">
            <option>All Time</option>
            <option>Today</option>
            <option>This Week</option>
          </select>

          <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded transition">
            Search
          </button>
        </div>
      </motion.div>

      {/* Dots */}
      <div className="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full transition ${
              idx === currentSlide ? "bg-orange-500 w-8" : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
