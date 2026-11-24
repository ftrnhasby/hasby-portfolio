"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Film,
  ArrowUpRight,
  ClipboardList,
  Scissors,
  Sparkles,
  MessageSquare,
  Send,
  Play,
  Pause,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

interface WorkflowStep {
  step: string;
  title: { id: string; en: string };
  desc: { id: string; en: string };
  icon: typeof ClipboardList;
}

const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: "01",
    title: {
      id: "Brief",
      en: "Brief",
    },
    desc: {
      id: "Kita menyelaraskan tujuan kampanye, target audiens, tone brand, dan referensi visual sebelum masuk ke timeline.",
      en: "We align on campaign goals, target audience, brand tone, and visual references before opening the timeline.",
    },
    icon: ClipboardList,
  },
  {
    step: "02",
    title: {
      id: "Select",
      en: "Select",
    },
    desc: {
      id: "Saya menyaring footage dan aset visual, memilih momen hook paling kuat, lalu menyusun kerangka cerita sebelum menyentuh efek.",
      en: "I comb through footage and assets, pull the strongest hook moments, and build the story spine before touching effects.",
    },
    icon: Film,
  },
  {
    step: "03",
    title: {
      id: "Edit",
      en: "Edit",
    },
    desc: {
      id: "Saya memotong cerita mengikuti ritme, dengan tempo ketat dan transisi bersih agar penonton bertahan sejak detik pertama.",
      en: "I cut the story to rhythm with tight pacing and clean transitions that hold attention from the opening second.",
    },
    icon: Scissors,
  },
  {
    step: "04",
    title: {
      id: "Polish",
      en: "Polish",
    },
    desc: {
      id: "Color grading, sound design berlapis, motion graphics, dan subtitle sound-off menyatukan rasa sinematik dan kejelasan pesan.",
      en: "Color grading, layered sound design, motion graphics, and sound-off captions tighten the mood and keep the message clear.",
    },
    icon: Sparkles,
  },
  {
    step: "05",
    title: {
      id: "Review",
      en: "Review",
    },
    desc: {
      id: "Anda meninjau lewat catatan timecode yang jelas dalam putaran revisi terstruktur, sehingga perbaikan berjalan cepat dan tepat sasaran.",
      en: "You review with timestamped notes in focused rounds so every revision moves fast and lands on target.",
    },
    icon: MessageSquare,
  },
  {
    step: "06",
    title: {
      id: "Deliver",
      en: "Deliver",
    },
    desc: {
      id: "File master diekspor sesuai spesifikasi platform pilihan Anda beserta variasi hook yang disepakati, dinamai rapi, dan terkirim tepat waktu.",
      en: "Final masters exported to your platform specs alongside agreed hook variations, cleanly named, organized, and delivered on time.",
    },
    icon: Send,
  },
];

