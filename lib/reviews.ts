export interface Review {
  name: string;
  source: "Booking.com" | "Airbnb" | "Agoda" | "Google";
  rating: string;
  textEn: string;
  textDe: string;
}

export const reviews: Review[] = [
  {
    name: "Amira",
    source: "Booking.com",
    rating: "10/10",
    textEn: "Everything was perfect. The place is cozy, clean and the host was very kind. I highly recommend this apartment for your trip to Sarajevo.",
    textDe: "Alles war perfekt. Der Ort ist gemütlich, sauber und der Gastgeber war sehr freundlich. Ich empfehle dieses Apartment für Ihre Reise nach Sarajevo sehr."
  },
  {
    name: "Daniel",
    source: "Agoda",
    rating: "10/10 · Exceptional",
    textEn: "Spacious and spotless apartment with free parking and a fully equipped kitchen. Felt like a real home during our stay.",
    textDe: "Geräumiges und makelloses Apartment mit kostenlosem Parkplatz und voll ausgestatteter Küche. Fühlte sich während unseres Aufenthalts wie ein echtes Zuhause an."
  },
  {
    name: "Sophie",
    source: "Airbnb",
    rating: "5.0 ★",
    textEn: "Quiet neighbourhood, easy check-in, and plenty of room for our family of four. We would happily stay again.",
    textDe: "Ruhige Nachbarschaft, einfacher Check-in und genug Platz für unsere vierköpfige Familie. Wir würden gerne wieder hier übernachten."
  },
  {
    name: "Marco",
    source: "Booking.com",
    rating: "9.8/10",
    textEn: "Great location, very accommodating host, and the apartment had everything we needed for our week-long stay.",
    textDe: "Tolle Lage, sehr entgegenkommender Gastgeber, und das Apartment hatte alles, was wir für unseren einwöchigen Aufenthalt brauchten."
  },
  {
    name: "Lea",
    source: "Google",
    rating: "5.0 ★",
    textEn: "We stayed here while visiting family at a nearby clinic. Peaceful, clean and close to pharmacies and groceries — exactly what we needed.",
    textDe: "Wir haben hier während eines Besuchs bei einer nahegelegenen Klinik gewohnt. Ruhig, sauber und in der Nähe von Apotheken und Geschäften — genau das, was wir brauchten."
  }
];
