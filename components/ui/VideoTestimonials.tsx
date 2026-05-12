"use client";

import { Quote } from "lucide-react";

const portraitVideos = [
  {
    src: "/videos/nef-testimonial.mp4",
    poster: "/videos/thumbnails/nef-testimonial.jpg",
    name: "Neferteri Bey",
    company: "Nursing Spot, Mind Over Plates",
  },
  {
    src: "/video-testimonials/dr-belton.mp4",
    poster: "/videos/thumbnails/dr-belton.jpg",
    name: "Dr. Belton",
    company: "Your Therapy Doctor",
  },
  {
    src: "/video-testimonials/versassist-review.mp4",
    poster: "/videos/thumbnails/versassist-review.jpg",
    name: "Yolanda & Tim Pender",
    company: "About Life and Marriage",
  },
  {
    src: "/videos/byron-testimonial.mp4",
    poster: "/videos/thumbnails/byron-testimonial.jpg",
    name: "Byron Young",
    company: "",
  },
];

const landscapeVideo = {
  src: "/videos/ellena-testimonial.mp4",
  poster: "/videos/thumbnails/ellena-testimonial.jpg",
  name: "Ellena Weaver",
  company: "Weaver Enterprises & Investments, Lola Capital Group",
};

export default function VideoTestimonials() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/[0.08] text-primary text-xs font-semibold mb-5">
          <Quote className="w-3.5 h-3.5" />
          In Their Words
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 text-center max-w-3xl">
          Hear From Our <span className="text-primary">Clients</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mb-16 text-lg text-center leading-relaxed">
          Real clients sharing real stories about working with VersAssist.
        </p>

        {/* Portrait videos — 4 across */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {portraitVideos.map((video) => (
            <div
              key={video.src}
              className="group relative overflow-hidden bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-[9/16] bg-gray-900">
                <video
                  src={video.src}
                  poster={video.poster}
                  controls
                  playsInline
                  preload="none"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 text-center">
                <p className="font-bold text-gray-900">{video.name}</p>
                {video.company && <p className="text-sm text-gray-500 mt-1">{video.company}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* Landscape video — full width below */}
        <div className="w-full max-w-3xl group relative overflow-hidden bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="relative aspect-video bg-gray-900">
            <video
              src={landscapeVideo.src}
              poster={landscapeVideo.poster}
              controls
              playsInline
              preload="none"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-5 text-center">
            <p className="font-bold text-gray-900">{landscapeVideo.name}</p>
            <p className="text-sm text-gray-500 mt-1">{landscapeVideo.company}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
