import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hasby-portfolio.pages.dev"),
  title: {
    default: "Hasby — AI & Direct Response Video Editor",
    template: "%s | Hasby",
  },
  description:
    "Portfolio of Hasby, an AI-assisted Direct Response Video Editor creating high-retention vertical video ads, creative variations, and programmatic motion storytelling.",
  alternates: {
    canonical: "https://hasby-portfolio.pages.dev/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Hasby — AI & Direct Response Video Editor",
    description:
      "High-retention vertical video ads, creative variations, and programmatic motion storytelling.",
    url: "https://hasby-portfolio.pages.dev/",
    siteName: "Hasby Portfolio",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: "https://hasby-portfolio.pages.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hasby — AI & Direct Response Video Editor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hasby — AI & Direct Response Video Editor",
    description:
      "High-retention vertical video ads, creative variations, and programmatic motion storytelling.",
    images: ["https://hasby-portfolio.pages.dev/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#070708] text-[#f5f5f7]">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
