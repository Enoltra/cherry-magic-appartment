"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "de";

type Dict = Record<string, { en: string; de: string }>;

const dict: Dict = {
  navHome: { en: "Home", de: "Startseite" },
  navGallery: { en: "Gallery", de: "Galerie" },
  navBlog: { en: "Blog", de: "Blog" },
  navLocalTips: { en: "Local Tips", de: "Lokale Tipps" },
  navBook: { en: "Book Now", de: "Jetzt buchen" },

  heroTitle: {
    en: "A Bright, Modern Home for Family Visits in Sarajevo's Green Heart",
    de: "Ein helles, modernes Zuhause für Familienbesuche im grünen Herzen von Sarajevo"
  },
  heroSubtitle: {
    en: "Room for up to six, a quiet leafy street, and everything little ones need, from a travel cot to a high chair. Baščaršija is a gentle walk away.",
    de: "Platz für bis zu sechs Gäste, eine ruhige, grüne Straße und alles, was die Kleinen brauchen, vom Reisebett bis zum Hochstuhl. Baščaršija erreichen Sie bequem zu Fuß."
  },
  heroCta: { en: "Check Availability", de: "Verfügbarkeit prüfen" },

  factGuests: { en: "Sleeps up to 6", de: "Bis zu 6 Gäste" },
  factBedrooms: { en: "2 Bedrooms + Sofa Bed", de: "2 Schlafzimmer + Schlafsofa" },
  factBaby: { en: "Baby-Friendly", de: "Babyfreundlich" },
  factKitchen: { en: "Full Kitchen", de: "Volle Küche" },
  factParking: { en: "Free Parking", de: "Kostenloser Parkplatz" },
  factWifi: { en: "Fast Wi-Fi", de: "Schnelles WLAN" },
  factAc: { en: "Air Conditioning", de: "Klimaanlage" },
  factHeating: { en: "Heating", de: "Heizung" },
  factSelfCheckin: { en: "Easy Self Check-in", de: "Einfacher Self-Check-in" },
  factLocation: { en: "Quiet Višnjik Neighbourhood", de: "Ruhiges Viertel Višnjik" },

  highlightsTitle: { en: "Why Guests Love It Here", de: "Warum Gäste es hier lieben" },
  highlight1Title: { en: "Recently Renovated", de: "Kürzlich renoviert" },
  highlight1Text: {
    en: "Recently renovated with a fully-equipped kitchen, air conditioning, fast Wi-Fi, and a smart lock for easy self check-in at any hour.",
    de: "Kürzlich renoviert, mit voll ausgestatteter Küche, Klimaanlage, schnellem WLAN und einem Smart-Lock für einfachen Self-Check-in zu jeder Uhrzeit."
  },
  highlight2Title: { en: "A Quiet, Green Location", de: "Eine ruhige, grüne Lage" },
  highlight2Text: {
    en: "A quiet yet lively residential street in Višnjik. Fifteen minutes on foot to Baščaršija (Old Town), with bakeries and supermarkets close by. Clinics and main medical center, private clinics are nearby too.",
    de: "Eine ruhige, aber lebendige Wohnstraße in Višnjik. Nur 15 Gehminuten bis Baščaršija (Altstadt), mit Bäckereien und Supermärkten gleich um die Ecke. Kliniken, das zentrale Klinikzentrum und Privatkliniken befinden sich ebenfalls in direkter Nähe."
  },
  highlight3Title: { en: "Made for Family Visits", de: "Gemacht für Familienbesuche" },
  highlight3Text: {
    en: "Two cozy bedrooms and a sofa bed make room for up to six, children included. Grandparents, cousins and kids can all come together under one roof. A welcome pack with local treats, hotel-quality toiletries and a safety deposit box completes the picture.",
    de: "Zwei gemütliche Schlafzimmer und ein Schlafsofa bieten Platz für bis zu sechs Gäste, Kinder inklusive. Großeltern, Cousins und Kinder finden unter einem Dach zusammen. Ein Willkommenspaket mit lokalen Köstlichkeiten, hotelähnlichen Pflegeprodukten und einem Zimmersafe rundet das Ganze ab."
  },
  highlight4Title: { en: "A Baby-Friendly Stay", de: "Ein babyfreundlicher Aufenthalt" },
  highlight4Text: {
    en: "Travelling with a baby? On request we set up a travel cot, high chair, toys, safety locks, and a toddler toilet seat with a step stool.",
    de: "Mit Baby unterwegs? Auf Anfrage richten wir Reisebett, Hochstuhl, Spielzeug, Sicherheitsschlösser sowie einen Kindertoilettensitz mit Trittstufe für Sie ein."
  },

  extendedStayTitle: { en: "A Home Base for Longer Stays", de: "Eine Basis für längere Aufenthalte" },
  extendedStayText: {
    en: "Whether you are coming to see relatives, travelling with children, or working remotely, the full kitchen and quiet neighbourhood make a comfortable home base for a longer stay. Doctor visits, treatments and recovery fit in easily too.",
    de: "Ob Sie Verwandte besuchen, mit Kindern reisen oder remote arbeiten: Die voll ausgestattete Küche und die ruhige Umgebung bieten eine bequeme Basis für längere Aufenthalte. Auch Arztbesuche, Behandlungen und Erholung lassen sich hier unkompliziert unterbringen."
  },

  galleryTitle: { en: "A Look Inside", de: "Ein Blick ins Innere" },
  exteriorLabel: { en: "Exterior", de: "Außenbereich" },
  galleryIntro: {
    en: "Explore Cherry Magic room by room, from sunlit living area to the quiet bedrooms.",
    de: "Entdecken Sie Cherry Magic Raum für Raum, vom sonnendurchfluteten Wohnbereich bis zu den ruhigen Schlafzimmern."
  },
  galleryCta: { en: "View Full Gallery", de: "Ganze Galerie ansehen" },

  hostTitle: { en: "Meet Your Host", de: "Lernen Sie Ihre Gastgeberin kennen" },
  hostName: { en: "Amna Kurbegović", de: "Amna Kurbegović" },
  hostGreeting: {
    en: "Hi, I'm Amna. I'll be your host!",
    de: "Hallo, ich bin Amna. Ihre Gastgeberin!"
  },
  hostIntroText: {
    en: "I take great care of every little detail so your stay feels effortless. From a spotless apartment when you arrive to a welcome pack waiting on the table, and a quick reply whenever you need something during your stay.",
    de: "Ich achte auf jedes kleine Detail, damit sich Ihr Aufenthalt mühelos anfühlt. Von einem makellosen Apartment bei Ihrer Ankunft bis zu einem Willkommenspaket auf dem Tisch und einer schnellen Antwort, wann immer Sie etwas brauchen."
  },
  hostText: {
    en: "By nature I'm a mother of two grown-up daughters, by vocation a journalist who loves to write, and by sheer passion a seasoned traveller who has explored over 45 countries, from the temples of Japan to the vibrant streets of South America. Those travels taught me exactly which little comforts make a stay special, and which small oversights to avoid. When I'm not hosting, you'll find me lost in a good book, hiking the hills around Sarajevo, or crocheting on quiet winter days. My greatest pleasure is knowing you feel perfectly at ease and inspired to explore our wonderful city. Can't wait to welcome you! 🍒",
    de: "Von Natur aus bin ich Mutter zweier erwachsener Töchter, von Beruf Journalistin mit einer Leidenschaft fürs Schreiben, und aus reiner Leidenschaft eine erfahrene Reisende, die bereits über 45 Länder erkundet hat, von den Tempeln Japans bis zu den lebendigen Straßen Südamerikas. Diese Reisen haben mir genau gezeigt, welche kleinen Details einen Aufenthalt besonders machen und welche kleinen Fehler man vermeiden sollte. Wenn ich nicht gerade Gäste empfange, vertiefe ich mich in ein gutes Buch, wandere durch die Hügel um Sarajevo oder häkle an ruhigen Wintertagen. Meine größte Freude ist es zu wissen, dass Sie sich rundum wohlfühlen und Lust haben, unsere wunderbare Stadt zu erkunden. Ich freue mich auf Sie! 🍒"
  },
  hostLanguages: { en: "Languages spoken: English, Croatian, Serbian", de: "Gesprochene Sprachen: Englisch, Kroatisch, Serbisch" },

  neighbourhoodTitle: { en: "The Višnjik Neighbourhood", de: "Das Viertel Višnjik" },
  neighbourhoodText: {
    en: "Višnjik offers the perfect balance. It is peaceful, green and residential, yet just a short walk from Sarajevo's vibrant historic heart. Charming low-rise buildings, tree-lined streets and a strong community feel meet daily conveniences like bakeries, supermarkets and authentic local eateries right around the corner.",
    de: "Višnjik bietet die perfekte Balance. Es ist ruhig, grün und wohnlich, und dennoch nur einen kurzen Spaziergang vom pulsierenden historischen Herzen Sarajevos entfernt. Charmante niedrige Gebäude, baumbestandene Straßen und ein starkes Gemeinschaftsgefühl treffen auf Bäckereien, Supermärkte und authentische lokale Lokale direkt um die Ecke."
  },
  neighbourhoodMedical: {
    en: "Families visiting relatives, little ones included, will love how quiet and green it is here, with the city centre within walking distance. Clinics and main medical center, private clinics are close by as well, which is handy if a doctor visit, treatment or appointment is part of your trip.",
    de: "Familien, die Verwandte besuchen, auch mit den Kleinsten, schätzen die Ruhe und das Grün hier, mit dem Stadtzentrum in Gehdistanz. Kliniken, das zentrale Klinikzentrum und Privatkliniken sind ebenfalls in der Nähe, praktisch, falls ein Arztbesuch, eine Behandlung oder ein Termin zur Reise gehört."
  },

  reviewsTitle: { en: "What Our Guests Say", de: "Was unsere Gäste sagen" },
  reviewsSubtitle: {
    en: "Here are some of our guest reviews.",
    de: "Hier sind einige unserer Gästebewertungen."
  },

  footerTagline: {
    en: "Cherry Magic Apartment: your quiet holiday base in Sarajevo's green Višnjik neighbourhood.",
    de: "Cherry Magic Apartment: Ihre ruhige Urlaubsbasis im grünen Višnjik-Viertel von Sarajevo."
  },
  footerBook: { en: "Book Your Stay", de: "Buchen Sie Ihren Aufenthalt" },
  footerNearby: { en: "Close to Baščaršija & the city centre", de: "Nahe Baščaršija & der Innenstadt" },
  navHouseRules: { en: "House Rules", de: "Hausordnung" },

  houseRulesTitle: { en: "House Rules", de: "Hausordnung" },
  houseRulesIntro: {
    en: "A home away from home works best with a few gentle rules. Here is what helps everyone, guests and neighbours alike, feel at ease.",
    de: "Ein Zuhause auf Zeit funktioniert am besten mit ein paar sanften Regeln. So fühlen sich alle wohl, Gäste wie Nachbarn."
  },
  houseRule1: {
    en: "Check-in is from 15:00 (earlier on request) and check-out is by 11:10 am. Need a little flexibility? Just ask and I will do my best.",
    de: "Check-in ist ab 15:00 Uhr (früher auf Anfrage), Check-out bis 11:10 Uhr. Brauchen Sie etwas Flexibilität? Fragen Sie einfach, ich tue mein Bestes."
  },
  houseRule2: {
    en: "Please send me a photo of the passport or ID of every guest before or on arrival. It is needed for the official tourist registration.",
    de: "Bitte senden Sie mir vor oder bei der Ankunft ein Foto des Reisepasses oder Ausweises aller Gäste. Es wird für die offizielle Touristenanmeldung benötigt."
  },
  houseRule3: {
    en: "Shoes off at the door, please. Slippers are waiting for you, so your feet stay warm and the floors stay happy.",
    de: "Bitte lassen Sie die Schuhe an der Tür. Hausschuhe warten schon auf Sie, damit Ihre Füße warm bleiben und der Boden sich freut."
  },
  houseRule4: {
    en: "Treat the apartment like your own home: please keep it clean and handle furniture, appliances and decor with care. Let us know right away if anything gets damaged or broken.",
    de: "Behandeln Sie das Apartment wie Ihr eigenes Zuhause: Bitte halten Sie es sauber und gehen Sie mit Möbeln, Geräten und Deko sorgsam um. Sagen Sie uns gleich Bescheid, falls etwas beschädigt wird oder kaputtgeht."
  },
  houseRule5: {
    en: "Please do not iron on the beds. The iron and a folding ironing board live in the tall kitchen cabinet, and the kitchen island has a handy socket.",
    de: "Bitte bügeln Sie nicht auf den Betten. Bügeleisen und Klappbügelbrett finden Sie im hohen Küchenschrank, und auf der Küchentheke gibt es eine praktische Steckdose."
  },
  houseRule6: {
    en: "No smoking permitted, to keep the space fresh for you and for every next guest that comes.",
    de: "Rauchen ist nicht gestattet, damit die Wohnung für Sie und jeden nachfolgenden Gast frisch bleibt."
  },
  houseRule7: {
    en: "No parties or events. This is a place for calm evenings, family dinners and good sleep.",
    de: "Keine Partys oder Veranstaltungen. Dies ist ein Ort für ruhige Abende, Familienessen und guten Schlaf."
  },
  houseRule8: {
    en: "Quiet hours are from 22:00 to 08:00. The neighbors are happier and little ones sleep better too.",
    de: "Ruhezeiten gelten von 22:00 bis 08:00 Uhr. Die Nachbarn sind zufriedener und die Kleinen schlafen auch besser."
  },
  houseRule9: {
    en: "Additional guests are allowed only upon agreement with the host. Please tell me in advance, as an extra charge per person per night applies. Unannounced guests are not possible.",
    de: "Zusätzliche Gäste sind nur nach Absprache mit der Gastgeberin erlaubt. Bitte sagen Sie mir vorher Bescheid, denn pro Person und Nacht fällt ein Aufpreis an. Unangemeldete Gäste sind nicht möglich."
  },
  houseRule10: {
    en: "No pets. Exception for Service Dogs.",
    de: "Keine Haustiere. Ausnahme für Assistenzhunde."
  },
  houseRule11: {
    en: "Leave your rubbish inside the apartment and I will take care of it. Please never leave it in front of the building. Used diapers go in the containers on the main street.",
    de: "Lassen Sie den Müll einfach im Apartment, ich kümmere mich darum. Bitte stellen Sie nichts vor das Gebäude oder die Eingangstür. Gebrauchte Windeln gehören in die Container an der Hauptstraße."
  },
  houseRule12: {
    en: "Before you leave, please put used dishes in the dishwasher (no need to run it), switch off the lights, AC and appliances, return the keys and send me a quick message that you have checked out.",
    de: "Bevor Sie abreisen, stellen Sie bitte benutztes Geschirr in die Spülmaschine (sie muss nicht laufen), schalten Sie Licht, Klimaanlage und Geräte aus, geben Sie die Schlüssel zurück und schreiben Sie mir kurz, dass Sie ausgecheckt haben."
  },
  houseGood1: {
    en: "The tap water is safe to drink straight from the tap.",
    de: "Das Leitungswasser ist sauber und kann direkt aus dem Hahn getrunken werden."
  },
  houseGood2: {
    en: "Free street parking in front of the building. It gets busy until about 13:00 and from 16:00 to 17:00 due to the nearby Clinical Centre. A paid parking lot across the street costs 1 KM per hour and is open 24/7.",
    de: "Kostenlose Straßenparkplätze vor dem Gebäude. Wegen des nahen Klinikzentrums wird es bis ca. 13:00 Uhr sowie von 16:00 bis 17:00 Uhr voller. Ein bewachter 24/7-Parkplatz gegenüber kostet 1 KM pro Stunde."
  },
  houseGood3: {
    en: "A washing machine and dryer are available for stays of 5 nights or more, on request.",
    de: "Waschmaschine und Trockner stehen bei Aufenthalten ab 5 Nächten auf Anfrage zur Verfügung."
  },
  houseGood4: {
    en: "Baby cot and high chair? Just let me know before you arrive and everything will be ready.",
    de: "Babybett und Hochstuhl gewünscht? Sagen Sie mir einfach vor der Anreise Bescheid, dann ist alles vorbereitet."
  },
  houseRulesMore: {
    en: "Looking for parking, grocery stores or local tips?",
    de: "Auf der Suche nach Parkplätzen, Geschäften oder lokalen Tipps?"
  },
  houseRulesOutro: {
    en: "Thank you for treating the property as if it were yours. Enjoy every moment in Sarajevo! 🍒",
    de: "Danke, dass Sie die Unterkunft behandeln, als wäre es Ihre eigene. Genießen Sie jeden Moment in Sarajevo! 🍒"
  }
};

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  tr: (key: string) => string;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const tr = (key: string) => dict[key]?.[lang] ?? key;
  return <LangContext.Provider value={{ lang, setLang, tr }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
