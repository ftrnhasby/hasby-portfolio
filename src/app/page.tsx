"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkles, Layers, Cpu, BarChart3, ShieldCheck } from "lucide-react";
import { ProjectGallery } from "@/components/ProjectGallery";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

export default function Home() {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].home;

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* Editorial Hero Section */}
      <section className="pt-20 sm:pt-28 pb-12 border-b border-white/[0.08] relative overflow-hidden">
        {/* Subtle background glow - minimal & restrained */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-64 bg-white/[0.02] blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-6xl mx-auto px-6 space-y-8 relative z-10">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-zinc-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>{t.eyebrow}</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-500">{t.eyebrowTag}</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1]">
              {t.heroHeadline}
            </h1>
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl font-normal leading-relaxed pt-2">
              {t.heroSubheadline}
            </p>
          </div>

          {/* Quick Action Row */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-all shadow-md"
            >
              <span>{t.initiateSprintBtn}</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="/projects/katama-coffee"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-xs font-medium hover:bg-white/[0.08] transition-all"
            >
              <span>{t.exploreCaseStudiesBtn}</span>
            </Link>
          </div>

          {/* Quantified Technical & Craft Highlights (Factual, no fabricated ROAS) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 border-t border-white/[0.06]">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">3 Video Cuts</div>
              <div className="text-[11px] font-mono text-zinc-500 uppercase mt-1">{t.metrics.variationsLabel}</div>
              <div className="text-[10px] text-zinc-500 mt-0.5">{t.metrics.variationsSub}</div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">9:16</div>
              <div className="text-[11px] font-mono text-zinc-500 uppercase mt-1">{t.metrics.formatLabel}</div>
              <div className="text-[10px] text-zinc-500 mt-0.5">{t.metrics.formatSub}</div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">Remotion</div>
              <div className="text-[11px] font-mono text-zinc-500 uppercase mt-1">{t.metrics.engineLabel}</div>
              <div className="text-[10px] text-zinc-500 mt-0.5">{t.metrics.engineSub}</div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <div className="text-2xl sm:text-3xl font-semibold text-emerald-400 tracking-tight">ElevenLabs</div>
              <div className="text-[11px] font-mono text-zinc-500 uppercase mt-1">{t.metrics.audioLabel}</div>
              <div className="text-[10px] text-zinc-500 mt-0.5">{t.metrics.audioSub}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Project Gallery Section */}
      <div className="max-w-6xl mx-auto px-6">
        <ProjectGallery />
      </div>

      {/* Creative Philosophy & Why Programmatic Direct Response Matters */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="rounded-3xl bg-[#09090b] border border-white/[0.08] p-8 sm:p-14 space-y-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-zinc-400">
              <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
              <span>{t.methodologyEyebrow}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              {t.methodologyHeadline}
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {t.methodologySub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#0e0e11] border border-white/[0.06] space-y-3">
              <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white">
                <Layers className="w-4 h-4" />
              </div>
              <h3 className="text-base font-semibold text-white tracking-tight">
                {t.pillars.pillar1Title}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {t.pillars.pillar1Desc}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0e0e11] border border-white/[0.06] space-y-3">
              <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white">
                <Cpu className="w-4 h-4" />
              </div>
              <h3 className="text-base font-semibold text-white tracking-tight">
                {t.pillars.pillar2Title}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {t.pillars.pillar2Desc}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0e0e11] border border-white/[0.06] space-y-3">
              <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white">
                <BarChart3 className="w-4 h-4" />
              </div>
              <h3 className="text-base font-semibold text-white tracking-tight">
                {t.pillars.pillar3Title}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {t.pillars.pillar3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Callout Banner */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#111114] to-[#0a0a0c] p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>{t.auditBanner.eyebrow}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
              {t.auditBanner.headline}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              {t.auditBanner.subheadline}
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-all shadow-md"
            >
              <span>{t.auditBanner.ctaBtn}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
