"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Alex Rl",
      role: "CEO of XpeedStudio",
      image: "/home/testimonial1.png",
      message:
        "I had a fantastic time at The Pearl! The venue's ambiance was incredible, the staff was friendly, and the DJ kept the energy high all night. Definitely one of the best nights out!",
    },
    {
      name: "Taylor H",
      role: "Manager at Cloud Info",
      image: "/home/testimonial2.png",
      message:
        "The Pearl never disappoints! The atmosphere during events is unmatched, and they always bring in top-notch performers. I've recommended this place to all my friends!",
    },
    {
      name: "Jonh Doe",
      role: "CEO & Founder Travel",
      image: "/home/testimonial3.png",
      message:
        "Attending bar event at The Pearl was an absolute blast! The ambiance was electric, the drinks were fantastic, and the live band had us dancing all night!.",
    },
    {
      name: "Gregory Kennedy",
      role: "Manager at Sunfox",
      image: "/home/testimonial4.png",
      message:
        "I've been to numerous bars, but The Pearl stands out for its incredible cocktails. Each sip felt like a work of art, and the mixologists know their craft. Count me in for every event!",
    },
  ];

  return (
    <section className="relative w-full py-20 bg-[#0a0a0a] overflow-hidden">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: "url('/about/testimonial.jpeg')" }}
      />
      <div className="absolute inset-0 bg-[#0a0a0a]/70" />

      <div className="max-w-4xl mx-auto px-6 relative">
        <div
          className="text-center mb-12"
        >
          <h4 className="text-[#d4af37] tracking-widest mb-2 text-sm">TESTIMONIALS</h4>
          <h2 className="text-4xl md:text-5xl font-normal mb-3 text-white">What People Say</h2>
          <div className="w-16 h-0.5 bg-[#d4af37] mx-auto"></div>
        </div>

        <button
          className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 
          w-12 h-12 flex items-center justify-center rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 
          hover:bg-[#d4af37] hover:text-black transition z-30 text-[#d4af37]"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 
          w-12 h-12 flex items-center justify-center rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 
          hover:bg-[#d4af37] hover:text-black transition z-30 text-[#d4af37]"
        >
          <ChevronRight size={22} />
        </button>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={1}
          className="pt-6"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div
                className="text-center px-6"
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-28 h-28 rounded-full mx-auto mb-6 border-4 border-[#d4af37] shadow-lg object-cover"
                />
                <p className="text-[22px] font-semibold text-white/90 max-w-4xl mx-auto mb-6 leading-relaxed">
                  {t.message}
                </p>
                <h3 className="text-2xl font-bold text-[#d4af37]">{t.name}</h3>
                <p className="text-gray-400 text-lg">{t.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
