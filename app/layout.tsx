import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";

const FigtreeFont = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Runwise AI Waitlist - AI-Powered Automation Made Effortless | Join Runwise",
  description: "Join the Runwise AI waitlist for early access to revolutionary AI-powered automation tools. Make automation effortless with Runwise AI's intelligent solutions. Get exclusive perks and early access.",
  keywords: "Runwise AI, AI automation, automation tools, AI waitlist, Runwise waitlist, artificial intelligence, automation software, AI-powered automation, Runwise",
  authors: [{ name: "Runwise AI" }],
  creator: "Runwise AI",
  publisher: "Runwise AI",
  robots: "index, follow",
  openGraph: {
    title: "Runwise AI Waitlist - AI-Powered Automation Made Effortless",
    description: "Join the Runwise AI waitlist for early access to revolutionary AI-powered automation tools. Make automation effortless with Runwise AI's intelligent solutions.",
    url: "https://runwiseai.app",
    siteName: "Runwise AI",
    locale: "en_US",
    type: "website",
    images: ["https://runwiseai.app/opengraph-image.png?v=4"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Runwise AI Waitlist - AI-Powered Automation Made Effortless",
    description: "Join the Runwise AI waitlist for early access to revolutionary AI-powered automation tools. Make automation effortless with Runwise AI.",
    images: ["https://runwiseai.app/twitter-image.png?v=5"],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Runwise AI",
            "description": "AI-powered automation made effortless. Join the Runwise AI waitlist for early access to revolutionary automation tools.",
            "url": "https://runwiseai.app",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/PreOrder"
            },
            "creator": {
              "@type": "Organization",
              "name": "Runwise AI"
            },
            "keywords": "AI automation, automation tools, artificial intelligence, AI-powered automation, Runwise AI"
          })
        }}
      />
      <body className={FigtreeFont.className}>
        {children}
        <Toaster richColors position="top-center" />
        <Analytics />
      </body>
    </html>
  );
}
