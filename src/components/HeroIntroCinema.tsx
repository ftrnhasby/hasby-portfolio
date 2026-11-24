"use client";

import {
  useState,
  useEffect,
  useRef,
  useCallback,
  useImperativeHandle,
  RefObject,
} from "react";
import Image from "next/image";
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  X,
  Maximize,
  Minimize,
  Film,
  Loader2,
  Armchair,
  Monitor,
  SkipForward,
  Smartphone,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const INTRO_VIDEO_SRC =
  "https://pub-ce549553bdcb4e28bf63c02be337f07b.r2.dev/one%20last%20cut/1124(3).mp4";
const INTRO_POSTER_SRC = "/images/intro/one-last-cut-poster.jpg";
const INTRO_DURATION_LABEL = "01:17";

interface RoomGeometry {
  W: number;
  H: number;
  screenX: number;
  screenY: number;
  screenW: number;
  screenH: number;
  wallL: number;
  wallR: number;
  wallT: number;
  wallB: number;
}

/**
 * Computes pixel-exact 16:9 screen placement mounted cleanly INSIDE the theater back wall
 * so the screen never overflows the room corners and has zero internal letterboxing.
 */
function computeRoomGeometry(W: number, H: number): RoomGeometry {
  const safeW = Math.max(320, W);
  const safeH = Math.max(320, H);
  const isPortraitMobile = safeW < 640 && safeH > safeW;
  const isCompactLandscape = safeH < 500 && safeW > safeH;
  const isMobile = safeW < 640;

  if (isPortraitMobile) {
    // Portrait phone cinema POV: screen sits naturally in upper-mid eye-line
    // so tiered stadium cinema seats & seated viewers rise authentically in front of the viewer
    const screenW = Math.round(safeW * 0.88);
    const screenH = Math.round(screenW * (9 / 16));
    const screenX = Math.round((safeW - screenW) / 2);
    const screenY = Math.round(Math.max(106, Math.min(safeH * 0.25, safeH - screenH - 250)));

    const padX = Math.round(Math.max(14, screenW * 0.048));
    const padTop = Math.round(Math.max(20, screenH * 0.12));
    const padBottom = Math.round(Math.max(24, screenH * 0.15));

    const wallL = Math.max(8, screenX - padX);
    const wallR = Math.min(safeW - 8, screenX + screenW + padX);
    const wallT = Math.max(40, screenY - padTop);
    const wallB = Math.min(safeH - Math.round(safeH * 0.44), screenY + screenH + padBottom);

    return {
      W: safeW,
      H: safeH,
      screenX,
      screenY,
      screenW,
      screenH,
      wallL,
      wallR,
      wallT,
      wallB,
    };
  }

  // Keep the 16:9 screen set comfortably back on the acoustic wall (Desktop & Landscape Phone)
  const maxWByWidth = safeW * (isMobile ? 0.86 : 0.62);
  const maxHByHeight = safeH * (isCompactLandscape ? 0.66 : isMobile ? 0.52 : 0.6);
  const maxWByHeight = maxHByHeight * (16 / 9);

  const screenW = Math.round(Math.min(maxWByWidth, maxWByHeight));
  const screenH = Math.round(screenW * (9 / 16));

  // Center horizontally; shift slightly above vertical center so silhouette seats sit cleanly below
  const seatReserve = safeH * (isCompactLandscape ? 0.15 : isMobile ? 0.13 : 0.16);
  const topReserve = isCompactLandscape ? 36 : isMobile ? 54 : 52;
  const availableH = Math.max(screenH, safeH - seatReserve - topReserve);

  const screenX = Math.round((safeW - screenW) / 2);
  const screenY = Math.round(topReserve + (availableH - screenH) / 2);

  // Back wall generously wraps the mounted screen on all 4 sides
  const padX = Math.round(
    Math.max(isMobile ? 14 : isCompactLandscape ? 28 : 44, screenW * (isMobile ? 0.045 : 0.065))
  );
  const padTop = Math.round(Math.max(isMobile || isCompactLandscape ? 16 : 32, screenH * 0.075));
  const padBottom = Math.round(Math.max(isMobile || isCompactLandscape ? 20 : 42, screenH * 0.1));

  const wallL = Math.max(isMobile ? 8 : isCompactLandscape ? 36 : 60, screenX - padX);
  const wallR = Math.min(
    safeW - (isMobile ? 8 : isCompactLandscape ? 36 : 60),
    screenX + screenW + padX
  );
  const wallT = Math.max(18, screenY - padTop);
  const wallB = Math.min(safeH - Math.round(safeH * 0.1), screenY + screenH + padBottom);

  return {
    W: safeW,
    H: safeH,
    screenX,
    screenY,
    screenW,
    screenH,
    wallL,
    wallR,
    wallT,
    wallB,
  };
}

interface HeroIntroPreviewCardProps {
  onPlay: () => void;
}

export function HeroIntroPreviewCard({ onPlay }: HeroIntroPreviewCardProps) {
  const { lang } = useLanguage();
  const isId = lang === "id";

  return (
    <div className="w-full space-y-2.5">
      <button
        type="button"
        onClick={onPlay}
        aria-label={isId ? "Masuk ke cinema untuk memutar film intro" : "Enter cinema to play intro film"}
        className="group relative block w-full aspect-video rounded-2xl overflow-hidden border border-white/[0.12] bg-[#0a0a0c] shadow-[0_24px_70px_rgba(0,0,0,0.85)] hover:border-emerald-400/50 hover:shadow-[0_24px_80px_rgba(52,211,153,0.16)] transition-all duration-500 cursor-pointer text-left"
      >
        {/* Static 16:9 Cinema Poster Frame (Clean Dark Mode B — zero background playback until clicked) */}
        <Image
          src={INTRO_POSTER_SRC}
          alt="One Last Cut — Portfolio Intro Film"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 45vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] brightness-[0.88] group-hover:brightness-100"
        />

        {/* Editorial Dark Vignette Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/45 transition-opacity duration-500 group-hover:opacity-80 pointer-events-none" />

        {/* Top Studio HUD Row */}
        <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between gap-2 z-10 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono uppercase tracking-wider text-zinc-200">
            <Film className="w-3 h-3 text-emerald-400" />
            <span>{isId ? "Film Intro" : "Intro Film"}</span>
          </span>

          <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono text-zinc-300">
            16:9 · {INTRO_DURATION_LABEL}
          </span>
        </div>

        {/* Centered Cinema Play Button */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="relative flex items-center justify-center">
            <span className="absolute w-20 h-20 rounded-full bg-emerald-400/15 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative w-15 h-15 sm:w-16 sm:h-16 rounded-full bg-white/95 text-black border border-white/40 flex items-center justify-center shadow-[0_12px_36px_rgba(0,0,0,0.75)] transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-400">
              <Play className="w-6 h-6 fill-current translate-x-0.5" />
            </span>
          </div>
        </div>

        {/* Bottom Caption Bar */}
        <div className="absolute bottom-3.5 inset-x-4 flex items-end justify-between gap-3 z-10 pointer-events-none">
          <div className="space-y-0.5 min-w-0">
            <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-emerald-400">
              ONE LAST CUT
            </div>
            <div className="text-xs sm:text-sm font-medium text-white truncate">
              {isId
                ? "Masuk ke ruang screening dengan audio"
                : "Enter private screening room with sound"}
            </div>
          </div>

          <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/[0.08] border border-white/15 backdrop-blur-md text-[10px] font-mono text-zinc-200 shrink-0 group-hover:bg-white group-hover:text-black transition-colors">
            <Armchair className="w-3 h-3" />
            <span>{isId ? "Masuk" : "Enter"}</span>
          </span>
        </div>
      </button>

      {/* Subtle Micro Caption Beneath Card */}
      <div className="flex items-center justify-between px-1 text-[11px] font-mono text-zinc-500">
        <span>{isId ? "● Klik untuk masuk ke cinema" : "● Click to enter cinema"}</span>
        <span>2K · 30 FPS</span>
      </div>
    </div>
  );
}

/**
 * Architectural SVG Private Boutique Screening Room Backdrop
 * Dynamically locked pixel-for-pixel to the mounted 16:9 cinema screen's back wall
 * so the screen sits flush inside the room corners on every viewport aspect ratio.
 */
