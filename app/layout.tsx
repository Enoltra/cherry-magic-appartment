import type { Metadata } from "next";
import "../styles/globals.css";
import { LangProvider } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://cherry-magic-appartment.vercel.app"
  ),
  title: "Cherry Magic Apartment | Sarajevo",
  description:
    "A bright, modern family-friendly apartment in Sarajevo's green Višnjik neighbourhood. Sleeps up to 6 with baby cot, full kitchen, free parking, and easy self-check-in.",
  keywords: [
    "Sarajevo apartment rental",
    "family friendly accommodation Sarajevo",
    "short term stay Sarajevo",
    "apartment with baby cot Sarajevo",
    "Cherry Magic Sarajevo",
    "Višnjik apartment Sarajevo",
    "apartment near Clinical Center Sarajevo"
  ],
  authors: [{ name: "Amna Kurbegović" }],
  creator: "Cherry Magic Apartment",
  openGraph: {
    title: "Cherry Magic Apartment | Sarajevo",
    description:
      "A bright, modern family-friendly apartment in Sarajevo's green Višnjik neighbourhood. Sleeps up to 6, baby-friendly, free parking.",
    url: "https://cherry-magic-appartment.vercel.app",
    siteName: "Cherry Magic Apartment",
    images: [
      {
        url: "/images/hero/hero-2.jpg",
        width: 1200,
        height: 630,
        alt: "Cherry Magic Apartment interior, Sarajevo"
      }
    ],
    locale: "en_US",
    type: "website"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "VacationRental",
      "@id": "https://cherry-magic-appartment.vercel.app/#vacationrental",
      "name": "Cherry Magic Apartment Sarajevo",
      "description":
        "Recently renovated, family-friendly 2-bedroom vacation rental apartment in the coveted Višnjik neighborhood of Sarajevo. Accommodates up to 6 guests with baby cot, high chair, full kitchen, fast Wi-Fi, air conditioning, and smart lock self-check-in.",
      "url": "https://cherry-magic-appartment.vercel.app",
      "telephone": "+38762926781",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bolnička 46",
        "addressLocality": "Sarajevo",
        "postalCode": "71000",
        "addressCountry": "BA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 43.8646,
        "longitude": 18.4131
      },
      "numberOfRooms": 3,
      "numberOfBedrooms": 2,
      "numberOfBathroomsTotal": 1,
      "occupancy": {
        "@type": "QuantitativeValue",
        "maxValue": 6
      },
      "petsAllowed": "Exception for Service Dogs",
      "smokingAllowed": false,
      "checkinTime": "15:00",
      "checkoutTime": "11:10",
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Free Street Parking", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Paid Attended 24/7 Parking Opposite", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "High-speed Wi-Fi", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Air Conditioning & Heating", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Fully Equipped Kitchen with Dishwasher", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Baby Cot and High Chair on Request", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Toddler Safety Locks & Step Stool", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Keyless Smart Lock Self Check-in", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Washing Machine and Dryer for 5+ Night Stays", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Safe Drinking Tap Water", "value": true }
      ],
      "sameAs": [
        "https://www.booking.com/hotel/ba/cherry-magic-apartment-sarajevo.en-gb.html",
        "https://www.airbnb.ba/rooms/1612599923460894663"
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://cherry-magic-appartment.vercel.app/#organization",
      "name": "Cherry Magic Apartment",
      "url": "https://cherry-magic-appartment.vercel.app",
      "logo": "https://cherry-magic-appartment.vercel.app/images/hero/hero-2.jpg",
      "founder": {
        "@type": "Person",
        "name": "Amna Kurbegović"
      }
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LangProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}
