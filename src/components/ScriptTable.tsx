"use client";

import { useState } from "react";
import { ScriptAngle } from "@/types/project";
import { FileText, Clock, Lightbulb } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

interface ScriptTableProps {
  scriptAngles: ScriptAngle[];
}

export function ScriptTable({ scriptAngles }: ScriptTableProps) {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].projectDetail;

  const [selectedAngleId, setSelectedAngleId] = useState(scriptAngles[0]?.id || "");
  const currentAngle = scriptAngles.find((a) => a.id === selectedAngleId) || scriptAngles[0];

  if (!currentAngle) return null;

  return (
    <div className="rounded-2xl bg-[#0a0a0c] border border-white/[0.08] p-6 sm:p-8 space-y-6">
      {/* Header and Angle Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.06] pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5" />
            <span>{t.scriptSectionTitle}</span>
          </div>
          <h4 className="text-lg font-semibold text-white tracking-tight mt-1">
            {t.scriptSectionSub}
          </h4>
        </div>

        {/* Script Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {scriptAngles.map((angle) => (
            <button
              key={angle.id}
              onClick={() => setSelectedAngleId(angle.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${
                selectedAngleId === angle.id
                  ? "bg-white text-black font-semibold shadow"
                  : "bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08]"
              }`}
            >
              {angle.name[lang].split(":")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Angle Metadata Banner */}
      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div>
          <span className="text-zinc-500 font-mono uppercase text-[11px] block">
            {lang === "id" ? "Sudut Pandang Hook" : "Psychological Hook Angle"}
          </span>
          <span className="text-white font-medium text-sm mt-0.5 inline-block">{currentAngle.hookType[lang]}</span>
        </div>
        <div className="text-zinc-400 max-w-md text-xs sm:text-right">
          {currentAngle.concept[lang]}
        </div>
      </div>

      {/* Script Lines Breakdown */}
      <div className="space-y-3">
        {currentAngle.lines.map((line, idx) => (
          <div
            key={idx}
            className="rounded-xl bg-[#0e0e11] border border-white/[0.06] p-4 sm:p-5 hover:border-white/[0.12] transition-colors grid grid-cols-1 md:grid-cols-12 gap-4 items-start"
          >
            {/* Timecode */}
            <div className="md:col-span-2 flex items-center gap-1.5 font-mono text-xs text-zinc-400">
              <Clock className="w-3.5 h-3.5 text-zinc-500" />
              <span>{line.time}</span>
            </div>

            {/* Visual Direction */}
            <div className="md:col-span-4 space-y-1">
              <span className="text-[10px] font-mono uppercase text-zinc-500 block tracking-wider">
                {lang === "id" ? "Arahan Visual" : "Visual Direction"}
              </span>
              <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                {line.visual[lang]}
              </p>
            </div>

            {/* Spoken Audio Script */}
            <div className="md:col-span-3 space-y-1">
              <span className="text-[10px] font-mono uppercase text-zinc-500 block tracking-wider">
                {lang === "id" ? "Naskah Voice-Over" : "Voice-Over Script"}
              </span>
              <p className="text-xs text-white leading-relaxed font-medium italic">
                {line.audio[lang]}
              </p>
            </div>

            {/* Psychological Intent */}
            <div className="md:col-span-3 space-y-1 bg-white/[0.015] p-2.5 rounded-lg border border-white/[0.04]">
              <span className="text-[10px] font-mono uppercase text-emerald-400 block tracking-wider flex items-center gap-1">
                <Lightbulb className="w-3 h-3" />
                <span>{lang === "id" ? "Tujuan Konversi" : "Conversion Intent"}</span>
              </span>
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                {line.psychologyIntent[lang]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
