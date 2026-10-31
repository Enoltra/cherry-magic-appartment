"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    const handlePlaying = () => setIsPlaying(true);
    video.addEventListener("playing", handlePlaying);

    const tryPlay = () => {
      if (!video) return;
      const p = video.play();
      if (p !== undefined) {
        p.then(() => setIsPlaying(true)).catch(() => {});
      }
    };

    // Attempt immediately on mount
    tryPlay();
    video.addEventListener("loadeddata", tryPlay, { once: true });
    video.addEventListener("canplay", tryPlay, { once: true });

    // Capture ANY physical gesture anywhere on page: touch swipe, scroll wheel, touchmove, pointerdown
    const onGesture = () => {
      tryPlay();
      if (!video.paused) {
        removeGestureListeners();
      }
    };

    const addGestureListeners = () => {
      window.addEventListener("touchstart", onGesture, { passive: true });
      window.addEventListener("touchmove", onGesture, { passive: true });
      window.addEventListener("wheel", onGesture, { passive: true });
      window.addEventListener("scroll", onGesture, { passive: true });
      window.addEventListener("pointerdown", onGesture, { passive: true });
      document.addEventListener("pointerdown", onGesture, { passive: true });
    };

    const removeGestureListeners = () => {
      window.removeEventListener("touchstart", onGesture);
      window.removeEventListener("touchmove", onGesture);
      window.removeEventListener("wheel", onGesture);
      window.removeEventListener("scroll", onGesture);
      window.removeEventListener("pointerdown", onGesture);
      document.removeEventListener("pointerdown", onGesture);
    };

    addGestureListeners();

    return () => {
      video.removeEventListener("playing", handlePlaying);
      removeGestureListeners();
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          isPlaying ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/cherry-magic-cover.webp"
      >
        <source src="/videos/cherry-magic-sarajevo-appartment-walkthrough.mp4#t=0.001" type="video/mp4" />
      </video>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--hero-overlay)" }} />
    </div>
  );
}
