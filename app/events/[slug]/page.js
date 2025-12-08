import { notFound } from "next/navigation";
import { eventsData } from "../data";
import EventHero from "@/components/events/EventHero";
import EventInfoSection from "@/components/events/EventInfoSection";
import EventFeatures from "@/components/events/EventFeatures";

export default async function EventPage({ params }) {
  const resolvedParams = await params; // await params Promise
  const slug = resolvedParams?.slug;

  if (!slug) {
    notFound();
  }

  const event = eventsData.find((item) => item.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <>
      <EventHero
        title={event.hero.title}
        subtitle={event.hero.subtitle}
        image={event.hero.image}
      />
         <EventInfoSection 
        title={event.about.title}
        desc={event.about.desc}
        image={event.about.image}
      />
       <EventFeatures features={event.features} />
      {/* other components */}
    </>
  );
}
