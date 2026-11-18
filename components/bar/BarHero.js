export default function BarHero() {
  return (
    <section className="relative w-full min-h-[75vh] overflow-hidden flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('/bar-counter-drinks.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold leading-tight">
            <span className="gold-text">THE BAR</span>{" "}
            <span className="text-white italic font-light">— Sip Luxury</span>
          </h1>
          <p className="text-white/80 text-lg sm:text-xl mt-5 font-light leading-relaxed">
            Elegant Evenings, Curated Menu, Unforgettable Atmosphere
          </p>
          <div className="gold-divider w-40 mt-7" />
        </div>
      </div>
    </section>
  );
}
