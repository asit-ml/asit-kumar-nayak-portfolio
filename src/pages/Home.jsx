import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { ArrowRight, ArrowUpRight, GraduationCap, Briefcase, Users, Trophy, Layers, FileText } from "lucide-react";
import Marquee from "../components/Marquee";
import Reveal, { Eyebrow, EASE, pageVariants } from "../components/Reveal";
import { hero, marqueeItems, projects, profile, images, education, hackathons } from "../data/portfolio";

const bento = [
  {
    icon: GraduationCap,
    tag: "Education",
    title: education.degree,
    org: education.institution,
    desc: "Jan 2023 – Present — from statistics and optimization to deep learning and application development.",
    chips: ["Machine Learning", "Deep Learning & GenAI", "Statistics", "DSA"],
    to: "/education",
    span: "lg:col-span-3",
    testId: "bento-education-card",
  },
  {
    icon: Briefcase,
    tag: "Work",
    title: "Completed Junior Developer Internship @ NPTEL",
    org: "Jan 2026 – Nov 2026",
    desc: "Automated pipelines syncing educational data across SWAYAM, TCS result systems and the new NPTEL platform.",
    chips: ["Data Pipelines", "Looker Studio", "Automation"],
    to: "/experience",
    span: "lg:col-span-3",
    testId: "bento-work-card",
  },
  {
    icon: Users,
    tag: "Leadership",
    title: "3 Teaching Assistantships @ IIT Madras",
    org: "Across Oct 2023 – Present",
    desc: "Maths for Data Science · Embedded C Lab · Business Analytics.",
    chips: ["Mentoring", "Grading", "Content"],
    to: "/experience",
    span: "lg:col-span-2",
    testId: "bento-leadership-card",
  },
  {
    icon: Trophy,
    tag: "Competition",
    title: "AISEHack 2.0",
    org: hackathons[0].result + " · " + hackathons[0].resultDetail,
    desc: "Polymer property prediction from SMILES with RDKit and ensembles.",
    chips: ["RDKit", "Multitask Learning"],
    to: "/hackathons",
    span: "lg:col-span-2",
    testId: "bento-hackathon-card",
  },
  {
    icon: Layers,
    tag: "Engineering",
    title: "6 shipped projects",
    org: "ML · Deep Learning · Full-Stack",
    desc: "From malware-risk classifiers to society-management platforms.",
    chips: ["PyTorch", "FastAPI", "React"],
    to: "/projects",
    span: "lg:col-span-2",
    testId: "bento-engineering-card",
  },
];

