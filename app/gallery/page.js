export const metadata = {
  title: "The Pearl Nightclub - Gallery",
}

import GalleryHero from "@/components/gallery-hero"
import ImageGallery from "@/components/image-gallery"

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <ImageGallery />
    </>
  )
}
