import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Ahatashamul — Full-Stack Developer",
  description:
    "Md Ahatashamul Islam Mondol — full-stack developer from Bangladesh specializing in AI-powered web apps, SaaS platforms, and dashboards with Next.js, React, and Node.js.",
  applicationName: "Ahatashamul Portfolio",
  authors: [
    {
      name: "Md Ahatashamul Islam Mondol",
      url: "https://www.linkedin.com/in/md-ahatashamul-islam-mondol-790341373",
    },
  ],
  keywords: [
    "Full-Stack Developer",
    "Next.js",
    "React",
    "Node.js",
    "AI Web Apps",
    "SaaS",
    "Portfolio",
    "Bangladesh",
  ],
  openGraph: {
    title: "Ahatashamul — Full-Stack Developer",
    description:
      "Md Ahatashamul Islam Mondol — full-stack developer from Bangladesh specializing in AI-powered web apps, SaaS platforms, and dashboards with Next.js, React, and Node.js.",
    type: "website",
    locale: "en_US",
    siteName: "Ahatashamul Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahatashamul — Full-Stack Developer",
    description:
      "Md Ahatashamul Islam Mondol — full-stack developer from Bangladesh specializing in AI-powered web apps, SaaS platforms, and dashboards with Next.js, React, and Node.js.",
  },
};

import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
