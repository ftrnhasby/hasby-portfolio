"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  ArrowRight,
  Sparkles,
  Layers,
  Scissors,
  CheckCircle2,
  ExternalLink,
  Smartphone,
  RotateCcw,
  SlidersHorizontal,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

interface TimelineProject {
  id: string;
  slug: string;
  title: string;
  brand: string;
  category: "ai-ads" | "ugc-ads" | "product-and-review";
  categoryLabel: { id: string; en: string };
  angle: { id: string; en: string };
  strategy: { id: string; en: string };
  hookBreakdown: { id: string; en: string };
  durationSec: number;
  timecodeDuration: string;
  videoSrc: string;
  poster: string;
  software: string[];
  trackBlocks: {
    hook: { startSec: number; endSec: number; label: { id: string; en: string } };
    body: { startSec: number; endSec: number; label: { id: string; en: string } };
    cta: { startSec: number; endSec: number; label: { id: string; en: string } };
  };
}

const TIMELINE_PROJECTS: TimelineProject[] = [
  {
    id: "katama-coffee",
    slug: "katama-coffee",
    title: "Katama Coffee & Space",
    brand: "Katama Coffee Way Halim",
    category: "product-and-review",
    categoryLabel: { id: "Product and review", en: "Product and review" },
    angle: {
      id: "Eksplorasi Fitur Free Print",
      en: "Free Print Amenity Discovery",
    },
    strategy: {
      id: "Memecah pola kafe estetik konvensional dengan mengangkat fasilitas print gratis yang relevan bagi mahasiswa & pekerja remote.",
      en: "Disrupting conventional cafe aesthetic expectations by highlighting free printing services essential for students & WFC professionals.",
    },
    hookBreakdown: {
      id: "00:00 - 00:03 · Pola interupsi 'Kenapa ke kafe bawa flashdisk?' memicu rasa ingin tahu seketika.",
      en: "00:00 - 00:03 · Pattern interrupt 'Why bring a thumbdrive to a coffee shop?' prompts instant retention.",
    },
    durationSec: 44,
    timecodeDuration: "00:00:44:00",
    videoSrc: "/videos/katama/katama_v2_editorial.mp4",
    poster: "/images/katama/katama_v2_free_print_poster.jpg",
    software: ["CapCut", "Adobe Premiere Pro"],
    trackBlocks: {
      hook: { startSec: 0, endSec: 4, label: { id: "Hook: Flashdisk Curiosity", en: "Hook: Thumbdrive Curiosity" } },
      body: { startSec: 4, endSec: 32, label: { id: "Body: Fasilitas WFC & Free Print", en: "Body: WFC Amenities & Printer" } },
      cta: { startSec: 32, endSec: 44, label: { id: "CTA: Alamat & Jam 24 Jam", en: "CTA: Location & 24h Hours" } },
    },
  },
  {
    id: "nespresso-vertuo",
    slug: "nespresso-vertuo",
    title: "Nespresso Vertuo Pop",
    brand: "Nespresso Indonesia",
    category: "product-and-review",
    categoryLabel: { id: "Product and review", en: "Product and review" },
    angle: {
      id: "The 08:55 AM Meeting Emergency",
      en: "The 08:55 AM Meeting Emergency",
    },
    strategy: {
      id: "Urgensi rapat pagi jam 08:55 yang menyulap proses seduh kopi 30 detik menjadi solusi penyelamat produktivitas.",
      en: "Morning meeting urgency at 08:55 AM framing a 30-second one-touch brew as a genuine remote-work productivity lifesaver.",
    },
    hookBreakdown: {
      id: "00:00 - 00:03 · Jam dinding berdetik & bunyi notifikasi Slack menciptakan 'relatable panic' instan.",
      en: "00:00 - 00:03 · Ticking clock audio & Slack chime trigger instant relatable panic for WFH audiences.",
    },
    durationSec: 45,
    timecodeDuration: "00:00:45:00",
    videoSrc: "/videos/nespresso/nespresso-vertuo-v1.mp4",
    poster: "/images/nespresso/nespresso_v1_poster.jpg",
    software: ["Adobe Premiere Pro", "After Effects"],
    trackBlocks: {
      hook: { startSec: 0, endSec: 3.5, label: { id: "Hook: Slack Panic 08:55 AM", en: "Hook: Slack Panic 08:55 AM" } },
      body: { startSec: 3.5, endSec: 34, label: { id: "Body: One-Touch Crema Macro", en: "Body: One-Touch Crema Macro" } },
      cta: { startSec: 34, endSec: 45, label: { id: "CTA: Penawaran Eksklusif", en: "CTA: Exclusive Bundle Offer" } },
    },
  },
  {
    id: "oximus-hydra-zdp1118",
    slug: "oximus-hydra-zdp1118",
    title: "Oximus Hydra ZDP1118",
    brand: "Oximus Indonesia",
    category: "ai-ads",
    categoryLabel: { id: "AI Ads", en: "AI Ads" },
    angle: {
      id: "Meja Sempit Spatial Relief (CON-001)",
      en: "Cluttered Desk Spatial Relief (CON-001)",
    },
    strategy: {
      id: "Membongkar friksi meja sempit akibat stand bawaan dan mendemonstrasikan kebebasan gerak gas spring satu jari serta manajemen kabel rapi.",
      en: "Exposing cramped desk friction from bulky OEM stands, demonstrating effortless one-finger gas spring fluidity and clean cable routing.",
    },
    hookBreakdown: {
      id: "00:00 - 00:03 · Hook friksi spasial 'Meja Lu Sempit Bukan Karena Kurang Lebar' memicu thumb-stop instan.",
      en: "00:00 - 00:03 · Spatial friction hook 'Your desk isn't too small' triggers instant mobile thumb-stops.",
    },
    durationSec: 30,
    timecodeDuration: "00:00:30:00",
    videoSrc: "/videos/oximus/oximus-hydra-zdp1118-v1.mp4",
    poster: "/images/oximus/oximus_cover_poster.jpg",
    software: ["Midjourney v6.1", "Kling AI", "ElevenLabs", "Premiere Pro"],
    trackBlocks: {
      hook: { startSec: 0, endSec: 4, label: { id: "Hook: Meja Sempit Friction", en: "Hook: Cluttered Desk Friction" } },
      body: { startSec: 4, endSec: 23, label: { id: "Body: Gas Spring & Cable Management", en: "Body: Gas Spring & Cable Management" } },
      cta: { startSec: 23, endSec: 30, label: { id: "CTA: Upgrade Setup Sekarang", en: "CTA: Upgrade Setup Now" } },
    },
  },
  {
    id: "agoda-weekend-getaway",
    slug: "agoda-weekend-getaway",
    title: "Agoda: Weekend Getaway",
    brand: "Agoda Indonesia",
    category: "ai-ads",
    categoryLabel: { id: "AI Ads", en: "AI Ads" },
    angle: {
      id: "Mitos Weekend Surcharge (CON-005)",
      en: "Weekend Surcharge Myth (CON-005)",
    },
    strategy: {
      id: "Mematahkan mitos kenaikan tarif akhir pekan lewat drama relatable di warkop terik yang beralih ke diskon 35% App-Only Deals dan infinity pool sejuk.",
      en: "Busting the weekend hotel surcharge myth through relatable urban drama, switching from sweltering street stall to 35% App-Only Deals and hillside pool relaxation.",
    },
    hookBreakdown: {
      id: "00:00 - 00:03 · Pola interupsi 'Weekend ini mau kabur tapi hotel pada gila harganya!' menghentikan scroll seketika.",
      en: "00:00 - 00:03 · Pattern interrupt 'I need a weekend escape but hotel prices are insane!' instantly arrests mobile scrolling.",
    },
    durationSec: 30,
    timecodeDuration: "00:00:30:00",
    videoSrc: "/videos/agoda/agoda-weekend-getaway-v1.mp4",
    poster: "/images/agoda/agoda_cover_poster.jpg",
    software: ["Google Flow Omni Flash", "Midjourney v6.1", "ElevenLabs", "Premiere Pro"],
    trackBlocks: {
      hook: { startSec: 0, endSec: 3, label: { id: "Hook: Warkop Terik & Frustrasi Harga", en: "Hook: Sweltering Stall & Price Frustration" } },
      body: { startSec: 3, endSec: 22, label: { id: "Body: Diskon 35% Agoda & Infinity Pool", en: "Body: Agoda 35% Off & Infinity Pool" } },
      cta: { startSec: 22, endSec: 30, label: { id: "CTA: Bersulang Kelapa & Download Agoda", en: "CTA: Coconut Toast & Download App" } },
    },
  },
  {
    id: "focusbrew-hook-sprint",
    slug: "focusbrew-hook-sprint",
    title: "FocusBrew Hook Sprint",
    brand: "FocusBrew Nootropics",
    category: "ugc-ads",
    categoryLabel: { id: "UGC Ads", en: "UGC Ads" },
    angle: {
      id: "2 PM Brain Fog Pattern Interrupt",
      en: "2 PM Brain Fog Pattern Interrupt",
    },
    strategy: {
      id: "Iterasi 3 pembuka berbeda untuk membandingkan rasio hook rate penonton TikTok & Reels secara terisolasi.",
      en: "3 isolated opening hooks testing afternoon crash triggers to scale winning thumb-stop ratios on TikTok & Reels.",
    },
    hookBreakdown: {
      id: "00:00 - 00:03 · Visual layar monitor buram dan desahan lelah menciptakan resonansi psikologis pekerja kantoran.",
      en: "00:00 - 00:03 · Blurry monitor screen effect and tired sigh immediately hook fatigue-prone desk workers.",
    },
    durationSec: 28,
    timecodeDuration: "00:00:28:00",
    videoSrc: "/videos/nespresso/nespresso-vertuo-v2.mp4",
    poster: "/images/nespresso/nespresso_v1_poster.jpg",
    software: ["CapCut", "Adobe Premiere Pro"],
    trackBlocks: {
      hook: { startSec: 0, endSec: 3, label: { id: "Hook: 2 PM Energy Crash", en: "Hook: 2 PM Energy Crash" } },
      body: { startSec: 3, endSec: 21, label: { id: "Body: Nootropic Clarity Demo", en: "Body: Nootropic Clarity Demo" } },
      cta: { startSec: 21, endSec: 28, label: { id: "CTA: Risk-Free Trial", en: "CTA: Risk-Free Trial" } },
    },
  },
  {
    id: "ergodesk-review-stack",
    slug: "ergodesk-review-stack",
    title: "ErgoDesk Setup Review",
    brand: "ErgoDesk Pro",
    category: "product-and-review",
    categoryLabel: { id: "Product and review", en: "Product and review" },
    angle: {
      id: "Ergonomic Setup B-Roll Transition",
      en: "Ergonomic Setup B-Roll Transition",
    },
    strategy: {
      id: "Review bergaya unboxing & setup B-roll sinematik yang menekankan ergonomi dan estetika workspace modern.",
      en: "Cinematic unboxing & workspace setup review illustrating cable-free aesthetics and posture benefits.",
    },
    hookBreakdown: {
      id: "00:00 - 00:03 · Transisi snap-cut sebelum & sesudah meja kerja yang berantakan menjadi rapi dan minimalis.",
      en: "00:00 - 00:03 · Fast snap-cut transition from chaotic messy desk to pristine minimal workspace.",
    },
    durationSec: 35,
    timecodeDuration: "00:00:35:00",
    videoSrc: "/videos/katama/katama_v2_editorial.mp4",
    poster: "/images/katama/katama_v2_free_print_poster.jpg",
    software: ["Adobe Premiere Pro", "DaVinci Resolve"],
    trackBlocks: {
      hook: { startSec: 0, endSec: 4, label: { id: "Hook: Desk Chaos Snap-Cut", en: "Hook: Desk Chaos Snap-Cut" } },
      body: { startSec: 4, endSec: 26, label: { id: "Body: Dual-Motor Lift & B-Roll", en: "Body: Dual-Motor Lift & B-Roll" } },
      cta: { startSec: 26, endSec: 35, label: { id: "CTA: Free Shipping Code", en: "CTA: Free Shipping Code" } },
    },
  },
];

