import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CartProvider from "@/components/CartProvider";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, SEO_DESCRIPTION, KEYWORDS, OG_IMAGE, businessJsonLd, websiteJsonLd } from "@/lib/seo";

const serif = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const sans = Inter({ subsets: ["latin"], variable: "--font-inter" });

const TITLE = "VaaSaa Interiors – Premium Interior Materials in Amritsar";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#173404",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s | VaaSaa Interiors" },
  description: SEO_DESCRIPTION,
  applicationName: "VaaSaa Interiors",
  keywords: KEYWORDS,
  authors: [{ name: "VaaSaa Interiors", url: SITE_URL }],
  creator: "VaaSaa Interiors",
  publisher: "VaaSaa Interiors",
  category: "Home Improvement",
  alternates: { canonical: "./" },
  formatDetection: { telephone: true, address: true, email: true },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    siteName: "VaaSaa Interiors",
    locale: "en_IN",
    url: "./",
    title: TITLE,
    description: SEO_DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "VaaSaa Interiors – Premium interior materials in Amritsar" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: SEO_DESCRIPTION, images: [OG_IMAGE] },
  other: {
    "geo.region": "IN-PB",
    "geo.placename": "Amritsar",
    "business:contact_data:street_address": "36 Himmat Singh Avenue, Majitha Road",
    "business:contact_data:locality": "Amritsar",
    "business:contact_data:region": "Punjab",
    "business:contact_data:country_name": "India",
    "business:contact_data:phone_number": "+918289031319",
  },
  // Add your Search Console / Bing tokens here once you have them:
  // verification: { google: "TOKEN", other: { "msvalidate.01": "TOKEN" } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${serif.variable} ${sans.variable}`}>
      <head>
        <JsonLd data={[businessJsonLd, websiteJsonLd]} />
      </head>
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
        </CartProvider>
      </body>
    </html>
  );
}
