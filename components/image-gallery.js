"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    { id: 1, url: "/nightclub-interior-1.jpg", alt: "VIP Lounge" },
    { id: 2, url: "/bar-counter-drinks.jpg", alt: "Premium Bar" },
    { id: 3, url: "/dance-floor-lights.jpg", alt: "Dance Floor" },
    { id: 4, url: "/nightclub-interior-2.jpg", alt: "Main Hall" },
    { id: 5, url: "/cocktail-mixologist.jpg", alt: "Cocktails" },
    { id: 6, url: "/nightclub-party.jpg", alt: "Party Nights" },
    { id: 7, url: "/dj-booth-performance.jpg", alt: "DJ Booth" },
    { id: 8, url: "/vip-table-service.jpg", alt: "VIP Service" },
    { id: 9, url: "/nightclub-lounge.jpg", alt: "Lounge Area" },
  ]

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {images.map((image, idx) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer overflow-hidden rounded-lg h-64"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition flex items-center justify-center">
                <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition">View</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url || "/placeholder.svg"}
                alt={selectedImage.alt}
                className="w-full rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-orange-500 transition"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
