import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, GraduationCap, Briefcase } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal, { pageVariants } from "../components/Reveal";
import { about, profile, images } from "../data/portfolio";

export default function About() {
  return (
    <motion.main variants={pageVariants} initial="initial" animate="animate" exit="exit" data-testid="page-about">
      <PageHeader
        eyebrow="About"
        lines={["Maths in,", "products out."]}
        sub="Merging rigorous mathematical foundations in Data Science with practical full-stack software development."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-10" data-testid="about-story-section">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <div aria-hidden="true" className="absolute -left-3 -top-3 h-full w-full rounded-2xl border border-gold/40" />
              <div className="relative overflow-hidden rounded-2xl border border-line">
                <img src={images.about} alt="Workspace where the projects happen" className="aspect-[4/5] w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 font-mono text-xs uppercase tracking-[0.2em] text-slate-300">
                  Where the work happens
                </p>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            {about.story.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="mb-6 text-lg leading-relaxed text-slate-300 first:text-xl first:text-slate-100">{p}</p>
              </Reveal>
            ))}

            <Reveal delay={0.2} className="mt-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3 rounded-xl border border-line bg-panel p-4">
                  <MapPin size={18} className="mt-0.5 text-neon" />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">Based in</p>
                    <p className="mt-1 text-sm text-slate-200">{profile.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-line bg-panel p-4">
                  <GraduationCap size={18} className="mt-0.5 text-neon" />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">Degree</p>
                    <p className="mt-1 text-sm text-slate-200">BS Data Science & Applications, IIT Madras</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-line bg-panel p-4">
                  <Briefcase size={18} className="mt-0.5 text-neon" />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">Currently</p>
                    <p className="mt-1 text-sm text-slate-200">Junior Developer Intern @ NPTEL</p>
                  </div>
                </div>
                <a
                  href={`mailto:${profile.email}`}
                  className="group flex items-start gap-3 rounded-xl border border-line bg-panel p-4 transition-colors hover:border-neon/40"
                  data-testid="about-email-card"
                >
                  <ArrowUpRight size={18} className="mt-0.5 text-neon" />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">Say hello</p>
                    <p className="mt-1 text-sm text-slate-200 group-hover:text-neon">{profile.email}</p>
                  </div>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-10" data-testid="about-highlights-section">
        <Reveal>
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Right now, in short</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {about.highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.08} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-line bg-panel p-6 transition-colors duration-300 hover:border-neon/40" data-testid={`about-highlight-card-${i + 1}`}>
                <span className="font-mono text-sm text-neon">0{i + 1}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-slate-100">{h.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{h.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.15} className="mt-10">
          <Link
            to="/experience"
            className="inline-flex items-center gap-2 rounded-full bg-neon px-7 py-3.5 font-semibold text-ink transition-transform duration-200 hover:scale-[1.04]"
            data-testid="about-experience-cta"
          >
            See the full journey
            <ArrowUpRight size={16} />
          </Link>
        </Reveal>
      </section>
    </motion.main>
  );
}
