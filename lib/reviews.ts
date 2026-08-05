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
    name: "Neven",
    country: "Serbia",
    source: "Booking.com",
    rating: "10/10",
    textEn: "Amazing, bright, clean and tidy! Just perfect. We had a wonderful stay with the host. Mrs. Amna is lovely and very approachable, she helped with every question we had. We arrived with a one-year-old baby and she prepared a crib, high chair and toys for us. The apartment is extremely baby-friendly, easy to find, and in a great location. It's spacious, bright, clean and tidy. There were four adults and one baby, and we were very comfortable. Highly recommended!",
    textDe: "Fantastisch, hell, sauber und ordentlich! Einfach perfekt. Wir hatten einen wundervollen Aufenthalt bei der Gastgeberin. Frau Amna ist bezaubernd und sehr zugänglich, sie hat uns bei jeder Frage geholfen. Wir kamen mit einem einjährigen Baby an, und sie hatte ein Kinderbett, einen Hochstuhl und Spielzeug für uns vorbereitet. Das Apartment ist äußerst babyfreundlich, leicht zu finden und in einer tollen Lage. Es ist geräumig, hell, sauber und ordentlich. Wir waren zu viert plus Baby und fühlten uns sehr wohl. Sehr empfehlenswert!"
  },
  {
    name: "Nedžla",
    country: "Bosnia and Herzegovina",
    source: "Booking.com",
    rating: "10/10",
    textEn: "A beautiful apartment, very tidy, modern and fully equipped. Everything was clean and cared for down to the last detail, and the stay was very pleasant. The hosts were kind and welcoming. Definitely a place we would return to!",
    textDe: "Ein wunderschönes Apartment, sehr ordentlich, modern und komplett ausgestattet. Alles war bis ins kleinste Detail sauber und gepflegt, und der Aufenthalt war sehr angenehm. Die Gastgeber waren freundlich und einladend. Definitiv ein Ort, an den wir zurückkehren würden!"
  },
  {
    name: "Milan",
    country: "Croatia",
    source: "Booking.com",
    rating: "10/10",
    textEn: "Highly recommended, the apartment is above all clean, modern and fully equipped for a comfortable stay. The owner is kind and helpful.",
    textDe: "Sehr empfehlenswert, das Apartment ist vor allem sauber, modern und komplett ausgestattet für einen angenehmen Aufenthalt. Die Vermieterin ist freundlich und hilfsbereit."
  },
  {
    name: "Majapk",
    country: "Bosnia and Herzegovina",
    source: "Booking.com",
    rating: "10/10",
    textEn: "Exceptional. The apartment is in a great location, nicely decorated, clean and equipped with everything necessary, even single-use toiletries, with coffee, tea, sweets and snacks also available, which was a really nice touch. Mrs. Amna was very kind, always available, and communication was excellent too. I recommend it!",
    textDe: "Außergewöhnlich. Das Apartment liegt an einer tollen Lage, ist schön eingerichtet, sauber und mit allem Nötigen ausgestattet, sogar mit Einweg-Pflegeprodukten, außerdem standen Kaffee, Tee, Süßigkeiten und Snacks zur Verfügung, was eine wirklich schöne Geste war. Frau Amna war sehr freundlich, immer erreichbar, und auch die Kommunikation war ausgezeichnet. Ich empfehle es!"
  }
];
