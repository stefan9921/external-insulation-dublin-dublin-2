import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import {
  BreadcrumbJsonLd,
  LocalBusinessJsonLd,
} from "./JsonLd";
import { SITE } from "../lib/site";

type Props = {
  area: string; // e.g., "Blackrock"
  slug: string; // e.g., "blackrock"
  intro: string;
  context: string;
  surroundingAreas: string[];
  caseStudy: {
    title: string;
    quote: string;
    author: string;
    grant: string;
    reduction: string;
  };
  imageSrc: string;
};

export default function AreaPage({
  area,
  slug,
  intro,
  context,
  surroundingAreas,
  caseStudy,
  imageSrc,
}: Props) {
  return (
    <>
      <Header active="areas" />
      <LocalBusinessJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE.url + "/" },
          { name: "Areas", url: SITE.url + "/areas/" + slug },
          { name: area, url: SITE.url + "/areas/" + slug },
        ]}
      />

      <main className="pt-20">
        {/* Breadcrumb */}
        <section className="bg-surface-container-low py-4">
          <div className="max-w-7xl mx-auto px-6 flex items-center gap-2 text-sm text-on-surface-variant font-medium">
            <Link href="/" className="hover:text-tertiary-container">
              Home
            </Link>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-on-surface-variant">Areas</span>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-tertiary-container">{area}</span>
          </div>
        </section>

        {/* Hero */}
        <section className="py-12 md:py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-secondary-fixed px-4 py-1.5 rounded-full text-on-secondary-fixed text-sm font-semibold">
                <span className="material-symbols-outlined fill text-sm">eco</span>
                SEAI Registered Contractor
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-tertiary-container leading-[1.1] tracking-tight">
                External Wall Insulation in{" "}
                <span className="underline decoration-primary-fixed decoration-8 underline-offset-4">
                  {area}
                </span>
                , Dublin
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-xl">
                {intro}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${SITE.phone}`}
                  className="bg-primary-gradient px-8 py-4 rounded-lg font-bold text-on-primary-fixed text-center shadow-lg shadow-primary/20 hover:-translate-y-1 transition-all"
                >
                  Call {SITE.phoneDisplay}
                </a>
                <Link
                  href="/contact"
                  className="bg-secondary-container px-8 py-4 rounded-lg font-bold text-on-secondary-container text-center hover:bg-secondary-fixed transition-colors"
                >
                  Get {area} Quote
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  "100% SEAI Grant Approved",
                  "Certified Irish Installers",
                  "25-Year Guarantee",
                  `Local ${area} Expertise`,
                ].map((label) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 text-on-surface-variant font-medium"
                  >
                    <span className="material-symbols-outlined text-tertiary-container">
                      check_circle
                    </span>{" "}
                    {label}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-tertiary-container/5 rounded-[2rem] -rotate-2" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={`Classic ${area} residence after external wall insulation`}
                className="relative rounded-xl shadow-2xl z-10 w-full h-[400px] md:h-[500px] object-cover"
                src={imageSrc}
              />
            </div>
          </div>
        </section>

        {/* Why Local */}
        <section className="py-16 md:py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 space-y-6">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-tertiary-container leading-tight">
                  Why {area} Homes Need External Wall Insulation
                </h2>
                <p className="text-lg text-on-surface-variant leading-relaxed">
                  {context}
                </p>
                <p className="text-lg text-on-surface-variant leading-relaxed">
                  External insulation acts as a protective thermal envelope, preventing
                  dampness and preserving the structural integrity of {area}&apos;s iconic
                  architecture.
                </p>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-surface-container-low p-8 rounded-xl space-y-4 hover:shadow-md transition-shadow">
                  <span className="material-symbols-outlined text-4xl text-tertiary-container">
                    home_work
                  </span>
                  <h3 className="text-xl font-bold text-on-surface">Older housing stock</h3>
                  <p className="text-on-surface-variant">
                    Specifically engineered solutions for the solid brick and early cavity
                    builds common across {area}.
                  </p>
                </div>
                <div className="bg-surface-container-low p-8 rounded-xl space-y-4 hover:shadow-md transition-shadow">
                  <span className="material-symbols-outlined text-4xl text-tertiary-container">
                    architecture
                  </span>
                  <h3 className="text-xl font-bold text-on-surface">Period-friendly</h3>
                  <p className="text-on-surface-variant">
                    Sensitive application techniques that respect the character of period
                    facades.
                  </p>
                </div>
                <div className="bg-surface-container-low p-8 rounded-xl space-y-4 hover:shadow-md transition-shadow md:col-span-2">
                  <span className="material-symbols-outlined text-4xl text-tertiary-container">
                    visibility
                  </span>
                  <h3 className="text-xl font-bold text-on-surface">Conservation aware</h3>
                  <p className="text-on-surface-variant">
                    Expert guidance on planning requirements for homes within {area}&apos;s
                    Architectural Conservation Areas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Offering */}
        <section className="py-16 md:py-20 bg-secondary-container/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-surface-container-lowest rounded-xl p-8 md:p-12 shadow-sm border border-outline-variant/10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="bg-secondary-fixed w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined fill text-4xl md:text-5xl text-tertiary-container">
                  eco
                </span>
              </div>
              <div className="flex-grow space-y-4 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-headline font-bold text-tertiary-container">
                  SEAI Home Energy Grants
                </h2>
                <p className="text-lg text-on-surface-variant max-w-2xl">
                  Unlock up to{" "}
                  <span className="font-bold text-tertiary-container">€8,000</span> in
                  direct funding for your external insulation project. We handle all the
                  paperwork and ensure your installation meets the highest efficiency
                  standards.
                </p>
                <Link
                  href="/services/seai-external-insulation-grants"
                  className="inline-flex items-center gap-2 text-tertiary-container font-bold hover:underline"
                >
                  Learn more about insulation grants{" "}
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
              <div className="text-center bg-tertiary-container text-white p-6 rounded-xl shrink-0">
                <div className="text-3xl md:text-4xl font-bold">€8,000</div>
                <div className="text-xs md:text-sm opacity-80 uppercase tracking-widest">
                  Maximum Grant
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-tertiary-container text-center mb-12 md:mb-16">
              A Recent {area} Install
            </h2>
            <div className="bg-surface-container-low rounded-[2rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative group h-64 md:h-[400px] lg:h-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt={`Before: home in ${area}`}
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                  />
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Before
                  </div>
                </div>
                <div className="relative group h-64 md:h-[400px] lg:h-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt={`After: home in ${area}`}
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80"
                  />
                  <div className="absolute top-4 left-4 bg-tertiary-container text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    After
                  </div>
                </div>
              </div>
              <div className="p-8 lg:p-16 flex flex-col justify-center space-y-8">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-tertiary-container mb-4">
                    {caseStudy.title}
                  </h3>
                  <p className="text-on-surface-variant italic text-lg">
                    &ldquo;{caseStudy.quote}&rdquo;
                  </p>
                  <p className="mt-4 font-bold text-tertiary-container">
                    — {caseStudy.author}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6 pt-4 border-t border-outline-variant/30">
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-tertiary-container">
                      {caseStudy.grant}
                    </div>
                    <div className="text-sm text-on-surface-variant uppercase font-semibold">
                      SEAI Grant Applied
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-tertiary-container">
                      {caseStudy.reduction}
                    </div>
                    <div className="text-sm text-on-surface-variant uppercase font-semibold">
                      Energy Reduction
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div className="text-lg md:text-xl font-bold text-tertiary-container">
                      U-Value Improved
                    </div>
                    <div className="text-on-surface-variant">
                      From 2.1 W/m²K to 0.27 W/m²K
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NAP / Service Area */}
        <section className="py-16 md:py-20 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-headline font-bold text-tertiary-container mb-8">
                Serving {area} &amp; Surrounding Areas
              </h2>
              <p className="text-on-surface-variant mb-8 text-lg">
                Our dedicated insulation crews operate daily throughout South Dublin,
                providing expert services to:
              </p>
              <div className="grid grid-cols-2 gap-y-4">
                {surroundingAreas.map((a) => (
                  <div key={a} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary-fixed rounded-full" />
                    <span className="font-medium">{a}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-secondary-container p-8 md:p-12 rounded-xl shadow-lg space-y-8">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined fill text-tertiary-container mt-1">
                  location_on
                </span>
                <div>
                  <div className="font-bold text-on-secondary-container">{SITE.name}</div>
                  <div className="text-on-secondary-container/80">{SITE.address.full}</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined fill text-tertiary-container">
                  phone
                </span>
                <a
                  href={`tel:${SITE.phone}`}
                  className="font-bold text-on-secondary-container"
                >
                  {SITE.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined fill text-tertiary-container">
                  mail
                </span>
                <a
                  href={`mailto:${SITE.email}`}
                  className="font-bold text-on-secondary-container break-all"
                >
                  {SITE.email}
                </a>
              </div>
              <div className="flex items-start gap-4 pt-4 border-t border-on-secondary-container/10">
                <span className="material-symbols-outlined fill text-tertiary-container">
                  schedule
                </span>
                <div>
                  <div className="font-bold text-on-secondary-container">Mon - Sunday</div>
                  <div className="text-on-secondary-container/80">8:00AM - 8:00PM</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-24 bg-primary-fixed/10">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-8 md:space-y-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-tertiary-container">
              Get Your Free {area} External Insulation Quote
            </h2>
            <p className="text-lg md:text-xl text-on-surface-variant">
              Ready to lower your energy bills and beautify your home? Join hundreds of
              satisfied {area} homeowners today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                className="w-full sm:w-auto bg-tertiary-container text-white px-10 py-5 rounded-lg font-bold flex items-center justify-center gap-3 hover:scale-105 transition-transform"
                href={`tel:${SITE.phone}`}
              >
                <span className="material-symbols-outlined">call</span> Call Now
              </a>
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-primary-gradient text-on-primary-fixed px-10 py-5 rounded-lg font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform text-center"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
