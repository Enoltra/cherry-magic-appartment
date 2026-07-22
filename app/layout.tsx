import type { Metadata } from "next";
import "@/styles/globals.css";
import { LanguageProvider } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Cherry Magic Apartment Sarajevo | Family & Group Accommodation",
  description:
    "Spacious self-catering apartment in Sarajevo for families and groups of up to 5. Quiet residential location near the city centre, KCUS and ASA Hospital. Free parking & Wi-Fi.",
  keywords: [
    "apartments for rent in Sarajevo",
    "family apartment Sarajevo",
    "Sarajevo apartments for 4 people",
    "self catering apartments Sarajevo",
    "Ferienwohnung Sarajevo",
    "Unterkunft Sarajevo",
    "Apartment mieten Sarajevo",
    "Sarajevo accommodation near old town"
  ],
  openGraph: {
    title: "Cherry Magic Apartment Sarajevo",
    description:
      "A spacious, quiet retreat just minutes from Sarajevo's centre — perfect for families, groups and extended stays.",
    type: "website",
    locale: "en_GB",
    images: ["/images/hero/hero-1.jpg"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
        </LanguageProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
