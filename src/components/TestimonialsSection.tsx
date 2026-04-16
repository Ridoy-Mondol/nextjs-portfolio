"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const testimonials = [
  {
    id: 1,
    review:
      "He completed the project on time. He was communicating actively to ensure that my requirements are met. He worked beyond my expectations and delivered exactly what I intended to achieve. I will surely hire him in all my future projects.",
    rating: 5,
    project: "React Redux Developer",
    type: "Fixed Price",
    period: "Oct 2024",
    client: "Bhety",
    location: "Austria",
    flag: "🇦🇹",
    repeat: true,
  },
  {
    id: 2,
    review:
      "I had a great experience working with MD. He went above and beyond my expectations. Looking forward to working with him again.",
    rating: 5,
    project: "Next.js Blog System Development",
    type: "Fixed Price",
    period: "Nov 2024",
    client: "Jervis",
    location: "USA",
    flag: "🇺🇸",
    repeat: true,
  },
  {
    id: 3,
    review:
      "Delivered on time and with expertise. I fully recommend him for React projects.",
    rating: 5,
    project: "Simple React App",
    type: "Fixed Price",
    period: "Apr 2025",
    client: "Bhety",
    location: "Austria",
    flag: "🇦🇹",
    repeat: true,
  },
  {
    id: 4,
    review: "Great work!",
    rating: 5,
    project: "Build Polling System Similar to Twitter",
    type: "Fixed Price",
    period: "Nov 2024",
    client: "Jervis",
    location: "USA",
    flag: "🇺🇸",
    repeat: true,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-[18px] h-[18px] ${i < rating ? "text-amber-400" : "text-white/15"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = testimonials.length;

  const goTo = useCallback(
    (index: number, dir: "next" | "prev" = "next") => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setActive(index);
        setAnimating(false);
      }, 320);
    },
    [animating],
  );

  const next = useCallback(() => {
    goTo((active + 1) % total, "next");
  }, [active, total, goTo]);

  const prev = useCallback(() => {
    goTo((active - 1 + total) % total, "prev");
  }, [active, total, goTo]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, next]);

  const t = testimonials[active];

  return (
    <section
      id="testimonials"
      className="relative py-28 bg-[#080810] overflow-hidden"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <div className="pointer-events-none absolute top-1/4 right-0 w-96 h-96 rounded-full bg-sky-700/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-indigo-700/[0.07] blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* ── Heading ── */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-flex items-center gap-2 text-[11.5px] font-semibold tracking-[0.22em] uppercase text-sky-400/70 mb-4">
            <span className="w-5 h-px bg-sky-400/50" />
            Client Feedback
            <span className="w-5 h-px bg-sky-400/50" />
          </span>
          <h2 className="text-[2.6rem] sm:text-5xl font-bold tracking-tight text-white mb-5">
            Testimonials
          </h2>
          <p className="text-[15px] text-white/35 max-w-md leading-relaxed">
            What clients say after working with me on Upwork — all 5-star
            reviews.
          </p>
        </div>

        {/* ── Carousel ── */}
        <div
          className="relative w-full"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Card — fixed total height */}
          <div className="relative rounded-2xl border border-white/[0.09] bg-[#0d0d1c] overflow-hidden">
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />

            {/* Decorative quote watermark */}
            <div className="absolute top-4 right-10 text-[160px] leading-none font-black text-white/[0.025] select-none pointer-events-none">
              "
            </div>

            <div className="p-8 sm:p-12 lg:p-14 flex flex-col h-[490px] md:h-[400px] lg:h-[380px]">
              {/* Stars row — */}
              <div className="flex items-center gap-3 mb-6">
                <StarRating rating={t.rating} />
                <span className="text-[12px] text-white/30 font-medium">
                  5.0 / 5.0
                </span>
              </div>

              {/* Review text — */}
              <div className="flex-1 flex flex-col justify-between">
                {/* Quote block */}
                <div
                  className={`transition-all duration-300 ease-out ${
                    animating
                      ? direction === "next"
                        ? "opacity-0 translate-x-8"
                        : "opacity-0 -translate-x-8"
                      : "opacity-100 translate-x-0"
                  }`}
                >
                  <blockquote className="text-[15px] sm:text-[19px] lg:text-[21px] leading-[1.85] text-white/72 font-medium">
                    &ldquo;{t.review}&rdquo;
                  </blockquote>
                </div>

                {/* Divider + client meta */}
                <div
                  className={`transition-all duration-300 ease-out ${
                    animating
                      ? direction === "next"
                        ? "opacity-0 translate-x-8"
                        : "opacity-0 -translate-x-8"
                      : "opacity-100 translate-x-0"
                  }`}
                >
                  <div className="h-px bg-white/[0.06] mt-5 mb-6 sm:mt-8 sm:mb-7" />

                  {/* Client + project row */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                    {/* Client */}
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-sky-400/20 to-indigo-400/20 border border-sky-400/25 flex items-center justify-center flex-shrink-0">
                        <span className="text-[16px] font-bold text-sky-300">
                          {t.client.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="text-[15px] sm:text-[16px] font-bold text-white/90 leading-tight">
                          {t.client}
                        </p>
                        <p className="text-[12px] sm:text-[13.5px] text-white/40 mt-0.5">
                          {t.flag} {t.location} · Upwork Client
                        </p>
                      </div>
                    </div>

                    {/* Project meta */}
                    <div className="flex flex-col sm:items-end gap-1.5">
                      <p className="text-[14px] sm:text-[15px] font-semibold text-white/80 sm:text-right leading-snug">
                        {t.project}
                      </p>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[12px] sm:text-[13px] text-white/35">
                          {t.type}
                        </span>
                        <span className="text-white/20">·</span>
                        <span className="text-[12px] sm:text-[13px] text-white/35">
                          {t.period}
                        </span>
                        {t.repeat && (
                          <>
                            <span className="text-white/20">·</span>
                            <span className="text-[11px] font-semibold text-sky-400/80 tracking-wide">
                              ↩ Repeat Client
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Navigation ── */}
          <div className="flex items-center justify-between mt-7">
            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > active ? "next" : "prev")}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-6 h-2 bg-sky-400"
                      : "w-2 h-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/[0.1] bg-white/[0.04] text-white/55 hover:text-white hover:border-white/25 hover:bg-white/[0.08] transition-all duration-200"
              >
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
                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                  />
                </svg>
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/[0.1] bg-white/[0.04] text-white/55 hover:text-white hover:border-white/25 hover:bg-white/[0.08] transition-all duration-200"
              >
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
              </button>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-4 h-px bg-white/[0.06] rounded-full overflow-hidden">
            {!paused && (
              <div
                key={`${active}-${paused}`}
                className="h-full bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full"
                style={{ animation: "progress 5s linear forwards" }}
              />
            )}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <style jsx>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
