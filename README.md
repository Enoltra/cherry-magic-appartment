# Cherry Magic Apartment — Website

Official website for **Cherry Magic Apartment**, Sarajevo — a Next.js 14 + Tailwind CSS site with a bilingual (EN/DE) toggle, aggregated guest reviews, a room-by-room gallery, and a travel blog.

## Tech Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- lucide-react icons
- Deployed via Vercel

## Structure
- `/` — Homepage: hero, quick facts, highlights, extended-stay section, gallery preview, reviews slider
- `/gallery` — Full room-by-room gallery (Living Room, Kitchen, Bedrooms, Bathroom, Garden), each with SEO text + images
- `/blog` — Blog index
- `/blog/[slug]` — Individual blog post (currently: "10 Things to Do in Sarajevo for First-Time Visitors")

## Where to Upload Real Photos

Replace the grey placeholder JPGs in these folders with real photos (same filenames, or update paths in `lib/rooms.ts` / `app/page.tsx` / `lib/posts.ts`):

- `public/images/hero/` — hero-1.jpg (homepage hero), hero-2.jpg (blog cover)
- `public/images/living-room/` — living-room-1.jpg, living-room-2.jpg, living-room-3.jpg
- `public/images/kitchen/` — kitchen-1.jpg, kitchen-2.jpg
- `public/images/bedroom/` — bedroom-1.jpg, bedroom-2.jpg, bedroom-3.jpg
- `public/images/bathroom/` — bathroom-1.jpg
- `public/images/garden/` — garden-1.jpg, garden-2.jpg

You can add more images per room — just add the filename to the `images` array in `lib/rooms.ts`.

## Content You Can Edit Without Touching Layout Code
- `lib/i18n.tsx` — all homepage EN/DE text
- `lib/reviews.ts` — aggregated reviews (name, source, rating, text)
- `lib/rooms.ts` — gallery room titles/descriptions/images
- `lib/posts.ts` — blog posts, keywords, EN/DE content

## Local Development
```
npm install
npm run dev
```

## Deploy on Vercel
1. Push this repo to GitHub.
2. Import the repo in Vercel (vercel.com/new).
3. Framework preset: Next.js (auto-detected). No env vars needed.
4. Deploy — Vercel will build and host automatically on every push.

## SEO Notes
- Meta title/description/keywords set in `app/layout.tsx`, targeting: "apartments for rent in Sarajevo", "family apartment Sarajevo", "Ferienwohnung Sarajevo", etc.
- Each gallery room section has its own heading + descriptive paragraph for room-level SEO.
- Blog post includes an EN/DE keyword tag list drawn from the provided keyword research (tourism + medical-tourism angle).
- Add a `sitemap.xml` and `robots.txt` later once the domain is live (Next.js supports this via `app/sitemap.ts`).

## Future Roadmap
- Add a "Local Experiences" / services page once the host partners with local guides, linking out to Airbnb Experiences.
- Add more blog posts (itineraries, "Is Sarajevo Safe", long-stay guides).
- Swap grey placeholders for real photography.
- Consider adding a booking widget or direct contact form.
