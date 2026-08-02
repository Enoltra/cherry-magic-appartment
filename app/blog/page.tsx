"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import FadeUp from "@/components/FadeUp";

export default function BlogPage() {
  const { lang } = useLang();
  const en = lang === "en";

  return (
    <div className="max-w-3xl mx-auto px-5 py-24">
      <FadeUp>
        <p className="font-script text-3xl md:text-4xl text-cherry mb-2 text-center">Cherry Magic</p>
        <h1 className="mb-10 text-center">{en ? "From the Blog" : "Aus dem Blog"}</h1>
      </FadeUp>

      <FadeUp delay={100}>
        <Link
          href="/blog/10-things-to-do-in-sarajevo"
          className="group block rounded-2xl overflow-hidden border border-cherry/10 bg-white/60 transition-shadow hover:shadow-lg"
        >
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src="/images/blog/10_things_visit_sarajevo.jpg"
              alt={
                en
                  ? "Bascarsija old town square in Sarajevo with Sebilj fountain and Ottoman-era buildings"
                  : "Bascarsija Altstadtplatz in Sarajevo mit dem Sebilj-Brunnen und osmanischen Gebauden"
              }
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h3 className="!text-lg !text-cherry mb-2 group-hover:underline">
              {en ? "10 Best Things to Do in Sarajevo" : "10 Beste Dinge, die man in Sarajevo tun kann"}
            </h3>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">
              {en
                ? "Old Town highlights, the Tunnel of Hope, the Trebevic cable car, and where locals eat the best cevapi, including a gluten-free option."
                : "Altstadt-Highlights, der Tunnel der Hoffnung, die Trebevic-Seilbahn und die besten Cevapi-Adressen der Stadt, inklusive einer glutenfreien Option."}
            </p>
            <span className="inline-block mt-4 font-body text-sm uppercase tracking-wide text-cherry group-hover:text-cherry-dark">
              {en ? "Read more ->" : "Weiterlesen ->"}
            </span>
          </div>
        </Link>
      </FadeUp>

      <FadeUp delay={150}>
        <p className="font-body text-charcoal/60 text-sm text-center mt-12">
          {en ? "More travel guides coming soon." : "Weitere Reisefuhrer folgen in Kurze."}
        </p>
      </FadeUp>
    </div>
  );
}
