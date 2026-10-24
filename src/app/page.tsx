import type { Metadata } from "next";
import { HomeView } from "@/components/HomeView";

export const metadata: Metadata = {
  title: "Fathan Hasby — Creative Technologist & Direct Response Video Engineer",
  description:
    "Portfolio of Fathan Hasby. Programmatic direct-response video engineering, motion design, Remotion workflows, and high-performance digital craft.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fathan Hasby — Creative Technologist & Direct Response Video Engineer",
    description:
      "Programmatic direct-response video engineering, motion design, Remotion workflows, and high-performance digital craft.",
    url: "/",
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
    title: "Fathan Hasby — Creative Technologist & Direct Response Video Engineer",
    description:
      "Programmatic direct-response video engineering, motion design, Remotion workflows, and high-performance digital craft.",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return <HomeView />;
}
