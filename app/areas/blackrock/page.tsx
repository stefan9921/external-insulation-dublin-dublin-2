import type { Metadata } from "next";
import AreaPage from "../../../components/AreaPage";
import { SITE } from "../../../lib/site";

const PAGE_URL = SITE.url + "/areas/blackrock";
const PAGE_TITLE = "External Wall Insulation Blackrock, Dublin | EWI Contractors";
const PAGE_DESCRIPTION =
  "External wall insulation in Blackrock, South Dublin. SEAI-approved EWI contractors covering Blackrock and surrounding areas. Free local quote.";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "/areas/blackrock" },
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

export default function BlackrockPage() {
  return (
    <AreaPage
      area="Blackrock"
      slug="blackrock"
      intro="Upgrade your home's thermal efficiency with premium external insulation. Claim up to €8,000 in SEAI grants today and transform your Blackrock property."
      context="Blackrock features a unique blend of heritage period properties and mid-century semi-detached homes. Many of these structures were built with solid walls or early cavity designs that fail to meet modern thermal standards, leading to heat loss and high energy bills."
      bodyParagraphs={[
        "External wall insulation in Blackrock has become one of the most cost-effective home upgrades available in South Dublin. The vast majority of homes between Newtown Park, Cross Avenue and Frascati Park were built before 2011, which means they qualify for the SEAI external wall insulation grant of up to €8,000. Our crews wrap the entire envelope of the building in a high-performance insulation board and finish it in a silicone render that stands up to the salt-laden coastal air rolling in off Dublin Bay.",
        "Because Blackrock sits right on the coast, we specify breathable, weather-resistant systems and detail every reveal, eaves and parapet to keep wind-driven rain out. A typical 1970s Blackrock semi-detached drops from a U-value of around 2.1 W/m²K down to 0.27 W/m²K after our EWI install — that translates into 35-45% lower heating bills, an improved BER rating and a comfortable, mould-free living space. We handle the full SEAI grant application, the pre and post-works BER assessments, and coordinate with Dun Laoghaire-Rathdown County Council if your home sits within an Architectural Conservation Area.",
      ]}
      landmarks={[
        {
          name: "Blackrock Park",
          blurb:
            "Many of our customers live in the streets backing onto Blackrock Park between Rock Road and the seafront.",
        },
        {
          name: "Frascati Shopping Centre",
          blurb:
            "Period semi-detached and terraced homes around Frascati and Newtown Park benefit most from external insulation.",
        },
        {
          name: "Blackrock DART Station",
          blurb:
            "A short drive from our Dublin 2 office — most Blackrock surveys are scheduled within 48 hours.",
        },
      ]}
      surroundingAreas={[
        "Booterstown",
        "Mount Merrion",
        "Monkstown",
        "Stillorgan",
        "Dun Laoghaire",
        "Deansgrange",
      ]}
      caseStudy={{
        title: "1970s Semi-Detached Upgrade",
        quote:
          "The difference in temperature was immediate. We no longer need the heating on all evening, and the new exterior has completely transformed the look of the street.",
        author: "Brendan T., Blackrock Resident",
        grant: "€6,000",
        reduction: "42%",
      }}
      imageSrc="/images/area-blackrock.jpg"
    />
  );
}
