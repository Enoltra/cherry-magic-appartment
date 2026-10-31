"use client";

import { useEffect, useRef } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // React's muted JSX attribute is not always mirrored to the underlying DOM property on initial mount,
    // which leads Safari and Chrome to reject unprompted autoplay requests.
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");

    const playVideo = () => {
      const promise = video.play();
      if (promise !== undefined) {
        promise.catch(() => {});
      }
    };

    if (video.readyState >= 2) {
      playVideo();
    } else {
      video.addEventListener("loadeddata", playVideo, { once: true });
      video.addEventListener("canplay", playVideo, { once: true });
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
