import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pageVariants } from "../components/Reveal";

export default function NotFound() {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
      data-testid="page-not-found"
    >
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon">404</p>
      <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">Page not found</h1>
      <p className="mt-4 max-w-md text-slate-400">The route you followed doesn't exist — even Dijkstra couldn't find a path here.</p>
      <Link
        to="/"
        className="mt-9 rounded-full bg-neon px-7 py-3.5 font-semibold text-ink transition-transform duration-200 hover:scale-[1.04]"
        data-testid="not-found-home-link"
      >
        Back home
      </Link>
    </motion.main>
  );
}
