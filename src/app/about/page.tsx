import type { Metadata } from "next";
import { AboutView } from "@/components/AboutView";

export const metadata: Metadata = {
  title: {
    absolute: "About Fitran Hasby — AI & Direct Response Video Editor",
  },
  description:
    "Fitran Hasby is an AI-assisted Direct Response Video Editor creating performance-focused vertical video ads, creative variations, and motion-driven storytelling.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Fitran Hasby — AI & Direct Response Video Editor",
    description:
      "Fitran Hasby is an AI-assisted Direct Response Video Editor creating performance-focused vertical video ads, creative variations, and motion-driven storytelling.",
    url: "/about",
    siteName: "Fitran Hasby Portfolio",
    locale: "id_ID",
    type: "profile",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Fitran Hasby — AI & Direct Response Video Editor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Fitran Hasby — AI & Direct Response Video Editor",
    description:
      "Fitran Hasby is an AI-assisted Direct Response Video Editor creating performance-focused vertical video ads, creative variations, and motion-driven storytelling.",
    images: ["/og-image.png"],
  },
};

export default function AboutPage() {
  return <AboutView />;
}
