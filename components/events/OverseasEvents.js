"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const featured = [
  {
    title: "Ibiza Beach Party",
    desc: "Sunset fiestas • VIP beach club • Live DJ • July - August",
    image: "/events/beach.jpg",
  },
  {
    title: "Mykonos Nights",
    desc: "White isle parties • Rooftop cocktails • Celebrity guest nights • June - September",
    image: "/events/cocktail.jpg",
  },
  {
    title: "Dubai Luxury Nights",
    desc: "Skyline rooftop events • Desert glam nights • Luxury yacht parties • October - March",
    image: "/events/dj-night.jpg",
  },
];

const more = [
  {
    title: "Paris",
    desc: "Paris Fashion Week Afterparties • Seine River Gala • Spring 2024",
    image: "/events/live-music.jpg",
  },
  {
    title: "London",
    desc: "London Rooftop Soirées • Mayfair Club Nights • Winter 2024",
    image: "/events/bands.jpg",
  },
];

export default function OverseasEvents() {
  return (
    <section className="py-20 px-4 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Featured heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-[#d4af37] text-sm sm:text-base font-semibold tracking-[0.3em] uppercase mb-10"
        >
          Featured Overseas Events
        </motion.h2>

        {/* Featured cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              viewport={{ once: true }}
              className="bg-[#111111] border border-[#d4af37]/40 rounded-lg overflow-hidden card-lift"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-[#d4af37] text-2xl font-serif font-semibold mb-3">
                  {event.title}
                </h3>
                <p className="text-white/75 text-sm leading-relaxed">
                  {event.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More destinations */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-[#d4af37] text-sm sm:text-base font-semibold tracking-[0.3em] uppercase mt-16 mb-10"
        >
          Plus More Destinations
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {more.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              viewport={{ once: true }}
              className="bg-[#111111] border border-[#d4af37]/40 rounded-lg overflow-hidden card-lift"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-[#d4af37] text-2xl font-serif font-semibold mb-2">
                  {event.title}
                </h3>
                <p className="text-white/75 text-sm leading-relaxed">
                  {event.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            href="/contact"
            className="btn-gold inline-block px-10 py-4 rounded-md text-base font-bold uppercase tracking-wider"
          >
            Book Your Overseas Event
          </Link>
        </div>
      </div>
    </section>
  );
}
