import Link from "next/link";
import { GiMartini, GiGlassCelebration, GiMusicalNotes } from "react-icons/gi";

const features = [
  {
    icon: <GiMartini size={44} className="text-[#d4af37]" />,
    title: "Signature Menu",
    desc: "Handcrafted cocktails, fine wines & curated small plates crafted by our mixologists.",
  },
  {
    icon: <GiGlassCelebration size={44} className="text-[#d4af37]" />,
    title: "Champagne Lounge",
    desc: "Premium champagne selection in our exclusive lounge area for intimate gatherings and celebrations.",
  },
  {
    icon: <GiMusicalNotes size={44} className="text-[#d4af37]" />,
    title: "Evening Experience",
    desc: "Live music, curated ambiance, and VIP service every night from 6pm until late.",
  },
];

export default function BarFeatures() {
  return (
    <section className="py-20 px-4 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="gold-frame bg-[#111111]/80 border border-[#d4af37]/20 rounded-lg p-8 text-center card-lift"
            >
              <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-[#d4af37] text-2xl font-serif font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            href="/reserve"
            className="btn-gold inline-block px-10 py-4 rounded-md text-base font-bold uppercase tracking-wider"
          >
            Reserve Your Table
          </Link>
        </div>
      </div>
    </section>
  );
}
