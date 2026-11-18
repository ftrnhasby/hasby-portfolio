"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  Sparkles,
  Mail,
} from "lucide-react";
import { NleTimelineWorkSection } from "@/components/NleTimelineWorkSection";
import { AiVideoAdsShowcase } from "@/components/AiVideoAdsShowcase";
import { InteractiveProductionWorkflow } from "@/components/InteractiveProductionWorkflow";
import { AboutBentoSection } from "@/components/AboutBentoSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

export function HomeView() {
  const { lang } = useLanguage();
  const isId = lang === "id";
  const t = TRANSLATIONS[lang].home;

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* ============================================================ */}
      {/* SECTION 02: HERO SECTION                                     */}
      {/* ============================================================ */}
      <section className="pt-16 sm:pt-24 pb-12 border-b border-white/[0.08] relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-64 bg-emerald-500/[0.03] blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12 relative z-10">
          <div className="max-w-4xl space-y-6">
            {/* Eyebrow Pill */}
            <div className="animate-hero-up inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-zinc-300 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
              <span>{t.eyebrow}</span>
              {t.eyebrowTag && (
                <>
                  <span className="text-zinc-600">•</span>
                  <span className="text-zinc-500">{t.eyebrowTag}</span>
                </>
              )}
            </div>

            {/* Main Headline - Structured as 3 crisp lines */}
            <div className="space-y-5">
              <h1 className="animate-hero-up animation-delay-60 text-3xl sm:text-5xl lg:text-[3.75rem] font-bold tracking-[-0.035em] text-white leading-[1.06]">
                <span className="block">{t.heroHeadline}</span>
                <span className="block text-zinc-400 font-medium tracking-[-0.03em] pt-1">
                  <span className="block">{t.heroHeadlineAccent1}</span>
                  <span className="block">{t.heroHeadlineAccent2}</span>
                </span>
              </h1>
              <p className="animate-hero-up animation-delay-120 text-base sm:text-lg text-zinc-300/90 font-normal leading-[1.65] pt-1 max-w-2xl">
                {t.heroSubheadline}
              </p>
            </div>

            {/* Clear Call-To-Action Row */}
            <div className="animate-hero-up animation-delay-180 flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-all shadow-md cursor-pointer"
              >
                <span>{t.watchSampleBtn}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <a
                href="/Hasby_Assyadiqi_CV.pdf"
                download="Hasby_Assyadiqi_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-xs font-medium hover:bg-white/[0.08] transition-all cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-transform group-hover:translate-y-0.5" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* ============================================================ */}
          {/* SECTION 03: STATS & SOCIAL PROOF TRUST BAR                  */}
          {/* ============================================================ */}
          <div className="animate-hero-up animation-delay-240 pt-8 sm:pt-10 border-t border-white/[0.08]">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0c0c0e]/80 backdrop-blur-sm divide-y sm:divide-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:divide-x divide-white/[0.08] overflow-hidden shadow-2xl">
              {/* Stat 1: Experience */}
              <div className="p-5 sm:p-6 lg:p-7 flex flex-col justify-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-none">
                  {t.trustStats?.stat1Number || "3+"}
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 font-normal mt-2 sm:mt-2.5">
                  {t.trustStats?.stat1Label || (isId ? "Tahun pengalaman" : "Years editing")}
                </p>
              </div>

              {/* Stat 2: Volume/Output */}
              <div className="p-5 sm:p-6 lg:p-7 flex flex-col justify-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-none">
                  {t.trustStats?.stat2Number || "150+"}
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 font-normal mt-2 sm:mt-2.5">
                  {t.trustStats?.stat2Label || (isId ? "Video terselesaikan" : "Videos delivered")}
                </p>
              </div>

              {/* Stat 3: Brands & creators */}
              <div className="p-5 sm:p-6 lg:p-7 flex flex-col justify-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-none">
                  {t.trustStats?.stat3Number || "30+"}
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 font-normal mt-2 sm:mt-2.5">
                  {t.trustStats?.stat3Label || (isId ? "Brand & kreator" : "Brands & creators")}
                </p>
              </div>

              {/* Column 4: Platforms & Trust Logos */}
              <div className="p-5 sm:p-6 lg:p-7 flex flex-col justify-center col-span-2 sm:col-span-2 lg:col-span-1">
                <p className="text-[11px] sm:text-xs text-zinc-400 font-normal mb-3">
                  {t.trustStats?.platformsLabel || (isId ? "Dioptimalkan untuk feed:" : "Optimized for modern feeds:")}
                </p>
                <div className="flex items-center gap-4 sm:gap-5 flex-wrap">
                  {/* Meta */}
                  <div
                    className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors group cursor-default"
                    title="Meta Ads (Instagram Reels & Feed)"
                  >
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-current shrink-0 text-zinc-200 group-hover:text-white transition-colors"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-label="Meta"
                    >
                      <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z" />
                    </svg>
                    <span className="text-xs sm:text-sm font-semibold tracking-tight text-zinc-100 group-hover:text-white transition-colors">
                      Meta
                    </span>
                  </div>

                  {/* TikTok */}
                  <div
                    className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors group cursor-default"
                    title="TikTok Ads & Organic Feed"
                  >
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-current shrink-0 text-zinc-200 group-hover:text-white transition-colors"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-label="TikTok"
                    >
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                    <span className="text-xs sm:text-sm font-semibold tracking-tight text-zinc-100 group-hover:text-white transition-colors">
                      TikTok
                    </span>
                  </div>

                  {/* YouTube Shorts */}
                  <div
                    className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors group cursor-default"
                    title="YouTube Shorts"
                  >
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-red-500 shrink-0 group-hover:scale-105 transition-transform"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-label="YouTube Shorts"
                    >
                      <path d="m18.931 9.99-1.441-.601 1.717-.913a4.48 4.48 0 0 0 1.874-6.078 4.506 4.506 0 0 0-6.09-1.874L4.792 5.929a4.504 4.504 0 0 0-2.402 4.193 4.521 4.521 0 0 0 2.666 3.904c.036.012 1.442.6 1.442.6l-1.706.901a4.51 4.51 0 0 0-2.369 3.967A4.528 4.528 0 0 0 6.93 24c.725 0 1.437-.174 2.08-.508l10.21-5.406a4.494 4.494 0 0 0 2.39-4.192 4.525 4.525 0 0 0-2.678-3.904ZM9.597 15.19V8.824l6.007 3.184z" />
                    </svg>
                    <span className="text-xs sm:text-sm font-semibold tracking-tight text-zinc-100 group-hover:text-white transition-colors">
                      YT Shorts
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 03B: AI VIDEO ADS (MADE WITH AI, EDITED LIKE REAL)   */}
      {/* ============================================================ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AiVideoAdsShowcase />
      </div>

      {/* Subtle Section Divider */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="w-full border-t border-white/[0.08]" />
      </div>

      {/* ============================================================ */}
      {/* SECTION 04: NLE TIMELINE SCRUBBER (WORK WORTH WATCHING)     */}
      {/* ============================================================ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <NleTimelineWorkSection />
      </div>

      {/* Subtle Section Divider */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="w-full border-t border-white/[0.08]" />
      </div>

      {/* ============================================================ */}
      {/* SECTION 08: 5-STAGE PRODUCTION WORKFLOW ENGINE               */}
      {/* ============================================================ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <InteractiveProductionWorkflow />
      </div>

      {/* ============================================================ */}
      {/* SECTION 09: ABOUT HASBY UNIFIED BENTO DOSSIER                */}
      {/* ============================================================ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AboutBentoSection />
      </div>
    </div>
  );
}
