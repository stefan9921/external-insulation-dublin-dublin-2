import type { MetadataRoute } from "next";
import { SITE } from "../lib/site";

// Static routes (homepage + utility pages).
const STATIC_ROUTES = [
  "/",
  "/about",
  "/contact",
  "/faq",
  "/privacy-policy",
  "/terms",
] as const;

// Service slugs — keep in sync with /app/services/[slug]/page.tsx.
const SERVICE_SLUGS = ["seai-external-insulation-grants"] as const;

// Area slugs — keep in sync with /app/areas/[slug]/page.tsx.
const AREA_SLUGS = ["blackrock", "dalkey"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const entries: MetadataRoute.Sitemap = [];

  for (const path of STATIC_ROUTES) {
    entries.push({
      url: `${SITE.url}${path}`,
      lastModified,
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority: path === "/" ? 1 : 0.6,
    });
  }

  for (const slug of SERVICE_SLUGS) {
    entries.push({
      url: `${SITE.url}/services/${slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    });
  }

  for (const slug of AREA_SLUGS) {
    entries.push({
      url: `${SITE.url}/areas/${slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return entries;
}
