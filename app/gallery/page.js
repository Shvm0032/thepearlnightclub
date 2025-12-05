export const metadata = {
  title: "The Pearl Nightclub - Gallery",
}

import GalleryHero from "../../components/gallery/GalleryHero"
import GallerySection from "../../components/gallery/GallerySection"
import GalleryVideoSection from "../../components/gallery/GalleryVideoSection"

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <GalleryVideoSection/>
      <GallerySection/>
    </>
  )
}
