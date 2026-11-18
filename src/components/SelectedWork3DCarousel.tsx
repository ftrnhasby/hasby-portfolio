"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

interface FeaturedCut {
  id: string;
  projectSlug: string;
  projectTitle: string;
  categoryLabel: { id: string; en: string };
  cutTitle: { id: string; en: string };
  angleLabel: { id: string; en: string };
  duration: string;
  poster: string;
  videoSrc: string;
}

const FEATURED_CAROUSEL_ITEMS: FeaturedCut[] = [
  {
    id: "katama-feature",
    projectSlug: "katama-coffee",
    projectTitle: "Katama Coffee & Space",
    categoryLabel: { id: "Product Ads", en: "Product Ads" },
    cutTitle: {
      id: "Cut 02: Eksplorasi Fitur Free Print",
      en: "Cut 02: Free Print Amenity Hook",
    },
    angleLabel: {
      id: "Hook Diferensiasi Unik",
      en: "Unique Hook Discovery",
    },
    duration: "44s",
    poster: "/images/katama/katama_v2_free_print_poster.jpg",
    videoSrc: "/videos/katama/katama_v2_editorial.mp4",
  },
  {
    id: "nespresso-feature",
    projectSlug: "nespresso-vertuo",
    projectTitle: "Nespresso Vertuo Pop",
    categoryLabel: { id: "Product Ads", en: "Product Ads" },
    cutTitle: {
      id: "Cut 01: The 08:55 AM Meeting Emergency",
      en: "Cut 01: The 08:55 AM Meeting Emergency",
    },
    angleLabel: {
      id: "Urgensi Pekerja Remote",
      en: "Remote Work Time Friction",
    },
    duration: "45s",
    poster: "/images/nespresso/nespresso_v1_poster.jpg",
    videoSrc: "/videos/nespresso/nespresso-vertuo-v1.mp4",
  },
];

interface CarouselCardProps {
  item: FeaturedCut;
  index: number;
  activeIndex: number;
  totalItems: number;
  onSelect: (index: number) => void;
  lang: "id" | "en";
}

