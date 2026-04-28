import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { BreadcrumbJsonLd, WebPageJsonLd } from "../../components/JsonLd";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: { absolute: "Terms of Service | External Insulation Dublin" },
  description:
    "Terms of service governing the use of the External Insulation Dublin website and submission of quote requests.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <WebPageJsonLd
        name="Terms of Service"
        description="Terms of service governing the use of the External Insulation Dublin website and submission of quote requests."
        url={SITE.url + "/terms"}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE.url + "/" },
          { name: "Terms of Service", url: SITE.url + "/terms" },
        ]}
      />
      <main className="pt-24">
        <div className="px-6 md:px-12 py-4 max-w-7xl mx-auto">
          <nav className="flex text-sm text-on-surface-variant/70 font-medium">
            <Link href="/" className="hover:text-tertiary-container">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-tertiary-container font-semibold">Terms of Service</span>
          </nav>
        </div>

        <article className="px-6 md:px-12 py-8 max-w-3xl mx-auto space-y-8 text-on-surface-variant leading-relaxed">
          <header>
            <h1 className="text-3xl md:text-4xl font-display font-extrabold text-tertiary-container mb-4">
              Terms of Service
            </h1>
            <p className="text-sm text-on-surface-variant">Last updated: 27 April 2026</p>
          </header>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-tertiary-container">1. About these terms</h2>
            <p>
              These terms govern your use of the External Insulation Dublin website
              ({SITE.url}) and the submission of quote requests through this site. By
              using the site you accept these terms in full.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-tertiary-container">2. Use of the site</h2>
            <p>
              You may browse and read the content of this site for personal, non-commercial
              purposes. You may not copy, reproduce, modify, distribute or republish content
              from this site without prior written permission.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-tertiary-container">3. Quotes and pricing</h2>
            <p>
              Pricing information shown on this website is indicative only and not a
              binding offer. A binding quote is only issued in writing after a free site
              survey of your property.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-tertiary-container">4. SEAI grants</h2>
            <p>
              We are an SEAI registered contractor and assist with the administration of
              SEAI grant applications. Final grant approval and payment is decided
              exclusively by SEAI and is not guaranteed by us.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-tertiary-container">
              5. Intellectual property
            </h2>
            <p>
              All website content (text, images, logos, layout) is owned by External
              Insulation Dublin or its licensors and is protected by copyright. The
              External Insulation Dublin name and logo are trade marks of the company.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-tertiary-container">
              6. Limitation of liability
            </h2>
            <p>
              We make reasonable efforts to keep website content accurate and up to date
              but make no guarantees. To the maximum extent permitted by law we exclude
              liability for any loss arising from use of, or reliance on, the information
              on this site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-tertiary-container">7. Governing law</h2>
            <p>
              These terms are governed by the laws of Ireland. Any disputes will be subject
              to the exclusive jurisdiction of the Irish courts.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-tertiary-container">8. Contact</h2>
            <p>
              For any questions about these terms please contact us at{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="text-tertiary-container underline"
              >
                {SITE.email}
              </a>
              .
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
