import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import Reveal, { pageVariants } from "../components/Reveal";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <motion.main variants={pageVariants} initial="initial" animate="animate" exit="exit" data-testid="page-experience">
      <PageHeader
        eyebrow="Experience"
        lines={["Work &", "leadership."]}
        sub="One internship at India's largest online-education programme, and three Teaching Assistantships at IIT Madras."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-10" data-testid="experience-timeline">
        {experience.map((job, i) => (
          <Reveal key={job.id} delay={i * 0.05} testId={`experience-entry-${job.id}`}>
            <article className="grid gap-6 border-t border-line py-10 md:grid-cols-12">
              <div className="md:col-span-4">
                <div className="flex items-center gap-3">
                  <p className="font-mono text-sm text-neon">{job.period}</p>
                  {job.current && (
                    <span className="rounded-full border border-neon/40 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-neon">
                      Current
                    </span>
                  )}
                </div>
                <p className="mt-3 text-sm font-medium leading-snug text-slate-300">{job.organization}</p>
                <span className="mt-3 inline-block rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
                  {job.type}
                </span>
              </div>
              <div className="md:col-span-8">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
                  {job.role}
                </h2>
                <ul className="mt-5 space-y-3">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-[15px] leading-relaxed text-slate-400">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neon/70" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {job.tags.map((t) => (
                    <span key={t} className="rounded-full border border-line bg-panel px-3 py-1.5 font-mono text-[11px] text-slate-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
        <div className="border-t border-line" />
      </section>
    </motion.main>
  );
}
