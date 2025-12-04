export const metadata = {
  title: "The Pearl Nightclub - Upcoming Events",
}

import EventsHero from "@/components/events-hero"
import EventsList from "@/components/events-list"

export default function EventsPage() {
  return (
    <>
      <EventsHero />
      <EventsList />
    </>
  )
}
