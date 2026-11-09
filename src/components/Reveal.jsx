import { motion } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1];

export const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.25 } },
};

export default function Reveal({ children, delay = 0, y = 30, className = "", testId }) {
  return (
    <motion.div
      className={className}
      data-testid={testId}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children, className = "" }) {
  return (
    <p className={`font-mono text-xs uppercase tracking-[0.3em] text-neon sm:text-sm ${className}`}>{children}</p>
  );
}
