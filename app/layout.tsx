import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://iptvminepro.vercel.app"),
  title: {
    default: "IPTVMine Pro — Stream Movies, Live TV & Series",
    template: "%s | IPTVMine Pro",
  },
  description:
    "IPTVMine Pro is a powerful Android IPTV app to stream Live TV, Movies, and TV Shows via M3U playlists and provider extensions.",
  keywords: ["IPTV", "streaming", "live TV", "movies", "Android", "M3U"],
  authors: [{ name: "IPTVMine Pro" }],
  creator: "IPTVMine Pro",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://iptvminepro.vercel.app",
    siteName: "IPTVMine Pro",
    title: "IPTVMine Pro — Stream Movies, Live TV & Series",
    description: "Powerful Android IPTV app for streaming Live TV, Movies, and Series.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTVMine Pro",
    description: "Stream Live TV, Movies, and Series on Android.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
