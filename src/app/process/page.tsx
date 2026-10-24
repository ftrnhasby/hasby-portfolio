import type { Metadata } from "next";
import { ProcessView } from "@/components/ProcessView";

export const metadata: Metadata = {
  title: {
    absolute: "Production Process — Fitran Hasby",
  },
  description:
    "End-to-end programmatic direct-response video engineering methodology: from creative brief and neural voiceover to Remotion React composition and render export.",
  alternates: {
    canonical: "/process",
  },
  openGraph: {
    title: "Production Process — Fitran Hasby",
    description:
      "End-to-end programmatic direct-response video engineering methodology: from creative brief and neural voiceover to Remotion React composition.",
    url: "/process",
    siteName: "Fitran Hasby Portfolio",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fitran Hasby — Creative Technologist & Video Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Production Process — Fitran Hasby",
    description:
      "End-to-end programmatic direct-response video engineering methodology: from creative brief and neural voiceover to Remotion React composition.",
    images: ["/og-image.png"],
  },
};

export default function ProcessPage() {
  return <ProcessView />;
}
