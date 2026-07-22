"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import FadeUp from "@/components/FadeUp";
import { posts } from "@/lib/posts";

export default function BlogPage() {
  const { lang, tr } = useLang();

  return (
    <div className="max-w-4xl mx-auto px-5 py-20">
      <FadeUp>
        <p className="font-script text-3xl text-cherry text-center mb-2">Cherry Magic</p>
        {/* H1 — one per page */}
        <h1 className="text-center mb-14">
          {tr("blogTitle")}
        </h1>
      </FadeUp>

      <div className="space-y-10">
        {posts.map((post) => (
          <FadeUp key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="grid md:grid-cols-2 gap-6 items-center border border-cherry/10 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="relative aspect-[4/3] bg-gray-300">
                <Image
                  src={post.cover}
                  alt={lang === "en" ? post.titleEn : post.titleDe}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                {/* H2 — post title on the index list */}
                <h2 className="!text-xl md:!text-2xl mb-3">
                  {lang === "en" ? post.titleEn : post.titleDe}
                </h2>
                <p className="font-body text-charcoal/70 leading-relaxed mb-4">
                  {lang === "en" ? post.excerptEn : post.excerptDe}
                </p>
                <span className="font-body text-sm uppercase tracking-wide text-cherry">
                  {tr("blogCta")}
                </span>
              </div>
            </Link>
          </FadeUp>
        ))}
      </div>
    </div>
  );
}
