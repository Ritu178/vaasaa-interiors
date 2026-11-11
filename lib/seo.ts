import { BRAND, PRODUCTS } from "./data";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://vaasaa-interiors.vercel.app";

export const SEO_DESCRIPTION =
  "VaaSaa Interiors is a premium home interior materials showroom in Amritsar, Punjab – PVC & WPC panels, charcoal louvers, UV marble sheets, PU stones, wallpapers, sofa fabric, French molding, artificial grass, planters, curtains and blinds, with installation and free design advice.";

export const KEYWORDS = [
  "interior materials Amritsar", "interior showroom Amritsar", "home interior Amritsar", "VaaSaa Interiors",
  "PVC wall panels Amritsar", "WPC panels Amritsar", "charcoal louvers", "fluted panels", "UV marble sheet Amritsar",
  "7D UV sheet", "PU stone cladding", "wallpaper shop Amritsar", "sofa fabric Amritsar", "French molding",
  "artificial grass Amritsar", "vertical garden panel", "artificial planters", "curtains and Roman blinds Amritsar",
  "Majitha Road interiors", "Punjab interior decor",
];

const absolute = (p: string) => (p.startsWith("http") ? p : `${SITE_URL}${p}`);

export const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["HomeAndConstructionBusiness", "Store"],
  "@id": `${SITE_URL}/#business`,
  name: BRAND.name,
  alternateName: "VaaSaa Interior",
  slogan: BRAND.tagline,
  description: SEO_DESCRIPTION,
  url: SITE_URL,
  logo: absolute("/logo.png"),
  image: [absolute("/logo.png"), absolute("/opengraph-image")],
  telephone: `+91${BRAND.phone}`,
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  address: {
    "@type": "PostalAddress",
    streetAddress: "36 Himmat Singh Avenue, Majitha Road",
    addressLocality: "Amritsar",
    addressRegion: "Punjab",
    addressCountry: "IN",
  },
  areaServed: { "@type": "City", name: "Amritsar" },
  hasMap: "https://www.google.com/maps?q=36+Himmat+Singh+Avenue,+Majitha+Road,+Amritsar",
  sameAs: [BRAND.instagramUrl],
  contactPoint: [{
    "@type": "ContactPoint",
    telephone: `+91${BRAND.phone}`,
    contactType: "customer service",
    availableLanguage: ["en", "hi", "pa"],
  }],
  makesOffer: [...new Set(PRODUCTS.map((p) => p.cat))].map((c) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Product", name: c },
  })),
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: BRAND.name,
  inLanguage: "en-IN",
  publisher: { "@id": `${SITE_URL}/#business` },
};

export const productsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "VaaSaa Interiors product range",
  itemListElement: PRODUCTS.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: { "@type": "Product", name: p.name, category: p.cat, brand: { "@type": "Brand", name: BRAND.name } },
  })),
};

export const breadcrumbJsonLd = (name: string, path: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name, item: `${SITE_URL}${path}` },
  ],
});

/** Full per-page metadata (Next replaces, not merges, nested openGraph/twitter objects). */
export function pageMeta(title: string, description: string, path: string, shortTitle: string) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website" as const,
      siteName: "VaaSaa Interiors",
      locale: "en_IN",
      url: path,
      title: `${shortTitle} | VaaSaa Interiors`,
      description,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "VaaSaa Interiors – Premium interior materials in Amritsar" }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: `${shortTitle} | VaaSaa Interiors`,
      description,
      images: ["/twitter-image"],
    },
  };
}
