"use client";

interface YouTubeHeroProps {
  videoId: string;
}

export default function YouTubeHero({ videoId }: YouTubeHeroProps) {
  const src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&disablekb=1&fs=0&iv_load_policy=3&modestbranding=1&playsinline=1&rel=0`;

  return (
    <div className="absolute inset-0 overflow-hidden bg-charcoal pointer-events-none">
      <div className="absolute inset-0 [&>iframe]:absolute [&>iframe]:top-1/2 [&>iframe]:left-1/2 [&>iframe]:w-[177.78vh] [&>iframe]:h-[100vh] [&>iframe]:min-w-full [&>iframe]:min-h-[56.25vw] [&>iframe]:-translate-x-1/2 [&>iframe]:-translate-y-1/2">
        <iframe
          src={src}
          title="Cherry Magic Apartment walkthrough"
          allow="autoplay; encrypted-media; picture-in-picture"
          frameBorder="0"
          tabIndex={-1}
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0" style={{ background: 'var(--hero-overlay)' }} />
    </div>
  );
}
