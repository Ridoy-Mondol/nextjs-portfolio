import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const SITE_URL = "https://ahatashamul.com";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Md Ahatashamul Islam Mondol — full-stack developer from Bangladesh specializing in AI-powered web apps, SaaS platforms, and dashboards with Next.js, React, and Node.js.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Ahatashamul — Full-Stack Developer",
  description,
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
    description,
    type: "website",
    locale: "en_US",
    siteName: "Ahatashamul Portfolio",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahatashamul — Full-Stack Developer",
    description,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Md Ahatashamul Islam Mondol",
  url: SITE_URL,
  jobTitle: "Full-Stack Developer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rajshahi",
    addressCountry: "BD",
  },
  sameAs: [
    "https://github.com/Ridoy-Mondol",
    "https://www.linkedin.com/in/md-ahatashamul-islam-mondol-790341373",
    "https://www.upwork.com/freelancers/~01763d2c19d3cee0b3",
  ],
};

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
