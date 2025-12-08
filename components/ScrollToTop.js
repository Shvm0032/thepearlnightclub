"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // optional icon lib

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50
      h-12 w-12 flex items-center justify-center
      bg-[#e86c60] hover:bg-[#d75a4f]
      text-white rounded-md
      shadow-lg transition-all duration-300"
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  );
}
