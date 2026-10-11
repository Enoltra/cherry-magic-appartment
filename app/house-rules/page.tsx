"use client";

import { useLang } from "@/lib/i18n";
import FadeUp from "@/components/FadeUp";
import { Clock, ShieldCheck, Footprints, Sparkles, Shirt, CigaretteOff, PartyPopper, Moon, Users, PawPrint, Trash2, DoorClosed, GlassWater, Car, Waves, Baby } from "lucide-react";

export default function HouseRulesPage() {
  const { tr } = useLang();

  const rules = [
    { icon: <Clock size={22} />, text: tr("houseRule1") },
    { icon: <ShieldCheck size={22} />, text: tr("houseRule2") },
    { icon: <Footprints size={22} />, text: tr("houseRule3") },
    { icon: <Sparkles size={22} />, text: tr("houseRule4") },
    { icon: <Shirt size={22} />, text: tr("houseRule5") },
    { icon: <CigaretteOff size={22} />, text: tr("houseRule6") },
    { icon: <PartyPopper size={22} />, text: tr("houseRule7") },
    { icon: <Moon size={22} />, text: tr("houseRule8") },
    { icon: <Users size={22} />, text: tr("houseRule9") },
    { icon: <PawPrint size={22} />, text: tr("houseRule10") },
    { icon: <Trash2 size={22} />, text: tr("houseRule11") },
    { icon: <DoorClosed size={22} />, text: tr("houseRule12") }
  ];

  const goodToKnow = [
    { icon: <GlassWater size={22} />, text: tr("houseGood1") },
    { icon: <Car size={22} />, text: tr("houseGood2") },
    { icon: <Waves size={22} />, text: tr("houseGood3") },
    { icon: <Baby size={22} />, text: tr("houseGood4") }
  ];

  return (
    <div className="max-w-4xl mx-auto px-5 py-24">
      <FadeUp>
        <p className="font-script text-3xl md:text-4xl text-cherry text-center mb-2">Cherry Magic</p>
        <h1 className="text-center mb-4">{tr("houseRulesTitle")}</h1>
        <p className="font-body text-charcoal/70 text-center max-w-xl mx-auto mb-14">{tr("houseRulesIntro")}</p>
      </FadeUp>

      <div className="grid gap-5 md:grid-cols-2">
        {rules.map((rule, i) => (
          <FadeUp key={i} delay={i * 60}>
            <div className="flex items-start gap-4 bg-white/60 border border-cherry/10 rounded-2xl p-5 h-full">
              <div className="shrink-0 mt-0.5" style={{ color: "#353f2a" }}>{rule.icon}</div>
              <p className="font-body text-sm text-charcoal/85 leading-relaxed">{rule.text}</p>
            </div>
          </FadeUp>
        ))}
      </div>

      <FadeUp>
        <h2 className="text-center mt-20 mb-10">{tr("houseGoodTitle")}</h2>
      </FadeUp>
      <div className="grid gap-5 md:grid-cols-2">
        {goodToKnow.map((item, i) => (
          <FadeUp key={i} delay={i * 60}>
            <div className="flex items-start gap-4 bg-white/60 border border-cherry/10 rounded-2xl p-5 h-full">
              <div className="shrink-0 mt-0.5" style={{ color: "#353f2a" }}>{item.icon}</div>
              <p className="font-body text-sm text-charcoal/85 leading-relaxed">{item.text}</p>
            </div>
          </FadeUp>
        ))}
      </div>

      <FadeUp delay={200}>
        <p className="font-body text-charcoal/70 text-center max-w-xl mx-auto mt-12">{tr("houseRulesOutro")}</p>
      </FadeUp>
    </div>
  );
}
