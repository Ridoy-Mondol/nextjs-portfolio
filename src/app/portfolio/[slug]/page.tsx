import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) return {};

  return {
    title: `${project.name} — Portfolio | Ahatashamul`,
    description: project.description,
    openGraph: {
      title: `${project.name} — Portfolio | Ahatashamul`,
      description: project.description,
      type: "website",
    },
    twitter: {
      title: `${project.name} — Portfolio | Ahatashamul`,
      description: project.description,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.id === slug);
  if (!project) notFound();

  const { accentFrom, accentTo } = project;
  const otherProjects = projects.filter((p) => p.id !== project.id);

  return (
    <div className="min-h-screen bg-[#080810] text-white">
      {/* Ambient glows */}
      <div
        className="pointer-events-none fixed top-0 right-0 w-[600px] h-[600px] rounded-full blur-[160px] opacity-[0.06] -z-10"
        style={{
          background: `radial-gradient(circle, ${accentFrom}, transparent 70%)`,
        }}
      />
      <div
        className="pointer-events-none fixed bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[140px] opacity-[0.06] -z-10"
        style={{
          background: `radial-gradient(circle, ${accentTo}, transparent 70%)`,
        }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-10 pb-28">
        {/* ── Breadcrumb ── */}
        <div className="flex items-center gap-2 text-[13px] text-white/35 mb-6">
          <Link
            href="/#portfolio"
            className="hover:text-white/70 transition-colors duration-150 font-medium"
          >
            Portfolio
          </Link>
          <svg
            className="w-3.5 h-3.5 text-white/20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span className="text-white/55">{project.name}</span>
        </div>

        {/* ── Tag pills ── */}
        <div className="flex flex-wrap items-center gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-semibold border"
              style={{
                background: `${accentFrom}15`,
                color: accentFrom,
                borderColor: `${accentFrom}35`,
              }}
            >
              {tag}
            </span>
          ))}
          {project.projectType === "client" && project.client && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-semibold border border-white/[0.1] text-white/50 bg-white/[0.04]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              {project.client}
            </span>
          )}
        </div>

        {/* ── Title ── */}
        <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight leading-[1.15] text-white mb-4">
          {project.tagline}
        </h1>

        {/* ── Description ── */}
        <p className="text-[15.5px] leading-relaxed text-white/50 max-w-3xl mb-8">
          {project.description}
        </p>

        {/* ── CTA Buttons ── */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13.5px] font-bold text-white border border-white/[0.18] bg-white/[0.06] hover:bg-white/[0.12] hover:border-white/30 transition-all duration-200 group"
            >
              Live Demo
              <svg
                className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 opacity-70"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 17L17 7M17 7H7M17 7v10"
                />
              </svg>
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13.5px] font-bold text-white border border-white/[0.18] bg-white/[0.06] hover:bg-white/[0.12] hover:border-white/30 transition-all duration-200 group"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              View on GitHub
            </Link>
          )}
        </div>

        {/* ── Main thumbnail ── */}
        <div className="relative w-full h-64 sm:h-80 lg:h-[420px] rounded-2xl overflow-hidden border border-white/[0.09] mb-10 bg-[#0d0d1c]">
          <Image
            src={project.thumbnail}
            alt={project.name}
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
          {/* ════ LEFT: Article ════ */}
          <div className="flex flex-col gap-6">
            {/* PROJECT OVERVIEW card */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0d0d1c] overflow-hidden">
              <div className="px-6 py-3 border-b border-white/[0.06]">
                <p className="text-[10.5px] font-bold tracking-[0.2em] uppercase text-white/30">
                  Project Overview
                </p>
              </div>
              <div className="px-6 py-5">
                <p className="text-[15px] leading-[1.85] text-white/55">
                  {project.overview}
                </p>
              </div>
            </div>

            {/* KEY FEATURES card */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0d0d1c] overflow-hidden">
              <div className="px-6 py-3 border-b border-white/[0.06]">
                <p className="text-[10.5px] font-bold tracking-[0.2em] uppercase text-white/30">
                  Key Features
                </p>
              </div>
              <div className="px-6 py-6 flex flex-col gap-10">
                {project.featureSections.map((section, idx) => (
                  <div key={idx}>
                    {/* Section header */}
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="flex items-center justify-center w-9 h-9 rounded-xl text-lg flex-shrink-0"
                        style={{
                          background: `${accentFrom}15`,
                          border: `1px solid ${accentFrom}30`,
                        }}
                      >
                        {section.icon}
                      </span>
                      <h3 className="text-[15px] font-bold text-white/85">
                        {section.title}
                      </h3>
                    </div>

                    {/* Feature items — 2 columns on sm+ */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-5">
                      {section.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-white/50"
                        >
                          <svg
                            className="w-4 h-4 flex-shrink-0 mt-0.5"
                            style={{ color: accentFrom }}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {item.text}
                        </li>
                      ))}
                    </ul>

                    {/* Feature image */}
                    {section.image && (
                      <div className="rounded-xl overflow-hidden border border-white/[0.07]">
                        <Image
                          src={section.image}
                          alt={section.imageCaption || section.title}
                          width={900}
                          height={480}
                          className="w-full object-cover"
                        />
                        {section.imageCaption && (
                          <div className="px-4 py-2.5 border-t border-white/[0.06] bg-white/[0.02]">
                            <p className="text-[12px] text-white/30 italic">
                              {section.imageCaption}
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Divider between sections */}
                    {idx < project.featureSections.length - 1 && (
                      <div className="mt-10 h-px bg-white/[0.05]" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* HIRE CTA card */}
            <div
              className="rounded-2xl border border-white/[0.08] overflow-hidden p-8 text-center"
              style={{
                background: `linear-gradient(135deg ${accentFrom}0d 0%, ${accentTo}0d 100%)`,
                borderColor: `${accentFrom}20`,
              }}
            >
              <h3 className="text-[18px] font-bold text-white mb-2">
                Have a similar project in mind?
              </h3>
              <p className="text-[14px] text-white/45 mb-6">
                I&apos;m available for new contracts. Let&apos;s talk about your
                requirements.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="https://www.upwork.com/freelancers/~01763d2c19d3cee0b3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13.5px] font-bold text-white border border-white/[0.18] bg-white/[0.07] hover:bg-white/[0.13] hover:border-white/30 transition-all duration-200"
                >
                  Hire me on Upwork ↗
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13.5px] font-bold border transition-all duration-200"
                  style={{
                    background: `${accentFrom}18`,
                    color: accentFrom,
                    borderColor: `${accentFrom}40`,
                  }}
                >
                  Send a message
                </Link>
              </div>
            </div>
          </div>

          {/* ════ RIGHT: Sidebar ════ */}
          <aside className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
            {/* PROJECT INFO */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0d0d1c] overflow-hidden">
              <div className="px-5 py-3.5 border-b border-white/[0.06]">
                <p className="text-[10.5px] font-bold tracking-[0.2em] uppercase text-white/30">
                  Project Info
                </p>
              </div>
              <div className="divide-y divide-white/[0.05]">
                {[
                  { label: "Project", value: project.name },
                  ...(project.projectType === "client" && project.client
                    ? [{ label: "Client", value: project.client }]
                    : [{ label: "Type", value: "Personal Project" }]),
                  {
                    label: "Platform",
                    value:
                      project.projectType === "client" ? "Upwork" : "Personal",
                  },
                  { label: "My Role", value: project.myRole },
                  { label: "Category", value: project.category },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between px-5 py-3.5"
                  >
                    <span className="text-[12.5px] text-white/35">{label}</span>
                    <span className="text-[12.5px] font-bold text-white/80 text-right">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* TECH STACK */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0d0d1c] overflow-hidden">
              <div className="px-5 py-3.5 border-b border-white/[0.06]">
                <p className="text-[10.5px] font-bold tracking-[0.2em] uppercase text-white/30">
                  Tech Stack
                </p>
              </div>
              <div className="p-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-semibold border"
                    style={{
                      background: `${accentFrom}10`,
                      color: accentFrom,
                      borderColor: `${accentFrom}28`,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* MORE PROJECTS */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0d0d1c] overflow-hidden">
              <div className="px-5 py-3.5 border-b border-white/[0.06]">
                <p className="text-[10.5px] font-bold tracking-[0.2em] uppercase text-white/30">
                  More Projects
                </p>
              </div>
              <div className="p-2">
                {otherProjects.map((p) => (
                  <Link
                    key={p.id}
                    href={`/portfolio/${p.id}`}
                    className="group flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/[0.05] transition-colors duration-150"
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex-shrink-0 flex items-center justify-center text-[10px] font-black"
                      style={{
                        background: `linear-gradient(135deg, ${p.accentFrom}20, ${p.accentTo}25)`,
                        border: `1px solid ${p.accentFrom}35`,
                        color: p.accentFrom,
                      }}
                    >
                      {p.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[12.5px] font-bold text-white/65 group-hover:text-white/90 truncate transition-colors duration-150">
                        {p.name}
                      </p>
                      <p className="text-[11px] text-white/25 truncate">
                        {p.category}
                      </p>
                    </div>
                    <svg
                      className="w-3 h-3 text-white/35 group-hover:text-white/70 group-hover:translate-x-0.5 flex-shrink-0 transition-all duration-150"
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
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
