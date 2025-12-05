"use client";

import { motion } from "framer-motion";
import { Calendar, Settings, Users } from "lucide-react";

export default function AboutFeatures() {
  // -------- Array Data ---------
  const features = [
    {
      icon: Calendar,
      title: "Versatile Event Space",
      description:
        "Offering wide range of versatile spaces, from intimate lounges to spacious halls.",
    },
    {
      icon: Settings,
      title: "Customizable Packages",
      description:
        "Our packages for your specific needs, whether it's a corporate gathering or private celebration.",
    },
    {
      icon: Users,
      title: "Expert Event Planning",
      description:
        "Our dedicated event planning team ensures every detail, from decor to entertainment.",
    },
  ];

  // ---- Parent Animation (Stagger Children)
  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  // ---- Card Animation ----
  const cardVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full py-20 bg-white">
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
      >
        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              variants={cardVariant}
              className="
                bg-white shadow-lg rounded-2xl p-10 text-center 
                transition-all duration-300 
                hover:shadow-xl hover:scale-[1.03] 
                cursor-pointer
              "
            >
              {/* ICON */}
              <div className="p-6 mx-auto bg-[#f3f3f3] rounded-full w-fit mb-6">
                <Icon className="w-10 h-10 text-[#e86c60]" />
              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
