"use client";

import { useEffect, useRef } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Attempt playback immediately
    const promise = video.play();
    if (promise !== undefined) {
      promise.catch(() => {
        // Autoplay policy prevented playback, retry on first user interaction
        const startPlay = () => {
          video.play().catch(() => {});
          window.removeEventListener("touchstart", startPlay);
          window.removeEventListener("click", startPlay);
        };
        window.addEventListener("touchstart", startPlay, { once: true, passive: true });
        window.addEventListener("click", startPlay, { once: true, passive: true });
      });
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/cherry-magic-cover.webp"
      >
        <source src="/videos/cherry-magic-sarajevo-appartment-walkthrough.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
    </div>
  );
}
