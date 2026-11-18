export const metadata = {
  title: "The Pearl - Gallery | Moments To Remember",
  description:
    "See the nights everyone talks about. Luxury bar interior, beach parties, nightclub dance floor, red carpet arrivals, rooftop parties and champagne celebrations at The Pearl.",
};

import GalleryHero from "../../components/gallery/GalleryHero";
import GallerySection from "../../components/gallery/GallerySection";

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <GallerySection />
    </>
  );
}
