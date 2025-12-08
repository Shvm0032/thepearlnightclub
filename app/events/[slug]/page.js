import { eventsData } from "../data";
import { notFound } from "next/navigation";
import EventHero from "@/components/events/EventHero";
import EventInfoSection from "@/components/events/EventInfoSection";
import EventFeatures from "@/components/events/EventFeatures";

export function generateStaticParams() {
  return eventsData.map((event) => ({
    slug: event.slug,
  }));
}

export default async function EventPage({ params }) {
  const resolvedParams = await params; // await params Promise
  const slug = resolvedParams?.slug;


  const event = eventsData.find((item) => item.slug === slug);

  if (!event) return notFound();

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
    </>
  );
}
