"use client";

import { ReactNode } from "react";
import { useLang } from "@/lib/i18n";
import FadeUp from "@/components/FadeUp";
import { GlassWater, Car, Clock, ShieldCheck, ShoppingBag, Store, Utensils, Pill, Fuel, PhoneCall, MapPin, ExternalLink } from "lucide-react";

type TipCard = {
  icon: ReactNode;
  title: string;
  badge?: string;
  mapQuery?: string;
  details: string[];
};

export default function LocalTipsPage() {
  const { lang } = useLang();
  const isDe = lang === "de";

  const essentials: TipCard[] = [
    { 
      icon: <GlassWater size={24} />,
      title: isDe ? "Trinkwasser direkt aus dem Hahn" : "Safe Drinking Water Straight from the Tap",
      badge: isDe ? "Gut zu wissen" : "Good to know",
      details: [
        isDe
          ? "Das Leitungswasser in Sarajevo ist absolut sauber, frisch und kann bedenkenlos direkt aus dem Wasserhahn getrunken werden. Sie müssen kein Flaschenwasser kaufen."
          : "Sarajevo tap water is clean, refreshing, and safe to drink straight from any tap in the apartment. There is no need to haul heavy bottled water from the shop.",
        isDe
          ? "Nehmen Sie gerne eine Trinkflasche mit auf Ihre Erkundungstouren durch die Stadt."
          : "Feel free to fill your reusable water bottles before heading out to explore the city."
      ]
    },
    {
      icon: <Car size={24} />,
      title: isDe ? "Parken vor Ort (Kostenlos & 24/7 Bewacht)" : "Parking: Free Street & 24/7 Paid Lot",
      badge: isDe ? "Park-Tipp" : "Parking tip",
      mapQuery: "Bolnicka+46+Sarajevo",
      details: [
        isDe
          ? "Kostenloses Parken an der Straße direkt vor dem Gebäude. Aufgrund des nahegelegenen Klinikzentrums ist es meist bis 13:00 Uhr sowie zwischen 16:00 und 17:00 Uhr belebter."
          : "Free street parking is available right along Bolnička street in front of the building. Due to the nearby Clinical Center, spots turn over frequently and are busiest until 1:00 PM and from 4:00 to 5:00 PM.",
        isDe
          ? "Direkt gegenüber befindet sich ein bewachter, gebührenpflichtiger Parkplatz für 1 KM pro Stunde (rund um die Uhr, 24/7 geöffnet). Ideal für stressfreies Ankommen zu jeder Tageszeit."
          : "Directly across the street is a 24/7 attended paid parking lot costing just 1 KM per hour. It offers an easy, stress-free option any time of day or night."
      ]
    },
    {
      icon: <Clock size={24} />,
      title: isDe ? "Check-in & Check-out Zeiten" : "Check-in & Departure Timing",
      details: [
        isDe
          ? "Check-in ab 15:00 Uhr (auf Anfrage früher möglich). Der schlüssellose Self-Check-in ermöglicht Ihnen eine flexible Ankunft."
          : "Check-in begins at 3:00 PM (earlier arrival upon request). Keyless self-check-in means you can arrive smoothly at your own pace.",
        isDe
          ? "Check-out bis 11:10 Uhr. Bitte geben Sie kurz per Nachricht Bescheid, sobald Sie die Schlüssel zurückgelegt und die Wohnung verlassen haben."
          : "Check-out is by 11:10 AM. Simply leave the apartment tidy, return keys as instructed, and drop us a quick text when you are on your way."
      ]
    },
    {
      icon: <ShieldCheck size={24} />,
      title: isDe ? "Gästeregistrierung & Ausweise" : "Guest Registration (Legal Requirement)",
      details: [
        isDe
          ? "Bitte senden Sie der Gastgeberin vor oder direkt bei der Ankunft ein Foto Ihres Reisepasses oder Personalausweises (per WhatsApp oder Viber) für die offizielle bosnische Touristenanmeldung."
          : "Please send a clear photo of each guest's passport or national ID via WhatsApp or Viber prior to or upon arrival. This is required by local law for official tourist registration.",
        isDe
          ? "Bei Anreise mit dem Auto aus dem Ausland teilen Sie uns bitte auch kurz Ihren Grenzübergang mit."
          : "If arriving by car from abroad, kindly let us know which border crossing point you used."
      ]
    }
  ];

  const stores: TipCard[] = [
    {
      icon: <Store size={24} />,
      title: isDe ? "24-Stunden-Supermarkt (Auch Sonntags)" : "24/7 Supermarket (Open Sundays Too)",
      badge: "24/7",
      mapQuery: "Supermarket+Bolnicka+Sarajevo",
      details: [
        isDe
          ? "An der ersten größeren Kreuzung, nur wenige Gehminuten die Straße hinunter. Perfekt für frisches Obst, Gemüse, Getränke und späte Einkäufe an jedem Wochentag."
          : "Located at the first major intersection down the street. Stocked with fresh produce, dairy, bakery items, snacks and daily essentials at any hour, including Sundays.",
        isDe
          ? "Gerade sonntags, wenn viele Geschäfte in Sarajevo geschlossen sind, ist dieser Markt eine echte Rettung."
          : "Especially valuable on Sundays when many shops across Sarajevo are closed."
      ]
    },
    {
      icon: <ShoppingBag size={24} />,
      title: isDe ? "Bäckerei Bosfor & Amko Markt" : "Bosfor Bakery & Amko Grocery",
      badge: isDe ? "2 Min zu Fuß" : "2 min walk",
      mapQuery: "Pekara+Bosfor+Bolnicka+Sarajevo",
      details: [
        isDe
          ? "Bäckerei Bosfor: Hervorragendes ofenfrisches Gebäck, Brot, Burek und Croissants für ein gemütliches Frühstück in der Wohnung."
          : "Bosfor Bakery: Freshly baked bread, croissants and warm morning pastries just steps down the street.",
        isDe
          ? "Amko Lebensmittelgeschäft: Direkt im selben Gebäude wie die Bäckerei für Milch, Kaffee, Eier und den täglichen Hygienebedarf."
          : "Amko Grocery Store: Located in the exact same building for quick pantry staples, milk, eggs and toiletries."
      ]
    },
    {
      icon: <ShoppingBag size={24} />,
      title: isDe ? "Konzum Supermarkt & Bäckereien" : "Konzum Supermarket (Zaim Šarac)",
      badge: isDe ? "1 Häuserblock entfernt" : "1 block up",
      mapQuery: "Konzum+Zaim+Sarac+Sarajevo",
      details: [
        isDe
          ? "In der Zaim-Šarac-Straße (eine Ebene oberhalb des Apartments gelegen) finden Sie einen gut sortierten Konzum-Supermarkt für Ihren Wocheneinkauf."
          : "Located on Zaim Šarac Street, one block uphill from the apartment. Ideal for a broader grocery run, household staples and international brands.",
        isDe
          ? "In der gleichen Straße befinden sich auch weitere kleine Nachbarschaftsläden und Cafés."
          : "The street also has charming neighborhood bakeries and neighborhood cafes."
      ]
    },
    {
      icon: <Utensils size={24} />,
      title: isDe ? "Buregdžinica & Ćevabdžinica" : "Authentic Buregdžinica & Ćevabdžinica",
      badge: isDe ? "Lokale Küche" : "Local food",
      mapQuery: "Buregdzinica+Cevabdzinica+Bolnicka+Sarajevo",
      details: [
        isDe
          ? "Gegenüber dem 24-Stunden-Supermarkt: Echte, traditionelle bosnische Pita unter der Sač gebacken (Burek, Sirnica, Zeljanica) und frische Ćevapi im warmen Somun."
          : "Located directly across from the 24-hour supermarket. Serving authentic Bosnian pies baked under the bell (meat, cheese, spinach) and freshly grilled ćevapi in warm somun bread.",
        isDe
          ? "Schnell, preiswert, authentisch und bei den Einheimischen im Viertel sehr beliebt."
          : "Unpretentious, affordable, and loved by Višnjik locals for a hearty lunch or quick dinner."
      ]
    },
    {
      icon: <Pill size={24} />,
      title: isDe ? "Apotheken in der Nähe" : "Pharmacies (Apoteka)",
      badge: isDe ? "In Gehweite" : "Walking distance",
      mapQuery: "Apoteka+Bolnicka+Sarajevo",
      details: [
        isDe
          ? "Apotheke 1: Direkt neben der Ćevabdžinica an der Hauptkreuzung."
          : "Pharmacy 1: Right next to the ćevabdžinica at the main intersection.",
        isDe
          ? "Apotheke 2: Eine Straße oberhalb in der Zaim-Šarac-Straße, nur wenige Minuten zu Fuß vom Apartment entfernt."
          : "Pharmacy 2: Located one level up on Zaim Šarac Street for easy access to medications, baby care items and first-aid supplies."
      ]
    },
    {
      icon: <Fuel size={24} />,
      title: isDe ? "Tankstellen in der Umgebung" : "Nearby Gas & Petrol Stations",
      badge: isDe ? "Für Autofahrer" : "For drivers",
      mapQuery: "Energopetrol+Alipasina+Sarajevo",
      details: [
        isDe
          ? "Energopetrol (Alipašina / Koševo): Nur etwa 3 bis 5 Fahrminuten unterhalb von Višnjik an der Alipašina-Hauptstraße, sehr praktisch vor Ausflügen oder vor der Abreise."
          : "Energopetrol (Alipašina / Koševo): About 3 to 5 minutes by car down from Višnjik along the main Alipašina corridor, very convenient when heading out for day trips or towards the highway.",
        isDe
          ? "INA / Energopetrol (Ciglane / Koševo) und Hifa Petrol bieten 24/7 Kraftstoff, Reifendruck-Service und Reisesnacks."
          : "Stations along Alipašina and Ciglane provide 24/7 fuel, tire pressure stations, windshield wash, and travel snacks before highway journeys."
      ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-5 py-24">
      <FadeUp>
        <p className="font-script text-3xl md:text-4xl text-cherry text-center mb-2">Cherry Magic</p>
        <h1 className="text-center mb-4">{isDe ? "Lokale Tipps & Cheat Sheet" : "Local Tips & Neighbourhood Cheat Sheet"}</h1>
        <p className="font-body text-charcoal/70 text-center max-w-2xl mx-auto mb-14">
          {isDe
            ? "Ihr praktischer Spickzettel für Višnjik und Umgebung. Alles Wichtige zu Wasser, Parken, Supermärkten und Tankstellen auf einen Blick zusammengestellt."
            : "A handy neighborhood cheat sheet for your stay in Višnjik. Everything you need to know about tap water, parking, round-the-clock groceries, bakeries and petrol stations at a glance."}
        </p>
      </FadeUp>

      <FadeUp>
        <div className="flex items-center gap-3 mb-6">
          <h2 className="!text-2xl text-charcoal">{isDe ? "Wichtige Essentials für Ihren Aufenthalt" : "Apartment & Arrival Essentials"}</h2>
        </div>
      </FadeUp>
      <div className="grid gap-6 md:grid-cols-2 mb-16">
        {essentials.map((item, i) => (
          <FadeUp key={i} delay={i * 70}>
            <div className="bg-white/70 border border-cherry/10 rounded-2xl p-6 h-full flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#353f2a]/10 text-[#353f2a]">{item.icon}</div>
                  {item.badge && (
                    <span className="text-xs uppercase tracking-wide font-medium px-3 py-1 rounded-full bg-gold/20 text-[#28251d]">
                      {item.badge}
                    </span>
                  )}
                </div>
                <h3 className="!text-lg !text-cherry mb-3">{item.title}</h3>
                <div className="space-y-2 text-sm text-charcoal/85 leading-relaxed font-body mb-4">
                  {item.details.map((d, di) => (
                    <p key={di}>{d}</p>
                  ))}
                </div>
              </div>
              {item.mapQuery && (
                <div className="pt-3 border-t border-cherry/10 mt-2">
                  <a
                    href={`https://www.google.com/maps/search/${item.mapQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wide font-medium text-cherry hover:text-cherry-dark transition-colors"
                  >
                    <MapPin size={14} />
                    <span>{isDe ? "Auf Karte ansehen" : "View on map"}</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              )}
            </div>
          </FadeUp>
        ))}
      </div>

      <FadeUp>
        <div className="flex items-center gap-3 mb-6">
          <h2 className="!text-2xl text-charcoal">{isDe ? "Einkaufen, Essen & Umgebung" : "Around the Corner: Food, Shops & Services"}</h2>
        </div>
      </FadeUp>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
        {stores.map((item, i) => (
          <FadeUp key={i} delay={i * 60}>
            <div className="bg-white/70 border border-cherry/10 rounded-2xl p-6 h-full flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-cherry/10 text-cherry">{item.icon}</div>
                  {item.badge && (
                    <span className="text-xs uppercase tracking-wide font-medium px-3 py-1 rounded-full bg-cream text-charcoal border border-cherry/20">
                      {item.badge}
                    </span>
                  )}
                </div>
                <h3 className="!text-base !text-charcoal mb-3 font-semibold">{item.title}</h3>
                <div className="space-y-2 text-xs md:text-sm text-charcoal/80 leading-relaxed font-body mb-4">
                  {item.details.map((d, di) => (
                    <p key={di}>{d}</p>
                  ))}
                </div>
              </div>
              {item.mapQuery && (
                <div className="pt-3 border-t border-cherry/10 mt-2">
                  <a
                    href={`https://www.google.com/maps/search/${item.mapQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wide font-medium text-cherry hover:text-cherry-dark transition-colors"
                  >
                    <MapPin size={14} />
                    <span>{isDe ? "Auf Karte ansehen" : "View on map"}</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              )}
            </div>
          </FadeUp>
        ))}
      </div>

      <FadeUp delay={100}>
        <div className="bg-[#eef2ea] rounded-2xl p-6 md:p-8 border border-[#353f2a]/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#353f2a] font-semibold text-lg">
              <PhoneCall size={22} />
              <span>{isDe ? "Fragen oder brauchen Sie einen persönlichen Tipp?" : "Need something specific during your stay?"}</span>
            </div>
            <p className="font-body text-sm text-[#353f2a]/90 max-w-xl leading-relaxed">
              {isDe
                ? "Amna hilft Ihnen jederzeit gern weiter, ob Restaurant-Reservierungen, Taxis oder Ausflugsideen in Sarajevo. Schreiben Sie einfach per WhatsApp oder Viber an +387 62 926 781."
                : "Amna is always just a quick message away on WhatsApp or Viber (+387 62 926 781) for restaurant recommendations, dependable taxi numbers or local pointers."}
            </p>
          </div>
          <a
            href="https://wa.me/38762926781"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#353f2a] hover:bg-[#252c1e] text-white px-6 py-3 rounded-full text-sm font-body uppercase tracking-wide transition-colors whitespace-nowrap"
          >
            {isDe ? "Host kontaktieren" : "Message Host"}
          </a>
        </div>
      </FadeUp>
    </div>
  );
}
