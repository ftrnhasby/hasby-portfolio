import type { Metadata } from "next";
import { ContactView } from "@/components/ContactView";

export const metadata: Metadata = {
  title: "Contact & Project Intake — Fathan Hasby",
  description:
    "Initiate a video engineering sprint or explore direct-response creative collaboration with Fathan Hasby.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact & Project Intake — Fathan Hasby",
    description:
      "Initiate a video engineering sprint or explore direct-response creative collaboration with Fathan Hasby.",
    url: "/contact",
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
    title: "Contact & Project Intake — Fathan Hasby",
    description:
      "Initiate a video engineering sprint or explore direct-response creative collaboration with Fathan Hasby.",
    images: ["/og-image.png"],
  },
};

export default function ContactPage() {
  return <ContactView />;
}
