import type { Metadata } from "next";
import { ProcessView } from "@/components/ProcessView";

export const metadata: Metadata = {
  title: {
    absolute: "Production System — Fitran Hasby",
  },
  description:
    "Less Time Researching. Faster Creative Iteration. AI Direct Response Creative Specialist production system reducing repetitive research and editing work.",
  alternates: {
    canonical: "/process",
  },
  openGraph: {
    title: "Production System — Fitran Hasby",
    description:
      "Less Time Researching. Faster Creative Iteration. AI Direct Response Creative Specialist production system reducing repetitive research and editing work.",
    url: "/process",
    siteName: "Fitran Hasby Portfolio",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fitran Hasby — AI Direct Response Creative Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Production System — Fitran Hasby",
    description:
      "Less Time Researching. Faster Creative Iteration. AI Direct Response Creative Specialist production system reducing repetitive research and editing work.",
    images: ["/og-image.png"],
  },
};

export default function ProcessPage() {
  return <ProcessView />;
}
