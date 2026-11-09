import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal, { pageVariants } from "../components/Reveal";
import { skills, teachingTopics } from "../data/portfolio";

export default function Skills() {
  return (
    <motion.main variants={pageVariants} initial="initial" animate="animate" exit="exit" data-testid="page-skills">
      <PageHeader
        eyebrow="Skills"
        lines={["The toolkit", "I reach for."]}
        sub="Languages, frameworks and platforms I use daily — across notebooks, terminals and production web apps."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-10" data-testid="skills-categories-section">
        <div className="grid gap-5 lg:grid-cols-3">
          {skills.map((group, gi) => (
            <Reveal key={group.id} delay={gi * 0.08} className="h-full">
              <div
                className="flex h-full flex-col rounded-2xl border border-line bg-panel p-7 transition-colors duration-300 hover:border-neon/40"
                data-testid={`skills-category-${group.id}`}
              >
                <div className="flex items-center justify-between">
                  <h2 className="font-display text-lg font-semibold text-slate-100">{group.name}</h2>
                  <span className="font-mono text-sm text-neon">0{gi + 1}</span>
                </div>
                <div className="mt-6 flex flex-wrap content-start gap-2.5">
                  {group.items.map((s, si) => (
                    <motion.span
                      key={s}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: si * 0.03 }}
                      className="cursor-default rounded-full border border-line bg-panel2 px-3.5 py-2 text-sm text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-neon/50 hover:text-neon"
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-10" data-testid="skills-teaching-section">
        <Reveal>
          <div className="rounded-2xl border border-line bg-panel p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-panel2 text-gold">
                <GraduationCap size={18} />
              </span>
              <div>
                <h2 className="font-display text-xl font-semibold text-slate-100">Also fluent in: teaching it</h2>
                <p className="font-mono text-xs text-slate-500">Topics I've taught or TA'd at IIT Madras</p>
              </div>
            </div>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {teachingTopics.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.025 }}
                  className="rounded-full border border-gold/25 bg-gold/5 px-3.5 py-1.5 font-mono text-xs text-gold/90"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </motion.main>
  );
}
