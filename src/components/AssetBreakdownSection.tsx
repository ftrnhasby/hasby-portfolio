"use client";

import { useState } from "react";
import { Layers, ShieldCheck, Video, Cpu, Film, Palette, Image as ImageIcon, CheckCircle2, AlertTriangle, Info } from "lucide-react";
import { AssetBreakdownItem, AssetCategory, LicenseStatus } from "@/types/project";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

interface AssetBreakdownSectionProps {
  assets: AssetBreakdownItem[];
  projectTitle: string;
}

export function AssetBreakdownSection({ assets, projectTitle }: AssetBreakdownSectionProps) {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].projectDetail;
  const labels = t.assetLabels;

  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories: { key: string; label: string; icon: typeof Layers }[] = [
    { key: "all", label: labels.filterAll, icon: Layers },
    {
      key: "Publicly sourced / third-party footage",
      label: lang === "id" ? "Footage Publik / Pihak Ketiga" : "Public Sourced Footage",
      icon: Film,
    },
    {
      key: "Self-shot / original footage",
      label: lang === "id" ? "Rekaman Mandiri / Original" : "Self-Shot / Original",
      icon: Video,
    },
    {
      key: "Motion graphics and compositing",
      label: lang === "id" ? "Motion Graphic & Remotion" : "Motion Graphics & Code",
      icon: Palette,
    },
    {
      key: "AI-generated footage or audio",
      label: lang === "id" ? "Generative AI (Audio/Visual)" : "AI-Generated Media",
      icon: Cpu,
    },
    {
      key: "Product images or external assets",
      label: lang === "id" ? "Foto Produk / Press Kit" : "Product Assets",
      icon: ImageIcon,
    },
  ];

  const filteredAssets = selectedCategory === "all"
    ? assets
    : assets.filter((a) => a.category === selectedCategory);

  const getLicenseBadge = (status: LicenseStatus) => {
    switch (status) {
      case "Verified Commercial":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-950/50 text-emerald-300 border border-emerald-500/30">
            <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
            <span>{status}</span>
          </span>
        );
      case "Public Content (Spec Ad Use)":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-blue-950/50 text-blue-300 border border-blue-500/30">
            <ShieldCheck className="w-3 h-3 text-blue-400 shrink-0" />
            <span>{status}</span>
          </span>
        );
      case "Self-Created / Original":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-purple-950/50 text-purple-300 border border-purple-500/30">
            <Video className="w-3 h-3 text-purple-400 shrink-0" />
            <span>{status}</span>
          </span>
        );
      case "Needs Permission":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-amber-950/50 text-amber-300 border border-amber-500/30">
            <AlertTriangle className="w-3 h-3 text-amber-400 shrink-0" />
            <span>{status}</span>
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-zinc-800 text-zinc-400 border border-zinc-700">
            <span>{labels.notDocumented}</span>
          </span>
        );
    }
  };

  const getCategoryBadge = (cat: AssetCategory) => {
    switch (cat) {
      case "Publicly sourced / third-party footage":
        return <span className="text-[11px] font-mono text-zinc-400">Public B-roll</span>;
      case "Self-shot / original footage":
        return <span className="text-[11px] font-mono text-purple-400">Original Footage</span>;
      case "Motion graphics and compositing":
        return <span className="text-[11px] font-mono text-cyan-400">Motion Graphic (Remotion)</span>;
      case "AI-generated footage or audio":
        return <span className="text-[11px] font-mono text-emerald-400">ElevenLabs AI Voice</span>;
      case "Product images or external assets":
        return <span className="text-[11px] font-mono text-amber-400">Brand Press Kit</span>;
      default:
        return <span className="text-[11px] font-mono text-zinc-400">{cat}</span>;
    }
  };

  return (
    <section className="space-y-6" id="assets">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.06] pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400">
            <Layers className="w-3.5 h-3.5 text-zinc-300" />
            <span>05 / {t.assetBreakdownSectionTitle}</span>
          </div>
          <p className="text-xs text-zinc-400 mt-1">
            <span className="text-zinc-200 font-medium">{projectTitle}</span> — {t.assetBreakdownSectionSub}
          </p>
        </div>

        {/* Total Assets Count */}
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 self-start sm:self-auto">
          <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-zinc-300">
            {assets.length} {lang === "id" ? "Aset Terdokumentasi" : "Documented Assets"}
          </span>
        </div>
      </div>

      {/* Editorial Notice on License Protocols */}
      <div className="p-4 rounded-xl bg-[#0d0d10] border border-white/[0.06] flex items-start gap-3">
        <Info className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
        <p className="text-xs text-zinc-400 leading-relaxed font-normal">
          {lang === "id" ? (
            <>
              <strong className="text-zinc-200">Protokol Transparansi Lisensi:</strong> Proyek portofolio ini secara ketat membedakan antara materi yang memiliki lisensi komersial bebas royalti (seperti stock Pexels/ElevenLabs), materi rekaman mandiri, dan materi review/B-roll publik brand yang digunakan secara transformatif dalam format non-komersial <span className="text-zinc-300 font-mono">[Public Content (Spec Ad Use)]</span>. Tidak ada klaim izin yang dibuat tanpa dasar dokumentasi asli.
            </>
          ) : (
            <>
              <strong className="text-zinc-200">Licensing Transparency Protocol:</strong> This portfolio project strictly differentiates between royalty-free commercially licensed assets (Pexels / ElevenLabs), self-shot footage, and public brand review/B-roll used transformatively under non-commercial spec ad conventions <span className="text-zinc-300 font-mono">[Public Content (Spec Ad Use)]</span>. No commercial rights are claimed without documented proof.
            </>
          )}
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2">
        {categories.map((c) => {
          const count = c.key === "all" ? assets.length : assets.filter((a) => a.category === c.key).length;
          if (count === 0 && c.key !== "all") return null;

          const Icon = c.icon;
          const isSelected = selectedCategory === c.key;

          return (
            <button
              key={c.key}
              onClick={() => setSelectedCategory(c.key)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                isSelected
                  ? "bg-white text-black font-semibold shadow-sm"
                  : "bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.06] border border-white/[0.06]"
              }`}
            >
              <Icon className="w-3 h-3" />
              <span>{c.label}</span>
              <span className={`text-[10px] ml-1 px-1.5 py-0.2 rounded-full ${isSelected ? "bg-black/10 text-black" : "bg-white/10 text-zinc-300"}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Desktop / Tablet Table View */}
      <div className="hidden md:block rounded-2xl bg-[#0a0a0c] border border-white/[0.08] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-white/[0.08] bg-white/[0.02] text-[11px] font-mono uppercase tracking-wider text-zinc-400">
              <tr>
                <th className="py-3.5 px-5 font-medium">{labels.assetName}</th>
                <th className="py-3.5 px-4 font-medium">{labels.category}</th>
                <th className="py-3.5 px-4 font-medium">{labels.sourceOrTool}</th>
                <th className="py-3.5 px-4 font-medium">{labels.myContribution}</th>
                <th className="py-3.5 px-5 font-medium">{labels.licenseStatus}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06]">
              {filteredAssets.map((asset) => (
                <tr key={asset.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-5 align-top">
                    <div className="font-medium text-zinc-200">{asset.name[lang]}</div>
                    {asset.notes && (
                      <div className="text-[11px] text-zinc-500 mt-1 leading-relaxed">
                        {asset.notes[lang]}
                      </div>
                    )}
                  </td>
                  <td className="py-4 px-4 align-top whitespace-nowrap">
                    {getCategoryBadge(asset.category)}
                  </td>
                  <td className="py-4 px-4 align-top font-mono text-[11px] text-zinc-300 whitespace-nowrap">
                    {asset.sourceOrTool || labels.notDocumented}
                  </td>
                  <td className="py-4 px-4 align-top text-zinc-300 leading-relaxed">
                    {asset.myContribution[lang]}
                  </td>
                  <td className="py-4 px-5 align-top whitespace-nowrap">
                    {getLicenseBadge(asset.licenseStatus)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Card List View */}
      <div className="md:hidden space-y-3">
        {filteredAssets.map((asset) => (
          <div key={asset.id} className="p-4 rounded-xl bg-[#0a0a0c] border border-white/[0.08] space-y-3">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h4 className="text-xs font-semibold text-white">{asset.name[lang]}</h4>
                <div className="mt-1">{getCategoryBadge(asset.category)}</div>
              </div>
              <div>{getLicenseBadge(asset.licenseStatus)}</div>
            </div>

            <div className="pt-2 border-t border-white/[0.06] space-y-2 text-xs">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">
                  {labels.sourceOrTool}:
                </span>
                <span className="text-zinc-300 font-mono text-[11px]">
                  {asset.sourceOrTool || labels.notDocumented}
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">
                  {labels.myContribution}:
                </span>
                <p className="text-zinc-300 leading-relaxed mt-0.5">
                  {asset.myContribution[lang]}
                </p>
              </div>

              {asset.notes && (
                <div className="pt-1 text-[11px] text-zinc-400 italic">
                  {asset.notes[lang]}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
