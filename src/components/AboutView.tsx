"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Check,
  BrainCircuit,
  Sparkles,
  Compass,
  Film,
  Code2,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

export function AboutView() {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].about;

  // Icons for 3 skill capability groups
  const skillIcons = [
    <Compass key="strat" className="w-4 h-4 text-emerald-400" />,
    <Film key="prod" className="w-4 h-4 text-sky-400" />,
    <Code2 key="prog" className="w-4 h-4 text-violet-400" />,
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* 1. Header & Portrait Profile Section */}
      <section className="pt-20 sm:pt-28 pb-12 border-b border-white/[0.08] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-64 bg-white/[0.02] blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-zinc-300">
            <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
            <span>{t.eyebrow}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left: Bio & Positioning */}
            <div className="lg:col-span-8 space-y-6">
              <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
                {t.headline}
              </h1>
              <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
                {t.subheadline}
              </p>

              {/* Profile Intro Callout */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#0d0d10] border border-white/[0.08] space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 block font-medium">
                  {t.profileRole}
                </span>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {t.profileBio}
                </p>
              </div>
            </div>

            {/* Right: Portrait Image */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end">
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.1] bg-[#0c0c0e] shadow-[0_20px_50px_rgba(0,0,0,0.6)] w-full max-w-[280px] aspect-[425/531]">
                <Image
                  src="/images/hasby-formal.png"
                  alt={t.portraitAlt}
                  width={425}
                  height={531}
                  priority
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 inset-x-3 text-center">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-300">
                    Fitran Hasby • Bandar Lampung, ID
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Creative Philosophy & 5 Guiding Principles */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Narrative & Core Rule */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-5 text-xs sm:text-sm text-zinc-400 leading-relaxed">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
              {t.storyHeading}
            </h2>
            <p>{t.storyP1}</p>
            <p>{t.storyP2}</p>
            <p>{t.storyP3}</p>
          </div>

          <div className="lg:col-span-5 p-6 rounded-2xl bg-[#0a0a0c] border border-white/[0.08] space-y-3.5">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-emerald-400 font-medium">
              <BrainCircuit className="w-4 h-4 text-emerald-400" />
              <span>{t.thesisBoxTitle}</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {t.thesisBoxText}
            </p>
          </div>
        </div>

        {/* 5 Practical Principles */}
        <div className="rounded-3xl bg-[#09090b] border border-white/[0.08] p-6 sm:p-10 space-y-6">
          <div className="border-b border-white/[0.06] pb-4 space-y-1">
            <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight">
              {t.principlesHeading}
            </h3>
            <p className="text-xs text-zinc-400">
              {t.principlesSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.principles.map((p, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0e0e11] border border-white/[0.06] hover:border-white/[0.12] transition-colors space-y-2.5 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-semibold text-zinc-500 uppercase tracking-wider">
                      Principle 0{idx + 1}
                    </span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <h4 className="text-sm font-semibold text-white tracking-tight">
                    {p.title}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Skills & Tech Stack — Organized by Capability (3 Groups) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="border-b border-white/[0.06] pb-6 space-y-1">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400">
            <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
            <span>{t.skillsHeading}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
            {t.skillsSub}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.skills.map((group, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#0a0a0c] border border-white/[0.08] hover:border-white/[0.14] transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                    {skillIcons[idx % skillIcons.length]}
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400 bg-white/[0.03] border border-white/[0.06] px-2.5 py-0.5 rounded-md">
                    {group.tag}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-white tracking-tight">
                    {group.category}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {group.summary}
                  </p>
                </div>

                <ul className="space-y-2.5 pt-2 border-t border-white/[0.04] text-xs text-zinc-300">
                  {group.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2.5">
                      <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Simplified Closing CTA Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#111114] to-[#0a0a0c] border border-white/[0.08] text-center space-y-6 overflow-hidden relative">
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-32 bg-emerald-500/[0.03] blur-3xl pointer-events-none rounded-full" />

          {/* Availability Status Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-zinc-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{t.cta.status}</span>
          </div>

          <div className="max-w-xl mx-auto space-y-3">
            <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              {t.cta.heading}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              {t.cta.subheadline}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-all shadow-md"
            >
              <span>{t.cta.primaryBtn}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/#work"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-xs font-medium hover:bg-white/[0.08] transition-all"
            >
              <span>{t.cta.secondaryBtn}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
