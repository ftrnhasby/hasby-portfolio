import type { Metadata } from "next";
import { ContactView } from "@/components/ContactView";

export const metadata: Metadata = {
  title: {
    absolute: "Contact & Project Intake — Fitran Hasby",
  },
  description:
    "Initiate a video engineering sprint or explore direct-response creative collaboration with Fitran Hasby.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact & Project Intake — Fitran Hasby",
    description:
      "Initiate a video engineering sprint or explore direct-response creative collaboration with Fitran Hasby.",
    url: "/contact",
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
    title: "Contact & Project Intake — Fitran Hasby",
    description:
      "Initiate a video engineering sprint or explore direct-response creative collaboration with Fitran Hasby.",
    images: ["/og-image.png"],
  },
};

export default function ContactPage() {
  return <ContactView />;
}
