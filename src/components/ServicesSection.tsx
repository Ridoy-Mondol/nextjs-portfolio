"use client";
import Link from "next/link";
import { type MouseEvent } from "react";

const services = [
  {
    number: "01",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
    title: "Full-Stack Web Development",
    description:
      "End-to-end web application development from database schema and API design to pixel-perfect UI. I build fast, scalable, production-ready apps using Next.js, React, and Node.js.",
    highlights: [
      "Next.js & React",
      "Node.js APIs",
      "Database Design",
      "TypeScript",
    ],
  },
  {
    number: "02",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6.75v6.75"
        />
      </svg>
    ),
    title: "SaaS Platform Development",
    description:
      "Building multi-tenant SaaS products from scratch — including auth systems, subscription flows, user dashboards, and admin panels. Architected for scale from day one.",
    highlights: [
      "Auth & Sessions",
      "Admin Dashboards",
      "User Management",
      "Billing Integration",
    ],
  },
  {
    number: "03",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
        />
      </svg>
    ),
    title: "AI-Powered App Development",
    description:
      "Integrating AI and automation into web apps — LLM-generated content, live market data feeds, voice-to-text and text-to-voice features, and intelligent automated workflows.",
    highlights: [
      "LLM Integration",
      "Live Data APIs",
      "Voice Features",
      "AI Automation",
    ],
  },
  {
    number: "04",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
        />
      </svg>
    ),
    title: "Web3 & Blockchain Development",
    description:
      "Building decentralized applications, DAO governance systems, and DeFi platforms on XPR Network / Proton Blockchain — including smart contract development and full on-chain integrations.",
    highlights: ["Smart Contracts", "XPR Network", "DAO Systems", "DeFi / DEX"],
  },
  {
    number: "05",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
        />
      </svg>
    ),
    title: "API Development & Integration",
    description:
      "Designing and building RESTful APIs, developer-facing API key systems, and third-party integrations — payment gateways, push notifications, OAuth, and live data feeds.",
    highlights: [
      "REST API Design",
      "API Key Systems",
      "OAuth & Auth",
      "Third-party Services",
    ],
  },
  {
    number: "06",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 014.5-4.5h13.5a4.5 4.5 0 014.5 4.5m-4.5-4.5v-6"
        />
      </svg>
    ),
    title: "DevOps & Deployment",
    description:
      "Setting up CI/CD pipelines, automated deployments, and production infrastructure. Your app goes live reliably and stays that way — with GitHub Actions and modern deployment workflows.",
    highlights: [
      "CI/CD Pipelines",
      "GitHub Actions",
      "Auto Deployment",
      "Production Setup",
    ],
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  return (
    <div
      className="group relative flex flex-col rounded-2xl border border-white/[0.08] bg-[#0d0d1c] p-6 overflow-hidden
        hover:border-sky-400/25 hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-default"
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 20px 56px -12px rgba(56,189,248,0.12), 0 0 0 1px rgba(56,189,248,0.1)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      {/* Hover glow — top-left radial */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top left, rgba(56,189,248,0.06) 0%, transparent 65%)",
        }}
      />

      {/* Top accent line — slides in on hover */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400 bg-gradient-to-r from-sky-400 to-indigo-400" />

      {/* Header row: icon + number */}
      <div className="flex items-start justify-between mb-5">
        {/* Icon box */}
        <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-sky-400/10 border border-sky-400/20 text-sky-400 group-hover:bg-sky-400/15 group-hover:border-sky-400/35 transition-all duration-200">
          {service.icon}
        </div>
        {/* Service number */}
        <span className="text-[13px] font-bold text-white/10 group-hover:text-white/20 transition-colors duration-200 tabular-nums">
          {service.number}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-[15.5px] font-bold text-white/85 group-hover:text-white mb-3 transition-colors duration-200 leading-snug">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-[13.5px] leading-relaxed text-white/40 mb-5 flex-1">
        {service.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {service.highlights.map((h) => (
          <span
            key={h}
            className="px-2.5 py-1 rounded-md text-[11px] font-medium text-white/45 bg-white/[0.05] border border-white/[0.07] group-hover:text-sky-300/70 group-hover:border-sky-400/20 group-hover:bg-sky-400/[0.06] transition-all duration-200"
          >
            {h}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ServicesSection() {
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
    <section
      id="services"
      className="relative py-28 bg-[#080810] overflow-hidden"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <div className="pointer-events-none absolute top-1/3 left-0 w-96 h-96 rounded-full bg-sky-700/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/3 right-0 w-96 h-96 rounded-full bg-indigo-700/[0.07] blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* ── Heading ── */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-flex items-center gap-2 text-[11.5px] font-semibold tracking-[0.22em] uppercase text-sky-400/70 mb-4">
            <span className="w-5 h-px bg-sky-400/50" />
            What I Offer
            <span className="w-5 h-px bg-sky-400/50" />
          </span>
          <h2 className="text-[2.6rem] sm:text-5xl font-bold tracking-tight text-white mb-5">
            Services
          </h2>
          <p className="text-[15px] text-white/35 max-w-lg leading-relaxed">
            From idea to production — I cover the full spectrum of modern web
            development, Web3, and AI integration.
          </p>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.number} service={service} index={i} />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-[15px] text-white/35">
            Have a project in mind? Let&apos;s build something great together.
          </p>
          <Link
            href="#contact"
            onClick={(event) => handleSectionClick("contact", event)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-[13.5px] font-bold text-white bg-gradient-to-r from-sky-500 to-indigo-500 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 whitespace-nowrap"
          >
            Get in Touch
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

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </section>
  );
}
