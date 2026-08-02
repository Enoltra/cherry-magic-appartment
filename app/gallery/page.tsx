"use client";

import Image from "next/image";
import { useState } from "react";
import { useLang } from "@/lib/i18n";
import FadeUp from "@/components/FadeUp";
import Lightbox from "@/components/Lightbox";
import { rooms } from "@/lib/rooms";

export default function GalleryPage() {
  const { lang } = useLang();
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number; title: string } | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-5 py-20">
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

      <FadeUp>
        <p className="font-script text-3xl md:text-4xl text-cherry text-center mb-2">Cherry Magic</p>
        <h1 className="text-center mb-6">{lang === "en" ? "A Look Inside, Room by Room" : "Ein Blick ins Innere, Raum für Raum"}</h1>
        <p className="font-body text-charcoal/70 text-center max-w-2xl mx-auto mb-16">
          {lang === "en"
            ? "Explore Cherry Magic Apartment in Sarajevo. From the bright living area to the quiet bedrooms, kitchen, bathroom and exterior surroundings."
            : "Entdecken Sie das Cherry Magic Apartment in Sarajevo. Vom hellen Wohnbereich bis zu den ruhigen Schlafzimmern, der Küche, dem Bad und dem Außenbereich."}
        </p>
      </FadeUp>

      <div className="space-y-24">
        {rooms.map((room) => (
          <section key={room.slug} id={room.slug} className="scroll-mt-24">
            <FadeUp>
              <h2 className="!text-2xl md:!text-3xl !text-cherry mb-3">{lang === "en" ? room.titleEn : room.titleDe}</h2>
              <p className="font-body text-charcoal/80 max-w-2xl mb-8 leading-relaxed">{lang === "en" ? room.descEn : room.descDe}</p>
            </FadeUp>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {room.images.map((src, i) => (
                <FadeUp key={src} delay={i * 80}>
                  <button onClick={() => setLightbox({ images: room.images, index: i, title: lang === "en" ? room.titleEn : room.titleDe })} className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-300 w-full text-left">
                    <Image src={src} alt={`${lang === "en" ? room.titleEn : room.titleDe} ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                  </button>
                </FadeUp>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
