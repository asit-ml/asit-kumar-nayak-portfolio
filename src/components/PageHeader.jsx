import { motion } from "framer-motion";
import { Eyebrow, EASE } from "./Reveal";

export default function PageHeader({ eyebrow, lines, sub }) {
  return (
    <header className="mx-auto max-w-6xl px-6 pt-32 sm:pt-36 lg:px-10 lg:pt-44">
      <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: EASE }}>
        <Eyebrow>{eyebrow}</Eyebrow>
      </motion.div>
      <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        {lines.map((line, i) => (
          <span key={line} className="block overflow-hidden pb-1">
            <motion.span
              className="block"
              initial={{ y: "112%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.1, ease: EASE }}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </h1>
      {sub && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease: EASE }}
          className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400"
        >
          {sub}
        </motion.p>
      )}
    </header>
  );
}
