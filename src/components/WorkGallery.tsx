"use client";

import { useState, useMemo } from "react";
import { Layers, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CollectionCard } from "@/components/CollectionCard";
import { useLanguage } from "@/context/LanguageContext";
import {
  getPublishedCollections,
  getActiveCategories,
} from "@/data/collections";

export function WorkGallery() {
  const { lang } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Get published collections from scalable data source
  const allCollections = useMemo(() => getPublishedCollections(), []);

  // Dynamically derive active categories (only categories with published collections)
  const activeCategories = useMemo(
    () => getActiveCategories(allCollections),
    [allCollections]
  );

  // Filter collections
  const filteredCollections = useMemo(() => {
    if (selectedCategory === "all") return allCollections;
    return allCollections.filter((c) => c.categories.includes(selectedCategory));
  }, [allCollections, selectedCategory]);

  // Total video count across all collections
  const totalVideoCuts = useMemo(
    () => allCollections.reduce((acc, c) => acc + c.videos.length, 0),
    [allCollections]
  );

  return (
    <section className="space-y-8 scroll-mt-24" id="work">
      {/* Gallery Header & Category Filter Controls */}
      <ScrollReveal>
        <div className="space-y-6 border-b border-white/[0.08] pb-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>
                  {lang === "id"
                    ? "Koleksi Iklan Video Kreatif"
                    : "Creative Video Ad Collections"}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                {lang === "id" ? "Karya Terpilih" : "Selected Work"}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-normal">
                {lang === "id"
                  ? `${allCollections.length} Koleksi Proyek (${totalVideoCuts} Variasi Video Nyata) dirancang dengan CapCut & Premiere Pro.`
                  : `${allCollections.length} Project Collections (${totalVideoCuts} Real Video Cuts) engineered with CapCut & Premiere Pro.`}
              </p>
            </div>

            {/* Total Count Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300 self-start sm:self-auto">
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              <span>
                {totalVideoCuts} {lang === "id" ? "Video Cuts" : "Video Cuts"}
              </span>
            </div>
          </div>

          {/* Dynamic Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <button
              onClick={() => setSelectedCategory("all")}
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
                  onClick={() => setSelectedCategory(cat.slug)}
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
        </div>
      </ScrollReveal>

      {/* Collections Grid (2 columns on desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {filteredCollections.map((collection, idx) => (
          <ScrollReveal key={collection.slug} delay={idx * 150} className="h-full">
            <CollectionCard collection={collection} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
