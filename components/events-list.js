"use client"

import { motion } from "framer-motion"

export default function EventsList() {
  const events = [
    {
      date: "Dec 15, 2024",
      day: "Saturday",
      time: "9:00 PM - 2:00 AM",
      title: "Live Jazz Night",
      category: "Concert",
      artist: "The Jazz Collective",
      description: "Enjoy smooth jazz performances with premium cocktails in our main lounge.",
    },
    {
      date: "Dec 20, 2024",
      day: "Thursday",
      time: "10:00 PM - 3:00 AM",
      title: "VIP Bottle Service Event",
      category: "Party",
      artist: "DJ Marcus",
      description: "Exclusive VIP experience with premium bottle service and top-tier entertainment.",
    },
    {
      date: "Dec 22, 2024",
      day: "Saturday",
      time: "8:00 PM - 1:00 AM",
      title: "Food & Drink Mixer",
      category: "Food & Drink",
      artist: "Chef Smith",
      description: "Network with industry professionals while enjoying gourmet bites and craft cocktails.",
    },
    {
      date: "Dec 28, 2024",
      day: "Friday",
      time: "9:00 PM - 4:00 AM",
      title: "New Year Pre-Party",
      category: "Party",
      artist: "DJ Elite",
      description: "Ring in the festive season with our spectacular New Year countdown celebration.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-gray-900 to-black border border-orange-500/30 p-8 rounded-lg hover:border-orange-500 transition group"
            >
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <p className="text-orange-500 font-bold text-sm mb-1">{event.date}</p>
                  <p className="text-gray-400 text-sm">{event.day}</p>
                  <p className="text-gray-400 text-sm mt-2">{event.time}</p>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-500 transition">
                    {event.title}
                  </h3>
                  <p className="text-gray-300 mb-2">By {event.artist}</p>
                  <p className="text-gray-400 text-sm">{event.description}</p>
                </div>
                <div className="flex items-center justify-end">
                  <button className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-black font-bold rounded transition">
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
