// Canonical production URL for SEO metadata, robots.txt, and sitemap.xml.
// Vercel preview URLs must never become canonical or sitemap URLs.
const PRODUCTION_URL = "https://www.externalinsulationdublin.ie";
const NON_WWW_PRODUCTION_HOST = "externalinsulationdublin.ie";
const VERCEL_PREVIEW_HOST_SUFFIX = ".vercel.app";

function normaliseSiteUrl(rawUrl?: string): string {
  const candidateUrl = rawUrl?.trim() || PRODUCTION_URL;

  try {
    const parsedUrl = new URL(candidateUrl);

    if (
      parsedUrl.hostname === NON_WWW_PRODUCTION_HOST ||
      parsedUrl.hostname.endsWith(VERCEL_PREVIEW_HOST_SUFFIX)
    ) {
      return PRODUCTION_URL;
    }

    return parsedUrl.origin.replace(/\/+$/, "");
  } catch {
    return PRODUCTION_URL;
  }
}

const SITE_URL = normaliseSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

export const SITE = {
  name: "External Insulation Dublin",
  url: SITE_URL,
  phone: "+35312308892",
  phoneDisplay: "+353 1 230 8892",
  email: "info@externalinsulationdublin.ie",
  address: {
    street: "77 Sir John Rogerson's Quay",
    locality: "Grand Canal Dock",
    region: "Dublin",
    postalCode: "D02 VK60",
    country: "IE",
    full: "77 Sir John Rogerson's Quay, Grand Canal Dock, Dublin 2, D02 VK60",
  },
  hours: "Mon - Sunday 8:00AM - 8:00PM",
  city: "Dublin 2",
  // OG/Twitter card image — physical file under /public/images/
  ogImage: {
    path: "/images/og-image.jpg",
    width: 1200,
    height: 630,
    alt: "External Insulation Dublin — SEAI Approved External Wall Insulation Contractors",
  },
};
