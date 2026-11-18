"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Play, Pause, Film } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

interface ReelItem {
  id: string;
  frameCode: string;
  tag: { id: string; en: string };
  title: string;
  technique: { id: string; en: string };
  videoSrc: string;
  poster: string;
  targetHref: string;
}

const REEL_ITEMS: ReelItem[] = [
  {
    id: "aura-spec-ad",
    frameCode: "FRM // 01",
    tag: { id: "AI SPEC COMMERCIAL", en: "AI SPEC COMMERCIAL" },
    title: "Aura Botanicals",
    technique: {
      id: "Visual Generatif · Speed Ramp Pacing",
      en: "Generative Diffusion · Dynamic Pacing",
    },
    videoSrc: "/videos/katama/katama_v3_deadline_emergency.mp4",
    poster: "/images/katama/katama_v3_poster.jpg",
    targetHref: "/work?category=ai-ads",
  },
  {
    id: "virtual-creator-ugc",
    frameCode: "FRM // 02",
    tag: { id: "VIRTUAL CREATOR UGC", en: "VIRTUAL CREATOR UGC" },
    title: "Lumina AI Persona",
    technique: {
      id: "Lip-sync Akurat · Hook Organik",
      en: "Precision Lip-sync · Native Feed Hook",
    },
    videoSrc: "/videos/katama/katama_v1_editorial.mp4",
    poster: "/images/katama/katama_v1_poster.jpg",
    targetHref: "/work?category=ai-ads",
  },
  {
    id: "product-macro-render",
    frameCode: "FRM // 03",
    tag: { id: "HYPER-REAL PRODUCT", en: "HYPER-REAL PRODUCT" },
    title: "Sensory Coffee Craft",
    technique: {
      id: "Simulasi B-Roll · Sound Foley",
      en: "Macro Simulation · Sensory Foley Sound",
    },
    videoSrc: "/videos/nespresso/nespresso-vertuo-v1.mp4",
    poster: "/images/nespresso/nespresso_v1_poster.jpg",
    targetHref: "/work?category=ai-ads",
  },
  {
    id: "cinematic-drama-beat",
    frameCode: "FRM // 04",
    tag: { id: "CINEMATIC MINI-DRAMA", en: "CINEMATIC MINI-DRAMA" },
    title: "Midnight Deadline Rush",
    technique: {
      id: "Pattern Interrupt · Story Arc",
      en: "Pattern Interrupt · Narrative Arc",
    },
    videoSrc: "/videos/katama/katama_v3_deadline_emergency.mp4",
    poster: "/images/katama/katama_v3_poster.jpg",
    targetHref: "/work?category=ai-ads",
  },
  {
    id: "aesthetic-brand-mood",
    frameCode: "FRM // 05",
    tag: { id: "BRAND AWARENESS FILM", en: "BRAND AWARENESS FILM" },
    title: "Velvet Atmosphere",
    technique: {
      id: "Atmospheric Lighting · Sound Design",
      en: "Atmospheric Lighting · Sound Design",
    },
    videoSrc: "/videos/katama/katama_v1_editorial.mp4",
    poster: "/images/katama/katama_v1_poster.jpg",
    targetHref: "/work?category=ai-ads",
  },
];

function SprocketRail() {
  return (
    <div className="w-full bg-[#0c0c0e] border-y border-white/[0.08] px-4 py-2 flex items-center justify-between overflow-hidden select-none">
      <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-400 shrink-0">
        <Film className="w-3.5 h-3.5 text-zinc-400" />
        <span className="font-semibold tracking-wider">35MM REEL</span>
      </div>

      {/* 100% full-width repeating sprocket holes via SVG pattern */}
      <div className="flex-1 mx-4 h-3.5 overflow-hidden">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="sprocket-pattern" width="22" height="14" patternUnits="userSpaceOnUse">
              <rect
                x="3"
                y="1"
                width="14"
                height="8"
                rx="2"
                fill="none"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sprocket-pattern)" />
        </svg>
      </div>

      <div className="hidden sm:flex items-center gap-5 text-[10px] font-mono text-zinc-500 shrink-0">
        <span>TIMELINE REEL // 24 FPS</span>
        <span>REC [00:14:28:12]</span>
        <span className="text-emerald-400">● 9:16 FEED SAFE</span>
      </div>
    </div>
  );
}

