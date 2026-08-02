"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import FadeUp from "@/components/FadeUp";
import { ArrowLeft } from "lucide-react";

export default function TenThingsSarajevoPost() {
  const { lang } = useLang();

  const sections = [
    {
      titleEn: "1. Wander Bascarsija, the Old Bazaar",
      titleDe: "1. Bummeln Sie durch Bascarsija, den alten Basar",
      textEn: "Start in the heart of the Ottoman old town. Cobbled lanes, copper workshops, and the Sebilj fountain make it the most atmospheric place to begin any visit to Sarajevo.",
      textDe: "Beginnen Sie im Herzen der osmanischen Altstadt. Kopfsteinpflasterwege, Kupferwerkstatten und der Sebilj-Brunnen machen es zum stimmungsvollsten Ausgangspunkt fur jeden Besuch in Sarajevo."
    },
    {
      titleEn: "2. Visit the Sarajevo Tunnel of Hope",
      titleDe: "2. Besuchen Sie den Tunnel der Hoffnung",
      textEn: "A moving, essential piece of the city's recent history. The preserved tunnel section and museum tell the story of the 1990s siege in a way no book can.",
      textDe: "Ein bewegendes, wichtiges Stuck der jungeren Geschichte der Stadt. Der erhaltene Tunnelabschnitt und das Museum erzahlen die Geschichte der Belagerung der 1990er Jahre auf eine Weise, wie es kein Buch kann."
    },
    {
      titleEn: "3. Ride the Trebevic Cable Car",
      titleDe: "3. Fahren Sie mit der Trebevic-Seilbahn",
      textEn: "Rebuilt after decades out of service, the cable car whisks you up Mount Trebevic for sweeping views over the whole city.",
      textDe: "Nach jahrzehntelangem Stillstand wieder aufgebaut, bringt Sie die Seilbahn auf den Berg Trebevic mit einem weiten Blick uber die ganze Stadt."
    },
    {
      titleEn: "4. Try Cevapi at a Local Grill",
      titleDe: "4. Probieren Sie Cevapi in einem lokalen Grillrestaurant",
      textEn: "Sarajevo's signature dish: small grilled minced-meat rolls served in somun bread with onions. Head to Bascarsija for the most authentic versions.",
      textDe: "Das Wahrzeichen-Gericht Sarajevos: kleine gegrillte Hackfleischrollchen, serviert in Somun-Brot mit Zwiebeln. Gehen Sie nach Bascarsija fur die authentischsten Varianten."
    },
    {
      titleEn: "5. See the Latin Bridge",
      titleDe: "5. Besichtigen Sie die Lateinerbrucke",
      textEn: "The site of the 1914 assassination that triggered the First World War, right in the city centre next to the Miljacka river.",
      textDe: "Der Ort des Attentats von 1914, das den Ersten Weltkrieg ausloste, direkt im Stadtzentrum am Fluss Miljacka."
    },
    {
      titleEn: "6. Explore the Gazi Husrev-beg Mosque",
      titleDe: "6. Erkunden Sie die Gazi-Husrev-Beg-Moschee",
      textEn: "One of the finest examples of Ottoman architecture in the Balkans, still an active place of worship in the middle of the old town.",
      textDe: "Eines der schonsten Beispiele osmanischer Architektur auf dem Balkan, noch immer eine aktive Gebetsstatte mitten in der Altstadt."
    },
    {
      titleEn: "7. Hike or Picnic on Mount Igman",
      titleDe: "7. Wandern oder picknicken Sie auf dem Berg Igman",
      textEn: "A short drive from the city, Igman offers pine forests, hiking trails, and a peaceful escape from the summer heat.",
      textDe: "Eine kurze Fahrt von der Stadt entfernt bietet der Igman Kiefernwalder, Wanderwege und eine ruhige Auszeit von der Sommerhitze."
    },
    {
      titleEn: "8. Browse the Historical Museum of Bosnia and Herzegovina",
      titleDe: "8. Besuchen Sie das Historische Museum von Bosnien und Herzegowina",
      textEn: "A candid, well-curated look at the Siege of Sarajevo and the country's 20th-century history, told through everyday objects.",
      textDe: "Ein ehrlicher, gut kuratierter Blick auf die Belagerung von Sarajevo und die Geschichte des Landes im 20. Jahrhundert, erzahlt anhand von Alltagsgegenstanden."
    },
    {
      titleEn: "9. Drink Coffee the Bosnian Way",
      titleDe: "9. Trinken Sie Kaffee auf bosnische Art",
      textEn: "Slow down for a dzezva of Bosnian coffee with a piece of lokum. It's a ritual, not a quick espresso, so leave time to enjoy it.",
      textDe: "Gonnen Sie sich eine dzezva bosnischen Kaffee mit einem Stuck Lokum. Es ist ein Ritual, kein schneller Espresso, also nehmen Sie sich Zeit dafur."
    },
    {
      titleEn: "10. Watch the Sunset from the Yellow Fortress",
      titleDe: "10. Beobachten Sie den Sonnenuntergang von der Gelben Festung",
      textEn: "Zuta Tabija is the classic sunset spot in Sarajevo, with panoramic views over the old town's rooftops and minarets.",
      textDe: "Zuta Tabija ist der klassische Ort fur den Sonnenuntergang in Sarajevo, mit Panoramablick uber die Dacher und Minarette der Altstadt."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-5 py-24">
      <FadeUp>
        <Link href="/blog" className="inline-flex items-center gap-2 font-body text-sm text-cherry hover:text-cherry-dark mb-8">
          <ArrowLeft size={16} />
          {lang === "en" ? "Back to Blog" : "Zuruck zum Blog"}
        </Link>
      </FadeUp>

      <FadeUp delay={50}>
        <p className="font-script text-3xl md:text-4xl text-cherry mb-2 text-center">Cherry Magic</p>
        <h1 className="mb-8 text-center">
          {lang === "en" ? "10 Things to Do in Sarajevo" : "10 Dinge, die man in Sarajevo tun kann"}
        </h1>
      </FadeUp>

      <FadeUp delay={100}>
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10">
          <Image
            src="/images/blog/10_things_visit_sarajevo.jpg"
            alt={lang === "en" ? "10 Things to Do in Sarajevo" : "10 Dinge, die man in Sarajevo tun kann"}
            fill
            className="object-cover"
          />
        </div>
      </FadeUp>

      <FadeUp delay={150}>
        <p className="font-body text-charcoal/80 leading-relaxed mb-12">
          {lang === "en"
            ? "Sarajevo rewards travellers who take their time. Between the Ottoman old town, the scars and stories of recent history, and the green hills surrounding the city, there's far more here than a single afternoon can cover. Here are ten highlights to build your visit around."
            : "Sarajevo belohnt Reisende, die sich Zeit nehmen. Zwischen der osmanischen Altstadt, den Spuren und Geschichten der jungeren Vergangenheit und den grunen Hugeln rund um die Stadt gibt es hier weit mehr, als ein einzelner Nachmittag abdecken kann. Hier sind zehn Highlights, um Ihren Besuch zu planen."}
        </p>
      </FadeUp>

      <div className="space-y-8">
        {sections.map((s, i) => (
          <FadeUp key={i} delay={i * 60}>
            <h3 className="!text-lg !text-cherry mb-2">{lang === "en" ? s.titleEn : s.titleDe}</h3>
            <p className="font-body text-charcoal/80 leading-relaxed">{lang === "en" ? s.textEn : s.textDe}</p>
          </FadeUp>
        ))}
      </div>

      <FadeUp delay={sections.length * 60 + 100}>
        <div className="mt-16 pt-8 border-t border-cherry/10 text-center">
          <p className="font-body text-charcoal/70 mb-4">
            {lang === "en"
              ? "Staying at Cherry Magic Apartment puts you a short walk from many of these spots."
              : "Im Cherry Magic Apartment sind Sie nur einen kurzen Spaziergang von vielen dieser Orte entfernt."}
          </p>
          <Link
            href="/"
            className="inline-block bg-cherry hover:bg-cherry-dark text-cream px-7 py-3 rounded-full font-body text-sm uppercase tracking-wide transition-colors"
          >
            {lang === "en" ? "Back to Home" : "Zuruck zur Startseite"}
          </Link>
        </div>
      </FadeUp>
    </div>
  );
}
