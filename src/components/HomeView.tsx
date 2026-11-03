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
  Layers,
  Film,
  Volume2,
  Smartphone,
} from "lucide-react";
import { ProjectGallery } from "@/components/ProjectGallery";
import { FeaturedAdPlayer } from "@/components/FeaturedAdPlayer";
import { ScrollReveal } from "@/components/ScrollReveal";
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

  // Icon mapping for 4 production standards
  const standardIcons = [
    <Layers key="testing" className="w-3.5 h-3.5 text-indigo-400" />,
    <Film key="workflow" className="w-3.5 h-3.5 text-sky-400" />,
    <Volume2 key="audio" className="w-3.5 h-3.5 text-emerald-400" />,
    <Smartphone key="layout" className="w-3.5 h-3.5 text-amber-400" />,
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* Editorial Hero Section with 2-column layout on desktop, stacked on mobile */}
      <section className="pt-16 sm:pt-24 pb-12 border-b border-white/[0.08] relative overflow-hidden">
        {/* Subtle background glow - minimal & restrained */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-64 bg-indigo-500/[0.03] blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Hero Column (Text & Main CTA Buttons) */}
            <div className="order-1 lg:order-none lg:col-span-7 space-y-6">
              {/* Eyebrow Pill */}
              <div className="animate-hero-up inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>{t.eyebrow}</span>
                <span className="text-zinc-600">•</span>
                <span className="text-zinc-500">{t.eyebrowTag}</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="animate-hero-up animation-delay-60 text-3xl sm:text-5xl lg:text-5xl font-medium tracking-tight text-white leading-[1.15]">
                  {t.heroHeadline}
                </h1>
                <p className="animate-hero-up animation-delay-120 text-base sm:text-lg text-zinc-400 font-normal leading-relaxed pt-1">
                  {t.heroSubheadline}
                </p>
              </div>

              {/* Clear Call-To-Action Row */}
              <div className="animate-hero-up animation-delay-180 flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-all shadow-md"
                >
                  <span>{t.watchSampleBtn}</span>
                  <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
                </a>

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-xs font-medium hover:bg-white/[0.08] transition-all"
                >
                  <span>{t.discussProjectBtn}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            {/* Vertical Featured Sample Ad Player */}
            <div className="order-2 lg:order-none lg:col-span-5 w-full flex justify-center lg:justify-end animate-hero-scale animation-delay-100">
              <FeaturedAdPlayer />
            </div>
          </div>

          {/* Production Standards Cards (4 distinct standalone cards) */}
          <div className="animate-hero-up animation-delay-240 pt-8 border-t border-white/[0.06]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {t.standards.map((std, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl border border-white/[0.08] bg-[#0c0c0e]/80 backdrop-blur-sm hover:border-white/[0.16] hover:bg-[#121216] transition-all duration-200 space-y-2 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                      {standardIcons[idx % standardIcons.length]}
                      <span>{std.tag}</span>
                    </div>

                    <h4 className="text-sm sm:text-base font-semibold text-white tracking-tight">
                      {std.title}
                    </h4>

                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {std.desc}
                    </p>
                  </div>
                </div>
              ))}
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
        <ScrollReveal>
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
                <ScrollReveal key={idx} delay={idx * 100}>
                  <div className="p-6 sm:p-7 rounded-2xl bg-[#0e0e11] border border-white/[0.06] hover:border-white/[0.14] transition-all duration-200 flex flex-col justify-between space-y-4 h-full">
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
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Recruiter-Focused Callout Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
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
        </ScrollReveal>
      </section>
    </div>
  );
}
