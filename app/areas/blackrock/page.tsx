import type { Metadata } from "next";
import AreaPage from "../../../components/AreaPage";

export const metadata: Metadata = {
  title: "External Wall Insulation Blackrock, Dublin | EWI Contractors",
  description:
    "External wall insulation in Blackrock, South Dublin. SEAI-approved EWI contractors covering Blackrock and surrounding areas. Free local quote.",
  alternates: { canonical: "/areas/blackrock" },
};

export default function BlackrockPage() {
  return (
    <AreaPage
      area="Blackrock"
      slug="blackrock"
      intro="Upgrade your home's thermal efficiency with premium external insulation. Claim up to €8,000 in SEAI grants today and transform your Blackrock property."
      context="Blackrock features a unique blend of heritage period properties and mid-century semi-detached homes. Many of these structures were built with solid walls or early cavity designs that fail to meet modern thermal standards, leading to heat loss and high energy bills."
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
      imageSrc="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80"
    />
  );
}
