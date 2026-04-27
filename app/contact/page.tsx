import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { BreadcrumbJsonLd, LocalBusinessJsonLd } from "../../components/JsonLd";
import { SITE } from "../../lib/site";

export const metadata: Metadata = {
  title: "Contact External Insulation Dublin | Free Quote +35312308892",
  description:
    "Contact External Insulation Dublin for a free external wall insulation quote. Phone +35312308892 or email info@externalinsulationdublin.ie.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Header active="contact" />
      <LocalBusinessJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE.url + "/" },
          { name: "Contact", url: SITE.url + "/contact" },
        ]}
      />

      <main className="pt-24">
        <div className="px-6 md:px-12 py-4 max-w-7xl mx-auto">
          <nav className="flex text-sm text-on-surface-variant/70 font-medium">
            <Link href="/" className="hover:text-tertiary-container">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-tertiary-container font-semibold">Contact</span>
          </nav>
        </div>

        <section className="px-6 md:px-12 py-12 md:py-16 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-tertiary-container leading-tight tracking-tight">
            Contact External Insulation Dublin
          </h1>
          <p className="mt-4 text-lg text-on-surface-variant max-w-2xl">
            Tell us a little about your home and we&apos;ll come back within an hour during
            business hours with a free quote and SEAI grant guidance.
          </p>
        </section>

        <section className="px-6 md:px-12 pb-20 max-w-7xl mx-auto">
          <div className="bg-surface rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 space-y-6">
              <h2 className="text-2xl md:text-3xl font-extrabold font-headline text-tertiary-container">
                Get Your Free Quote
              </h2>
              <form
                className="space-y-4"
                action={`mailto:${SITE.email}`}
                method="post"
                encType="text/plain"
              >
                <div>
                  <label className="block text-sm font-medium text-on-surface-variant mb-1">
                    Full Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full p-4 rounded-xl border border-outline-variant/30 bg-surface-container-low focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-on-surface-variant mb-1">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full p-4 rounded-xl border border-outline-variant/30 bg-surface-container-low focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-on-surface-variant mb-1">
                    Phone
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    className="w-full p-4 rounded-xl border border-outline-variant/30 bg-surface-container-low focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="+353 ..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-on-surface-variant mb-1">
                    Property type
                  </label>
                  <select
                    name="property"
                    className="w-full p-4 rounded-xl border border-outline-variant/30 bg-surface-container-low focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  >
                    <option>Apartment</option>
                    <option>Mid-terrace</option>
                    <option>Semi-detached / End-terrace</option>
                    <option>Detached</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-on-surface-variant mb-1">
                    Tell us about your project
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full p-4 rounded-xl border border-outline-variant/30 bg-surface-container-low focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="Year built, address, anything else..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-tertiary-container text-white font-bold py-4 rounded-xl hover:bg-on-tertiary-fixed-variant transition-all"
                >
                  Send Request
                </button>
              </form>
            </div>
            <div className="lg:w-1/2 bg-secondary-container p-8 md:p-12 lg:p-16 flex flex-col gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-tertiary-container text-3xl">
                    location_on
                  </span>
                  <div>
                    <h4 className="font-bold text-tertiary-container uppercase text-sm tracking-widest mb-1">
                      Office
                    </h4>
                    <p className="text-on-secondary-container text-lg">
                      {SITE.address.full}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-tertiary-container text-3xl">
                    call
                  </span>
                  <div>
                    <h4 className="font-bold text-tertiary-container uppercase text-sm tracking-widest mb-1">
                      Phone
                    </h4>
                    <a
                      href={`tel:${SITE.phone}`}
                      className="text-on-secondary-container text-lg"
                    >
                      {SITE.phoneDisplay}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-tertiary-container text-3xl">
                    mail
                  </span>
                  <div>
                    <h4 className="font-bold text-tertiary-container uppercase text-sm tracking-widest mb-1">
                      Email
                    </h4>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-on-secondary-container text-lg break-all"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-tertiary-container text-3xl">
                    schedule
                  </span>
                  <div>
                    <h4 className="font-bold text-tertiary-container uppercase text-sm tracking-widest mb-1">
                      Opening Hours
                    </h4>
                    <p className="text-on-secondary-container text-lg">
                      Mon - Sun: 8:00 AM - 8:00 PM
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden h-56 border-4 border-white shadow-lg mt-auto">
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
          </div>
        </section>

        <section className="bg-surface-container-low py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-extrabold text-tertiary-container mb-8 text-center">
              Service Areas
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                href="/areas/blackrock"
                className="bg-white p-5 rounded-xl shadow-sm border border-outline-variant/10 hover:shadow-md flex items-center gap-3"
              >
                <span className="material-symbols-outlined text-tertiary-container">
                  place
                </span>
                <span className="font-bold text-tertiary-container">Blackrock</span>
              </Link>
              <Link
                href="/areas/dalkey"
                className="bg-white p-5 rounded-xl shadow-sm border border-outline-variant/10 hover:shadow-md flex items-center gap-3"
              >
                <span className="material-symbols-outlined text-tertiary-container">
                  place
                </span>
                <span className="font-bold text-tertiary-container">Dalkey</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
