"use client";

import { useState, useEffect, useRef, type MouseEvent } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/#home", sectionId: "home" },
  { label: "Portfolio", href: "/#portfolio", sectionId: "portfolio" },
  { label: "About", href: "/#about", sectionId: "about" },
  { label: "Services", href: "/#services", sectionId: "services" },
  { label: "Testimonials", href: "/#testimonials", sectionId: "testimonials" },
  { label: "Skills", href: "/#skills", sectionId: "skills" },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  // ── Frosted glass on scroll ───────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Close mobile menu on desktop resize ───────────────────────────────────
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // ── Body scroll lock for mobile menu ─────────────────────────────────────
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (pathname !== "/" || typeof window === "undefined") return;
    const hash = window.location.hash;
    if (!hash) return;

    const sectionId = hash.replace("#", "");
    if (navLinks.some((link) => link.sectionId === sectionId)) {
      setActiveLink(sectionId);
    }
  }, [pathname]);

  // ── IntersectionObserver — reflect scroll position in Navbar ─────────────
  useEffect(() => {
    if (pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;

        const activeEntry = visible.reduce((closest, entry) => {
          const entryCenter =
            entry.boundingClientRect.top + entry.boundingClientRect.height / 2;
          const closestCenter =
            closest.boundingClientRect.top +
            closest.boundingClientRect.height / 2;
          const entryDistance = Math.abs(entryCenter - window.innerHeight / 2);
          const closestDistance = Math.abs(
            closestCenter - window.innerHeight / 2,
          );
          return entryDistance < closestDistance ? entry : closest;
        }, visible[0]);

        setActiveLink(activeEntry.target.id);
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: "-40% 0px -45% 0px",
      },
    );

    navLinks.forEach(({ sectionId }) => {
      const el = document.getElementById(sectionId);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  // ── Click handler — smooth-scroll and let observer manage active state ─────────
  const handleNavClick = (
    sectionId: string,
    event?: MouseEvent<HTMLAnchorElement>,
  ) => {
    setMenuOpen(false);

    if (event && window.location.pathname === "/") {
      event.preventDefault();
      const section = document.getElementById(sectionId);
      if (section) {
        const navHeight = 80;
        const elementPosition =
          section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - navHeight,
          behavior: "smooth",
        });
      }
    }
  };

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    handleNavClick("home", event);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${
            scrolled
              ? "bg-[#080810]/90 backdrop-blur-2xl border-b border-white/[0.15] hover:border-white/[0.25]"
              : "bg-transparent border-b border-white/[0.08] hover:border-white/[0.15]"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* ── Logo ── */}
            <Link
              href="/#home"
              className="group flex items-center gap-2 sm:gap-2.5 select-none shrink-0"
              onClick={handleLogoClick}
            >
              <span className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-md overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-br from-sky-400 to-indigo-500" />
                <span className="absolute inset-0 flex items-center justify-center text-[10px] sm:text-[11px] font-black text-white tracking-tight">
                  A
                </span>
              </span>
              <span className="text-[14px] sm:text-[15px] font-semibold text-white/90 tracking-tight group-hover:text-white transition-colors duration-200">
                Ahatashamul
              </span>
            </Link>

            {/* ── Desktop links ── */}
            <ul className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeLink === link.sectionId;
                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={(event) => handleNavClick(link.sectionId, event)}
                      className={`relative px-3.5 py-2 flex items-center text-[13px] font-medium rounded-lg transition-all duration-200
                        ${
                          isActive
                            ? "text-white bg-white/[0.07]"
                            : "text-white/45 hover:text-white/85 hover:bg-white/[0.05]"
                        }`}
                    >
                      {link.label}
                      {/* Active dot */}
                      {isActive && (
                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-sky-400" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* ── Desktop CTA ── */}
            <div className="hidden lg:block">
              <Link
                href="/#contact"
                onClick={(event) => handleNavClick("contact", event)}
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13px] font-bold tracking-wide overflow-hidden hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-sky-500 to-indigo-500" />
                <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-200" />
                <span className="relative text-white">Let’s Talk</span>
                <svg
                  className="relative w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>

            {/* ── Mobile hamburger ── */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              className="lg:hidden flex flex-col items-center justify-center w-9 h-9 sm:w-10 sm:h-10 gap-[5px] sm:gap-[6px] rounded focus:outline-none"
            >
              <span
                className={`block w-5 sm:w-6 h-[1.5px] sm:h-[2px] bg-white/70 rounded-full transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[6.5px] sm:translate-y-[8px]" : ""}`}
              />
              <span
                className={`block h-[1.5px] sm:h-[2px] bg-white/70 rounded-full transition-all duration-300 ${menuOpen ? "w-0 opacity-0" : "w-4 sm:w-5"}`}
              />
              <span
                className={`block w-5 sm:w-6 h-[1.5px] sm:h-[2px] bg-white/70 rounded-full transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6.5px] sm:-translate-y-[8px]" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* ── Mobile menu panel ── */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            menuOpen
              ? "max-h-[420px] opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="bg-[#080810]/95 backdrop-blur-2xl border-t border-white/[0.07] px-4 sm:px-6 py-4 sm:py-5">
            <ul className="flex flex-col sm:grid sm:grid-cols-2 gap-0.5 sm:gap-1">
              {navLinks.map((link) => {
                const isActive = activeLink === link.sectionId;
                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={(event) => handleNavClick(link.sectionId, event)}
                      className={`flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-[14px] sm:text-[15px] font-medium transition-all duration-150 ${
                        isActive
                          ? "text-white bg-white/[0.07]"
                          : "text-white/50 hover:text-white/90 hover:bg-white/[0.04]"
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-4 sm:mt-5 pt-4 sm:pt-5 border-t border-white/[0.06]">
              <Link
                href="#contact"
                onClick={(event) => handleNavClick("contact", event)}
                className="flex items-center justify-center gap-2 w-full py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-white/[0.12] text-[13.5px] sm:text-[14px] font-semibold text-white/80 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] transition-all duration-150"
              >
                Let’s Talk
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-14 sm:h-16" />
    </>
  );
}
