import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  LocalBusinessJsonLd,
} from "../../../components/JsonLd";
import { SITE } from "../../../lib/site";

export const metadata: Metadata = {
  title: "SEAI External Insulation Grants Ireland | Cost & Eligibility",
  description:
    "Apply for SEAI external wall insulation grants in Ireland. Up to EUR 8,000 off external insulation. Check eligibility and get a free quote in Dublin.",
  alternates: {
    canonical: "/services/seai-external-insulation-grants",
  },
};

const FAQS = [
  {
    q: "How long does the SEAI grant application take?",
    a: "Most SEAI external wall insulation grant approvals currently take 4-6 weeks from submission. We complete and submit the full application on your behalf, then schedule the installation as soon as approval lands.",
  },
  {
    q: "Can I live in the house during installation?",
    a: "Yes. External wall insulation is fitted to the outside of the property, so you can stay in your home throughout the works. The team minimises disruption to garden access and windows during the installation.",
  },
  {
    q: "What is the difference between internal and external insulation?",
    a: "External insulation is applied to the outside of the wall and protected with a render finish — it preserves internal floor area and removes cold bridging. Internal dry-lining is fitted to the inside of walls and reduces room size slightly.",
  },
  {
    q: "Does the grant cover 100% of the cost?",
    a: "No. SEAI grants currently contribute up to €8,000 toward the cost of external wall insulation depending on dwelling type. The homeowner pays the balance after the grant is applied.",
  },
  {
    q: "Do you help with the post-works BER assessment?",
    a: "Yes. A post-works BER assessment is mandatory for SEAI grant payment. We coordinate the assessment with a registered BER assessor as part of our standard service.",
  },
  {
    q: "What happens if my house was built after 2011?",
    a: "Properties built and first occupied after 2011 are not eligible for the SEAI external wall insulation grant. We can still install the system privately and provide a transparent quote.",
  },
];

