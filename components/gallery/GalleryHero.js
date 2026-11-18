"use client";

export default function GalleryHero() {
  return (
    <section className="relative w-full py-24 px-4 bg-[#0a0a0a] overflow-hidden">
      {/* subtle decorative background */}
      <div
        className="absolute inset-0 opacity-[0.07] bg-cover bg-center"
        style={{ backgroundImage: `url('/gallery/bg.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          <span className="gold-text">GALLERY</span>{" "}
          <span className="text-white">- Moments To Remember</span>
        </h1>
        <p className="text-white/80 text-lg sm:text-xl mt-5 font-light">
          See The Nights Everyone Talks About
        </p>
      </div>
    </section>
  );
}
