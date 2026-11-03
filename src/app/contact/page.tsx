import type { Metadata } from "next";
import { ContactView } from "@/components/ContactView";

export const metadata: Metadata = {
  title: {
    absolute: "Contact & Project Intake — Fitran Hasby | AI Direct Response Creative Specialist",
  },
  description:
    "Discuss video ads, hook testing sprints, or direct-response creative collaboration with Fitran Hasby, AI Direct Response Creative Specialist.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact & Project Intake — Fitran Hasby | AI Direct Response Creative Specialist",
    description:
      "Discuss video ads, hook testing sprints, or direct-response creative collaboration with Fitran Hasby, AI Direct Response Creative Specialist.",
    url: "/contact",
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
    title: "Contact & Project Intake — Fitran Hasby | AI Direct Response Creative Specialist",
    description:
      "Discuss video ads, hook testing sprints, or direct-response creative collaboration with Fitran Hasby, AI Direct Response Creative Specialist.",
    images: ["/og-image.png"],
  },
};

export default function ContactPage() {
  return <ContactView />;
}