function ScreeningRoomBackdrop({
  isPlaying,
  geo,
}: {
  isPlaying: boolean;
  geo: RoomGeometry;
}) {
  const { W, H, wallL, wallR, wallT, wallB, screenX, screenY, screenW, screenH } = geo;
  const sideWallWidth = wallL;
  const showSideDetails = sideWallWidth >= 90;

  // Perspective interpolation helpers along left & right walls (t = 0 at viewer edge, t = 1 at back wall corner)
  const slatFractions = [0.14, 0.28, 0.42, 0.56, 0.7, 0.84, 0.94];
  const ceilingRibFractions = [0.25, 0.52, 0.78];

  // Sconce coordinates along the left & right angled acoustic walls
  const sconceNearT = 0.28;
  const sconceFarT = 0.68;

  const leftSconceNearX = wallL * sconceNearT;
  const leftSconceFarX = wallL * sconceFarT;
  const rightSconceNearX = W - wallL * sconceNearT;
  const rightSconceFarX = W - wallL * sconceFarT;

  const sconceY = wallT + (wallB - wallT) * 0.41;

  // Perspective helpers along the right angled acoustic wall:
  // t = 0 at viewer edge (x = W), t = 1 at back-wall corner (x = wallR)
  // f = 0 at ceiling seam, f = 1 at floor seam
  const rightWallX = (t: number) => W - (W - wallR) * t;
  const rightWallY = (t: number, f: number) =>
    (1 - t) * (f * H) + t * (wallT + f * (wallB - wallT));

  // Compact human-scale perspective cinema exit door on right angled wall
  const rightSideSpan = Math.max(90, W - wallR);
  const backWallH = Math.max(240, wallB - wallT);
  const targetDoorW = Math.max(36, Math.min(50, backWallH * 0.092));
  const doorDepthSpan = Math.min(0.26, targetDoorW / rightSideSpan);

  const doorFarT = 0.8;
  const doorNearT = Math.max(0.46, doorFarT - doorDepthSpan);
  const doorMidT = (doorFarT + doorNearT) / 2;
  const doorTopF = 0.785;

  const doorT = (u: number) => doorFarT - (doorFarT - doorNearT) * u;
  const doorF = (v: number) => doorTopF + (1 - doorTopF) * v;
  const doorRectPts = (u0: number, u1: number, v0: number, v1: number) =>
    `${rightWallX(doorT(u0))},${rightWallY(doorT(u0), doorF(v0))} ${rightWallX(doorT(u1))},${rightWallY(doorT(u1), doorF(v0))} ${rightWallX(doorT(u1))},${rightWallY(doorT(u1), doorF(v1))} ${rightWallX(doorT(u0))},${rightWallY(doorT(u0), doorF(v1))}`;

  const doorOuterPts = doorRectPts(0, 1, 0, 1);
  const doorLeafPts = doorRectPts(0.09, 0.91, 0.055, 0.99);
  const doorUpperPanelPts = doorRectPts(0.2, 0.8, 0.14, 0.44);
  const doorLowerPanelPts = doorRectPts(0.2, 0.8, 0.61, 0.91);

  // Flush wall-mounted EXIT sign strictly aligned to the right wall's 3D perspective plane
  const signFarT = doorT(0.12);
  const signNearT = doorT(0.88);
  const signLeftX = rightWallX(signFarT);
  const signRightX = rightWallX(signNearT);
  const signSpanX = Math.max(24, signRightX - signLeftX);
  const wallHAtDoorMid = Math.max(200, rightWallY(doorMidT, 1) - rightWallY(doorMidT, 0));
  const signBoxH = Math.max(12, Math.min(16, signSpanX * 0.44));
  const signGapF = 7 / wallHAtDoorMid;
  const signHeightF = signBoxH / wallHAtDoorMid;
  const signBotF = doorTopF - signGapF;
  const signTopF = signBotF - signHeightF;
  const signMidF = (signTopF + signBotF) / 2;

  const signFacePts = `${signLeftX},${rightWallY(signFarT, signTopF)} ${signRightX},${rightWallY(signNearT, signTopF)} ${signRightX},${rightWallY(signNearT, signBotF)} ${signLeftX},${rightWallY(signFarT, signBotF)}`;
  // Thin 3D housing bevel on the viewer-facing near edge so the sign reads bolted onto the wall
  const signDepthDx = 2.2;
  const signSideBevelPts = `${signRightX},${rightWallY(signNearT, signTopF)} ${signRightX + signDepthDx},${rightWallY(signNearT, signTopF) + 0.5} ${signRightX + signDepthDx},${rightWallY(signNearT, signBotF) + 0.5} ${signRightX},${rightWallY(signNearT, signBotF)}`;

  const exitCx = (signLeftX + signRightX) / 2;
  const exitCy = rightWallY(doorMidT, signMidF);
  const signSlopeDeg =
    (Math.atan2(
      rightWallY(signNearT, signMidF) - rightWallY(signFarT, signMidF),
      signRightX - signLeftX
    ) *
      180) /
    Math.PI;
  const exitFontSize = Math.max(6.8, Math.min(8.8, signSpanX * 0.25));

  const screenCenterX = screenX + screenW / 2;
  const screenCenterY = screenY + screenH / 2;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
    >
      <defs>
        <linearGradient id="leftWallGrad" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#0c0c11" />
          <stop offset="55%" stopColor="#08080c" />
          <stop offset="100%" stopColor="#040406" />
        </linearGradient>
        <linearGradient id="rightWallGrad" x1="100%" y1="50%" x2="0%" y2="50%">
          <stop offset="0%" stopColor="#0c0c11" />
          <stop offset="55%" stopColor="#08080c" />
          <stop offset="100%" stopColor="#040406" />
        </linearGradient>
        <linearGradient id="backWallGrad" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#060609" />
          <stop offset="50%" stopColor="#040406" />
          <stop offset="100%" stopColor="#020203" />
        </linearGradient>
        <linearGradient id="ceilingGrad" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#0a0a0f" />
          <stop offset="100%" stopColor="#040406" />
        </linearGradient>
        <linearGradient id="floorGrad" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#050508" />
          <stop offset="100%" stopColor="#0b0b10" />
        </linearGradient>

        {/* Warm architectural wall sconce light cones */}
        <radialGradient id="sconceGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.6" />
          <stop offset="40%" stopColor="#f59e0b" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
        </radialGradient>

        {/* Subtle emerald EXIT sign halo */}
        <radialGradient id="exitHalo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#34d399" stopOpacity="0.45" />
          <stop offset="55%" stopColor="#10b981" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
        </radialGradient>

        {/* Perspective acoustic exit door leaf surface */}
        <linearGradient id="exitDoorLeafGrad" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#080b0b" />
          <stop offset="30%" stopColor="#050608" />
          <stop offset="100%" stopColor="#030305" />
        </linearGradient>

        {/* Ambient screen light spill radiating across the back wall & adjacent angled walls */}
        <radialGradient
          id="screenSpill"
          cx={screenCenterX}
          cy={screenCenterY}
          r={Math.max(screenW * 0.85, screenH * 1.1)}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#a7f3d0" stopOpacity="0.14" />
          <stop offset="45%" stopColor="#60a5fa" stopOpacity="0.055" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>

        {/* Subtle volumetric projector light beam from ceiling booth onto mounted screen */}
        <linearGradient id="projectorBeam" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#e4e4e7" stopOpacity="0.09" />
          <stop offset="65%" stopColor="#a1a1aa" stopOpacity="0.025" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Back Acoustic Screen Wall */}
      <rect x={wallL} y={wallT} width={wallR - wallL} height={wallB - wallT} fill="url(#backWallGrad)" />

      {/* Subtle Acoustic Wall Micro-Panels Behind the Mounted Screen */}
      {Array.from({ length: 12 }, (_, i) => {
        const x = wallL + ((wallR - wallL) * (i + 1)) / 13;
        return (
          <line
            key={`back-rib-${i}`}
            x1={x}
            y1={wallT}
            x2={x}
            y2={wallB}
            stroke="rgba(255,255,255,0.018)"
            strokeWidth="1"
          />
        );
      })}

      {/* Ceiling Perspective Plane */}
      <polygon points={`0,0 ${W},0 ${wallR},${wallT} ${wallL},${wallT}`} fill="url(#ceilingGrad)" />
      {ceilingRibFractions.map((t, idx) => {
        const y = wallT * t;
        const xL = wallL * t;
        const xR = W - (W - wallR) * t;
        return (
          <line
            key={`ceil-rib-${idx}`}
            x1={xL}
            y1={y}
            x2={xR}
            y2={y}
            stroke="rgba(255,255,255,0.035)"
            strokeWidth={idx === 0 ? 1.5 : 1}
          />
        );
      })}

      {/* Floor Perspective Plane */}
      <polygon points={`${wallL},${wallB} ${wallR},${wallB} ${W},${H} 0,${H}`} fill="url(#floorGrad)" />

      {/* Left Angled Acoustic Wall */}
      <polygon points={`0,0 ${wallL},${wallT} ${wallL},${wallB} 0,${H}`} fill="url(#leftWallGrad)" />
      {/* Right Angled Acoustic Wall */}
      <polygon points={`${W},0 ${wallR},${wallT} ${wallR},${wallB} ${W},${H}`} fill="url(#rightWallGrad)" />

      {/* Acoustic Vertical Slats on Left & Right Walls */}
      {slatFractions.map((t, idx) => {
        const lx = wallL * t;
        const rx = W - (W - wallR) * t;
        const yTop = wallT * t;
        const yBot = H - (H - wallB) * t;
        return (
          <g key={`wall-slat-${idx}`}>
            <line
              x1={lx}
              y1={yTop}
              x2={lx}
              y2={yBot}
              stroke="rgba(255,255,255,0.036)"
              strokeWidth={idx < 2 ? 1.8 : 1.1}
            />
            <line
              x1={rx}
              y1={yTop}
              x2={rx}
              y2={yBot}
              stroke="rgba(255,255,255,0.036)"
              strokeWidth={idx < 2 ? 1.8 : 1.1}
            />
          </g>
        );
      })}

      {/* Grounded Proscenium Stage Lip Along Base of Back Wall */}
      <rect
        x={wallL}
        y={wallB - 10}
        width={wallR - wallL}
        height={10}
        fill="#08080c"
      />
      <line
        x1={wallL}
        y1={wallB - 10}
        x2={wallR}
        y2={wallB - 10}
        stroke="rgba(255,255,255,0.06)"
        strokeWidth="1"
      />

      {/* Crisp Architectural Room Corner Seams */}
      <line x1="0" y1="0" x2={wallL} y2={wallT} stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
      <line x1={W} y1="0" x2={wallR} y2={wallT} stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
      <line x1="0" y1={H} x2={wallL} y2={wallB} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      <line x1={W} y1={H} x2={wallR} y2={wallB} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      <rect
        x={wallL}
        y={wallT}
        width={wallR - wallL}
        height={wallB - wallT}
        fill="none"
        stroke="rgba(255,255,255,0.065)"
        strokeWidth="1"
      />

      {/* Ambient Screen Light Spill (Brighter when playing) */}
      <rect
        width={W}
        height={H}
        fill="url(#screenSpill)"
        style={{
          opacity: isPlaying ? 1 : 0.4,
          transition: "opacity 900ms ease-in-out",
        }}
      />

      {/* Subtle Overhead Projector Beam aimed cleanly at mounted screen */}
      <polygon
        points={`${screenCenterX - 28},0 ${screenCenterX + 28},0 ${screenX + screenW},${screenY} ${screenX},${screenY}`}
        fill="url(#projectorBeam)"
        style={{
          opacity: isPlaying ? 0.85 : 0,
          transition: "opacity 1100ms ease-in-out",
        }}
      />

      {/* House-Light Wall Sconces — Smoothly Dim on Play, Warm Up on Pause */}
      {showSideDetails && (
        <g
          style={{
            opacity: isPlaying ? 0.16 : 0.88,
            transition: "opacity 1100ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {/* Left Near Sconce */}
          <ellipse cx={leftSconceNearX} cy={sconceY} rx={Math.min(82, sideWallWidth * 0.28)} ry={165} fill="url(#sconceGlow)" />
          <rect x={leftSconceNearX - 3.5} y={sconceY - 26} width="7" height="52" rx="3" fill="#27272a" stroke="rgba(251,191,36,0.35)" strokeWidth="0.8" />
          <rect x={leftSconceNearX - 1.5} y={sconceY - 23} width="3" height="46" rx="1.5" fill="#fcd34d" opacity="0.72" />

          {/* Left Far Sconce */}
          <ellipse cx={leftSconceFarX} cy={sconceY} rx={Math.min(56, sideWallWidth * 0.2)} ry={120} fill="url(#sconceGlow)" />
          <rect x={leftSconceFarX - 2.5} y={sconceY - 20} width="5" height="40" rx="2" fill="#27272a" stroke="rgba(251,191,36,0.3)" strokeWidth="0.7" />
          <rect x={leftSconceFarX - 1.2} y={sconceY - 18} width="2.4" height="36" rx="1.2" fill="#fcd34d" opacity="0.6" />

          {/* Right Near Sconce */}
          <ellipse cx={rightSconceNearX} cy={sconceY} rx={Math.min(82, sideWallWidth * 0.28)} ry={165} fill="url(#sconceGlow)" />
          <rect x={rightSconceNearX - 3.5} y={sconceY - 26} width="7" height="52" rx="3" fill="#27272a" stroke="rgba(251,191,36,0.35)" strokeWidth="0.8" />
          <rect x={rightSconceNearX - 1.5} y={sconceY - 23} width="3" height="46" rx="1.5" fill="#fcd34d" opacity="0.72" />

          {/* Right Far Sconce */}
          <ellipse cx={rightSconceFarX} cy={sconceY} rx={Math.min(56, sideWallWidth * 0.2)} ry={120} fill="url(#sconceGlow)" />
          <rect x={rightSconceFarX - 2.5} y={sconceY - 20} width="5" height="40" rx="2" fill="#27272a" stroke="rgba(251,191,36,0.3)" strokeWidth="0.7" />
          <rect x={rightSconceFarX - 1.2} y={sconceY - 18} width="2.4" height="36" rx="1.2" fill="#fcd34d" opacity="0.6" />
        </g>
      )}

      {/* Subtle Floor Aisle Step Guide LEDs aligned to real room corners */}
      {showSideDetails && (
        <g
          style={{
            opacity: isPlaying ? 0.35 : 0.75,
            transition: "opacity 900ms ease-in-out",
          }}
        >
          <line
            x1={wallL - 12}
            y1={wallB + 14}
            x2={Math.max(24, wallL * 0.14)}
            y2={H - 18}
            stroke="#34d399"
            strokeWidth="1.5"
            strokeDasharray="3 16"
            strokeLinecap="round"
          />
          <line
            x1={wallR + 12}
            y1={wallB + 14}
            x2={Math.min(W - 24, W - wallL * 0.14)}
            y2={H - 18}
            stroke="#34d399"
            strokeWidth="1.5"
            strokeDasharray="3 16"
            strokeLinecap="round"
          />
        </g>
      )}

      {/* Architectural Perspective Exit Door + Glowing Emerald EXIT Sign on Right Acoustic Wall */}
      {showSideDetails && (
        <g>
          {/* Recessed Door Structure (Dims Naturally Into Shadow When House Lights Dim) */}
          <g
            style={{
              opacity: isPlaying ? 0.55 : 0.9,
              transition: "opacity 1100ms ease-in-out",
            }}
          >
            {/* Recessed Door Jamb / Outer Frame */}
            <polygon
              points={doorOuterPts}
              fill="#020204"
              stroke="rgba(255,255,255,0.052)"
              strokeWidth="1"
            />

            {/* Main Dark Acoustic Fire-Exit Door Leaf */}
            <polygon
              points={doorLeafPts}
              fill="url(#exitDoorLeafGrad)"
              stroke="rgba(255,255,255,0.028)"
              strokeWidth="0.8"
            />

            {/* Upper & Lower Recessed Architectural Door Panels */}
            <polygon
              points={doorUpperPanelPts}
              fill="rgba(255,255,255,0.006)"
              stroke="rgba(255,255,255,0.022)"
              strokeWidth="0.75"
            />
            <polygon
              points={doorLowerPanelPts}
              fill="rgba(0,0,0,0.22)"
              stroke="rgba(255,255,255,0.018)"
              strokeWidth="0.75"
            />

            {/* Subdued Gunmetal Panic Push-Bar (Perspective Aligned) */}
            <line
              x1={rightWallX(doorT(0.18))}
              y1={rightWallY(doorT(0.18), doorF(0.52))}
              x2={rightWallX(doorT(0.82))}
              y2={rightWallY(doorT(0.82), doorF(0.52))}
              stroke="rgba(212,212,216,0.14)"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <line
              x1={rightWallX(doorT(0.18))}
              y1={rightWallY(doorT(0.18), doorF(0.52)) - 0.7}
              x2={rightWallX(doorT(0.82))}
              y2={rightWallY(doorT(0.82), doorF(0.52)) - 0.7}
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="0.6"
              strokeLinecap="round"
            />
            {/* Push-bar End Brackets */}
            <circle
              cx={rightWallX(doorT(0.18))}
              cy={rightWallY(doorT(0.18), doorF(0.52))}
              r="1.15"
              fill="rgba(161,161,170,0.2)"
            />
            <circle
              cx={rightWallX(doorT(0.82))}
              cy={rightWallY(doorT(0.82), doorF(0.52))}
              r="1.25"
              fill="rgba(161,161,170,0.2)"
            />

            {/* Whisper-Subtle Emerald Lintel Catch & Bottom Threshold Seam */}
            <line
              x1={rightWallX(doorFarT)}
              y1={rightWallY(doorFarT, doorTopF)}
              x2={rightWallX(doorNearT)}
              y2={rightWallY(doorNearT, doorTopF)}
              stroke="#34d399"
              strokeOpacity={isPlaying ? 0.12 : 0.22}
              strokeWidth="0.9"
            />
            <line
              x1={rightWallX(doorT(0.09))}
              y1={rightWallY(doorT(0.09), 0.995)}
              x2={rightWallX(doorT(0.91))}
              y2={rightWallY(doorT(0.91), 0.995)}
              stroke="#6ee7b7"
              strokeOpacity={isPlaying ? 0.06 : 0.11}
              strokeWidth="0.85"
            />
          </g>

          {/* Wall-Mounted Perspective Emerald EXIT Sign Flush on Right Wall */}
          <g
            style={{
              opacity: isPlaying ? 0.6 : 0.94,
              transition: "opacity 900ms ease-in-out",
            }}
          >
            {/* Perspective Wall Glow Spill */}
            <g transform={`translate(${exitCx}, ${exitCy + 3}) skewY(${signSlopeDeg})`}>
              <ellipse cx={0} cy={0} rx={signSpanX * 1.15} ry={signBoxH * 1.65} fill="url(#exitHalo)" />
            </g>
            {/* 3D Side Mounting Housing */}
            <polygon
              points={signSideBevelPts}
              fill="#03120d"
              stroke="rgba(52,211,153,0.28)"
              strokeWidth="0.6"
            />
            {/* Perspective Face Box Flush to Wall Plane */}
            <polygon
              points={signFacePts}
              fill="#06281c"
              stroke="#34d399"
              strokeOpacity="0.72"
              strokeWidth="0.9"
              strokeLinejoin="round"
            />
            {/* Perspective-Skewed EXIT Typography (Vertical Stems Stay Vertical, Baseline Matches Wall Angle) */}
            <g transform={`translate(${exitCx}, ${exitCy}) skewY(${signSlopeDeg}) scale(0.78, 1)`}>
              <text
                x={0}
                y={exitFontSize * 0.35}
                textAnchor="middle"
                fill="#6ee7b7"
                fontSize={exitFontSize}
                fontFamily="monospace"
                fontWeight="700"
                letterSpacing="1.6"
              >
                EXIT
              </text>
            </g>
          </g>
        </g>
      )}
    </svg>
  );
}

