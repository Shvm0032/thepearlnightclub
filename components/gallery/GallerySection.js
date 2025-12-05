"use client";
import { useState } from "react";
import Image from "next/image";

export default function GallerySection() {
  const images = [
    "/gallery/1.jpg",
    "/gallery/2.jpg",
    "/gallery/3.jpg",
    "/gallery/4.jpg",
    "/gallery/5.jpg",
    "/gallery/6.jpg",
    "/gallery/7.jpg",
    "/gallery/8.jpg",
    "/gallery/9.png",
    "/gallery/10.png",
    "/gallery/11.png",
    "/gallery/12.png",
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-16 bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Gallery</h2>
        <div className="w-20 h-0.5 bg-black mx-auto mt-3"></div>
      </div>

      {/* IMAGE GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="cursor-pointer overflow-hidden rounded-lg shadow-lg"
            onClick={() => setActiveIndex(index)}
          >
            <Image
              src={img}
              alt="Gallery"
              width={600}
              height={400}
              className="object-cover w-full h-full hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>

      {/* LIGHTBOX POPUP */}
      {activeIndex !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-999 p-4">
          
          {/* CLOSE BUTTON */}
          <button
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={() => setActiveIndex(null)}
          >
            ✕
          </button>

          {/* LEFT ARROW */}
          <button
            className="absolute left-6 text-white text-4xl"
            onClick={prevImage}
          >
            ❮
          </button>

          {/* MAIN IMAGE */}
          <div className="max-w-3xl max-h-[80vh]">
            <Image
              src={images[activeIndex]}
              alt="Full View"
              width={1200}
              height={800}
              className="rounded-lg object-contain"
            />
          </div>

          {/* RIGHT ARROW */}
          <button
            className="absolute right-6 text-white text-4xl"
            onClick={nextImage}
          >
            ❯
          </button>
        </div>
      )}
    </section>
  );
}
