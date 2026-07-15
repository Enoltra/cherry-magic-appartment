export interface Room {
  slug: string;
  titleEn: string;
  titleDe: string;
  descEn: string;
  descDe: string;
  images: string[];
}

export const rooms: Room[] = [
  {
    slug: "living-room",
    titleEn: "Living & Dining Area",
    titleDe: "Wohn- und Essbereich",
    descEn:
      "A bright, comfortable living room with sofa seating and a dining table — the heart of the apartment, ideal for families and groups to relax together after a day exploring Sarajevo.",
    descDe:
      "Ein helles, gemütliches Wohnzimmer mit Sofa und Esstisch — das Herz des Apartments, ideal für Familien und Gruppen, die sich nach einem Tag in Sarajevo gemeinsam entspannen möchten.",
    images: [
      "/images/living-room/living-room-1.jpg",
      "/images/living-room/living-room-2.jpg",
      "/images/living-room/living-room-3.jpg"
    ]
  },
  {
    slug: "kitchen",
    titleEn: "Fully Equipped Kitchen",
    titleDe: "Voll ausgestattete Küche",
    descEn:
      "A complete kitchen with everything you need to cook your own meals — perfect for self-catering travellers, families and anyone on an extended stay in Sarajevo.",
    descDe:
      "Eine komplette Küche mit allem, was Sie zum Kochen benötigen — perfekt für Selbstversorger, Familien und alle, die einen längeren Aufenthalt in Sarajevo planen.",
    images: [
      "/images/kitchen/kitchen-1.jpg",
      "/images/kitchen/kitchen-2.jpg"
    ]
  },
  {
    slug: "bedrooms",
    titleEn: "Bedrooms",
    titleDe: "Schlafzimmer",
    descEn:
      "Two quiet, comfortable bedrooms with soft bedding, sleeping up to five guests — a restful base whether you're sightseeing, working remotely, or visiting nearby medical institutions.",
    descDe:
      "Zwei ruhige, komfortable Schlafzimmer mit weicher Bettwäsche für bis zu fünf Gäste — eine erholsame Basis, ob beim Sightseeing, bei der Arbeit im Homeoffice oder beim Besuch nahegelegener medizinischer Einrichtungen.",
    images: [
      "/images/bedroom/bedroom-1.jpg",
      "/images/bedroom/bedroom-2.jpg",
      "/images/bedroom/bedroom-3.jpg"
    ]
  },
  {
    slug: "bathroom",
    titleEn: "Bathroom",
    titleDe: "Badezimmer",
    descEn:
      "A clean, modern bathroom stocked with fresh towels and toiletries — guests consistently mention how spotless the apartment feels.",
    descDe:
      "Ein sauberes, modernes Badezimmer mit frischen Handtüchern und Pflegeprodukten — Gäste erwähnen immer wieder, wie makellos sich das Apartment anfühlt.",
    images: [
      "/images/bathroom/bathroom-1.jpg"
    ]
  },
  {
    slug: "outdoor",
    titleEn: "Garden & Surroundings",
    titleDe: "Garten & Umgebung",
    descEn:
      "A quiet residential street with garden views and free parking — close enough to the city centre for sightseeing, calm enough for a proper rest.",
    descDe:
      "Eine ruhige Wohnstraße mit Gartenblick und kostenlosem Parkplatz — nah genug am Stadtzentrum für Sightseeing, ruhig genug für echte Erholung.",
    images: [
      "/images/garden/garden-1.jpg",
      "/images/garden/garden-2.jpg"
    ]
  }
];
