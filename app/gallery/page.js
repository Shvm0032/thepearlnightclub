export const metadata = {
  title: "The Pearl Nightclub - Gallery",
}

import GalleryHero from "../../components/gallery/GalleryHero"
import ImageGallery from "../../components/gallery/ImageGallery"

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <ImageGallery />
    </>
  )
}
