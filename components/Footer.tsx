"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import Logo from "./Logo";

export default function Footer() {
  const { tr } = useLang();

  return (
    <footer className="bg-charcoal text-cream mt-24">
      <div className="max-w-6xl mx-auto px-5 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <Logo className="h-12 w-auto mb-4" />
          <p className="font-body text-sm text-cream/70 max-w-xs">{tr("footerTagline")}</p>
        </div>

        <div className="font-body text-sm space-y-2">
          <p className="uppercase tracking-wide text-gold mb-3">Sarajevo, Bosnia &amp; Herzegovina</p>
          <p>Free parking · Free Wi-Fi</p>
          <p>Quiet residential neighbourhood</p>
          <p>Close to KCUS &amp; ASA Hospital</p>
        </div>

        <div className="font-body text-sm space-y-3">
          <p className="uppercase tracking-wide text-gold mb-3">{tr("footerBook")}</p>
          <a className="block hover:text-cherry-light" href="https://www.booking.com/hotel/ba/cherry-magic-apartment-sarajevo.en-gb.html" target="_blank" rel="noopener noreferrer">Booking.com</a>
          <a className="block hover:text-cherry-light" href="https://www.airbnb.ba/rooms/1612599923460894663" target="_blank" rel="noopener noreferrer">Airbnb</a>
          <a className="block hover:text-cherry-light" href="https://www.agoda.com/en-ie/cherry-magic-apartment-sarajevo/hotel/sarajevo-ba.html" target="_blank" rel="noopener noreferrer">Agoda</a>
          <Link className="block hover:text-cherry-light" href="/gallery">{tr("navGallery")}</Link>
          <Link className="block hover:text-cherry-light" href="/blog">{tr("navBlog")}</Link>
        </div>
      </div>
      <div className="text-center text-xs text-cream/40 pb-6 font-body">
        © {new Date().getFullYear()} Cherry Magic Apartment, Sarajevo
      </div>
    </footer>
  );
}
