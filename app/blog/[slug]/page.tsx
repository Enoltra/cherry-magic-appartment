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

  const keywords = lang === "en" ? post.keywordsEn : post.keywordsDe;

  return (
    <article className="max-w-3xl mx-auto px-5 py-20">
      <FadeUp>
        {/* H1 — one per page, the article title */}
        <h1 className="mb-6">
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

      <div className="space-y-12">
        {post.sections.map((section, si) => (
          <FadeUp key={si} delay={si * 60}>
            {/* H2 — each major topic within the article */}
            <h2 className="!text-xl md:!text-2xl mb-4">
              {lang === "en" ? section.headingEn : section.headingDe}
            </h2>
            <div className="space-y-4 font-body text-charcoal/90 leading-relaxed text-base md:text-lg">
              {(lang === "en" ? section.paragraphsEn : section.paragraphsDe).map((p, pi) => (
                <p key={pi}>{p}</p>
              ))}
            </div>
          </FadeUp>
        ))}
      </div>

      <FadeUp>
        <div className="mt-14 pt-8 border-t border-cherry/10">
          {/* H6 — tiny label heading above the keyword tags */}
          <h6 className="mb-3">
            {lang === "en" ? "Related searches" : "Verwandte Suchbegriffe"}
          </h6>
          <div className="flex flex-wrap gap-2">
            {keywords.map((k) => (
              <span
                key={k}
                className="text-xs font-body uppercase tracking-wide bg-cherry/10 text-cherry px-3 py-1 rounded-full"
              >
                {k}
              </span>
            ))}
          </div>
        </div>
      </FadeUp>

      <FadeUp>
        <div className="mt-12 bg-santafe-tint rounded-2xl p-8 text-center">
          {/* H3 — CTA heading, subordinate to the page H1/H2 structure */}
          <h3 className="!text-xl mb-4" style={{ color: "#3f5539" }}>
            {lang === "en"
              ? "Ready to make Sarajevo your home base?"
              : "Bereit, Sarajevo zu Ihrer Homebase zu machen?"}
          </h3>
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
