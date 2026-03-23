import type { Metadata } from "next";

import { ClerkProvider } from "@clerk/nextjs";

import { Bricolage_Grotesque, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";


const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Finlight - AI Financial Education Platform",
  description: "Finlight is an AI-powered platform that teaches financial literacy, investing, accounting, banking, cryptocurrency, and entrepreneurship in real-time.",
  keywords: [
    // General
    "financial literacy", "personal finance", "money management", "budgeting app", "finance education",
    "AI financial coach", "financial learning platform", "financial education Kenya",
    // Investing
    "investing basics", "stock market", "investment strategies", "wealth building", "retirement planning",
    // Accounting
    "accounting fundamentals", "bookkeeping", "financial statements", "accounting basics",
    // Banking
    "banking education", "savings", "loans", "financial institutions", "banking for beginners",
    // Cryptocurrency
    "cryptocurrency learning", "bitcoin", "ethereum", "digital assets", "crypto investment",
    // Entrepreneurship
    "entrepreneurship training", "startup business", "business planning", "small business management",
    "financial independence"
  ],
  openGraph: {
    title: "Finlight - AI Financial Education Platform",
    description: "Learn financial literacy, investing, accounting, banking, cryptocurrency, and entrepreneurship with AI-powered coaching.",
    url: "https://www.finlightventures.com",
    siteName: "Finlight",
    images: [
      {
        url: "https://www.finlightventures.com",
        width: 1200,
        height: 630,
        alt: "Finlight AI Financial Education"
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finlight - AI Financial Education Platform",
    description: "Interactive AI-powered financial education platform for budgeting, investing, accounting, banking, crypto, and entrepreneurship.",
    images: ["https://www.finlightventures.com"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{variables: {colorPrimary: '#fe5933'}}}>
    <html lang="en">
      <body className={`${bricolage.variable} antialiased`}>
        <Navbar />
        {children}
        </body>
    </html>
  </ClerkProvider>
  );
}
