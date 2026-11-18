export const metadata = {
  title: "The Pearl - The Club | Dance The Night",
  description:
    "World class DJs, live music and unforgettable nights. Friday nights, Saturday nights and special guest nights at The Pearl Club.",
};

import ClubHero from "../../components/club/ClubHero";
import ClubNights from "../../components/club/ClubNights";

export default function ClubPage() {
  return (
    <>
      <ClubHero />
      <ClubNights />
    </>
  );
}
