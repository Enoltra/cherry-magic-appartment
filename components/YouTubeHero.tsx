"use client";

interface YouTubeHeroProps {
  videoId: string;
}

export default function YouTubeHero({ videoId }: YouTubeHeroProps) {
  const src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`;

  return (
    <div className="absolute inset-0 overflow-hidden bg-charcoal">
      <div className="absolute inset-0 [&>iframe]:absolute [&>iframe]:top-1/2 [&>iframe]:left-1/2 [&>iframe]:w-[177.78vh] [&>iframe]:h-[100vh] [&>iframe]:min-w-full [&>iframe]:min-h-[56.25vw] [&>iframe]:-translate-x-1/2 [&>iframe]:-translate-y-1/2">
        <iframe
          src={src}
          title="Cherry Magic Apartment walkthrough"
          allow="autoplay; encrypted-media"
          frameBorder="0"
          aria-hidden="true"
        />
      </div>
      {/* Dark blue 30% overlay so hero text pops against the video */}
      <div className="absolute inset-0 bg-[#0b1e33]/30" />
    </div>
  );
}
