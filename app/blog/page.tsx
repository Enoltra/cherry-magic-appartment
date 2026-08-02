"use client";

import Image from "next/image";
import { useLang } from "@/lib/i18n";
import FadeUp from "@/components/FadeUp";

export default function BlogPage() {
  const { lang } = useLang();
  return (
    <div className="max-w-3xl mx-auto px-5 py-24">
      <FadeUp>
        <p className="font-script text-3xl md:text-4xl text-cherry mb-2 text-center">Cherry Magic</p>
        <h1 className="mb-10 text-center">{lang === "en" ? "From the Blog" : "Aus dem Blog"}</h1>
      </FadeUp>

      <FadeUp delay={100}>
        <div className="rounded-2xl overflow-hidden border border-cherry/10 bg-white/60">
          <div className="relative aspect-[16/9]">
            <Image
              src="/images/blog/10-things-visit-sarajevo.jpg"
              alt={lang === "en" ? "10 Things to Do in Sarajevo" : "10 Dinge, die man in Sarajevo tun kann"}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="!text-lg !text-cherry mb-2">
              {lang === "en" ? "10 Things to Do in Sarajevo" : "10 Dinge, die man in Sarajevo tun kann"}
            </h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">
              {lang === "en"
                ? "Our top picks for exploring the city during your stay, from Baščaršija's old bazaar to the hills above Sarajevo."
                : "Unsere besten Tipps, um die Stadt während Ihres Aufenthalts zu entdecken, vom alten Bazar in Baščaršija bis zu den Hügeln über Sarajevo."}
            </p>
          </div>
        </div>
      </FadeUp>

      <FadeUp delay={150}>
        <p className="font-body text-charcoal/60 text-sm text-center mt-12">
          {lang === "en" ? "More travel guides coming soon." : "Weitere Reiseführer folgen in Kürze."}
        </p>
      </FadeUp>
    </div>
  );
}
