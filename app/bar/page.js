export const metadata = {
  title: "The Pearl - The Bar | Sip Luxury",
  description:
    "Elegant evenings, curated menu, unforgettable atmosphere. Handcrafted cocktails, fine wines, champagne lounge and live music at The Pearl Bar.",
};

import BarHero from "../../components/bar/BarHero";
import BarFeatures from "../../components/bar/BarFeatures";

export default function BarPage() {
  return (
    <>
      <BarHero />
      <BarFeatures />
    </>
  );
}
