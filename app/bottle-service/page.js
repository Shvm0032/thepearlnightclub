export const metadata = {
  title: "The Pearl Nightclub - Bottle Service",
}
 
import BottleServiceContent from "../../components/bottle-service/BottleServiceContent"
import BottleServiceHero from "../../components/bottle-service/BottleServiceHero"

export default function BottleServicePage() {
  return (
    <>
      <BottleServiceHero />
      <BottleServiceContent />
    </>
  )
}
