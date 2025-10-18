import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";

const FigtreeFont = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Join the Waitlist",
  description: "Join the Runwise waitlist to get early access and perks for AI-powered automation made effortless.",
  openGraph: {
    title: "Join the Runwise Waitlist",
    description: "AI-powered automation made effortless. Get early access and exclusive perks.",
    url: "https://runwiseai.app",
    siteName: "Runwise",
    images: [
      {
        url: "/opengraph-image.png?v=2",
        width: 1200,
        height: 630,
        alt: "Runwise - AI-powered automation made effortless",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Join the Runwise Waitlist",
    description: "AI-powered automation made effortless. Get early access and exclusive perks.",
    images: ["/opengraph-image.png?v=2"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <link rel="icon" href="/logo.png" type="image/png" />
      <meta property="og:image" content="/opengraph-image.png?v=2" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Runwise - AI-powered automation made effortless" />
      <meta name="twitter:image" content="/opengraph-image.png?v=2" />
      <body className={FigtreeFont.className}>
        {children}
        <Toaster richColors position="top-center" />
        <Analytics />
      </body>
    </html>
  );
}
