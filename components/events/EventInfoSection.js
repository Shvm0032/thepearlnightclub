"use client";

import Image from "next/image";

export default function EventInfoSection({ title, desc, image }) {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div className="md:px-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b1a3b] mb-4 leading-tight">
            {title}
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            {desc}
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full h-[400px] relative">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover bg-center rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
