"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, RotateCcw, Volume2, VolumeX, Sparkles, Smartphone, Monitor, ExternalLink, AlertOctagon } from "lucide-react";
import { VideoVariation, LocalizedString } from "@/types/project";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

interface VideoPlayerMockProps {
  variations: VideoVariation[];
  clientName: string;
  projectTitle?: string;
  projectType?: LocalizedString;
  toolsUsed?: string[];
}

export function VideoPlayerMock({
  variations,
  clientName,
  projectTitle,
  projectType,
  toolsUsed,
}: VideoPlayerMockProps) {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].player;

  const [selectedVarIndex, setSelectedVarIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [aspectMode, setAspectMode] = useState<"9:16" | "16:9">("9:16");
  const [hasError, setHasError] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const currentVar = variations[selectedVarIndex] || variations[0];

  const handleSelectVariation = (idx: number) => {
    setSelectedVarIndex(idx);
    setHasError(false);
    setCurrentTime(0);
    setIsPlaying(false);
  };

  // When selected variation changes, reload video element
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.load();
    }
  }, [selectedVarIndex]);

  const togglePlay = () => {
    if (!videoRef.current || hasError) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn("Autoplay was prevented:", err);
      });
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
    videoRef.current.play().then(() => {
      setIsPlaying(true);
    }).catch(() => {});
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

  return (
    <div className="rounded-2xl bg-[#09090b] border border-white/[0.08] p-5 sm:p-8 space-y-6 sm:space-y-8 shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
      {/* Header Bar with prominent metadata */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.06] pb-6">
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-1.5 text-zinc-300 uppercase tracking-wider font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.title}</span>
            </span>
            {projectType && (
              <>
                <span className="text-zinc-600">•</span>
                <span className="px-2 py-0.5 rounded text-[10px] bg-purple-950/40 text-purple-300 border border-purple-500/25">
                  {projectType[lang]}
                </span>
              </>
            )}
            {toolsUsed && toolsUsed.length > 0 && (
              <>
                <span className="text-zinc-600 hidden sm:inline">•</span>
                <span className="text-[11px] text-zinc-400 hidden sm:inline">
                  {toolsUsed.slice(0, 3).join(" • ")}
                </span>
              </>
            )}
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight">
            {projectTitle ? `${projectTitle} — ${t.subtitle}` : t.subtitle}
          </h3>
        </div>

        {/* Aspect Ratio Switcher */}
        <div className="flex items-center gap-1 bg-white/[0.04] border border-white/[0.08] p-1 rounded-lg self-start sm:self-auto">
          <button
            onClick={() => setAspectMode("9:16")}
            className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono transition-all ${
              aspectMode === "9:16"
                ? "bg-white text-black font-medium"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>9:16 Vertikal</span>
          </button>
          <button
            onClick={() => setAspectMode("16:9")}
            className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono transition-all ${
              aspectMode === "16:9"
                ? "bg-white text-black font-medium"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>16:9 Container</span>
          </button>
        </div>
      </div>

      {/* Variation Selection Tabs */}
      <div className="flex flex-wrap gap-2.5">
        {variations.map((v, idx) => (
          <button
            key={v.id}
            onClick={() => handleSelectVariation(idx)}
            className={`text-left px-4 py-3 rounded-xl border text-xs transition-all duration-200 ${
              selectedVarIndex === idx
                ? "bg-white/[0.08] border-white/20 text-white shadow-sm"
                : "bg-white/[0.02] border-white/[0.06] text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]"
            }`}
          >
            <div className="font-semibold text-zinc-200">{v.label[lang]}</div>
            <div className="text-[11px] text-zinc-500 mt-0.5 font-mono">
              {v.duration} • {v.specs.durationFrames}
            </div>
          </button>
        ))}
      </div>

      {/* Main Player Display + Real Video Playback */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Video Player Container */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center">
          <div
            className={`relative rounded-2xl overflow-hidden border border-white/[0.12] bg-[#000000] shadow-[0_20px_60px_rgba(0,0,0,0.8)] transition-all duration-300 ${
              aspectMode === "9:16"
                ? "w-full max-w-[340px] aspect-[9/16]"
                : "w-full aspect-[16/9] flex items-center justify-center bg-zinc-950"
            }`}
          >
            {/* Real HTML5 Video Element */}
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
                className={`h-full w-full object-contain cursor-pointer ${
                  aspectMode === "16:9" ? "max-h-[500px]" : ""
                }`}
              />
            ) : (
              <div className="p-6 text-center space-y-3 flex flex-col items-center justify-center h-full">
                <AlertOctagon className="w-8 h-8 text-amber-400" />
                <div className="text-xs text-white font-medium">
                  {lang === "id" ? "Berkas Video Tidak Ditemukan" : "Video File Not Found"}
                </div>
                <div className="text-[11px] font-mono text-zinc-400 break-all max-w-xs">
                  {currentVar.videoSrc}
                </div>
              </div>
            )}

            {/* Play/Pause Overlay indicator when paused */}
            {!isPlaying && !hasError && (
              <button
                onClick={togglePlay}
                className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-black/60 border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:scale-105 transition-all shadow-xl z-20"
                aria-label="Play video"
              >
                <Play className="w-7 h-7 fill-white translate-x-0.5" />
              </button>
            )}

            {/* Top Watermark Badge */}
            <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10 pointer-events-none">
              <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/10 text-zinc-300">
                {clientName.split("(")[0]}
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/70 backdrop-blur-md border border-emerald-500/30 px-2 py-0.5 rounded">
                Remotion Render
              </span>
            </div>

            {/* Bottom Controls Bar */}
            {!hasError && (
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/85 to-transparent p-4 z-20 space-y-2">
                {/* Scrubber Bar */}
                <div
                  className="w-full h-2 bg-white/20 hover:h-2.5 rounded-full overflow-hidden cursor-pointer relative transition-all"
                  onClick={handleSeek}
                >
                  <div
                    className="h-full bg-emerald-400 transition-all duration-100"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>

                {/* Bottom Buttons */}
                <div className="flex items-center justify-between text-zinc-300 pt-1">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      className="p-1.5 rounded-full hover:bg-white/10 transition-colors text-white"
                      aria-label={isPlaying ? t.paused : t.playing}
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                    </button>

                    <button
                      onClick={handleRestart}
                      className="p-1.5 rounded-full hover:bg-white/10 transition-colors text-zinc-400 hover:text-white"
                      aria-label={t.loop}
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={toggleMute}
                      className="p-1.5 rounded-full hover:bg-white/10 transition-colors text-zinc-400 hover:text-white"
                      aria-label={isMuted ? t.unmute : t.mute}
                    >
                      {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={currentVar.videoSrc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-mono text-zinc-400 hover:text-white flex items-center gap-1"
                      title="Buka file video di tab baru"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>MP4 File</span>
                    </a>
                    <div className="text-[11px] font-mono text-zinc-400">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Technical & Creative Strategy Sidebar */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-5">
            <div>
              <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                {t.angleBadge}
              </div>
              <h4 className="text-base font-semibold text-white tracking-tight mt-1">
                {currentVar.label[lang]}
              </h4>
              <p className="text-xs text-zinc-300 leading-relaxed mt-1 italic">
                {currentVar.hookHeadline[lang]}
              </p>
            </div>

            {/* Technical Specifications Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-black/40 border border-white/[0.06]">
                <div className="text-[10px] font-mono text-zinc-400 uppercase">{t.durationLabel}</div>
                <div className="text-base font-semibold text-emerald-400 mt-1">
                  {currentVar.duration}
                </div>
                <div className="text-[10px] text-zinc-500 mt-0.5">{currentVar.specs.durationFrames}</div>
              </div>

              <div className="p-3 rounded-lg bg-black/40 border border-white/[0.06]">
                <div className="text-[10px] font-mono text-zinc-400 uppercase">{t.resolutionLabel}</div>
                <div className="text-base font-semibold text-white mt-1">
                  1080 × 1920
                </div>
                <div className="text-[10px] text-zinc-500 mt-0.5">{currentVar.aspectRatio} Vertikal</div>
              </div>

              <div className="p-3 rounded-lg bg-black/40 border border-white/[0.06]">
                <div className="text-[10px] font-mono text-zinc-400 uppercase">{t.fpsLabel}</div>
                <div className="text-base font-semibold text-zinc-200 mt-1">
                  {currentVar.specs.fps}
                </div>
                <div className="text-[10px] text-zinc-500 mt-0.5">Smooth Motion Sync</div>
              </div>

              <div className="p-3 rounded-lg bg-black/40 border border-white/[0.06]">
                <div className="text-[10px] font-mono text-zinc-400 uppercase">{t.codeEngineLabel}</div>
                <div className="text-base font-semibold text-zinc-200 mt-1 truncate">
                  Remotion 4.0
                </div>
                <div className="text-[10px] text-zinc-500 mt-0.5">React + TypeScript</div>
              </div>
            </div>

            {/* Qualitative Post-Mortem Note */}
            <div className="pt-4 border-t border-white/[0.06] space-y-2">
              <div className="text-[11px] font-mono text-zinc-300 uppercase tracking-wider">
                {t.takeawayLabel}
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {currentVar.keyTakeaway[lang]}
              </p>
            </div>
          </div>

          {/* Direct Response Angle Context Box */}
          <div className="p-5 rounded-xl bg-white/[0.015] border border-white/[0.05] text-xs space-y-2">
            <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
              {lang === "id" ? "Fokus Pengujian Pesan" : "Message Testing Focus"}
            </div>
            <p className="text-zinc-400 leading-relaxed">
              {currentVar.angleDescription[lang]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
