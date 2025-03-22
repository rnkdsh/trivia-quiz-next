import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

import Providers from "@/providers";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://trivia-quiz-next.vercel.app"),
  title: "TRIVIA",
  description:
    "Challenge your knowledge with our captivating TRIVIA quiz app and discover the joy of learning through fun and exciting questions.",
  openGraph: {
    title: "TRIVIA",
    description:
      "Challenge your knowledge with our captivating TRIVIA quiz app and discover the joy of learning through fun and exciting questions.",
    url: "https://trivia-quiz-next.vercel.app",
    siteName: "TRIVIA",
    locale: "en-US",
    type: "website",
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
  twitter: {
    title: "TRIVIA",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <main>{children}</main>
        </Providers>
      </body>
      <Analytics />
    </html>
  );
}
