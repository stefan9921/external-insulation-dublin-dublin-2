import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { BreadcrumbJsonLd, FaqJsonLd } from "../../components/JsonLd";
import { SITE } from "../../lib/site";

const PAGE_URL = SITE.url + "/faq";
const PAGE_TITLE = "External Wall Insulation FAQ Dublin & Ireland | Costs, Grants";
const PAGE_DESCRIPTION =
  "Answers to common questions about external wall insulation in Dublin and Ireland — cost, SEAI grants, planning permission, and is it worth it.";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "/faq" },
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

type FaqGroup = { heading: string; items: { q: string; a: string }[] };

const GROUPS: FaqGroup[] = [
  {
    heading: "Cost",
    items: [
      {
        q: "How much does external insulation cost?",
        a: "External wall insulation in Ireland typically costs €100-€110 per m². For a standard semi-detached Dublin home this works out around €18,000 before SEAI grant assistance, or €12,000 net of the typical €6,000 grant.",
      },
      {
        q: "How expensive is exterior insulation?",
        a: "Exterior insulation is the most expensive form of wall insulation but delivers the best thermal performance. Expect €8,500 for an apartment, €12,500 for mid-terrace, €18,000 for semi-detached and €26,000 for detached before grants.",
      },
      {
        q: "How much does exterior insulation cost?",
        a: "Exterior insulation costs in Ireland start from around €95 per m² on detached properties up to €110 per m² on apartments, depending on system specification, surface preparation and finish.",
      },
      {
        q: "How much does external insulation cost in Dublin?",
        a: "Dublin pricing is broadly in line with the national average — €100-€110 per m². Coastal locations like Blackrock and Dalkey often need silicone render finishes which can add 5-10% to the headline cost.",
      },
      {
        q: "How much does external insulation cost in Ireland?",
        a: "Across Ireland, external insulation budgets sit between €8,500 (apartments) and €26,000 (large detached homes). After the SEAI grant, homeowners typically pay €5,000-€18,000 net.",
      },
      {
        q: "How much does external insulation cost per m² in Ireland?",
        a: "Cost per m² in Ireland averages €100. Smaller areas (apartments) push the rate higher because of fixed costs (scaffolding, mobilisation), while larger detached homes benefit from economies of scale.",
      },
      {
        q: "How much does external wall insulation cost in Ireland?",
        a: "External wall insulation in Ireland costs €8,500-€26,000 depending on house type. The SEAI grant reduces this by €3,500-€8,000, making the net cost €5,000-€18,000 for most homes.",
      },
      {
        q: "How much does external wrap insulation cost in Ireland?",
        a: "External wrap insulation pricing matches standard external wall insulation — €100 per m² is typical, with costs scaling by wall area. The wrap term simply reflects how the system fully envelopes the building.",
      },
      {
        q: "How much does it cost for external insulation?",
        a: "Plan for €100 per m² as a working estimate, then deduct the SEAI grant (€3,500-€8,000) once approved. We provide a fixed quote after a free site survey.",
      },
      {
        q: "How much does it cost to externally insulate a house in Ireland?",
        a: "Externally insulating an Irish home costs €12,500-€26,000 before grant. After SEAI assistance most homeowners pay €9,000-€18,000 depending on the property type.",
      },
      {
        q: "How much does it cost to externally insulate a house?",
        a: "Externally insulating a typical Irish three-bed semi costs about €18,000 before grant, dropping to €12,000 after the €6,000 SEAI grant.",
      },
      {
        q: "How much does it cost to insulate a full house?",
        a: "A full external retrofit of a three-bed semi-detached Dublin house is around €18,000. Adding attic and floor insulation pushes a complete deep retrofit to €25,000-€40,000.",
      },
      {
        q: "How much does it cost to insulate a house in Ireland?",
        a: "Insulating an Irish house externally costs €8,500-€26,000 depending on size. Smaller wall-only projects can come in well under €10,000 once SEAI grants are deducted.",
      },
      {
        q: "How much does it cost to insulate an exterior wall?",
        a: "Insulating an exterior wall costs roughly €100 per m² installed, including system, render, scaffolding and labour. We quote per m² so you can scale costs to your wall area.",
      },
      {
        q: "How much does it cost to insulate an external wall?",
        a: "Insulating an external wall in Dublin starts at about €100 per m². For a 120 m² external wall area on a typical semi-detached home, expect around €12,000-€18,000.",
      },
      {
        q: "How much does it cost to insulate external walls?",
        a: "External wall insulation across an entire Irish home averages €18,000 pre-grant. Costs vary by wall area, render finish and the level of detail work required around windows and eaves.",
      },
      {
        q: "How much does it typically cost to insulate a house?",
        a: "Typical wall-only external insulation costs €18,000 for a semi-detached Irish home. Once the SEAI grant is applied this drops to about €12,000 net.",
      },
      {
        q: "How much does outside insulation cost?",
        a: "Outside (external) wall insulation costs €8,500-€26,000 in Ireland depending on house type. Per m² rates range from €95 (large detached) to €110 (small apartments).",
      },
    ],
  },
  {
    heading: "Grants",
    items: [
      {
        q: "Are there grants for external insulation?",
        a: "Yes. SEAI offers grants of up to €8,000 for external wall insulation on homes built and first occupied before 2011. The exact amount depends on dwelling type (apartment, terrace, semi-detached or detached).",
      },
      {
        q: "Is there a grant for external insulation?",
        a: "Yes — the SEAI Better Energy Homes scheme provides external wall insulation grants ranging from €3,500 (apartments and mid-terrace) up to €8,000 (detached houses).",
      },
      {
        q: "Is there a grant for external wall insulation?",
        a: "Yes. The SEAI grant for external wall insulation is available to Irish homeowners and ranges from €3,500 to €8,000 depending on the type of property being upgraded.",
      },
      {
        q: "How much is the SEAI grant for external wall insulation?",
        a: "SEAI external wall insulation grants are €3,500 (apartment, mid-terrace), €6,000 (semi-detached, end-terrace) and €8,000 (detached). The grant is paid after installation and a post-works BER assessment.",
      },
      {
        q: "How much is the SEAI grant for insulation?",
        a: "Across all insulation types SEAI grants range from €1,500 (cavity wall) up to €8,000 (external wall on detached homes). Attic insulation grants typically sit between €1,300 and €1,700.",
      },
    ],
  },
  {
    heading: "Planning permission",
    items: [
      {
        q: "Do I need permission for external wall insulation?",
        a: "Most external wall insulation projects on existing dwellings in Ireland do not require planning permission as they fall within exempted development. Protected structures and properties in Architectural Conservation Areas are exceptions.",
      },
      {
        q: "Do you need planning permission for external insulation in Dublin?",
        a: "In Dublin, planning permission is generally not required for external wall insulation under exempted development rules. Always check with Dublin City Council if your home is a protected structure or in an ACA.",
      },
      {
        q: "Do you need planning permission for external wall insulation in Ireland?",
        a: "External wall insulation is exempt development in most Irish cases provided the work does not significantly alter the appearance of the building. Listed buildings and conservation area properties usually need permission.",
      },
    ],
  },
  {
    heading: "Worth it & process",
    items: [
      {
        q: "Is external insulation worth the cost?",
        a: "For most pre-2011 Irish homes external insulation pays back through 25-40% reductions in heating bills, plus a higher BER rating that lifts resale value. Combined with the SEAI grant the payback is typically 7-10 years.",
      },
      {
        q: "Is external wall insulation a good idea?",
        a: "External wall insulation is the most effective wall upgrade for solid-wall and early cavity Irish houses. It eliminates cold bridging, protects the structure from weather and avoids losing internal floor area.",
      },
      {
        q: "Is it worth wrapping a house with insulation?",
        a: "Wrapping a house externally is the gold standard insulation upgrade. It delivers the lowest U-values, prevents condensation problems and refreshes the appearance of the building in one job.",
      },
      {
        q: "Can insulation help with allergies?",
        a: "External insulation reduces internal cold spots and surface condensation, which in turn limits the mould growth that aggravates allergies and asthma. Combined with proper ventilation it improves indoor air quality.",
      },
      {
        q: "Can you use an insulation board outside?",
        a: "Yes. The insulation boards used in EWI systems (typically EPS or mineral wool) are designed for external use, fixed to the wall and protected by basecoat, mesh and a weatherproof render finish.",
      },
    ],
  },
];

