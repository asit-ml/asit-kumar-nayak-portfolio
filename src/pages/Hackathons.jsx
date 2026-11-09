import { motion } from "framer-motion";
import { Github, Trophy, Users } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal, { pageVariants } from "../components/Reveal";
import { hackathons } from "../data/portfolio";

export default function Hackathons() {
  const h = hackathons[0];
  return (
    <motion.main variants={pageVariants} initial="initial" animate="animate" exit="exit" data-testid="page-hackathons">
      <PageHeader
        eyebrow="Hackathons"
        lines={["Competitive", "by default."]}
        sub="National-level competitions where models met a leaderboard — and deadlines."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-10" data-testid="hackathon-featured-section">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-panel p-8 sm:p-12" data-testid="hackathon-card-aisehack">
            <motion.p
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="text-outline pointer-events-none absolute -right-6 -top-10 select-none font-display text-[11rem] font-extrabold leading-none sm:text-[15rem]"
            >
              20
            </motion.p>

            <div className="relative">
              <div className="flex flex-wrap items-center gap-3">
                <span className="flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-gold">
                  <Trophy size={13} /> {h.result}
                </span>
                <span className="flex items-center gap-2 rounded-full border border-line px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
                  <Users size={13} /> Team achievement
                </span>
              </div>

              <h2 className="mt-7 font-display text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
                {h.event}
              </h2>
              <p className="mt-2 font-mono text-sm uppercase tracking-[0.2em] text-neon">
                {h.track} — {h.resultDetail}
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">{h.description}</p>

              <div className="mt-8 flex flex-wrap gap-2">
                {h.tags.map((t) => (
                  <span key={t} className="rounded-full border border-line bg-panel2 px-3.5 py-1.5 font-mono text-xs text-slate-300">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap gap-4 border-t border-line pt-7">
                <a
                  href={h.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-line px-6 py-3 font-mono text-xs uppercase tracking-[0.18em] text-slate-300 transition-colors hover:border-neon/50 hover:text-neon"
                  data-testid="hackathon-github-link"
                >
                  <Github size={15} /> Project repo
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </motion.main>
  );
}
