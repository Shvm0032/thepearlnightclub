"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const photos = [
  { src: "/gallery/1.jpg", title: "Luxury Bar Interior" },
  { src: "/gallery/2.jpg", title: "Beach Party Sunset" },
  { src: "/gallery/3.jpg", title: "Nightclub Dance Floor" },
  { src: "/gallery/4.jpg", title: "Red Carpet Arrival" },
  { src: "/gallery/5.jpg", title: "Rooftop Party" },
  { src: "/gallery/6.jpg", title: "Champagne Celebration" },
];

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const nextImage = () => setActiveIndex((prev) => (prev + 1) % photos.length);
  const prevImage = () => setActiveIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));

  return (
    <section className="py-16 px-4 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="cursor-pointer overflow-hidden rounded-lg border border-[#d4af37]/25 bg-[#111111] card-lift group"
              onClick={() => setActiveIndex(index)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-[#d4af37] text-lg font-semibold font-serif">
                  {photo.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-gold px-10 py-4 rounded-md text-base font-bold uppercase tracking-wider">
            View More Photos
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-[999] p-4">
          <button
            className="absolute top-6 right-6 text-white text-3xl z-10"
            onClick={() => setActiveIndex(null)}
            aria-label="Close"
          >
            ✕
          </button>
          <button
            className="absolute left-4 text-white text-4xl z-10"
            onClick={prevImage}
            aria-label="Previous"
          >
            ‹
          </button>
          <div className="max-w-4xl max-h-[85vh] relative w-full">
            <Image
              src={photos[activeIndex].src}
              alt={photos[activeIndex].title}
              fill
              className="object-contain rounded-lg"
            />
          </div>
          <button
            className="absolute right-4 text-white text-4xl z-10"
            onClick={nextImage}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
