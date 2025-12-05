"use client";
import { useState } from "react";

export default function GalleryVideoSection() {

  // All videos use CUSTOM THUMBNAILS (client provided)
  const videos = [
    {
      id: 1,
      src: "http://localhost:10004/wp-content/uploads/2024/09/49784005_353326512135684_2691141149493559296_n.mp4",
      thumb: "/gallery/thumb1.jpg",
      duration: "0:08",
    },
    {
      id: 2,
      src: "http://localhost:10004/wp-content/uploads/2024/09/Untitled-design-20.mp4",
      thumb: "/gallery/thumb2.png",
      duration: "0:12",
    },
    {
      id: 3,
      src: "https://dnddevelopment.net/pearl/wp-content/uploads/2019/06/WhatsApp-Video-2023-12-13-at-5.24.37-PM.mp4",
      thumb: "/gallery/thumb3.jpg",
      duration: "0:10",
    },
    {
      id: 4,
      src: "https://player.vimeo.com/external/381899614.sd.mp4?s=38eae5b43b46777fa1f21a196ee83f9d4eb1b201&profile_id=139",
      thumb: "/gallery-thumbs/thumb4.jpg",
      duration: "0:06",
    },
  ];

  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  return (
    <section className="w-full bg-white py-16">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Crafting Unforgettable Experiences
        </h2>
        <div className="w-20 h-0.5 bg-black mx-auto mt-3"></div>
      </div>

      {/* Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* LEFT MAIN VIDEO */}
        <div className="col-span-2">
          <video
            src={currentVideo.src}
            controls
            className="w-full h-[350px] md:h-[450px] bg-black rounded-md"
          />
        </div>

        {/* RIGHT PLAYLIST */}
      <div>
  <div className="flex justify-between items-center mb-2">
    <p className="font-semibold">Playlist</p>
    <p className="text-sm text-gray-500">{videos.length} Videos</p>
  </div>

  {/* SCROLLS ONLY IF CONTENT EXCEEDS HEIGHT */}
  <div className="h-[450px] overflow-y-auto border border-gray-200 rounded-md">

    {videos.map((video) => (
      <div
        key={video.id}
        onClick={() => setCurrentVideo(video)}
        className={`flex items-center gap-3 p-3 cursor-pointer
        ${currentVideo.id === video.id ? "bg-gray-100" : "border-b border-gray-200"}`}
      >
        <img
          src={video.thumb}
          alt="thumbnail"
          className="w-20 h-14 object-cover rounded"
        />

        <div className="flex-1 flex justify-between items-center">
          <span className="text-gray-700">▶</span>
          <span className="text-sm text-gray-500">{video.duration}</span>
        </div>

      </div>
    ))}

  </div>
</div>


      </div>
    </section>
  );
}
