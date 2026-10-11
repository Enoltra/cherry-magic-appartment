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
    en: "A quiet, residential street in Višnjik. Fifteen minutes on foot to Baščaršija (Old Town), with bakeries and supermarkets close by. Doctors, clinics and the main medical area are nearby too.",
    de: "Eine ruhige Wohnstraße in Višnjik. Nur 15 Gehminuten bis Baščaršija (Altstadt), mit Bäckereien und Supermärkten in der Nähe. Auch Ärzte, Kliniken und Sarajevos medizinischer Bereich sind schnell erreichbar."
  },
  highlight3Title: { en: "Made for Family Visits", de: "Gemacht für Familienbesuche" },
  highlight3Text: {
    en: "Two cozy bedrooms and a sofa bed make room for up to six, children included. Grandparents, cousins and kids can all come together under one roof.",
    de: "Zwei gemütliche Schlafzimmer und ein Schlafsofa bieten Platz für bis zu sechs Gäste, Kinder inklusive. Großeltern, Cousins und Kinder finden unter einem Dach zusammen."
  },
  highlight4Title: { en: "A Baby-Friendly Stay", de: "Ein babyfreundlicher Aufenthalt" },
  highlight4Text: {
    en: "Travelling with a baby? On request we set up a travel cot, high chair, toys, safety locks, and a toddler toilet seat with a step stool. A welcome pack with local treats, hotel-quality toiletries and a safety deposit box completes the picture.",
    de: "Mit Baby unterwegs? Auf Anfrage richten wir Reisebett, Hochstuhl, Spielzeug, Sicherheitsschlösser sowie einen Kindertoilettensitz mit Trittstufe für Sie ein. Ein Willkommenspaket mit lokalen Köstlichkeiten, hotelähnlichen Pflegeprodukten und einem Safe rundet den Aufenthalt ab."
  },

  extendedStayTitle: { en: "A Home Base for Longer Family Stays", de: "Eine Basis für längere Familienaufenthalte" },
  extendedStayText: {
    en: "Whether you are coming to see family in Sarajevo, travelling with kids, or working remotely, the full kitchen and quiet neighbourhood make a comfortable home base for a longer stay. Doctor's visits, treatments and recovery fit in easily too.",
    de: "Ob Sie Familie in Sarajevo besuchen, mit Kindern reisen oder remote arbeiten: Die voll ausgestattete Küche und die ruhige Umgebung bieten eine bequeme Basis für längere Aufenthalte. Auch Arzttermine, Behandlungen und Erholung lassen sich hier gut unterbringen."
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
    en: "Families visiting relatives, little ones included, will love how quiet and green it is here, with the city centre within walking distance. Doctors, clinics and medical services are close by as well, which is handy if a doctor's visit, treatment or appointment is part of your trip.",
    de: "Familien, die Verwandte besuchen, auch mit den Kleinsten, schätzen die Ruhe und das Grün hier, mit dem Stadtzentrum in Gehdistanz. Auch Ärzte, Kliniken und medizinische Angebote sind in der Nähe, praktisch, falls ein Arztbesuch, eine Behandlung oder ein Termin zur Reise gehört."
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
    en: "A home away from home works best with a few gentle rules. Here is what helps everyone, guests and neighbours alike, feel at ease.",
    de: "Ein Zuhause auf Zeit funktioniert am besten mit ein paar sanften Regeln. So fühlen sich alle wohl, Gäste wie Nachbarn."
  },
  houseRule1: {
    en: "Shoes off at the door, please. Slippers are waiting for you, so your feet stay warm and the floors stay happy.",
    de: "Bitte lassen Sie die Schuhe an der Tür. Hausschuhe warten schon auf Sie, damit Ihre Füße warm bleiben und der Boden sich freut."
  },
  houseRule2: {
    en: "Treat the apartment like your own home. Keep it tidy, handle things with care, and tell me right away if something breaks. It happens!",
    de: "Behandeln Sie das Apartment wie Ihr eigenes Zuhause: Halten Sie es ordentlich, gehen Sie sorgsam mit allem um und sagen Sie mir gleich Bescheid, falls etwas kaputtgeht. Das kann passieren!"
  },
  houseRule3: {
    en: "No smoking permitted. We want the apartment to stay fresh for you and for every guest after you.",
    de: "Rauchen ist nicht gestattet. So bleibt das Apartment frisch, für Sie und für jeden Gast nach Ihnen."
  },
  houseRule4: {
    en: "No parties or events. This is a place for calm evenings, family dinners and good sleep.",
    de: "Keine Partys oder Veranstaltungen. Dies ist ein Ort für ruhige Abende, Familienessen und guten Schlaf."
  },
  houseRule5: {
    en: "Quiet hours are from 22:00 to 08:00. The neighbours are lovely, and the little ones sleep better too.",
    de: "Ruhezeiten gelten von 22:00 bis 08:00 Uhr. Die Nachbarn sind reizend, und die Kleinen schlafen auch besser."
  },
  houseRule6: {
    en: "Additional guests are allowed only upon agreement with the host. Please tell me in advance and we will sort it out together.",
    de: "Zusätzliche Gäste sind nur nach Absprache mit der Gastgeberin erlaubt. Sagen Sie mir bitte vorher Bescheid, dann finden wir gemeinsam eine Lösung."
  },
  houseRule7: {
    en: "No pets. Service dogs are the one exception and are very welcome.",
    de: "Keine Haustiere. Assistenzhunde sind die einzige Ausnahme und herzlich willkommen."
  },
  houseRule8: {
    en: "Check-in is from 15:00 and check-out is by 11:10. Need a little flexibility? Just ask and I will do my best.",
    de: "Check-in ist ab 15:00 Uhr, Check-out bis 11:10 Uhr. Brauchen Sie etwas Flexibilität? Fragen Sie einfach, ich tue mein Bestes."
  },
  houseRule9: {
    en: "Before you head out, please lock the door and switch off the lights, AC and appliances. Then go enjoy Sarajevo!",
    de: "Bevor Sie losziehen, schließen Sie bitte die Tür ab und schalten Sie Licht, Klimaanlage und Geräte aus. Dann viel Freude in Sarajevo!"
  },
  houseRulesOutro: {
    en: "Thank you for treating my home as if it were yours. Enjoy every moment in Sarajevo! 🍒",
    de: "Danke, dass Sie mein Zuhause behandeln, als wäre es Ihres. Genießen Sie jeden Moment in Sarajevo! 🍒"
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
