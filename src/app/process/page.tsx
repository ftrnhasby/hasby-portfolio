import type { Metadata } from "next";
import { ProcessView } from "@/components/ProcessView";

export const metadata: Metadata = {
  title: "Production Process — Fathan Hasby",
  description:
    "End-to-end programmatic direct-response video engineering methodology: from creative brief and neural voiceover to Remotion React composition and render export.",
  alternates: {
    canonical: "/process",
  },
  openGraph: {
    title: "Production Process — Fathan Hasby",
    description:
      "End-to-end programmatic direct-response video engineering methodology: from creative brief and neural voiceover to Remotion React composition.",
    url: "/process",
    siteName: "Fathan Hasby Portfolio",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fathan Hasby — Creative Technologist & Video Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Production Process — Fathan Hasby",
    description:
      "End-to-end programmatic direct-response video engineering methodology: from creative brief and neural voiceover to Remotion React composition.",
    images: ["/og-image.png"],
  },
};

export default function ProcessPage() {
  return <ProcessView />;
}
