"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Play, Pause, Film, ChevronLeft, ChevronRight } from "lucide-react";
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
    id: "oximus-hydra-reel",
    frameCode: "FRM // 01",
    tag: { id: "AI DIRECT RESPONSE", en: "AI DIRECT RESPONSE" },
    title: "Oximus Hydra ZDP1118",
    technique: {
      id: "Difusi Gerak · Audio Foley Taktil",
      en: "Motion Diffusion · Tactile Foley",
    },
    videoSrc: "/videos/oximus/oximus-hydra-zdp1118-v1.mp4",
    poster: "/images/oximus/oximus_cover_poster.jpg",
    targetHref: "/projects/oximus-hydra-zdp1118",
  },
  {
    id: "oximus-hydra-v2-reel",
    frameCode: "FRM // 02",
    tag: { id: "AI HEALTH & ERGO", en: "AI HEALTH & ERGO" },
    title: "Oximus: Goodbye Tech-Neck",
    technique: {
      id: "POV Dinamis · Trust Anchor Detik 3",
      en: "Dynamic Cinematic POVs · Rapid Trust Anchor",
    },
    videoSrc: "/videos/oximus/oximus-hydra-zdp1118-v2.mp4",
    poster: "/images/oximus/oximus_v2_tech_neck_hook.jpg",
    targetHref: "/projects/oximus-hydra-zdp1118",
  },
  {
    id: "agoda-getaway-reel",
    frameCode: "FRM // 03",
    tag: { id: "CINEMATIC AI DRAMA", en: "CINEMATIC AI DRAMA" },
    title: "Agoda: Weekend Getaway",
    technique: {
      id: "Kontras Warkop-Resort · Pattern Interrupt",
      en: "Warkop-to-Resort Hard Cut · Pattern Interrupt",
    },
    videoSrc: "/videos/agoda/agoda-weekend-getaway-v1.mp4",
    poster: "/images/agoda/agoda_cover_poster.jpg",
    targetHref: "/projects/agoda-weekend-getaway",
  },
  {
    id: "product-macro-render",
    frameCode: "FRM // 04",
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
    frameCode: "FRM // 05",
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
        <span className="text-zinc-400 font-medium">↔ SWIPE / DRAG TO SEEK</span>
        <span className="text-emerald-400">● 9:16 FEED SAFE</span>
      </div>
    </div>
  );
}

