export const metadata = {
  title: "The Pearl - VIP Services | Reserve Your Night",
  description:
    "Tailored VIP experiences for birthdays, anniversaries, hens party, stag party, engagements and private celebrations. Reserve your VIP night at The Pearl.",
};

import VipHero from "../../components/vip/VipHero";
import VipExperiences from "../../components/vip/VipExperiences";
import VipIncludes from "../../components/vip/VipIncludes";

export default function ReservePage() {
  return (
    <>
      <VipHero />
      <VipExperiences />
      <VipIncludes />
    </>
  );
}
