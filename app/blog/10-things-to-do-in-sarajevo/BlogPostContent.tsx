"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import FadeUp from "@/components/FadeUp";
import { ArrowLeft, MapPin, ExternalLink } from "lucide-react";

type Restaurant = {
  name: string;
  since: string;
  descEn: string;
  descDe: string;
  address: string;
  mapQuery: string;
  price: string;
  website?: string;
  glutenFree?: boolean;
};

const restaurants: Restaurant[] = [
  {
    name: "Cevabdzinica Zeljo",
    since: "1968",
    descEn: "The most celebrated and most-visited grill in the city. Expect a queue at lunchtime.",
    descDe: "Der bekannteste und meistbesuchte Grill der Stadt. Mittags ist mit einer Warteschlange zu rechnen.",
    address: "Kundurdziluk 19-21, Bascarsija",
    mapQuery: "Cevabdzinica+Zeljo+Kundurdziluk+Sarajevo",
    price: "9-12 KM / portion of ten",
  },
  {
    name: "Petica Ferhatovic",
    since: "1957",
    descEn: "The oldest still-active cevabdzinica in Sarajevo, family-run and usually less crowded than Zeljo.",
    descDe: "Die alteste noch aktive Cevabdzinica in Sarajevo, familiengefuhrt und meist weniger uberlaufen als Zeljo.",
    address: "Bravadziluk, Bascarsija",
    mapQuery: "Petica+Ferhatovic+Bravadziluk+Sarajevo",
    price: "9-12 KM / portion of ten",
  },
  {
    name: "Cevabdzinica Nune",
    since: "1966",
    descEn: "One of the only grills in Sarajevo with a dedicated gluten-free menu, including gluten-free cevapi and sudzuk sausages, made with advance notice.",
    descDe: "Einer der wenigen Grills in Sarajevo mit einem eigenen glutenfreien Menu, inklusive glutenfreier Cevapi und Sudzuk-Wurst, auf Vorbestellung.",
    address: "Ferhadija 12, Sarajevo 71000",
    mapQuery: "Cevabdzinica+Nune+Ferhadija+12+Sarajevo",
    price: "From 6 KM (sausage) / from 11 KM (grill combo)",
    website: "https://nune.ba/en/",
    glutenFree: true,
  },
];

