export const metadata = {
  title: "The Pearl - Overseas Events",
  description:
    "The Pearl goes worldwide. Ibiza Beach Party, Mykonos Nights, Dubai Luxury Nights, Paris and London events. Book your overseas event with The Pearl.",
};

import EventsHero from "../../components/events/EventsHero";
import OverseasEvents from "../../components/events/OverseasEvents";

export default function EventsPage() {
  return (
    <>
      <EventsHero />
      <OverseasEvents />
    </>
  );
}
