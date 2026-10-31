"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Direct DOM property enforcement so browsers see the video as guaranteed silent
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    const handlePlaying = () => setIsPlaying(true);
    video.addEventListener("playing", handlePlaying);

    const startAutoplay = () => {
      const p = video.play();
      if (p !== undefined) {
        p.then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // Fallback if browser suspended playback
          const kickstart = () => {
            video.play().catch(() => {});
            window.removeEventListener("scroll", kickstart);
            window.removeEventListener("touchstart", kickstart);
            window.removeEventListener("click", kickstart);
          };
          window.addEventListener("scroll", kickstart, { once: true, passive: true });
          window.addEventListener("touchstart", kickstart, { once: true, passive: true });
          window.addEventListener("click", kickstart, { once: true, passive: true });
        });
      }
    };

    if (video.readyState >= 1) {
      startAutoplay();
    } else {
      video.addEventListener("loadedmetadata", startAutoplay, { once: true });
      video.addEventListener("canplay", startAutoplay, { once: true });
    }

    return () => {
      video.removeEventListener("playing", handlePlaying);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isPlaying ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/cherry-magic-cover.webp"
      >
        <source src="/videos/cherry-magic-sarajevo-appartment-walkthrough.mp4#t=0.001" type="video/mp4" />
      </video>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--hero-overlay)" }} />
    </div>
  );
}
