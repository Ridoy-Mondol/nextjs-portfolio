"use client";

import { useState } from "react";

// ── Contact links data ────────────────────────────────────────────────────────
const contactLinks = [
  {
    label: "Email",
    value: "ahatashamul140@gmail.com",
    href: "mailto:ahatashamul140@gmail.com",
    icon: (
      <svg
        className="w-5 h-5"
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
  },
  {
    label: "WhatsApp",
    value: "+880 1319118383",
    href: "https://wa.me/8801319118383",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "Upwork",
    value: "Md Ahatashamul Islam Mondol",
    href: "https://www.upwork.com/freelancers/~01763d2c19d3cee0b3",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "Md. Ahatashamul Islam Mondol",
    href: "https://www.linkedin.com/in/md-ahatashamul-islam-mondol-790341373",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "Md Ahatashamul Islam Mondol",
    href: "https://github.com/Ridoy-Mondol",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Rajshahi, Bangladesh",
    href: "https://maps.google.com/?q=Rajshahi,Bangladesh",
    icon: (
      <svg
        className="w-5 h-5"
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
  },
];

// ── Form ──────────────────────────────────────────────────────────────────────
type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Status = "idle" | "sending" | "sent" | "error";

function InputField({
  label,
  id,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-[12px] font-medium tracking-wide text-white/65 uppercase"
      >
        {label} {required && <span className="text-sky-400">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.09] text-[14px] text-white/80 placeholder-white/20
          focus:outline-none focus:border-sky-400/50 focus:bg-sky-400/[0.04] focus:ring-1 focus:ring-sky-400/20
          hover:border-white/[0.15] transition-all duration-200"
      />
    </div>
  );
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const set = (key: keyof FormState) => (v: string) =>
    setForm((f) => ({ ...f, [key]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } else {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-28 bg-[#080810] overflow-hidden"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <div className="pointer-events-none absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-sky-700/[0.07] blur-[130px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-indigo-700/[0.07] blur-[110px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* ── Heading ── */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-flex items-center gap-2 text-[11.5px] font-semibold tracking-[0.22em] uppercase text-sky-400/70 mb-4">
            <span className="w-5 h-px bg-sky-400/50" />
            Let&apos;s Talk
            <span className="w-5 h-px bg-sky-400/50" />
          </span>
          <h2 className="text-[2.6rem] sm:text-5xl font-bold tracking-tight text-white mb-5">
            Get in Touch
          </h2>
          <p className="text-[15px] text-white/35 max-w-md leading-relaxed">
            Have a project in mind or want to work together? I&apos;d love to
            hear from you.
          </p>
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 lg:items-stretch">
          {/* ════ LEFT — Contact info ════ */}
          <div className="flex flex-col gap-8">
            {/* Intro text */}
            <div>
              <h3 className="text-[1.35rem] font-bold text-white mb-3 leading-snug">
                Let&apos;s build something{" "}
                <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                  great together
                </span>
              </h3>
              <p className="text-[14.5px] leading-[1.85] text-white/45">
                I&apos;m currently available for freelance contracts and new
                projects. Whether you need a full-stack web app, a Web3
                platform, or AI integration — reach out through any of the
                channels below and I&apos;ll get back to you promptly.
              </p>
            </div>

            {/* Contact links */}
            <div className="flex flex-col gap-3">
              {contactLinks.map(({ label, value, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 px-5 py-3 rounded-xl border border-white/[0.15] bg-[#0d0d1c]
                    hover:border-sky-400/25 hover:bg-sky-400/[0.04] transition-all duration-200"
                >
                  {/* Icon box */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-sky-400/10 border border-sky-400/20 text-white flex-shrink-0 group-hover:bg-sky-400/15 group-hover:border-sky-400/35 transition-all duration-200">
                    {icon}
                  </div>

                  {/* Text */}
                  <div className="flex flex-col min-w-0 flex-1">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-white/25 mb-0.5">
                      {label}
                    </span>
                    <span className="text-[13.5px] font-medium text-white/65 group-hover:text-white/90 truncate transition-colors duration-200">
                      {value}
                    </span>
                  </div>

                  {/* Arrow */}
                  <svg
                    className="w-4 h-4 text-white/15 group-hover:text-white/60 group-hover:translate-x-0.5 flex-shrink-0 transition-all duration-200"
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
                </a>
              ))}
            </div>

            {/* Response time note */}
            <div className="flex items-center gap-3 px-5 py-3.5 rounded-xl border border-emerald-400/15 bg-emerald-400/[0.04]">
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <p className="text-[13px] text-white/45">
                <span className="text-white/70 font-semibold">
                  Usually responds within 24 hours.
                </span>{" "}
                Currently available for new projects.
              </p>
            </div>
          </div>

          {/* ════ RIGHT — Contact form ════ */}
          <div className="rounded-2xl border border-white/[0.15] bg-[#0d0d1c] overflow-hidden flex flex-col">
            {/* Form header */}
            <div
              className="flex items-center gap-2.5 px-6 py-4 border-b border-white/[0.06]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(56,189,248,0.05), transparent)",
              }}
            >
              <div className="w-2 h-2 rounded-full bg-sky-400" />
              <p className="text-[11.5px] font-bold tracking-[0.16em] uppercase text-sky-400/80">
                Send a Message
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-5">
              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <InputField
                  label="Name"
                  id="name"
                  value={form.name}
                  onChange={set("name")}
                  placeholder="Your full name"
                  required
                />
                <InputField
                  label="Email"
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  placeholder="your@email.com"
                  required
                />
              </div>

              {/* Subject */}
              <InputField
                label="Subject"
                id="subject"
                value={form.subject}
                onChange={set("subject")}
                placeholder="What's this about?"
                required
              />

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="text-[12px] font-medium tracking-wide text-white/65 uppercase"
                >
                  Message <span className="text-sky-400">*</span>
                </label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => set("message")(e.target.value)}
                  placeholder="Tell me about your project — what you need, timeline, budget..."
                  required
                  rows={8}
                  className="w-full px-4 py-4 rounded-xl bg-white/[0.04] border border-white/[0.09] text-[14px] text-white/80 placeholder-white/20 resize-none
                    focus:outline-none focus:border-sky-400/50 focus:bg-sky-400/[0.04] focus:ring-1 focus:ring-sky-400/20
                    hover:border-white/[0.15] transition-all duration-200"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="relative w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl text-[14px] font-bold tracking-wide
                  bg-gradient-to-r from-sky-500 to-indigo-500 text-white
                  shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30
                  hover:scale-[1.01] active:scale-[0.99]
                  disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100
                  transition-all duration-200"
              >
                {status === "sending" && (
                  <svg
                    className="w-4 h-4 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                )}
                {status === "sent" && (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                )}
                {status === "idle" && (
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
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                )}
                {status === "idle" && "Send Message"}
                {status === "sending" && "Sending..."}
                {status === "sent" && "Message Sent!"}
                {status === "error" && "Failed — Try Again"}
              </button>

              {/* Success note */}
              {status === "sent" && (
                <p className="text-center text-[13px] text-emerald-400/80 font-medium">
                  ✓ Thanks! I&apos;ll get back to you within 24 hours.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </section>
  );
}
