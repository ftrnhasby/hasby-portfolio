"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Layers, Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { ProductionProofItem } from "@/types/project";
import { useLanguage } from "@/context/LanguageContext";

interface ProductionProofStripProps {
  items: ProductionProofItem[];
  sectionNumber?: string;
}

export function ProductionProofStrip({
  items,
  sectionNumber = "02",
}: ProductionProofStripProps) {
  const { lang } = useLanguage();
  const isId = lang === "id";

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowRight" && items.length > 1) {
        setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % items.length));
      } else if (e.key === "ArrowLeft" && items.length > 1) {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev - 1 + items.length) % items.length
        );
      }
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, items.length]);

  if (!items || items.length === 0) return null;

  const activeItem = lightboxIndex !== null ? items[lightboxIndex] : null;
  const gridColsClass =
    items.length === 1
      ? "grid-cols-1 max-w-2xl"
      : items.length === 2
        ? "grid-cols-1 sm:grid-cols-2"
        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="space-y-5" id="behind-the-edit">
      {/* Compact Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/[0.06] pb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400">
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            <span>
              {sectionNumber} / {isId ? "Di Balik Proses Editing" : "Behind the Edit"}
            </span>
          </div>
          <p className="text-xs text-zinc-400">
            {isId
              ? "Cuplikan ruang kerja asli (AI scene generation & multi-track timeline). Klik gambar untuk memperbesar."
              : "Actual workspace captures (AI scene generation & multi-track timeline). Click any capture to zoom."}
          </p>
        </div>
      </div>

      {/* Horizontal 16:9 Thumbnail Strip */}
      <div className={`grid ${gridColsClass} gap-4`}>
        {items.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setLightboxIndex(idx)}
            className="group text-left rounded-2xl bg-[#0a0a0c] border border-white/[0.08] hover:border-emerald-400/40 overflow-hidden transition-all duration-300 shadow-lg hover:shadow-[0_12px_36px_rgba(52,211,153,0.12)] cursor-pointer flex flex-col"
          >
            {/* 16:9 Capture Preview */}
            <div className="relative w-full aspect-[16/9] bg-black overflow-hidden border-b border-white/[0.06]">
              <Image
                src={item.imageSrc}
                alt={item.title[lang]}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />

              {/* Subtle Vignette + Badges */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40 pointer-events-none" />

              <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2 pointer-events-none">
                <span className="px-2.5 py-0.5 rounded-md bg-black/75 backdrop-blur-md border border-white/15 text-[10px] font-mono text-zinc-200">
                  {item.toolBadge}
                </span>
                {item.cutLabel && (
                  <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-[10px] font-mono text-emerald-300">
                    {item.cutLabel}
                  </span>
                )}
              </div>

              {/* Hover Zoom Affordance */}
              <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/15 text-[10px] font-mono text-zinc-200 inline-flex items-center gap-1.5 opacity-80 group-hover:opacity-100 group-hover:border-emerald-400/40 group-hover:text-emerald-300 transition-all">
                <Maximize2 className="w-3 h-3" />
                <span>{isId ? "Perbesar" : "Inspect"}</span>
              </div>
            </div>

            {/* Compact Caption Footer */}
            <div className="p-4 space-y-1">
              <h3 className="text-xs sm:text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                {item.title[lang]}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                {item.caption[lang]}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeItem && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title[lang]}
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl rounded-2xl bg-[#0c0c0e] border border-white/[0.12] overflow-hidden shadow-2xl"
          >
            {/* Top Bar */}
            <div className="px-4 sm:px-6 py-3.5 border-b border-white/[0.08] flex items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2 min-w-0">
                <span className="px-2.5 py-0.5 rounded-md bg-white/[0.06] border border-white/[0.1] text-[11px] font-mono text-zinc-200 shrink-0">
                  {activeItem.toolBadge}
                </span>
                {activeItem.cutLabel && (
                  <span className="px-2 py-0.5 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-[11px] font-mono text-emerald-300 shrink-0">
                    {activeItem.cutLabel}
                  </span>
                )}
                <span className="text-xs sm:text-sm font-semibold text-white truncate">
                  {activeItem.title[lang]}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                className="p-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-zinc-300 hover:text-white transition-colors cursor-pointer shrink-0"
                aria-label={isId ? "Tutup pratinjau" : "Close preview"}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Full Resolution Image Area */}
            <div className="relative w-full aspect-[16/9] max-h-[72vh] bg-black">
              <Image
                src={activeItem.imageSrc}
                alt={activeItem.title[lang]}
                fill
                sizes="(max-width: 1200px) 100vw, 1024px"
                className="object-contain"
                priority
              />

              {items.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxIndex((lightboxIndex - 1 + items.length) % items.length)
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/75 border border-white/15 hover:border-emerald-400/50 text-white flex items-center justify-center transition-all cursor-pointer"
                    aria-label={isId ? "Gambar sebelumnya" : "Previous capture"}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setLightboxIndex((lightboxIndex + 1) % items.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/75 border border-white/15 hover:border-emerald-400/50 text-white flex items-center justify-center transition-all cursor-pointer"
                    aria-label={isId ? "Gambar berikutnya" : "Next capture"}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>

            {/* Bottom Caption Bar */}
            <div className="px-4 sm:px-6 py-3.5 border-t border-white/[0.08] flex items-center justify-between gap-4 bg-[#09090b]">
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {activeItem.caption[lang]}
              </p>
              {items.length > 1 && (
                <span className="text-[11px] font-mono text-zinc-500 shrink-0">
                  {lightboxIndex + 1} / {items.length}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