/**
 * Foreground Silhouette Theater Seats (2 Perspective Rows) + Minimalist Seated Viewer Silhouettes
 * Dynamically sized to viewport geometry so both seat rows and seated viewer heads never clip
 * and never overlap the mounted 16:9 cinema screen.
 */
function TheaterSeatsForeground({
  isPlaying,
  geo,
}: {
  isPlaying: boolean;
  geo: RoomGeometry;
}) {
  const { W, H, screenY, screenH, wallB } = geo;
  const isMobile = W < 640;
  const isPortraitMobile = isMobile && H > W;

  if (isPortraitMobile) {
    // Immersive 3-row tiered stadium POV seating for portrait phones:
    // Seats & seated silhouettes rise cleanly toward the screen so it feels like watching from inside the theater
    const seatBandH = Math.round(Math.max(210, Math.min(H * 0.49, H - wallB + 14)));
    const u = seatBandH / 380;
    const centerX = W / 2;

    const rows = [
      {
        id: "far",
        topY: Math.round(seatBandH * 0.17),
        step: 84 * u,
        stagger: 0,
        halfW: 33 * u,
        seatH: 130 * u,
        headR: 12.5 * u,
        headCy: -21 * u,
        neckW: 6 * u,
        neckH: 12 * u,
        shW: 27 * u,
        bodyGrad: "url(#seatBodyFar)",
        rimGrad: "url(#seatRimBack)",
        rimWidth: 1.05 * u,
        opacity: 0.86,
        viewerAt: { [1]: { tilt: -3 } } as Record<number, { tilt: number }>,
        hasArmrest: false,
      },
      {
        id: "mid",
        topY: Math.round(seatBandH * 0.41),
        step: 118 * u,
        stagger: 0.5,
        halfW: 48 * u,
        seatH: 165 * u,
        headR: 17.5 * u,
        headCy: -29 * u,
        neckW: 8.2 * u,
        neckH: 15 * u,
        shW: 39 * u,
        bodyGrad: "url(#seatBodyBack)",
        rimGrad: "url(#seatRimBack)",
        rimWidth: 1.25 * u,
        opacity: 0.94,
        viewerAt: { [-1]: { tilt: 3 } } as Record<number, { tilt: number }>,
        hasArmrest: false,
      },
      {
        id: "near",
        topY: Math.round(seatBandH * 0.67),
        step: 164 * u,
        stagger: 0.5,
        halfW: 68 * u,
        seatH: 190 * u,
        headR: 23.5 * u,
        headCy: -39 * u,
        neckW: 10.5 * u,
        neckH: 20 * u,
        shW: 54 * u,
        bodyGrad: "url(#seatBodyFront)",
        rimGrad: "url(#seatRimFront)",
        rimWidth: 1.55 * u,
        opacity: 1,
        viewerAt: { [0]: { tilt: -2.5 } } as Record<number, { tilt: number }>,
        hasArmrest: true,
      },
    ];

    return (
      <svg
        viewBox={`0 0 ${W} ${seatBandH}`}
        preserveAspectRatio="none"
        aria-hidden="true"
        style={{ height: `${seatBandH}px` }}
        className="absolute bottom-0 inset-x-0 w-full pointer-events-none select-none z-20"
      >
        <defs>
          <linearGradient id="seatRimBack" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.03)" />
            <stop offset="50%" stopColor="rgba(167,243,208,0.22)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.03)" />
          </linearGradient>
          <linearGradient id="seatRimFront" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.04)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.26)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.04)" />
          </linearGradient>
          <linearGradient id="seatBodyFar" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#14151c" />
            <stop offset="100%" stopColor="#060609" />
          </linearGradient>
          <linearGradient id="seatBodyBack" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#111218" />
            <stop offset="100%" stopColor="#040407" />
          </linearGradient>
          <linearGradient id="seatBodyFront" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#0c0d12" />
            <stop offset="100%" stopColor="#020203" />
          </linearGradient>
          <linearGradient id="viewerSilhouetteGrad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#1b1e28" />
            <stop offset="55%" stopColor="#0d0e15" />
            <stop offset="100%" stopColor="#050508" />
          </linearGradient>
          <linearGradient id="viewerRimLight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
            <stop offset="50%" stopColor="rgba(167,243,208,0.44)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.08)" />
          </linearGradient>
        </defs>

        {rows.map((row) => {
          const halfCount = Math.ceil(centerX / row.step) + 1;
          const indices = Array.from({ length: halfCount * 2 + 1 }, (_, i) => i - halfCount);

          return (
            <g key={`portrait-row-${row.id}`} opacity={row.opacity}>
              {indices.map((k) => {
                const cx = centerX + (k + row.stagger) * row.step;
                const viewer = row.viewerAt[k];
                const topCurveY = row.halfW * 0.31;

                return (
                  <g key={`portrait-${row.id}-${k}`} transform={`translate(${cx}, ${row.topY})`}>
                    {viewer && (
                      <g transform={`rotate(${viewer.tilt}, 0, ${4 * u})`}>
                        <path
                          d={`M ${-row.shW} ${topCurveY * 1.1} C ${-row.shW + 3 * u} ${-row.headR * 0.28}, ${-row.shW * 0.42} ${-row.headR * 0.56}, 0 ${-row.headR * 0.56} C ${row.shW * 0.42} ${-row.headR * 0.56}, ${row.shW - 3 * u} ${-row.headR * 0.28}, ${row.shW} ${topCurveY * 1.1} Z`}
                          fill="url(#viewerSilhouetteGrad)"
                        />
                        <rect
                          x={-row.neckW / 2}
                          y={row.headCy + row.headR - 2 * u}
                          width={row.neckW}
                          height={row.neckH}
                          rx={row.neckW / 2}
                          fill="url(#viewerSilhouetteGrad)"
                        />
                        <circle
                          cx={0}
                          cy={row.headCy}
                          r={row.headR}
                          fill="url(#viewerSilhouetteGrad)"
                        />
                        <path
                          d={`M ${-row.headR * 0.88} ${row.headCy - row.headR * 0.24} A ${row.headR} ${row.headR} 0 0 1 ${row.headR * 0.88} ${row.headCy - row.headR * 0.24}`}
                          fill="none"
                          stroke="url(#viewerRimLight)"
                          strokeWidth={row.rimWidth * 1.15}
                          strokeLinecap="round"
                          style={{
                            opacity: isPlaying ? 0.96 : 0.48,
                            transition: "opacity 800ms ease",
                          }}
                        />
                        <path
                          d={`M ${-row.shW * 0.86} ${topCurveY * 0.32} C ${-row.shW * 0.62} ${-row.headR * 0.36}, ${-row.shW * 0.36} ${-row.headR * 0.54}, 0 ${-row.headR * 0.54} C ${row.shW * 0.36} ${-row.headR * 0.54}, ${row.shW * 0.62} ${-row.headR * 0.36}, ${row.shW * 0.86} ${topCurveY * 0.32}`}
                          fill="none"
                          stroke="url(#viewerRimLight)"
                          strokeWidth={row.rimWidth * 0.95}
                          strokeLinecap="round"
                          style={{
                            opacity: isPlaying ? 0.74 : 0.34,
                            transition: "opacity 800ms ease",
                          }}
                        />
                      </g>
                    )}

                    {/* Chair Backrest */}
                    <path
                      d={`M ${-row.halfW} ${topCurveY} C ${-row.halfW} ${topCurveY * 0.26}, ${-row.halfW * 0.62} 0, 0 0 C ${row.halfW * 0.62} 0, ${row.halfW} ${topCurveY * 0.26}, ${row.halfW} ${topCurveY} L ${row.halfW * 1.14} ${row.seatH} L ${-row.halfW * 1.14} ${row.seatH} Z`}
                      fill={row.bodyGrad}
                    />
                    <path
                      d={`M ${-row.halfW + 2.5 * u} ${topCurveY * 0.9} C ${-row.halfW + 2.5 * u} ${topCurveY * 0.3}, ${-row.halfW * 0.6} ${0.9 * u}, 0 ${0.9 * u} C ${row.halfW * 0.6} ${0.9 * u}, ${row.halfW - 2.5 * u} ${topCurveY * 0.3}, ${row.halfW - 2.5 * u} ${topCurveY * 0.9}`}
                      fill="none"
                      stroke={row.rimGrad}
                      strokeWidth={row.rimWidth}
                      style={{
                        opacity: isPlaying ? 0.92 : 0.4,
                        transition: "opacity 800ms ease",
                      }}
                    />
                    {row.hasArmrest && (
                      <rect
                        x={row.halfW + 7 * u}
                        y={topCurveY * 2.4}
                        width={16 * u}
                        height={34 * u}
                        rx={5 * u}
                        fill="#040406"
                      />
                    )}
                  </g>
                );
              })}
            </g>
          );
        })}
      </svg>
    );
  }

  // Keep seat band neatly below the mounted cinema screen with headroom for seated silhouettes (Desktop & Landscape)
  const gapBelowScreen = Math.max(0, wallB - (screenY + screenH));
  const rawSeatH = H - wallB + Math.min(28, gapBelowScreen * 0.5);
  const seatBandH = Math.round(
    Math.max(96, Math.min(isMobile ? 132 : 200, H * 0.23, rawSeatH))
  );

  // Proportional scale so round viewer heads stay true circles at every screen size
  const s = seatBandH / 165;
  const centerX = W / 2;

  const backStep = 112 * s;
  const frontStep = 166 * s;

  const backHalfCount = Math.ceil(centerX / backStep) + 1;
  const frontHalfCount = Math.ceil(centerX / frontStep) + 1;

  const backIndices = Array.from(
    { length: backHalfCount * 2 + 1 },
    (_, i) => i - backHalfCount
  );
  const frontIndices = Array.from(
    { length: frontHalfCount * 2 + 1 },
    (_, i) => i - frontHalfCount
  );

  // 3 naturally staggered viewer silhouettes (2 in back row, 1 in front row; 2 on narrow mobile)
  const backViewerOffsets: Record<number, { tilt: number; headScale: number }> = isMobile
    ? {
        [-1]: { tilt: 3, headScale: 1 },
      }
    : {
        [-2]: { tilt: 3.5, headScale: 1 },
        [3]: { tilt: -3, headScale: 0.96 },
      };

  const frontViewerOffsets: Record<number, { tilt: number; headScale: number }> = {
    [0]: { tilt: -2.2, headScale: 1.02 },
  };

  const backSeatTopY = seatBandH - 94 * s;
  const frontSeatTopY = seatBandH - 64 * s;

  return (
    <svg
      viewBox={`0 0 ${W} ${seatBandH}`}
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{ height: `${seatBandH}px` }}
      className="absolute bottom-0 inset-x-0 w-full pointer-events-none select-none z-20"
    >
      <defs>
        <linearGradient id="seatRimBack" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.03)" />
          <stop offset="50%" stopColor="rgba(167,243,208,0.18)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.03)" />
        </linearGradient>
        <linearGradient id="seatRimFront" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.04)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.22)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.04)" />
        </linearGradient>
        <linearGradient id="seatBodyBack" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#121218" />
          <stop offset="100%" stopColor="#050507" />
        </linearGradient>
        <linearGradient id="seatBodyFront" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#0d0d12" />
          <stop offset="100%" stopColor="#020203" />
        </linearGradient>
        <linearGradient id="viewerSilhouetteGrad" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#191b24" />
          <stop offset="55%" stopColor="#0c0d13" />
          <stop offset="100%" stopColor="#050508" />
        </linearGradient>
        <linearGradient id="viewerRimLight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.06)" />
          <stop offset="50%" stopColor="rgba(167,243,208,0.38)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.06)" />
        </linearGradient>
      </defs>

      {/* Back Row Seats + 2 Minimalist Seated Viewer Silhouettes */}
      <g opacity="0.92">
        {backIndices.map((k) => {
          const cx = centerX + k * backStep;
          const viewer = backViewerOffsets[k];
          const halfW = 38 * s;
          const headR = 12.5 * s * (viewer?.headScale ?? 1);
          const headCy = -21 * s;
          const neckW = 6.2 * s;
          const neckH = 12 * s;
          const shW = 29 * s;

          return (
            <g key={`back-seat-${k}`} transform={`translate(${cx}, ${backSeatTopY})`}>
              {/* Minimalist stickman-style head & shoulders seated behind backrest */}
              {viewer && (
                <g transform={`rotate(${viewer.tilt}, 0, ${4 * s})`}>
                  {/* Rounded shoulders */}
                  <path
                    d={`M ${-shW} ${14 * s} C ${-shW + 2 * s} ${-3 * s}, ${-12 * s} ${-7.5 * s}, 0 ${-7.5 * s} C ${12 * s} ${-7.5 * s}, ${shW - 2 * s} ${-3 * s}, ${shW} ${14 * s} Z`}
                    fill="url(#viewerSilhouetteGrad)"
                  />
                  {/* Slender neck */}
                  <rect
                    x={-neckW / 2}
                    y={headCy + headR - 2 * s}
                    width={neckW}
                    height={neckH}
                    rx={neckW / 2}
                    fill="url(#viewerSilhouetteGrad)"
                  />
                  {/* Clean round silhouette head */}
                  <circle cx={0} cy={headCy} r={headR} fill="url(#viewerSilhouetteGrad)" />
                  {/* Subtle screen-bounce rim-light on crown & shoulders */}
                  <path
                    d={`M ${-headR * 0.88} ${headCy - headR * 0.25} A ${headR} ${headR} 0 0 1 ${headR * 0.88} ${headCy - headR * 0.25}`}
                    fill="none"
                    stroke="url(#viewerRimLight)"
                    strokeWidth={1.25 * s}
                    strokeLinecap="round"
                    style={{
                      opacity: isPlaying ? 0.95 : 0.42,
                      transition: "opacity 800ms ease",
                    }}
                  />
                  <path
                    d={`M ${-shW * 0.88} ${4 * s} C ${-shW * 0.65} ${-4.5 * s}, ${-10 * s} ${-7.2 * s}, 0 ${-7.2 * s} C ${10 * s} ${-7.2 * s}, ${shW * 0.65} ${-4.5 * s}, ${shW * 0.88} ${4 * s}`}
                    fill="none"
                    stroke="url(#viewerRimLight)"
                    strokeWidth={1.05 * s}
                    strokeLinecap="round"
                    style={{
                      opacity: isPlaying ? 0.72 : 0.3,
                      transition: "opacity 800ms ease",
                    }}
                  />
                </g>
              )}

              {/* Backrest silhouette */}
              <path
                d={`M ${-halfW} ${12 * s} C ${-halfW} ${3 * s}, ${-24 * s} 0, 0 0 C ${24 * s} 0, ${halfW} ${3 * s}, ${halfW} ${12 * s} L ${halfW + 6 * s} ${115 * s} L ${-halfW - 6 * s} ${115 * s} Z`}
                fill="url(#seatBodyBack)"
              />
              <path
                d={`M ${-halfW + 2 * s} ${11 * s} C ${-halfW + 2 * s} ${3.5 * s}, ${-23 * s} ${0.8 * s}, 0 ${0.8 * s} C ${23 * s} ${0.8 * s}, ${halfW - 2 * s} ${3.5 * s}, ${halfW - 2 * s} ${11 * s}`}
                fill="none"
                stroke="url(#seatRimBack)"
                strokeWidth={1.15 * s}
                style={{
                  opacity: isPlaying ? 0.95 : 0.4,
                  transition: "opacity 800ms ease",
                }}
              />
            </g>
          );
        })}
      </g>

      {/* Front Row Seats (Staggered) + Foreground Seated Viewer Silhouette */}
      <g>
        {frontIndices.map((k) => {
          const cx = centerX + (k + 0.5) * frontStep;
          const viewer = frontViewerOffsets[k];
          const halfW = 58 * s;
          const headR = 17.5 * s * (viewer?.headScale ?? 1);
          const headCy = -29 * s;
          const neckW = 8.4 * s;
          const neckH = 16 * s;
          const shW = 42 * s;

          return (
            <g key={`front-seat-${k}`} transform={`translate(${cx}, ${frontSeatTopY})`}>
              {/* Foreground minimalist stickman-style head & shoulders */}
              {viewer && (
                <g transform={`rotate(${viewer.tilt}, 0, ${6 * s})`}>
                  {/* Rounded shoulders */}
                  <path
                    d={`M ${-shW} ${18 * s} C ${-shW + 3 * s} ${-4 * s}, ${-18 * s} ${-10 * s}, 0 ${-10 * s} C ${18 * s} ${-10 * s}, ${shW - 3 * s} ${-4 * s}, ${shW} ${18 * s} Z`}
                    fill="url(#viewerSilhouetteGrad)"
                  />
                  {/* Slender neck */}
                  <rect
                    x={-neckW / 2}
                    y={headCy + headR - 2.5 * s}
                    width={neckW}
                    height={neckH}
                    rx={neckW / 2}
                    fill="url(#viewerSilhouetteGrad)"
                  />
                  {/* Clean round silhouette head */}
                  <circle cx={0} cy={headCy} r={headR} fill="url(#viewerSilhouetteGrad)" />
                  {/* Subtle screen-bounce rim-light on crown & shoulders */}
                  <path
                    d={`M ${-headR * 0.88} ${headCy - headR * 0.22} A ${headR} ${headR} 0 0 1 ${headR * 0.88} ${headCy - headR * 0.22}`}
                    fill="none"
                    stroke="url(#viewerRimLight)"
                    strokeWidth={1.55 * s}
                    strokeLinecap="round"
                    style={{
                      opacity: isPlaying ? 0.95 : 0.45,
                      transition: "opacity 800ms ease",
                    }}
                  />
                  <path
                    d={`M ${-shW * 0.88} ${5 * s} C ${-shW * 0.64} ${-6 * s}, ${-15 * s} ${-9.6 * s}, 0 ${-9.6 * s} C ${15 * s} ${-9.6 * s}, ${shW * 0.64} ${-6 * s}, ${shW * 0.88} ${5 * s}`}
                    fill="none"
                    stroke="url(#viewerRimLight)"
                    strokeWidth={1.25 * s}
                    strokeLinecap="round"
                    style={{
                      opacity: isPlaying ? 0.72 : 0.32,
                      transition: "opacity 800ms ease",
                    }}
                  />
                </g>
              )}

              {/* Front backrest silhouette */}
              <path
                d={`M ${-halfW} ${18 * s} C ${-halfW} ${5 * s}, ${-36 * s} 0, 0 0 C ${36 * s} 0, ${halfW} ${5 * s}, ${halfW} ${18 * s} L ${halfW + 9 * s} ${88 * s} L ${-halfW - 9 * s} ${88 * s} Z`}
                fill="url(#seatBodyFront)"
              />
              <path
                d={`M ${-halfW + 14 * s} ${28 * s} C ${-22 * s} ${24 * s}, ${22 * s} ${24 * s}, ${halfW - 14 * s} ${28 * s}`}
                fill="none"
                stroke="rgba(255,255,255,0.035)"
                strokeWidth={0.95 * s}
              />
              <path
                d={`M ${-halfW + 3 * s} ${16 * s} C ${-halfW + 3 * s} ${5.5 * s}, ${-35 * s} ${0.9 * s}, 0 ${0.9 * s} C ${35 * s} ${0.9 * s}, ${halfW - 3 * s} ${5.5 * s}, ${halfW - 3 * s} ${16 * s}`}
                fill="none"
                stroke="url(#seatRimFront)"
                strokeWidth={1.35 * s}
                style={{
                  opacity: isPlaying ? 0.88 : 0.35,
                  transition: "opacity 800ms ease",
                }}
              />
              {/* Armrest between chairs */}
              <rect
                x={halfW + 12 * s}
                y={52 * s}
                width={18 * s}
                height={26 * s}
                rx={5 * s}
                fill="#040406"
              />
            </g>
          );
        })}
      </g>
    </svg>
  );
}

