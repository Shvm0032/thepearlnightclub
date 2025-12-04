export const metadata = {
  title: "The Pearl Nightclub - Upcoming Events",
}

import EventsHero from "../../components/events/EventsHero"
import EventsList from "../../components/events/EventsList"

export default function EventsPage() {
  return (
    <>
      <EventsHero />
      <EventsList />
    </>
  )
}