export function AiVideoAdsShowcase() {
  const { lang } = useLanguage();
  const isId = lang === "id";
  const [isPaused, setIsPaused] = useState(false);

  // Duplicated list (10 cards) for seamless infinite marquee loop
  const displayItems = [...REEL_ITEMS, ...REEL_ITEMS];

  return (
    <section className="space-y-8 scroll-mt-24" id="ai-video-ads">
      {/* Dynamic Keyframes for 100% reliable hardware-accelerated marquee */}
      <style jsx>{`
        @keyframes filmstripScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .filmstrip-marquee-track {
          display: flex !important;
          flex-direction: row !important;
          flex-wrap: nowrap !important;
          width: max-content !important;
          animation: filmstripScroll 45s linear infinite;
          will-change: transform;
        }
        .filmstrip-marquee-track:hover,
        .filmstrip-paused {
          animation-play-state: paused !important;
        }
      `}</style>

      <ScrollReveal>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/[0.08] pb-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/[0.08] border border-emerald-500/20 text-xs font-mono uppercase tracking-[0.18em] text-emerald-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>
                {isId ? "Laboratorium Kreatif AI // Linimasa" : "AI Creative Lab // Timeline Reel"}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.08]">
              {isId ? (
                <>
                  Eksplorasi Visual AI.{" "}
                  <span className="text-zinc-500 font-normal">
                    Diproses Presisi Linimasa Editing.
                  </span>
                </>
              ) : (
                <>
                  Where AI Visuals Meet{" "}
                  <span className="text-zinc-500 font-normal">
                    Human Timeline Precision.
                  </span>
                </>
              )}
            </h2>
          </div>

          {/* Right Column: Clean Description Stacked with Controls */}
          <div className="max-w-md space-y-3.5 lg:text-right">
            <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
              {isId
                ? "Iklan naratif, karakter, dan kreator yang di-generate dengan AI — lalu diedit dengan pacing, captions, dan audio layaknya rekaman live-action asli."
                : "Story ads, characters, and creators generated with AI — then cut with the same pacing, captions, and sound as a live-action ad."}
            </p>

            {/* Action Button: Pause / Resume Reel */}
            <div className="flex items-center lg:justify-end">
              <button
                type="button"
                onClick={() => setIsPaused((prev) => !prev)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.1] bg-white/[0.04] hover:bg-white/[0.08] text-xs font-mono text-zinc-300 transition-colors cursor-pointer"
                title={isPaused ? "Play infinite reel" : "Pause infinite reel"}
              >
                {isPaused ? (
                  <>
                    <Play className="w-3 h-3 text-emerald-400 fill-emerald-400" />
                    <span>Resume</span>
                  </>
                ) : (
                  <>
                    <Pause className="w-3 h-3 text-zinc-400 fill-zinc-400" />
                    <span>Pause</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* ============================================================ */}
      {/* THE CINEMATIC FILMSTRIP / INFINITE VIDEO REEL               */}
      {/* ============================================================ */}
      <div className="relative rounded-2xl border border-white/[0.08] bg-[#070708] overflow-hidden shadow-2xl">
        {/* Top Sprocket Rail (100% full width, edge-to-edge) */}
        <SprocketRail />

        {/* Outer Viewport with Left/Right Ambient Gradient Vignettes */}
        <div className="relative overflow-hidden w-full py-6 sm:py-8 bg-[#09090b]/80">
          {/* Subtle Left Vignette Fade */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-20 bg-gradient-to-r from-[#070708] to-transparent" />
          {/* Subtle Right Vignette Fade */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-20 bg-gradient-to-l from-[#070708] to-transparent" />

          {/* Marquee Track Container: 100% GUARANTEED horizontal row */}
          <div
            className={`flex flex-row flex-nowrap items-stretch gap-6 px-4 w-max filmstrip-marquee-track ${
              isPaused ? "filmstrip-paused" : ""
            }`}
          >
            {displayItems.map((item, idx) => (
              <Link
                key={`${item.id}-${idx}`}
                href={item.targetHref}
                className="group relative w-[240px] sm:w-[280px] md:w-[310px] aspect-[9/16] shrink-0 rounded-2xl overflow-hidden border border-white/[0.1] bg-[#0c0c0e] transition-all duration-300 hover:border-emerald-400/50 hover:shadow-[0_12px_40px_rgba(52,211,153,0.18)] hover:-translate-y-1 flex flex-col justify-between p-4 select-none cursor-pointer"
              >
                {/* Looping Video Background */}
                <video
                  src={item.videoSrc}
                  poster={item.poster}
                  muted
                  loop
                  playsInline
                  autoPlay
                  preload="metadata"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />

                {/* Film Tint Gradient Overlays for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/60 pointer-events-none" />

                {/* Top Badge: Frame Number & Feed Format */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono font-medium text-zinc-300">
                    {item.frameCode}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-[10px] font-mono font-medium text-emerald-300">
                    9:16 FEED
                  </span>
                </div>

                {/* Bottom Metadata & Hover Reveal */}
                <div className="relative z-10 space-y-1.5 pt-4">
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                    {item.tag[lang]}
                  </span>

                  <h4 className="text-base font-bold text-white tracking-tight leading-snug group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-xs text-zinc-400 leading-relaxed line-clamp-1 font-normal">
                    {item.technique[lang]}
                  </p>

                  <div className="pt-1.5 flex items-center gap-1.5 text-xs font-mono font-semibold text-white group-hover:text-emerald-300 transition-colors">
                    <span>{isId ? "Tonton proyek" : "Watch project"}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Sprocket Rail (100% full width, edge-to-edge) */}
        <SprocketRail />
      </div>
    </section>
  );
}
