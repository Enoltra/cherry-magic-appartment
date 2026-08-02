import type { Metadata } from "next";
import "../styles/globals.css";
import { LangProvider } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cherry Magic Apartment | Sarajevo",
  description: "A bright, modern apartment in Sarajevo's green Višnjik neighbourhood."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
