import {
  FaBirthdayCake,
  FaRing,
  FaFemale,
  FaUserTie,
  FaGem,
  FaKey,
} from "react-icons/fa";

const experiences = [
  { icon: <FaBirthdayCake size={28} />, title: "Birthdays" },
  { icon: <FaRing size={28} />, title: "Anniversaries" },
  { icon: <FaFemale size={28} />, title: "Hens Party" },
  { icon: <FaUserTie size={28} />, title: "Stag Party" },
  { icon: <FaGem size={28} />, title: "Engagements" },
  { icon: <FaKey size={28} />, title: "Private Celebrations" },
];

export default function VipExperiences() {
  return (
    <section className="py-20 px-4 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-center text-[#d4af37] text-sm sm:text-base font-semibold tracking-[0.3em] uppercase mb-12"
        >
          Tailored VIP Experiences
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-[#d4af37] to-[#b8860b] rounded-lg p-6 text-center text-black shadow-lg hover:shadow-[0_10px_30px_rgba(212,175,55,0.4)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-3 flex justify-center">{exp.icon}</div>
              <h3 className="text-lg font-semibold tracking-wide">{exp.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
