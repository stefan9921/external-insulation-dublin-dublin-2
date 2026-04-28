import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  AboutPageJsonLd,
  BreadcrumbJsonLd,
  LocalBusinessJsonLd,
} from "../../components/JsonLd";
import { SITE } from "../../lib/site";

const PAGE_URL = SITE.url + "/about";
const PAGE_TITLE = "About External Insulation Dublin | SEAI Approved Contractor";
const PAGE_DESCRIPTION =
  "Learn about External Insulation Dublin — SEAI registered external wall insulation contractors based in Dublin 2 serving homeowners across Dublin.";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "/about" },
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

export default function AboutPage() {
  return (
    <>
      <Header active="about" />
      <LocalBusinessJsonLd />
      <AboutPageJsonLd
        name={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        url={PAGE_URL}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE.url + "/" },
          { name: "About", url: SITE.url + "/about" },
        ]}
      />

      <main className="pt-24">
        <div className="px-6 md:px-12 py-4 max-w-7xl mx-auto">
          <nav className="flex text-sm text-on-surface-variant/70 font-medium">
            <Link href="/" className="hover:text-tertiary-container">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-tertiary-container font-semibold">About</span>
          </nav>
        </div>

        <section className="px-6 md:px-12 py-12 md:py-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-secondary-fixed px-4 py-1.5 rounded-full text-on-secondary-fixed text-sm font-semibold">
              <span className="material-symbols-outlined fill text-sm">eco</span>
              SEAI Registered Contractor
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-tertiary-container leading-tight tracking-tight">
              About External Insulation Dublin
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              External Insulation Dublin is a Dublin 2 based SEAI-approved external wall
              insulation contractor. For more than 20 years our team has wrapped Irish
              homes with NSAI-certified systems, helping homeowners cut energy bills,
              warm cold rooms and unlock SEAI grants of up to €8,000.
            </p>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              We focus on doing one thing extremely well — external wall insulation,
              installed correctly first time, with the paperwork handled on your behalf.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="bg-primary-gradient text-on-primary-fixed px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:opacity-90 transition-all"
              >
                Get a Free Quote
              </Link>
              <a
                href={`tel:${SITE.phone}`}
                className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary-fixed transition-colors text-center"
              >
                Call {SITE.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary-fixed/10 rounded-xl blur-2xl" />
            <Image
              alt="External Insulation Dublin installation team fitting external wall insulation on a Dublin home"
              className="rounded-xl shadow-2xl relative z-10 w-full h-[400px] md:h-[500px] object-cover"
              src="/images/about-team.jpg"
              width={1600}
              height={900}
              priority
            />
          </div>
        </section>

        <section className="py-16 px-6 max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-tertiary-container">
            Our Story
          </h2>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            External Insulation Dublin was set up to fix one specific problem — Irish homes
            that were too cold, too damp and too expensive to heat. Most of the housing stock
            across Dublin was built before 2011, when wall insulation standards were still
            catching up to modern climate targets. By specialising exclusively in external
            wall insulation we have built the deep installation expertise and SEAI grant
            knowledge that homeowners need to get the upgrade done correctly the first time.
          </p>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Over two decades we have wrapped more than 1,200 homes — from apartments in the
            Docklands and terraces in Ranelagh to detached houses in Foxrock and coastal
            semi-detached homes in Blackrock and Dalkey. Every system we install is NSAI
            Agrément certified for Irish weather and finished with breathable, weather-tough
            silicone or silicone-acrylic render.
          </p>
          <h3 className="text-2xl font-bold text-tertiary-container pt-6">Our Values</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                t: "Specialist focus",
                d: "We only install external wall insulation. No subcontracting, no diversification.",
              },
              {
                t: "Honest pricing",
                d: "Transparent per-m² rates and a fixed quote after the free site survey.",
              },
              {
                t: "Grant ownership",
                d: "We complete and submit the full SEAI application on your behalf.",
              },
              {
                t: "Clean job sites",
                d: "Daily clean-down, careful access protection and minimal garden disruption.",
              },
            ].map((v) => (
              <li
                key={v.t}
                className="bg-surface-container-low p-5 rounded-xl border border-outline-variant/20"
              >
                <div className="font-bold text-tertiary-container mb-1">{v.t}</div>
                <div className="text-on-surface-variant text-sm">{v.d}</div>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-surface-container-low py-16 md:py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-tertiary-container text-center mb-12">
              Our Credentials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "verified",
                  title: "SEAI Registered",
                  desc: "Listed on the SEAI registered contractor panel for external wall insulation works in Ireland.",
                },
                {
                  icon: "verified_user",
                  title: "NSAI Approved Systems",
                  desc: "We install Agrément-certified EWI systems engineered for Irish weather and building stock.",
                },
                {
                  icon: "history",
                  title: "20+ Years Experience",
                  desc: "Two decades of wall upgrades across Dublin, with structural and weather warranties on every install.",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="bg-white p-8 rounded-xl shadow-sm space-y-4 text-center"
                >
                  <span className="material-symbols-outlined text-4xl text-tertiary-container">
                    {c.icon}
                  </span>
                  <h3 className="text-xl font-bold text-tertiary-container">{c.title}</h3>
                  <p className="text-on-surface-variant">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-tertiary-container mb-6">
                Service Area
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-4">
                We are based at {SITE.address.full} and travel daily across the Greater
                Dublin Area. Our crews regularly install in:
              </p>
              <ul className="grid grid-cols-2 gap-3 mt-6">
                {[
                  "Dublin city",
                  "Blackrock",
                  "Dalkey",
                  "Stillorgan",
                  "Dun Laoghaire",
                  "Booterstown",
                  "Mount Merrion",
                  "Monkstown",
                ].map((a) => (
                  <li key={a} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-tertiary-container">
                      place
                    </span>
                    <span className="font-medium">{a}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-secondary-container rounded-xl overflow-hidden h-80 md:h-[400px]">
              <iframe
                title="Office location"
                src="https://www.google.com/maps?q=Sir+John+Rogersons+Quay+Dublin+2&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