export default function Home() {
  const heroRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 55, damping: 18 });
  const sy = useSpring(my, { stiffness: 55, damping: 18 });
  const cardX = useTransform(sx, (v) => v * 16);
  const cardY = useTransform(sy, (v) => v * 12);
  const chipAx = useTransform(sx, (v) => v * -28);
  const chipAy = useTransform(sy, (v) => v * -20);
  const chipBx = useTransform(sx, (v) => v * 34);
  const chipBy = useTransform(sy, (v) => v * 22);

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const watermarkY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const handleMove = (e) => {
    const r = heroRef.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(e.clientX - r.left - r.width / 2);
    my.set(e.clientY - r.top - r.height / 2);
  };

  const featured = projects.filter((p) => p.featured);

  return (
    <motion.main variants={pageVariants} initial="initial" animate="animate" exit="exit" data-testid="page-home">
      <section
        ref={heroRef}
        onMouseMove={handleMove}
        className="grid-bg relative overflow-hidden"
        data-testid="hero-section"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/4 h-[480px] w-[480px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,229,255,0.12) 0%, transparent 65%)" }}
        />

        <div className="relative mx-auto max-w-7xl px-6 pt-32 sm:pt-36 lg:px-10 lg:pt-44">
          <div className="grid items-center gap-14 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="font-mono text-xs uppercase tracking-[0.3em] text-neon sm:text-sm"
              >
                {hero.eyebrow}
              </motion.p>

              <h1 className="mt-5 font-display text-[clamp(2.7rem,6.5vw,5.4rem)] font-bold leading-[1.02] tracking-tight">
                {hero.lines.map((line, i) => (
                  <span key={line} className="block overflow-hidden pb-1">
                    <motion.span
                      className={`block ${i === hero.lines.length - 1 ? "bg-gradient-to-r from-neon to-azure bg-clip-text text-transparent" : "text-slate-100"}`}
                      initial={{ y: "112%" }}
                      animate={{ y: "0%" }}
                      transition={{ duration: 0.9, delay: 0.15 + i * 0.13, ease: EASE }}
                    >
                      {line}
                    </motion.span>
                  </span>
                ))}
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.55, ease: EASE }}
                className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400"
              >
                {hero.bio}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.7, ease: EASE }}
                className="mt-9 flex flex-wrap items-center gap-4"
              >
                <Link
                  to="/projects"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-neon px-7 py-3.5 font-semibold text-ink shadow-lg shadow-neon/10 transition-transform duration-200 hover:scale-[1.04]"
                  data-testid="hero-cta-projects"
                >
                  View Projects
                  <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-500 bg-panel/80 px-7 py-3.5 font-semibold text-slate-100 shadow-lg shadow-black/10 transition-colors duration-200 hover:border-neon hover:bg-panel2 hover:text-neon"
                  data-testid="hero-cta-contact"
                >
                  Get In Touch
                </Link>
                <a
                  href={profile.resume}
                  download={profile.resumeName}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-gold/60 bg-panel/80 px-6 py-3.5 font-semibold text-slate-100 shadow-lg shadow-black/10 transition-colors duration-200 hover:border-gold hover:bg-panel2 hover:text-gold"
                  data-testid="hero-cta-resume"
                >
                  <FileText size={16} />
                  Download Resume
                </a>
              </motion.div>
            </div>

            <motion.div style={{ y: visualY }} className="lg:col-span-5">
              <motion.div
                style={{ x: cardX, y: cardY }}
                initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-3xl border border-line shadow-2xl shadow-black/50">
                  <img
                    src={images.hero}
                    alt="Developer workspace"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                  <div className="absolute inset-x-4 bottom-4 rounded-xl border border-line bg-ink/80 p-4 font-mono text-xs leading-relaxed backdrop-blur-md" data-testid="hero-terminal-chip">
                    <p className="text-slate-400">$ whoami</p>
                    <p className="text-neon">asit — data science × full-stack @ IIT Madras</p>
                  </div>
                </div>
                <motion.div
                  style={{ x: chipAx, y: chipAy }}
                  className="absolute -left-4 -top-5 rounded-xl border border-line bg-panel2/90 px-4 py-3 backdrop-blur-md sm:-left-8"
                  data-testid="hero-chip-education"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neon">Studying</p>
                  <p className="mt-1 text-sm font-semibold text-slate-100">BS Data Science @ IIT Madras</p>
                </motion.div>
                <motion.div
                  style={{ x: chipBx, y: chipBy }}
                  className="absolute -bottom-5 -right-2 rounded-xl border border-gold/30 bg-panel2/90 px-4 py-3 backdrop-blur-md sm:-right-6"
                  data-testid="hero-chip-hackathon"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">Hackathon</p>
                  <p className="mt-1 text-sm font-semibold text-slate-100">Top 20 · AISEHack 2.0</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-6 border-t border-line py-10 md:grid-cols-4" data-testid="hero-stats">
            {hero.stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.85 + i * 0.1, ease: EASE }}
              >
                <p className="font-display text-3xl font-bold text-slate-100 sm:text-4xl">{s.value}</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-slate-500">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          style={{ y: watermarkY }}
          aria-hidden="true"
          className="text-outline pointer-events-none absolute -bottom-6 left-0 select-none whitespace-nowrap font-display text-[15vw] font-extrabold leading-none"
        >
          ASIT KUMAR NAYAK
        </motion.p>
      </section>

      <Marquee items={marqueeItems} />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10" data-testid="spotlight-section">
        <Reveal>
          <Eyebrow>Core Spotlight</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            A snapshot of my world
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {bento.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.07} className={card.span}>
              <Link
                to={card.to}
                data-testid={card.testId}
                className="group flex h-full flex-col rounded-2xl border border-line bg-panel p-6 transition-all duration-300 hover:-translate-y-1 hover:border-neon/40"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-panel2 text-neon">
                    <card.icon size={18} />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">{card.tag}</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-slate-100">{card.title}</h3>
                <p className="mt-1 font-mono text-xs text-slate-500">{card.org}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{card.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {card.chips.map((c) => (
                    <span key={c} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-slate-400">
                      {c}
                    </span>
                  ))}
                </div>
                <span className="mt-5 flex items-center gap-1 font-mono text-xs uppercase tracking-[0.2em] text-slate-500 transition-colors group-hover:text-neon">
                  Explore <ArrowUpRight size={13} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10" data-testid="featured-section">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>Selected Work</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Featured projects
            </h2>
          </div>
          <Link
            to="/projects"
            className="group flex items-center gap-2 font-mono text-sm uppercase tracking-[0.2em] text-slate-400 transition-colors hover:text-neon"
            data-testid="home-all-projects-link"
          >
            All projects
            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </Reveal>
        <div className="mt-10">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.06}>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`home-project-row-${p.id}`}
                className="group grid gap-4 border-t border-line py-8 transition-colors duration-300 hover:bg-panel/50 md:grid-cols-12 md:items-center"
              >
                <span className="font-mono text-sm text-neon md:col-span-1">0{i + 1}</span>
                <h3 className="font-display text-2xl font-semibold tracking-tight text-slate-100 transition-colors group-hover:text-neon md:col-span-4">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400 md:col-span-5">{p.description}</p>
                <span className="flex md:col-span-2 md:justify-end">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-slate-400 transition-all duration-300 group-hover:border-neon group-hover:bg-neon group-hover:text-ink">
                    <ArrowUpRight size={18} />
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
          <div className="border-t border-line" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28 lg:px-10" data-testid="home-cta-section">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-panel p-10 text-center sm:p-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(0,229,255,0.14) 0%, transparent 65%)" }}
            />
            <div className="relative">
              <Eyebrow className="!text-gold">Get In Touch</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl">Let's build something.</h2>
              <p className="mx-auto mt-4 max-w-xl text-slate-400">
                Whether it's a model, a platform or a pipeline — my inbox is open.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="rounded-full bg-neon px-7 py-3.5 font-semibold text-ink transition-transform duration-200 hover:scale-[1.04]"
                  data-testid="home-cta-email-button"
                >
                  Say hello
                </a>
                <a
                  href={profile.resume}
                  download={profile.resumeName}
                  className="flex items-center gap-2 rounded-full border border-line px-7 py-3.5 font-semibold text-slate-200 transition-colors duration-200 hover:border-neon/50 hover:text-neon"
                  data-testid="home-cta-resume-button"
                >
                  <FileText size={16} />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </motion.main>
  );
}
