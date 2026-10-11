"use client";

import { ReactNode } from "react";
import { useLang } from "@/lib/i18n";
import FadeUp from "@/components/FadeUp";
import { ShieldCheck, Baby, KeyRound, Car, GlassWater, Coffee, Bath, Snowflake, Waves, Shirt, Trash2, DoorClosed, Cookie, ShoppingBasket, Store, Utensils, Pill } from "lucide-react";

type Item = { icon: ReactNode; text: string };

function Section({ title, items }: { title: string; items: Item[] }) {
  return (
    <>
      <FadeUp>
        <h2 className="text-center mt-16 mb-8">{title}</h2>
      </FadeUp>
      <div className="grid gap-5 md:grid-cols-2">
        {items.map((item, i) => (
          <FadeUp key={i} delay={i * 60} className={i === items.length - 1 && items.length % 2 === 1 ? "md:col-span-2" : ""}>
            <div className="flex items-start gap-4 bg-white/60 border border-cherry/10 rounded-2xl p-5 h-full">
              <div className="shrink-0 mt-0.5" style={{ color: "#353f2a" }}>{item.icon}</div>
              <p className="font-body text-sm text-charcoal/85 leading-relaxed">{item.text}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </>
  );
}

export default function GuestInfoPage() {
  const { tr } = useLang();

  const before: Item[] = [
    { icon: <ShieldCheck size={22} />, text: tr("houseRule2") },
    { icon: <Baby size={22} />, text: tr("houseGood4") },
    { icon: <KeyRound size={22} />, text: tr("guestArrive") },
    { icon: <Car size={22} />, text: tr("houseGood2") }
  ];

  const stay: Item[] = [
    { icon: <GlassWater size={22} />, text: tr("houseGood1") },
    { icon: <Coffee size={22} />, text: tr("guestStay1") },
    { icon: <Bath size={22} />, text: tr("guestStay2") },
    { icon: <Snowflake size={22} />, text: tr("guestStay3") },
    { icon: <Waves size={22} />, text: tr("houseGood3") },
    { icon: <Shirt size={22} />, text: tr("houseRule5") },
    { icon: <Trash2 size={22} />, text: tr("houseRule11") }
  ];

  const leave: Item[] = [
    { icon: <DoorClosed size={22} />, text: tr("houseRule12") }
  ];

  const local: Item[] = [
    { icon: <Cookie size={22} />, text: tr("guestLocal1") },
    { icon: <ShoppingBasket size={22} />, text: tr("guestLocal2") },
    { icon: <Store size={22} />, text: tr("guestLocal3") },
    { icon: <Utensils size={22} />, text: tr("guestLocal4") },
    { icon: <Pill size={22} />, text: tr("guestLocal5") }
  ];

  return (
    <div className="max-w-4xl mx-auto px-5 py-24">
      <FadeUp>
        <p className="font-script text-3xl md:text-4xl text-cherry text-center mb-2">Cherry Magic</p>
        <h1 className="text-center mb-4">{tr("guestInfoTitle")}</h1>
        <p className="font-body text-charcoal/70 text-center max-w-xl mx-auto">{tr("guestInfoIntro")}</p>
      </FadeUp>

      <Section title={tr("guestSectionBefore")} items={before} />
      <Section title={tr("guestSectionStay")} items={stay} />
      <Section title={tr("guestSectionLeave")} items={leave} />
      <Section title={tr("guestSectionLocal")} items={local} />

      <FadeUp delay={200}>
        <p className="font-body text-charcoal/70 text-center max-w-xl mx-auto mt-14">{tr("guestInfoOutro")}</p>
      </FadeUp>
    </div>
  );
}
