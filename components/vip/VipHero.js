export default function VipHero() {
  return (
    <section className="relative w-full min-h-[75vh] overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('/home/about.jpg')` }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-20">
        <div>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold leading-tight text-white">
            VIP <span className="text-white/60 font-light italic">- Your Night Your Way</span>
          </h1>
          <p className="text-white/85 text-lg sm:text-xl mt-5 font-light tracking-wide">
            For Anyone <span className="text-[#d4af37]">•</span> Your Night To Remember
          </p>
        </div>
      </div>
    </section>
  );
}
