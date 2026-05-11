import type { MetadataRoute } from "next";
import { SITE } from "../lib/site";

export default function robots(): MetadataRoute.Robots {
  const canonicalHost = new URL(SITE.url).host;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    host: canonicalHost,
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
