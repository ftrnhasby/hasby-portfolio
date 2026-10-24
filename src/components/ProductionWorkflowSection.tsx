"use client";

import { ProductionPhase } from "@/types/project";
import { Check, Clock, Wrench } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

interface ProductionWorkflowSectionProps {
  workflow: ProductionPhase[];
}

export function ProductionWorkflowSection({ workflow }: ProductionWorkflowSectionProps) {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].projectDetail;

  return (
    <div className="rounded-2xl bg-[#0a0a0c] border border-white/[0.08] p-6 sm:p-8 space-y-6">
      {/* Header */}
      <div className="border-b border-white/[0.06] pb-6">
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
          <Wrench className="w-3.5 h-3.5 text-zinc-300" />
          <span>{t.workflowSectionTitle}</span>
        </div>
        <h4 className="text-lg font-semibold text-white tracking-tight mt-1">
          {t.workflowSectionSub}
        </h4>
      </div>

      {/* Workflow Phase Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {workflow.map((phase, idx) => (
          <div
            key={idx}
            className="rounded-xl bg-[#0e0e11] border border-white/[0.06] p-5 space-y-3.5 hover:border-white/[0.12] transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">
                {phase.phase}
              </span>
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-zinc-400">
                <Clock className="w-3 h-3 text-zinc-500" />
                <span>{phase.turnaroundTime[lang]}</span>
              </div>
            </div>

            <h5 className="text-sm font-semibold text-white tracking-tight">
              {phase.title[lang]}
            </h5>

            <p className="text-xs text-zinc-400 leading-relaxed">
              {phase.summary[lang]}
            </p>

            <div className="pt-3 border-t border-white/[0.04] space-y-2">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
                <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                <span className="text-zinc-300">{phase.keyDeliverable[lang]}</span>
              </div>
              <div className="text-[10px] font-mono text-zinc-500 truncate">
                Tools: {phase.tools.join(", ")}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
