"use client";

import { motion } from "framer-motion";

export default function GoogleMapSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-xl overflow-hidden shadow-xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.209093661635!2d138.59532157580284!3d-34.92595287323711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0ceda4ca9df3d%3A0x5c4dcf3b257dfe59!2s149%20Waymouth%20St%2C%20Adelaide%20SA%205000%2C%20Australia!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className=""
          ></iframe>
        </motion.div>
        
      </div>
    </section>
  );
}
