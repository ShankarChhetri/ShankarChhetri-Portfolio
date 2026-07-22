import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  ArrowRight,
  Star,
  ArrowUp,
  MapPin,
  Send,
  GraduationCap,
  Code2,
  BookOpen,
  Music2,
  Sparkles,
  Rocket,
  ExternalLink,
  FileText,
  Menu,
  X,
} from "lucide-react";
const shankarPhoto = "/shankar.jpeg";
import {
  NAV,
  STATS,
  SKILLS,
  SOFT_SKILLS,
  TOOLS,
  INTERESTS,
  PROJECTS,
  CONTACT,
} from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Portfolio() {
  useReveal();
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050505] text-white">
      <style>{`
        [data-reveal]{opacity:0;transform:translateY(28px);transition:opacity .9s ease,transform .9s ease}
        [data-reveal].is-visible{opacity:1;transform:none}
        [data-reveal="left"]{transform:translateX(-32px)}
        [data-reveal="left"].is-visible{transform:none}
        [data-reveal="zoom"]{transform:scale(.94)}
        [data-reveal="zoom"].is-visible{transform:none}
      `}</style>
      <BackgroundFX />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Stats />
        <About />
        <Education />
        <Skills />
        <Projects />
        <ToolsAndInterests />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#3EF0A8]/10 blur-[140px]" />
      <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-[#3EF0A8]/8 blur-[160px]" />
      <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-[#3EF0A8]/5 blur-[120px]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6 ${
            scrolled ? "glass-strong" : "glass"
          }`}
        >
          <a href="#home" className="group flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#3EF0A8] to-[#22b37c] font-display text-lg font-black text-[#050505] transition-transform group-hover:scale-110">
              SC
            </span>
            <span className="hidden font-display text-sm font-semibold tracking-wide text-white/90 sm:block">
              Shankar Chhetri
            </span>
          </a>
          <ul className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="rounded-lg px-3.5 py-2 text-sm font-medium text-white/70 transition-all hover:bg-white/5 hover:text-[#3EF0A8]"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <a
              href="/Shankar_Chhetri_Resume.pdf"
              download
              className="group hidden items-center gap-2 rounded-full bg-[#3EF0A8] px-4 py-2.5 text-sm font-semibold text-[#050505] transition-all hover:mint-glow hover:scale-105 sm:inline-flex"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
        {open && (
          <div className="mt-2 rounded-2xl glass-strong p-4 md:hidden">
            <ul className="flex flex-col gap-1">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-2.5 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-[#3EF0A8]"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/Shankar_Chhetri_Resume.pdf"
                  download
                  className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#3EF0A8] px-4 py-2.5 text-sm font-semibold text-[#050505]"
                >
                  <Download className="h-4 w-4" /> Download CV
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

function SocialRail() {
  const items = [
    { icon: Github, href: CONTACT.github, label: "GitHub" },
    { icon: Linkedin, href: CONTACT.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${CONTACT.email}`, label: "Email" },
    { icon: Phone, href: `tel:${CONTACT.phone}`, label: "Phone" },
  ];
  return (
    <div className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 xl:flex">
      {items.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="group grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 backdrop-blur transition-all hover:border-[#3EF0A8] hover:bg-[#3EF0A8] hover:text-[#050505]"
        >
          <Icon className="h-4 w-4 text-white/80 transition group-hover:text-[#050505]" />
        </a>
      ))}
      <div className="mx-auto h-16 w-px bg-gradient-to-b from-white/20 to-transparent" />
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-16 sm:pt-40 sm:pb-24">
      <SocialRail />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <div data-reveal="left" className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-[#3EF0A8]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3EF0A8] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#3EF0A8]" />
            </span>
            Available for Opportunities
          </div>
          <p className="mt-6 font-display text-sm font-medium uppercase tracking-[0.25em] text-white/60">
            Creating Engaging Content & Modern Web Solutions
          </p>
          <h1 className="mt-4 font-display text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-gradient-mint">Shankar</span>
            <br />
            <span className="text-white/90">Web Development</span>
            <br />
            <span className="text-white">Graduate.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#A9A9A9] sm:text-lg">
            Motivated graduate from ISMT (University of Sunderland) with a passion
            for content writing, web development, research, and SEO. I enjoy creating
            engaging digital experiences, writing well-structured content, and
            continuously learning modern technologies.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-[#3EF0A8] px-6 py-3 text-sm font-semibold text-[#050505] transition-all hover:mint-glow hover:scale-105"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-[#3EF0A8] hover:text-[#3EF0A8]"
            >
              Contact Me
            </a>
            <a
              href="/Shankar_Chhetri_Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-[#3EF0A8] hover:text-[#3EF0A8]"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
          </div>
        </div>

        <div data-reveal="zoom" className="relative order-1 mx-auto lg:order-2">
          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-[#3EF0A8]/20 blur-3xl animate-pulse-glow" />
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-[#3EF0A8] via-transparent to-[#3EF0A8]/40 opacity-70 blur-md" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-2 backdrop-blur">
              <img
                src={shankarPhoto}
                alt="Portrait of Shankar Chhetri"
                className="h-[380px] w-[320px] rounded-[1.6rem] object-cover sm:h-[460px] sm:w-[380px]"
              />
            </div>
            {/* Review badge */}
            <div className="animate-float absolute -left-4 top-8 rounded-2xl glass-strong px-4 py-3 shadow-card sm:-left-10">
              <div className="flex items-center gap-1 text-[#3EF0A8]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-[#3EF0A8]" />
                ))}
              </div>
              <p className="mt-1 font-display text-sm font-semibold text-white">
                Dedicated Learner
              </p>
            </div>
            {/* Available badge */}
            <div
              className="animate-float absolute -bottom-4 -right-4 rounded-2xl glass-strong px-4 py-3 shadow-card sm:-right-8"
              style={{ animationDelay: "1.5s" }}
            >
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#3EF0A8]/15">
                  <Rocket className="h-4 w-4 text-[#3EF0A8]" />
                </span>
                <div>
                  <p className="font-display text-xs font-semibold text-white">
                    Bachelor Graduate
                  </p>
                  <p className="text-[10px] text-white/60">Class of 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="relative py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          data-reveal
          className="grid grid-cols-2 gap-3 rounded-3xl glass p-5 sm:grid-cols-3 sm:gap-6 sm:p-8 lg:grid-cols-5"
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="group text-center transition-transform hover:-translate-y-1"
            >
              <div className="font-display text-3xl font-black text-gradient-mint sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-white/60 sm:text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div data-reveal className="mx-auto mb-12 max-w-2xl text-center">
      <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-[#3EF0A8]">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-4xl font-black tracking-tight sm:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-[#A9A9A9]">{subtitle}</p>
      )}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Introduction" title="About Me" />
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div data-reveal="left" className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-[#3EF0A8]/10 blur-3xl" />
            <div className="relative rounded-[2rem] glass-strong p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <GraduationCap className="h-8 w-8 text-[#3EF0A8]" />
                  <p className="mt-3 font-display text-lg font-bold">ISMT</p>
                  <p className="text-xs text-white/60">Univ. of Sunderland</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <Code2 className="h-8 w-8 text-[#3EF0A8]" />
                  <p className="mt-3 font-display text-lg font-bold">Web Dev</p>
                  <p className="text-xs text-white/60">HTML · CSS · JS</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <FileText className="h-8 w-8 text-[#3EF0A8]" />
                  <p className="mt-3 font-display text-lg font-bold">Content</p>
                  <p className="text-xs text-white/60">Writing & SEO</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <Sparkles className="h-8 w-8 text-[#3EF0A8]" />
                  <p className="mt-3 font-display text-lg font-bold">Research</p>
                  <p className="text-xs text-white/60">Problem Solving</p>
                </div>
              </div>
              <div className="animate-float absolute -right-4 -top-4 rounded-2xl bg-[#3EF0A8] px-4 py-3 text-[#050505] shadow-card">
                <p className="font-display text-xs font-bold uppercase tracking-wider">
                  Bachelor Graduate
                </p>
                <p className="font-display text-lg font-black">2025</p>
              </div>
            </div>
          </div>
          <div data-reveal>
            <h3 className="font-display text-3xl font-black leading-tight sm:text-4xl">
              Passionate about building{" "}
              <span className="text-gradient-mint">meaningful digital experiences</span>.
            </h3>
            <p className="mt-5 leading-relaxed text-[#A9A9A9]">
              I am a Bachelor graduate from ISMT affiliated with the University of
              Sunderland. My interests lie in content writing, SEO, web development,
              research, proposal writing, and report writing. I enjoy solving problems,
              learning modern technologies, and creating meaningful digital experiences.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl glass p-4">
                <p className="font-display text-2xl font-black text-[#3EF0A8]">2025</p>
                <p className="text-xs text-white/60">Graduation Year</p>
              </div>
              <div className="rounded-2xl glass p-4">
                <p className="font-display text-2xl font-black text-[#3EF0A8]">65.5%</p>
                <p className="text-xs text-white/60">Academic Score</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Journey" title="Education" />
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[#3EF0A8] via-[#3EF0A8]/30 to-transparent sm:left-1/2" />
          <div data-reveal className="relative pl-12 sm:pl-0">
            <div className="absolute left-2 top-2 h-4 w-4 rounded-full bg-[#3EF0A8] mint-glow sm:left-1/2 sm:-translate-x-1/2" />
            <div className="rounded-[1.5rem] glass-strong p-6 sm:ml-[calc(50%+2rem)] sm:p-8">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#3EF0A8]/15 px-3 py-1 text-xs font-semibold text-[#3EF0A8]">
                  2021 – 2025
                </span>
                <GraduationCap className="h-6 w-6 text-[#3EF0A8]" />
              </div>
              <h3 className="mt-4 font-display text-2xl font-black">Bachelor Degree</h3>
              <p className="mt-1 font-display text-lg font-semibold text-white/90">
                ISMT College
              </p>
              <p className="text-sm text-white/60">University of Sunderland</p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <p className="text-xs text-white/60">Graduation</p>
                  <p className="font-display text-lg font-bold text-[#3EF0A8]">2025</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <p className="text-xs text-white/60">Score</p>
                  <p className="font-display text-lg font-bold text-[#3EF0A8]">65.5%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Expertise"
          title="Skills & Capabilities"
          subtitle="A blend of technical craft, writing precision, and modern tooling."
        />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div data-reveal="left" className="rounded-[1.5rem] glass-strong p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold">Technical & Writing</h3>
            <div className="mt-6 space-y-5">
              {SKILLS.map((s, i) => (
                <SkillBar key={s.name} name={s.name} value={s.value} delay={i * 60} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div data-reveal className="rounded-[1.5rem] glass-strong p-6 sm:p-8">
              <h3 className="font-display text-xl font-bold">Soft Skills</h3>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {SOFT_SKILLS.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 transition-all hover:-translate-y-0.5 hover:border-[#3EF0A8] hover:text-[#3EF0A8]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div data-reveal className="rounded-[1.5rem] glass-strong p-6 sm:p-8">
              <h3 className="font-display text-xl font-bold">Interests</h3>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {INTERESTS.map((i) => {
                  const Icon =
                    i === "Music"
                      ? Music2
                      : i === "Reading"
                      ? BookOpen
                      : i === "Technology"
                      ? Code2
                      : i === "Content Writing"
                      ? FileText
                      : Sparkles;
                  return (
                    <div
                      key={i}
                      className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-3 transition-all hover:border-[#3EF0A8]"
                    >
                      <Icon className="h-4 w-4 text-[#3EF0A8]" />
                      <span className="text-xs font-medium text-white/85">{i}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillBar({ name, value, delay }: { name: string; value: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [w, setW] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => setW(value), delay);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, delay]);
  return (
    <div ref={ref}>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-white/90">{name}</span>
        <span className="font-display text-sm font-bold text-[#3EF0A8]">{value}%</span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#3EF0A8] to-[#7ff5c4] transition-[width] duration-[1400ms] ease-out"
          style={{ width: `${w}%` }}
        />
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Portfolio"
          title="Featured Projects"
          subtitle="Selected work showcasing full-stack thinking, security, and thoughtful UX."
        />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {PROJECTS.map((p, idx) => (
            <article
              key={p.title}
              data-reveal={idx % 2 === 0 ? "left" : "zoom"}
              className="group relative overflow-hidden rounded-[1.5rem] glass-strong p-7 transition-all hover:-translate-y-1"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#3EF0A8]/10 blur-3xl transition-opacity group-hover:opacity-100" />
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#3EF0A8]/15 px-3 py-1 text-xs font-semibold text-[#3EF0A8]">
                  Project 0{idx + 1}
                </span>
                <Rocket className="h-6 w-6 text-[#3EF0A8]" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-black">{p.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/70"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-xs text-white/75"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#3EF0A8]" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  disabled
                  className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/40"
                >
                  <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                </button>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group/btn inline-flex items-center gap-2 rounded-full bg-[#3EF0A8] px-4 py-2 text-xs font-semibold text-[#050505] transition-all hover:mint-glow"
                >
                  <Github className="h-3.5 w-3.5" /> View on GitHub
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ToolsAndInterests() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Workflow" title="Tools I Use" />
        <div data-reveal className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {TOOLS.map((t) => (
            <div
              key={t}
              className="group flex flex-col items-center gap-2 rounded-2xl glass p-5 text-center transition-all hover:-translate-y-1 hover:border-[#3EF0A8]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#3EF0A8]/10 text-[#3EF0A8] transition-transform group-hover:scale-110">
                <Code2 className="h-5 w-5" />
              </div>
              <span className="text-xs font-semibold text-white/85">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const infos = [
    { icon: Phone, label: "Phone", value: CONTACT.phone, href: `tel:${CONTACT.phone}` },
    { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: Linkedin, label: "LinkedIn", value: "shankar-chhetri", href: CONTACT.linkedin },
    { icon: Github, label: "GitHub", value: "ShankarChhetri", href: CONTACT.github },
  ];
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Say Hello"
          title="Let's Work Together"
          subtitle="Have a role, project, or idea? I'd love to hear from you."
        />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          <div data-reveal="left" className="lg:col-span-2 flex flex-col gap-4">
            {infos.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl glass p-5 transition-all hover:-translate-y-0.5 hover:border-[#3EF0A8]"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#3EF0A8]/15 text-[#3EF0A8] transition-transform group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-widest text-white/50">{label}</p>
                  <p className="truncate font-display text-sm font-semibold text-white">
                    {value}
                  </p>
                </div>
              </a>
            ))}
            <div className="mt-2 overflow-hidden rounded-2xl glass p-2">
              <div className="flex items-center gap-2 p-3 text-xs text-white/70">
                <MapPin className="h-4 w-4 text-[#3EF0A8]" /> Kathmandu, Nepal
              </div>
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14126.8!2d85.324!3d27.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu!5e0!3m2!1sen!2snp!4v1"
                width="100%"
                height="200"
                style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg)" }}
                loading="lazy"
                className="rounded-xl"
              />
            </div>
          </div>
          <form
            data-reveal
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3500);
              (e.target as HTMLFormElement).reset();
            }}
            className="rounded-[1.5rem] glass-strong p-6 sm:p-8 lg:col-span-3"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your name" />
              <Field label="Email" type="email" name="email" placeholder="you@email.com" />
            </div>
            <Field label="Subject" name="subject" placeholder="What's this about?" />
            <div className="mt-4">
              <label className="text-xs font-semibold uppercase tracking-widest text-white/60">
                Message
              </label>
              <textarea
                required
                rows={6}
                name="message"
                placeholder="Tell me about your project..."
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#3EF0A8] focus:outline-none focus:ring-2 focus:ring-[#3EF0A8]/30"
              />
            </div>
            <button
              type="submit"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-[#3EF0A8] px-6 py-3 text-sm font-semibold text-[#050505] transition-all hover:mint-glow hover:scale-105"
            >
              <Send className="h-4 w-4" />
              {sent ? "Message Sent!" : "Send Message"}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="mt-4 sm:mt-0">
      <label className="text-xs font-semibold uppercase tracking-widest text-white/60">
        {label}
      </label>
      <input
        required
        type={type}
        name={name}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#3EF0A8] focus:outline-none focus:ring-2 focus:ring-[#3EF0A8]/30"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#3EF0A8] font-display font-black text-[#050505]">
            SC
          </span>
          <p className="text-sm text-white/70">
            Designed & Developed by <span className="font-semibold text-white">Shankar Chhetri</span>
          </p>
        </div>
        <div className="flex items-center gap-3">
          {[
            { i: Github, h: CONTACT.github },
            { i: Linkedin, h: CONTACT.linkedin },
            { i: Mail, h: `mailto:${CONTACT.email}` },
            { i: Phone, h: `tel:${CONTACT.phone}` },
          ].map(({ i: Icon, h }, idx) => (
            <a
              key={idx}
              href={h}
              target="_blank"
              rel="noreferrer"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:border-[#3EF0A8] hover:bg-[#3EF0A8] hover:text-[#050505]"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
        <p className="text-xs text-white/40">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-[#3EF0A8] text-[#050505] shadow-lg transition-all hover:mint-glow hover:scale-110"
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
