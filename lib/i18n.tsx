"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "en" | "de";

type Dict = Record<string, { en: string; de: string }>;

export const t: Dict = {
  navHome: { en: "Home", de: "Startseite" },
  navGallery: { en: "Gallery", de: "Galerie" },
  navBlog: { en: "Blog", de: "Blog" },
  navBook: { en: "Book Now", de: "Jetzt buchen" },

  heroTitle: {
    en: "A Quiet Cherry-Red Retreat in the Heart of Sarajevo",
    de: "Ein ruhiger, kirschroter Rückzugsort im Herzen von Sarajevo"
  },
  heroSubtitle: {
    en: "Spacious, self-catering apartment for families, groups and long stays — minutes from the city centre.",
    de: "Geräumiges Apartment mit Küche für Familien, Gruppen und Langzeitaufenthalte — wenige Minuten vom Stadtzentrum entfernt."
  },
  heroCta: { en: "Check Availability", de: "Verfügbarkeit prüfen" },

  quickFactsTitle: { en: "At a Glance", de: "Auf einen Blick" },
  factGuests: { en: "Sleeps up to 5", de: "Bis zu 5 Gäste" },
  factBedrooms: { en: "2 Bedrooms", de: "2 Schlafzimmer" },
  factKitchen: { en: "Full Kitchen", de: "Voll ausgestattete Küche" },
  factParking: { en: "Free Parking", de: "Kostenlose Parkplätze" },
  factWifi: { en: "Free Wi-Fi", de: "Kostenloses WLAN" },
  factLocation: { en: "Quiet Neighbourhood", de: "Ruhige Wohngegend" },

  highlightsTitle: { en: "Why Guests Love Cherry Magic", de: "Warum Gäste Cherry Magic lieben" },
  highlight1Title: { en: "Family & Group Friendly", de: "Ideal für Familien & Gruppen" },
  highlight1Text: {
    en: "With space for up to five guests and two full bedrooms, it's a true self-catering apartment for families and friends — not a cramped hotel room.",
    de: "Mit Platz für bis zu fünf Gäste und zwei vollwertigen Schlafzimmern ist es ein echtes Apartment mit Selbstversorgung für Familien und Freunde — kein enges Hotelzimmer."
  },
  highlight2Title: { en: "Close to Everything", de: "Zentrale Lage" },
  highlight2Text: {
    en: "A short drive or tram ride from Baščaršija's old town, museums and restaurants — with the calm of a residential street to return to at night.",
    de: "Nur eine kurze Fahrt mit Auto oder Straßenbahn von der Altstadt Baščaršija, Museen und Restaurants entfernt — mit der Ruhe einer Wohnstraße für die Nacht."
  },
  highlight3Title: { en: "Fully Equipped Kitchen", de: "Voll ausgestattete Küche" },
  highlight3Text: {
    en: "Cook your own meals, store leftovers, and settle in properly — perfect for longer stays and self-catering travellers.",
    de: "Kochen Sie Ihre eigenen Mahlzeiten, lagern Sie Reste und richten Sie sich richtig ein — perfekt für längere Aufenthalte und Selbstversorger."
  },
  highlight4Title: { en: "Spotless & Well Reviewed", de: "Makellos & gut bewertet" },
  highlight4Text: {
    en: "Guests across Booking.com, Airbnb and Agoda consistently mention how clean, quiet and welcoming the apartment feels.",
    de: "Gäste auf Booking.com, Airbnb und Agoda erwähnen immer wieder, wie sauber, ruhig und einladend das Apartment ist."
  },

  extendedStayTitle: { en: "Perfect for Extended Stays", de: "Ideal für längere Aufenthalte" },
  extendedStayText: {
    en: "Whether you are a remote worker, a family exploring the Balkans, or visiting nearby institutions like KCUS or ASA Hospital, our fully-equipped kitchen and quiet neighbourhood offer the perfect home base for a longer stay.",
    de: "Ob Sie remote arbeiten, mit der Familie den Balkan erkunden oder nahegelegene Einrichtungen wie das KCUS oder das ASA Hospital besuchen — unsere voll ausgestattete Küche und die ruhige Umgebung bieten die perfekte Basis für einen längeren Aufenthalt."
  },

  reviewsTitle: { en: "What Guests Are Saying", de: "Was Gäste sagen" },
  reviewsSubtitle: {
    en: "Aggregated from verified stays on Booking.com, Airbnb and Agoda.",
    de: "Zusammengestellt aus verifizierten Aufenthalten auf Booking.com, Airbnb und Agoda."
  },

  galleryTitle: { en: "A Look Inside", de: "Ein Blick ins Innere" },
  galleryIntro: {
    en: "Explore Cherry Magic room by room — from the bright living area to the quiet bedrooms.",
    de: "Entdecken Sie Cherry Magic Raum für Raum — vom hellen Wohnbereich bis zu den ruhigen Schlafzimmern."
  },
  galleryCta: { en: "See Full Gallery", de: "Zur vollständigen Galerie" },

  blogTitle: { en: "From the Sarajevo Journal", de: "Aus dem Sarajevo Journal" },
  blogCta: { en: "Read the Guide", de: "Reiseführer lesen" },

  footerTagline: {
    en: "Cherry Magic Apartment — your quiet home base in Sarajevo.",
    de: "Cherry Magic Apartment — Ihre ruhige Basis in Sarajevo."
  },
  footerBook: { en: "Book Directly", de: "Direkt buchen" }
};

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  tr: (key: keyof typeof t) => string;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const tr = (key: keyof typeof t) => t[key][lang];
  return (
    <LangContext.Provider value={{ lang, setLang, tr }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
