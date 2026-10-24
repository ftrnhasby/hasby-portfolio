"use client";

import { HonestEvaluation } from "@/types/project";
import { CheckCircle2, AlertCircle, Info, Lightbulb, RefreshCw } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

interface HonestEvaluationSectionProps {
  evaluation: HonestEvaluation;
}

export function HonestEvaluationSection({ evaluation }: HonestEvaluationSectionProps) {
  const { lang } = useLanguage();
  const tDetail = TRANSLATIONS[lang].projectDetail;
  const tEval = TRANSLATIONS[lang].evaluation;

  return (
    <div className="rounded-2xl bg-[#0a0a0c] border border-white/[0.08] p-6 sm:p-8 space-y-8">
      {/* Section Header */}
      <div className="border-b border-white/[0.06] pb-6">
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
          <Lightbulb className="w-3.5 h-3.5 text-zinc-300" />
          <span>{tDetail.evaluationSectionTitle}</span>
        </div>
        <h4 className="text-lg font-semibold text-white tracking-tight mt-1">
          {tDetail.evaluationSectionSub}
        </h4>
      </div>

      {/* Honest Creative Assessment Notice */}
      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3">
        <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
        <p className="text-xs text-zinc-400 leading-relaxed">
          {evaluation.creativeAssessment[lang]}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Top Performers Column */}
        <div className="p-5 rounded-xl bg-[#0d0d10] border border-white/[0.06] space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
            <CheckCircle2 className="w-4 h-4" />
            <span>{tEval.topTitle}</span>
          </div>
          <ul className="space-y-3">
            {evaluation.topPerformers.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                <span>{item[lang]}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Underperformers Column */}
        <div className="p-5 rounded-xl bg-[#0d0d10] border border-white/[0.06] space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400">
            <AlertCircle className="w-4 h-4" />
            <span>{tEval.underTitle}</span>
          </div>
          <ul className="space-y-3">
            {evaluation.underperformers.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                <span>{item[lang]}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Learnings and Next Iteration */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        {/* Creative Learnings */}
        <div className="p-5 rounded-xl bg-[#0d0d10] border border-white/[0.06] space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-300">
            <Lightbulb className="w-4 h-4 text-zinc-400" />
            <span>{tEval.learningsTitle}</span>
          </div>
          <div className="space-y-2">
            {evaluation.creativeLearnings.map((learning, idx) => (
              <p key={idx} className="text-xs text-zinc-300 leading-relaxed bg-black/40 p-3 rounded-lg border border-white/[0.04]">
                &ldquo;{learning[lang]}&rdquo;
              </p>
            ))}
          </div>
        </div>

        {/* Next Iteration Strategy */}
        <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-300">
            <RefreshCw className="w-4 h-4 text-zinc-400" />
            <span>{tEval.iterationTitle}</span>
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed">
            {evaluation.nextIterationStrategy[lang]}
          </p>
        </div>
      </div>
    </div>
  );
}
