import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  LocalBusinessJsonLd,
  BreadcrumbJsonLd,
  WebsiteJsonLd,
  ServiceJsonLd,
  FaqJsonLd,
} from "../components/JsonLd";
import { SITE } from "../lib/site";

export const metadata: Metadata = {
  title: "External Insulation Dublin | SEAI Approved EWI Contractors",
  description:
    "External Insulation Dublin installs SEAI-approved external wall insulation across Dublin. Cut bills, qualify for grants. Free quotes — call +35312308892.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE.url + "/",
    title: "External Insulation Dublin | SEAI Approved EWI Contractors",
    description:
      "SEAI-approved external wall insulation across Dublin. Grants up to €8,000. Free quotes from a local Dublin 2 contractor.",
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

const HOME_FAQS: { q: string; a: string }[] = [
  {
    q: "How much does external insulation cost in Dublin?",
    a: "External wall insulation in Dublin typically costs €100-€110 per m² installed, including system, mesh, render, scaffolding and labour. For a standard three-bed semi-detached Dublin home this works out at roughly €18,000 before grants, dropping to about €12,000 net of the typical €6,000 SEAI grant. Apartments and mid-terrace homes start nearer €8,500 pre-grant; large detached properties run up to €26,000. Coastal homes in Blackrock or Dalkey often need silicone render finishes, which can add 5-10% to the headline cost. We provide a fixed quote after a free site survey so you know the exact figure before any work begins.",
  },
  {
    q: "What SEAI grants are available for external wall insulation?",
    a: "SEAI runs the Better Energy Homes scheme, which pays external wall insulation grants of €3,500 for apartments and mid-terrace homes, €6,000 for semi-detached and end-terrace homes, and up to €8,000 for detached houses. To qualify, the home must have been built and first occupied before 2011, and the work must be carried out by an SEAI registered contractor. As an SEAI registered installer we handle the grant application, BER assessment booking and post-works paperwork on your behalf, so you only see the net figure once the grant has been deducted from the final invoice.",
  },
  {
    q: "Do I need planning permission for external wall insulation in Dublin?",
    a: "In most Dublin cases external wall insulation is treated as exempted development under Class 2 of the Planning and Development Regulations, so you do not need planning permission. The exceptions are protected structures, properties inside an Architectural Conservation Area (ACA), and any work that materially alters the character or appearance of the building. If your home is listed on the Dublin City Council or Dún Laoghaire-Rathdown record of protected structures, or sits within an ACA such as parts of Dalkey or Ranelagh, we recommend a quick pre-planning consultation with the local authority before signing off on a finish.",
  },
  {
    q: "Is external wall insulation worth it?",
    a: "For most pre-2011 Dublin homes external wall insulation is the single highest-impact retrofit you can make. Wall U-values typically fall from around 2.0 W/m²K to 0.27 W/m²K, cutting heating bills by 25-45% and lifting the BER from a D2 or E1 up to a B3 or better. That BER uplift directly raises resale value and rentability. Combined with the SEAI grant the simple payback period is usually 7-10 years, and the wall stays warm and dry afterwards, which dramatically reduces surface condensation and the mould growth that follows it. For solid-wall and early cavity homes there is no more effective wall upgrade.",
  },
];

export default function HomePage() {
  return (
    <>
      <Header active="home" />
      <LocalBusinessJsonLd />
      <WebsiteJsonLd />
      <ServiceJsonLd
        name="External Wall Insulation Dublin"
        description="SEAI registered external wall insulation contractors in Dublin. Grants up to €8,000 for eligible homes, NSAI approved systems and 20+ years of EWI experience."
        url={SITE.url + "/"}
        serviceType="External Wall Insulation"
      />
      <FaqJsonLd items={HOME_FAQS} />
      <BreadcrumbJsonLd items={[{ name: "Home", url: SITE.url + "/" }]} />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-surface overflow-hidden min-h-[750px] lg:min-h-[870px] flex items-center">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at top right, rgba(233,232,124,0.30), transparent 60%)",
            }}
          />
          <div className="container mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10 py-12">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-fixed rounded-full">
                <span className="material-symbols-outlined text-sm text-on-secondary-fixed">
                  verified
                </span>
                <span className="text-xs font-bold text-on-secondary-fixed uppercase tracking-wider">
                  SEAI Registered Contractor
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold font-headline text-tertiary-container tracking-tight leading-[1.1]">
                External Insulation <span className="house-underline">Dublin</span> — SEAI
                Approved Contractors
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
                Upgrade your home&apos;s thermal performance with high-end external wall
                insulation. Save thousands on energy bills with SEAI grants of up to €8,000.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href={`tel:${SITE.phone}`}
                  className="bg-gradient-primary text-on-primary-fixed font-bold px-8 py-4 rounded-lg shadow-xl hover:translate-y-[-4px] transition-all flex items-center gap-3"
                >
                  <span className="material-symbols-outlined">call</span>
                  Call {SITE.phoneDisplay}
                </a>
                <Link
                  href="/contact"
                  className="bg-secondary-container text-on-secondary-container font-bold px-8 py-4 rounded-lg hover:bg-secondary-fixed-dim transition-all"
                >
                  Get Free Quote
                </Link>
              </div>
              <div className="flex flex-wrap gap-x-8 gap-y-4 pt-8 border-t border-outline-variant/20">
                <div className="flex items-center gap-2 text-tertiary-container font-semibold">
                  <span className="material-symbols-outlined text-secondary">
                    check_circle
                  </span>{" "}
                  SEAI Registered
                </div>
                <div className="flex items-center gap-2 text-tertiary-container font-semibold">
                  <span className="material-symbols-outlined text-secondary">
                    check_circle
                  </span>{" "}
                  20+ Years Experience
                </div>
                <div className="flex items-center gap-2 text-tertiary-container font-semibold">
                  <span className="material-symbols-outlined text-secondary">
                    check_circle
                  </span>{" "}
                  NSAI Approved
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary-fixed/10 rounded-xl blur-2xl" />
              <Image
                className="rounded-xl shadow-2xl relative z-10 w-full h-[420px] md:h-[600px] object-cover"
                alt="Modern Dublin home with smooth cream external insulation render — SEAI external wall insulation Dublin"
                src="/images/hero-dublin.jpg"
                width={1600}
                height={900}
                priority
              />
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="bg-secondary-container/30 py-12">
          <div className="container mx-auto px-6 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center gap-2">
                <span className="material-symbols-outlined text-tertiary-container text-4xl">
                  verified_user
                </span>
                <span className="font-headline font-bold text-tertiary-container">
                  SEAI Authorized
                </span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <span className="material-symbols-outlined text-tertiary-container text-4xl">
                  workspace_premium
                </span>
                <span className="font-headline font-bold text-tertiary-container">
                  NSAI Certified
                </span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <span className="material-symbols-outlined text-tertiary-container text-4xl">
                  history
                </span>
                <span className="font-headline font-bold text-tertiary-container">
                  20+ Years Expertise
                </span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <span className="material-symbols-outlined text-tertiary-container text-4xl">
                  star
                </span>
                <span className="font-headline font-bold text-tertiary-container">
                  5-Star Rated Reviews
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Intro / About copy */}
        <section className="py-16 md:py-20 bg-surface">
          <div className="container mx-auto px-6 md:px-8 max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7 space-y-5">
                <h2 className="text-3xl md:text-4xl font-extrabold font-headline text-tertiary-container leading-tight">
                  Dublin&apos;s SEAI Approved External Wall Insulation Contractors
                </h2>
                <p className="text-lg text-on-surface-variant leading-relaxed">
                  External Insulation Dublin is a Dublin 2 based EWI specialist serving
                  homeowners across the city and the wider Greater Dublin Area. We have
                  installed external wall insulation on more than 1,200 Irish homes over
                  20+ years, helping families cut heating bills by 25-45%, raise their BER
                  rating and unlock SEAI grants of up to €8,000.
                </p>
                <p className="text-lg text-on-surface-variant leading-relaxed">
                  Our crews fit NSAI-approved EWI systems engineered for Irish weather,
                  finished in silicone and silicone-acrylic renders that resist coastal
                  weathering. We focus on doing one thing extremely well — external wall
                  insulation in Dublin, installed correctly first time, with all the SEAI
                  paperwork handled on your behalf. You only see your home once at hand-over
                  — warm, modern and ready for winter.
                </p>
                <p className="text-lg text-on-surface-variant leading-relaxed">
                  From terraced homes in Ranelagh and Stillorgan to coastal semi-detached
                  properties in Blackrock and period villas in Dalkey, we tailor every
                  external insulation install to the building stock. If you want a free,
                  no-obligation quote for home insulation in Dublin, call us on{" "}
                  <a
                    href={`tel:${SITE.phone}`}
                    className="text-tertiary-container font-bold underline"
                  >
                    {SITE.phoneDisplay}
                  </a>{" "}
                  or use the contact form below.
                </p>
              </div>
              <aside className="lg:col-span-5 bg-surface-container-low p-8 rounded-xl space-y-4 border-l-4 border-tertiary-container">
                <h3 className="text-xl font-bold font-headline text-tertiary-container">
                  Why Dublin homeowners choose us
                </h3>
                <ul className="space-y-3">
                  {[
                    "Up to €8,000 SEAI external wall insulation grant",
                    "NSAI-approved EWI systems built for Irish weather",
                    "20+ years installing across Dublin & Wicklow",
                    "Free site survey & fixed quote within 48 hours",
                    "Full BER assessment management",
                    "25-year structural & weatherproofing guarantee",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-on-surface-variant"
                    >
                      <span className="material-symbols-outlined text-secondary mt-0.5 shrink-0">
                        check_circle
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 md:py-24 bg-surface-container-lowest">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold font-headline text-tertiary-container mb-4">
                Our External Wall Insulation Services in Dublin
              </h2>
              <div className="h-1.5 w-24 bg-primary-fixed mx-auto rounded-full" />
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-surface-container-low p-8 md:p-10 rounded-xl border-l-8 border-tertiary-container flex flex-col md:flex-row gap-8 items-center shadow-sm">
                <div className="bg-tertiary-container/10 p-6 rounded-full">
                  <span className="material-symbols-outlined fill text-tertiary-container text-6xl">
                    euro
                  </span>
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold font-headline text-tertiary-container">
                    SEAI External Insulation Grants
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    We handle the complex paperwork for you. Homeowners in Dublin can access
                    grants of up to €8,000 for external wall insulation, significantly
                    reducing the initial investment of making your home energy efficient.
                  </p>
                  <Link
                    href="/services/seai-external-insulation-grants"
                    className="inline-flex items-center gap-2 text-tertiary-container font-bold group"
                  >
                    Learn more about grants{" "}
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dublin Coverage */}
        <section className="py-20 md:py-24 bg-surface-container-low">
          <div className="container mx-auto px-6 md:px-8">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
              <div className="lg:w-1/3 space-y-6">
                <h2 className="text-3xl md:text-4xl font-extrabold font-headline text-tertiary-container">
                  External Wall Insulation Across Dublin
                </h2>
                <p className="text-on-surface-variant">
                  We are Dublin&apos;s premier choice for residential and commercial
                  insulation projects, specialising in the unique architectural requirements
                  of South Dublin coastal regions.
                </p>
                <div className="space-y-4">
                  <Link
                    href="/areas/blackrock"
                    className="block bg-surface p-6 rounded-lg shadow-sm border border-outline-variant/10 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="material-symbols-outlined text-secondary">
                        location_on
                      </span>
                      <h3 className="text-xl font-bold font-headline text-tertiary-container">
                        Blackrock
                      </h3>
                    </div>
                    <p className="text-sm mb-4">
                      Specialised damp-resistant rendering for coastal properties in the
                      Blackrock area.
                    </p>
                    <span className="text-secondary font-bold text-sm">
                      View Local Projects →
                    </span>
                  </Link>
                  <Link
                    href="/areas/dalkey"
                    className="block bg-surface p-6 rounded-lg shadow-sm border border-outline-variant/10 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="material-symbols-outlined text-secondary">
                        location_on
                      </span>
                      <h3 className="text-xl font-bold font-headline text-tertiary-container">
                        Dalkey
                      </h3>
                    </div>
                    <p className="text-sm mb-4">
                      Preserving the aesthetic of historic Dalkey while maximising thermal
                      gains.
                    </p>
                    <span className="text-secondary font-bold text-sm">
                      View Local Projects →
                    </span>
                  </Link>
                </div>
              </div>
              <div className="lg:w-2/3 w-full bg-surface rounded-xl overflow-hidden shadow-xl h-[400px] md:h-[500px] relative">
                <div className="absolute inset-0 bg-secondary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-9xl text-tertiary-container/20">
                    map
                  </span>
                </div>
                <Image
                  className="w-full h-full object-cover opacity-80"
                  alt="Map showing the Dublin coverage area for external wall insulation projects"
                  src="/images/map-dublin.jpg"
                  width={1600}
                  height={900}
                />
                <div className="absolute bottom-6 left-6 bg-white p-4 rounded-lg shadow-lg flex items-center gap-4">
                  <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" />
                  <span className="font-bold text-on-surface">
                    Currently working in Dun Laoghaire
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Gallery */}
        <section className="py-20 md:py-24 bg-surface">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold font-headline text-tertiary-container mb-4">
                Our Recent Transformations
              </h2>
              <p className="text-on-surface-variant">
                See the difference professional external insulation makes to Irish homes.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  alt: "Semi-detached Stillorgan home after external wall insulation render",
                  title: "Semi-Detached, Stillorgan",
                  src: "/images/gallery-stillorgan.jpg",
                },
                {
                  alt: "Terraced Ranelagh house with external wall insulation finish",
                  title: "Terraced Home, Ranelagh",
                  src: "/images/gallery-ranelagh.jpg",
                },
                {
                  alt: "Malahide bungalow upgraded with external wall insulation",
                  title: "Bungalow, Malahide",
                  src: "/images/gallery-malahide.jpg",
                },
              ].map((item) => (
                <div key={item.title} className="space-y-4">
                  <div className="relative group rounded-xl overflow-hidden shadow-lg h-80">
                    <Image
                      className="w-full h-full object-cover"
                      alt={item.alt}
                      src={item.src}
                      width={1200}
                      height={800}
                    />
                    <div className="absolute top-4 left-4 bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full text-xs font-bold uppercase">
                      Before & After
                    </div>
                  </div>
                  <h4 className="font-bold text-lg text-tertiary-container">
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 md:py-24 bg-secondary-container/20">
          <div className="container mx-auto px-6 md:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "The house is so much warmer now, and the finish is impeccable. The team helped us through the entire SEAI grant process.",
                  author: "— Aoife M., Blackrock",
                },
                {
                  quote:
                    "Professional from start to finish. Our heating bills have dropped by almost 40% since the insulation was installed.",
                  author: "— Liam O'B., Dalkey",
                },
                {
                  quote:
                    "Incredible service. They were clean, fast, and the new render makes the house look like a new build!",
                  author: "— Sinead K., Stillorgan",
                },
              ].map((t) => (
                <div
                  key={t.author}
                  className="bg-surface p-8 rounded-xl shadow-sm space-y-4 relative"
                >
                  <div className="flex text-primary-fixed-dim">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined fill">
                        star
                      </span>
                    ))}
                  </div>
                  <p className="italic text-on-surface-variant">&ldquo;{t.quote}&rdquo;</p>
                  <div className="font-bold text-tertiary-container">{t.author}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why External Insulation Pays Off */}
        <section className="py-20 md:py-24 bg-surface-container-low">
          <div className="container mx-auto px-6 md:px-8 max-w-6xl">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold font-headline text-tertiary-container mb-4">
                Why External Wall Insulation Is Worth It in Dublin
              </h2>
              <p className="text-on-surface-variant max-w-3xl mx-auto">
                External wall insulation is the most effective wall upgrade for Irish homes.
                It cuts U-values, eliminates cold bridging and protects the structure — all
                without losing a single inch of internal floor space.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "thermometer",
                  title: "Lower U-value, lower bills",
                  text: "Wall U-values typically drop from around 2.0 W/m²K to 0.27 W/m²K — a 7x improvement. Heating bills fall by 25-45% on most pre-2011 Dublin homes.",
                },
                {
                  icon: "euro",
                  title: "Up to €8,000 SEAI grant",
                  text: "Detached homes qualify for the maximum €8,000 SEAI external wall insulation grant. Apartments and mid-terrace homes claim €3,500.",
                },
                {
                  icon: "home_work",
                  title: "Higher BER, higher value",
                  text: "External insulation typically lifts a Dublin home from a D2/E1 BER to a B3 or better, boosting resale value and rentability.",
                },
                {
                  icon: "shield",
                  title: "Protects the structure",
                  text: "EWI keeps the masonry warm and dry, preventing cold bridging, surface condensation and the mould growth that follows.",
                },
                {
                  icon: "park",
                  title: "Cuts carbon by ~2 tons/year",
                  text: "External insulation is one of the highest-impact retrofit measures in Ireland's path to a Climate Action Plan-compliant housing stock.",
                },
                {
                  icon: "auto_fix_high",
                  title: "Modern finish, kerb appeal",
                  text: "A clean silicone-acrylic render refreshes tired pebbledash, painted block or brick — without losing the character of period properties.",
                },
              ].map((b) => (
                <div
                  key={b.title}
                  className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-outline-variant/10 space-y-3"
                >
                  <span className="material-symbols-outlined text-3xl text-tertiary-container">
                    {b.icon}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-tertiary-container">
                    {b.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Teaser */}
        <section className="py-20 md:py-24 bg-surface">
          <div className="container mx-auto px-6 md:px-8 max-w-3xl">
            <h2 className="text-3xl font-extrabold font-headline text-tertiary-container mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {HOME_FAQS.map((item) => (
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
            <div className="text-center mt-12">
              <Link
                href="/faq"
                className="inline-block text-tertiary-container font-bold border-2 border-tertiary-container px-8 py-3 rounded-lg hover:bg-tertiary-container hover:text-white transition-all"
              >
                View all FAQs
              </Link>
            </div>
          </div>
        </section>

        {/* Contact / NAP */}
        <section className="py-20 md:py-24 bg-primary-fixed/10">
          <div className="container mx-auto px-6 md:px-8">
            <div className="bg-surface rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-8 md:p-12 lg:p-20 space-y-8">
                <h2 className="text-3xl md:text-4xl font-extrabold font-headline text-tertiary-container leading-tight">
                  Get Your Free External Insulation Quote
                </h2>
                <p className="text-lg text-on-surface-variant">
                  Fill out the form below or call us directly. We guarantee a response
                  within 1 hour during business hours.
                </p>
                <form className="space-y-4" action={`mailto:${SITE.email}`} method="post" encType="text/plain">
                  <input
                    className="w-full p-4 rounded-xl border border-outline-variant/30 bg-surface-container-low focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="Full Name"
                    type="text"
                    name="name"
                    required
                  />
                  <input
                    className="w-full p-4 rounded-xl border border-outline-variant/30 bg-surface-container-low focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="Email Address"
                    type="email"
                    name="email"
                    required
                  />
                  <input
                    className="w-full p-4 rounded-xl border border-outline-variant/30 bg-surface-container-low focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="Phone Number"
                    type="tel"
                    name="phone"
                  />
                  <textarea
                    className="w-full p-4 rounded-xl border border-outline-variant/30 bg-surface-container-low focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="Tell us about your project..."
                    rows={4}
                    name="message"
                  />
                  <button
                    type="submit"
                    className="w-full bg-tertiary-container text-white font-bold py-4 rounded-xl hover:bg-on-tertiary-fixed-variant transition-all"
                  >
                    Send Request
                  </button>
                </form>
              </div>
              <div className="lg:w-1/2 bg-secondary-container p-8 md:p-12 lg:p-20 flex flex-col justify-between">
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-tertiary-container text-3xl">
                      location_on
                    </span>
                    <div>
                      <h4 className="font-bold text-tertiary-container uppercase text-sm tracking-widest mb-1">
                        Our Office
                      </h4>
                      <p className="text-on-secondary-container text-lg">
                        {SITE.address.street},
                        <br />
                        {SITE.address.locality}, Dublin 2, {SITE.address.postalCode}
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
                        Mon-Sun: 8:00 AM - 8:00 PM
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-12 rounded-xl overflow-hidden h-48 border-4 border-white shadow-lg">
                  <iframe
                    title="Dublin 2 office location"
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
