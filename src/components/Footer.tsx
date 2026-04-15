"use client";

import Link from "next/link";
import { type MouseEvent } from "react";

const navLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Ridoy-Mondol",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/md-ahatashamul-islam-mondol-790341373",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/~01763d2c19d3cee0b3",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const handleSectionClick = (
    sectionId: string,
    event: MouseEvent<HTMLAnchorElement>,
  ) => {
    if (window.location.pathname === "/") {
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

  return (
    <footer className="relative bg-[#080810] overflow-hidden">
      {/* Top hairline */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />

      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/3 left-0 w-[500px] h-[400px] rounded-full bg-sky-700/[0.05] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full bg-indigo-700/[0.04] blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* ── Main footer body ── */}
        <div className="py-16">
          {/* Top section: Logo + Social + Description */}
          <div className="mb-14 pb-12 border-b border-white/[0.1]">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              {/* Left: Logo + Desc */}
              <div className="flex flex-col gap-4 max-w-md">
                <Link
                  href="/#home"
                  className="group flex items-center gap-3 select-none shrink-0"
                  onClick={(event) => handleSectionClick("home", event)}
                >
                  <span className="shrink-0">
                    <svg
                      width="46"
                      height="46"
                      viewBox="0 0 168 176"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="lg1"
                          x1="0"
                          y1="0"
                          x2="168"
                          y2="176"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0%" stopColor="#38bdf8" />
                          <stop offset="100%" stopColor="#818cf8" />
                        </linearGradient>
                        <linearGradient
                          id="lgH"
                          x1="0"
                          y1="0"
                          x2="168"
                          y2="0"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0%" stopColor="#38bdf8" />
                          <stop offset="100%" stopColor="#818cf8" />
                        </linearGradient>
                        <radialGradient id="rf" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#0e1f38" />
                          <stop offset="100%" stopColor="#080810" />
                        </radialGradient>
                      </defs>
                      <circle cx="84" cy="88" r="74" fill="url(#rf)" />
                      <circle
                        cx="84"
                        cy="88"
                        r="74"
                        fill="none"
                        stroke="url(#lg1)"
                        strokeWidth="7.5"
                      />
                      <circle
                        cx="84"
                        cy="88"
                        r="79"
                        fill="none"
                        stroke="url(#lg1)"
                        strokeWidth="0.6"
                        opacity="0.15"
                      />
                      <g
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="10"
                      >
                        <line
                          x1="62"
                          y1="52"
                          x2="38"
                          y2="122"
                          stroke="url(#lg1)"
                        />
                        <line
                          x1="62"
                          y1="52"
                          x2="86"
                          y2="122"
                          stroke="url(#lg1)"
                        />
                        <line
                          x1="86"
                          y1="122"
                          x2="86"
                          y2="52"
                          stroke="url(#lg1)"
                        />
                        <line
                          x1="86"
                          y1="52"
                          x2="108"
                          y2="92"
                          stroke="url(#lg1)"
                        />
                        <line
                          x1="108"
                          y1="92"
                          x2="130"
                          y2="52"
                          stroke="url(#lg1)"
                        />
                        <line
                          x1="130"
                          y1="52"
                          x2="130"
                          y2="122"
                          stroke="url(#lg1)"
                        />
                      </g>
                      <line
                        x1="46"
                        y1="96"
                        x2="78"
                        y2="96"
                        stroke="url(#lgH)"
                        strokeWidth="8.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>

                  <span className="flex flex-col leading-tight gap-[3px]">
                    <span
                      className="text-[16px] sm:text-[17px] font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-400 group-hover:opacity-90 transition-opacity duration-200"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      Ahatashamul
                    </span>
                    <span
                      className="text-[11px] sm:text-[12px] font-bold text-slate-200/80 tracking-[0.22em] group-hover:text-slate-200 transition-colors duration-200"
                      style={{ fontFamily: "'Courier New', monospace" }}
                    >
                      Islam Mondol
                    </span>
                  </span>
                </Link>
                <p className="text-[13.5px] leading-relaxed text-white/55">
                  Full-stack web developer
                </p>
              </div>

              {/* Right: Social links */}
              <div className="flex flex-col gap-4">
                <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-white/55">
                  Follow Me
                </p>
                <div className="flex items-center gap-3">
                  {socialLinks.map(({ label, href, icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex items-center justify-center w-9 h-9 rounded-xl border border-white/[0.12] bg-white/[0.05] text-white/55
                        hover:text-white/100 hover:border-sky-400/50 hover:bg-sky-400/[0.1] hover:scale-110
                        transition-all duration-200"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Middle section: Navigation + Contact in grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
            {/* Navigation */}
            <div className="flex flex-col gap-5">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-sky-400/60">
                Quick Links
              </p>
              <ul className="flex flex-col gap-3">
                {navLinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      onClick={(event) =>
                        handleSectionClick(href.slice(1), event)
                      }
                      className="group flex items-center gap-2.5 text-[14px] text-white/55 hover:text-white/90 transition-colors duration-200"
                    >
                      <span className="inline-flex items-center justify-center w-5 h-5 text-[10px] text-sky-400/70 transition-transform duration-200 group-hover:translate-x-2">
                        →
                      </span>
                      <span className="transition-transform duration-200 group-hover:translate-x-2">
                        {label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-5">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-sky-400/60">
                Contact
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  {
                    icon: (
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.75}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    ),
                    text: "ahatashamul140@gmail.com",
                    href: "mailto:ahatashamul140@gmail.com",
                  },
                  {
                    icon: (
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    ),
                    text: "+8801319118383",
                    href: "https://wa.me/8801319118383",
                  },
                  {
                    icon: (
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.75}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    ),
                    text: "Rajshahi, Bangladesh",
                    href: "https://maps.google.com/?q=Rajshahi,Bangladesh",
                  },
                ].map(({ icon, text, href }) => (
                  <li key={text}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2.5 text-[14px] text-white/55 hover:text-white/90 transition-colors duration-200"
                    >
                      <span className="text-sky-400/60 group-hover:text-sky-400 transition-colors duration-200">
                        {icon}
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {text}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-sky-400/60">
                Get Started
              </p>
              <div className="flex flex-col gap-3">
                <p className="text-[13.5px] text-white/55 leading-relaxed">
                  Have a project in mind? Let's collaborate and build something
                  amazing together.
                </p>
                <Link
                  href="#contact"
                  onClick={(event) => handleSectionClick("contact", event)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-[13px] font-semibold text-white
                    bg-gradient-to-r from-sky-500 to-indigo-500
                    shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40
                    hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 w-fit"
                >
                  Start a Project
                  <svg
                    className="w-4 h-4"
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

          {/* Bottom bar */}
          <div className="border-t border-white/[0.1] pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
              <p className="text-[13px] text-white/40">
                © {year}{" "}
                <span className="text-white/55 font-semibold">Ahatashamul</span>
                . All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
