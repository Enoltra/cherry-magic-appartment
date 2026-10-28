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
  priceEn: string;
  priceDe: string;
  website?: string;
  glutenFree?: boolean;
};

const restaurants: Restaurant[] = [
  {
    name: "Ćevabdžinica Željo",
    since: "1968",
    descEn: "Named after the historic Sarajevo football club Željezničar, Željo is arguably the most famous grill in the Balkans. Sizzling beef ćevapi are served inside a charred somun with a massive scoop of kajmak and raw onions. Expect a lively crowd and quick turnover at lunchtime.",
    descDe: "Benannt nach dem traditionsreichen Fußballverein Željezničar, ist Željo der wohl berühmteste Grill des Balkans. Saftige Rindfleisch-Ćevapi werden im ofenfrischen Somun mit reichlich Kajmak und Zwiebeln serviert. Mittags ist es lebendig und voll.",
    address: "Kundurdžiluk 19-21, Baščaršija",
    mapQuery: "Cevabdzinica+Zeljo+Kundurdziluk+Sarajevo",
    priceEn: "9-12 KM / portion of ten",
    priceDe: "9-12 KM / Portion mit zehn Stück",
  },
  {
    name: "Petica Ferhatović",
    since: "1957",
    descEn: "Founded by legendary footballer Asim Ferhatović Hase, Petica has guarded its family recipe for decades. It is celebrated for its slightly more tender texture, traditional brass serving plates, and a welcoming old-world atmosphere along Bravadžiluk street.",
    descDe: "Gegründet von der Fußballlegende Asim Ferhatović Hase, hütet Petica ihr Familienrezept seit Generationen. Bekannt für besonders zartes Fleisch, traditionelle Servierteller und gemütliches Ambiente in der Bravadžiluk-Gasse.",
    address: "Bravadžiluk, Baščaršija",
    mapQuery: "Petica+Ferhatovic+Bravadziluk+Sarajevo",
    priceEn: "9-12 KM / portion of ten",
    priceDe: "9-12 KM / Portion mit zehn Stück",
  },
  {
    name: "Ćevabdžinica Nune",
    since: "1966",
    descEn: "A historic spot tucked right off Ferhadija pedestrian street that became a pioneer by introducing dedicated gluten-free options. With advance notice, they prepare gluten-free ćevapi and sudžuk sausages on separate grill surfaces for celiac travelers.",
    descDe: "Ein traditionsreiches Lokal direkt an der Fußgängerzone Ferhadija, das für Zöliakie-Betroffene Pionierarbeit leistet. Nach Voranmeldung werden glutenfreie Ćevapi und Sudžuk-Würste auf separaten Grillflächen zubereitet.",
    address: "Ferhadija 12, Sarajevo",
    mapQuery: "Cevabdzinica+Nune+Ferhadija+12+Sarajevo",
    priceEn: "From 6 KM (sausage) / from 11 KM (grill combo)",
    priceDe: "Ab 6 KM (Wurst) / ab 11 KM (Grillteller)",
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
          {en ? "Back to Blog" : "Zurück zum Blog"}
        </Link>
      </FadeUp>

      <FadeUp delay={50}>
        <p className="font-script text-3xl md:text-4xl text-cherry mb-2 text-center">Cherry Magic</p>
        <h1 className="mb-8 text-center">
          {en ? "10 Best Things to Do in Sarajevo" : "Die 10 besten Dinge, die du in Sarajevo erleben kannst"}
        </h1>
      </FadeUp>

      <FadeUp delay={100}>
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10">
          <Image
            src="/images/blog/10_things_visit_sarajevo.jpg"
            alt={
              en
                ? "Baščaršija old town square in Sarajevo with Sebilj fountain and Ottoman-era buildings"
                : "Baščaršija Altstadtplatz in Sarajevo mit dem Sebilj-Brunnen und osmanischen Gebäuden"
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
            ? "Sarajevo rewards travelers who slow down and listen. Few cities on earth pack such layered civilizational history into a walkable valley: Ottoman stone domes give way to neoclassical Austro-Hungarian facades in the space of a single street corner. Here, the muezzin's call to prayer intertwines with church bells, and centuries-old copper craftsmanship thrives beside vibrant modern cafe culture."
            : "Sarajevo belohnt Reisende, die sich Zeit nehmen. Nur wenige Städte weltweit vereinen so viele geschichtliche Epochen in einem einzigen Tal: Osmanische Kuppeln gehen nahtlos in österreichisch-ungarische Prachtbauten über. Hier klingen Gebetsrufe und Kirchenglocken nebeneinander, während jahrhundertealtes Handwerk und moderne Kaffeehauskultur Hand in Hand gehen."}
        </p>
        <p className="font-body text-charcoal/80 leading-relaxed mb-12">
          {en ? (
            <>
              Staying at{" "}
              <Link href="/" className="text-cherry underline hover:text-cherry-dark">
                Cherry Magic Apartment
              </Link>
              , you are nestled in a peaceful, green residential pocket in Višnjik, just a gentle downhill stroll from the lively historical quarter.
            </>
          ) : (
            <>
              Wenn du im{" "}
              <Link href="/" className="text-cherry underline hover:text-cherry-dark">
                Cherry Magic Apartment
              </Link>{" "}
              wohnst, genießt du die grüne Ruhe des Viertels Višnjik und erreichst die historische Altstadt bequem zu Fuß in wenigen Minuten bergab.
            </>
          )}
        </p>
      </FadeUp>

      {/* 1. Bascarsija */}
      <FadeUp delay={0}>
        <h3 className="!text-lg !text-cherry mb-2">
          {en ? "1. Wander Baščaršija & Drink from the Sebilj" : "1. Bummle durch die Baščaršija & trinke am Sebilj"}
        </h3>
        <p className="font-body text-charcoal/80 leading-relaxed mb-3">
          {en
            ? "Founded in the mid-15th century by Isa-Beg Ishaković, Baščaršija was the Ottoman trading powerhouse of the western Balkans. Its network of alleys was originally divided by craft guild: Kazandžiluk for coppersmiths whose rhythmic hammering still echoes today, Sarači for leatherworkers, and Bravadžiluk for metalworkers and cooks. At its northern entrance stands the iconic wooden Sebilj fountain, built in pseudo-Moorish style in 1753. Local lore promises that whoever drinks from its carved wooden faucets is destined to return to Sarajevo one day."
            : "Gegründet im 15. Jahrhundert von Isa-Beg Ishaković, war die Baščaršija das wirtschaftliche Herz des osmanischen Balkans. Die Gassen waren traditionell nach Zünften geordnet: Kazandžiluk für Kupferschmiede, deren Hämmern bis heute durch die Straßen hallt, Sarači für Lederhandwerker und Bravadžiluk für Schlosser und Köche. Am Marktplatz steht der berühmte Sebilj-Brunnen aus dem Jahr 1753. Einer alten Legende nach kehrt jeder, der aus diesem Brunnen trinkt, eines Tages nach Sarajevo zurück."}
        </p>
        <p className="font-body text-charcoal/60 text-sm leading-relaxed mb-8 flex items-center gap-2">
          <MapPin size={16} className="text-cherry" />
          <a
            href="https://www.google.com/maps/search/Sebilj+Bascarsija+Sarajevo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cherry underline hover:text-cherry-dark inline-flex items-center gap-1"
          >
            {en ? "View on map" : "Auf Karte ansehen"} <ExternalLink size={12} />
          </a>
        </p>
      </FadeUp>

      {/* 2. Tunnel of Hope */}
      <FadeUp delay={0}>
        <h3 className="!text-lg !text-cherry mb-2">
          {en ? "2. Visit the Sarajevo Tunnel of Hope (Tunel Spasa)" : "2. Besuche den Tunnel der Hoffnung (Tunel Spasa)"}
        </h3>
        <p className="font-body text-charcoal/80 leading-relaxed mb-3">
          {en
            ? "During the 1,425-day Siege of Sarajevo (1992-1996), the longest siege of a capital city in modern military history, the city was completely encircled by artillery. In absolute secrecy, Bosnian volunteers hand-dug an 800-meter tunnel beneath the airport runway using only picks and shovels. Connecting the besieged city to Bosnian-held territory outside, this narrow underground artery kept Sarajevo alive with food, fuel, weapons, and medical aid. Today, the Kolar family house in Butmir preserves a 25-meter tunnel segment and authentic artifacts."
            : "Während der 1.425 Tage dauernden Belagerung von Sarajevo in den 1990er Jahren war die Stadt vollständig von feindlichen Kräften umschlossen. Unter strengster Geheimhaltung gruben Freiwillige in monatelanger Handarbeit einen 800 Meter langen Tunnel unter der Landebahn des Flughafens. Dieser schmale Durchgang wurde zur lebensrettenden Ader für Nahrung, Medikamente und Strom. Heute bewahrt das Museum im Haus der Familie Kolar ein begehbares Teilstück und eindrucksvolle Originaldokumente."}
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
                {en ? "View on map" : "Auf Karte ansehen"} <ExternalLink size={12} />
              </a>
            </span>
          </li>
          <li>
            {en ? "Ticket price: " : "Eintritt: "}10 KM ({en ? "adults" : "Erwachsene"}), 5 KM ({en ? "students" : "Studenten"})
          </li>
          <li>
            {en ? "Getting there: ~15 min taxi ride from city center or tram 3 to Ilidža followed by bus" : "Anfahrt: Ca. 15 Minuten per Taxi vom Zentrum oder Straßenbahn 3 bis Ilidža und weiter mit dem Bus"}
          </li>
        </ul>
      </FadeUp>

      {/* 3. Trebevic cable car */}
      <FadeUp delay={0}>
        <h3 className="!text-lg !text-cherry mb-2">
          {en ? "3. Ride the Trebević Cable Car & Olympic Bobsled Track" : "3. Fahre mit der Trebević-Seilbahn zur Olympia-Bobbahn"}
        </h3>
        <p className="font-body text-charcoal/80 leading-relaxed mb-3">
          {en
            ? "Originally inaugurated in 1959, the Trebević cable car was a beloved civic symbol until its destruction during the 1990s war. Its triumphant reopening in 2018 marked a major milestone in Sarajevo's peacetime renaissance. In just under nine minutes, sleek glass gondolas glide from the historic Bistrik neighborhood up to 1,160 meters. At the summit, dense pine forests surround the concrete remains of the 1984 Winter Olympics bobsled track, now globally famous as an open-air canvas for street art and graffiti."
            : "Erstmals 1959 eröffnet, war die Seilbahn auf den Trebević das Wahrzeichen für Wochenendausflüge, bis sie im Krieg zerstört wurde. Ihre Wiedereröffnung im Jahr 2018 galt als emotionaler Meilenstein der Stadtgeschichte. In knapp neun Minuten gleiten die Gondeln aus dem Stadtteil Bistrik auf 1.160 Meter Höhe. Oben angekommen, führen Waldwege zur verlassenen Bobbahn der Olympischen Winterspiele von 1984, die heute weltweit als monumentale Freiluftgalerie für Graffiti bekannt ist."}
        </p>
        <ul className="font-body text-charcoal/80 text-sm leading-relaxed space-y-1 mb-8">
          <li className="flex items-start gap-2">
            <MapPin size={16} className="mt-0.5 shrink-0 text-cherry" />
            <span>
              {en ? "Address: " : "Adresse: "}Hrvatin bb, Bistrik &middot;{" "}
              <a
                href="https://www.google.com/maps/search/Trebevic+Cable+Car+Hrvatin+Bistrik+Sarajevo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cherry underline hover:text-cherry-dark inline-flex items-center gap-1"
              >
                {en ? "View on map" : "Auf Karte ansehen"} <ExternalLink size={12} />
              </a>
            </span>
          </li>
          <li>
            {en ? "Ticket price: 30 KM return / 20 KM one-way (foreign visitors)" : "Fahrpreis: 30 KM hin & zurück / 20 KM Einzelfahrt (Besucher)"}
          </li>
        </ul>
      </FadeUp>

      {/* 4. Cevapi restaurants */}
      <FadeUp delay={0}>
        <h3 className="!text-lg !text-cherry mb-2">
          {en ? "4. Taste Authentic Sarajevo Ćevapi" : "4. Probiere echte Sarajevoer Ćevapi"}
        </h3>
        <p className="font-body text-charcoal/80 leading-relaxed mb-6">
          {en
            ? "In Bosnia, ćevapi are not simply street food; they are a culinary institution with strict regional standards. Sarajevo ćevapi are made exclusively from quality beef (sometimes blended with lamb), seasoned with only garlic and salt, and grilled over charcoal. They are served nestled inside a warm, grid-patterned somun bread with heaps of finely diced raw onions and a generous dollop of rich kajmak clotted cream. Order 'deset u pola' (ten pieces in a half somun) for the classic local experience."
            : "In Bosnien sind Ćevapi kein Fast Food, sondern gelebtes Kulturgut. Die Sarajevo-Variante wird traditionell aus reinem Rindfleisch (teils mit Lamm verfeinert) zubereitet, puristisch nur mit Salz und Knoblauch gewürzt und über Holzkohle gegrillt. Serviert werden sie in ofenfrischem Somun-Fladenbrot mit feingehackten Zwiebeln und cremigem Kajmak. Bestelle 'deset u pola' (zehn Stück im halben Brot) für das authentische Erlebnis."}
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
                    {en ? "Gluten-free menu" : "Glutenfreies Menü"}
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
                <span>{en ? r.priceEn : r.priceDe}</span>
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
          {en ? "5. Stand at the Latin Bridge (World History Crossroads)" : "5. Stehe an der Lateinerbrücke (Wendepunkt der Weltgeschichte)"}
        </h3>
        <p className="font-body text-charcoal/80 leading-relaxed mb-3">
          {en
            ? "Spanning the Miljacka river since the Ottoman era, this stone bridge became the catalyst for twentieth-century modern history. On June 28, 1914, nineteen-year-old Gavrilo Princip stepped forward on this riverbank and shot Archduke Franz Ferdinand of Austria and his wife Sophie, setting in motion the domino chain that started the First World War. Directly on the corner stands the Sarajevo Museum 1878-1918, offering an unvarnished examination of the Austro-Hungarian era and the assassination."
            : "Diese steinerne Bogenbrücke über die Miljacka stammt aus der osmanischen Epoche und wurde zum Schauplatz eines weltgeschichtlichen Wendepunkts. Am 28. Juni 1914 erschoss der junge Gavrilo Princip hier Erzherzog Franz Ferdinand und dessen Gemahlin Sophie, was den Ersten Weltkrieg auslöste. Im Eckgebäude direkt an der Brücke beleuchtet das Museum Sarajevo 1878-1918 die habsburgische Ära und die Hintergründe des Attentats."}
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
          {en ? "6. Marvel at the Gazi Husrev-beg Mosque" : "6. Erkunde die Gazi-Husrev-Beg-Moschee"}
        </h3>
        <p className="font-body text-charcoal/80 leading-relaxed mb-3">
          {en
            ? "Commissioned in 1530 by governor Gazi Husrev-beg and designed by the master Ottoman architect Acem Esir Ali, this is regarded as the architectural crown jewel of Islamic heritage in the western Balkans. It was historically the first mosque in the world to introduce electric lighting in 1898. Its courtyard features an ornate carved fountain (šadrvan) and a centuries-old clock tower (Sahat-kula) that still keeps lunar time. The mosque sits just steps from the Catholic Sacred Heart Cathedral, the Old Orthodox Church, and the Ashkenazi Synagogue, earning Sarajevo its enduring title as the 'Jerusalem of Europe.'"
            : "Erbaut im Jahr 1530 unter Statthalter Gazi Husrev-beg und entworfen von Hofarchitekt Acem Esir Ali, gilt dieses Bauwerk als Meisterwerk osmanischer Baukunst auf dem Balkan. Bemerkenswerter historischer Fakt: Sie war 1898 die erste Moschee weltweit mit elektrischem Licht. Im friedlichen Innenhof plätschert der steinerne Šadrvan-Brunnen neben dem Uhrturm (Sahat-kula), der die Zeit nach Mondphasen anzeigt. Nur wenige Schritte entfernt stehen katholische Kathedrale, orthodoxe Kirche und Synagoge, Symbol für Sarajevos Ruf als 'Jerusalem Europas'."}
        </p>
        <p className="font-body text-charcoal/60 text-sm leading-relaxed mb-8 flex items-center gap-2">
          <MapPin size={16} className="text-cherry" />
          <a
            href="https://www.google.com/maps/search/Gazi+Husrev-beg+Mosque+Sarajevo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cherry underline hover:text-cherry-dark inline-flex items-center gap-1"
          >
            {en ? "View on map" : "Auf Karte ansehen"} <ExternalLink size={12} />
          </a>
        </p>
      </FadeUp>

      {/* 7. Mount Igman */}
      <FadeUp delay={0}>
        <h3 className="!text-lg !text-cherry mb-2">
          {en ? "7. Escape to Mount Igman's Pine Forests" : "7. Erlebe die Gebirgswälder auf dem Berg Igman"}
        </h3>
        <p className="font-body text-charcoal/80 leading-relaxed mb-3">
          {en
            ? "Rising to 1,502 meters southwest of the city, Mount Igman is famous for its pure, highly oxygenated mountain air and thick fir groves. During the 1984 Winter Olympics, Igman hosted Nordic skiing and the dramatic 70-meter and 90-meter ski jumping events at Malo Polje. It also holds deep historical resonance as the site of the legendary 1942 WWII partisan Igman March through sub-zero blizzards. In summer, it is the city's favorite retreat for cycling, family picnics, and cool mountain breezes."
            : "Südwestlich der Stadt erhebt sich der Igman auf über 1.500 Meter Höhe. Er ist bekannt für seine sauerstoffreiche Waldluft und ausgedehnte Nadelwälder. Bei den Olympischen Spielen 1984 fanden hier die nordischen Disziplinen und das spektakuläre Skispringen auf den Schanzen von Malo Polje statt. Geschichtlich erinnert zudem das Denkmal an den legendären Partisanenmarsch im Eiswinter 1942. Im Sommer ist der Berg ein beliebtes Ziel für Wanderungen, Mountainbiketouren und kühle Erholung."}
        </p>
        <p className="font-body text-charcoal/60 text-sm leading-relaxed mb-8 flex items-center gap-2">
          <MapPin size={16} className="text-cherry" />
          <a
            href="https://www.google.com/maps/search/Mount+Igman+Sarajevo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cherry underline hover:text-cherry-dark inline-flex items-center gap-1"
          >
            {en ? "View on map" : "Auf Karte ansehen"} <ExternalLink size={12} />
          </a>
        </p>
      </FadeUp>

      {/* 8. Historical Museum */}
      <FadeUp delay={0}>
        <h3 className="!text-lg !text-cherry mb-2">
          {en ? "8. Discover the Historical Museum of Bosnia & Herzegovina" : "8. Besuche das Historische Museum von Bosnien und Herzegowina"}
        </h3>
        <p className="font-body text-charcoal/80 leading-relaxed mb-3">
          {en
            ? "Housed in a striking modernist cube near the former Sniper Alley, this museum bypasses dry timelines to present human truth. Its acclaimed permanent exhibition, 'Sarajevo Under Siege,' illustrates how ordinary citizens survived years cut off from utilities: handcrafted wood stoves built from artillery shell casings, homemade candles, improvised battery systems, and children's handwritten diaries. It is raw, moving, and an essential testament to the indomitable resilience of Sarajevo's people."
            : "Untergebracht in einem markanten brutalistischen Bauwerk nahe der einstigen 'Sniper Alley', widmet sich dieses Museum dem menschlichen Überleben. Die Dauerausstellung 'Sarajevo unter Belagerung' zeigt das improvisierte Alltagsleben ohne Wasser, Strom und Gas: selbstgebaute Öfen aus Granatenhülsen, Notlichter, erfinderische Wasserfilter und Tagebücher von Kindern. Eine zutiefst berührende Hommage an die unzerstörbare Würde und Menschlichkeit der Bürger."}
        </p>
        <ul className="font-body text-charcoal/80 text-sm leading-relaxed space-y-1 mb-8">
          <li className="flex items-start gap-2">
            <MapPin size={16} className="mt-0.5 shrink-0 text-cherry" />
            <span>
              {en ? "Address: " : "Adresse: "}Zmaja od Bosne 5 &middot;{" "}
              <a
                href="https://www.google.com/maps/search/Historical+Museum+of+Bosnia+and+Herzegovina+Sarajevo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cherry underline hover:text-cherry-dark inline-flex items-center gap-1"
              >
                {en ? "View on map" : "Auf Karte ansehen"} <ExternalLink size={12} />
              </a>
            </span>
          </li>
          <li>{en ? "Ticket price: ~5 KM" : "Eintritt: Ca. 5 KM"}</li>
        </ul>
      </FadeUp>

      {/* 9. Coffee */}
      <FadeUp delay={0}>
        <h3 className="!text-lg !text-cherry mb-2">
          {en ? "9. Savor the Traditional Bosnian Coffee Ritual (Bosanska Kahva)" : "9. Genieße die traditionelle bosnische Kaffee-Zeremonie"}
        </h3>
        <p className="font-body text-charcoal/80 leading-relaxed mb-3">
          {en
            ? "Never confuse Bosnian coffee with a rushed espresso or Turkish coffee; in Sarajevo, coffee is an art of patience, conversation, and mindfulness (ćejf). Finely roasted beans are boiled in a hand-hammered copper džezva and served on an engraved brass tray alongside a handleless ceramic fildžan cup, a glass of cold spring water, sugar cubes, and a delicate cube of rahat lokum (Turkish delight). Take a small nibble of the sugar cube, sip the rich foam, and let conversation unfold without looking at your watch."
            : "Verwechsle bosnischen Kaffee niemals mit einem schnellen Espresso; in Sarajevo ist das Kaffeetrinken eine Kunst der Entschleunigung und Geselligkeit (Ćejf). Fein gemahlener Kaffee wird in einer handgeschlagenen Kupfer-Džezva aufgekocht und auf einem kunstvoll gravierten Tablett serviert: Dazu gehören die kleine henkellose Fildžan-Tasse, ein Glas kaltes Quellwasser, Würfelzucker und Rahat Lokum (Lokum-Konfekt). Man beißt ein Stück Zucker ab, nimmt einen Schluck des aromatischen Kaffees und genießt den Moment."}
        </p>
        <p className="font-body text-charcoal/60 text-sm leading-relaxed mb-8 flex items-center gap-2">
          <MapPin size={16} className="text-cherry" />
          <a
            href="https://www.google.com/maps/search/Kazandziluk+Sarajevo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cherry underline hover:text-cherry-dark inline-flex items-center gap-1"
          >
            {en ? "Recommended area: Kazandžiluk (Coppersmith street)" : "Empfohlenes Viertel: Kazandžiluk (Kupferschmiedegasse)"} <ExternalLink size={12} />
          </a>
        </p>
      </FadeUp>

      {/* 10. Yellow Fortress */}
      <FadeUp delay={0}>
        <h3 className="!text-lg !text-cherry mb-2">
          {en ? "10. Catch Golden Hour from the Yellow Fortress (Žuta Tabija)" : "10. Erlebe die goldene Stunde an der Gelben Festung (Žuta Tabija)"}
        </h3>
        <p className="font-body text-charcoal/80 leading-relaxed mb-3">
          {en
            ? "Perched high on the rocky cliff above Baščaršija, the Yellow Fortress is a remnants of the fortified defensive walls built by the Ottomans in the early 18th century after Prince Eugene of Savoy set fire to the city. Today, its wide grassy terrace provides the definitive panoramic vantage point over Sarajevo's terracotta roofs, slender minarets, and the sun setting down the Miljacka valley. During the holy month of Ramadan, a historic ceremonial cannon is fired from the ramparts each evening at sunset to signal the end of the daily fast."
            : "Erhoben über den Hängen der Altstadt liegt die Gelbe Festung (Žuta Tabija), Teil der osmanischen Festungsanlagen aus dem frühen 18. Jahrhundert nach dem verheerenden Stadtbrand von 1697. Heute ist die Festungsplattform der schönste Panoramapunkt der Stadt: Hier blickt man im Abendlicht über das Meer aus roten Ziegeldächern, die Minarette und den Flusslauf der Miljacka. Während des Fastenmonats Ramadan wird hier jeden Abend bei Sonnenuntergang zeremoniell eine Kanone abgefeuert, um das Fastenbrechen einzuläuten."}
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
              ? "Tip: Climb the scenic stairway through the Kovači memorial cemetery about 45 minutes before sunset, grab a seat at the terrace cafe, and watch the city lights flicker on."
              : "Tipp: Steige etwa 45 Minuten vor Sonnenuntergang über die Gassen von Kovači hinauf, nimm Platz im kleinen Festungscafé und beobachte, wie nach und nach die Lichter im Tal erwachen."}
          </li>
        </ul>
      </FadeUp>

      {/* FAQ */}
      <FadeUp delay={0}>
        <h2 className="mb-6 text-center">{en ? "Frequently Asked Questions" : "Häufig gestellte Fragen"}</h2>
        <div className="space-y-6 mb-16">
          <div>
            <h4 className="!text-base !text-charcoal mb-1">
              {en ? "Is two days enough to see Sarajevo?" : "Reichen zwei Tage, um Sarajevo zu sehen?"}
            </h4>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">
              {en
                ? "Two full days covers the highlights comfortably: one day for Baščaršija, the Tunnel of Hope, and the Latin Bridge, and a second for Trebević and the Yellow Fortress."
                : "Zwei volle Tage reichen bequem für die Höhepunkte: ein Tag für Baščaršija, den Tunnel der Hoffnung und die Lateinerbrücke, ein zweiter für den Trebević und die Gelbe Festung."}
            </p>
          </div>
          <div>
            <h4 className="!text-base !text-charcoal mb-1">
              {en ? "Is Sarajevo safe for tourists?" : "Ist Sarajevo sicher für Touristen?"}
            </h4>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">
              {en
                ? "Yes. Sarajevo is consistently rated as one of the safer capital cities in the region for tourists; the usual precautions apply, like watching belongings in crowded markets and using licensed taxis."
                : "Ja. Sarajevo gilt durchweg als eine der sichereren Hauptstädte der Region für Touristen. Es gelten die üblichen Vorsichtsmaßnahmen: Achte auf deine Sachen in belebten Märkten und nutze lizenzierte Taxis."}
            </p>
          </div>
          <div>
            <h4 className="!text-base !text-charcoal mb-1">
              {en ? "How do I get around without a car?" : "Wie komme ich ohne Auto herum?"}
            </h4>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">
              {en
                ? "Trams (lines 1, 2, 3) cover the city center well, and taxis or rideshare apps are inexpensive for trips to Trebević, the Tunnel of Hope, or Igman."
                : "Straßenbahnen (Linien 1, 2, 3) decken das Stadtzentrum gut ab, und Taxis oder Rideshare-Apps sind günstig für Fahrten nach Trebević, zum Tunnel der Hoffnung oder nach Igman."}
            </p>
          </div>
          <div>
            <h4 className="!text-base !text-charcoal mb-1">
              {en ? "What is the best time of year to visit?" : "Was ist die beste Reisezeit?"}
            </h4>
            <p className="font-body text-charcoal/70 text-sm leading-relaxed">
              {en
                ? "Late spring (May to June) and early autumn (September to October) offer mild weather without summer heat or winter cold."
                : "Spätfrühling (Mai bis Juni) und Frühherbst (September bis Oktober) bieten mildes, angenehmes Reisewetter ohne extreme Sommerhitze oder Winterkälte."}
            </p>
          </div>
        </div>
      </FadeUp>

      <FadeUp delay={0}>
        <div className="pt-8 border-t border-cherry/10 text-center">
          <p className="font-body text-charcoal/70 mb-4">
            {en
              ? "Staying at Cherry Magic Apartment puts you a short walk from many of these spots."
              : "Im Cherry Magic Apartment bist du nur einen kurzen Spaziergang von vielen dieser Orte entfernt."}
          </p>
          <Link
            href="/"
            className="inline-block bg-cherry hover:bg-cherry-dark text-cream px-7 py-3 rounded-full font-body text-sm uppercase tracking-wide transition-colors"
          >
            {en ? "Back to Home" : "Zurück zur Startseite"}
          </Link>
        </div>
      </FadeUp>
    </div>
  );
}
