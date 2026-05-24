"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { contact } from "@/lib/data";

type HeaderProps = {
  onBook: () => void;
};

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Achievements", href: "#achievements" },
  { label: "Staff", href: "#staff" },
  { label: "Location", href: "#location" },
];

export function Header({ onBook }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* ─────────────────────────────────────────
          HEADER BAR
          Floating pill on desktop, full-width on mobile
      ───────────────────────────────────────── */}
      <header className="fixed inset-x-0 top-0 z-50 flex items-start justify-center px-4 pt-4 md:px-6 md:pt-5">

        {/* Inner pill container — matches Nexa reference exactly */}
        <div
          className={`flex w-full max-w-5xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 md:px-5 md:py-3 ${
            isScrolled
              ? "bg-black/70 backdrop-blur-xl shadow-2xl shadow-black/40 border border-white/10"
              : "bg-black/35 backdrop-blur-md border border-white/10"
          }`}
        >
          {/* ── LOGO ── */}
          <a
            href="#home"
            className="flex items-center gap-2.5 shrink-0"
            onClick={closeMenu}
          >
            {/* Small icon dot — like Nexa's logo mark */}
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/25 bg-white/10">
              <span className="font-serif text-sm font-bold text-white">C</span>
            </span>
            <span className="font-serif text-sm font-semibold text-white md:text-base">
              {contact.academyName}
            </span>
          </a>

          {/* ── DESKTOP NAV — center pill links ── */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-1.5 text-sm font-medium text-white/70 transition-all duration-200 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* ── DESKTOP CTA — "Book a Call" pill with arrow icon ── */}
          <div className="hidden items-center lg:flex">
            <button
              type="button"
              onClick={onBook}
              className="group flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition-all duration-200 hover:bg-white/90 hover:scale-[1.03] active:scale-[0.97]"
            >
              Book Admission
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="h-3 w-3" />
              </span>
            </button>
          </div>

          {/* ── MOBILE MENU TOGGLE ── */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 lg:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </header>

      {/* ─────────────────────────────────────────
          MOBILE FULL-SCREEN DRAWER
      ───────────────────────────────────────── */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-black/95 backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Nav links — stagger in */}
        <nav className="flex flex-col items-start justify-center flex-1 gap-2 px-8 pt-28">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={`w-full border-b border-white/8 py-5 font-serif text-3xl font-bold text-white transition-all duration-500 hover:text-white/70 ${
                isMobileMenuOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-6 opacity-0"
              }`}
              style={{ transitionDelay: `${80 + i * 55}ms` }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div
          className={`px-8 pb-14 transition-all duration-500 delay-[380ms] ${
            isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <button
            type="button"
            onClick={() => { closeMenu(); onBook(); }}
            className="group flex w-full items-center justify-center gap-3 rounded-full bg-white py-4 text-base font-bold text-black transition-all active:scale-[0.97]"
          >
            Book Admission
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </button>
        </div>
      </div>
    </>
  );
}