"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import FadeUp from "@/components/FadeUp";
import ReviewsSlider from "@/components/ReviewsSlider";
import YouTubeHero from "@/components/YouTubeHero";
import { rooms } from "@/lib/rooms";
import { Home as HomeIcon, BedDouble, ChefHat, Car, Wifi, TreePalm } from "lucide-react";

const HERO_VIDEO_ID = "o7DSZ4_0w1Q"; // placeholder — swap for the final walkthrough video ID

export default function HomePage() {
  const { lang, tr } = useLang();

  const facts = [
    { icon: <HomeIcon size={22} />, label: tr("factGuests") },
    { icon: <BedDouble size={22} />, label: tr("factBedrooms") },
    { icon: <ChefHat size={22} />, label: tr("factKitchen") },
    { icon: <Car size={22} />, label: tr("factParking") },
    { icon: <Wifi size={22} />, label: tr("factWifi") },
    { icon: <TreePalm size={22} />, label: tr("factLocation") }
  ];

  return (
    <div>
      {/* H1 — one per page, the apartment name + core value proposition */}
      <section className="relative h-[92vh] min-h-[560px] w-full overflow-hidden flex items-center justify-center text-center">
        <YouTubeHero videoId={HERO_VIDEO_ID} />
        <FadeUp className="relative z-10 px-6 max-w-2xl">
          <p className="font-script text-4xl md:text-5xl text-cream mb-3">Cherry Magic</p>
          <h1 className="text-cream mb-4">
            {tr("heroTitle")}
          </h1>
          <p className="font-body text-cream/90 text-base md:text-lg mb-8">
            {tr("heroSubtitle")}
          </p>
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

      <section className="max-w-5xl mx-auto px-5 -mt-10 md:-mt-14 relative z-20">
        <FadeUp>
          <div className="bg-cream shadow-lg rounded-2xl grid grid-cols-2 md:grid-cols-6 gap-6 px-6 py-8 border border-cherry/10">
            {facts.map((f, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2 text-charcoal">
                <div className="text-cherry">{f.icon}</div>
                {/* H6 — tiny label style, used for quick facts */}
                <h6 className="!text-charcoal">{f.label}</h6>
              </div>
            ))}
          </div>
        </FadeUp>
      </section>

      {/* H2 — main section heading */}
      <section className="max-w-6xl mx-auto px-5 py-20">
        <FadeUp>
          <h2 className="text-center mb-14">
            {tr("highlightsTitle")}
          </h2>
        </FadeUp>
        <div className="grid gap-8 md:grid-cols-2">
          {[
            { t: tr("highlight1Title"), d: tr("highlight1Text") },
            { t: tr("highlight2Title"), d: tr("highlight2Text") },
            { t: tr("highlight3Title"), d: tr("highlight3Text") },
            { t: tr("highlight4Title"), d: tr("highlight4Text") }
          ].map((h, i) => (
            <FadeUp key={i} delay={i * 100}>
              <div className="bg-white/60 border border-cherry/10 rounded-2xl p-7 h-full">
                {/* H3 — card-level heading */}
                <h3 className="!text-lg !text-cherry mb-3">{h.t}</h3>
                <p className="font-body text-sm text-charcoal/80 leading-relaxed">{h.d}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Extended-stay section — Santa Fe green, replacing the previous soft pink */}
      <section className="bg-santafe-tint py-20 border-y border-santafe/15">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <FadeUp>
            {/* H2 — section heading */}
            <h2 className="!text-2xl md:!text-3xl mb-5" style={{ color: "#3f5539" }}>
              {tr("extendedStayTitle")}
            </h2>
            <p className="font-body text-charcoal/80 leading-relaxed max-w-2xl mx-auto">
              {tr("extendedStayText")}
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-20">
        <FadeUp>
          <h2 className="text-center mb-3">
            {tr("galleryTitle")}
          </h2>
          <p className="font-body text-center text-charcoal/70 mb-12 max-w-xl mx-auto">
            {tr("galleryIntro")}
          </p>
        </FadeUp>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {rooms.map((room, i) => (
            <FadeUp key={room.slug} delay={i * 80}>
              <Link
                href={`/gallery#${room.slug}`}
                className="relative block aspect-square rounded-xl overflow-hidden bg-gray-300 group"
              >
                <Image
                  src={room.images[0]}
                  alt={lang === "en" ? room.titleEn : room.titleDe}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/30 flex items-end p-3">
                  {/* H4 — small image caption/label heading */}
                  <h4 className="!text-cream !text-sm !font-body !font-medium">
                    {lang === "en" ? room.titleEn : room.titleDe}
                  </h4>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/gallery"
            className="inline-block border border-cherry text-cherry px-7 py-3 rounded-full font-body text-sm uppercase tracking-wide hover:bg-cherry hover:text-cream transition-colors"
          >
            {tr("galleryCta")}
          </Link>
        </div>
      </section>

      {/* Host + Neighbourhood */}
      <section className="max-w-6xl mx-auto px-5 py-20 grid md:grid-cols-2 gap-14">
        <FadeUp>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-300 mb-6 max-w-sm">
            <Image
              src="/images/hero/hero-2.jpg"
              alt="Amna, host of Cherry Magic Apartment"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="!text-2xl mb-2">{tr("hostTitle")}</h2>
          <h3 className="!text-lg !text-cherry mb-1">{tr("hostGreeting")}</h3>
          <p className="font-body text-sm text-charcoal/60 uppercase tracking-wide mb-4">{tr("hostName")}</p>
          <p className="font-body text-charcoal/90 leading-relaxed mb-4">{tr("hostIntroText")}</p>
          <p className="font-body text-charcoal/80 leading-relaxed mb-4">{tr("hostText")}</p>
          <p className="font-body text-sm text-charcoal/60 uppercase tracking-wide">{tr("hostLanguages")}</p>
        </FadeUp>

        <FadeUp delay={100}>
          <h2 className="!text-2xl mb-4">{tr("neighbourhoodTitle")}</h2>
          <p className="font-body text-charcoal/80 leading-relaxed mb-4">{tr("neighbourhoodText")}</p>
          <div className="bg-santafe-tint rounded-xl p-5 border border-santafe/15">
            <p className="font-body text-sm leading-relaxed" style={{ color: "#3f5539" }}>
              {tr("neighbourhoodMedical")}
            </p>
          </div>
        </FadeUp>
      </section>

      {/* Reviews — elevated card + rounded gradient divider */}
      <section className="max-w-4xl mx-auto px-5 py-20">
        <FadeUp>
          <h2 className="text-center mb-3">
            {tr("reviewsTitle")}
          </h2>
          <p className="font-body text-center text-charcoal/70 mb-12">
            {tr("reviewsSubtitle")}
          </p>
          <div className="review-card">
            <div className="review-divider" />
            <ReviewsSlider />
          </div>
        </FadeUp>
      </section>
    </div>
  );
}
