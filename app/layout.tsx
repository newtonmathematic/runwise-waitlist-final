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
    locale: "en_US",
    type: "website",
    images: ["https://runwiseai.app/opengraph-image.png?v=3"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Join the Runwise Waitlist",
    description: "AI-powered automation made effortless. Get early access and exclusive perks.",
    images: ["https://runwiseai.app/twitter-image.png?v=3"],
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
      <body className={FigtreeFont.className}>
        {children}
        <Toaster richColors position="top-center" />
        <Analytics />
      </body>
    </html>
  );
}
