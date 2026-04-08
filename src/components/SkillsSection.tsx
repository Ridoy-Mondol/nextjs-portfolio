"use client";

import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    label: "Frontend",
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
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    skills: [
      { name: "Next.js", level: 95 },
      { name: "React", level: 95 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Material UI", level: 85 },
    ],
  },
  {
    label: "Backend",
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
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      </svg>
    ),
    skills: [
      { name: "Node.js", level: 90 },
      { name: "REST APIs", level: 92 },
      { name: "Supabase", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 85 },
    ],
  },
  {
    label: "Web3 & Blockchain",
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
          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
        />
      </svg>
    ),
    skills: [
      { name: "XPR Network", level: 85 },
      { name: "Smart Contracts", level: 82 },
      { name: "Proton Blockchain", level: 80 },
      { name: "DeFi / DEX", level: 82 },
      { name: "Web3.js / Ethers.js", level: 84 },
    ],
  },
  {
    label: "Tools & DevOps",
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
          d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "GitHub Actions", level: 85 },
      { name: "CI/CD", level: 83 },
      { name: "Vercel / Deployment", level: 90 },
      { name: "Docker", level: 80 },
    ],
  },
];

// ── Animated skill bar ────────────────────────────────────────────────────────
function SkillBar({
  name,
  level,
  started,
}: {
  name: string;
  level: number;
  started: boolean;
}) {
  const [width, setWidth] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!started || hasRun.current) return;
    hasRun.current = true;
    const timeout = setTimeout(() => {
      setWidth(level);
    }, 100);
    return () => clearTimeout(timeout);
  }, [started, level]);

  // Reset animation when component re-mounts (tab changes)
  useEffect(() => {
    hasRun.current = false;
    setWidth(0);
  }, [name]);

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <span className="text-[13px] font-medium text-white/65">{name}</span>
        <span className="text-[12px] font-bold text-sky-400/80 tabular-nums">
          {level}%
        </span>
      </div>
      <div className="h-[6px] w-full rounded-full bg-white/[0.06] overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-sky-400 to-indigo-400 transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

// ── Category tab ─────────────────────────────────────────────────────────────
function CategoryTab({
  label,
  icon,
  active,
  onClick,
}: {
  label: string;
  icon: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-semibold transition-all duration-200
        ${
          active
            ? "text-white bg-sky-400/10 border border-sky-400/30"
            : "text-white/40 border border-transparent hover:text-white/65 hover:bg-white/[0.04]"
        }`}
    >
      <span className={active ? "text-sky-400" : ""}>{icon}</span>
      {label}
      {active && (
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-[2px] rounded-full bg-gradient-to-r from-sky-400 to-indigo-400" />
      )}
    </button>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const barsCardRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  // Start bar animations when 50% of the bars card is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    if (barsCardRef.current) observer.observe(barsCardRef.current);
    return () => observer.disconnect();
  }, []);

  const current = skillCategories[activeTab];

  return (
    <section
      id="skills"
      className="relative py-28 bg-[#080810] overflow-hidden"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <div className="pointer-events-none absolute top-1/3 right-0 w-96 h-96 rounded-full bg-sky-700/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/3 left-0 w-96 h-96 rounded-full bg-indigo-700/[0.07] blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* ── Heading ── */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-flex items-center gap-2 text-[11.5px] font-semibold tracking-[0.22em] uppercase text-sky-400/70 mb-4">
            <span className="w-5 h-px bg-sky-400/50" />
            What I Know
            <span className="w-5 h-px bg-sky-400/50" />
          </span>
          <h2 className="text-[2.6rem] sm:text-5xl font-bold tracking-tight text-white mb-5">
            Skills
          </h2>
          <p className="text-[15px] text-white/35 max-w-md leading-relaxed">
            Technologies and tools I work with across the full stack — frontend,
            backend, Web3, and DevOps.
          </p>
        </div>

        {/* ── Skill bars with tabs ── */}
        <div className="flex flex-col gap-6 max-w-7xl mx-auto">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 justify-center">
            {skillCategories.map((cat, i) => (
              <CategoryTab
                key={cat.label}
                label={cat.label}
                icon={cat.icon}
                active={activeTab === i}
                onClick={() => {
                  setActiveTab(i);
                  // Re-trigger bars when switching tabs
                  setStarted(false);
                  setTimeout(() => setStarted(true), 50);
                }}
              />
            ))}
          </div>

          {/* Skill bars panel */}
          <div
            ref={barsCardRef}
            className="rounded-2xl border border-white/[0.08] bg-[#0d0d1c] p-6 flex flex-col gap-5"
          >
            {/* Panel header */}
            <div className="flex items-center gap-2.5 pb-4 border-b border-white/[0.06]">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-sky-400/10 border border-sky-400/20 text-sky-400">
                {current.icon}
              </span>
              <p className="text-[13.5px] font-bold text-white/75">
                {current.label}
              </p>
            </div>

            {/* Bars */}
            <div className="flex flex-col gap-4">
              {current.skills.map((skill) => (
                <SkillBar
                  key={`${activeTab}-${skill.name}`}
                  name={skill.name}
                  level={skill.level}
                  started={started}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </section>
  );
}
