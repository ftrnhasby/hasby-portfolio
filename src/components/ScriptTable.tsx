"use client";

import { useState } from "react";
import { ScriptAngle } from "@/types/project";
import { Clock, Lightbulb } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ScriptTableProps {
  scriptAngles: ScriptAngle[];
  activeIndex?: number;
  onSelectIndex?: (idx: number) => void;
}

export function ScriptTable({
  scriptAngles,
  activeIndex,
  onSelectIndex,
}: ScriptTableProps) {
  const { lang } = useLanguage();
  const isId = lang === "id";

  const [internalIndex, setInternalIndex] = useState(0);
  const resolvedIndex = Math.min(
    activeIndex !== undefined ? activeIndex : internalIndex,
    Math.max(0, scriptAngles.length - 1)
  );
  const currentAngle = scriptAngles[resolvedIndex] || scriptAngles[0];

  if (!currentAngle) return null;

  const handleSelect = (idx: number) => {
    if (onSelectIndex) {
      onSelectIndex(idx);
    } else {
      setInternalIndex(idx);
    }
  };

  return (
    <div className="space-y-5">
      {/* Angle Tabs (when multiple variations exist) + Hook Summary */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
        <div className="space-y-0.5">
          <div className="text-xs font-semibold text-white">
            {currentAngle.name[lang]}
          </div>
          <div className="text-xs text-zinc-400">
            {currentAngle.hookType[lang]} · {currentAngle.duration}
          </div>
        </div>

        {scriptAngles.length > 1 && (
          <div className="flex items-center gap-1.5 overflow-x-auto">
            {scriptAngles.map((angle, idx) => (
              <button
                key={angle.id}
                type="button"
                onClick={() => handleSelect(idx)}
                className={`px-3 py-1.5 rounded-lg text-[11px] font-mono whitespace-nowrap transition-all cursor-pointer ${
                  resolvedIndex === idx
                    ? "bg-white text-black font-semibold shadow-xs"
                    : "bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08]"
                }`}
              >
                {angle.name[lang].split(":")[0]}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Beat-by-Beat Rows (Lighter 3-part layout) */}
      <div className="space-y-2.5">
        {currentAngle.lines.map((line, idx) => (
          <div
            key={idx}
            className="rounded-xl bg-[#0d0d10] border border-white/[0.06] p-4 hover:border-white/[0.12] transition-colors grid grid-cols-1 md:grid-cols-12 gap-4 items-start"
          >
            {/* Timecode */}
            <div className="md:col-span-2 flex items-center gap-1.5 font-mono text-xs text-emerald-400 shrink-0">
              <Clock className="w-3.5 h-3.5 text-emerald-400/70" />
              <span>{line.time}</span>
            </div>

            {/* Visual & Spoken Copy Combined */}
            <div className="md:col-span-6 space-y-2">
              <p className="text-xs sm:text-sm text-white font-medium italic leading-relaxed">
                {line.audio[lang]}
              </p>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {line.visual[lang]}
              </p>
            </div>

            {/* Conversion Intent */}
            <div className="md:col-span-4 bg-white/[0.02] p-3 rounded-lg border border-white/[0.04] space-y-1">
              <span className="text-[10px] font-mono uppercase text-zinc-400 tracking-wider flex items-center gap-1">
                <Lightbulb className="w-3 h-3 text-emerald-400" />
                <span>{isId ? "Tujuan Beat" : "Beat Purpose"}</span>
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
