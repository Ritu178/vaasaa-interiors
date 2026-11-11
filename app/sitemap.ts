import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: [string, number, MetadataRoute.Sitemap[number]["changeFrequency"]][] = [
    ["", 1, "weekly"],
    ["/products", 0.9, "weekly"],
    ["/offers", 0.9, "weekly"],
    ["/gallery", 0.7, "monthly"],
    ["/about", 0.6, "yearly"],
    ["/contact", 0.8, "yearly"],
  ];
  return pages.map(([path, priority, changeFrequency]) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
