"use client";

import { useEffect, useRef, useState } from "react";
import { reviews } from "@/lib/reviews";
import { useLang } from "@/lib/i18n";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function ReviewsSlider() {
  const { lang } = useLang();
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % reviews.length);
    }, 7000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  const go = (dir: number) => {
    setIndex((i) => (i + dir + reviews.length) % reviews.length);
  };

  const current = reviews[index];

  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="flex items-center justify-center gap-3 mb-6">
        <span className="bg-cherry text-cream text-sm font-body font-bold px-2.5 py-1 rounded-md">
          10
        </span>
        <span className="font-body text-sm text-charcoal/70">
          {lang === "en" ? "Exceptional · 7 reviews on Booking.com" : "Außergewöhnlich · 7 Bewertungen auf Booking.com"}
        </span>
      </div>

      <div className="mb-5 flex justify-center gap-1 text-gold">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={18} fill="#C79A56" strokeWidth={0} />
        ))}
      </div>

      <p className="font-heading text-xl md:text-2xl italic text-charcoal leading-relaxed min-h-[140px]">
        &ldquo;{lang === "en" ? current.textEn : current.textDe}&rdquo;
      </p>
      <p className="mt-5 font-body text-sm uppercase tracking-wide text-cherry">
        {current.name} · {current.country} · {current.source} · {current.rating}
      </p>

      <div className="flex justify-center items-center gap-6 mt-8">
        <button onClick={() => go(-1)} aria-label="Previous review" className="p-2 rounded-full border border-cherry/30 hover:bg-cherry hover:text-cream transition-colors">
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition-colors ${i === index ? "bg-cherry" : "bg-cherry/20"}`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
        <button onClick={() => go(1)} aria-label="Next review" className="p-2 rounded-full border border-cherry/30 hover:bg-cherry hover:text-cream transition-colors">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
