"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "de";

type Dict = Record<string, { en: string; de: string }>;

const dict: Dict = {
  navHome: { en: "Home", de: "Startseite" },
  navGallery: { en: "Gallery", de: "Galerie" },
  navBlog: { en: "Blog", de: "Blog" },
  navBook: { en: "Book Now", de: "Jetzt buchen" },

  heroTitle: {
    en: "A Bright, Modern Sanctuary in Sarajevo's Green Heart",
    de: "Eine helle, moderne Oase im grünen Herzen von Sarajevo"
  },
  heroSubtitle: {
    en: "A fully renovated 50m² apartment in Višnjik. Quiet, leafy and residential, yet a short walk from Baščaršija and the Clinical Centre.",
    de: "Ein komplett renoviertes 50 m² Apartment in Višnjik. Ruhig, grün und wohnlich, und dennoch nur einen kurzen Spaziergang von Baščaršija und dem Klinikzentrum entfernt."
  },
  heroCta: { en: "Check Availability", de: "Verfügbarkeit prüfen" },

  factGuests: { en: "Sleeps up to 6", de: "Bis zu 6 Gäste" },
  factBedrooms: { en: "2 Bedrooms + Sofa Bed", de: "2 Schlafzimmer + Schlafsofa" },
  factKitchen: { en: "Full Kitchen", de: "Volle Küche" },
  factParking: { en: "Free Parking", de: "Kostenloser Parkplatz" },
  factWifi: { en: "Fast Wi-Fi", de: "Schnelles WLAN" },
  factAc: { en: "Air Conditioning", de: "Klimaanlage" },
  factHeating: { en: "Heating", de: "Heizung" },
  factLocation: { en: "Quiet Višnjik Neighbourhood", de: "Ruhiges Viertel Višnjik" },

  highlightsTitle: { en: "Why Guests Love It Here", de: "Warum Gäste es hier lieben" },
  highlight1Title: { en: "Recently Renovated", de: "Kürzlich renoviert" },
  highlight1Text: {
    en: "Recently renovated with a fully-equipped kitchen, air conditioning, fast Wi-Fi, and a smart lock for easy self check-in at any hour.",
    de: "Kürzlich renoviert, mit voll ausgestatteter Küche, Klimaanlage, schnellem WLAN und einem Smart-Lock für einfachen Self-Check-in zu jeder Uhrzeit."
  },
  highlight2Title: { en: "A Quiet, Green Location", de: "Eine ruhige, grüne Lage" },
  highlight2Text: {
    en: "A quiet, residential street in Višnjik. Only 15 minutes on foot to Baščaršija (Old Town) and close to Sarajevo's main medical area and private clinics.",
    de: "Eine ruhige Wohnstraße in Višnjik. Nur 15 Gehminuten von Baščaršija (Altstadt) entfernt und nah an Sarajevos wichtigem medizinischem Bereich sowie privaten Kliniken."
  },
  highlight3Title: { en: "Space for All", de: "Platz für alle" },
  highlight3Text: {
    en: "Two cozy bedrooms plus a sofa bed comfortably accommodate up to six guests, including children. Ideal for families, groups and medical visitors.",
    de: "Zwei gemütliche Schlafzimmer plus ein Schlafsofa bieten bequem Platz für bis zu sechs Gäste, auch für Kinder. Ideal für Familien, Gruppen und medizinische Besucher."
  },
  highlight4Title: { en: "Thoughtful Extras", de: "Durchdachte Extras" },
  highlight4Text: {
    en: "Baby- and family-friendly on request: a travel cot, high chair, toys, safety locks, and a toddler toilet seat with a step stool. Plus a welcome pack with local treats, hotel-quality toiletries, and a safety deposit box.",
    de: "Baby- und familienfreundlich auf Anfrage: Reisebett, Hochstuhl, Spielzeug, Sicherheitsschlösser sowie ein Kindertoilettensitz mit Trittstufe. Dazu ein Willkommenspaket mit lokalen Köstlichkeiten, hotelähnlichen Pflegeprodukten und ein Safe."
  },

  extendedStayTitle: { en: "Perfect for Extended Stays", de: "Perfekt für längere Aufenthalte" },
  extendedStayText: {
    en: "Whether you are a remote worker, a family exploring the Balkans, or visiting Sarajevo for treatment, consultations, or recovery, our fully-equipped kitchen and quiet neighbourhood offer the perfect home base for a longer stay.",
    de: "Ob Sie remote arbeiten, mit der Familie den Balkan erkunden oder wegen Behandlungen, Beratungen oder Erholung nach Sarajevo kommen, unsere voll ausgestattete Küche und die ruhige Umgebung bieten die perfekte Basis für einen längeren Aufenthalt."
  },

  galleryTitle: { en: "A Look Inside", de: "Ein Blick ins Innere" },
  exteriorLabel: { en: "Exterior", de: "Außenbereich" },
  galleryIntro: {
    en: "Explore Cherry Magic room by room. From the bright living area to the quiet bedrooms.",
    de: "Entdecken Sie Cherry Magic Raum für Raum. Vom hellen Wohnbereich bis zu den ruhigen Schlafzimmern."
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
    en: "This location is especially practical for guests visiting Sarajevo for appointments, treatment, consultations, or recovery, with several clinics and medical services within easy reach. It is also ideal for families wanting to explore Sarajevo while staying in one of the city's most beautiful, quiet and green neighbourhoods, within walking distance of the city centre.",
    de: "Diese Lage ist besonders praktisch für Gäste, die wegen Terminen, Behandlungen, Beratungen oder zur Erholung nach Sarajevo kommen, da mehrere Kliniken und medizinische Angebote leicht erreichbar sind. Sie ist zudem ideal für Familien, die Sarajevo erkunden möchten und dabei in einem der schönsten, ruhigsten und grünsten Viertel der Stadt wohnen, in Gehdistanz zum Stadtzentrum."
  },

  reviewsTitle: { en: "What Our Guests Say", de: "Was unsere Gäste sagen" },
  reviewsSubtitle: {
    en: "Here are some of our guest reviews.",
    de: "Hier sind einige unserer Gästebewertungen."
  },

  footerTagline: {
    en: "Cherry Magic Apartment: your quiet home base in Sarajevo's green Višnjik neighbourhood.",
    de: "Cherry Magic Apartment: Ihre ruhige Basis im grünen Višnjik-Viertel von Sarajevo."
  },
  footerBook: { en: "Book Your Stay", de: "Buchen Sie Ihren Aufenthalt" },
  footerNearby: { en: "Close to Baščaršija & the city centre", de: "Nahe Baščaršija & der Innenstadt" },
  navHouseRules: { en: "House Rules", de: "Hausordnung" },

  houseRulesTitle: { en: "House Rules", de: "Hausordnung" },
  houseRulesIntro: {
    en: "A few simple guidelines to help everyone feel at home during their stay.",
    de: "Ein paar einfache Hinweise, damit sich jeder während seines Aufenthalts wie zuhause fühlt."
  },
  houseRule1: {
    en: "Please take your shoes off at the door — we've left slippers for you if your feet get cold.",
    de: "Bitte ziehen Sie an der Tür Ihre Schuhe aus — wir haben Hausschuhe für Sie bereitgestellt, falls Ihnen kalt wird."
  },
  houseRule2: {
    en: "Treat the apartment like your own home: please keep it clean and tidy throughout your stay.",
    de: "Behandeln Sie das Apartment wie Ihr eigenes Zuhause: Bitte halten Sie es während Ihres Aufenthalts sauber und ordentlich."
  },
  houseRule3: {
    en: "Please handle furniture, appliances and decor with care, and let us know right away if anything gets damaged or broken.",
    de: "Bitte gehen Sie sorgsam mit Möbeln, Geräten und Dekoration um und informieren Sie uns sofort, falls etwas beschädigt wird oder kaputtgeht."
  },
  houseRule4: {
    en: "No smoking inside the apartment.",
    de: "Rauchen im Apartment ist nicht erlaubt."
  },
  houseRule5: {
    en: "No parties or events.",
    de: "Keine Partys oder Veranstaltungen."
  },
  houseRule6: {
    en: "Quiet hours are from 22:00 to 08:00 — please be considerate of the neighbours.",
    de: "Ruhezeiten gelten von 22:00 bis 08:00 Uhr — bitte nehmen Sie Rücksicht auf die Nachbarn."
  },
  houseRule7: {
    en: "Only registered guests may stay overnight; please let us know in advance about any visitors.",
    de: "Nur angemeldete Gäste dürfen übernachten; bitte informieren Sie uns im Voraus über etwaige Besucher."
  },
  houseRule8: {
    en: "No pets, unless agreed with the host in advance.",
    de: "Haustiere sind nicht erlaubt, außer nach vorheriger Absprache mit der Gastgeberin."
  },
  houseRule9: {
    en: "Check-in is from 14:00 and check-out by 11:00, unless otherwise arranged with the host.",
    de: "Check-in ist ab 14:00 Uhr und Check-out bis 11:00 Uhr, sofern nicht anders mit der Gastgeberin vereinbart."
  },
  houseRule10: {
    en: "Before you leave, please lock the door and switch off the lights, AC and any appliances.",
    de: "Bitte schließen Sie beim Verlassen die Tür ab und schalten Sie Licht, Klimaanlage und Geräte aus."
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
