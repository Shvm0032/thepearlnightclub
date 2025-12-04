"use client"

import { motion } from "framer-motion"

export default function EventCategories() {
  const categories = [
    { name: "Business", icon: "💼", color: "from-pink-400 to-pink-600" },
    { name: "Concert", icon: "🎵", color: "from-green-400 to-green-600" },
    { name: "Food & Drink", icon: "🍾", color: "from-orange-400 to-orange-600" },
    { name: "Game Nights", icon: "🎮", color: "from-yellow-400 to-yellow-600" },
    { name: "Party", icon: "🎉", color: "from-purple-400 to-purple-600" },
    { name: "Entertainment", icon: "🎭", color: "from-red-400 to-red-600" },
    { name: "Europe Beach Partys", icon: "🏖️", color: "from-blue-400 to-blue-600" },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-16 px-4 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4"
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className={`p-4 rounded-lg border-2 border-gray-700 hover:border-orange-500 transition cursor-pointer bg-linear-to-br ${cat.color}/10 hover:bg-linear-to-br ${cat.color}/20 group`}
            >
              <div className="text-4xl mb-2">{cat.icon}</div>
              <p className="font-bold text-gray-300 group-hover:text-orange-500 transition text-sm">{cat.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
