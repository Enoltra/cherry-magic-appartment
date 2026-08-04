"use client";

export default function HeroVideo() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/cherry-magic-cover.webp"
      >
        <source src="/videos/cherry-magic-apartment-walkthrough-web.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
    </div>
  );
}
