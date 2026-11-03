"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Play, Pause, Volume2, VolumeX, ArrowUpRight } from "lucide-react";
import { FEATURED_HERO_WORK } from "@/data/featuredWork";
import { useLanguage } from "@/context/LanguageContext";

export function FeaturedAdPlayer() {
  const { lang } = useLanguage();
  const config = FEATURED_HERO_WORK;
  const initialDuration = config.durationSeconds || 44;

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(initialDuration);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
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

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      if (
        videoRef.current.duration &&
        isFinite(videoRef.current.duration) &&
        videoRef.current.duration > 0 &&
        Math.abs(duration - videoRef.current.duration) > 1
      ) {
        setDuration(videoRef.current.duration);
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current && isFinite(videoRef.current.duration) && videoRef.current.duration > 0) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
    }
  };

  const formatTime = (secs: number) => {
    if (!secs || isNaN(secs) || !isFinite(secs) || secs < 0) return "0:00";
    const totalSeconds = Math.round(secs);
    const m = Math.floor(totalSeconds / 60);
    const s = Math.floor(totalSeconds % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div
      id="featured-sample-ad"
      className="w-full max-w-[280px] mx-auto rounded-2xl bg-[#0c0c0e] border border-white/[0.1] p-3 sm:p-3.5 shadow-2xl relative overflow-hidden space-y-3"
    >
      {/* Top Header near player */}
      <div className="flex items-center justify-between gap-2 border-b border-white/[0.06] pb-2">
        <div className="space-y-0.5 min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-mono tracking-wide bg-amber-500/10 text-amber-300 border border-amber-500/25">
              <span className="w-1 h-1 rounded-full bg-amber-400" />
              <span>{config.badge[lang]}</span>
            </span>
          </div>
          <h3 className="text-xs font-semibold text-white tracking-tight pt-0.5 truncate">
            {config.title[lang]}
          </h3>
        </div>

        <div className="text-[9px] font-mono text-zinc-500 px-1.5 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] shrink-0">
          9:16
        </div>
      </div>

      {/* Video Viewport Container */}
      <div className="relative aspect-[9/16] w-full rounded-xl overflow-hidden bg-black border border-white/[0.08] group">
        <video
          ref={videoRef}
          src={config.videoSrc}
          poster={config.posterSrc}
          muted={isMuted}
          playsInline
          preload="metadata"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onDurationChange={handleLoadedMetadata}
          onEnded={handleEnded}
          className="w-full h-full object-contain cursor-pointer"
          onClick={togglePlay}
        />

        {/* Centered Play Button when Paused */}
        {!isPlaying && (
          <button
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/30 transition-all group"
            aria-label={lang === "id" ? "Putar video contoh" : "Play sample ad video"}
          >
            <div className="w-12 h-12 rounded-full bg-white/95 text-black flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform pl-0.5">
              <Play className="w-5 h-5 fill-current" />
            </div>
          </button>
        )}

        {/* Sound Floating Toggle Badge (Accessible on mobile) */}
        <button
          onClick={toggleMute}
          className="absolute top-2.5 right-2.5 px-2 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono flex items-center gap-1 hover:bg-black/90 transition-all z-10 shadow-md"
          aria-label={isMuted ? (lang === "id" ? "Bunyikan video" : "Unmute video") : (lang === "id" ? "Senyapkan video" : "Mute video")}
        >
          {isMuted ? (
            <>
              <VolumeX className="w-3 h-3 text-amber-400" />
              <span>{lang === "id" ? "Bunyikan" : "Unmute"}</span>
            </>
          ) : (
            <>
              <Volume2 className="w-3 h-3 text-emerald-400" />
              <span>{lang === "id" ? "Suara Aktif" : "Sound On"}</span>
            </>
          )}
        </button>
      </div>

      {/* Sleek Scrubber Bar & Controls */}
      <div className="space-y-1.5 pt-0.5">
        <input
          type="range"
          min="0"
          max={duration || initialDuration}
          step="0.1"
          value={currentTime}
          onChange={handleSeek}
          className="w-full h-1 bg-white/[0.1] rounded-lg appearance-none cursor-pointer accent-white"
          aria-label="Video progress scrubber"
        />

        <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
          <div className="flex items-center gap-1.5">
            <button
              onClick={togglePlay}
              className="p-0.5 hover:text-white transition-colors"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            </button>

            <button
              onClick={toggleMute}
              className="p-0.5 hover:text-white transition-colors"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX className="w-3 h-3 text-amber-400" /> : <Volume2 className="w-3 h-3 text-emerald-400" />}
            </button>

            <span className="text-[10px] text-zinc-400">
              {formatTime(currentTime)} / {formatTime(duration || initialDuration)}
            </span>
          </div>

          <span className="text-[9px] text-zinc-500 font-mono">
            {lang === "id" ? `Variasi 2 (${config.durationLabel})` : `Variation 2 (${config.durationLabel})`}
          </span>
        </div>
      </div>

      {/* Caption & Creative Rationale */}
      <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] space-y-1">
        <p className="text-[11px] text-zinc-300 leading-relaxed italic line-clamp-3">
          &ldquo;{config.caption[lang]}&rdquo;
        </p>

        <div className="pt-1.5 border-t border-white/[0.05]">
          <Link
            href={`/projects/${config.projectSlug}`}
            className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 hover:text-emerald-300 transition-colors font-medium group"
          >
            <span>{config.caseStudyLinkText[lang]}</span>
            <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
