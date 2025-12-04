"use client"


import HeroSlider from "../components/home/HeroSlider.js"
import EventCategories from "../components/home/EventCategories.js"
import AboutSection from "../components/home/AboutSection.js"
import UpcomingEvents from "../components/home/UpcomingEvents.js"

export default function HomePageClient() {
  return (
    <>
      <HeroSlider />
      <EventCategories />
      <AboutSection />
      <UpcomingEvents />
    </>
  )
}