type PrerollPhase = "idle" | "ident" | "feature" | "blackout" | "done";

/**
 * Boutique Production House Ident Bumper (A24 / IMAX / Dolby style — 5.0s)
 * Shows a sleek landscape-rotation prompt on portrait mobile phones, and full Studio Ident on desktop/landscape.
 */
function StudioIdentPrerollOverlay({
  phase,
  runId,
  isId,
  isPortraitMobile,
  onSkip,
}: {
  phase: PrerollPhase;
  runId: number;
  isId: boolean;
  isPortraitMobile: boolean;
  onSkip: () => void;
}) {
  const isVisible = phase === "ident" || phase === "feature" || phase === "blackout";

  return (
    <div
      aria-hidden={!isVisible}
      className={`absolute inset-0 z-20 bg-[#030305] overflow-hidden select-none transition-opacity duration-300 ease-out ${
        isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Subtle Theatrical Ambient Light Field */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
          phase === "blackout" ? "opacity-0" : "opacity-100"
        }`}
      >
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${
            phase === "ident" || isPortraitMobile ? "opacity-100" : "opacity-40"
          } bg-[radial-gradient(ellipse_62%_44%_at_50%_50%,rgba(52,211,153,0.09)_0%,rgba(255,255,255,0.02)_42%,rgba(3,3,5,0)_78%)]`}
        />
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${
            phase === "feature" && !isPortraitMobile ? "opacity-100" : "opacity-0"
          } bg-[radial-gradient(ellipse_70%_48%_at_50%_50%,rgba(167,243,208,0.11)_0%,rgba(251,191,36,0.035)_45%,rgba(3,3,5,0)_80%)]`}
        />
      </div>

      {/* PORTRAIT MOBILE BUMPER: Rotate Phone Prompt (0.00s - 4.55s) */}
      {isPortraitMobile ? (
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center px-5 text-center transition-opacity duration-400 ${
            phase === "ident" || phase === "feature"
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-emerald-400/[0.08] border border-emerald-400/25 flex items-center justify-center mb-2.5 shadow-[0_0_24px_rgba(52,211,153,0.16)]">
              <Smartphone className="w-5 h-5 text-emerald-300 animate-cinema-rotate-phone" />
            </div>

            <span className="text-[8.5px] font-mono uppercase tracking-[0.26em] text-emerald-300/90 mb-1">
              {isId ? "UNTUK PENGALAMAN TERBAIK" : "FOR BETTER EXPERIENCE"}
            </span>

            <div className="text-xs font-semibold tracking-[0.16em] text-white uppercase">
              {isId ? "PUTAR HP ANDA KE LANDSCAPE" : "PLEASE ROTATE YOUR PHONE"}
            </div>

            <span className="mt-1.5 text-[9px] font-mono tracking-[0.14em] text-zinc-400 uppercase">
              ONE LAST CUT · 16:9 · 2K
            </span>
          </div>
        </div>
      ) : (
        <>
          {/* Horizontal Anamorphic Lens Flare Sweep (Phase 1 — Desktop & Landscape) */}
          {phase === "ident" && (
            <div
              key={`flare-${runId}`}
              aria-hidden="true"
              className="animate-ident-flare absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              {/* Wide atmospheric anamorphic streak */}
              <div className="w-[75%] h-[2px] bg-gradient-to-r from-transparent via-emerald-300/75 to-transparent blur-[2px]" />
              {/* Crisp razor-sharp optical core */}
              <div className="absolute w-[42%] h-[1px] bg-gradient-to-r from-transparent via-white/95 to-transparent" />
              {/* Soft bloom halo */}
              <div className="absolute w-[34%] h-12 rounded-full bg-emerald-400/15 blur-2xl" />
            </div>
          )}

          {/* Phase 1 (0.00s - 2.35s): Studio Ident — HASBY STUDIO PRESENTS */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center px-6 text-center transition-all duration-400 ${
              phase === "ident"
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            {phase === "ident" && (
              <div key={`ident-${runId}`} className="animate-ident-reveal flex flex-col items-center">
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.42em] text-zinc-400/90 mb-3 sm:mb-4">
                  {isId ? "PRESENTASI EKSKLUSIF" : "A PRIVATE SCREENING"}
                </span>

                <div className="text-lg sm:text-3xl md:text-[2.15rem] font-semibold tracking-[0.34em] text-white uppercase pl-[0.34em] drop-shadow-[0_0_28px_rgba(255,255,255,0.16)]">
                  HASBY STUDIO
                </div>

                <div className="animate-ident-line w-24 sm:w-36 h-px bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent my-3 sm:my-4" />

                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.46em] text-emerald-300/85 pl-[0.46em]">
                  PRESENTS
                </span>
              </div>
            )}
          </div>

          {/* Phase 2 (2.35s - 4.55s): Feature Presentation Technical Bumper */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center px-6 text-center transition-all duration-350 ${
              phase === "feature"
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            {phase === "feature" && (
              <div key={`feature-${runId}`} className="animate-ident-reveal flex flex-col items-center">
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.38em] text-zinc-400 mb-2.5 sm:mb-3.5 pl-[0.38em]">
                  FEATURE PRESENTATION
                </span>

                <div className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-[0.22em] text-white uppercase pl-[0.22em] drop-shadow-[0_0_32px_rgba(167,243,208,0.18)]">
                  ONE LAST CUT
                </div>

                {/* Minimal Dolby / IMAX Technical Spec Strip */}
                <div className="mt-4 sm:mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
                  <span className="px-2.5 py-0.5 rounded border border-white/15 bg-white/[0.04] text-[9px] sm:text-[10px] font-mono tracking-[0.2em] text-zinc-200">
                    2K MASTER
                  </span>
                  <span className="text-zinc-600 text-[10px]">·</span>
                  <span className="px-2.5 py-0.5 rounded border border-white/15 bg-white/[0.04] text-[9px] sm:text-[10px] font-mono tracking-[0.2em] text-zinc-300">
                    16:9
                  </span>
                  <span className="text-zinc-600 text-[10px]">·</span>
                  <span className="px-2.5 py-0.5 rounded border border-emerald-400/25 bg-emerald-400/[0.06] text-[9px] sm:text-[10px] font-mono tracking-[0.2em] text-emerald-300">
                    {isId ? "AUDIO STEREO" : "STEREO SOUND"}
                  </span>
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {/* Subtle Skip Button */}
      <button
        type="button"
        onClick={onSkip}
        className={`absolute bottom-3 sm:bottom-5 right-3 sm:right-6 z-30 inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.15] border border-white/15 text-[10px] font-mono tracking-wider text-zinc-300 hover:text-white backdrop-blur-md transition-all cursor-pointer ${
          phase === "blackout" ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <span>{isId ? "Lewati" : "Skip"}</span>
        <SkipForward className="w-3 h-3" />
      </button>

      {/* Smooth 5-Second Hairline Bumper Progress Bar */}
      <div
        className={`absolute bottom-0 inset-x-0 h-[1.5px] bg-white/[0.07] overflow-hidden pointer-events-none transition-opacity duration-200 ${
          phase === "blackout" ? "opacity-0" : "opacity-100"
        }`}
      >
        {isVisible && (
          <div
            key={`bar-${runId}`}
            className="h-full w-full bg-gradient-to-r from-emerald-400/60 via-emerald-300 to-white/90 animate-cinema-progress"
          />
        )}
      </div>
    </div>
  );
}

export interface HeroIntroCinemaHandle {
  startPreroll: () => void;
}

interface HeroIntroCinemaModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoRef: RefObject<HTMLVideoElement | null>;
  controllerRef?: RefObject<HeroIntroCinemaHandle | null>;
}

export function HeroIntroCinemaModal({
  isOpen,
  onClose,
  videoRef,
  controllerRef,
}: HeroIntroCinemaModalProps) {
  const { lang } = useLanguage();
  const isId = lang === "id";

  const stageRef = useRef<HTMLDivElement>(null);
  const hideControlsTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prerollTimersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const prerollActiveRef = useRef(false);
  const isOpenRef = useRef(false);

  const [stageSize, setStageSize] = useState({ width: 1600, height: 900 });
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(77);
  const [showControls, setShowControls] = useState(true);
  const [isNativeFullscreen, setIsNativeFullscreen] = useState(false);
  const [viewMode, setViewMode] = useState<"theater" | "clean">("theater");
  const [prerollPhase, setPrerollPhase] = useState<PrerollPhase>("idle");
  const [prerollRunId, setPrerollRunId] = useState(0);
  const [isLightsDimmed, setIsLightsDimmed] = useState(false);

  // Track exact viewport dimensions so SVG walls & mounted 16:9 screen share one unified geometry
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    const updateSize = () => {
      const width = el.clientWidth;
      const height = el.clientHeight;
      if (width > 0 && height > 0) {
        setStageSize({ width, height });
      }
    };

    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const clearHideTimer = useCallback(() => {
    if (hideControlsTimerRef.current) {
      clearTimeout(hideControlsTimerRef.current);
      hideControlsTimerRef.current = null;
    }
  }, []);

  const clearPrerollTimers = useCallback(() => {
    prerollTimersRef.current.forEach((timerId) => clearTimeout(timerId));
    prerollTimersRef.current = [];
  }, []);

  const scheduleHideControls = useCallback(() => {
    clearHideTimer();
    hideControlsTimerRef.current = setTimeout(() => {
      if (videoRef.current && !videoRef.current.paused && !prerollActiveRef.current) {
        setShowControls(false);
      }
    }, 2200);
  }, [clearHideTimer, videoRef]);

  const revealControls = useCallback(() => {
    setShowControls(true);
    scheduleHideControls();
  }, [scheduleHideControls]);

  const startMainFilm = useCallback(() => {
    clearPrerollTimers();
    prerollActiveRef.current = false;
    setPrerollPhase("done");
    setIsLightsDimmed(true);

    const video = videoRef.current;
    if (!video || !isOpenRef.current) return;

    video.currentTime = 0;
    video.volume = 1;
    video.muted = false;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        if (!isOpenRef.current) return;
        video.muted = true;
        setIsMuted(true);
        video.play().catch(() => {});
      });
    }
    scheduleHideControls();
  }, [clearPrerollTimers, scheduleHideControls, videoRef]);

  const startPreroll = useCallback(() => {
    clearHideTimer();
    clearPrerollTimers();
    isOpenRef.current = true;
    prerollActiveRef.current = true;

    setIsPlaying(false);
    setIsBuffering(false);
    setCurrentTime(0);
    setShowControls(true);
    setIsLightsDimmed(false);
    setPrerollPhase("ident");
    setPrerollRunId((prev) => prev + 1);

    // Silently unlock browser audio gesture & pre-buffer 2K R2 video during the 3s studio ident
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.muted = false;
      video.volume = 0;
      const unlockPromise = video.play();
      if (unlockPromise !== undefined) {
        unlockPromise
          .then(() => {
            if (prerollActiveRef.current || !isOpenRef.current) {
              video.pause();
              video.currentTime = 0;
            }
          })
          .catch(() => {
            if (prerollActiveRef.current && isOpenRef.current) {
              video.load();
            }
          });
      }
    }

    // Phase 2: Feature presentation + 2K technical spec bumper
    const tFeature = setTimeout(() => {
      if (!prerollActiveRef.current) return;
      setPrerollPhase("feature");
    }, 2350);

    // Keep house sconces warmly lit during the bumper, then smoothly dim (1.1s) right before the film begins
    const tDim = setTimeout(() => {
      if (!prerollActiveRef.current) return;
      setIsLightsDimmed(true);
    }, 3750);

    // Brief theatrical dip to black before frame 1 hits
    const tBlackout = setTimeout(() => {
      if (!prerollActiveRef.current) return;
      setPrerollPhase("blackout");
    }, 4550);

    const tStart = setTimeout(() => {
      if (!prerollActiveRef.current) return;
      startMainFilm();
    }, 5000);

    prerollTimersRef.current = [tFeature, tDim, tBlackout, tStart];
  }, [clearHideTimer, clearPrerollTimers, startMainFilm, videoRef]);

  useImperativeHandle(
    controllerRef,
    () => ({
      startPreroll,
    }),
    [startPreroll]
  );

  const handleClose = useCallback(() => {
    clearHideTimer();
    clearPrerollTimers();
    isOpenRef.current = false;
    prerollActiveRef.current = false;

    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.volume = 1;
    }
    setIsPlaying(false);
    setIsBuffering(false);
    setPrerollPhase("idle");
    setIsLightsDimmed(false);
    setShowControls(true);
    onClose();

    setTimeout(() => {
      if (videoRef.current && videoRef.current.paused && !isOpenRef.current) {
        videoRef.current.currentTime = 0;
        setCurrentTime(0);
      }
    }, 520);
  }, [clearHideTimer, clearPrerollTimers, onClose, videoRef]);

  const togglePlay = useCallback(() => {
    if (prerollActiveRef.current) {
      startMainFilm();
      return;
    }
    const video = videoRef.current;
    if (!video) return;
    video.volume = 1;
    if (video.paused) {
      video.play().catch(() => {});
      revealControls();
    } else {
      video.pause();
      clearHideTimer();
      setShowControls(true);
    }
  }, [clearHideTimer, revealControls, startMainFilm, videoRef]);

  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
    revealControls();
  }, [revealControls, videoRef]);

  const handleRestart = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.volume = 1;
    video.currentTime = 0;
    setCurrentTime(0);
    video.play().catch(() => {});
    revealControls();
  }, [revealControls, videoRef]);

  const toggleNativeFullscreen = useCallback(() => {
    if (!stageRef.current) return;
    if (!document.fullscreenElement) {
      stageRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
    revealControls();
  }, [revealControls]);

  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
      } else if (e.key === " ") {
        e.preventDefault();
        togglePlay();
      } else if (e.key === "m" || e.key === "M") {
        e.preventDefault();
        toggleMute();
      }
    };

    const handleFullscreenChange = () => {
      setIsNativeFullscreen(Boolean(document.fullscreenElement));
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [isOpen, handleClose, togglePlay, toggleMute]);

  useEffect(() => {
    return () => {
      clearHideTimer();
      clearPrerollTimers();
    };
  }, [clearHideTimer, clearPrerollTimers]);

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const nextTime = ratio * duration;
    video.currentTime = nextTime;
    setCurrentTime(nextTime);
    revealControls();
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return "00:00";
    const mins = Math.floor(secs / 60);
    const remainder = Math.floor(secs % 60);
    return `${mins.toString().padStart(2, "0")}:${remainder.toString().padStart(2, "0")}`;
  };

  const progressPercent = duration > 0 ? Math.min(100, (currentTime / duration) * 100) : 0;
  const isTheater = viewMode === "theater";
  const isPrerollActive =
    prerollPhase === "ident" || prerollPhase === "feature" || prerollPhase === "blackout";
  const roomLightsDimmed = isPlaying || (isPrerollActive && isLightsDimmed);
  const geo = computeRoomGeometry(stageSize.width, stageSize.height);
  const isPortraitMobile = geo.W < 640 && geo.H > geo.W;

  return (
    <div
      ref={stageRef}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
      aria-label="One Last Cut — Private Screening Room"
      onMouseMove={isOpen && !isPrerollActive ? revealControls : undefined}
      className={`fixed inset-0 m-0 w-screen h-[100dvh] z-[100] bg-[#030305] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isOpen
          ? "opacity-100 scale-100 pointer-events-auto"
          : "opacity-0 scale-[0.98] pointer-events-none"
      }`}
    >
      {/* LAYER 0: Architectural SVG Screening Room (Pixel-Locked to Mounted Screen) */}
      {isTheater && <ScreeningRoomBackdrop isPlaying={roomLightsDimmed} geo={geo} />}

      {/* LAYER 2: Wall-Mounted 16:9 Cinema Screen (Exact Pixel-Locked 16:9 Frame) */}
      <div
        style={
          isTheater
            ? {
                position: "absolute",
                left: `${geo.screenX}px`,
                top: `${geo.screenY}px`,
                width: `${geo.screenW}px`,
                height: `${geo.screenH}px`,
              }
            : undefined
        }
        className={`z-10 transition-all duration-500 ${
          isTheater
            ? "rounded-md sm:rounded-lg p-1 sm:p-1.5 bg-[#050507] border border-white/[0.12] shadow-[0_0_100px_rgba(167,243,208,0.08),0_26px_70px_rgba(0,0,0,0.95)]"
            : "absolute inset-0 w-full h-full bg-black flex items-center justify-center"
        }`}
      >
        {/* Ambient Screen Backlight Halo */}
        {isTheater && (
          <div
            aria-hidden="true"
            className={`absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-emerald-500/[0.08] via-sky-400/[0.05] to-amber-300/[0.07] blur-3xl pointer-events-none transition-opacity duration-1000 ${
              roomLightsDimmed ? "opacity-100" : "opacity-30"
            }`}
          />
        )}

        {/* Crisp 16:9 Video Canvas (Fills Exact 16:9 Bezel Edge-to-Edge) */}
        <div
          className={`relative w-full h-full overflow-hidden bg-black ${
            isTheater ? "rounded-[3px] sm:rounded-[5px]" : ""
          }`}
        >
          <video
            ref={videoRef}
            src={INTRO_VIDEO_SRC}
            poster={INTRO_POSTER_SRC}
            playsInline
            preload="none"
            onLoadStart={() => {
              if (isOpen && !prerollActiveRef.current) setIsBuffering(true);
            }}
            onWaiting={() => {
              if (!prerollActiveRef.current) setIsBuffering(true);
            }}
            onCanPlay={() => setIsBuffering(false)}
            onPlaying={() => {
              if (prerollActiveRef.current) return;
              setIsPlaying(true);
              setIsBuffering(false);
              setIsMuted(Boolean(videoRef.current?.muted));
              scheduleHideControls();
            }}
            onPlay={() => {
              if (prerollActiveRef.current) return;
              setIsPlaying(true);
              setIsMuted(Boolean(videoRef.current?.muted));
              scheduleHideControls();
            }}
            onPause={() => {
              if (prerollActiveRef.current) return;
              setIsPlaying(false);
              setIsBuffering(false);
              clearHideTimer();
              setShowControls(true);
            }}
            onLoadedMetadata={() => {
              if (videoRef.current && videoRef.current.duration) {
                setDuration(videoRef.current.duration);
              }
            }}
            onTimeUpdate={() => {
              if (videoRef.current && !prerollActiveRef.current) {
                setCurrentTime(videoRef.current.currentTime);
              }
            }}
            onEnded={handleClose}
            onClick={togglePlay}
            className={`w-full h-full ${
              isTheater ? "object-cover" : "object-contain"
            } ${showControls || !isPlaying ? "cursor-pointer" : "cursor-none"}`}
          />

          {/* 5-Second Boutique Studio Ident Bumper (or Rotate-Phone Prompt on Portrait Mobile) */}
          <StudioIdentPrerollOverlay
            phase={prerollPhase}
            runId={prerollRunId}
            isId={isId}
            isPortraitMobile={isPortraitMobile}
            onSkip={startMainFilm}
          />

          {/* Subtle Buffering Spinner Inside Screen */}
          {isOpen && !isPrerollActive && isBuffering && (
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black/70 border border-white/15 backdrop-blur-md flex items-center justify-center shadow-2xl">
                <Loader2 className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-400 animate-spin" />
              </div>
            </div>
          )}

          {/* Center Play Indicator When Paused Inside Screen */}
          {isOpen && !isPrerollActive && !isPlaying && !isBuffering && (
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isId ? "Lanjutkan video" : "Resume video"}
              className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/65 border border-white/25 backdrop-blur-md flex items-center justify-center text-white hover:scale-105 hover:border-emerald-400/60 transition-all shadow-2xl z-20 cursor-pointer"
            >
              <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white translate-x-0.5" />
            </button>
          )}
        </div>
      </div>

      {/* LAYER 3: Foreground Silhouette Theater Seats + Seated Viewers (Only in Theater View) */}
      {isTheater && <TheaterSeatsForeground isPlaying={roomLightsDimmed} geo={geo} />}

      {/* LAYER 4A: Top Screening Room HUD Bar (Auto-Hides While Playing) */}
      <div
        className={`absolute top-0 inset-x-0 px-4 sm:px-8 py-4 sm:py-5 bg-gradient-to-b from-black/85 via-black/40 to-transparent flex items-center justify-between gap-4 z-30 transition-opacity duration-300 ${
          isPrerollActive || showControls || !isPlaying
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center gap-3 min-w-0">
          <span
            className={`w-2 h-2 rounded-full shrink-0 transition-all duration-500 ${
              roomLightsDimmed
                ? "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]"
                : "bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.9)]"
            }`}
          />
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-200 truncate">
            <span className="font-semibold tracking-wider text-white">ONE LAST CUT</span>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <span className="text-zinc-400 hidden sm:inline">
              {isTheater
                ? roomLightsDimmed
                  ? isId
                    ? "SCREENING ROOM · LAMPU REDUP"
                    : "SCREENING ROOM · LIGHTS DIMMED"
                  : isId
                    ? "SCREENING ROOM · LAMPU MENYALA"
                    : "SCREENING ROOM · HOUSE LIGHTS"
                : isId
                  ? "MODE LAYAR PENUH"
                  : "PURE FULLSCREEN"}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => {
              setViewMode((prev) => (prev === "theater" ? "clean" : "theater"));
              revealControls();
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.08] hover:bg-white/[0.16] border border-white/15 text-[11px] font-mono text-zinc-200 backdrop-blur-md transition-all cursor-pointer"
            title={
              isTheater
                ? isId
                  ? "Beralih ke layar penuh tanpa bingkai bioskop"
                  : "Switch to clean borderless fullscreen"
                : isId
                  ? "Kembali ke ruang bioskop"
                  : "Return to screening room"
            }
          >
            {isTheater ? (
              <>
                <Monitor className="w-3.5 h-3.5 text-zinc-300" />
                <span className="hidden sm:inline">{isId ? "Layar Penuh" : "Clean View"}</span>
              </>
            ) : (
              <>
                <Armchair className="w-3.5 h-3.5 text-emerald-400" />
                <span className="hidden sm:inline">{isId ? "Mode Bioskop" : "Theater View"}</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleClose}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.1] hover:bg-white/[0.2] border border-white/15 text-xs font-mono text-white backdrop-blur-md transition-all cursor-pointer"
            aria-label={isId ? "Keluar dari cinema" : "Exit cinema"}
          >
            <span className="hidden sm:inline text-zinc-300">ESC</span>
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* LAYER 4B: Floating VIP Console Controls Bar (Hidden During Pre-Roll, Auto-Hides While Playing) */}
      <div
        className={`absolute bottom-4 sm:bottom-6 inset-x-4 sm:inset-x-8 z-30 flex justify-center transition-opacity duration-300 ${
          !isPrerollActive && (showControls || !isPlaying)
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-full max-w-4xl rounded-2xl bg-black/80 backdrop-blur-xl border border-white/[0.12] px-4 sm:px-5 py-3 shadow-[0_16px_50px_rgba(0,0,0,0.9)] space-y-2.5">
          <div
            onClick={handleSeek}
            className="w-full h-1.5 hover:h-2 bg-white/20 rounded-full overflow-hidden cursor-pointer transition-all"
          >
            <div
              className="h-full bg-emerald-400 transition-[width] duration-100"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="flex items-center justify-between gap-4 text-xs font-mono text-zinc-300">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={togglePlay}
                className="p-1.5 sm:p-2 rounded-full bg-white/[0.08] hover:bg-white/[0.18] text-white transition-colors cursor-pointer"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
              </button>

              <button
                type="button"
                onClick={handleRestart}
                className="p-1.5 sm:p-2 rounded-full hover:bg-white/[0.12] text-zinc-300 hover:text-white transition-colors cursor-pointer"
                aria-label={isId ? "Ulangi dari awal" : "Restart video"}
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={toggleMute}
                className="p-1.5 sm:p-2 rounded-full hover:bg-white/[0.12] text-zinc-300 hover:text-white transition-colors cursor-pointer"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4 text-amber-400" />
                ) : (
                  <Volume2 className="w-4 h-4 text-emerald-400" />
                )}
              </button>

              <span className="pl-2 text-[11px] text-zinc-400">
                <span className="text-white font-semibold">{formatTime(currentTime)}</span>
                <span className="mx-1 text-zinc-600">/</span>
                <span>{formatTime(duration)}</span>
              </span>
            </div>

            <button
              type="button"
              onClick={toggleNativeFullscreen}
              className="p-1.5 sm:p-2 rounded-full hover:bg-white/[0.12] text-zinc-300 hover:text-white transition-colors cursor-pointer"
              aria-label={isNativeFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            >
              {isNativeFullscreen ? (
                <Minimize className="w-4 h-4" />
              ) : (
                <Maximize className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
