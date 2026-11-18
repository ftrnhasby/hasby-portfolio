"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Play, Pause, Volume2, VolumeX, Sparkles, Clock, Smartphone, ArrowUpRight } from "lucide-react";
import { VideoItem } from "@/types/collection";
import { useLanguage } from "@/context/LanguageContext";

interface CollectionVideoItemProps {
  video: VideoItem;
  index: number;
  caseStudyHref?: string;
}

export function CollectionVideoItem({ video, index, caseStudyHref }: CollectionVideoItemProps) {
  const { lang } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

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

  const formatTime = (timeInSeconds: number) => {
    if (!timeInSeconds || isNaN(timeInSeconds) || !isFinite(timeInSeconds) || timeInSeconds < 0) return "0:00";
    const totalSeconds = Math.round(timeInSeconds);
    const mins = Math.floor(totalSeconds / 60);
    const secs = Math.floor(totalSeconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="rounded-3xl bg-[#0c0c0e] border border-white/[0.08] p-6 sm:p-8 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: 9:16 Video Player Card matching Image 3 */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-[285px] rounded-2xl bg-[#09090b] border border-white/[0.1] p-3 sm:p-3.5 shadow-2xl relative overflow-hidden space-y-3">
            {/* Top Header near player */}
            <div className="flex items-center justify-between gap-2 border-b border-white/[0.06] pb-2">
              <div className="space-y-0.5 min-w-0">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-mono tracking-wide bg-amber-500/10 text-amber-300 border border-amber-500/25">
                  <span className="w-1 h-1 rounded-full bg-amber-400" />
                  <span>Independent spec ad</span>
                </span>
                <h3 className="text-xs font-semibold text-white tracking-tight pt-0.5 truncate">
                  {video.title[lang]}
                </h3>
              </div>

              <div className="text-[9px] font-mono text-zinc-400 px-1.5 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] shrink-0">
                9:16
              </div>
            </div>

            {/* Video Viewport Container */}
            <div className="relative aspect-[9/16] w-full rounded-xl overflow-hidden bg-black border border-white/[0.08] group">
              <video
                ref={videoRef}
                src={video.src}
                poster={video.poster}
                muted={isMuted}
                playsInline
                preload="metadata"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={handleEnded}
                className="w-full h-full object-cover cursor-pointer"
                onClick={togglePlay}
              />

              {/* Centered Play Button when Paused */}
              {!isPlaying && (
                <button
                  type="button"
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/30 transition-all group"
                  aria-label={lang === "id" ? "Putar video" : "Play video"}
                >
                  <div className="w-12 h-12 rounded-full bg-white/95 text-black flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform pl-0.5">
                    <Play className="w-5 h-5 fill-current" />
                  </div>
                </button>
              )}

              {/* Sound Floating Toggle Badge */}
              <button
                type="button"
                onClick={toggleMute}
                className="absolute top-2.5 right-2.5 px-2 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono flex items-center gap-1 hover:bg-black/90 transition-all z-10 shadow-md cursor-pointer"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
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
                max={duration || 44}
                step="0.1"
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1 bg-white/[0.1] rounded-lg appearance-none cursor-pointer accent-white"
                aria-label="Video progress scrubber"
              />

              <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="p-0.5 hover:text-white transition-colors cursor-pointer"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                  </button>

                  <button
                    type="button"
                    onClick={toggleMute}
                    className="p-0.5 hover:text-white transition-colors cursor-pointer"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX className="w-3 h-3 text-amber-400" /> : <Volume2 className="w-3 h-3 text-emerald-400" />}
                  </button>

                  <span className="text-[10px] text-zinc-400">
                    {formatTime(currentTime)} / {formatTime(duration || 44)}
                  </span>
                </div>

                <span className="text-[9px] text-zinc-500 font-mono">
                  {lang === "id" ? `Variasi ${index + 1} (${video.duration})` : `Variation ${index + 1} (${video.duration})`}
                </span>
              </div>
            </div>

            {/* Strategy Rationale Quote Box */}
            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] space-y-1">
              <p className="text-[11px] text-zinc-300 leading-relaxed italic line-clamp-3">
                &ldquo;{video.description[lang]}&rdquo;
              </p>

              {caseStudyHref && (
                <div className="pt-1.5 border-t border-white/[0.05]">
                  <Link
                    href={caseStudyHref}
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 hover:text-emerald-300 transition-colors font-medium group"
                  >
                    <span>{lang === "id" ? "Lihat riset & analisis naskah" : "View research, scripts & angles"}</span>
                    <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right: Creative Strategy & Execution Specs */}
        <div className="lg:col-span-7 space-y-5">
          {/* Angle Badge */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 inline-flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              <span>{video.angle[lang]}</span>
            </span>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono text-zinc-400 bg-white/[0.04] border border-white/[0.08] inline-flex items-center gap-1.5">
              <Clock className="w-3 h-3" />
              <span>{video.duration}</span>
            </span>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono text-zinc-400 bg-white/[0.04] border border-white/[0.08] inline-flex items-center gap-1.5">
              <Smartphone className="w-3 h-3" />
              <span>9:16 Feed Native</span>
            </span>
          </div>

          {/* Cut Title */}
          <h4 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
            {video.title[lang]}
          </h4>

          {/* Strategy Description */}
          <div className="space-y-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
            <p className="font-normal">{video.description[lang]}</p>
          </div>

          {/* Key Execution Highlights */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#09090b] border border-white/[0.06] space-y-3 text-xs font-mono">
            <div className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">
              {lang === "id" ? "Spesifikasi Eksekusi Video Direct Response:" : "Direct Response Video Execution Specs:"}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>{lang === "id" ? "Resolusi: 1080×1920 (9:16)" : "Resolution: 1080×1920 (9:16)"}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>{lang === "id" ? "Frame Rate: 30 fps" : "Frame Rate: 30 fps"}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>{lang === "id" ? "Target: Feed TikTok & Reels" : "Target: TikTok & Reels Feeds"}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>{lang === "id" ? "Audio: -14 LUFS Broadcast" : "Audio: -14 LUFS Broadcast"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
