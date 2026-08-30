import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Arya Agarwal | Digital Growth Partner for Small Businesses",
  description:
    "I help small businesses grow with fast, conversion-focused websites, CRM solutions, UI/UX design, and growth systems — built to get you responding to customers quicker.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-white text-zinc-900`}
      >
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
