"use client";

import Link from "next/link";
import { useState } from "react";

type Props = { active?: "home" | "grants" | "areas" | "faq" | "about" | "contact" };

export default function Header({ active }: Props) {
  const [areasOpen, setAreasOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkBase = "transition-colors font-headline text-sm tracking-tight";
  const activeCls = "text-tertiary-container font-bold border-b-2 border-primary-fixed pb-1";
  const idleCls = "text-on-surface-variant hover:text-tertiary-container font-medium";

  return (
    <header className="fixed top-0 w-full z-50 flex items-center justify-between px-6 md:px-8 h-20 bg-white/80 backdrop-blur-md shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
      <Link href="/" className="flex items-center gap-2">
        <span className="material-symbols-outlined fill text-tertiary-container text-3xl">
          bungalow
        </span>
        <span className="text-xl md:text-2xl font-bold font-headline text-on-surface uppercase tracking-tighter">
          External Insulation <span className="text-tertiary-container">Dublin</span>
        </span>
      </Link>

      <nav className="hidden lg:flex items-center gap-8">
        <Link href="/" className={`${linkBase} ${active === "home" ? activeCls : idleCls}`}>
          Home
        </Link>
        <Link
          href="/services/seai-external-insulation-grants"
          className={`${linkBase} ${active === "grants" ? activeCls : idleCls}`}
        >
          SEAI Grants
        </Link>
        <div
          className="relative"
          onMouseEnter={() => setAreasOpen(true)}
          onMouseLeave={() => setAreasOpen(false)}
        >
          <button
            className={`flex items-center gap-1 ${linkBase} ${
              active === "areas" ? activeCls : idleCls
            }`}
          >
            Areas <span className="material-symbols-outlined text-sm">expand_more</span>
          </button>
          {areasOpen && (
            <div className="absolute right-0 top-full pt-2 min-w-[180px]">
              <div className="bg-white rounded-lg shadow-lg border border-outline-variant/20 py-2">
                <Link
                  href="/areas/blackrock"
                  className="block px-4 py-2 text-sm text-on-surface hover:bg-secondary-container/40 hover:text-tertiary-container"
                >
                  Blackrock
                </Link>
                <Link
                  href="/areas/dalkey"
                  className="block px-4 py-2 text-sm text-on-surface hover:bg-secondary-container/40 hover:text-tertiary-container"
                >
                  Dalkey
                </Link>
              </div>
            </div>
          )}
        </div>
        <Link href="/faq" className={`${linkBase} ${active === "faq" ? activeCls : idleCls}`}>
          FAQ
        </Link>
        <Link href="/about" className={`${linkBase} ${active === "about" ? activeCls : idleCls}`}>
          About
        </Link>
        <Link
          href="/contact"
          className={`${linkBase} ${active === "contact" ? activeCls : idleCls}`}
        >
          Contact
        </Link>
      </nav>

      <a
        href="tel:+35312308892"
        className="hidden md:flex bg-primary-fixed text-on-primary-fixed font-bold px-5 py-2.5 rounded-lg hover:bg-primary-fixed-dim transition-all duration-300 active:scale-95 items-center gap-2"
      >
        <span className="material-symbols-outlined text-sm">call</span>
        Call Now
      </a>

      <button
        aria-label="Toggle menu"
        onClick={() => setMobileOpen((o) => !o)}
        className="lg:hidden p-2 text-tertiary-container"
      >
        <span className="material-symbols-outlined text-3xl">
          {mobileOpen ? "close" : "menu"}
        </span>
      </button>

      {mobileOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white border-t border-outline-variant/20 shadow-lg lg:hidden">
          <div className="flex flex-col p-4 gap-1">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-3 rounded-lg hover:bg-surface-container-low text-on-surface font-medium"
            >
              Home
            </Link>
            <Link
              href="/services/seai-external-insulation-grants"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-3 rounded-lg hover:bg-surface-container-low text-on-surface font-medium"
            >
              SEAI Grants
            </Link>
            <Link
              href="/areas/blackrock"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-3 rounded-lg hover:bg-surface-container-low text-on-surface font-medium"
            >
              Blackrock
            </Link>
            <Link
              href="/areas/dalkey"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-3 rounded-lg hover:bg-surface-container-low text-on-surface font-medium"
            >
              Dalkey
            </Link>
            <Link
              href="/faq"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-3 rounded-lg hover:bg-surface-container-low text-on-surface font-medium"
            >
              FAQ
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-3 rounded-lg hover:bg-surface-container-low text-on-surface font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-3 rounded-lg hover:bg-surface-container-low text-on-surface font-medium"
            >
              Contact
            </Link>
            <a
              href="tel:+35312308892"
              className="mt-2 bg-primary-fixed text-on-primary-fixed font-bold px-4 py-3 rounded-lg flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">call</span>
              Call +353 1 230 8892
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
