import type { Metadata } from "next";
import AreaPage from "../../../components/AreaPage";

export const metadata: Metadata = {
  title: "External Wall Insulation Dalkey, Dublin | EWI Contractors",
  description:
    "External wall insulation in Dalkey, South Dublin. SEAI-approved EWI installers serving Dalkey homeowners. Free local survey and quote.",
  alternates: { canonical: "/areas/dalkey" },
};

export default function DalkeyPage() {
  return (
    <AreaPage
      area="Dalkey"
      slug="dalkey"
      intro="Boost the thermal performance of your Dalkey home with sensitively-installed external wall insulation. Up to €8,000 in SEAI grants available."
      context="Dalkey is famed for period properties, granite cottages and Victorian villas. Many predate modern building regulations, so external insulation transforms comfort and energy use without sacrificing the village's distinct character."
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
      imageSrc="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
    />
  );
}
