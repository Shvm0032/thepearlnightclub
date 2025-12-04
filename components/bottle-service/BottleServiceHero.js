"use client"

import { motion } from "framer-motion"

export default function BottleServiceHero() {
  return (
    <section className="relative w-full h-96 mt-20 overflow-hidden flex items-center justify-center">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/placeholder.svg?height=400&width=1200&query=premium-bottle-service)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/50 to-transparent" />

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative text-center"
      >
        <h1 className="text-6xl font-bold text-white neon-glow">Premium Bottle Service</h1>
      </motion.div>
    </section>
  )
}
