"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import { Project } from "@/types/project";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

interface ProjectCardProps {
  project: Project;
}

const PROJECT_PREVIEWS: Record<
  string,
  {
    poster: string;
    videoSrc: string;
    badge: string;
  }
> = {
  "katama-coffee": {
    poster: "/images/katama/katama_v2_free_print_poster.jpg",
    videoSrc: "/videos/katama/katama_v2_editorial.mp4",
    badge: "9:16 Vertical Cut",
  },
  "nespresso-vertuo": {
    poster: "/images/nespresso/nespresso_v2_crema_poster.jpg",
    videoSrc: "/videos/nespresso/nespresso-vertuo-v2.mp4",
    badge: "9:16 Vertical Cut",
  },
};

export function ProjectCard({ project }: ProjectCardProps) {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].home;
  const preview = PROJECT_PREVIEWS[project.slug];
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const cardData = t.projectCards?.[project.slug as keyof typeof t.projectCards] || {
    title: project.title,
    description: project.tagline[lang],
    info: `Spec ad · ${project.primaryHighlight.value}`,
    cta: lang === "id" ? "Buka Studi Kasus" : "Open Case Study",
  };

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

  return (
    <Link
      href={`/projects/${project.slug}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group block rounded-3xl bg-[#0c0c0e]/90 border border-white/[0.08] hover:border-emerald-500/40 hover:bg-[#111116] transition-all duration-300 p-6 sm:p-8 lg:p-10 hover:translate-y-[-2px] hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b] overflow-hidden relative"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Text & Strategy */}
        <div className="order-2 md:order-1 md:col-span-7 lg:col-span-8 space-y-5">
          {/* 1. Project Title */}
          <div className="space-y-1.5">
            <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
              {project.category[lang]}
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
              {cardData.title}
            </h3>
          </div>

          {/* 2. One sentence explaining the ad idea (fully unclipped) */}
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            {cardData.description}
          </p>

          {/* 3. Short info line: Spec ad status & angle count */}
          <div className="text-[13px] sm:text-sm font-mono text-zinc-400 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
            <span>{cardData.info}</span>
          </div>

          {/* 4. Clear CTA to open case study */}
          <div className="pt-2 inline-flex items-center gap-2 text-base font-medium text-emerald-400 group-hover:text-emerald-300 transition-colors">
            <span>{cardData.cta}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </div>

        {/* Right Column: 9:16 Video Frame Mockup */}
        {preview && (
          <div className="order-1 md:order-2 md:col-span-5 lg:col-span-4 flex justify-center md:justify-end">
            <div className="relative w-full max-w-[210px] sm:max-w-[230px] aspect-[9/16] rounded-2xl overflow-hidden border border-white/[0.12] bg-[#070709] shadow-2xl group-hover:border-emerald-500/40 transition-all duration-300 group-hover:shadow-[0_16px_40px_rgba(16,185,129,0.15)]">
              {/* Video Element */}
              <video
                ref={videoRef}
                src={preview.videoSrc}
                poster={preview.poster}
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Glassmorphism badge overlay */}
              <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                <span className="px-2 py-0.5 rounded-full text-[9px] font-mono tracking-wider uppercase bg-black/60 backdrop-blur-md text-zinc-300 border border-white/[0.1]">
                  9:16
                </span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[9px] font-mono tracking-wider uppercase backdrop-blur-md border transition-colors ${
                    isPlaying
                      ? "bg-emerald-950/70 text-emerald-300 border-emerald-500/30"
                      : "bg-black/60 text-zinc-400 border-white/[0.1]"
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
                <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:border-emerald-400 group-hover:text-emerald-400 transition-all">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
              </div>

              {/* Bottom Subtle Gradient */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}
