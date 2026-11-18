"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function UpcomingEvents() {
  const events = [
    {
      date: "Dec 15, 2024",
      title: "Live Jazz Night",
      category: "Concert",
      time: "9:00 PM",
    },
    {
      date: "Dec 20, 2024",
      title: "VIP Bottle Service Event",
      category: "Party",
      time: "10:00 PM",
    },
    {
      date: "Dec 28, 2024",
      title: "New Year Pre-Party",
      category: "Party",
      time: "9:00 PM",
    },
  ];

  return (
    <section className="py-20 px-4 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold text-white mb-4">Upcoming Events</h2>
          <p className="text-gray-400 text-lg">Don't miss out on our exclusive events and experiences</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111111] border border-[#d4af37]/30 p-6 rounded-lg hover:border-[#d4af37] transition group card-lift"
            >
              <p className="text-[#d4af37] font-bold text-sm mb-2">{event.date}</p>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#d4af37] transition">
                {event.title}
              </h3>
              <p className="text-gray-400 mb-4">{event.category}</p>
              <p className="text-gray-300">{event.time}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/events"
            className="btn-gold inline-block px-8 py-3 rounded font-bold uppercase tracking-wide"
          >
            View All Events
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
