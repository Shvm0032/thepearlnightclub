"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-2xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8 neon-glow">Get In Touch</h2>

            <div className="space-y-6">
              <div>
                <p className="text-orange-500 font-bold mb-2">Phone</p>
                <p className="text-gray-300">(614) 003-6729</p>
              </div>

              <div>
                <p className="text-orange-500 font-bold mb-2">Email</p>
                <p className="text-gray-300">thepearl149@hotmail.com</p>
              </div>

              <div>
                <p className="text-orange-500 font-bold mb-2">Address</p>
                <p className="text-gray-300">
                  123 Pearl Street
                  <br />
                  Downtown District
                  <br />
                  [City], [State] 12345
                </p>
              </div>

              <div>
                <p className="text-orange-500 font-bold mb-4">Hours</p>
                <p className="text-gray-300 mb-2">Wed - Thu: 9PM - 2AM</p>
                <p className="text-gray-300 mb-2">Fri - Sat: 9PM - 4AM</p>
                <p className="text-gray-300">Sun - Tue: Closed</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label className="block text-white font-bold mb-2">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded focus:border-orange-500 focus:outline-none text-white"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="block text-white font-bold mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded focus:border-orange-500 focus:outline-none text-white"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-white font-bold mb-2">Phone</label>
              <input
                type="tel"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded focus:border-orange-500 focus:outline-none text-white"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label className="block text-white font-bold mb-2">Event Type</label>
              <select className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded focus:border-orange-500 focus:outline-none text-white">
                <option>Private Event</option>
                <option>Corporate Event</option>
                <option>Birthday Party</option>
                <option>Wedding Reception</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-white font-bold mb-2">Number of Guests</label>
              <input
                type="number"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded focus:border-orange-500 focus:outline-none text-white"
                placeholder="Est. number of guests"
              />
            </div>

            <div>
              <label className="block text-white font-bold mb-2">Message</label>
              <textarea
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded focus:border-orange-500 focus:outline-none text-white h-24"
                placeholder="Tell us about your event..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-orange-500 hover:bg-orange-600 text-black font-bold rounded transition"
            >
              Send Inquiry
            </button>

            {submitted && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-400 text-center font-bold"
              >
                Thank you! We'll get back to you soon.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
