import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mihir Brahme — Consultant/Lead | Population-Scale Platforms, DPI, AI",
  description:
    "I build and deliver population-scale technology where the real test is not a demo—it's correctness, resilience, and adoption under real-world complexity.",
  keywords: [
    "Mihir Brahme",
    "DPI",
    "Digital Public Infrastructure",
    "Population Scale Platforms",
    "AI Automation",
    "Interoperability",
    "Consultant",
  ],
  authors: [{ name: "Mihir Brahme" }],
  openGraph: {
    title:
      "Mihir Brahme — Consultant/Lead | Population-Scale Platforms, DPI, AI",
    description:
      "I build and deliver population-scale technology where the real test is not a demo—it's correctness, resilience, and adoption under real-world complexity.",
    type: "website",
    locale: "en_US",
    siteName: "Mihir Brahme",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mihir Brahme — Population-Scale Platforms & DPI",
    description:
      "Building robust, interoperable systems at scale with AI-readiness and governance.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mihir Surendra Brahme",
              jobTitle: "Consultant/Lead — Population-Scale Platforms",
              worksFor: {
                "@type": "Organization",
                name: "Suma Soft Pvt. Ltd.",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Pune",
                addressCountry: "India",
              },
              email: "mihir.brahme@gmail.com",
              url: "https://github.com/mihirbrahme",
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
