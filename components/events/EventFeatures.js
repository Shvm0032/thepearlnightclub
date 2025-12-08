"use client";

import { useState } from "react";
import BookingModal from "./BookingModal"; // import your modal
import {
  Star, Mic, Music, Users, Wine, Gamepad2, Music2,
  Sun, Waves, Flame, Mic2, HeartHandshake, Guitar,
  Headphones, Sparkles, Lightbulb
} from "lucide-react";

const iconMap = {
  Star,
  Mic,
  Music,
  Users,
  Wine,
  Gamepad2,
  Music2,
  Sun,
  Waves,
  Flame,
  Mic2,
  HeartHandshake,
  Guitar,
  Headphones,
  Sparkles,
  Lightbulb,
};

export default function EventFeatures({ features }) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState("");

  const handleBookNow = (eventTitle) => {
    setSelectedEvent(eventTitle);
    setOpenModal(true);
  };

  return (
    <>
      {/* Cards Section */}
      <section className="w-full py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {features?.map((item, index) => {
            const Icon = iconMap[item.icon] || Star;

            return (
              <div
                key={index}
                className="
                  bg-white rounded-2xl border border-gray-200 p-8 text-center 
                  shadow-sm
                  transition-all duration-300 
                  hover:shadow-2xl hover:-translate-y-2 hover:border-[#ff8a80]
                  relative overflow-hidden
                "
              >
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#ff8a80]" />

                <div className="
                  w-16 h-16 mx-auto mb-5 
                  flex items-center justify-center 
                  bg-gray-100 rounded-full
                  shadow-inner
                ">
                  <Icon size={36} className="text-[#ff6f61]" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {item.desc}
                </p>

                <button
                  onClick={() => handleBookNow(item.title)}
                  className="
                    px-6 py-2 font-semibold text-white 
                    bg-[#ff8a80] rounded-md 
                    hover:bg-[#ff6f61]
                    transition
                  "
                >
                  Book Now
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        eventName={selectedEvent}
      />
    </>
  );
}
