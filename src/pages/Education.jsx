import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal, { pageVariants } from "../components/Reveal";
import { education, experience, images } from "../data/portfolio";

export default function Education() {
  const taCount = experience.filter((e) => e.type === "Academic Role").length;
  return (
    <motion.main variants={pageVariants} initial="initial" animate="animate" exit="exit" data-testid="page-education">
      <PageHeader
        eyebrow="Education"
        lines={["IIT Madras,", "Data Science."]}
        sub="The BS in Data Science & Applications — built on data-driven, interdisciplinary coursework without a fixed branch."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-10" data-testid="education-main-section">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="rounded-2xl border border-line bg-panel p-8 sm:p-10" data-testid="education-degree-card">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-neon">{education.period}</span>
                <span className="flex items-center gap-1.5 font-mono text-xs text-slate-500">
                  <MapPin size={13} /> {education.location}
                </span>
              </div>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-slate-100">
                {education.degree}
              </h2>
              <p className="mt-2 text-lg text-slate-400">{education.institution}</p>

              <p className="mt-8 font-mono text-xs uppercase tracking-[0.25em] text-slate-500">Relevant coursework</p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {education.coursework.map((c, i) => (
                  <motion.span
                    key={c}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                    className="rounded-full border border-line bg-panel2 px-3.5 py-1.5 text-sm text-slate-300 transition-colors duration-200 hover:border-neon/50 hover:text-neon"
                  >
                    {c}
                  </motion.span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-2xl border border-line">
                <img src={images.education} alt="Late-night build session" className="aspect-[4/5] w-full object-cover" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                <div className="absolute inset-x-5 bottom-5">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-neon">Side effect of coursework</p>
                  <p className="mt-2 font-display text-xl font-semibold text-slate-100">
                    {taCount}× Teaching Assistant at the same institute
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <Link
                to="/experience"
                className="group mt-6 flex items-center justify-between rounded-2xl border border-line bg-panel p-6 transition-colors hover:border-neon/40"
                data-testid="education-ta-link"
              >
                <div>
                  <p className="font-display text-lg font-semibold text-slate-100">Maths · Embedded C · Analytics</p>
                  <p className="mt-1 text-sm text-slate-400">See the Teaching Assistant roles →</p>
                </div>
                <ArrowRight size={18} className="text-neon transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