export default function GrantsPage() {
  return (
    <>
      <Header active="grants" />
      <LocalBusinessJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE.url + "/" },
          { name: "Services", url: SITE.url + "/services/seai-external-insulation-grants" },
          {
            name: "SEAI External Insulation Grants",
            url: SITE.url + "/services/seai-external-insulation-grants",
          },
        ]}
      />
      <FaqJsonLd items={FAQS} />

      <main className="pt-24">
        {/* Breadcrumbs */}
        <div className="px-6 md:px-12 py-4 max-w-7xl mx-auto">
          <nav className="flex text-sm text-on-surface-variant/70 font-medium">
            <Link href="/" className="hover:text-tertiary-container">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-tertiary-container font-semibold">
              SEAI External Insulation Grants
            </span>
          </nav>
        </div>

        {/* Hero */}
        <section className="px-6 md:px-12 py-12 md:py-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-tertiary-container leading-tight tracking-tight">
                SEAI External Wall{" "}
                <span className="relative inline-block">
                  Insulation Grants
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-primary-fixed/40 -z-10" />
                </span>{" "}
                — Eligibility, Amounts &amp; Process
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-on-surface-variant max-w-xl">
                Unlock up to{" "}
                <span className="font-bold text-tertiary-container">€8,000</span> in
                government funding to transform your home&apos;s energy efficiency.
                Dublin&apos;s leading SEAI registered contractor helping you save up to 35%
                on heating bills.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-primary-gradient text-on-primary-fixed px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:opacity-90 transition-all active:scale-95 text-center"
                >
                  Check My Eligibility
                </Link>
                <a
                  href={`tel:${SITE.phone}`}
                  className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary-fixed transition-all active:scale-95 text-center"
                >
                  Call {SITE.phoneDisplay}
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  "SEAI Registered",
                  "NSAI Approved",
                  "Fully Insured",
                  "20+ Year Warranty",
                ].map((label) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 font-medium text-tertiary-container"
                  >
                    <span className="material-symbols-outlined fill text-tertiary-container">
                      check_circle
                    </span>{" "}
                    {label}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Contractor applying external insulation boards"
                  className="w-full h-[420px] md:h-[600px] object-cover"
                  src="https://images.unsplash.com/photo-1581094488379-6a99b9bf1bde?auto=format&fit=crop&w=1200&q=80"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-tertiary-container text-on-tertiary p-4 md:p-6 rounded-xl shadow-xl max-w-xs">
                <p className="text-xs md:text-sm uppercase tracking-widest font-bold opacity-80 mb-2">
                  Live Update
                </p>
                <p className="text-base md:text-lg font-semibold italic leading-snug">
                  &ldquo;Grant approvals are currently taking 4-6 weeks. Secure your slot
                  for winter now.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Grant Amounts Table */}
        <section className="bg-surface-container-low py-20 md:py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-tertiary-container mb-4">
                SEAI Grant Amounts
              </h2>
              <p className="text-lg text-on-surface-variant">
                The amount you receive depends on your property type.
              </p>
            </div>
            <div className="overflow-hidden rounded-xl shadow-sm bg-white">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead className="bg-tertiary-container text-white">
                    <tr>
                      <th className="py-5 md:py-6 px-6 md:px-8 text-lg md:text-xl font-bold">
                        Dwelling Type
                      </th>
                      <th className="py-5 md:py-6 px-6 md:px-8 text-lg md:text-xl font-bold">
                        Grant Amount
                      </th>
                      <th className="py-5 md:py-6 px-6 md:px-8 text-lg md:text-xl font-bold">
                        Eligibility
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/20">
                    <tr className="hover:bg-surface-container transition-colors">
                      <td className="py-5 md:py-6 px-6 md:px-8 font-semibold text-base md:text-lg">
                        Apartment (Mid or End Floor)
                      </td>
                      <td className="py-5 md:py-6 px-6 md:px-8 text-xl md:text-2xl font-extrabold text-tertiary-container">
                        €3,500
                      </td>
                      <td className="py-5 md:py-6 px-6 md:px-8 text-on-surface-variant">
                        Built &amp; occupied pre-2011
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container transition-colors">
                      <td className="py-5 md:py-6 px-6 md:px-8 font-semibold text-base md:text-lg">
                        Mid-Terrace House
                      </td>
                      <td className="py-5 md:py-6 px-6 md:px-8 text-xl md:text-2xl font-extrabold text-tertiary-container">
                        €3,500
                      </td>
                      <td className="py-5 md:py-6 px-6 md:px-8 text-on-surface-variant">
                        Built &amp; occupied pre-2011
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container transition-colors">
                      <td className="py-5 md:py-6 px-6 md:px-8 font-semibold text-base md:text-lg">
                        Semi-Detached / End-Terrace
                      </td>
                      <td className="py-5 md:py-6 px-6 md:px-8 text-xl md:text-2xl font-extrabold text-tertiary-container">
                        €6,000
                      </td>
                      <td className="py-5 md:py-6 px-6 md:px-8 text-on-surface-variant">
                        Built &amp; occupied pre-2011
                      </td>
                    </tr>
                    <tr className="bg-secondary-container/30 border-l-4 border-secondary transition-colors">
                      <td className="py-5 md:py-6 px-6 md:px-8 font-semibold text-base md:text-lg">
                        <div className="flex items-center gap-3 flex-wrap">
                          Detached House
                          <span className="bg-secondary-container text-on-secondary-container text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
                            Most Popular
                          </span>
                        </div>
                      </td>
                      <td className="py-5 md:py-6 px-6 md:px-8 text-xl md:text-2xl font-extrabold text-tertiary-container">
                        €8,000
                      </td>
                      <td className="py-5 md:py-6 px-6 md:px-8 text-on-surface-variant">
                        Built &amp; occupied pre-2011
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility Checklist */}
        <section className="py-20 md:py-24 px-6 max-w-7xl mx-auto">
          <div className="bg-secondary-container rounded-xl p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-on-secondary-container mb-6">
                Are You Eligible for the Grant?
              </h2>
              <p className="text-on-secondary-container/80 text-lg mb-8 leading-relaxed">
                Most Dublin homes built before 2011 qualify for significant funding. Check
                our quick criteria list to see where you stand.
              </p>
              <Link
                href="/contact"
                className="bg-tertiary-container text-on-tertiary px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all inline-flex items-center gap-2"
              >
                Check Eligibility in 60 Seconds{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
            <div className="md:w-1/2 grid grid-cols-1 gap-4 w-full">
              {[
                "The property was built and first occupied before 2011.",
                "You have not previously received an SEAI grant for the same work.",
                "The property is located in the Republic of Ireland.",
                "A post-works BER assessment must be completed.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 p-4 bg-white/40 rounded-xl"
                >
                  <span className="material-symbols-outlined fill text-tertiary-container bg-white p-1 rounded-full">
                    check
                  </span>
                  <p className="font-medium text-on-secondary-container">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 md:py-24 px-6 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-tertiary-container mb-4">
                Our Simple 5-Step Process
              </h2>
              <p className="text-on-surface-variant">
                We handle the paperwork, you enjoy the warmth.
              </p>
            </div>
            <div className="relative">
              <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-secondary-container/50 -z-10" />
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {[
                  { n: 1, t: "Free Survey", d: "Initial assessment of your Dublin property walls." },
                  { n: 2, t: "BER Assessment", d: "Pre-works energy rating evaluation." },
                  {
                    n: 3,
                    t: "SEAI Application",
                    d: "We help you submit all grant documentation.",
                    accent: true,
                  },
                  {
                    n: 4,
                    t: "Installation",
                    d: "Expert fitting by our SEAI registered crew.",
                  },
                  { n: 5, t: "Grant Paid", d: "Funds deposited directly into your account." },
                ].map((s) => (
                  <div key={s.n} className="flex flex-col items-center text-center">
                    <div
                      className={`w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border-4 ${
                        s.accent ? "border-primary-fixed" : "border-secondary-container"
                      } flex items-center justify-center text-2xl md:text-3xl font-extrabold text-tertiary-container shadow-lg mb-6`}
                    >
                      {s.n}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-tertiary-container mb-2">
                      {s.t}
                    </h3>
                    <p className="text-sm text-on-surface-variant px-4">{s.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cost After Grant */}
        <section className="py-20 md:py-24 px-6 bg-surface-dim/20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-extrabold text-tertiary-container mb-4">
                  Investment &amp; Savings
                </h2>
                <p className="text-on-surface-variant">
                  Transparent pricing including your SEAI grant reduction.
                </p>
              </div>
              <div className="bg-secondary-fixed text-on-secondary-fixed px-6 py-3 rounded-full font-bold flex items-center gap-2">
                <span className="material-symbols-outlined">trending_down</span> Average 30%
                reduction in heating costs
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-outline-variant/30 bg-white">
              <div className="overflow-x-auto">
                <table className="w-full text-left min-w-[700px]">
                  <thead className="bg-surface-container-highest">
                    <tr>
                      <th className="py-5 px-6 md:px-8 font-bold">House Type</th>
                      <th className="py-5 px-6 md:px-8 font-bold">Typical Total Cost</th>
                      <th className="py-5 px-6 md:px-8 font-bold">After SEAI Grant</th>
                      <th className="py-5 px-6 md:px-8 font-bold">Est. Cost per m²</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/20">
                    {[
                      { type: "Apartment", cost: "€8,500", after: "€5,000", per: "€110" },
                      {
                        type: "Mid-Terrace House",
                        cost: "€12,500",
                        after: "€9,000",
                        per: "€105",
                      },
                      {
                        type: "Semi-Detached",
                        cost: "€18,000",
                        after: "€12,000",
                        per: "€100",
                      },
                      {
                        type: "Detached House",
                        cost: "€26,000",
                        after: "€18,000",
                        per: "€95",
                      },
                    ].map((r) => (
                      <tr key={r.type}>
                        <td className="py-5 md:py-6 px-6 md:px-8 font-medium">{r.type}</td>
                        <td className="py-5 md:py-6 px-6 md:px-8 text-on-surface-variant/60 line-through">
                          {r.cost}
                        </td>
                        <td className="py-5 md:py-6 px-6 md:px-8 font-bold text-tertiary-container text-lg">
                          {r.after}
                        </td>
                        <td className="py-5 md:py-6 px-6 md:px-8">{r.per}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="mt-6 text-sm text-on-surface-variant italic">
              *Prices are estimates based on standard Dublin housing stock. Final quotes
              provided after site survey.
            </p>
          </div>
        </section>

        {/* Credentials */}
        <section className="py-20 md:py-24 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "verified",
                title: "SEAI Registered",
                desc: "Official government-approved contractor. We ensure your grant is secured with zero compliance issues.",
                border: "border-tertiary-container",
              },
              {
                icon: "verified_user",
                title: "NSAI Approved Systems",
                desc: "We only use Agrément certified insulation systems designed specifically for Irish weather conditions.",
                border: "border-secondary",
              },
              {
                icon: "history",
                title: "20+ Years Experience",
                desc: "Two decades of wrapping Dublin homes. Our craftmanship is backed by long-term structural warranties.",
                border: "border-primary-fixed",
              },
            ].map((c) => (
              <div
                key={c.title}
                className={`bg-white p-8 md:p-10 rounded-xl shadow-sm border-b-4 ${c.border} flex flex-col items-center text-center group hover:shadow-xl transition-all`}
              >
                <div className="w-20 h-20 bg-surface-container rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl text-tertiary-container">
                    {c.icon}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-tertiary-container mb-4">
                  {c.title}
                </h3>
                <p className="text-on-surface-variant">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* U-Value */}
        <section className="py-20 md:py-24 px-6 max-w-7xl mx-auto overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-tertiary-container mb-6">
                Massive Thermal Improvement
              </h2>
              <p className="text-lg leading-relaxed text-on-surface-variant mb-8">
                The primary goal of the SEAI grant is to lower your home&apos;s U-value.
                Lower U-values mean less heat escaping through your walls and more money
                staying in your pocket.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 font-medium">
                  <span className="material-symbols-outlined text-secondary">eco</span>{" "}
                  Reduces carbon footprint by 2 tons annually
                </li>
                <li className="flex items-center gap-3 font-medium">
                  <span className="material-symbols-outlined text-secondary">
                    thermometer
                  </span>{" "}
                  Eliminates cold spots and damp mould
                </li>
                <li className="flex items-center gap-3 font-medium">
                  <span className="material-symbols-outlined text-secondary">
                    home_work
                  </span>{" "}
                  Increases property resale value
                </li>
              </ul>
            </div>
            <div className="bg-surface-container rounded-xl p-8 md:p-12">
              <h3 className="text-xl font-bold text-tertiary-container mb-10">
                U-Value Efficiency (W/m²K)
              </h3>
              <div className="space-y-12">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-bold text-error">
                      Uninsulated Wall (Pre-Grant)
                    </span>
                    <span className="text-2xl font-extrabold text-error">2.0</span>
                  </div>
                  <div className="w-full h-8 bg-error/10 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-error rounded-full" />
                  </div>
                  <p className="text-xs text-error mt-2 font-bold uppercase tracking-widest">
                    High Heat Loss
                  </p>
                </div>
                <div className="relative">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-bold text-tertiary-container">
                      Insulated System (Post-Grant)
                    </span>
                    <span className="text-2xl font-extrabold text-tertiary-container">
                      0.27
                    </span>
                  </div>
                  <div className="w-full h-8 bg-tertiary-container/10 rounded-full overflow-hidden">
                    <div className="w-[13%] h-full bg-tertiary-container rounded-full" />
                  </div>
                  <p className="text-xs text-tertiary-container mt-2 font-bold uppercase tracking-widest">
                    Maximum Efficiency
                  </p>
                  <div className="absolute -right-4 -top-4 bg-primary-fixed text-on-primary-fixed text-[10px] font-black py-1 px-2 rounded transform rotate-12">
                    SEAI TARGET
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-24 px-6 bg-surface">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-tertiary-container">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {FAQS.map((f) => (
                <details
                  key={f.q}
                  className="bg-white rounded-xl shadow-sm overflow-hidden border border-outline-variant/10 group"
                >
                  <summary className="w-full px-6 md:px-8 py-5 md:py-6 text-left flex justify-between items-center cursor-pointer list-none">
                    <span className="font-bold text-base md:text-lg text-tertiary-container pr-4">
                      {f.q}
                    </span>
                    <span className="material-symbols-outlined text-tertiary-container transition-transform group-open:rotate-180 shrink-0">
                      expand_more
                    </span>
                  </summary>
                  <div className="px-6 md:px-8 pb-6 text-on-surface-variant leading-relaxed">
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="flex-1 bg-tertiary-container text-white rounded-xl p-10 md:p-12 flex flex-col justify-center items-center text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold mb-6 leading-tight">
                Start Your Home Upgrade Today
              </h2>
              <p className="text-on-tertiary-container text-lg mb-10 max-w-md">
                Contact our Dublin team to schedule your free, no-obligation site survey
                and grant consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-primary-gradient text-on-primary-fixed px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:opacity-90 transition-all"
                >
                  Get A Free Quote
                </Link>
                <a
                  href={`tel:${SITE.phone}`}
                  className="bg-white/10 hover:bg-white/20 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all border border-white/20"
                >
                  Call {SITE.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="md:w-1/3 bg-secondary-container rounded-xl p-8 md:p-10">
              <h3 className="text-2xl font-bold text-on-secondary-container mb-8">
                Business Details
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-tertiary-container">
                    location_on
                  </span>
                  <div>
                    <p className="font-bold text-on-secondary-container">Office Address</p>
                    <p className="text-on-secondary-container/80">
                      {SITE.address.street},
                      <br />
                      Dublin 2, {SITE.address.postalCode}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-tertiary-container">
                    schedule
                  </span>
                  <div>
                    <p className="font-bold text-on-secondary-container">Working Hours</p>
                    <p className="text-on-secondary-container/80">
                      Mon - Sun: 8:00 AM - 8:00 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-tertiary-container">
                    call
                  </span>
                  <div>
                    <p className="font-bold text-on-secondary-container">Phone</p>
                    <a
                      href={`tel:${SITE.phone}`}
                      className="text-on-secondary-container/80"
                    >
                      {SITE.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
