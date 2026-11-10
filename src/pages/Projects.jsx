import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal, { pageVariants } from "../components/Reveal";
import { projects, projectCategories } from "../data/portfolio";

const categoryLabels = { ml: "Machine Learning & Deep Learning", web: "Full-Stack Web", ai: "AI-Powered Tool" };

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const visible = projects.filter((p) => filter === "all" || p.category === filter);

  return (
    <motion.main variants={pageVariants} initial="initial" animate="animate" exit="exit" data-testid="page-projects">
      <PageHeader
        eyebrow="Projects"
        lines={["Built, shipped,", "battle-tested."]}
        sub="Projects across machine learning, deep learning, full-stack web and AI tooling — built from coursework, competitions and practical problems."
      />

      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-10" data-testid="projects-grid-section">
        <Reveal className="flex flex-wrap gap-3">
          {Object.entries(projectCategories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              data-testid={`projects-filter-${key}`}
              className={`rounded-full border px-5 py-2.5 font-mono text-xs uppercase tracking-[0.18em] transition-all duration-200 ${
                filter === key
                  ? "border-neon bg-neon text-ink"
                  : "border-line text-slate-400 hover:border-neon/50 hover:text-neon"
              }`}
            >
              {label}
            </button>
          ))}
        </Reveal>

        <motion.div layout className="mt-10 grid gap-5 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group flex h-full flex-col rounded-2xl border border-line bg-panel p-7 transition-colors duration-300 hover:border-neon/40"
                data-testid={`project-card-${p.id}`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-neon">
                    {categoryLabels[p.category]}
                  </span>
                  <span className="font-mono text-sm text-slate-600">
                    {String(projects.indexOf(p) + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-slate-100 transition-colors group-hover:text-neon">
                  {p.title}
                </h2>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-slate-400">{p.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-slate-400">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-4 border-t border-line pt-5">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-slate-300 transition-colors hover:text-neon"
                    data-testid={`project-github-${p.id}`}
                  >
                    <Github size={15} /> GitHub
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-slate-300 transition-colors hover:text-neon"
                      data-testid={`project-demo-${p.id}`}
                    >
                      <ExternalLink size={15} /> Live Demo
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </motion.main>
  );
}
