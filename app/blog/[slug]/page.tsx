"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import { useLang } from "@/lib/i18n";
import FadeUp from "@/components/FadeUp";
import { posts } from "@/lib/posts";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { lang } = useLang();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  const content = lang === "en" ? post.contentEn : post.contentDe;
  const keywords = lang === "en" ? post.keywordsEn : post.keywordsDe;

  return (
    <article className="max-w-3xl mx-auto px-5 py-20">
      <FadeUp>
        <h1 className="font-heading text-3xl md:text-5xl text-charcoal mb-6 leading-tight">
          {lang === "en" ? post.titleEn : post.titleDe}
        </h1>
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-gray-300 mb-10">
          <Image
            src={post.cover}
            alt={lang === "en" ? post.titleEn : post.titleDe}
            fill
            className="object-cover"
          />
        </div>
      </FadeUp>

      <div className="space-y-6 font-body text-charcoal/90 leading-relaxed text-base md:text-lg">
        {content.map((p, i) => (
          <FadeUp key={i} delay={i * 60}>
            <p>{p}</p>
          </FadeUp>
        ))}
      </div>

      <FadeUp>
        <div className="mt-14 pt-8 border-t border-cherry/10 flex flex-wrap gap-2">
          {keywords.map((k) => (
            <span
              key={k}
              className="text-xs font-body uppercase tracking-wide bg-cherry/10 text-cherry px-3 py-1 rounded-full"
            >
              {k}
            </span>
          ))}
        </div>
      </FadeUp>

      <FadeUp>
        <div className="mt-12 bg-cherry/5 rounded-2xl p-8 text-center">
          <p className="font-heading text-xl text-charcoal mb-4">
            {lang === "en"
              ? "Ready to make Sarajevo your home base?"
              : "Bereit, Sarajevo zu Ihrer Homebase zu machen?"}
          </p>
          <a
            href="https://www.booking.com/hotel/ba/cherry-magic-apartment-sarajevo.en-gb.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cherry hover:bg-cherry-dark text-cream px-7 py-3 rounded-full font-body text-sm uppercase tracking-wide transition-colors"
          >
            {lang === "en" ? "Check Availability" : "Verfügbarkeit prüfen"}
          </a>
        </div>
      </FadeUp>
    </article>
  );
}
