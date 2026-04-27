import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { BreadcrumbJsonLd } from "../../components/JsonLd";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | External Insulation Dublin",
  description:
    "Privacy policy for External Insulation Dublin — how we collect, use and protect your personal data under GDPR.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE.url + "/" },
          { name: "Privacy Policy", url: SITE.url + "/privacy-policy" },
        ]}
      />
      <main className="pt-24">
        <div className="px-6 md:px-12 py-4 max-w-7xl mx-auto">
          <nav className="flex text-sm text-on-surface-variant/70 font-medium">
            <Link href="/" className="hover:text-tertiary-container">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-tertiary-container font-semibold">Privacy Policy</span>
          </nav>
        </div>

        <article className="px-6 md:px-12 py-8 max-w-3xl mx-auto prose-styled space-y-8 text-on-surface-variant leading-relaxed">
          <header>
            <h1 className="text-3xl md:text-4xl font-display font-extrabold text-tertiary-container mb-4">
              Privacy Policy
            </h1>
            <p className="text-sm text-on-surface-variant">Last updated: 27 April 2026</p>
          </header>

          <section className="space-y-4">
            <p>
              External Insulation Dublin (&ldquo;we&rdquo;, &ldquo;our&rdquo;,
              &ldquo;us&rdquo;) respects your privacy and is committed to protecting your
              personal data. This policy explains how we collect, use and protect your
              information when you visit our website or contact us for a quote.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-tertiary-container">
              1. Data we collect
            </h2>
            <p>
              When you submit a quote form or contact us by phone or email we collect:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your phone number</li>
              <li>Your home address (for survey and quote purposes)</li>
              <li>Property details you choose to share with us</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-tertiary-container">
              2. How we use your data
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To respond to your quote request</li>
              <li>To carry out site surveys and prepare proposals</li>
              <li>To submit SEAI grant applications on your behalf (with your consent)</li>
              <li>To meet our legal and accounting obligations</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-tertiary-container">3. Legal basis</h2>
            <p>
              We process your data on the legal bases of consent (when you submit our
              forms) and contractual necessity (to deliver the work you ask us to perform).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-tertiary-container">
              4. Sharing your data
            </h2>
            <p>
              We do not sell your data. We may share limited data with the Sustainable
              Energy Authority of Ireland (SEAI) when administering grant applications and
              with registered BER assessors when arranging your post-works assessment. All
              third parties are bound by confidentiality and GDPR obligations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-tertiary-container">5. Retention</h2>
            <p>
              We retain quote enquiries for up to 24 months. Project records are retained
              for 7 years to meet warranty and tax obligations, after which they are
              securely destroyed.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-tertiary-container">6. Your rights</h2>
            <p>Under GDPR you have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Object to or restrict our processing of your data</li>
              <li>Lodge a complaint with the Data Protection Commission</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-tertiary-container">7. Cookies</h2>
            <p>
              Our website uses only essential cookies required for the site to function.
              We do not use marketing or third-party tracking cookies without your
              consent.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-tertiary-container">8. Contact</h2>
            <p>
              For privacy enquiries please contact us at{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="text-tertiary-container underline"
              >
                {SITE.email}
              </a>{" "}
              or write to {SITE.name}, {SITE.address.full}.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
