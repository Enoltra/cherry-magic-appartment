"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLang } from "@/lib/i18n";
import FadeUp from "@/components/FadeUp";
import ReviewsSlider from "@/components/ReviewsSlider";
import YouTubeHero from "@/components/YouTubeHero";
import Lightbox from "@/components/Lightbox";
import { rooms } from "@/lib/rooms";
import { Home as HomeIcon, BedDouble, ChefHat, Car, Wifi, Snowflake, TreePalm } from "lucide-react";

const HERO_VIDEO_ID = "o7DSZ4_0w1Q";

export default function HomePage() {
  const { lang, tr } = useLang();
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number; title: string } | null>(null);

  const facts = [
    { icon: <HomeIcon size={22} />, label: tr("factGuests") },
    { icon: <BedDouble size={22} />, label: tr("factBedrooms") },
    { icon: <ChefHat size={22} />, label: tr("factKitchen") },
    { icon: <Car size={22} />, label: tr("factParking") },
    { icon: <Wifi size={22} />, label: tr("factWifi") },
    { icon: <Snowflake size={22} />, label: tr("factAc") },
    { icon: <TreePalm size={22} />, label: tr("factLocation") }
  ];

  return (
    <div>
      {lightbox && (
        <Lightbox
          images={lightbox.images}
          index={lightbox.index}
          title={lightbox.title}
          onClose={() => setLightbox(null)}
          onPrev={() => setLightbox((prev) => prev ? { ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length } : prev)}
          onNext={() => setLightbox((prev) => prev ? { ...prev, index: (prev.index + 1) % prev.images.length } : prev)}
        />
      )}

      <section className="relative min-h-[100svh] w-full overflow-hidden flex items-center justify-center text-center pt-24 pb-36 md:pb-24">
        <YouTubeHero videoId={HERO_VIDEO_ID} />
        <FadeUp className="relative z-10 px-6 max-w-4xl mt-6 md:mt-10">
          <p className="font-script text-5xl md:text-6xl leading-none" style={{ color: "var(--gold)", marginBottom: "1.75rem" }}>Cherry Magic</p>
          <h1 className="mb-5 max-w-4xl mx-auto" style={{ color: "var(--gold)" }}>{tr("heroTitle")}</h1>
          <p className="font-body text-white text-base md:text-xl mb-8 max-w-2xl mx-auto">{tr("heroSubtitle")}</p>
          <a
            href="https://www.booking.com/hotel/ba/cherry-magic-apartment-sarajevo.en-gb.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cherry hover:bg-cherry-dark text-cream px-8 py-3 rounded-full font-body uppercase tracking-wide text-sm transition-colors"
          >
            {tr("heroCta")}
          </a>
        </FadeUp>
      </section>

      <section className="max-w-6xl mx-auto px-5 -mt-20 md:-mt-14 relative z-20">
        <FadeUp>
          <div className="hero-badge-card rounded-2xl grid grid-cols-2 md:grid-cols-4 xl:grid-cols-7 gap-6 px-6 py-8 border border-cherry/10 items-center">
            {facts.map((f, i) => (
              <div key={i} className="flex flex-col items-center justify-center text-center gap-2 h-full">
                <div style={{ color: "var(--gold)" }}>{f.icon}</div>
                <h6 className="!text-[#f7f4ec]">{f.label}</h6>
              </div>
            ))}
          </div>
        </FadeUp>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-20">
        <FadeUp><h2 className="text-center mb-14">{tr("highlightsTitle")}</h2></FadeUp>
        <div className="grid gap-8 md:grid-cols-2">
          {[
            { t: tr("highlight1Title"), d: tr("highlight1Text") },
            { t: tr("highlight2Title"), d: tr("highlight2Text") },
            { t: tr("highlight3Title"), d: tr("highlight3Text") },
            { t: tr("highlight4Title"), d: tr("highlight4Text") }
          ].map((h, i) => (
            <FadeUp key={i} delay={i * 100}>
              <div className="bg-white/60 border border-cherry/10 rounded-2xl p-7 h-full">
                <h3 className="!text-lg !text-cherry mb-3">{h.t}</h3>
                <p className="font-body text-sm text-charcoal/80 leading-relaxed">{h.d}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="green-placeholder-bar py-16 md:py-20 border-y border-black/5">
        <div className="max-w-5xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center relative z-10">
          <FadeUp>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/10 border border-white/15">
              <Image src="/images/living-room/cherry-magic-living-room-06.jpeg" alt="Cherry Magic Apartment interior, ideal for extended stays" fill className="object-cover" />
            </div>
          </FadeUp>
          <FadeUp delay={100}>
            <h2 className="!text-2xl md:!text-3xl mb-5 !text-[#f7f4ec]">{tr("extendedStayTitle")}</h2>
            <p className="font-body text-[#f7f4ec]/88 leading-relaxed">{tr("extendedStayText")}</p>
          </FadeUp>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-20">
        <FadeUp>
          <h2 className="text-center mb-3">{tr("galleryTitle")}</h2>
          <p className="font-body text-center text-charcoal/70 mb-12 max-w-xl mx-auto">{tr("galleryIntro")}</p>
        </FadeUp>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {rooms.map((room, i) => (
            <FadeUp key={room.slug} delay={i * 80}>
              <Link
                href={`/gallery#${room.slug}`}
                className="relative block aspect-square rounded-xl overflow-hidden bg-gray-300 group w-full text-left"
              >
                <Image src={room.images[0]} alt={lang === "en" ? room.titleEn : room.titleDe} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-charcoal/30 flex items-end p-3">
                  <h4 className="!text-cream !text-sm !font-body !font-medium">{lang === "en" ? room.titleEn : room.titleDe}</h4>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/gallery" className="inline-block border border-cherry text-cherry px-7 py-3 rounded-full font-body text-sm uppercase tracking-wide hover:bg-cherry hover:text-cream transition-colors">
            {tr("galleryCta")}
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-20 grid md:grid-cols-2 gap-x-14 gap-y-10 items-start">
        <FadeUp>
          <h2 className="!text-2xl mb-2">{tr("hostTitle")}</h2>
          <h3 className="!text-lg !text-cherry mb-1">{tr("hostGreeting")}</h3>
          <p className="font-body text-sm text-charcoal/60 uppercase tracking-wide mb-4">{tr("hostName")}</p>
          <p className="font-body text-charcoal/90 leading-relaxed mb-4">{tr("hostIntroText")}</p>
          <p className="font-body text-charcoal/80 leading-relaxed mb-4">{tr("hostText")}</p>
          <p className="font-body text-sm text-charcoal/60 uppercase tracking-wide">{tr("hostLanguages")}</p>
        </FadeUp>

        <FadeUp delay={100}>
          <div className="rounded-2xl overflow-hidden bg-gray-100 max-w-sm mx-auto md:ml-auto md:mr-0">
            <Image src="/images/host/amna-picture.jpg" alt="Amna Kurbegović, host of Cherry Magic Apartment" width={600} height={750} className="host-photo-fit" />
          </div>
        </FadeUp>

        <FadeUp delay={150}>
          <h2 className="!text-2xl mb-4">{tr("neighbourhoodTitle")}</h2>
          <p className="font-body text-charcoal/80 leading-relaxed">{tr("neighbourhoodText")}</p>
        </FadeUp>

        <FadeUp delay={200}>
          <div className="bg-[#eef2ea] rounded-xl p-5 border border-[#353f2a]/15 max-w-sm mx-auto md:ml-auto md:mr-0">
            <p className="font-body text-sm leading-relaxed text-[#353f2a]">{tr("neighbourhoodMedical")}</p>
          </div>
        </FadeUp>
      </section>

      <section className="max-w-4xl mx-auto px-5 py-20">
        <FadeUp>
          <h2 className="text-center mb-3">{tr("reviewsTitle")}</h2>
          <div className="review-card">
            <div className="review-divider" />
            <ReviewsSlider />
          </div>
        </FadeUp>
      </section>
    </div>
  );
}
