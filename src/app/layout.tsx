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
    default: "Fitran Hasby — AI Direct Response Creative Specialist",
    template: "%s | Fitran Hasby",
  },
  description:
    "Portfolio of Fitran Hasby, an AI Direct Response Creative Specialist turning customer research into testable video ads for TikTok and Instagram Reels.",
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
    title: "Fitran Hasby — AI Direct Response Creative Specialist",
    description:
      "Turning customer research into high-retention video ads ready for testing on TikTok and Instagram Reels.",
    url: "https://hasby-portfolio.pages.dev/",
    siteName: "Fitran Hasby Portfolio",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: "https://hasby-portfolio.pages.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fitran Hasby — AI Direct Response Creative Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fitran Hasby — AI Direct Response Creative Specialist",
    description:
      "Turning customer research into high-retention video ads ready for testing on TikTok and Instagram Reels.",
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
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var saved = localStorage.getItem('hasby_portfolio_lang');
                if (saved === 'en') {
                  document.documentElement.classList.add('lang-loading');
                  document.documentElement.lang = 'en';
                }
                setTimeout(function() {
                  document.documentElement.classList.remove('lang-loading');
                }, 400);
              } catch(e) {}
            `,
          }}
        />
      </head>
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