function formatTimecode(seconds: number): string {
  const s = Math.max(0, seconds);
  const mins = Math.floor(s / 60);
  const secs = Math.floor(s % 60);
  const frames = Math.floor((s % 1) * 30);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `00:${pad(mins)}:${pad(secs)}:${pad(frames)}`;
}

export function NleTimelineWorkSection() {
  const { lang } = useLanguage();
  const isId = lang === "id";

  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timelineRulerRef = useRef<HTMLDivElement>(null);

  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(44);
  const [showSafeZones, setShowSafeZones] = useState<boolean>(false);
  const [isDraggingPlayhead, setIsDraggingPlayhead] = useState<boolean>(false);

  // Auto-play state & hover detection
  const [isInView, setIsInView] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [userInteracted, setUserInteracted] = useState<boolean>(false);

  const filteredProjects = TIMELINE_PROJECTS;
  const currentProject = filteredProjects[selectedProjectIndex] || TIMELINE_PROJECTS[0];

  // IntersectionObserver to detect when section is in viewport
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Auto-play on viewport enter, pause on hover or scroll out
  useEffect(() => {
    if (!videoRef.current) return;

    if (isInView && !isHovered && !userInteracted) {
      videoRef.current.muted = true;
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    } else if (!isInView && isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isInView, isHovered, userInteracted, currentProject]);

  const handleMouseEnterConsole = () => {
    setIsHovered(true);
    if (videoRef.current && isPlaying && !userInteracted) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleMouseLeaveConsole = () => {
    setIsHovered(false);
    if (videoRef.current && isInView && !userInteracted) {
      videoRef.current.muted = true;
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  // Sync duration when video metadata is loaded
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      const dur = videoRef.current.duration || currentProject.durationSec;
      setDuration(dur);
    }
  };

  // Sync current time while video plays
  const handleTimeUpdate = () => {
    if (videoRef.current && !isDraggingPlayhead) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      setCurrentTime(0);
      if (!isHovered && !userInteracted && isInView) {
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      } else {
        setIsPlaying(false);
      }
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    setUserInteracted(true);
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Timeline scrubber scrubbing logic
  const handleScrub = useCallback(
    (clientX: number) => {
      if (!timelineRulerRef.current) return;
      const rect = timelineRulerRef.current.getBoundingClientRect();
      const pos = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      const targetTime = pos * duration;
      setCurrentTime(targetTime);
      if (videoRef.current) {
        videoRef.current.currentTime = targetTime;
      }
    },
    [duration]
  );

  const handleMouseDownTimeline = (e: React.MouseEvent) => {
    setUserInteracted(true);
    setIsDraggingPlayhead(true);
    if (videoRef.current && isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
    handleScrub(e.clientX);
  };

  const handleTouchMoveTimeline = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleScrub(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDraggingPlayhead) {
        handleScrub(e.clientX);
      }
    };
    const handleMouseUp = () => {
      if (isDraggingPlayhead) {
        setIsDraggingPlayhead(false);
      }
    };

    if (isDraggingPlayhead) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDraggingPlayhead, handleScrub]);

  // When changing projects, reset playback
  const handleSelectProject = (idx: number) => {
    setSelectedProjectIndex(idx);
    setCurrentTime(0);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
    if (!isHovered && !userInteracted) {
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
        }
      }, 50);
    } else {
      setIsPlaying(false);
    }
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section ref={sectionRef} className="space-y-10 scroll-mt-24" id="work">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/[0.08] border border-emerald-500/20 text-xs font-mono uppercase tracking-[0.18em] text-emerald-400">
              <Scissors className="w-3.5 h-3.5" />
              <span>
                {isId ? "Karya Terpilih // NLE Timeline Engine" : "Selected Work // NLE Timeline Engine"}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.08]">
              Work Worth{" "}
              <span className="text-zinc-500 font-normal">
                Watching.
              </span>
            </h2>
          </div>

          <div className="max-w-md space-y-3 flex flex-col md:items-end">
            <p className="text-xs sm:text-sm text-zinc-400 md:text-right font-normal leading-relaxed">
              {isId
                ? "AI mini-drama, UGC, dan iklan produk. Pilih sekuensi di bawah atau geser playhead timeline untuk menelusuri tiap potongan video."
                : "AI mini-drama, UGC, and product ads. Pick a sequence below or drag the playhead to scrub through each cut."}
            </p>

            <Link
              href="/work"
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-xs font-mono text-white transition-all cursor-pointer shadow-sm"
            >
              <span>{isId ? "Lihat Semua Karya" : "View All Work"}</span>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </ScrollReveal>

      {/* ============================================================ */}
      {/* THE NLE TIMELINE WORKSPACE CONSOLE                          */}
      {/* ============================================================ */}
      <div
        onMouseEnter={handleMouseEnterConsole}
        onMouseLeave={handleMouseLeaveConsole}
        className="rounded-2xl border border-white/[0.1] bg-[#09090b] overflow-hidden shadow-2xl transition-all"
      >
        {/* NLE Console Topbar */}
        <div className="px-4 sm:px-6 py-3 border-b border-white/[0.08] bg-[#0c0c0e] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              <span className="text-zinc-200 font-semibold tracking-wide">
                SEQUENCE: {currentProject.slug.toUpperCase()}.prproj
              </span>
            </div>
            <span className="hidden sm:inline text-zinc-600">|</span>
            <span className="hidden sm:inline text-zinc-400 text-[11px]">
              1080x1920 (9:16) · 30 FPS
            </span>
            <span className="hidden md:inline text-zinc-600">|</span>
            {isPlaying && !isHovered ? (
              <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[10px] font-mono text-emerald-400 animate-pulse">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                {isId ? "LIVE AUTO-PREVIEW (HOVER UNTUK JEDA)" : "LIVE AUTO-PREVIEW (HOVER TO PAUSE)"}
              </span>
            ) : isHovered ? (
              <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-[10px] font-mono text-amber-300">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                {isId ? "DIJEDA (MODE MANUAL)" : "PAUSED (MANUAL SCRUB)"}
              </span>
            ) : null}
          </div>

          {/* Center Digital LCD Timecode */}
          <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#040405] border border-white/[0.1] text-emerald-400 font-mono text-xs tracking-wider shadow-inner">
            <span className="text-zinc-500 text-[10px]">TC</span>
            <span className="font-bold">{formatTimecode(currentTime)}</span>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-400">{currentProject.timecodeDuration}</span>
          </div>

          {/* Quick Console Actions */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowSafeZones(!showSafeZones)}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded border text-[11px] font-mono transition-colors cursor-pointer ${
                showSafeZones
                  ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                  : "bg-white/[0.04] text-zinc-400 hover:text-white border-white/[0.08]"
              }`}
              title="Toggle TikTok / Reels Feed Safe-Zones"
            >
              <Smartphone className="w-3 h-3" />
              <span className="hidden sm:inline">Safe-Zone HUD</span>
            </button>

            <button
              type="button"
              onClick={toggleMute}
              className="p-1.5 rounded border border-white/[0.08] bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 transition-colors cursor-pointer"
              title={isMuted ? "Unmute Audio" : "Mute Audio"}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
            </button>
          </div>
        </div>

        {/* Console Workspace: Monitor & Strategic Telemetry */}
        <div className="p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#070708]/90">
          {/* Left/Center: 9:16 Studio Preview Monitor */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[280px] sm:max-w-[310px] aspect-[9/16] rounded-2xl overflow-hidden border border-white/[0.12] bg-black shadow-[0_16px_50px_rgba(0,0,0,0.9)] group">
              {/* Actual Video Element */}
              <video
                ref={videoRef}
                src={currentProject.videoSrc}
                poster={currentProject.poster}
                muted={isMuted}
                loop
                playsInline
                preload="metadata"
                onLoadedMetadata={handleLoadedMetadata}
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleVideoEnded}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Optional Safe-Zone Overlay Guides */}
              {showSafeZones && (
                <div className="absolute inset-0 pointer-events-none z-20 border-2 border-dashed border-emerald-400/40 p-4 flex flex-col justify-between">
                  <div className="bg-emerald-950/80 backdrop-blur-xs px-2 py-0.5 rounded text-[9px] font-mono text-emerald-300 w-max border border-emerald-500/30">
                    TOP FEED SAFE MARGIN (120px)
                  </div>
                  {/* Mock TikTok / Reels Right Button Sidebar */}
                  <div className="self-end space-y-3 pr-1 opacity-70">
                    <div className="w-7 h-7 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-[9px] font-mono text-white">
                      ❤
                    </div>
                    <div className="w-7 h-7 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-[9px] font-mono text-white">
                      💬
                    </div>
                    <div className="w-7 h-7 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-[9px] font-mono text-white">
                      ↗
                    </div>
                  </div>
                  <div className="bg-emerald-950/80 backdrop-blur-xs px-2 py-0.5 rounded text-[9px] font-mono text-emerald-300 w-max border border-emerald-500/30">
                    BOTTOM CAPTION SAFE MARGIN (180px)
                  </div>
                </div>
              )}

              {/* Big Centered Play/Pause Button on Hover */}
              <button
                type="button"
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-all z-10 cursor-pointer"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {!isPlaying && (
                  <div className="w-14 h-14 rounded-full bg-emerald-500/90 text-black flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                )}
              </button>

              {/* Monitor Floating HUD Bottom Bar */}
              <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-15 flex items-center justify-between text-xs font-mono text-white">
                <button
                  type="button"
                  onClick={togglePlay}
                  className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                  <span>{isPlaying ? "PAUSE" : "PLAY"}</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (videoRef.current) {
                      videoRef.current.currentTime = 0;
                      setCurrentTime(0);
                    }
                  }}
                  className="p-1 hover:text-emerald-400 transition-colors cursor-pointer"
                  title="Rewind to 00:00:00:00"
                >
                  <RotateCcw className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Title on Top -> Timeline Scrubber in Middle -> Strategy Below */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4 sm:space-y-5">
            {/* 1. Project Title & Brand Header */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[10px] font-mono text-emerald-300 uppercase tracking-wider">
                  {currentProject.categoryLabel[lang]}
                </span>
                <span className="text-zinc-500 font-mono text-xs">•</span>
                <span className="text-xs font-mono text-zinc-400">
                  {currentProject.brand}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                {currentProject.title}
              </h3>
            </div>

            {/* 2. Interactive Timeline Scrubber (Placed in the Middle) */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#0c0c0e] border border-white/[0.08] space-y-2.5 shadow-md">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-zinc-200 font-semibold text-[11px] sm:text-xs">
                    {isId ? "Linimasa Interaktif (Drag jarum untuk scrub)" : "Interactive Timeline (Drag playhead to scrub)"}
                  </span>
                </span>
                <span className="text-zinc-500 text-[10px] hidden sm:inline">
                  SNAP TO HOOK / BODY / CTA
                </span>
              </div>

              {/* Timeline Time Ruler & Scrubber Rail */}
              <div
                ref={timelineRulerRef}
                onMouseDown={handleMouseDownTimeline}
                onTouchMove={handleTouchMoveTimeline}
                className="relative h-20 sm:h-22 w-full bg-[#060607] rounded-lg border border-white/[0.1] overflow-hidden select-none cursor-ew-resize group"
              >
                {/* Top Time Markers */}
                <div className="h-5 border-b border-white/[0.08] bg-[#09090b] px-3 flex items-center justify-between text-[9px] font-mono text-zinc-500">
                  <span>00:00</span>
                  <span>00:05</span>
                  <span>00:10</span>
                  <span>00:15</span>
                  <span>00:20</span>
                  <span>00:30</span>
                  <span className="text-zinc-400">{currentProject.timecodeDuration.slice(3, 8)}</span>
                </div>

                {/* Tracks Stack */}
                <div className="p-1.5 space-y-1 relative h-[calc(100%-20px)] flex flex-col justify-center">
                  {/* Track V1: Video & Hook Architecture */}
                  <div className="h-6 w-full rounded flex items-center overflow-hidden text-[9px] sm:text-[10px] font-mono font-medium gap-1">
                    <div
                      style={{ width: `${(currentProject.trackBlocks.hook.endSec / duration) * 100}%` }}
                      className={`h-full rounded px-1.5 flex items-center truncate transition-all duration-200 border ${
                        currentTime <= currentProject.trackBlocks.hook.endSec
                          ? "bg-emerald-500/35 border-emerald-400 text-emerald-200 shadow-[0_0_12px_rgba(52,211,153,0.35)]"
                          : "bg-emerald-500/15 border-emerald-400/25 text-emerald-400/70"
                      }`}
                      title="00:00 - 00:03 Hook Sprint"
                    >
                      <span className="truncate">⚡ {currentProject.trackBlocks.hook.label[lang]}</span>
                    </div>
                    <div
                      style={{
                        width: `${
                          ((currentProject.trackBlocks.body.endSec - currentProject.trackBlocks.hook.endSec) / duration) * 100
                        }%`,
                      }}
                      className={`h-full rounded px-1.5 flex items-center truncate transition-all duration-200 border ${
                        currentTime > currentProject.trackBlocks.hook.endSec && currentTime <= currentProject.trackBlocks.body.endSec
                          ? "bg-sky-500/35 border-sky-400 text-sky-200 shadow-[0_0_12px_rgba(56,189,248,0.35)]"
                          : "bg-sky-500/15 border-sky-400/25 text-sky-400/70"
                      }`}
                      title="Main Body & Value Demonstration"
                    >
                      <span className="truncate">{currentProject.trackBlocks.body.label[lang]}</span>
                    </div>
                    <div
                      style={{
                        width: `${
                          ((duration - currentProject.trackBlocks.body.endSec) / duration) * 100
                        }%`,
                      }}
                      className={`h-full rounded px-1.5 flex items-center truncate transition-all duration-200 border ${
                        currentTime > currentProject.trackBlocks.body.endSec
                          ? "bg-amber-500/35 border-amber-400 text-amber-200 shadow-[0_0_12px_rgba(251,191,36,0.35)]"
                          : "bg-amber-500/15 border-amber-400/25 text-amber-400/70"
                      }`}
                      title="Frictionless Call to Action"
                    >
                      <span className="truncate">🎯 {currentProject.trackBlocks.cta.label[lang]}</span>
                    </div>
                  </div>

                  {/* Track A1: Audio Waveform Simulation */}
                  <div className="h-4.5 w-full rounded bg-white/[0.02] border border-white/[0.05] flex items-center px-2 gap-1 overflow-hidden">
                    <span className="text-[8px] sm:text-[9px] font-mono text-zinc-500 shrink-0">A1 // -14 LUFS:</span>
                    <div className="flex-1 flex items-center gap-[2px] h-2.5 opacity-60">
                      {Array.from({ length: 42 }).map((_, i) => {
                        const heightPercent = 20 + Math.sin(i * 0.4) * 40 + (i % 3 === 0 ? 30 : 0);
                        return (
                          <div
                            key={i}
                            style={{ height: `${Math.min(100, Math.max(15, heightPercent))}%` }}
                            className={`flex-1 rounded-xs transition-all duration-150 ${
                              isPlaying
                                ? i % 2 === 0
                                  ? "bg-emerald-400 animate-pulse"
                                  : "bg-emerald-300"
                                : "bg-emerald-400/60"
                            }`}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Glowing Emerald Playhead Needle */}
                <div
                  style={{ left: `${progressPercent}%` }}
                  className={`absolute top-0 bottom-0 w-[2px] bg-emerald-400 z-30 pointer-events-none shadow-[0_0_12px_rgba(52,211,153,1)] ${
                    isDraggingPlayhead ? "transition-none" : "transition-[left] duration-75"
                  }`}
                >
                  {/* Playhead Top Needle Handle */}
                  <div className="absolute -top-1 -left-[5px] w-0 h-0 border-x-[6px] border-x-transparent border-t-[8px] border-t-emerald-400 shadow-sm" />
                </div>
              </div>
            </div>

            {/* 3. Creative Strategy & Angle Details (Below the Timeline) */}
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1.5">
                <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" />
                  <span>{isId ? "Sudut Pandang / Angle Teruji:" : "Tested Creative Angle:"}</span>
                </div>
                <p className="text-sm font-medium text-zinc-100">
                  {currentProject.angle[lang]}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                {currentProject.strategy[lang]}
              </p>
            </div>

            {/* Production Specifications & Link */}
            <div className="pt-2 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                  {isId ? "Alat:" : "Stack:"}
                </span>
                {currentProject.software.map((sw, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-zinc-300"
                  >
                    {sw}
                  </span>
                ))}
              </div>

              <Link
                href={`/projects/${currentProject.slug}`}
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black hover:bg-zinc-200 text-xs font-semibold transition-all shadow-sm cursor-pointer"
              >
                <span>{isId ? "Lihat Studi Kasus Lengkap" : "Explore Full Case Study"}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Project Switcher Sequence Tray */}
        <div className="border-t border-white/[0.08] bg-[#0a0a0c] p-4 sm:p-5">
          <div className="flex items-center justify-between pb-3">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              {isId ? "PILIH KLIP SEKUENSI PROYEK:" : "SELECT PROJECT SEQUENCE:"}
            </span>
            <span className="text-[11px] font-mono text-zinc-500">
              {filteredProjects.length} {isId ? "Proyek Tersedia" : "Sequences Ready"}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {filteredProjects.map((proj, idx) => {
              const isSelected = proj.id === currentProject.id;
              return (
                <button
                  key={proj.id}
                  type="button"
                  onClick={() => handleSelectProject(idx)}
                  className={`group p-2 rounded-xl border text-left transition-all duration-300 cursor-pointer space-y-1.5 ${
                    isSelected
                      ? "bg-white/[0.08] border-emerald-400 shadow-[0_0_24px_rgba(52,211,153,0.25)] ring-1 ring-emerald-400/40 opacity-100"
                      : "bg-[#050507] border-white/[0.05] opacity-50 hover:opacity-100 hover:border-white/20 hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="relative aspect-[9/16] w-full rounded-lg overflow-hidden bg-black/80 border border-white/[0.08]">
                    <img
                      src={proj.poster}
                      alt={proj.title}
                      className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 ${
                        isSelected
                          ? "brightness-100 contrast-100"
                          : "brightness-[0.55] contrast-[0.95] group-hover:brightness-100 group-hover:contrast-100"
                      }`}
                    />
                    {!isSelected && (
                      <div className="absolute inset-0 bg-black/25 group-hover:bg-transparent transition-colors pointer-events-none" />
                    )}
                    <div className="absolute top-1 right-1 px-1.5 py-0.5 rounded bg-black/80 backdrop-blur-xs text-[8px] font-mono text-zinc-300">
                      {proj.timecodeDuration.slice(3, 8)}
                    </div>
                  </div>

                  <div className="space-y-0.5">
                    <div className="flex items-center justify-between gap-1">
                      <h5
                        className={`text-xs font-semibold tracking-tight truncate transition-colors ${
                          isSelected ? "text-emerald-300" : "text-zinc-400 group-hover:text-white"
                        }`}
                      >
                        {proj.title}
                      </h5>
                      {isSelected && isPlaying && (
                        <span className="flex items-end gap-0.5 h-2.5 shrink-0" title="Now Playing">
                          <span className="w-0.5 h-1.5 bg-emerald-400 animate-pulse" />
                          <span className="w-0.5 h-2.5 bg-emerald-400 animate-pulse delay-75" />
                          <span className="w-0.5 h-2 bg-emerald-400 animate-pulse delay-150" />
                        </span>
                      )}
                    </div>
                    <p
                      className={`text-[10px] truncate font-mono transition-colors ${
                        isSelected ? "text-zinc-400" : "text-zinc-600 group-hover:text-zinc-400"
                      }`}
                    >
                      {proj.angle[lang]}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
