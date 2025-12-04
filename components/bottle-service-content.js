"use client"

import { motion } from "framer-motion"

export default function BottleServiceContent() {
  const packages = [
    {
      name: "Premium Package",
      price: "$500",
      features: [
        "1 Bottle Premium Spirit",
        "Premium Mixers & Garnishes",
        "Table Seating for 4",
        "Dedicated Server",
        "Ice Service",
      ],
    },
    {
      name: "VIP Package",
      price: "$1,200",
      features: [
        "2 Bottles Premium Spirits",
        "Premium Mixers & Garnishes",
        "Table Seating for 8",
        "Dedicated Server",
        "Ice Service",
        "Table Decorations",
      ],
      featured: true,
    },
    {
      name: "Executive Package",
      price: "$2,500",
      features: [
        "3 Bottles Premium Spirits",
        "Premium Mixers & Garnishes",
        "Prime Table Seating for 12",
        "Dedicated Server & Manager",
        "Ice Service",
        "Table Decorations",
        "Priority Entry",
      ],
    },
  ]

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4 neon-glow">Bottle Service Packages</h2>
          <p className="text-gray-300 text-lg">Experience luxury with our premium bottle service options</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-lg p-8 border transition ${
                pkg.featured
                  ? "border-orange-500 bg-gradient-to-b from-orange-500/20 to-black scale-105"
                  : "border-gray-700 bg-gray-900/50 hover:border-orange-500"
              }`}
            >
              {pkg.featured && (
                <div className="bg-orange-500 text-black font-bold px-3 py-1 rounded-full w-fit mb-4 text-sm">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
              <p className="text-4xl font-bold text-orange-500 mb-6 neon-glow">{pkg.price}</p>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <span className="text-orange-500">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 font-bold rounded transition ${
                  pkg.featured
                    ? "bg-orange-500 hover:bg-orange-600 text-black"
                    : "border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black"
                }`}
              >
                Reserve Now
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-gray-900 to-black border border-orange-500/30 p-12 rounded-lg"
        >
          <h3 className="text-3xl font-bold text-white mb-4">Why Choose Our Bottle Service?</h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Experience unparalleled luxury and VIP treatment at The Pearl. Our dedicated servers ensure your bottle
            service is seamless, with expert mixology on demand and premium spirits curated for the most discerning
            palates. Reserve your table today and elevate your night.
          </p>
          <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-black font-bold rounded transition">
            Contact Us for Reservations
          </button>
        </motion.div>
      </div>
    </section>
  )
}
