"use client";

import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const { accentFrom, accentTo } = project;

  return (
    <Link
      href={`/portfolio/${project.id}`}
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/[0.11] bg-[#12121f] cursor-pointer
        hover:border-white/[0.22] hover:-translate-y-2 transition-all duration-300 ease-out"
      style={{ animationDelay: `${index * 70}ms` }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.boxShadow =
          `0 24px 64px -12px ${accentFrom}28, 0 0 0 1px ${accentFrom}20`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
      }}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.name}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c18] via-transparent to-transparent" />
        <div className="absolute top-3 left-3">
          <span
            className="inline-flex items-center px-2.5 py-1 rounded-full text-[10.5px] font-semibold tracking-wide"
            style={{
              background: "rgba(8,8,16,0.75)",
              color: accentFrom,
              border: `1px solid ${accentFrom}50`,
              backdropFilter: "blur(8px)",
            }}
          >
            {project.category}
          </span>
        </div>
        <div
          className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center
            opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0
            transition-all duration-250 backdrop-blur-sm"
          style={{
            background: `${accentFrom}25`,
            border: `1px solid ${accentFrom}50`,
          }}
        >
          <svg
            className="w-3.5 h-3.5"
            style={{ color: accentFrom }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 17L17 7M17 7H7M17 7v10"
            />
          </svg>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5 pt-4">
        <h3 className="text-[16.5px] font-bold text-white/90 group-hover:text-white mb-1 transition-colors duration-200">
          {project.name}
        </h3>
        <p
          className="text-[12px] font-semibold mb-3 tracking-wide"
          style={{ color: accentFrom }}
        >
          {project.tagline}
        </p>
        <p className="text-[13px] leading-relaxed text-white/40 line-clamp-2 flex-1 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded text-[10.5px] font-medium text-white/45 bg-white/[0.05] border border-white/[0.06]"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2 py-0.5 rounded text-[10.5px] font-medium text-white/30 bg-white/[0.03] border border-white/[0.05]">
              +{project.tech.length - 4}
            </span>
          )}
        </div>
        <div
          className="flex items-center justify-between pt-3.5 border-t"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <span
            className="text-[12.5px] font-semibold tracking-wide flex items-center gap-1.5 transition-all duration-200"
            style={{ color: accentFrom }}
          >
            View Project
            <svg
              className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200"
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
          </span>
          <span className="text-[11px] text-white/25">
            {project.tech.length} technologies
          </span>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400"
        style={{
          background: `linear-gradient(90deg, ${accentFrom}, ${accentTo})`,
        }}
      />
    </Link>
  );
}

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="relative py-28 bg-[#080810] overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <div className="pointer-events-none absolute top-1/3 right-0 w-96 h-96 rounded-full bg-indigo-700/[0.08] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-sky-700/[0.08] blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-flex items-center gap-2 text-[11.5px] font-semibold tracking-[0.22em] uppercase text-sky-400/70 mb-4">
            <span className="w-5 h-px bg-sky-400/50" />
            Selected Work
            <span className="w-5 h-px bg-sky-400/50" />
          </span>
          <h2 className="text-[2.6rem] sm:text-5xl font-bold tracking-tight text-white mb-5">
            Portfolio
          </h2>
          <p className="text-[15px] text-white/35 max-w-md leading-relaxed">
            From Web3 platforms and DeFi exchanges to SaaS tools and modern web
            apps — built end-to-end.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </section>
  );
}
