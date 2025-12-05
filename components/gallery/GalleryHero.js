"use client";
import Image from "next/image";

export default function GalleryHero() {
  return (
    <section className="relative w-full h-[70vh] md:h-[70vh] overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/gallery/bg.jpg" // replace with your image
        alt="Gallery Background"
        fill
        priority
        className="object-cover object-top"  // 👈 TOP-CENTER POSITION
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Centered Heading */}
      <div className="relative z-10 text-center">
        <h1 className="text-white text-4xl md:text-6xl font-extrabold drop-shadow-lg">
          Our Gallery
        </h1>
      </div>
    </section>
  );
}
