import type { MetadataRoute } from "next";
import { SITE } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const paths = [
    "/",
    "/services/seai-external-insulation-grants",
    "/areas/blackrock",
    "/areas/dalkey",
    "/about",
    "/contact",
    "/faq",
    "/privacy-policy",
    "/terms",
  ];
  return paths.map((p) => ({
    url: `${SITE.url}${p}`,
    lastModified,
    changeFrequency: "monthly",
    priority: p === "/" ? 1 : 0.7,
  }));
}
