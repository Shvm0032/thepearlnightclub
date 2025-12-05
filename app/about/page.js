export const metadata = {
  title: "The Pearl Nightclub - About Us",
}

import AboutFeatures from "../../components/about/AboutFeatures"
import AboutHero from "../../components/about/AboutHero"
import KnowMoreAboutUs from "../../components/about/KnowMoreAboutUs"
import OurStory from "../../components/about/OurStory"
import Testimonials from "../../components/about/Testimonials"
import WhyChooseUs from "../../components/about/WhyChooseUs"

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutFeatures/>
      <OurStory />
      <KnowMoreAboutUs/>
      <WhyChooseUs/>
      <Testimonials/>
    </>
  )
}
