"use client";

import { motion } from "framer-motion";
import { TbDeviceImacSearch } from "react-icons/tb";
import { GiWireframeGlobe } from "react-icons/gi";
import { GiMusicalNotes } from "react-icons/gi";
import { FaPersonDotsFromLine } from "react-icons/fa6";

export default function WhyChooseUs() {
  const features = [
    {
      icon: TbDeviceImacSearch,
      title: "Unique Value Proposition",
      desc: "Exclusive theme, renowned guest performers, innovative cocktails, or a special ambiance.",
    },
    {
      icon: GiWireframeGlobe,
      title: "Unmatched Atmosphere",
      desc: "Step into an ambiance that transforms into a haven where every corner resonates with energy.",
    },
    {
      icon: GiMusicalNotes,
      title: "Exclusive Entertainment",
      desc: "Enthralled by the talents gracing our stage, delivering performances that keep you on your feet all night.",
    },
    {
      icon: FaPersonDotsFromLine,
      title: "Crafted Experiences",
      desc: "Indulge in our specially curated cocktails, each one a masterpiece crafted by our expert mixologists.",
    },
  ];

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-black text-[#1c1a2e]"
        >
          Why Choose Us
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-gray-500 text-lg mt-3"
        >
          Our Next Bar Event Awaits
        </motion.p>

        {/* Red Underline - Exactly like screenshot */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex justify-center mt-4"
        >
          <span className="w-16 h-1 bg-[#E86C60] rounded-full"></span>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-20">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon Circle - Exact match */}
                <div className="w-40 h-40 rounded-full bg-[#f7f7f7] flex items-center justify-center mb-8 shadow-sm transition-transform duration-300 group-hover:scale-110">
                  <Icon 
                    size={56} 
                    strokeWidth={1.4} 
                    className="text-[#E86C60]" 
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl  font-bold text-[#1c1a2e] mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-md md:text-[17px] leading-relaxed max-w-[280px] px-4">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}