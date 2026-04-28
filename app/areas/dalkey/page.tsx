import type { Metadata } from "next";
import AreaPage from "../../../components/AreaPage";
import { SITE } from "../../../lib/site";

const PAGE_URL = SITE.url + "/areas/dalkey";
const PAGE_TITLE = "External Wall Insulation Dalkey, Dublin | EWI Contractors";
const PAGE_DESCRIPTION =
  "External wall insulation in Dalkey, South Dublin. SEAI-approved EWI installers serving Dalkey homeowners. Free local survey and quote.";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "/areas/dalkey" },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [
      {
        url: SITE.ogImage.path,
        width: SITE.ogImage.width,
        height: SITE.ogImage.height,
        alt: SITE.ogImage.alt,
      },
    ],
  },
};

export default function DalkeyPage() {
  return (
    <AreaPage
      area="Dalkey"
      slug="dalkey"
      intro="Boost the thermal performance of your Dalkey home with sensitively-installed external wall insulation. Up to €8,000 in SEAI grants available."
      context="Dalkey is famed for period properties, granite cottages and Victorian villas. Many predate modern building regulations, so external insulation transforms comfort and energy use without sacrificing the village's distinct character."
      bodyParagraphs={[
        "External wall insulation in Dalkey requires sensitivity. The village is dotted with Victorian villas, granite cottages and Edwardian semi-detached homes between Castle Street, Coliemore Road and Sorrento Terrace, many of which sit within an Architectural Conservation Area. We design every Dalkey EWI system to preserve the character that makes the village distinctive — that means matching existing render textures, retaining decorative quoins where possible and detailing carefully around stone window surrounds. SEAI grants of up to €8,000 are available for homes built and first occupied before 2011.",
        "Coastal Dalkey homes face wind-driven rain off the Irish Sea, so we specify silicone-modified renders that shed water and resist mildew, paired with EPS or mineral-wool insulation boards engineered for Irish weather. The thermal upgrade is dramatic — wall U-values drop from around 2.0 W/m²K to 0.27 W/m²K, eliminating cold spots in north-facing rooms and removing surface condensation that would otherwise lead to mould. We handle the full SEAI application, the pre and post-works BER assessments, and liaise with Dun Laoghaire-Rathdown County Council on any planning queries for properties in the ACA.",
      ]}
      landmarks={[
        {
          name: "Dalkey Castle & Heritage Centre",
          blurb:
            "Period homes around Castle Street and Sorrento Terrace are typical of the conservation-sensitive jobs we handle.",
        },
        {
          name: "Killiney Hill",
          blurb:
            "Hillside homes along Coliemore Road face strong wind and rain — silicone-render EWI systems perform best here.",
        },
        {
          name: "Dalkey DART Station",
          blurb:
            "A 25-minute drive from our Dublin 2 office. We can usually be on site for surveys within a few days.",
        },
      ]}
      surroundingAreas={[
        "Killiney",
        "Glasthule",
        "Sandycove",
        "Dun Laoghaire",
        "Shankill",
        "Cabinteely",
      ]}
      caseStudy={{
        title: "Victorian Villa Retrofit",
        quote:
          "We were nervous about altering the look of the house, but the team delivered a render that suits Dalkey perfectly. The whole place feels warmer in winter.",
        author: "Caoimhe R., Dalkey Resident",
        grant: "€6,000",
        reduction: "38%",
      }}
      imageSrc="/images/area-dalkey.jpg"
    />
  );
}
