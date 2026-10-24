import type { Metadata } from "next";
import { AboutView } from "@/components/AboutView";

export const metadata: Metadata = {
  title: "About Hasby — AI & Direct Response Video Editor",
  description:
    "Hasby is an AI-assisted Direct Response Video Editor creating performance-focused vertical video ads, creative variations, and motion-driven storytelling.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Hasby — AI & Direct Response Video Editor",
    description:
      "Hasby is an AI-assisted Direct Response Video Editor creating performance-focused vertical video ads, creative variations, and motion-driven storytelling.",
    url: "/about",
    siteName: "Fathan Hasby Portfolio",
    locale: "id_ID",
    type: "profile",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Hasby — AI & Direct Response Video Editor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Hasby — AI & Direct Response Video Editor",
    description:
      "Hasby is an AI-assisted Direct Response Video Editor creating performance-focused vertical video ads, creative variations, and motion-driven storytelling.",
    images: ["/og-image.png"],
  },
};

export default function AboutPage() {
  return <AboutView />;
}
