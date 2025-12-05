"use client";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { motion } from "framer-motion";

const eventsData = [
  {
    title: "Live Music Performances",
    image: "http://localhost:10004/wp-content/uploads/2024/08/live-music.png",
  },
  {
    title: "Party",
    image: "http://localhost:10004/wp-content/uploads/2024/08/food-pairing.png",
  },
  {
    title: "Paint and Sip",
    image: "http://localhost:10004/wp-content/uploads/2024/08/pexels-ruslan-alekso-1928131.jpg",
  },
  {
    title: "Seasonal Celebrations",
    image: "http://localhost:10004/wp-content/uploads/2024/08/seasonal-celebration.png",
  },
  {
    title: "Trivia Night",
    image: "http://localhost:10004/wp-content/uploads/2024/08/pexels-thibault-trillet-167491.jpg",
  },
  {
    title: "Cocktail Workshops",
    image: "http://localhost:10004/wp-content/uploads/2024/08/cocktail-img.png",
  },
  {
    title: "Stand-up Nights",
    image: "http://localhost:10004/wp-content/uploads/2024/08/pexels-sharing-festival-14870722.jpg",
  }
];


export default function PopularEvents() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pageCount, setPageCount] = useState(1);

  // Calculate total pages based on screen size
  const calculatePages = () => {
    let perView = 1;

    if (window.innerWidth >= 1024) perView = 4;
    else if (window.innerWidth >= 768) perView = 3;
    else if (window.innerWidth >= 640) perView = 2;

    return Math.ceil(eventsData.length / perView);
  };

  useEffect(() => {
    setPageCount(calculatePages());

    const handleResize = () => setPageCount(calculatePages());
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-20 bg-[#f5f5fd] px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Most Popular Events
          </h2>

          <p className="text-gray-600 mt-2 text-lg">Hurry up! Unleash the Night</p>

          <div className="w-16 h-[3px] bg-red-500 mt-3"></div>
        </motion.div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={25}
          autoplay={{ delay: 2500 }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          loop={false}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {eventsData.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/60 to-transparent">
                  <h3 className="text-white text-lg font-bold">{item.title}</h3>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Nav Dots */}
        <div className="flex justify-center mt-6 gap-3">
          {Array.from({ length: pageCount }).map((_, index) => (
            <button
              key={index}
              onClick={() => swiperRef.current.slideTo(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 
                ${
                  activeIndex === index
                    ? "bg-red-600 scale-110 shadow-md"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
