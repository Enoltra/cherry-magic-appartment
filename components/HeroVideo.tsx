"use client";

import { useEffect, useRef } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;

    const tryPlay = () => {
      const p = video.play();
      if (p !== undefined) {
        p.catch(() => {});
      }
    };

    tryPlay();
    video.addEventListener("loadedmetadata", tryPlay, { once: true });
    video.addEventListener("canplay", tryPlay, { once: true });

    const onUserAction = () => {
      if (video.paused) {
        video.play().catch(() => {});
      }
      window.removeEventListener("scroll", onUserAction);
      window.removeEventListener("touchstart", onUserAction);
      window.removeEventListener("click", onUserAction);
    };

    window.addEventListener("scroll", onUserAction, { once: true, passive: true });
    window.addEventListener("touchstart", onUserAction, { once: true, passive: true });
    window.addEventListener("click", onUserAction, { once: true, passive: true });

    return () => {
      window.removeEventListener("scroll", onUserAction);
      window.removeEventListener("touchstart", onUserAction);
      window.removeEventListener("click", onUserAction);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/cherry-magic-cover.webp"
      >
        <source src="/videos/cherry-magic-sarajevo-appartment-walkthrough.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--hero-overlay)" }} />
    </div>
  );
}
