import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-tertiary-container text-white w-full rounded-t-[2rem] mt-20 pt-16 pb-8 border-t border-emerald-800/30 px-6 md:px-8 py-12 flex flex-col items-center gap-8">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 w-full">
        <div className="col-span-2 md:col-span-1 space-y-6">
          <div className="text-xl font-extrabold text-white font-headline">
            External Insulation Dublin
          </div>
          <p className="text-sm leading-relaxed text-emerald-50/80">
            SEAI-approved external wall insulation contractors based in Dublin 2. Dedicated
            to reducing carbon footprints and energy bills across the capital.
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="font-bold uppercase text-xs tracking-widest text-primary-fixed">
            Services
          </h4>
          <ul className="space-y-3 text-sm text-emerald-100/70">
            <li>
              <Link
                href="/services/seai-external-insulation-grants"
                className="hover:text-white transition-colors underline decoration-primary-fixed decoration-2 underline-offset-4"
              >
                SEAI External Insulation Grants
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-white transition-colors">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-bold uppercase text-xs tracking-widest text-primary-fixed">
            Areas
          </h4>
          <ul className="space-y-3 text-sm text-emerald-100/70">
            <li>
              <Link href="/areas/blackrock" className="hover:text-white transition-colors">
                Blackrock
              </Link>
            </li>
            <li>
              <Link href="/areas/dalkey" className="hover:text-white transition-colors">
                Dalkey
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-bold uppercase text-xs tracking-widest text-primary-fixed">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-emerald-100/70">
            <li>77 Sir John Rogerson&apos;s Quay</li>
            <li>Grand Canal Dock, Dublin 2, D02 VK60</li>
            <li>
              <a href="tel:+35312308892" className="hover:text-white transition-colors">
                +353 1 230 8892
              </a>
            </li>
            <li>
              <a
                href="mailto:info@externalinsulationdublin.ie"
                className="hover:text-white transition-colors break-all"
              >
                info@externalinsulationdublin.ie
              </a>
            </li>
            <li>Mon - Sun: 8:00 AM - 8:00 PM</li>
          </ul>
        </div>
      </div>

      <div className="w-full pt-8 mt-8 border-t border-emerald-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-emerald-100/40 text-center md:text-left">
          © {new Date().getFullYear()} External Insulation Dublin. All rights reserved.
          SEAI Registered Contractor.
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm justify-center">
          <Link
            href="/privacy-policy"
            className="text-secondary-fixed font-semibold hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-secondary-fixed font-semibold hover:text-white transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