function CarouselCard({
  item,
  index,
  activeIndex,
  totalItems,
  onSelect,
  lang,
}: CarouselCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const isActive = index === activeIndex;
  const isLeft = index < activeIndex;
  const isRight = index > activeIndex;

  // Whenever card ceases to be active, pause video and reset
  useEffect(() => {
    if (!isActive && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isActive]);

  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!isActive) {
      onSelect(index);
      return;
    }
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Compute dynamic 3D transform classes
  let transformStyle = "";
  let zIndex = 10;
  let opacity = "opacity-40 hover:opacity-75";

  if (isActive) {
    transformStyle =
      "scale-100 translate-x-0 translate-y-0 rotate-0 shadow-[0_25px_60px_rgba(0,0,0,0.9)]";
    zIndex = 30;
    opacity = "opacity-100";
  } else if (isLeft) {
    transformStyle =
      "scale-[0.84] -translate-x-32 sm:-translate-x-56 -rotate-6 filter blur-[0.5px]";
    zIndex = 20;
  } else if (isRight) {
    transformStyle =
      "scale-[0.84] translate-x-32 sm:translate-x-56 rotate-6 filter blur-[0.5px]";
    zIndex = 20;
  }

  return (
    <div
      onClick={() => {
        if (!isActive) {
          onSelect(index);
        }
      }}
      className={`absolute transition-all duration-500 ease-out select-none rounded-3xl ${transformStyle} ${opacity} ${
        isActive ? "cursor-default" : "cursor-pointer"
      }`}
      style={{ zIndex }}
    >
      {/* 9:16 Vertical Video Card */}
      <div className="w-[260px] sm:w-[290px] aspect-[9/16] rounded-3xl bg-[#0a0a0d] border border-white/[0.12] overflow-hidden flex flex-col justify-between p-4 sm:p-5 relative group">
        {/* Video / Poster Stage */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            ref={videoRef}
            src={item.videoSrc}
            poster={item.poster}
            muted={isMuted}
            playsInline
            loop
            preload="metadata"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onClick={isActive ? togglePlay : undefined}
            className={`w-full h-full object-cover ${
              isActive ? "cursor-pointer" : ""
            }`}
          />

          {/* Gradient Dark Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t pointer-events-none transition-opacity duration-300 ${
              isPlaying
                ? "from-black/90 via-black/20 to-black/50"
                : "from-black/95 via-black/40 to-black/60"
            }`}
          />
        </div>

        {/* Card Top Header */}
        <div className="relative z-10 flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase bg-black/60 backdrop-blur-md text-amber-300 border border-amber-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>{item.categoryLabel[lang]}</span>
          </span>

          <div className="flex items-center gap-1.5">
            {isActive && (
              <button
                type="button"
                onClick={toggleMute}
                className="px-2 py-0.5 rounded-md text-[10px] font-mono text-zinc-300 bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/[0.15] flex items-center gap-1 transition-all cursor-pointer"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-3 h-3 text-amber-400" />
                    <span>Mute</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400">Audio</span>
                  </>
                )}
              </button>
            )}

            <span className="px-2 py-0.5 rounded-md text-[10px] font-mono text-zinc-300 bg-black/60 backdrop-blur-md border border-white/[0.1]">
              {item.duration}
            </span>
          </div>
        </div>

        {/* Centered Play / Pause Button */}
        <div className="relative z-10 flex items-center justify-center my-auto pointer-events-none">
          <button
            type="button"
            onClick={togglePlay}
            className={`pointer-events-auto rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 cursor-pointer ${
              isActive
                ? isPlaying
                  ? "w-12 h-12 bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/25 opacity-0 group-hover:opacity-100"
                  : "w-14 h-14 bg-white/95 text-black hover:scale-110 hover:bg-emerald-400 hover:text-black"
                : "w-12 h-12 bg-white/70 text-black opacity-70 scale-90"
            }`}
            aria-label={
              isPlaying
                ? lang === "id"
                  ? "Jeda video"
                  : "Pause video"
                : lang === "id"
                ? "Putar video"
                : "Play video"
            }
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 fill-current" />
            ) : (
              <Play className="w-6 h-6 fill-current ml-0.5" />
            )}
          </button>
        </div>

        {/* Card Bottom Info */}
        <div className="relative z-10 space-y-2 pt-2 border-t border-white/[0.1]">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400">
              {item.angleLabel[lang]}
            </span>
            <span className="text-[9px] font-mono text-zinc-400">
              0{index + 1} / 0{totalItems}
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight leading-snug">
            {item.projectTitle}
          </h3>

          <p className="text-xs text-zinc-300 font-normal line-clamp-1">
            {item.cutTitle[lang]}
          </p>

          {isActive && (
            <div className="pt-2">
              <Link
                href={`/projects/${item.projectSlug}`}
                onClick={(e) => e.stopPropagation()}
                className="group/btn inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.08] hover:bg-emerald-400 hover:text-black border border-white/[0.15] text-[11px] font-mono text-emerald-300 transition-all cursor-pointer shadow-md"
              >
                <span>
                  {lang === "id"
                    ? "Buka Detail Proyek"
                    : "Open Project Detail"}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function SelectedWork3DCarousel() {
  const { lang } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const items = FEATURED_CAROUSEL_ITEMS;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="space-y-12 scroll-mt-24" id="work">
      {/* Header Bar matching Richard Hend structure */}
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div className="max-w-xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === "id" ? "Karya Terpilih" : "Selected Work"}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight">
              {lang === "id"
                ? "Iklan Video Dirancang untuk Konversi."
                : "Work Worth Watching."}
            </h2>
          </div>

          <div className="space-y-4 max-w-md md:text-right">
            <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
              {lang === "id"
                ? "Kurasi iklan video vertikal 9:16 dari proyek nyata. Putar video langsung atau buka detail strategi proyek."
                : "Curated 9:16 vertical video ads from actual projects. Play video cuts directly or open the complete project breakdown."}
            </p>

            {/* Direct button to /work */}
            <div>
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.06] border border-white/[0.12] text-xs font-mono text-white hover:bg-white hover:text-black transition-all cursor-pointer shadow-lg"
              >
                <span>
                  {lang === "id" ? "Lihat Semua Karya" : "View All Work"}
                </span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* 3D Coverflow Carousel Viewport */}
      <div className="relative py-6 sm:py-10 overflow-hidden">
        {/* Subtle ambient lighting behind carousel */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-3xl h-80 bg-emerald-500/[0.03] blur-3xl pointer-events-none rounded-full" />

        <div className="relative max-w-4xl mx-auto flex items-center justify-center min-h-[460px] sm:min-h-[520px]">
          {items.map((item, index) => (
            <CarouselCard
              key={item.id}
              item={item}
              index={index}
              activeIndex={activeIndex}
              totalItems={items.length}
              onSelect={(idx) => setActiveIndex(idx)}
              lang={lang}
            />
          ))}
        </div>

        {/* Carousel Navigation Bar below cards */}
        <div className="flex items-center justify-center gap-6 pt-6">
          <button
            type="button"
            onClick={handlePrev}
            className="p-3 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-300 hover:text-white hover:bg-white/[0.1] hover:border-white/[0.2] transition-all cursor-pointer shadow-md"
            aria-label="Previous Project"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span className="text-white font-semibold">0{activeIndex + 1}</span>
            <span className="text-zinc-600">/</span>
            <span>0{items.length}</span>
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="p-3 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-300 hover:text-white hover:bg-white/[0.1] hover:border-white/[0.2] transition-all cursor-pointer shadow-md"
            aria-label="Next Project"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
