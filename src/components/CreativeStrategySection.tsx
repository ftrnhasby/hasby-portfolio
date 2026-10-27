"use client";

import { Target, Compass, Sparkles, Lightbulb, Users, AlertCircle, Zap, ArrowRight } from "lucide-react";
import { CreativeStrategy } from "@/types/project";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

interface CreativeStrategySectionProps {
  strategy: CreativeStrategy;
  projectTitle: string;
}

export function CreativeStrategySection({ strategy, projectTitle }: CreativeStrategySectionProps) {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].projectDetail;
  const labels = t.strategyLabels;

  return (
    <section className="space-y-6" id="strategy">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.06] pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400">
            <Compass className="w-3.5 h-3.5 text-zinc-300" />
            <span>01 / {t.strategySectionTitle}</span>
          </div>
          <p className="text-xs text-zinc-400 mt-1">
            <span className="text-zinc-200 font-medium">{projectTitle}</span> — {t.strategySectionSub}
          </p>
        </div>

        {/* Project Classification Badge */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-purple-950/40 border border-purple-500/30 text-purple-300 flex items-center gap-1.5 shadow-sm">
            <Sparkles className="w-3 h-3 text-purple-400 shrink-0" />
            <span>{strategy.projectType[lang]}</span>
          </span>
        </div>
      </div>

      {/* Strategy Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
        {/* Objective & Audience Card */}
        <div className="md:col-span-7 rounded-2xl bg-[#0a0a0c] border border-white/[0.08] p-5 sm:p-6 space-y-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-zinc-400">
              <Target className="w-3.5 h-3.5 text-blue-400" />
              <span>{labels.objective}</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-normal">
              {strategy.objective[lang]}
            </p>
          </div>

          <div className="pt-4 border-t border-white/[0.06] space-y-2">
            <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-zinc-400">
              <Users className="w-3.5 h-3.5 text-emerald-400" />
              <span>{labels.targetAudience}</span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              {strategy.targetAudience[lang]}
            </p>
          </div>
        </div>

        {/* Friction & Insight Card */}
        <div className="md:col-span-5 rounded-2xl bg-[#0a0a0c] border border-white/[0.08] p-5 sm:p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-amber-400">
              <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>{labels.audienceInsight}</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {strategy.audienceInsight[lang]}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/20 text-[11px] font-mono text-amber-300/90 leading-relaxed">
            {lang === "id"
              ? "⚡ Solusi video direct response harus langsung mematahkan kebiasaan scroll audiens dengan menyoroti friksi nyata ini."
              : "⚡ Direct response video must immediately arrest feed scrolling by addressing this exact friction."}
          </div>
        </div>

        {/* Core Angle & Hook Strategy Card */}
        <div className="md:col-span-6 rounded-2xl bg-[#0a0a0c] border border-white/[0.08] p-5 sm:p-6 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-zinc-400">
              <Zap className="w-3.5 h-3.5 text-yellow-400" />
              <span>{labels.coreAngle}</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
              {strategy.coreAngle[lang]}
            </p>
          </div>

          <div className="pt-4 border-t border-white/[0.06] space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
              {labels.hookStrategy}
            </span>
            <p className="text-xs text-zinc-300 leading-relaxed">
              {strategy.hookStrategy[lang]}
            </p>
          </div>
        </div>

        {/* Value Proposition & CTA Card */}
        <div className="md:col-span-6 rounded-2xl bg-[#0a0a0c] border border-white/[0.08] p-5 sm:p-6 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-zinc-400">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>{labels.valueProposition}</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
              {strategy.valueProposition[lang]}
            </p>
          </div>

          <div className="pt-4 border-t border-white/[0.06] space-y-2">
            <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-zinc-400">
              <ArrowRight className="w-3.5 h-3.5 text-zinc-300" />
              <span>{labels.callToAction}</span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              {strategy.callToAction[lang]}
            </p>
          </div>
        </div>

        {/* Creative Rationale (Full Width Editorial Highlight) */}
        <div className="md:col-span-12 rounded-2xl bg-[#0d0d10] border border-white/[0.1] p-5 sm:p-7 space-y-3 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/[0.03] blur-3xl rounded-full pointer-events-none" />
          <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-emerald-400">
            <Lightbulb className="w-4 h-4 text-emerald-400" />
            <span>{labels.creativeRationale}</span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-normal max-w-4xl">
            {strategy.creativeRationale[lang]}
          </p>
        </div>
      </div>
    </section>
  );
}
