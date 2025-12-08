"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function BookingModal({ open, onClose, eventName = "" }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50"
        >
          {/* Modal Box */}
          <motion.div
            initial={{ y: -40, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -40, opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="
              bg-white/90 backdrop-blur-xl 
              border border-white/30 
              shadow-[0_8px_30px_rgba(0,0,0,0.15)] 
              rounded-2xl p-8 
              w-full max-w-lg relative
            "
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-black hover:rotate-90 transition-transform"
            >
              <X size={26} />
            </button>

            <h2 className="text-3xl font-bold mb-8 text-center text-[#ff6f61] tracking-wide">
              Book Your Spot
            </h2>

            <form className="space-y-6">

              {/* Input */}
              <div className="space-y-1">
                <label className="font-semibold text-gray-700">Name *</label>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg border border-gray-300 
                  focus:border-[#ff6f61] focus:ring-2 focus:ring-[#ff6f61] 
                  outline-none transition shadow-sm"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-gray-700">
                  Contact Number *
                </label>
                <input
                  type="number"
                  className="w-full p-3 rounded-lg border border-gray-300 
                  focus:border-[#ff6f61] focus:ring-2 focus:ring-[#ff6f61] 
                  outline-none transition shadow-sm"
                  placeholder="98765 43210"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-gray-700">Email *</label>
                <input
                  type="email"
                  className="w-full p-3 rounded-lg border border-gray-300 
                  focus:border-[#ff6f61] focus:ring-2 focus:ring-[#ff6f61] 
                  outline-none transition shadow-sm"
                  placeholder="yourmail@example.com"
                />
              </div>

              {/* Dropdown */}
              <div className="space-y-1">
                <label className="font-semibold text-gray-700">
                  Upcoming Events *
                </label>

                <select
                  className="w-full p-3 rounded-lg border border-gray-300 bg-white 
                  focus:border-[#ff6f61] focus:ring-2 focus:ring-[#ff6f61] 
                  transition shadow-sm"
                  defaultValue={eventName}
                >
                  <option value="">Select Event</option>
                  <option value="bands">Bands</option>
                  <option value="cocktail-carnival">Cocktail Carnival</option>
                  <option value="beach-parties">Beach Parties</option>
                  <option value="live-music">Live Music Night</option>
                  <option value="dj-night">DJ Night</option>
                </select>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileTap={{ scale: 0.95 }}
                className="
                w-full py-3 
                bg-[#ff6f61] text-white text-lg font-bold 
                rounded-xl shadow-md 
                hover:bg-[#e4574c] hover:shadow-lg 
                transition
              "
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