const ALL_FAQS = GROUPS.flatMap((g) => g.items);

export default function FaqPage() {
  return (
    <>
      <Header active="faq" />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE.url + "/" },
          { name: "FAQ", url: SITE.url + "/faq" },
        ]}
      />
      <FaqJsonLd items={ALL_FAQS} />

      <main className="pt-24">
        <div className="px-6 md:px-12 py-4 max-w-7xl mx-auto">
          <nav className="flex text-sm text-on-surface-variant/70 font-medium">
            <Link href="/" className="hover:text-tertiary-container">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-tertiary-container font-semibold">FAQ</span>
          </nav>
        </div>

        <section className="px-6 md:px-12 py-12 md:py-16 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-tertiary-container leading-tight tracking-tight">
            External Wall Insulation — Frequently Asked Questions
          </h1>
          <p className="mt-6 text-lg text-on-surface-variant max-w-2xl">
            Answers to the most common questions about external wall insulation costs,
            SEAI grants, planning permission, and whether it&apos;s worth it.
          </p>
        </section>

        <section className="px-6 md:px-12 pb-20 max-w-4xl mx-auto space-y-12">
          {GROUPS.map((group) => (
            <div key={group.heading} className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-display font-extrabold text-tertiary-container">
                {group.heading}
              </h2>
              <div className="space-y-3">
                {group.items.map((item) => (
                  <details
                    key={item.q}
                    className="bg-white rounded-xl shadow-sm overflow-hidden border border-outline-variant/10 group"
                  >
                    <summary className="w-full px-6 md:px-8 py-5 text-left flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-bold text-base md:text-lg text-tertiary-container pr-4">
                        {item.q}
                      </h3>
                      <span className="material-symbols-outlined text-tertiary-container transition-transform group-open:rotate-180 shrink-0">
                        expand_more
                      </span>
                    </summary>
                    <div className="px-6 md:px-8 pb-6 text-on-surface-variant leading-relaxed">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="bg-primary-fixed/10 py-16 md:py-20 px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-display font-extrabold text-tertiary-container">
              Still have a question?
            </h2>
            <p className="text-on-surface-variant text-lg">
              Our Dublin team is happy to talk you through grants, costs and timelines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href={`tel:${SITE.phone}`}
                className="bg-tertiary-container text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-3"
              >
                <span className="material-symbols-outlined">call</span> Call{" "}
                {SITE.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="bg-primary-gradient text-on-primary-fixed px-8 py-4 rounded-lg font-bold"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
