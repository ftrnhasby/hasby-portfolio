import type { Metadata } from "next";
import { Suspense } from "react";
import { WorkView } from "@/components/WorkView";

export const metadata: Metadata = {
  title: {
    absolute: "Work & Ad Collections — Fitran Hasby",
  },
  description:
    "Creative video ad portfolio of Fitran Hasby, AI Direct Response Video Editor. Specializing in high-retention 9:16 vertical ads, hook variations, and AI-powered production workflows.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Work & Ad Collections — Fitran Hasby",
    description:
      "Creative video ad portfolio of Fitran Hasby, AI Direct Response Video Editor. Specializing in high-retention 9:16 vertical ads, hook variations, and AI-powered production workflows.",
    url: "/work",
    siteName: "Fitran Hasby Portfolio",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fitran Hasby — AI Direct Response Video Editor Work",
      },
    ],
  },
};

export default function WorkPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#070708]" />}>
      <WorkView />
    </Suspense>
  );
}
