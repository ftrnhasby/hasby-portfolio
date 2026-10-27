"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  ArrowDown,
  Sparkles,
  Scissors,
  Cpu,
  Code2,
  FileText,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { ProjectGallery } from "@/components/ProjectGallery";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

export function HomeView() {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].home;

  // Icon mapping for 4 core capability pillars
  const capabilityIcons = [
    <Scissors key="dr" className="w-4 h-4 text-emerald-400" />,
    <Cpu key="ai" className="w-4 h-4 text-sky-400" />,
    <Code2 key="remotion" className="w-4 h-4 text-violet-400" />,
    <FileText key="creative" className="w-4 h-4 text-amber-400" />,
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* Editorial Hero Section */}
      <section className="pt-20 sm:pt-28 pb-12 border-b border-white/[0.08] relative overflow-hidden">
        {/* Subtle background glow - minimal & restrained */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-64 bg-white/[0.02] blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8 relative z-10">
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

          {/* Clear Call-To-Action Row */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-all shadow-md"
            >
              <span>{t.watchWorkBtn}</span>
              <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
            </a>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-xs font-medium hover:bg-white/[0.08] transition-all"
            >
              <span>{t.contactMeBtn}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Quantified Technical & Craft Highlights (Factual, no fabricated ROAS) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-12 border-t border-white/[0.06]">
            <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] overflow-hidden">
              <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white tracking-tight truncate">
                {t.metrics.variationsValue}
              </div>
              <div className="text-[11px] font-mono text-zinc-400 uppercase mt-1 truncate">
                {t.metrics.variationsLabel}
              </div>
              <div className="text-[10px] text-zinc-500 mt-0.5 truncate">
                {t.metrics.variationsSub}
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] overflow-hidden">
              <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white tracking-tight truncate">
                {t.metrics.formatValue}
              </div>
              <div className="text-[11px] font-mono text-zinc-400 uppercase mt-1 truncate">
                {t.metrics.formatLabel}
              </div>
              <div className="text-[10px] text-zinc-500 mt-0.5 truncate">
                {t.metrics.formatSub}
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] overflow-hidden">
              <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white tracking-tight truncate">
                {t.metrics.engineValue}
              </div>
              <div className="text-[11px] font-mono text-zinc-400 uppercase mt-1 truncate">
                {t.metrics.engineLabel}
              </div>
              <div className="text-[10px] text-zinc-500 mt-0.5 truncate">
                {t.metrics.engineSub}
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] overflow-hidden">
              <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-emerald-400 tracking-tight truncate">
                {t.metrics.audioValue}
              </div>
              <div className="text-[11px] font-mono text-zinc-400 uppercase mt-1 truncate">
                {t.metrics.audioLabel}
              </div>
              <div className="text-[10px] text-zinc-500 mt-0.5 truncate">
                {t.metrics.audioSub}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Project Gallery Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ProjectGallery />
      </div>

      {/* What I Do: Core Capabilities Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-[#09090b] border border-white/[0.08] p-6 sm:p-14 space-y-10 overflow-hidden">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-zinc-400">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.capabilities.eyebrow}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              {t.capabilities.headline}
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {t.capabilities.subheadline}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.capabilities.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-[#0e0e11] border border-white/[0.06] hover:border-white/[0.14] transition-all duration-200 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                      {capabilityIcons[idx % capabilityIcons.length]}
                    </div>
                    <span className="text-[11px] font-mono text-zinc-400 bg-white/[0.03] border border-white/[0.06] px-2.5 py-0.5 rounded-md">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 truncate">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{pillar.evidence}</span>
                  </div>

                  <Link
                    href={pillar.link}
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-white hover:text-emerald-400 transition-colors shrink-0"
                  >
                    <span>{pillar.actionLabel}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruiter-Focused Callout Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#111114] to-[#0a0a0c] p-6 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 overflow-hidden relative">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{t.recruiterBanner.eyebrow}</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-semibold text-white tracking-tight">
              {t.recruiterBanner.headline}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              {t.recruiterBanner.subheadline}
            </p>
            <div className="pt-2 text-xs font-mono text-zinc-400 flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-zinc-500" />
              <span className="text-zinc-500">Email:</span>
              <a
                href={`mailto:${t.recruiterBanner.emailDirect}`}
                className="text-zinc-300 hover:text-white underline underline-offset-4 transition-colors"
              >
                {t.recruiterBanner.emailDirect}
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full sm:w-auto">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-all shadow-md"
            >
              <span>{t.recruiterBanner.ctaBtn}</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
