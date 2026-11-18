"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Play, Film } from "lucide-react";
import { CreativeCollection } from "@/types/collection";
import { useLanguage } from "@/context/LanguageContext";

interface CollectionCardProps {
  collection: CreativeCollection;
}

export function CollectionCard({ collection }: CollectionCardProps) {
  const { lang } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Use the primary video preview if available
  const primaryVideo = collection.videos[0];
  const videoCount = collection.videos.length;

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const targetHref = collection.caseStudyHref || `/projects/${collection.slug}`;

  return (
    <Link
      href={targetHref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group flex flex-col justify-between h-full rounded-3xl bg-[#0c0c0e]/90 border border-white/[0.08] hover:border-emerald-500/40 hover:bg-[#111116] transition-all duration-300 p-5 sm:p-6 lg:p-7 hover:translate-y-[-3px] hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b] overflow-hidden relative"
    >
      {/* Top Section: 9:16 Video Mockup Showcase Stage */}
      <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-[#070709] border border-white/[0.08] group-hover:border-emerald-500/30 transition-all duration-300 flex items-center justify-center p-3 relative">
        {/* Subtle radial glow background behind mockup on hover */}
        <div className="absolute inset-0 bg-emerald-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* 9:16 Vertical Phone Mockup */}
        <div className="relative h-full aspect-[9/16] rounded-xl overflow-hidden border border-white/[0.12] bg-black shadow-2xl group-hover:border-emerald-500/40 transition-all duration-300">
          {primaryVideo ? (
            <video
              ref={videoRef}
              src={primaryVideo.src}
              poster={collection.coverImage}
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <Image
              src={collection.coverImage}
              alt={collection.title}
              fill
              sizes="(max-width: 768px) 180px, 220px"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          )}

          {/* Glassmorphism Badges Overlay */}
          <div className="absolute top-2 left-2 right-2 flex items-center justify-between pointer-events-none">
            <span className="px-2 py-0.5 rounded-full text-[9px] font-mono tracking-wider uppercase bg-black/70 backdrop-blur-md text-zinc-300 border border-white/[0.1]">
              {videoCount} {lang === "id" ? "Variasi" : "Cuts"}
            </span>
            <span
              className={`px-2 py-0.5 rounded-full text-[9px] font-mono tracking-wider uppercase backdrop-blur-md border transition-colors ${
                isPlaying
                  ? "bg-emerald-950/80 text-emerald-300 border-emerald-500/40"
                  : "bg-black/70 text-zinc-400 border-white/[0.1]"
              }`}
            >
              {isPlaying ? "Playing" : "Preview"}
            </span>
          </div>

          {/* Center Play Icon (visible when not playing) */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none ${
              isPlaying ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="w-10 h-10 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:border-emerald-400 group-hover:text-emerald-400 transition-all">
              <Play className="w-4 h-4 fill-current ml-0.5" />
            </div>
          </div>

          {/* Bottom Gradient */}
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Middle Section: Metadata & Descriptions */}
      <div className="pt-5 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          {/* Badges Bar */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase bg-amber-500/10 text-amber-300 border border-amber-500/20">
              {collection.projectType}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase bg-white/[0.04] text-zinc-300 border border-white/[0.08]">
              {collection.categories.map((c) => c.replace("-", " ")).join(", ")}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
              <Film className="w-3 h-3" />
              <span>
                {videoCount} {lang === "id" ? "Video Cuts" : "Video Cuts"}
              </span>
            </span>
          </div>

          {/* Collection Title & Subtitle */}
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
              {collection.title}
            </h3>
            <p className="text-xs font-mono text-zinc-400 line-clamp-1">
              {collection.subtitle[lang]}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm text-zinc-300 leading-relaxed font-normal line-clamp-3">
            {collection.description[lang]}
          </p>

          {/* Software used pills */}
          <div className="pt-1 flex flex-wrap items-center gap-1.5 text-xs font-mono text-zinc-400">
            <span className="text-zinc-500">{lang === "id" ? "Software:" : "Tools:"}</span>
            {collection.softwareUsed.map((sw, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-zinc-300 text-[11px]"
              >
                {sw}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Section: Action Row */}
        <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-2 mt-4">
          <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-emerald-400 group-hover:text-emerald-300 transition-colors">
            <span>
              {lang === "id"
                ? `Lihat Studi Kasus (${videoCount} Video)`
                : `View Case Study (${videoCount} Videos)`}
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>

          <span className="text-[11px] font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors">
            {lang === "id" ? "Riset & Naskah" : "Research & Scripts"}
          </span>
        </div>
      </div>
    </Link>
  );
}
