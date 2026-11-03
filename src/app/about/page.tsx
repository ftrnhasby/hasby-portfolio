import type { Metadata } from "next";
import { AboutView } from "@/components/AboutView";

export const metadata: Metadata = {
  title: {
    absolute: "About Fitran Hasby — AI Direct Response Creative Specialist",
  },
  description:
    "Fitran Hasby is an AI Direct Response Creative Specialist turning customer research into high-retention video ads and creative variations for TikTok and Instagram Reels.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Fitran Hasby — AI Direct Response Creative Specialist",
    description:
      "Fitran Hasby is an AI Direct Response Creative Specialist turning customer research into high-retention video ads and creative variations for TikTok and Instagram Reels.",
    url: "/about",
    siteName: "Fitran Hasby Portfolio",
    locale: "id_ID",
    type: "profile",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Fitran Hasby — AI Direct Response Creative Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Fitran Hasby — AI Direct Response Creative Specialist",
    description:
      "Fitran Hasby is an AI Direct Response Creative Specialist turning customer research into high-retention video ads and creative variations for TikTok and Instagram Reels.",
    images: ["/og-image.png"],
  },
};

export default function AboutPage() {
  return <AboutView />;
}
