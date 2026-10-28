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
    titleEn: "Living Room",
    titleDe: "Wohnzimmer",
    descEn:
      "A south-facing comfortable living room with sofa seating and a coffee table. The heart of the apartment, ideal for families and groups to relax together after a day exploring Sarajevo.",
    descDe:
      "Ein nach Süden ausgerichtetes, gemütliches Wohnzimmer mit Sofa und Couchtisch. Das Herz des Apartments, ideal für Familien und Gruppen, die sich nach einem Tag in Sarajevo gemeinsam entspannen möchten.",
    images: [
      "/images/living-room/cherry-magic-living-room-06.jpeg",
      "/images/living-room/cherry-magic-living-room00001.jpeg",
      "/images/living-room/cherry-magic-living-room00002.jpeg",
      "/images/living-room/cherry-magic-living-room00003.jpeg",
      "/images/living-room/cherry-magic-living-room00004.jpeg",
      "/images/living-room/cherry-magic-living-room00005.jpeg"
    ]
  },
  {
    slug: "kitchen",
    titleEn: "Kitchen & Dining Area",
    titleDe: "Küche & Essbereich",
    descEn:
      "A complete kitchen and dining area with everything you need to cook and eat your own meals. Perfect for self-catering travellers, families and anyone on an extended stay in Sarajevo.",
    descDe:
      "Eine komplette Küche mit Essbereich und allem, was Sie zum Kochen und Essen benötigen. Perfekt für Selbstversorger, Familien und alle, die einen längeren Aufenthalt in Sarajevo planen.",
    images: [
      "/images/kitchen/cherry-magic-ktchen00006.jpeg",
      "/images/kitchen/cherry-magic-dining-room00001.jpeg",
      "/images/kitchen/cherry-magic-dining-room00002.jpeg",
      "/images/kitchen/cherry-magic-dining-room00003.jpeg",
      "/images/kitchen/cherry-magic-ktchen00001.jpeg",
      "/images/kitchen/cherry-magic-ktchen00002.jpeg",
      "/images/kitchen/cherry-magic-ktchen00003.jpeg",
      "/images/kitchen/cherry-magic-ktchen00004.jpeg",
      "/images/kitchen/cherry-magic-ktchen00005.jpeg",
      "/images/kitchen/cherry-magic-ktchen00007.jpeg",
      "/images/kitchen/cherry-magic-ktchen00008.jpeg",
      "/images/kitchen/cherry-magic-ktchen00009.jpeg"
    ]
  },
  {
    slug: "bedroom-1",
    titleEn: "Bedroom 1",
    titleDe: "Schlafzimmer 1",
    descEn:
      "A bright, cheerful bedroom with a queen sized bed. A quiet comfortable cozy room for a couple to enjoy their stay, freshly renovated and peaceful.",
    descDe:
      "Ein helles, freundliches Schlafzimmer mit Queen-Size-Bett. Ein ruhiges, gemütliches Zimmer für Paare, frisch renoviert und erholsam.",
    images: [
      "/images/bedroom/cherry-magic-bedroom1.jpeg",
      "/images/bedroom/00001cherry-magic-bedroom-1.jpeg",
      "/images/bedroom/00002cherry-magic-bedroom-1.jpeg",
      "/images/bedroom/00003cherry-magic-bedroom-1.jpeg",
      "/images/bedroom/00004cherry-magic-bedroom-1.jpeg"
    ]
  },
  {
    slug: "bedroom-2",
    titleEn: "Bedroom 2",
    titleDe: "Schlafzimmer 2",
    descEn:
      "A calm second bedroom with soft bedding. Ideal for children, an extra couple, or anyone wanting their own quiet space during the stay.",
    descDe:
      "Ein ruhiges zweites Schlafzimmer mit weicher Bettwäsche. Ideal für Kinder, ein weiteres Paar oder alle, die während des Aufenthalts ihren eigenen ruhigen Rückzugsort möchten.",
    images: [
      "/images/bedroom-2/cherry-magic-bedroom-200003.jpeg",
      "/images/bedroom-2/cherry-magic-bedroom-200001.jpeg",
      "/images/bedroom-2/cherry-magic-bedroom-200002.jpeg"
    ]
  },
  {
    slug: "bathroom",
    titleEn: "Bathroom",
    titleDe: "Badezimmer",
    descEn:
      "A clean, modern bathroom stocked with fresh towels and toiletries. Guests consistently mention how spotless the apartment feels.",
    descDe:
      "Ein sauberes, modernes Badezimmer mit frischen Handtüchern und Pflegeprodukten. Gäste erwähnen immer wieder, wie makellos sich das Apartment anfühlt.",
    images: [
      "/images/bathroom/cherry-magic-bathroom00001.jpeg",
      "/images/bathroom/cherry-magic-bathroom00002.jpeg",
      "/images/bathroom/cherry-magic-bathroom00003.jpeg",
      "/images/bathroom/cherry-magic-bathroom00004.jpeg",
      "/images/bathroom/cherry-magic-bathroom00005.jpeg",
      "/images/bathroom/cherry-magic-bathroom00006.jpeg",
      "/images/bathroom/cherry-magic-bathroom00007.jpeg",
      "/images/bathroom/cherry-magic-bathroom00008.jpeg"
    ]
  },
  {
    slug: "exterior",
    titleEn: "Exterior & Surroundings",
    titleDe: "Außenbereich & Umgebung",
    descEn:
      "A quiet residential street in the coveted Višnjik neighbourhood, with easy free street parking or nearby 24/7 paid parking. Close enough to the city centre for sightseeing, while far enough from city hustle and bustle for a proper rest.",
    descDe:
      "Eine ruhige Wohnstraße im begehrten Viertel Višnjik mit bequemen kostenlosen Straßenparkplätzen oder nahegelegenem bewachtem 24/7-Parkplatz. Nah genug am Stadtzentrum für Erkundungen, aber weit genug vom Trubel der Stadt entfernt für erholsame Ruhe.",
    images: [
      "/images/garden/cherry-magic-exterior00002.jpeg",
      "/images/garden/cherry-magic-exterior00001.jpeg",
      "/images/garden/cherry-magic-exterior00003.jpeg",
      "/images/garden/cherry-magic-exterior00004.jpeg",
      "/images/garden/cherry-magic-exterior00005.jpeg",
      "/images/garden/cherry-magic-exterior00006.jpeg",
      "/images/garden/cherry-magic-exterior00007.jpeg",
      "/images/garden/cherry-magic-exterior00008.jpeg"
    ]
  }
];
