"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Film, BookOpen, Layers } from "lucide-react";
import { CreativeCollection } from "@/types/collection";
import { CollectionVideoItem } from "@/components/CollectionVideoItem";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

interface CollectionDetailViewProps {
  collection: CreativeCollection;
}

export function CollectionDetailView({ collection }: CollectionDetailViewProps) {
  const { lang } = useLanguage();

  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      {/* 1. Header & Breadcrumb */}
      <section className="pt-20 sm:pt-28 pb-10 border-b border-white/[0.08] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-64 bg-emerald-500/[0.02] blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8 relative z-10">
          {/* Back Link */}
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>
              {lang === "id" ? "Kembali ke Karya Terpilih" : "Back to Selected Work"}
            </span>
          </Link>

          {/* Title & Metadata */}
          <div className="space-y-5 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase bg-amber-500/10 text-amber-300 border border-amber-500/20">
                {collection.projectType}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase bg-white/[0.04] text-zinc-300 border border-white/[0.08]">
                {collection.categories.map((c) => c.replace("-", " ")).join(", ")}
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                <Film className="w-3 h-3" />
                <span>
                  {collection.videos.length} {lang === "id" ? "Video Cuts" : "Video Cuts"}
                </span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
              {collection.title}
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
              {collection.subtitle[lang]}
            </p>

            <p className="text-sm text-zinc-400 leading-relaxed">
              {collection.description[lang]}
            </p>

            {/* Software and Role Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="text-zinc-500">{lang === "id" ? "Peran:" : "Role:"}</span>
                <span className="text-zinc-200">{collection.role[lang]}</span>
              </div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-2">
                <span className="text-zinc-500">{lang === "id" ? "Software:" : "Tools:"}</span>
                <div className="flex items-center gap-1.5">
                  {collection.softwareUsed.map((sw, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-zinc-300"
                    >
                      {sw}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Deep-dive Case Study CTA banner */}
          {collection.caseStudyHref && (
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-950/20 via-[#0e0e12] to-[#0c0c0e] border border-emerald-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-medium">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>
                    {lang === "id"
                      ? "Studi Kasus Riset & Naskah Lengkap Tersedia"
                      : "Full Research & Creative Brief Available"}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400">
                  {lang === "id"
                    ? "Pelajari riset friksi audiens, matriks angle iklan, naskah kata demi kata, dan evaluasi performa."
                    : "Explore the audience friction research, angle matrix, word-for-word scripts, and creative evaluation."}
                </p>
              </div>

              <Link
                href={collection.caseStudyHref}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-black font-semibold text-xs hover:bg-emerald-400 transition-all shadow-md shrink-0 cursor-pointer"
              >
                <span>{lang === "id" ? "Baca Studi Kasus" : "Read Case Study"}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* 2. Video Cuts Showcase */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-400" />
            <h2 className="text-sm font-mono uppercase tracking-wider text-white">
              {lang === "id" ? "Daftar Variasi Video Iklan" : "Creative Video Cuts"} (
              {collection.videos.length})
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-400">
            {lang === "id" ? "Format 9:16 Feed Native" : "9:16 Feed Native Format"}
          </span>
        </div>

        {/* List of Video Items */}
        <div className="space-y-8">
          {collection.videos.map((video, idx) => (
            <ScrollReveal key={video.id} delay={idx * 100}>
              <CollectionVideoItem
                video={video}
                index={idx}
                caseStudyHref={collection.caseStudyHref}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 3. Bottom Back Navigation */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 border-t border-white/[0.08] flex items-center justify-between">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>
            {lang === "id" ? "Kembali ke Semua Koleksi" : "Back to All Collections"}
          </span>
        </Link>

        {collection.caseStudyHref && (
          <Link
            href={collection.caseStudyHref}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <span>{lang === "id" ? "Buka Studi Kasus Lengkap" : "Open Full Case Study"}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        )}
      </section>
    </div>
  );
}
