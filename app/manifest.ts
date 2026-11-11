import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "VaaSaa Interiors",
    short_name: "VaaSaa",
    description: "Premium interior materials showroom in Amritsar.",
    start_url: "/",
    display: "standalone",
    background_color: "#F8F5EE",
    theme_color: "#173404",
    lang: "en-IN",
    icons: [{ src: "/logo.png", sizes: "368x368", type: "image/png", purpose: "any" }],
  };
}
