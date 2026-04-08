"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type MouseEvent } from "react";

// ── Animated typing cycle ─────────────────────────────────────────────────────
const ROLES = [
  "Full-Stack Developer",
  "AI-Powered App Builder",
  "SaaS Platform Engineer",
  "Next.js & React Expert",
];

function useTypingCycle(words: string[], speed = 75, pause = 2000) {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx));
        setCharIdx((c) => c + 1);
      }, speed);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx));
        setCharIdx((c) => c - 1);
      }, speed / 2);
    } else {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return displayed;
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function HeroSection() {
  const role = useTypingCycle(ROLES);

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const fadeUp = (delay: string) =>
    `transition-all duration-700 ease-out ${delay} ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
    }`;

  const handleSectionClick = (
    sectionId: string,
    event: MouseEvent<HTMLAnchorElement>,
  ) => {
    if (window.location.pathname === "/") {
      event.preventDefault();
      const section = document.getElementById(sectionId);
      if (section) {
        const navHeight = 80; // Approximate navbar height (56px mobile + padding, 64px desktop)
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
      id="home"
      className="relative min-h-[100svh] md:min-h-[calc(100vh-64px)] flex items-center overflow-hidden bg-[#080810]"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-sky-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[100px]" />

      {/* Grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 px-6 lg:px-8 py-12 sm:py-16 lg:py-0">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-14 lg:gap-16">
          {/* ── LEFT — Text Content ── */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left w-full">
            {/* Main heading */}
            <h1
              className={`text-[1.5rem] sm:text-[1.8rem] md:text-[2.2rem] lg:text-[2.6rem] xl:text-[3rem] font-bold leading-[1.15] tracking-tight text-white mb-4 lg:mb-5 ${fadeUp("delay-[0ms]")}`}
            >
              Full-Stack Developer
              <br />
              <span className="text-white/25">&</span>{" "}
              <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                Top Rated Plus
              </span>
              <br />
              Upwork Freelancer
            </h1>

            {/* Typing role */}
            <div
              className={`flex items-center justify-center md:justify-start mb-5 lg:mb-7 min-h-[28px] ${fadeUp("delay-[100ms]")}`}
            >
              <span className="text-[0.8rem] sm:text-[0.95rem] md:text-[1.05rem] lg:text-[1.15rem] font-semibold text-white/60 font-mono tracking-wide">
                {role}
                <span className="inline-block w-[2px] h-[18px] sm:h-[20px] lg:h-[22px] ml-1 bg-sky-400 align-middle animate-pulse rounded-sm" />
              </span>
            </div>

            {/* Bio */}
            <p
              className={`text-[13px] sm:text-[14px] md:text-[15px] lg:text-[15.5px] leading-relaxed text-white/50 max-w-[500px] mb-7 lg:mb-9 ${fadeUp("delay-[200ms]")}`}
            >
              I&apos;m a full-stack developer with{" "}
              <span className="text-white/80 font-medium">
                3+ years of experience
              </span>{" "}
              building AI-powered web apps, SaaS platforms, and dashboards using{" "}
              <span className="text-white/80 font-medium">
                Next.js, React, and Node.js
              </span>
              . I handle everything from database to UI.
            </p>

            {/* Buttons */}
            <div
              className={`flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-start gap-3 w-full sm:w-auto ${fadeUp("delay-[300ms]")}`}
            >
              <Link
                href="#portfolio"
                onClick={(event) => handleSectionClick("portfolio", event)}
                className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 rounded-lg font-semibold text-[13px] sm:text-[14px] tracking-wide bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                View Portfolio
                <svg
                  className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200"
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
                className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 rounded-lg font-semibold text-[13px] sm:text-[14px] tracking-wide border border-white/[0.12] text-white/75 hover:text-white hover:border-white/25 bg-white/[0.04] hover:bg-white/[0.08] transition-all duration-200"
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

          {/* ── RIGHT — Photo with decorative frame (EXACTLY SAME ON ALL SCREENS) ── */}
          <div className={`flex-shrink-0 ${fadeUp("delay-[120ms]")}`}>
            {/* Outer sizing wrapper - scales proportionally */}
            <div
              className="relative flex items-center justify-center"
              style={{
                width: "clamp(290px, 45vw, 360px)",
                height: "clamp(290px, 45vw, 360px)",
              }}
            >
              {/* ── Layer 1: large soft glow bloom ── */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-500/20 via-indigo-500/15 to-sky-400/10 blur-3xl scale-125 pointer-events-none" />

              {/* ── Layer 2: outer dashed orbit ring ── */}
              <div className="absolute inset-[-16px] rounded-full border border-dashed border-sky-400/20" />

              {/* ── Layer 3: slowly spinning arc ring with gap ── */}
              <div
                className="absolute inset-[-10px] rounded-full pointer-events-none"
                style={{
                  background: "transparent",
                  border: "1.5px solid transparent",
                  borderRadius: "9999px",
                  backgroundImage:
                    "conic-gradient(from 0deg, transparent 0deg, transparent 60deg, rgba(56,189,248,0.55) 90deg, rgba(129,140,248,0.55) 180deg, rgba(56,189,248,0.55) 270deg, transparent 300deg, transparent 360deg)",
                  backgroundOrigin: "border-box",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "destination-out",
                  maskComposite: "exclude",
                  animation: "spinRing 8s linear infinite",
                }}
              />

              {/* ── Layer 4: counter-spin slower arc ── */}
              <div
                className="absolute inset-[-20px] rounded-full pointer-events-none"
                style={{
                  backgroundImage:
                    "conic-gradient(from 180deg, transparent 0deg, transparent 80deg, rgba(129,140,248,0.3) 120deg, rgba(56,189,248,0.3) 200deg, transparent 240deg, transparent 360deg)",
                  backgroundOrigin: "border-box",
                  border: "1px solid transparent",
                  borderRadius: "9999px",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "destination-out",
                  maskComposite: "exclude",
                  animation: "spinRingReverse 12s linear infinite",
                }}
              />

              {/* ── Layer 5: four corner diamond accents ── */}
              {/* Top */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-sky-400/70 rounded-[1px] shadow-[0_0_8px_2px_rgba(56,189,248,0.6)]" />
              {/* Bottom */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rotate-45 bg-indigo-400/70 rounded-[1px] shadow-[0_0_8px_2px_rgba(129,140,248,0.6)]" />
              {/* Left */}
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-indigo-400/60 rounded-[1px] shadow-[0_0_8px_2px_rgba(129,140,248,0.5)]" />
              {/* Right */}
              <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-sky-400/60 rounded-[1px] shadow-[0_0_8px_2px_rgba(56,189,248,0.5)]" />

              {/* ── Layer 7: gradient border ring around the circle ── */}
              <div
                className="relative rounded-full p-[3px]"
                style={{
                  width: "calc(100% - 40px)",
                  height: "calc(100% - 40px)",
                  background:
                    "linear-gradient(135deg, #38bdf8 0%, #818cf8 40%, #38bdf8 70%, #818cf8 100%)",
                }}
              >
                {/* Dark gap ring */}
                <div className="w-full h-full rounded-full p-[3px] bg-[#080810]">
                  {/* Photo */}
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <Image
                      src="/images/home-img.jpeg"
                      alt="Ahatashamul"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover object-top"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframe animations */}
      <style jsx>{`
        @keyframes spinRing {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spinRingReverse {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
      `}</style>
    </section>
  );
}
