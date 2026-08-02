import type { Metadata } from "next";
import BlogPostContent from "./BlogPostContent";

export const metadata: Metadata = {
  title: "10 Best Things to Do in Sarajevo (2026 Local Guide)",
  description:
    "Discover the 10 best things to do in Sarajevo: Old Town highlights, the Tunnel of Hope, Trebevic cable car, and where locals eat cevapi.",
  alternates: {
    canonical: "/blog/10-things-to-do-in-sarajevo",
  },
  openGraph: {
    title: "10 Best Things to Do in Sarajevo (2026 Local Guide)",
    description:
      "Discover the 10 best things to do in Sarajevo: Old Town highlights, the Tunnel of Hope, Trebevic cable car, and where locals eat cevapi.",
    images: ["/images/blog/10_things_visit_sarajevo.jpg"],
    type: "article",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is two days enough to see Sarajevo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Two full days covers the highlights comfortably: one day for Bascarsija, the Tunnel of Hope, and the Latin Bridge, and a second for Trebevic and the Yellow Fortress.",
      },
    },
    {
      "@type": "Question",
      name: "Is Sarajevo safe for tourists?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sarajevo is consistently rated as one of the safer capital cities in the region for tourists; the usual city precautions apply, such as watching belongings in crowded markets and using licensed taxis.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get around Sarajevo without a car?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trams (lines 1, 2, and 3) cover the city center well, and taxis or rideshare apps are inexpensive for trips to Trebevic, the Tunnel of Hope, or Mount Igman.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best time of year to visit Sarajevo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Late spring (May to June) and early autumn (September) offer mild weather without the summer crowds or winter cold.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BlogPostContent />
    </>
  );
}