export function InteractiveProductionWorkflow() {
  const { lang } = useLanguage();
  const isId = lang === "id";

  const [activeStep, setActiveStep] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Auto-progress down the steps smoothly (4 seconds per step)
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % WORKFLOW_STEPS.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <section className="space-y-10 sm:space-y-12 scroll-mt-24" id="workflow">
      {/* ============================================================ */}
      {/* SECTION HEADER: Matches EXACTLY media_1795002183921_30b8242e */}
      {/* ============================================================ */}
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/[0.08] border border-emerald-500/20 text-xs font-mono uppercase tracking-[0.18em] text-emerald-400">
              <Film className="w-3.5 h-3.5" />
              <span>
                {isId ? "PRODUCTION WORKFLOW // 6-STAGE PIPELINE" : "PRODUCTION WORKFLOW // 6-STAGE PIPELINE"}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.08]">
              {isId ? "Dari Brief hingga " : "From Brief to "}
              <span className="text-zinc-500 font-normal">
                {isId ? "Delivery dalam 6 Tahap." : "Delivery in Six Steps."}
              </span>
            </h2>
          </div>

          <div className="max-w-md space-y-3 flex flex-col md:items-end">
            <p className="text-xs sm:text-sm text-zinc-400 md:text-right font-normal leading-relaxed">
              {isId
                ? "Alur kerja terstruktur yang jelas, sehingga Anda selalu tahu apa yang terjadi berikutnya: dari brief pertama hingga file siap tayang."
                : "A clear, structured process so you always know what happens next: from the first call to files ready to publish."}
            </p>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-xs font-mono text-white transition-all cursor-pointer shadow-sm"
            >
              <span>{isId ? "Mulai Proyek" : "Start a Project"}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </ScrollReveal>

      {/* ============================================================ */}
      {/* VERTICAL TIMELINE SPINE / ALUR VERTIKAL                      */}
      {/* ============================================================ */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative max-w-4xl mx-auto space-y-4 sm:space-y-6 py-2"
      >
        {/* Subtle Status Bar (Auto-Pulse indicator) */}
        <div className="flex items-center justify-between pb-3 px-2 text-xs font-mono text-zinc-400 border-b border-white/[0.04]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <span className="text-zinc-300 font-semibold tracking-wider">
              {isId ? "PIPELINE PRODUKSI END-TO-END" : "END-TO-END PRODUCTION PIPELINE"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {!isHovered ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400">
                <Play className="w-2.5 h-2.5 fill-current animate-pulse" />
                <span>{isId ? "ALUR OTOMATIS (HOVER UNTUK JEDA)" : "FLOW ACTIVE (HOVER TO PAUSE)"}</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-mono text-amber-300">
                <Pause className="w-2.5 h-2.5 fill-current" />
                <span>{isId ? "DIJEDA (MODE TELUSUR)" : "PAUSED (EXPLORING)"}</span>
              </span>
            )}
          </div>
        </div>

        {/* The Clean Segmented Vertical Pipeline Flow */}
        <div className="space-y-0">
          {WORKFLOW_STEPS.map((step, idx) => {
            const isActive = idx === activeStep;
            const isCompleted = idx < activeStep;
            const StepIcon = step.icon;
            const isLast = idx === WORKFLOW_STEPS.length - 1;

            return (
              <div
                key={step.step}
                onClick={() => setActiveStep(idx)}
                onMouseEnter={() => {
                  setIsHovered(true);
                  setActiveStep(idx);
                }}
                className="flex items-stretch gap-4 sm:gap-6 cursor-pointer group"
              >
                {/* Left Column: Node Icon + Dedicated Connector Line Below */}
                <div className="flex flex-col items-center shrink-0 w-12 sm:w-14">
                  {/* Node Box (Solid Background: Nothing cuts through the icon!) */}
                  <div
                    className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center border transition-all duration-300 z-10 shrink-0 ${
                      isActive
                        ? "bg-[#0c1410] border-emerald-400 text-emerald-300 shadow-[0_0_24px_rgba(52,211,153,0.35)] ring-1 ring-emerald-400/40 scale-105"
                        : isCompleted
                        ? "bg-[#09100d] border-emerald-500/30 text-emerald-400/80"
                        : "bg-[#09090b] border-white/[0.08] text-zinc-500 group-hover:border-white/20 group-hover:text-zinc-300"
                    }`}
                  >
                    <StepIcon className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110" />

                    {/* Small completed badge */}
                    {isCompleted && !isActive && (
                      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border border-black flex items-center justify-center text-[8px] text-black font-bold">
                        ✓
                      </span>
                    )}
                  </div>

                  {/* Connector Line strictly BETWEEN this node and the next node */}
                  {!isLast && (
                    <div className="w-[2px] flex-1 my-2 bg-white/[0.08] relative overflow-hidden min-h-[32px] sm:min-h-[40px]">
                      {/* Completed / Active filled segment */}
                      <div
                        className={`absolute inset-x-0 top-0 w-full transition-all duration-500 ${
                          isCompleted
                            ? "h-full bg-emerald-500/30"
                            : isActive
                            ? "h-full bg-gradient-to-b from-emerald-400/60 to-emerald-500/20"
                            : "h-0 bg-transparent"
                        }`}
                      />

                      {/* Flowing Laser Signal Beam (travels DOWN from active node to next) */}
                      {isActive && (
                        <div className="absolute inset-x-0 w-full h-10 bg-gradient-to-b from-transparent via-emerald-300 to-transparent animate-pipeline-flow shadow-[0_0_10px_rgba(52,211,153,1)]" />
                      )}
                    </div>
                  )}
                </div>

                {/* Right Column: Step Card Content */}
                <div className={`flex-1 ${!isLast ? "pb-4 sm:pb-6" : ""}`}>
                  <div
                    className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 space-y-2.5 ${
                      isActive
                        ? "bg-[#0c0c0f] border-emerald-500/40 shadow-[0_12px_36px_rgba(0,0,0,0.6)] ring-1 ring-emerald-500/20 translate-x-1"
                        : "bg-[#08080a] border-white/[0.06] hover:border-white/15 hover:bg-[#0b0b0e] opacity-75 hover:opacity-100"
                    }`}
                  >
                    {/* Header Row: Title + STEP Tag */}
                    <div className="flex items-center justify-between gap-2">
                      <h3
                        className={`text-base sm:text-lg font-bold tracking-tight transition-colors ${
                          isActive ? "text-white" : "text-zinc-200 group-hover:text-white"
                        }`}
                      >
                        {step.title[lang]}
                      </h3>

                      <span
                        className={`text-[11px] font-mono uppercase tracking-wider font-semibold ${
                          isActive ? "text-emerald-400" : "text-zinc-500 group-hover:text-zinc-400"
                        }`}
                      >
                        STEP {step.step}
                      </span>
                    </div>

                    {/* Step Description */}
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                      {step.desc[lang]}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scoped CSS Animation for smooth downward pipeline flow */}
        <style jsx>{`
          @keyframes pipelineFlow {
            0% {
              top: -40px;
              opacity: 0;
            }
            30% {
              opacity: 1;
            }
            80% {
              opacity: 1;
            }
            100% {
              top: 100%;
              opacity: 0;
            }
          }
          .animate-pipeline-flow {
            animation: pipelineFlow 1.6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          }
        `}</style>
      </div>
    </section>
  );
}