export function AiVideoAdsShowcase() {
  const { lang } = useLanguage();
  const isId = lang === "id";
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftStartRef = useRef(0);
  const dragDistanceRef = useRef(0);
  const userInteractingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isInteractingRef = useRef(false);

  // Triple the items for continuous seamless infinite wrap
  const displayItems = [...REEL_ITEMS, ...REEL_ITEMS, ...REEL_ITEMS];

  const pauseAutoScrollTemporarily = (durationMs = 3500) => {
    isInteractingRef.current = true;
    if (userInteractingTimeoutRef.current) {
      clearTimeout(userInteractingTimeoutRef.current);
    }
    userInteractingTimeoutRef.current = setTimeout(() => {
      isInteractingRef.current = false;
    }, durationMs);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Center in middle third initially
    const initScroll = () => {
      const oneThird = container.scrollWidth / 3;
      if (container.scrollLeft === 0 && oneThird > 0) {
        container.scrollLeft = oneThird;
      }
    };
    initScroll();

    let animationFrameId: number;
    const speed = 0.65; // pixels per frame

    const step = () => {
      if (!isPaused && !isInteractingRef.current && container) {
        container.scrollLeft += speed;
        const oneThird = container.scrollWidth / 3;
        if (oneThird > 0) {
          if (container.scrollLeft >= oneThird * 2) {
            container.scrollLeft -= oneThird;
          } else if (container.scrollLeft <= 0) {
            container.scrollLeft += oneThird;
          }
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (userInteractingTimeoutRef.current) {
        clearTimeout(userInteractingTimeoutRef.current);
      }
    };
  }, [isPaused]);

  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollRef.current;
    if (!container) return;
    isDraggingRef.current = true;
    isInteractingRef.current = true;
    dragDistanceRef.current = 0;
    startXRef.current = e.pageX - container.offsetLeft;
    scrollLeftStartRef.current = container.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const container = scrollRef.current;
    if (!container) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startXRef.current) * 1.35;
    dragDistanceRef.current = Math.abs(x - startXRef.current);
    container.scrollLeft = scrollLeftStartRef.current - walk;

    // Seamless boundary wrapping while dragging
    const oneThird = container.scrollWidth / 3;
    if (oneThird > 0) {
      if (container.scrollLeft >= oneThird * 2) {
        container.scrollLeft -= oneThird;
        scrollLeftStartRef.current -= oneThird;
      } else if (container.scrollLeft <= 0) {
        container.scrollLeft += oneThird;
        scrollLeftStartRef.current += oneThird;
      }
    }
  };

  const handleMouseUpOrLeave = () => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      pauseAutoScrollTemporarily(3000);
    }
  };

  const handleTouchStart = () => {
    isInteractingRef.current = true;
  };

  const handleTouchEnd = () => {
    pauseAutoScrollTemporarily(3500);
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    if (dragDistanceRef.current > 8) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const scrollByCard = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    pauseAutoScrollTemporarily(4000);

    const firstCard = container.querySelector(".reel-card") as HTMLElement | null;
    const cardWidth = firstCard ? firstCard.offsetWidth + 24 : 320;
    const delta = direction === "right" ? cardWidth : -cardWidth;

    container.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section className="space-y-8 scroll-mt-24" id="ai-video-ads">
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
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

            {/* Interactive Navigation Controls: Prev / Next / Pause */}
            <div className="flex items-center gap-2 lg:justify-end">
              {/* Previous Button */}
              <button
                type="button"
                onClick={() => scrollByCard("left")}
                className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-white/[0.1] bg-white/[0.04] hover:bg-white/[0.08] hover:border-emerald-500/30 text-zinc-300 hover:text-white transition-all cursor-pointer active:scale-95"
                title={isId ? "Geser ke kiri" : "Scroll left"}
                aria-label="Previous reel"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={() => scrollByCard("right")}
                className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-white/[0.1] bg-white/[0.04] hover:bg-white/[0.08] hover:border-emerald-500/30 text-zinc-300 hover:text-white transition-all cursor-pointer active:scale-95"
                title={isId ? "Geser ke kanan" : "Scroll right"}
                aria-label="Next reel"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Pause / Resume Button */}
              <button
                type="button"
                onClick={() => setIsPaused((prev) => !prev)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.1] bg-white/[0.04] hover:bg-white/[0.08] hover:border-emerald-500/30 text-xs font-mono text-zinc-300 transition-colors cursor-pointer"
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
      {/* THE CINEMATIC FILMSTRIP / INTERACTIVE VIDEO REEL            */}
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

          {/* Interactive Scroll & Drag Track Container */}
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="flex flex-row flex-nowrap items-stretch gap-6 px-6 overflow-x-auto select-none no-scrollbar cursor-grab active:cursor-grabbing w-full scroll-smooth"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {displayItems.map((item, idx) => (
              <Link
                key={`${item.id}-${idx}`}
                href={item.targetHref}
                onClick={handleLinkClick}
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
                className="reel-card group relative w-[240px] sm:w-[280px] md:w-[310px] aspect-[9/16] shrink-0 rounded-2xl overflow-hidden border border-white/[0.1] bg-[#0c0c0e] transition-all duration-300 hover:border-emerald-400/50 hover:shadow-[0_12px_40px_rgba(52,211,153,0.18)] hover:-translate-y-1 flex flex-col justify-between p-4 select-none cursor-pointer"
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
                  draggable={false}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05] pointer-events-none"
                />

                {/* Film Tint Gradient Overlays for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/60 pointer-events-none" />

                {/* Top Badge: Frame Number & Feed Format */}
                <div className="relative z-10 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono font-medium text-zinc-300">
                    {item.frameCode}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-[10px] font-mono font-medium text-emerald-300">
                    9:16 FEED
                  </span>
                </div>

                {/* Bottom Metadata & Hover Reveal */}
                <div className="relative z-10 space-y-1.5 pt-4 pointer-events-none">
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
