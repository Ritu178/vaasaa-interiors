import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const AI_BOTS = [
  "GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-User", "Claude-SearchBot", "anthropic-ai",
  "PerplexityBot", "Perplexity-User", "Google-Extended", "Applebot", "Applebot-Extended", "Bingbot",
  "DuckAssistBot", "cohere-ai", "Meta-ExternalAgent", "Amazonbot", "YouBot",
];

export default function robots(): MetadataRoute.Robots {
  const disallow = ["/checkout"];
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      ...AI_BOTS.map((userAgent) => ({ userAgent, allow: "/", disallow })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
