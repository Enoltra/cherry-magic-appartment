export interface Review {
  name: string;
  country: string;
  source: "Booking.com";
  rating: string;
  textEn: string;
  textDe: string;
}

export const reviews: Review[] = [
  {
    name: "Evgenija",
    country: "North Macedonia",
    source: "Booking.com",
    rating: "10/10 · Exceptional",
    textEn:
      "Everything was perfect. The place is cozy, clean and the host was very kind. I highly recommend this apartment for your trip to Sarajevo.",
    textDe:
      "Alles war perfekt. Der Ort ist gemütlich, sauber und die Gastgeberin war sehr freundlich. Ich empfehle dieses Apartment für Ihre Reise nach Sarajevo sehr."
  },
  {
    name: "Neven",
    country: "Serbia",
    source: "Booking.com",
    rating: "10/10 · Exceptional",
    textEn:
      "I don't even know where to start. We had a wonderful stay with the host. Mrs. Amna is lovely and very approachable — she helped with every question we had. We arrived with a one-year-old baby and she prepared a crib, high chair and toys for us. The apartment is extremely baby-friendly, easy to find, and in a great location. It's spacious, bright, clean and tidy. There were four adults and one baby, and we were very comfortable. Highly recommended!",
    textDe:
      "Ich weiß gar nicht, wo ich anfangen soll. Wir hatten einen wunderbaren Aufenthalt bei der Gastgeberin. Frau Amna ist bezaubernd und sehr zugänglich — sie half uns bei jeder Frage. Wir kamen mit einem einjährigen Baby an, und sie hatte ein Kinderbett, einen Hochstuhl und Spielzeug für uns vorbereitet. Das Apartment ist äußerst babyfreundlich, leicht zu finden und liegt in einer großartigen Lage. Es ist geräumig, hell, sauber und ordentlich. Wir waren vier Erwachsene und ein Baby und fühlten uns sehr wohl. Sehr empfehlenswert!"
  },
  {
    name: "Majapk",
    country: "Bosnia and Herzegovina",
    source: "Booking.com",
    rating: "10/10 · Exceptional",
    textEn:
      "The apartment is in an excellent location, beautifully decorated, clean and equipped with everything necessary — even disposable personal hygiene items, coffee, tea, sweets and snacks are provided, which are really lovely touches. Mrs. Amna was very kind, always available, and communication was excellent too. I recommend it!",
    textDe:
      "Das Apartment liegt an einer ausgezeichneten Lage, ist schön eingerichtet, sauber und mit allem Notwendigen ausgestattet — sogar Einweg-Hygieneartikel, Kaffee, Tee, Süßigkeiten und Snacks werden bereitgestellt, was wirklich schöne Details sind. Frau Amna war sehr freundlich, immer erreichbar, und die Kommunikation war ebenfalls ausgezeichnet. Ich empfehle es!"
  },
  {
    name: "Nedžla",
    country: "Bosnia and Herzegovina",
    source: "Booking.com",
    rating: "10/10 · Exceptional",
    textEn:
      "A wonderful apartment, very tidy, modern and fully equipped. Everything was clean and arranged down to the last detail, and the stay was very comfortable. The hosts were kind and welcoming. Definitely a place we would return to!",
    textDe:
      "Ein wundervolles Apartment, sehr ordentlich, modern und komplett ausgestattet. Alles war bis ins kleinste Detail sauber und aufgeräumt, und der Aufenthalt war sehr angenehm. Die Gastgeber waren freundlich und einladend. Definitiv ein Ort, an den wir gerne zurückkehren würden!"
  },
  {
    name: "Milan",
    country: "Croatia",
    source: "Booking.com",
    rating: "10/10 · Exceptional",
    textEn:
      "Highly recommended — the apartment is above all clean, modern and adapted for a comfortable stay. The owner of the apartment was kind and welcoming. Every recommendation.",
    textDe:
      "Sehr empfehlenswert — das Apartment ist vor allem sauber, modern und für einen angenehmen Aufenthalt geeignet. Die Besitzerin des Apartments war freundlich und einladend. Volle Empfehlung."
  }
];
