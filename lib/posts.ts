export interface BlogPost {
  slug: string;
  titleEn: string;
  titleDe: string;
  excerptEn: string;
  excerptDe: string;
  contentEn: string[];
  contentDe: string[];
  cover: string;
  keywordsEn: string[];
  keywordsDe: string[];
}

export const posts: BlogPost[] = [
  {
    slug: "10-things-to-do-in-sarajevo",
    titleEn: "10 Things to Do in Sarajevo for First-Time Visitors",
    titleDe: "10 Dinge, die man in Sarajevo als Erstbesucher erleben sollte",
    excerptEn:
      "From the cobbled lanes of Baščaršija to panoramic viewpoints and hearty ćevapi, here is a first-timer's guide to Sarajevo — plus a few quiet-stay tips for longer visits.",
    excerptDe:
      "Von den Kopfsteinpflastergassen der Baščaršija bis zu Panoramablicken und herzhaften Ćevapi — hier ist ein Leitfaden für Erstbesucher in Sarajevo, inklusive Tipps für ruhige, längere Aufenthalte.",
    cover: "/images/hero/hero-2.jpg",
    keywordsEn: [
      "things to do in Sarajevo",
      "Sarajevo attractions",
      "Sarajevo walking tour",
      "is Sarajevo safe to visit",
      "how many days in Sarajevo",
      "family friendly accommodation Sarajevo"
    ],
    keywordsDe: [
      "Sarajevo Sehenswürdigkeiten",
      "Reisetipps Sarajevo",
      "Sarajevo Städtereise",
      "ist Sarajevo sicher"
    ],
    contentEn: [
      "Sarajevo is one of Europe's most underrated city-break destinations — a compact, walkable capital where Ottoman-era lanes, Austro-Hungarian architecture and modern cafés sit side by side. If you're planning your first trip and wondering how many days in Sarajevo you actually need, two to three full days is a comfortable amount of time to see the highlights without rushing.",
      "1. Wander Baščaršija, the old bazaar quarter, and browse copper workshops. 2. Sip traditional coffee at a cafe on Kazandžiluk street. 3. Visit the Sebilj fountain, the symbolic heart of the old town. 4. Cross the Latin Bridge, where the assassination of Archduke Franz Ferdinand took place in 1914. 5. Explore the Gazi Husrev-beg Mosque and its peaceful courtyard.",
      "6. Take the cable car up Trebević mountain for panoramic views over the city and the abandoned 1984 Winter Olympics bobsled track. 7. Learn about the 1990s siege at the Tunnel of Hope museum. 8. Try ćevapi, Bosnian coffee and baklava at a local aščinica. 9. Visit the Sarajevo City Hall (Vijećnica) for its stunning interior. 10. Walk along the riverside promenade at sunset for a quieter view of the city.",
      "Is Sarajevo safe to visit? Yes — Sarajevo is a safe, welcoming city for tourists, families and solo travellers alike, with low crime rates in the areas visitors typically explore. As with any city, use normal common sense at night and keep valuables secure in busy areas.",
      "If you're travelling as a family or group, look for self-catering apartments Sarajevo rather than a standard hotel room — having a kitchen and separate bedrooms makes a real difference over a multi-day stay, whether you're sightseeing, working remotely, or in town for an appointment at a nearby clinic.",
      "Cherry Magic Apartment is a spacious, quiet base just minutes from these highlights, with room for up to five guests, a full kitchen, and free parking — an easy home base for exploring Sarajevo at your own pace."
    ],
    contentDe: [
      "Sarajevo ist eines der am meisten unterschätzten Städtereiseziele Europas — eine kompakte, gut zu Fuß erreichbare Hauptstadt, in der osmanische Gassen, österreichisch-ungarische Architektur und moderne Cafés nebeneinander bestehen. Wenn Sie Ihre erste Reise planen und sich fragen, wie viele Tage Sie für Sarajevo wirklich brauchen: Zwei bis drei volle Tage reichen bequem aus, um die Highlights ohne Hektik zu sehen.",
      "1. Schlendern Sie durch die Baščaršija, das alte Bazarviertel, und stöbern Sie in Kupferwerkstätten. 2. Trinken Sie traditionellen Kaffee in einem Café an der Kazandžiluk-Straße. 3. Besuchen Sie den Sebilj-Brunnen, das symbolische Herz der Altstadt. 4. Überqueren Sie die Lateinerbrücke, wo 1914 das Attentat auf Erzherzog Franz Ferdinand stattfand. 5. Erkunden Sie die Gazi-Husrev-Beg-Moschee mit ihrem ruhigen Innenhof.",
      "6. Fahren Sie mit der Seilbahn auf den Trebević-Berg für einen Panoramablick über die Stadt und die verlassene Bobbahn der Olympischen Winterspiele 1984. 7. Erfahren Sie mehr über die Belagerung in den 1990er Jahren im Tunnel-der-Hoffnung-Museum. 8. Probieren Sie Ćevapi, bosnischen Kaffee und Baklava in einer lokalen Aščinica. 9. Besuchen Sie das Rathaus von Sarajevo (Vijećnica) für sein beeindruckendes Interieur. 10. Spazieren Sie bei Sonnenuntergang an der Uferpromenade für einen ruhigeren Blick auf die Stadt.",
      "Ist Sarajevo sicher? Ja — Sarajevo ist eine sichere, einladende Stadt für Touristen, Familien und Alleinreisende, mit niedriger Kriminalität in den von Besuchern üblicherweise besuchten Gebieten. Wie in jeder Stadt sollten Sie nachts den gesunden Menschenverstand einsetzen und Wertsachen an belebten Orten sicher aufbewahren.",
      "Wenn Sie als Familie oder Gruppe reisen, suchen Sie nach Apartments mit Selbstversorgung in Sarajevo statt nach einem klassischen Hotelzimmer — eine eigene Küche und getrennte Schlafzimmer machen bei einem mehrtägigen Aufenthalt einen echten Unterschied, egal ob Sie sightseeing machen, remote arbeiten oder einen Termin in einer nahegelegenen Klinik haben.",
      "Das Cherry Magic Apartment ist eine geräumige, ruhige Basis nur wenige Minuten von diesen Highlights entfernt, mit Platz für bis zu fünf Gäste, einer vollständigen Küche und kostenlosem Parkplatz — ein einfacher Ausgangspunkt, um Sarajevo in Ihrem eigenen Tempo zu erkunden."
    ]
  }
];
