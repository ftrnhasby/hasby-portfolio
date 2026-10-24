"use client";

import { StoryboardItem } from "@/types/project";
import { Film, Cpu, Video, Layers, Volume2, Mic } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

interface StoryboardGridProps {
  storyboard: StoryboardItem[];
}

export function StoryboardGrid({ storyboard }: StoryboardGridProps) {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].projectDetail;

  const getAssetBadge = (type: StoryboardItem["assetType"]) => {
    switch (type) {
      case "Remotion Component":
        return {
          icon: <Cpu className="w-3 h-3 text-cyan-400" />,
          style: "bg-cyan-950/40 text-cyan-300 border-cyan-500/30",
        };
      case "Brand Footage":
        return {
          icon: <Video className="w-3 h-3 text-amber-400" />,
          style: "bg-amber-950/40 text-amber-300 border-amber-500/30",
        };
      case "Motion Graphic":
        return {
          icon: <Layers className="w-3 h-3 text-indigo-400" />,
          style: "bg-indigo-950/40 text-indigo-300 border-indigo-500/30",
        };
      case "SFX / Soundbed":
        return {
          icon: <Volume2 className="w-3 h-3 text-emerald-400" />,
          style: "bg-emerald-950/40 text-emerald-300 border-emerald-500/30",
        };
      case "AI Voiceover":
        return {
          icon: <Mic className="w-3 h-3 text-purple-400" />,
          style: "bg-purple-950/40 text-purple-300 border-purple-500/30",
        };
      default:
        return {
          icon: <Film className="w-3 h-3 text-zinc-400" />,
          style: "bg-white/[0.05] text-zinc-300 border-white/10",
        };
    }
  };

  return (
    <div className="rounded-2xl bg-[#0a0a0c] border border-white/[0.08] p-6 sm:p-8 space-y-6">
      {/* Header */}
      <div className="border-b border-white/[0.06] pb-6">
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
          <Film className="w-3.5 h-3.5" />
          <span>{t.storyboardSectionTitle}</span>
        </div>
        <h4 className="text-lg font-semibold text-white tracking-tight mt-1">
          {t.storyboardSectionSub}
        </h4>
      </div>

      {/* Grid of Storyboard Scenes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {storyboard.map((item) => {
          const badge = getAssetBadge(item.assetType);
          return (
            <div
              key={item.id}
              className="rounded-xl bg-[#0e0e11] border border-white/[0.06] p-5 space-y-4 hover:border-white/[0.12] transition-colors flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Scene Meta Row */}
                <div className="flex items-center justify-between gap-2">
                  <span className="font-semibold text-sm text-white tracking-tight">
                    {item.scene[lang]}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400 px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.05]">
                    {item.timecode}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                  {item.visualDescription[lang]}
                </p>

                {/* Technical / Remotion Note */}
                {item.technicalNote && (
                  <div className="p-3 rounded-lg bg-black/60 border border-white/[0.06] font-mono text-[11px] text-zinc-400 leading-normal break-words">
                    <span className="text-[10px] uppercase text-zinc-500 block mb-1">
                      {lang === "id" ? "Catatan Teknis / SFX" : "Technical Spec & SFX"}
                    </span>
                    {item.technicalNote[lang]}
                  </div>
                )}
              </div>

              {/* Bottom Tags */}
              <div className="pt-3 border-t border-white/[0.04] flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-zinc-500">
                  <span>Tool:</span>
                  <span className="text-zinc-200">{item.toolUsed}</span>
                </div>

                <div
                  className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono border ${badge.style}`}
                >
                  {badge.icon}
                  <span>{item.assetType}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
