"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, Sparkles, ArrowUpRight, Layers } from "lucide-react";
import { CollectionCard } from "@/components/CollectionCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";
import {
  getPublishedCollections,
  getActiveCategories,
} from "@/data/collections";

const resolveCategorySlug = (param: string | null): string => {
  if (!param) return "all";
  const lower = param.toLowerCase();
  if (lower === "ai-ads" || lower === "ai-video-ads" || lower === "ai") {
    return "ai-ads";
  }
  if (lower === "ugc-ads" || lower === "ugc") {
    return "ugc-ads";
  }
  if (
    lower === "product-and-review" ||
    lower === "product-review" ||
    lower === "product-ads" ||
    lower === "review-ads" ||
    lower === "product" ||
    lower === "review"
  ) {
    return "product-and-review";
  }
  return "all";
};

export function WorkView() {
  const { lang } = useLanguage();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    setSelectedCategory(resolveCategorySlug(categoryParam));
  }, [categoryParam]);

  const handleCategoryClick = (slug: string) => {
    setSelectedCategory(slug);
    if (typeof window !== "undefined") {
      const url = slug === "all" ? "/work" : `/work?category=${slug}`;
      window.history.replaceState(null, "", url);
    }
  };

  // Get all published collections
  const allCollections = useMemo(() => getPublishedCollections(), []);

  // Dynamically derive active categories
  const activeCategories = useMemo(
    () => getActiveCategories(allCollections),
    [allCollections]
  );

  // Filter collections by category
  const filteredCollections = useMemo(() => {
    if (selectedCategory === "all") return allCollections;
    return allCollections.filter((c) => c.categories.includes(selectedCategory));
  }, [allCollections, selectedCategory]);

  // Total video cuts across all collections
  const totalVideoCuts = useMemo(
    () => allCollections.reduce((acc, c) => acc + c.videos.length, 0),
    [allCollections]
  );

  return (
    <div className="space-y-12 sm:space-y-16 pb-24">
      {/* 1. Unified Header & Category Filter Section (Single Clean Section) */}
      <section className="pt-20 sm:pt-28 pb-4 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-64 bg-emerald-500/[0.02] blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8 relative z-10">
          {/* Breadcrumb / Back to Home */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              <span>{lang === "id" ? "Kembali ke Beranda" : "Back to Home"}</span>
            </Link>
          </div>

          {/* Page Headline & Positioning */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-emerald-400">
              <Sparkles className="w-3 h-3" />
              <span>{lang === "id" ? "KATALOG PORTOFOLIO" : "WORK / PORTFOLIO"}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
              {lang === "id"
                ? "Koleksi Portofolio Iklan Direct Response"
                : "Direct Response Video Ad Portfolio"}
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed pt-1">
              {lang === "id"
                ? "Kampanye iklan video format vertikal 9:16 untuk brand DTC & agensi, mencakup AI Ads, UGC Ads, serta Product and review. Setiap proyek dirancang dengan fokus retensi tinggi dan kecepatan iterasi sprint."
                : "Vertical 9:16 video ad campaigns for DTC brands and performance agencies, covering AI Ads, UGC Ads, and Product & Review ads. Built for high feed retention and fast iteration sprints."}
            </p>
          </div>

          {/* Category Filter Bar — Merged directly here without separate headings */}
          <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => handleCategoryClick("all")}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                  selectedCategory === "all"
                    ? "bg-white text-black font-semibold shadow-md"
                    : "bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
                }`}
              >
                {lang === "id" ? "Semua Koleksi" : "All Work"} ({allCollections.length})
              </button>

              {activeCategories.map((cat) => {
                const count = allCollections.filter((c) =>
                  c.categories.includes(cat.slug)
                ).length;
                return (
                  <button
                    key={cat.slug}
                    type="button"
                    onClick={() => handleCategoryClick(cat.slug)}
                    className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                      selectedCategory === cat.slug
                        ? "bg-white text-black font-semibold shadow-md"
                        : "bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
                    }`}
                  >
                    {cat.label[lang]} ({count})
                  </button>
                );
              })}
            </div>

            {/* Total Video Cuts Counter */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-zinc-400 self-start sm:self-auto shrink-0">
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              <span>
                {totalVideoCuts} {lang === "id" ? "Video Cuts" : "Video Cuts"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Collections Grid (Directly below unified header, 2 columns on desktop) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredCollections.map((collection, idx) => (
            <ScrollReveal key={collection.slug} delay={idx * 120} className="h-full">
              <CollectionCard collection={collection} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 3. Bottom CTA Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#111114] to-[#0a0a0c] border border-white/[0.08] text-center space-y-6">
          <div className="max-w-xl mx-auto space-y-3">
            <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              {lang === "id" ? "Membutuhkan Editor Video Iklan?" : "Looking for a Direct Response Editor?"}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
              {lang === "id"
                ? "Tersedia untuk posisi remote internasional, agensi performa, dan tim kreatif brand DTC."
                : "Available for international remote roles, performance marketing agencies, and DTC brand creative teams."}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-all shadow-md"
            >
              <span>{lang === "id" ? "Hubungi Saya" : "Get in Touch"}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/#workflow"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-xs font-medium hover:bg-white/[0.08] transition-all"
            >
              <span>{lang === "id" ? "Pelajari Alur Kerja 5 Tahap" : "Explore 5-Stage Process"}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
