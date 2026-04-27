import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SITE } from "../lib/site";

export const metadata: Metadata = {
  title: "Page Not Found | External Insulation Dublin",
  description:
    "The page you were looking for could not be found. Browse SEAI grants, service areas, or contact External Insulation Dublin for help.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-[70vh] flex items-center justify-center">
        <div className="px-6 md:px-12 py-20 max-w-3xl mx-auto text-center space-y-8">
          <p className="text-sm font-bold uppercase tracking-widest text-secondary">
            Error 404
          </p>
          <h1 className="text-5xl md:text-6xl font-display font-extrabold text-tertiary-container leading-tight tracking-tight">
            We couldn&apos;t find that page
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-xl mx-auto">
            The page you were looking for has either moved or no longer exists. You can
            head back home or jump straight to the most popular sections of our site.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/"
              className="bg-tertiary-container text-white px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-all"
            >
              Back to homepage
            </Link>
            <Link
              href="/services/seai-external-insulation-grants"
              className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-lg font-bold hover:bg-secondary-fixed transition-colors"
            >
              SEAI Grants
            </Link>
            <a
              href={`tel:${SITE.phone}`}
              className="bg-primary-gradient text-on-primary-fixed px-8 py-4 rounded-lg font-bold shadow-lg"
            >
              Call {SITE.phoneDisplay}
            </a>
          </div>
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto text-sm">
            <Link href="/areas/blackrock" className="text-tertiary-container hover:underline">
              Blackrock
            </Link>
            <Link href="/areas/dalkey" className="text-tertiary-container hover:underline">
              Dalkey
            </Link>
            <Link href="/faq" className="text-tertiary-container hover:underline">
              FAQ
            </Link>
            <Link href="/contact" className="text-tertiary-container hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
