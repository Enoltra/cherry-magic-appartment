export interface Review {
  name: string;
  country: string;
  source: string;
  rating: string;
  textEn: string;
  textDe: string;
}

export const reviews: Review[] = [
  {
    name: "Elena",
    country: "Slovenia",
    source: "Booking.com",
    rating: "10/10",
    textEn: "Spotless apartment in a quiet, green neighbourhood. Amna was incredibly responsive and thoughtful with every little detail.",
    textDe: "Makelloses Apartment in einer ruhigen, grünen Gegend. Amna war unglaublich aufmerksam und hat an jedes kleine Detail gedacht."
  },
  {
    name: "Marco",
    country: "Italy",
    source: "Booking.com",
    rating: "9.6/10",
    textEn: "Perfect base for exploring Sarajevo. Free parking made everything so much easier, and the kitchen was fully stocked.",
    textDe: "Perfekte Basis, um Sarajevo zu erkunden. Der kostenlose Parkplatz hat alles erleichtert, und die Küche war voll ausgestattet."
  },
  {
    name: "Sophie",
    country: "France",
    source: "Booking.com",
    rating: "10/10",
    textEn: "We stayed for two weeks and it felt like home. Comfortable beds, quiet street, and a genuinely warm welcome.",
    textDe: "Wir waren zwei Wochen dort und es fühlte sich wie zu Hause an. Bequeme Betten, ruhige Straße und ein herzlicher Empfang."
  },
  {
    name: "David",
    country: "United Kingdom",
    source: "Booking.com",
    rating: "9.8/10",
    textEn: "Communication was excellent from booking to check-out. Great location, close to the old town but wonderfully calm at night.",
    textDe: "Die Kommunikation war von der Buchung bis zum Check-out ausgezeichnet. Tolle Lage, nah an der Altstadt, aber nachts wunderbar ruhig."
  }
];