export default function BlogPostContent() {
  const { lang } = useLang();
  const en = lang === "en";

  return (
    <div className="max-w-3xl mx-auto px-5 py-24">
      <FadeUp>
        <Link href="/blog" className="inline-flex items-center gap-2 font-body text-sm text-cherry hover:text-cherry-dark mb-8">
          <ArrowLeft size={16} />
          {en ? "Back to Blog" : "Zuruck zum Blog"}
        </Link>
      </FadeUp>

      <FadeUp delay={50}>
        <p className="font-script text-3xl md:text-4xl text-cherry mb-2 text-center">Cherry Magic</p>
        <h1 className="mb-8 text-center">
          {en ? "10 Best Things to Do in Sarajevo" : "10 Beste Dinge, die man in Sarajevo tun kann"}
        </h1>
      </FadeUp>

      <FadeUp delay={100}>
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10">
          <Image
            src="/images/blog/10_things_visit_sarajevo.jpg"
            alt={
              en
                ? "Bascarsija old town square in Sarajevo with Sebilj fountain and Ottoman-era buildings"
                : "Bascarsija Altstadtplatz in Sarajevo mit dem Sebilj-Brunnen und osmanischen Gebauden"
            }
            fill
            className="object-cover"
            priority
          />
        </div>
      </FadeUp>

      <FadeUp delay={150}>
        <p className="font-body text-charcoal/80 leading-relaxed mb-4">
          {en
            ? "Sarajevo rewards travelers who take their time. Between the Ottoman old town, the scars and stories of recent history, and the green hills surrounding the city, there's far more here than a single afternoon can cover. This guide walks through the ten best things to do in Sarajevo, with practical details on prices, addresses, and how to get to each one, plus where to eat the best cevapi in town, including a gluten-free option."
            : "Sarajevo belohnt Reisende, die sich Zeit nehmen. Zwischen der osmanischen Altstadt, den Spuren der jungeren Geschichte und den grunen Hugeln rund um die Stadt gibt es hier weit mehr, als ein einzelner Nachmittag abdecken kann. Dieser Guide fuhrt durch die zehn besten Aktivitaten in Sarajevo, mit Preisen, Adressen und Anfahrt, sowie den besten Cevapi-Adressen der Stadt, inklusive einer glutenfreien Option."}
        </p>
        <p className="font-body text-charcoal/80 leading-relaxed mb-12">
          {en ? (
            <>
              If you're staying at{" "}
              <Link href="/" className="text-cherry underline hover:text-cherry-dark">
                Cherry Magic Apartment
              </Link>
              , you're within easy walking distance or a short tram ride of nearly everything on this list.
            </>
          ) : (
            <>
              Wenn Sie im{" "}
              <Link href="/" className="text-cherry underline hover:text-cherry-dark">
                Cherry Magic Apartment
              </Link>{" "}
              wohnen, erreichen Sie fast alles auf dieser Liste bequem zu Fuss oder mit einer kurzen Strassenbahnfahrt.
            </>
          )}
        </p>
      </FadeUp>

      {/* 1. Bascarsija */}
      <FadeUp delay={0}>
        <h3 className="!text-lg !text-cherry mb-2">
          {en ? "1. Wander Bascarsija, the Old Bazaar" : "1. Bummeln Sie durch Bascarsija, den alten Basar"}
        </h3>
        <p className="font-body text-charcoal/80 leading-relaxed mb-2">
          {en
            ? "Start in the heart of the Ottoman old town. Cobbled lanes, copper workshops, and the wooden Sebilj fountain make Bascarsija the most atmospheric place to begin any visit to Sarajevo. It's free to wander, open all day, and easily reached by tram lines 1, 2, and 3 from the city center."
            : "Beginnen Sie im Herzen der osmanischen Altstadt. Kopfsteinpflasterwege, Kupferwerkstatten und der holzerne Sebilj-Brunnen machen Bascarsija zum stimmungsvollsten Ausgangspunkt fur jeden Besuch. Der Eingang ist frei, ganztagig geoffnet und mit den Strassenbahnlinien 1, 2 und 3 leicht erreichbar."}
        </p>
        <p className="font-body text-charcoal/60 text-sm leading-relaxed mb-8">
          {en
            ? "Good to know: most of the cevapi grills, coffee houses, and craft shops in this guide are within a five-minute walk of the Sebilj fountain."
            : "Gut zu wissen: Die meisten Cevapi-Grills, Cafes und Handwerksladen in diesem Guide liegen innerhalb von funf Gehminuten vom Sebilj-Brunnen."}
        </p>
      </FadeUp>

      {/* 2. Tunnel of Hope */}
      <FadeUp delay={0}>
        <h3 className="!text-lg !text-cherry mb-2">
          {en ? "2. Visit the Sarajevo Tunnel of Hope" : "2. Besuchen Sie den Tunnel der Hoffnung"}
        </h3>
        <p className="font-body text-charcoal/80 leading-relaxed mb-3">
          {en
            ? "A moving, essential piece of the city's recent history. The preserved tunnel section and museum tell the story of the 1990s Siege of Sarajevo, the longest siege of a capital city in modern history, in a way no book can."
            : "Ein bewegendes, wichtiges Stuck der jungeren Geschichte der Stadt. Der erhaltene Tunnelabschnitt und das Museum erzahlen die Geschichte der Belagerung Sarajevos in den 1990er Jahren, der langsten Belagerung einer Hauptstadt in der modernen Geschichte."}
        </p>
        <ul className="font-body text-charcoal/80 text-sm leading-relaxed space-y-1 mb-8">
          <li className="flex items-start gap-2">
            <MapPin size={16} className="mt-0.5 shrink-0 text-cherry" />
            <span>
              {en ? "Address: " : "Adresse: "}Tuneli 1, Butmir &middot;{" "}
              <a
                href="https://www.google.com/maps/search/Sarajevo+Tunnel+of+Hope+Tuneli+1+Butmir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cherry underline hover:text-cherry-dark inline-flex items-center gap-1"
              >
                {en ? "view on map" : "auf Karte ansehen"} <ExternalLink size={12} />
              </a>
            </span>
          </li>
          <li>
            {en ? "Ticket price: " : "Eintritt: "}10 KM ({en ? "adults" : "Erwachsene"}), 5 KM ({en ? "students" : "Studenten"}) &middot;{" "}
            <a
              href="https://sarajevo.travel/en/things-to-do/tunnel-of-hope/180"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cherry underline hover:text-cherry-dark"
            >
              {en ? "official pricing" : "offizielle Preise"}
            </a>
          </li>
          <li>
            {en
              ? "Getting there: taxi or rideshare from the city center (about 15 minutes), or bus 32 toward the airport"
              : "Anfahrt: Taxi oder Rideshare vom Stadtzentrum (ca. 15 Minuten), oder Bus 32 Richtung Flughafen"}
          </li>
        </ul>
      </FadeUp>

      {/* 3. Trebevic cable car */}
      <FadeUp delay={0}>
        <h3 className="!text-lg !text-cherry mb-2">
          {en ? "3. Ride the Trebevic Cable Car" : "3. Fahren Sie mit der Trebevic-Seilbahn"}
        </h3>
        <p className="font-body text-charcoal/80 leading-relaxed mb-3">
          {en
            ? "Rebuilt in 2018 after decades out of service, the cable car whisks you up Mount Trebevic in under nine minutes for sweeping views over the whole city and the abandoned 1984 Winter Olympics bobsled track."
            : "2018 nach jahrzehntelangem Stillstand wieder aufgebaut, bringt Sie die Seilbahn in unter neun Minuten auf den Berg Trebevic, mit weitem Blick uber die Stadt und die verlassene Bob-Olympiabahn von 1984."}
        </p>
        <ul className="font-body text-charcoal/80 text-sm leading-relaxed space-y-1 mb-8">
          <li className="flex items-start gap-2">
            <MapPin size={16} className="mt-0.5 shrink-0 text-cherry" />
            <span>
              {en ? "Address: " : "Adresse: "}Hrvatin bb, Bistrik ({en ? "lower station" : "Talstation"}) &middot;{" "}
              <a
                href="https://www.google.com/maps/search/Trebevic+Cable+Car+Hrvatin+Bistrik+Sarajevo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cherry underline hover:text-cherry-dark inline-flex items-center gap-1"
              >
                {en ? "view on map" : "auf Karte ansehen"} <ExternalLink size={12} />
              </a>
            </span>
          </li>
          <li>
            {en ? "Ticket price: " : "Preis: "}30 KM {en ? "return" : "hin & zuruck"} / 20 KM {en ? "one-way for foreign visitors" : "einfach fur auslandische Besucher"}; 6 KM / 4 KM {en ? "for BiH residents" : "fur Einwohner BiH"} &middot;{" "}
            <a
              href="https://www.zicara.ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cherry underline hover:text-cherry-dark"
            >
              {en ? "official operator" : "offizieller Betreiber"}
            </a>
          </li>
          <li>{en ? "Hours: typically 09:00-17:00, extended in summer" : "Offnungszeiten: meist 09:00-17:00 Uhr, im Sommer verlangert"}</li>
        </ul>
      </FadeUp>

      {/* 4. Cevapi restaurants */}
      <FadeUp delay={0}>
        <h3 className="!text-lg !text-cherry mb-2">
          {en ? "4. Try Cevapi at a Local Grill" : "4. Probieren Sie Cevapi in einem lokalen Grillrestaurant"}
        </h3>
        <p className="font-body text-charcoal/80 leading-relaxed mb-6">
          {en
            ? "Sarajevo's signature dish: small, hand-rolled grilled minced-meat rolls served in soft somun bread with raw onion and kajmak, a rich clotted cream. A portion runs roughly 9-15 KM depending on where you go. Here are three of the best spots, including one with a full gluten-free menu."
            : "Das Wahrzeichen-Gericht Sarajevos: kleine, handgerollte gegrillte Hackfleischrollchen, serviert in weichem Somun-Brot mit roher Zwiebel und Kajmak, einer reichhaltigen Sahne. Eine Portion kostet je nach Lokal etwa 9-15 KM. Hier sind drei der besten Adressen, inklusive einer mit vollstandig glutenfreiem Menu."}
        </p>

        <div className="space-y-4 mb-10">
          {restaurants.map((r) => (
            <div key={r.name} className="rounded-xl border border-cherry/15 bg-white/60 p-5">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h4 className="!text-base !text-charcoal">{r.name}</h4>
                <span className="font-body text-xs text-charcoal/50">
                  {en ? "since" : "seit"} {r.since}
                </span>
                {r.glutenFree && (
                  <span className="font-body text-xs uppercase tracking-wide bg-[#e7ede1] text-[#353f2a] px-2 py-0.5 rounded-full">
                    {en ? "Gluten-free menu" : "Glutenfreies Menu"}
                  </span>
                )}
              </div>
              <p className="font-body text-charcoal/80 text-sm leading-relaxed mb-3">
                {en ? r.descEn : r.descDe}
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-body text-sm text-charcoal/70">
                <span className="flex items-center gap-1">
                  <MapPin size={14} className="text-cherry" /> {r.address}
                </span>
                <span>{r.price}</span>
                <a
                  href={`https://www.google.com/maps/search/${r.mapQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cherry underline hover:text-cherry-dark inline-flex items-center gap-1"
                >
                  {en ? "View on map" : "Auf Karte ansehen"} <ExternalLink size={12} />
                </a>
                {r.website && (
                  <a
                    href={r.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cherry underline hover:text-cherry-dark inline-flex items-center gap-1"
                  >
                    {en ? "Website" : "Webseite"} <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </FadeUp>

      {/* 5. Latin Bridge */}
      <FadeUp delay={0}>
        <h3 className="!text-lg !text-cherry mb-2">
          {en ? "5. See the Latin Bridge" : "5. Besichtigen Sie die Lateinerbrucke"}
        </h3>
        <p className="font-body text-charcoal/80 leading-relaxed mb-2">
          {en
            ? "The site of the June 1914 assassination that triggered the First World War, right in the city center next to the Miljacka river. Free to visit, and a five-minute walk from Bascarsija."
            : "Der Ort des Attentats vom Juni 1914, das den Ersten Weltkrieg ausloste, direkt im Stadtzentrum am Fluss Miljacka. Der Eintritt ist frei, funf Gehminuten von Bascarsija entfernt."}
        </p>
        <p className="font-body text-charcoal/60 text-sm leading-relaxed mb-8 flex items-center gap-2">
          <MapPin size={16} className="text-cherry" />
          <a
            href="https://www.google.com/maps/search/Latin+Bridge+Sarajevo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cherry underline hover:text-cherry-dark inline-flex items-center gap-1"
          >
            {en ? "View on map" : "Auf Karte ansehen"} <ExternalLink size={12} />
          </a>
        </p>
      </FadeUp>

      {/* 6. Gazi Husrev-beg Mosque */}
      <FadeUp delay={0}>
        <h3 className="!text-lg !text-cherry mb-2">
          {en ? "6. Explore the Gazi Husrev-beg Mosque" : "6. Erkunden Sie die Gazi-Husrev-Beg-Moschee"}
        </h3>
        <p className="font-body text-charcoal/80 leading-relaxed mb-2">
          {en
            ? "One of the finest examples of Ottoman architecture in the Balkans, still an active place of worship in the middle of the old town. Modest dress is required, and headscarves are available for visitors at the entrance."
            : "Eines der schonsten Beispiele osmanischer Architektur auf dem Balkan, noch immer eine aktive Gebetsstatte mitten in der Altstadt. Angemessene Kleidung ist erforderlich, Kopftucher werden am Eingang bereitgestellt."}
        </p>
        <p className="font-body text-charcoal/60 text-sm leading-relaxed mb-8">
          {en ? "Small entrance fee (a few KM), free during prayer times." : "Kleiner Eintritt (wenige KM), wahrend der Gebetszeiten kostenlos."}
        </p>
      </FadeUp>

      {/* 7. Mount Igman */}
      <FadeUp delay={0}>
        <h3 className="!text-lg !text-cherry mb-2">
          {en ? "7. Hike or Picnic on Mount Igman" : "7. Wandern oder picknicken Sie auf dem Berg Igman"}
        </h3>
        <p className="font-body text-charcoal/80 leading-relaxed mb-8">
          {en
            ? "A short drive from the city, Igman offers pine forests, hiking trails, and a peaceful escape from the summer heat, plus more 1984 Olympic infrastructure, including the ski jump towers. Best reached by taxi or rideshare, about 30 minutes from the city center."
            : "Eine kurze Fahrt von der Stadt entfernt bietet der Igman Kiefernwalder, Wanderwege und eine ruhige Auszeit von der Sommerhitze, sowie weitere Olympia-Infrastruktur von 1984, darunter die Skisprungschanzen. Am besten mit Taxi oder Rideshare erreichbar, etwa 30 Minuten vom Zentrum."}
        </p>
      </FadeUp>

      {/* 8. Historical Museum */}
      <FadeUp delay={0}>
        <h3 className="!text-lg !text-cherry mb-2">
          {en ? "8. Browse the Historical Museum of Bosnia and Herzegovina" : "8. Besuchen Sie das Historische Museum von Bosnien und Herzegowina"}
        </h3>
        <p className="font-body text-charcoal/80 leading-relaxed mb-2">
          {en
            ? "A candid, well-curated look at the Siege of Sarajevo and the country's 20th-century history, told through everyday objects rather than dry exhibits."
            : "Ein ehrlicher, gut kuratierter Blick auf die Belagerung von Sarajevo und die Geschichte des Landes im 20. Jahrhundert, erzahlt anhand von Alltagsgegenstanden statt trockener Ausstellungsstucke."}
        </p>
        <p className="font-body text-charcoal/60 text-sm leading-relaxed mb-8">
          {en ? "Address: Zmaja od Bosne 5. Ticket price: around 5 KM." : "Adresse: Zmaja od Bosne 5. Eintritt: etwa 5 KM."}
        </p>
      </FadeUp>

      {/* 9. Coffee */}
      <FadeUp delay={0}>
        <h3 className="!text-lg !text-cherry mb-2">
          {en ? "9. Drink Coffee the Bosnian Way" : "9. Trinken Sie Kaffee auf bosnische Art"}
        </h3>
        <p className="font-body text-charcoal/80 leading-relaxed mb-8">
          {en
            ? "Slow down for a dzezva of Bosnian coffee with a piece of rahat lokum. It's a ritual, not a quick espresso; the coffee is poured slowly and sipped over conversation. Any kafana in Bascarsija will do, it's less about which one and more about giving it the time it deserves."
            : "Gonnen Sie sich eine dzezva bosnischen Kaffee mit einem Stuck Rahat Lokum. Es ist ein Ritual, kein schneller Espresso; der Kaffee wird langsam eingeschenkt und in Ruhe genossen. Jede Kafana in Bascarsija eignet sich dafur, es geht weniger um den Ort als um die Zeit, die man sich dafur nimmt."}
        </p>
      </FadeUp>

      {/* 10. Yellow Fortress */}
      <FadeUp delay={0}>
        <h3 className="!text-lg !text-cherry mb-2">
          {en ? "10. Watch the Sunset from the Yellow Fortress" : "10. Beobachten Sie den Sonnenuntergang von der Gelben Festung"}
        </h3>
        <p className="font-body text-charcoal/80 leading-relaxed mb-2">
          {en
            ? "Zuta Tabija is the classic sunset spot in Sarajevo, with panoramic views over the old town's rooftops and minarets. Entry is free, and it's open daily from roughly 09:00 to 23:00."
            : "Zuta Tabija ist der klassische Ort fur den Sonnenuntergang in Sarajevo, mit Panoramablick uber die Dacher und Minarette der Altstadt. Der Eintritt ist frei, taglich geoffnet von etwa 09:00 bis 23:00 Uhr."}
        </p>
        <ul className="font-body text-charcoal/60 text-sm leading-relaxed space-y-1 mb-12">
          <li className="flex items-center gap-2">
            <MapPin size={16} className="text-cherry" />
            <a
              href="https://www.google.com/maps/search/Zuta+Tabija+Yellow+Fortress+Sarajevo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cherry underline hover:text-cherry-dark inline-flex items-center gap-1"
            >
              {en ? "View on map" : "Auf Karte ansehen"} <ExternalLink size={12} />
            </a>
          </li>
          <li>
            {en
              ? "Best time: just before sunset. During Ramadan, a cannon fires here at sundown, a tradition locals still gather for."
              : "Beste Zeit: kurz vor Sonnenuntergang. Wahrend des Ramadan wird hier bei Sonnenuntergang eine Kanone abgefeuert, eine Tradition, zu der sich noch immer Einheimische versammeln."}
          </li>
        </ul>
      </FadeUp>

      {/* FAQ */}
      <FadeUp delay={0}>
        <h2 className="mb-6 text-center">{en ? "Frequently Asked Questions" : "Haufig gestellte Fragen"}</h2>
        <div className="space-y-6 mb-16">
          <div>
            <h4 className="!text-base !text-charcoal mb-1">
              {en ? "Is two days enough to see Sarajevo?" : "Reichen zwei Tage, um Sarajevo zu sehen?"}
            </h4>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">
              {en
                ? "Two full days covers the highlights comfortably: one day for Bascarsija, the Tunnel of Hope, and the Latin Bridge, and a second for Trebevic and the Yellow Fortress."
                : "Zwei volle Tage reichen bequem fur die Highlights: ein Tag fur Bascarsija, den Tunnel der Hoffnung und die Lateinerbrucke, ein zweiter fur Trebevic und die Gelbe Festung."}
            </p>
          </div>
          <div>
            <h4 className="!text-base !text-charcoal mb-1">
              {en ? "Is Sarajevo safe for tourists?" : "Ist Sarajevo sicher fur Touristen?"}
            </h4>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">
              {en
                ? "Yes. Sarajevo is consistently rated as one of the safer capital cities in the region for tourists; the usual precautions apply, like watching belongings in crowded markets and using licensed taxis."
                : "Ja. Sarajevo gilt durchweg als eine der sichereren Hauptstadte der Region fur Touristen; die ublichen Vorsichtsmassnahmen gelten, wie das Achten auf sein Gepack auf belebten Markten und die Nutzung lizenzierter Taxis."}
            </p>
          </div>
          <div>
            <h4 className="!text-base !text-charcoal mb-1">
              {en ? "How do I get around without a car?" : "Wie komme ich ohne Auto herum?"}
            </h4>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">
              {en
                ? "Trams (lines 1, 2, 3) cover the city center well, and taxis or rideshare apps are inexpensive for trips to Trebevic, the Tunnel of Hope, or Igman."
                : "Strassenbahnen (Linien 1, 2, 3) decken das Stadtzentrum gut ab, und Taxis oder Rideshare-Apps sind gunstig fur Fahrten nach Trebevic, zum Tunnel der Hoffnung oder nach Igman."}
            </p>
          </div>
          <div>
            <h4 className="!text-base !text-charcoal mb-1">
              {en ? "What's the best time of year to visit?" : "Was ist die beste Reisezeit?"}
            </h4>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">
              {en
                ? "Late spring (May to June) and early autumn (September) offer mild weather without the summer crowds or winter cold."
                : "Spatfruhling (Mai bis Juni) und Fruhherbst (September) bieten mildes Wetter ohne die Sommerscharen oder Winterkalte."}
            </p>
          </div>
        </div>
      </FadeUp>

      <FadeUp delay={0}>
        <div className="pt-8 border-t border-cherry/10 text-center">
          <p className="font-body text-charcoal/70 mb-4">
            {en
              ? "Staying at Cherry Magic Apartment puts you a short walk from many of these spots."
              : "Im Cherry Magic Apartment sind Sie nur einen kurzen Spaziergang von vielen dieser Orte entfernt."}
          </p>
          <Link
            href="/"
            className="inline-block bg-cherry hover:bg-cherry-dark text-cream px-7 py-3 rounded-full font-body text-sm uppercase tracking-wide transition-colors"
          >
            {en ? "Back to Home" : "Zuruck zur Startseite"}
          </Link>
        </div>
      </FadeUp>
    </div>
  );
}
