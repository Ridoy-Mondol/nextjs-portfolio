"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type MouseEvent } from "react";

// ── Animated counter ──────────────────────────────────────────────────────────
function useCounter(target: number, duration = 2000, started: boolean) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!started || hasRun.current) return;
    hasRun.current = true;

    let startTime: number | null = null;
    const raf = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(raf);
      else setCount(target);
    };
    requestAnimationFrame(raf);
  }, [started, target, duration]);

  return count;
}

function StatCard({
  target,
  suffix,
  prefix = "",
  label,
  started,
  visible,
  delay,
}: {
  target: number;
  suffix: string;
  prefix?: string;
  label: string;
  started: boolean;
  visible: boolean;
  delay: string;
}) {
  const count = useCounter(target, 2000, started);
  return (
    <div
      className={`relative flex flex-col items-center justify-center py-4 sm:py-5 md:py-6 px-2 sm:px-3 rounded-xl sm:rounded-2xl border border-white/[0.08] bg-white/[0.025] text-center overflow-hidden transition-all duration-700 ease-out ${delay} ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {/* Top gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 sm:w-14 h-[2px] rounded-full bg-gradient-to-r from-sky-400/60 to-indigo-400/60" />
      <span className="text-xl sm:text-2xl md:text-[1.75rem] lg:text-3xl font-bold text-white tabular-nums leading-none mb-1 sm:mb-1.5">
        {prefix}
        {count}
        {suffix}
      </span>
      <span className="text-[10px] sm:text-[11px] md:text-[11.5px] text-white/35 leading-tight">
        {label}
      </span>
    </div>
  );
}

const stats = [
  { target: 3, suffix: "+", label: "Years Experience" },
  { target: 100, suffix: "%", label: "Job Success Score" },
  { target: 1400, suffix: "+", label: "Hours on Upwork" },
  { target: 17, suffix: "K+", prefix: "$", label: "Earned on Upwork" },
  { target: 5, suffix: "★", label: "All Reviews" },
];

const skills = [
  "Next.js",
  "React",
  "Node.js",
  "TypeScript",
  "Supabase",
  "MongoDB",
  "PostgreSQL",
  "Tailwind CSS",
  "XPR Network",
  "Smart Contracts",
  "REST API",
  "GitHub Actions",
];

// ── Component ─────────────────────────────────────────────────────────────────
export default function AboutSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

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

  // Mark component as mounted after first render
  useEffect(() => {
    // Small delay to ensure initial hidden state is rendered first
    const mountTimeout = setTimeout(() => {
      setHasMounted(true);
    }, 100);

    return () => clearTimeout(mountTimeout);
  }, []);

  // Fade-in animation trigger - only starts observing after mount
  useEffect(() => {
    if (!hasMounted || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "-80px 0px -80px 0px",
      },
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [hasMounted]);

  // Counter animation trigger
  useEffect(() => {
    if (!hasMounted || !statsRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5,
        rootMargin: "-50px 0px -50px 0px",
      },
    );

    observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, [hasMounted]);

  const fadeUp = (delay: string) =>
    `transition-all duration-700 ease-out ${delay} ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
    }`;

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-[#080810] overflow-hidden"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <div className="pointer-events-none absolute top-1/4 left-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-sky-700/[0.07] blur-[100px] sm:blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-indigo-700/[0.07] blur-[100px] sm:blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 px-6 lg:px-8">
        {/* ── Section heading ── */}
        <div
          className={`flex flex-col items-center text-center mb-10 sm:mb-12 lg:mb-16 ${fadeUp("delay-[0ms]")}`}
        >
          <span className="inline-flex items-center gap-2 text-[10px] sm:text-[11.5px] font-semibold tracking-[0.22em] uppercase text-sky-400/70 mb-3 sm:mb-4">
            <span className="w-4 sm:w-5 h-px bg-sky-400/50" />
            Who I Am
            <span className="w-4 sm:w-5 h-px bg-sky-400/50" />
          </span>
          <h2 className="text-[2rem] sm:text-[2.4rem] md:text-[2.6rem] lg:text-5xl font-bold tracking-tight text-white mb-3 sm:mb-5">
            About Me
          </h2>
          <p className="text-[13px] sm:text-[14px] md:text-[15px] text-white/35 max-w-md leading-relaxed px-4 sm:px-0">
            A little background on who I am, what I do, and how I work.
          </p>
        </div>

        {/* ── Two-column layout (side by side from md/768px) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-10 lg:gap-16 items-center">
          {/* ════ LEFT — Photo + info ════ */}
          <div className="flex flex-col items-center md:items-start gap-6 sm:gap-8">
            {/* ── Photo frame + Name wrapper ── */}
            <div
              className={`flex flex-col items-center ${fadeUp("delay-[100ms]")}`}
            >
              {/* ── Decorative photo frame ── */}
              <div
                className="relative flex items-center justify-center
                  w-[300px] h-[300px]
                  sm:w-[340px] sm:h-[340px]
                  md:w-[280px] md:h-[280px]
                  lg:w-[330px] lg:h-[330px]
                  xl:w-[360px] xl:h-[360px]"
              >
                {/* Outer decorative square frame */}
                <div className="absolute inset-0 w-full h-full">
                  {/* Corner brackets */}
                  <div className="absolute top-0 left-0 w-5 sm:w-6 md:w-5 lg:w-7 h-5 sm:h-6 md:h-5 lg:h-7 border-t-2 border-l-2 border-sky-400/60 rounded-tl-lg" />
                  <div className="absolute top-0 right-0 w-5 sm:w-6 md:w-5 lg:w-7 h-5 sm:h-6 md:h-5 lg:h-7 border-t-2 border-r-2 border-indigo-400/60 rounded-tr-lg" />
                  <div className="absolute bottom-0 left-0 w-5 sm:w-6 md:w-5 lg:w-7 h-5 sm:h-6 md:h-5 lg:h-7 border-b-2 border-l-2 border-indigo-400/60 rounded-bl-lg" />
                  <div className="absolute bottom-0 right-0 w-5 sm:w-6 md:w-5 lg:w-7 h-5 sm:h-6 md:h-5 lg:h-7 border-b-2 border-r-2 border-sky-400/60 rounded-br-lg" />

                  {/* Horizontal mid lines */}
                  <div className="absolute top-1/2 -translate-y-1/2 left-0 w-2 sm:w-2.5 h-px bg-sky-400/30" />
                  <div className="absolute top-1/2 -translate-y-1/2 right-0 w-2 sm:w-2.5 h-px bg-sky-400/30" />
                  {/* Vertical mid lines */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 h-2 sm:h-2.5 w-px bg-indigo-400/30" />
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-0 h-2 sm:h-2.5 w-px bg-indigo-400/30" />
                </div>

                {/* Glow bloom */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-500/20 to-indigo-500/20 blur-2xl scale-110 pointer-events-none" />

                {/* Gradient ring border around circle */}
                <div
                  className="relative rounded-full p-[3px]"
                  style={{
                    width: "calc(100% - 40px)",
                    height: "calc(100% - 40px)",
                    background:
                      "linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #38bdf8 100%)",
                  }}
                >
                  {/* Dark inner gap ring */}
                  <div className="w-full h-full rounded-full p-[3px] bg-[#080810]">
                    {/* Photo */}
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <Image
                        src="/images/my-img.jpeg"
                        alt="Ahatashamul"
                        width={320}
                        height={320}
                        className="w-full h-full object-cover object-top"
                        priority
                      />
                    </div>
                  </div>
                </div>

                {/* Available badge */}
                <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 flex items-center gap-1.5 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-full border border-white/[0.1] bg-[#0d0d1c]/95 backdrop-blur-sm shadow-xl">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-white/70">
                    Available
                  </span>
                </div>

                {/* Floating dot accents */}
                <div className="absolute -top-1.5 -left-1.5 sm:-top-2 sm:-left-2 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-sky-400/50 blur-[2px]" />
                <div className="absolute -bottom-1.5 -right-1.5 sm:-bottom-2 sm:-right-2 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-indigo-400/50 blur-[2px]" />
              </div>

              {/* Name + title */}
              <div
                className="text-center mt-6 sm:mt-8
                  w-[300px]
                  sm:w-[340px]
                  md:w-[280px]
                  lg:w-[330px]
                  xl:w-[360px]"
              >
                <p className="text-base sm:text-lg md:text-base lg:text-[18px] font-bold text-white">
                  Ahatashamul
                </p>
                <p className="text-[12px] sm:text-[13px] md:text-[12px] lg:text-[13.5px] text-white/40 mt-0.5">
                  Full-Stack Developer
                </p>
              </div>
            </div>

            {/* Quick info pills */}
            <div
              className={`flex flex-col gap-2 sm:gap-2.5 w-full ${fadeUp("delay-[300ms]")}`}
            >
              {[
                { icon: "🏆", text: "Top Rated Plus — Upwork" },
                { icon: "📍", text: "Bangladesh" },
                { icon: "💼", text: "Open to freelance & contracts" },
              ].map(({ icon, text }) => (
                <div
                  key={text}
                  className="flex w-full items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border border-white/[0.07] bg-white/[0.03] text-[11px] sm:text-[13px] md:text-[12px] lg:text-[13px] text-white/55"
                >
                  <span className="text-sm sm:text-base">{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ════ RIGHT — Bio + skills + CTAs ════ */}
          <div className="flex flex-col gap-6 sm:gap-8 md:gap-6 lg:gap-8 items-center md:items-start text-center md:text-left">
            {/* Bio */}
            <div className={fadeUp("delay-[150ms]")}>
              <h3 className="text-xl sm:text-2xl md:text-xl lg:text-[1.7rem] font-bold text-white mb-4 sm:mb-5 md:mb-4 lg:mb-5 leading-snug">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                  Ahatashamul
                </span>
              </h3>
              <div className="flex flex-col gap-3 sm:gap-4 md:gap-3 lg:gap-4 text-[13px] sm:text-[15px] md:text-[13px] lg:text-[15px] leading-[1.8] sm:leading-[1.9] text-white/55">
                <p>
                  I&apos;m a full-stack developer with{" "}
                  <span className="text-white/80 font-medium">
                    3+ years of experience
                  </span>{" "}
                  building production-grade web applications — from AI-powered
                  platforms and decentralized Web3 systems to SaaS tools and
                  modern dashboards.
                </p>
                <p>
                  I specialize in{" "}
                  <span className="text-white/80 font-medium">
                    Next.js, React, and Node.js
                  </span>{" "}
                  on the frontend and backend, with hands-on blockchain
                  experience using{" "}
                  <span className="text-white/80 font-medium">
                    XPR Network / Proton Blockchain
                  </span>{" "}
                  and smart contracts. I handle everything from database
                  architecture to pixel-perfect UI.
                </p>
                <p>
                  On Upwork, I hold a{" "}
                  <span className="text-white/80 font-medium">
                    Top Rated Plus
                  </span>{" "}
                  badge — top 3% of the platform — with a{" "}
                  <span className="text-white/80 font-medium">
                    100% Job Success Score
                  </span>
                  , 1,400+ hours logged, and all 5-star reviews. I take pride in
                  clean, maintainable code and clear communication throughout
                  every project.
                </p>
              </div>
            </div>

            {/* Core technologies */}
            <div className={fadeUp("delay-[250ms]")}>
              <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.18em] uppercase text-white/30 mb-2 sm:mb-3">
                Core Technologies
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-1.5 sm:gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 sm:px-3 md:px-2 lg:px-3 py-1 sm:py-1.5 md:py-1 lg:py-1.5 rounded-md sm:rounded-lg text-[10px] sm:text-[12.5px] md:text-[11px] lg:text-[12.5px] font-medium text-white/55 border border-white/[0.08] bg-white/[0.04] hover:text-white/80 hover:border-white/[0.15] hover:bg-white/[0.07] transition-all duration-150"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div
              className={`flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-2 sm:gap-3 w-full sm:w-auto ${fadeUp("delay-[350ms]")}`}
            >
              <Link
                href="#portfolio"
                onClick={(event) => handleSectionClick("portfolio", event)}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 rounded-lg text-[12px] sm:text-[13.5px] md:text-[12px] lg:text-[13.5px] font-bold text-white bg-gradient-to-r from-sky-500 to-indigo-500 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                View My Work
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
              <Link
                href="#contact"
                onClick={(event) => handleSectionClick("contact", event)}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 rounded-lg text-[12px] sm:text-[13.5px] md:text-[12px] lg:text-[13.5px] font-bold border border-white/[0.12] text-white/75 hover:text-white hover:border-white/25 bg-white/[0.04] hover:bg-white/[0.08] transition-all duration-200"
              >
                Contact Me
                <svg
                  className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* ── Animated stats ── */}
        <div
          ref={statsRef}
          className="mt-12 sm:mt-14 lg:mt-16 pt-8 sm:pt-10 border-t border-white/[0.07]"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3 lg:gap-4">
            {stats.map(({ target, suffix, prefix, label }, index) => (
              <StatCard
                key={label}
                target={target}
                suffix={suffix}
                prefix={prefix}
                label={label}
                started={started}
                visible={visible}
                delay={`delay-[${400 + index * 50}ms]`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </section>
  );
}
