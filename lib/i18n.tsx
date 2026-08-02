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
    de: "Eine helle, moderne Oase im gr\u00fcnen Herzen von Sarajevo"
  },
  heroSubtitle: {
    en: "A fully renovated 50m\u00b2 apartment in Vi\u0161njik. Quiet, leafy and residential, yet a short walk from Ba\u0161\u010dar\u0161ija and the Clinical Centre.",
    de: "Ein komplett renoviertes 50 m\u00b2 Apartment in Vi\u0161njik. Ruhig, gr\u00fcn und wohnlich, und dennoch nur einen kurzen Spaziergang von Ba\u0161\u010dar\u0161ija und dem Klinikzentrum entfernt."
  },
  heroCta: { en: "Check Availability", de: "Verf\u00fcgbarkeit pr\u00fcfen" },

  factGuests: { en: "Sleeps up to 6", de: "Bis zu 6 G\u00e4ste" },
  factBedrooms: { en: "2 Bedrooms + Sofa Bed", de: "2 Schlafzimmer + Schlafsofa" },
  factKitchen: { en: "Full Kitchen", de: "Volle K\u00fcche" },
  factParking: { en: "Free Parking", de: "Kostenloser Parkplatz" },
  factWifi: { en: "Fast Wi-Fi", de: "Schnelles WLAN" },
  factAc: { en: "Air Conditioning", de: "Klimaanlage" },
  factLocation: { en: "Quiet Vi\u0161njik Neighbourhood", de: "Ruhiges Viertel Vi\u0161njik" },

  highlightsTitle: { en: "Why Guests Love It Here", de: "Warum G\u00e4ste es hier lieben" },
  highlight1Title: { en: "Recently Renovated", de: "K\u00fcrzlich renoviert" },
  highlight1Text: {
    en: "Recently renovated with a fully-equipped kitchen, air conditioning, fast Wi-Fi, and a smart lock for easy self check-in at any hour.",
    de: "K\u00fcrzlich renoviert, mit voll ausgestatteter K\u00fcche, Klimaanlage, schnellem WLAN und einem Smart-Lock f\u00fcr einfachen Self-Check-in zu jeder Uhrzeit."
  },
  highlight2Title: { en: "A Quiet, Green Location", de: "Eine ruhige, gr\u00fcne Lage" },
  highlight2Text: {
    en: "A quiet, residential street in Vi\u0161njik. Only 15 minutes on foot to Ba\u0161\u010dar\u0161ija (Old Town) and close to Sarajevo's main medical area and private clinics.",
    de: "Eine ruhige Wohnstra\u00dfe in Vi\u0161njik. Nur 15 Gehminuten von Ba\u0161\u010dar\u0161ija (Altstadt) entfernt und nah an Sarajevos wichtigem medizinischem Bereich sowie privaten Kliniken."
  },
  highlight3Title: { en: "Space for All", de: "Platz f\u00fcr alle" },
  highlight3Text: {
    en: "Two cozy bedrooms plus a sofa bed comfortably accommodate up to six guests, including children. Ideal for families, groups and medical visitors.",
    de: "Zwei gem\u00fctliche Schlafzimmer plus ein Schlafsofa bieten bequem Platz f\u00fcr bis zu sechs G\u00e4ste, auch f\u00fcr Kinder. Ideal f\u00fcr Familien, Gruppen und medizinische Besucher."
  },
  highlight4Title: { en: "Thoughtful Extras", de: "Durchdachte Extras" },
  highlight4Text: {
    en: "A welcome pack with local treats, hotel-quality toiletries, a safety deposit box, and a baby crib & high chair available on request.",
    de: "Ein Willkommenspaket mit lokalen K\u00f6stlichkeiten, hotel\u00e4hnlichen Pflegeprodukten, einem Safe sowie einem Babybett & Hochstuhl auf Anfrage."
  },

  extendedStayTitle: { en: "Perfect for Extended Stays", de: "Perfekt f\u00fcr l\u00e4ngere Aufenthalte" },
  extendedStayText: {
    en: "Whether you are a remote worker, a family exploring the Balkans, or visiting Sarajevo for treatment, consultations, or recovery, our fully-equipped kitchen and quiet neighbourhood offer the perfect home base for a longer stay.",
    de: "Ob Sie remote arbeiten, mit der Familie den Balkan erkunden oder wegen Behandlungen, Beratungen oder Erholung nach Sarajevo kommen, unsere voll ausgestattete K\u00fcche und die ruhige Umgebung bieten die perfekte Basis f\u00fcr einen l\u00e4ngeren Aufenthalt."
  },

  galleryTitle: { en: "A Look Inside", de: "Ein Blick ins Innere" },
  exteriorLabel: { en: "Exterior", de: "Au\u00dfenbereich" },
  galleryIntro: {
    en: "Explore Cherry Magic room by room. From the bright living area to the quiet bedrooms.",
    de: "Entdecken Sie Cherry Magic Raum f\u00fcr Raum. Vom hellen Wohnbereich bis zu den ruhigen Schlafzimmern."
  },
  galleryCta: { en: "View Full Gallery", de: "Ganze Galerie ansehen" },

  hostTitle: { en: "Meet Your Host", de: "Lernen Sie Ihre Gastgeberin kennen" },
  hostName: { en: "Amna Kurbegovi\u0107", de: "Amna Kurbegovi\u0107" },
  hostGreeting: {
    en: "Hi, I'm Amna. I'll be your host!",
    de: "Hallo, ich bin Amna. Ihre Gastgeberin!"
  },
  hostIntroText: {
    en: "I take great care of every little detail so your stay feels effortless. From a spotless apartment when you arrive to a welcome pack waiting on the table, and a quick reply whenever you need something during your stay.",
    de: "Ich achte auf jedes kleine Detail, damit sich Ihr Aufenthalt m\u00fchelos anf\u00fchlt. Von einem makellosen Apartment bei Ihrer Ankunft bis zu einem Willkommenspaket auf dem Tisch und einer schnellen Antwort, wann immer Sie etwas brauchen."
  },
  hostText: {
    en: "By nature I'm a mother of two grown-up daughters, by vocation a journalist who loves to write, and by sheer passion a seasoned traveller who has explored over 45 countries, from the temples of Japan to the vibrant streets of South America. Those travels taught me exactly which little comforts make a stay special, and which small oversights to avoid. When I'm not hosting, you'll find me lost in a good book, hiking the hills around Sarajevo, or crocheting on quiet winter days. My greatest pleasure is knowing you feel perfectly at ease and inspired to explore our wonderful city. Can't wait to welcome you! \ud83c\udf52",
    de: "Von Natur aus bin ich Mutter zweier erwachsener T\u00f6chter, von Beruf Journalistin mit einer Leidenschaft f\u00fcrs Schreiben, und aus reiner Leidenschaft eine erfahrene Reisende, die bereits \u00fcber 45 L\u00e4nder erkundet hat, von den Tempeln Japans bis zu den lebendigen Stra\u00dfen S\u00fcdamerikas. Diese Reisen haben mir genau gezeigt, welche kleinen Details einen Aufenthalt besonders machen und welche kleinen Fehler man vermeiden sollte. Wenn ich nicht gerade G\u00e4ste empfange, vertiefe ich mich in ein gutes Buch, wandere durch die H\u00fcgel um Sarajevo oder h\u00e4kle an ruhigen Wintertagen. Meine gr\u00f6\u00dfte Freude ist es zu wissen, dass Sie sich rundum wohlf\u00fchlen und Lust haben, unsere wunderbare Stadt zu erkunden. Ich freue mich auf Sie! \ud83c\udf52"
  },
  hostLanguages: { en: "Languages spoken: English, Croatian, Serbian", de: "Gesprochene Sprachen: Englisch, Kroatisch, Serbisch" },

  neighbourhoodTitle: { en: "The Vi\u0161njik Neighbourhood", de: "Das Viertel Vi\u0161njik" },
  neighbourhoodText: {
    en: "Vi\u0161njik offers the perfect balance. It is peaceful, green and residential, yet just a short walk from Sarajevo's vibrant historic heart. Charming low-rise buildings, tree-lined streets and a strong community feel meet daily conveniences like bakeries, supermarkets and authentic local eateries right around the corner.",
    de: "Vi\u0161njik bietet die perfekte Balance. Es ist ruhig, gr\u00fcn und wohnlich, und dennoch nur einen kurzen Spaziergang vom pulsierenden historischen Herzen Sarajevos entfernt. Charmante niedrige Geb\u00e4ude, baumbestandene Stra\u00dfen und ein starkes Gemeinschaftsgef\u00fchl treffen auf B\u00e4ckereien, Supermarkte und authentische lokale Lokale direkt um die Ecke."
  },
  neighbourhoodMedical: {
    en: "This location is especially practical for guests visiting Sarajevo for appointments, treatment, consultations, or recovery, with several clinics and medical services within easy reach.",
    de: "Diese Lage ist besonders praktisch f\u00fcr G\u00e4ste, die wegen Terminen, Behandlungen, Beratungen oder zur Erholung nach Sarajevo kommen, da mehrere Kliniken und medizinische Angebote leicht erreichbar sind."
  },

  reviewsTitle: { en: "What Our Guests Say", de: "Was unsere G\u00e4ste sagen" },
  reviewsSubtitle: {
    en: "Here are some of our guest reviews.",
    de: "Hier sind einige unserer G\u00e4stebewertungen."
  },

  footerTagline: {
    en: "Cherry Magic Apartment: your quiet home base in Sarajevo's green Vi\u0161njik neighbourhood.",
    de: "Cherry Magic Apartment: Ihre ruhige Basis im gr\u00fcnen Vi\u0161njik-Viertel von Sarajevo."
  },
  footerBook: { en: "Book Your Stay", de: "Buchen Sie Ihren Aufenthalt" }
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
