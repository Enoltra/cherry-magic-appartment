"use client";

import Link from "next/link";
import { useState } from "react";
import { useLang } from "@/lib/i18n";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { lang, setLang, tr } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-cream/90 backdrop-blur-sm border-b border-cherry/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-10 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-8 font-body text-sm uppercase tracking-wide text-charcoal">
          <Link href="/" className="hover:text-cherry transition-colors">
            {tr("navHome")}
          </Link>
          <Link href="/gallery" className="hover:text-cherry transition-colors">
            {tr("navGallery")}
          </Link>
          <Link href="/blog" className="hover:text-cherry transition-colors">
            {tr("navBlog")}
          </Link>
          <a
            href="https://www.booking.com/hotel/ba/cherry-magic-apartment-sarajevo.en-gb.html"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cherry text-cream px-4 py-2 rounded-full hover:bg-cherry-dark transition-colors"
          >
            {tr("navBook")}
          </a>
          <div className="flex items-center gap-1 border border-cherry/30 rounded-full overflow-hidden text-xs">
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-1 ${lang === "en" ? "bg-cherry text-cream" : "text-charcoal"}`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("de")}
              className={`px-2 py-1 ${lang === "de" ? "bg-cherry text-cream" : "text-charcoal"}`}
            >
              DE
            </button>
          </div>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden flex flex-col gap-4 px-5 pb-5 font-body text-sm uppercase tracking-wide text-charcoal">
          <Link href="/" onClick={() => setOpen(false)}>{tr("navHome")}</Link>
          <Link href="/gallery" onClick={() => setOpen(false)}>{tr("navGallery")}</Link>
          <Link href="/blog" onClick={() => setOpen(false)}>{tr("navBlog")}</Link>
          <a
            href="https://www.booking.com/hotel/ba/cherry-magic-apartment-sarajevo.en-gb.html"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cherry text-cream px-4 py-2 rounded-full text-center"
          >
            {tr("navBook")}
          </a>
          <div className="flex items-center gap-1 border border-cherry/30 rounded-full overflow-hidden text-xs w-fit">
            <button onClick={() => setLang("en")} className={`px-3 py-1 ${lang === "en" ? "bg-cherry text-cream" : ""}`}>EN</button>
            <button onClick={() => setLang("de")} className={`px-3 py-1 ${lang === "de" ? "bg-cherry text-cream" : ""}`}>DE</button>
          </div>
        </div>
      )}
    </header>
  );
}
