// Read SITE_URL from env. Default is the production URL we expect once a
// custom domain is wired up; falls back to the Vercel preview only when no
// env override is set. NEVER hardcode a Vercel preview as canonical.
const FALLBACK_URL = "https://external-insulation-dublin-dublin-2.vercel.app";

const RAW_URL = process.env.NEXT_PUBLIC_SITE_URL || FALLBACK_URL;
// Strip any trailing slash so we can do `${SITE.url}${path}` safely.
const SITE_URL = RAW_URL.replace(/\/+$/, "");

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
