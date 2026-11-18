import Link from "next/link";
import {
  MdOutlineWork,
  MdOutlineMusicNote,
  MdOutlineLocalDrink,
  MdOutlineSportsEsports,
  MdOutlineCelebration,
  MdOutlineTheaters,
  MdOutlineBeachAccess,
} from "react-icons/md";

const categories = [
  { name: "Business", icon: <MdOutlineWork size={36} className="text-[#d4af37]" /> },
  { name: "Concert", icon: <MdOutlineMusicNote size={36} className="text-[#d4af37]" /> },
  { name: "Food & Drink", icon: <MdOutlineLocalDrink size={36} className="text-[#d4af37]" /> },
  { name: "Game Nights", icon: <MdOutlineSportsEsports size={36} className="text-[#d4af37]" /> },
  { name: "Party", icon: <MdOutlineCelebration size={36} className="text-[#d4af37]" /> },
  { name: "Entertainment", icon: <MdOutlineTheaters size={36} className="text-[#d4af37]" /> },
  { name: "Beach Parties", icon: <MdOutlineBeachAccess size={36} className="text-[#d4af37]" /> },
];

export default function EventCategories() {
  return (
    <section className="py-12 px-4 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {categories.map((cat, index) => (
            <Link href="/events" key={index}>
              <div className="w-full h-32 rounded-lg border border-[#d4af37]/20 bg-[#111111] shadow-sm p-4 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 hover:border-[#d4af37]/60 hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] hover:-translate-y-1">
                <div className="mb-2 flex items-center justify-center">{cat.icon}</div>
                <h3 className="font-semibold text-sm text-white/85 leading-tight">{cat.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
