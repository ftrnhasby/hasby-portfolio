"use client";

import { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  ExternalLink,
  AlertOctagon,
  Clock,
  Film,
  Sparkles,
} from "lucide-react";
import { VideoVariation } from "@/types/project";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

interface VideoPlayerMockProps {
  variations: VideoVariation[];
  clientName: string;
  selectedIndex?: number;
  onSelectIndex?: (idx: number) => void;
}

export function VideoPlayerMock({
  variations,
  clientName,
  selectedIndex,
  onSelectIndex,
}: VideoPlayerMockProps) {
  const { lang } = useLanguage();
  const isId = lang === "id";
  const t = TRANSLATIONS[lang].player;

  const [internalIndex, setInternalIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hasError, setHasError] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const activeIndex = selectedIndex !== undefined ? selectedIndex : internalIndex;
  const currentVar = variations[activeIndex] || variations[0];

  const handleSelectVariation = (idx: number) => {
    if (idx === activeIndex) return;
    if (onSelectIndex) {
      onSelectIndex(idx);
    } else {
      setInternalIndex(idx);
    }
    setHasError(false);
    setCurrentTime(0);
    setDuration(0);
    setIsPlaying(false);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.load();
    }
  }, [activeIndex]);

  const togglePlay = () => {
    if (!videoRef.current || hasError) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleRestart = () => {
    if (!videoRef.current || hasError) return;
    videoRef.current.currentTime = 0;
    setCurrentTime(0);
    videoRef.current
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => {});
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      if (videoRef.current.duration && !isNaN(videoRef.current.duration)) {
        setDuration(videoRef.current.duration);
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current && videoRef.current.duration) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current || !duration || hasError) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = ratio * duration;
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return "00:00";
    const mins = Math.floor(secs / 60);
    const remainder = Math.floor(secs % 60);
    return `${mins.toString().padStart(2, "0")}:${remainder.toString().padStart(2, "0")}`;
  };

  if (!currentVar) return null;

  return (
    <div className="rounded-2xl bg-[#09090b] border border-white/[0.08] p-5 sm:p-8 space-y-6 shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
      {/* Variation Selector Tabs (only when multiple cuts exist) */}
      {variations.length > 1 && (
        <div className="flex flex-wrap items-center gap-2 border-b border-white/[0.06] pb-5">
          {variations.map((v, idx) => {
            const isSelected = activeIndex === idx;
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => handleSelectVariation(idx)}
                className={`text-left px-4 py-2.5 rounded-xl border text-xs transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-white text-black border-white font-semibold shadow-sm"
                    : "bg-white/[0.03] border-white/[0.08] text-zinc-400 hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span>{v.label[lang]}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                      isSelected ? "bg-black/10 text-black/80" : "bg-white/[0.06] text-zinc-400"
                    }`}
                  >
                    {v.duration}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* Main 2-Column Showcase: Native 9:16 Video + Clean Editorial Cut Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Native 9:16 Video Player */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-2xl overflow-hidden border border-white/[0.12] bg-black shadow-[0_20px_60px_rgba(0,0,0,0.85)]">
            {!hasError ? (
              <video
                ref={videoRef}
                src={currentVar.videoSrc}
                playsInline
                preload="metadata"
                muted={isMuted}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onError={() => setHasError(true)}
                onEnded={() => setIsPlaying(false)}
                onClick={togglePlay}
                className="h-full w-full object-cover cursor-pointer"
              />
            ) : (
              <div className="p-6 text-center space-y-3 flex flex-col items-center justify-center h-full">
                <AlertOctagon className="w-8 h-8 text-amber-400" />
                <div className="text-xs text-white font-medium">
                  {isId ? "Berkas Video Tidak Ditemukan" : "Video File Not Found"}
                </div>
                <div className="text-[11px] font-mono text-zinc-400 break-all max-w-xs">
                  {currentVar.videoSrc}
                </div>
              </div>
            )}

            {/* Center Play Overlay when Paused */}
            {!isPlaying && !hasError && (
              <button
                type="button"
                onClick={togglePlay}
                className="absolute inset-0 m-auto w-15 h-15 rounded-full bg-black/60 border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:scale-105 transition-all shadow-xl z-20 cursor-pointer"
                aria-label="Play video"
              >
                <Play className="w-6 h-6 fill-white translate-x-0.5" />
              </button>
            )}

            {/* Minimal Top Badge */}
            <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between z-10 pointer-events-none">
              <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-black/65 backdrop-blur-md border border-white/10 text-zinc-200">
                {clientName.split("(")[0].trim()}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-black/65 backdrop-blur-md border border-white/10 text-emerald-300">
                {currentVar.aspectRatio} · {currentVar.duration}
              </span>
            </div>

            {/* Bottom Controls */}
            {!hasError && (
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-3.5 z-20 space-y-2">
                <div
                  className="w-full h-1.5 hover:h-2 bg-white/20 rounded-full overflow-hidden cursor-pointer transition-all"
                  onClick={handleSeek}
                >
                  <div
                    className="h-full bg-emerald-400 transition-all duration-100"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-zinc-300">
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={togglePlay}
                      className="p-1.5 rounded-full hover:bg-white/10 transition-colors text-white cursor-pointer"
                      aria-label={isPlaying ? t.paused : t.playing}
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                    </button>

                    <button
                      type="button"
                      onClick={handleRestart}
                      className="p-1.5 rounded-full hover:bg-white/10 transition-colors text-zinc-400 hover:text-white cursor-pointer"
                      aria-label={t.loop}
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={toggleMute}
                      className="p-1.5 rounded-full hover:bg-white/10 transition-colors text-zinc-400 hover:text-white cursor-pointer"
                      aria-label={isMuted ? t.unmute : t.mute}
                    >
                      {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <a
                      href={currentVar.videoSrc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-mono text-zinc-400 hover:text-white inline-flex items-center gap-1 transition-colors"
                      title={isId ? "Buka file MP4 di tab baru" : "Open MP4 in new tab"}
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>MP4</span>
                    </a>
                    <span className="text-[11px] font-mono text-zinc-400">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right: Clean, Focused Cut Details */}
        <div className="lg:col-span-7 space-y-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-emerald-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>
                {variations.length > 1
                  ? `${isId ? "Variasi Aktif" : "Active Cut"} · 0${activeIndex + 1} / 0${variations.length}`
                  : isId
                    ? "Master Cut"
                    : "Final Cut"}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight leading-snug">
              {currentVar.label[lang]}
            </h2>
          </div>

          {/* 0-3s Hook Callout */}
          <div className="pl-4 py-1 border-l-2 border-emerald-400/70 space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">
              {isId ? "Hook 0–3 Detik" : "0–3s Opening Hook"}
            </span>
            <p className="text-sm sm:text-base text-zinc-100 font-medium italic leading-relaxed">
              &ldquo;{currentVar.hookHeadline[lang]}&rdquo;
            </p>
          </div>

          {/* Angle Overview */}
          <p className="text-sm text-zinc-300 leading-relaxed">
            {currentVar.angleDescription[lang]}
          </p>

          {/* Compact Inline Spec Strip (Replaces 4 heavy spec boxes) */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-mono text-zinc-300">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08]">
              <Clock className="w-3 h-3 text-emerald-400" />
              <span>{currentVar.duration}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08]">
              <Film className="w-3 h-3 text-zinc-400" />
              <span>1080×1920 ({currentVar.aspectRatio})</span>
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-zinc-400">
              {currentVar.specs.fps}
            </span>
          </div>

          {/* Key Takeaway Highlight */}
          <div className="p-4 rounded-xl bg-emerald-500/[0.05] border border-emerald-500/20 space-y-1.5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 block">
              {isId ? "Poin Kunci Kreatif" : "Creative Takeaway"}
            </span>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {currentVar.keyTakeaway[lang]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
