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
  title: "Mihir Brahme — Business Analyst | Product Owner | Pre-Sales Lead",
  description:
    "Senior Business Analyst, Product Owner, and Pre-Sales Lead building population-scale platforms across DPI ecosystems. 5+ years in digital public infrastructure, ecosystem governance, and AI automation.",
  keywords: [
    "Mihir Brahme",
    "Business Analyst",
    "Product Owner",
    "Pre-Sales Lead",
    "DPI",
    "Digital Public Infrastructure",
    "Population Scale Platforms",
    "AI Automation",
    "Interoperability",
    "Ecosystem Governance",
  ],
  authors: [{ name: "Mihir Brahme" }],
  openGraph: {
    title:
      "Mihir Brahme — Business Analyst | Product Owner | Pre-Sales Lead",
    description:
      "Senior Business Analyst, Product Owner, and Pre-Sales Lead building population-scale platforms across DPI ecosystems.",
    type: "website",
    locale: "en_US",
    siteName: "Mihir Brahme",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mihir Brahme — BA | Product Owner | Pre-Sales Lead",
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
              jobTitle: "Senior Business Analyst | Product Owner | Pre-Sales Lead",
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
              sameAs: [
                "https://www.linkedin.com/in/mihirbrahme",
                "https://github.com/mihirbrahme",
              ],
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
