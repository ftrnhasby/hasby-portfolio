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
    default: "Fitran Hasby | Video Editor & AI Filmmaker",
    template: "%s | Fitran Hasby",
  },
  description:
    "Portfolio of Fitran Hasby, a video editor and AI filmmaker crafting cinematic brand spots, AI short films, and direct-response video ads.",
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
    title: "Fitran Hasby | Video Editor & AI Filmmaker",
    description:
      "Cinematic brand spots, AI short films, and direct-response video ads cut for attention and action.",
    url: "https://hasby-portfolio.pages.dev/",
    siteName: "Fitran Hasby Portfolio",
    locale: "en_US",
    alternateLocale: ["id_ID"],
    type: "website",
    images: [
      {
        url: "https://hasby-portfolio.pages.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fitran Hasby — Video Editor & AI Filmmaker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fitran Hasby | Video Editor & AI Filmmaker",
    description:
      "Cinematic brand spots, AI short films, and direct-response video ads cut for attention and action.",
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
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var saved = localStorage.getItem('hasby_portfolio_lang');
                if (saved === 'id') {
                  document.documentElement.classList.add('lang-loading');
                  document.documentElement.lang = 'id';
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
