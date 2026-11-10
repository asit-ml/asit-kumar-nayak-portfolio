import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Lenis from "lenis";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children }) {
  const location = useLocation();
  const lenisRef = useRef(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const touchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (reducedMotion || touchDevice) return undefined;

    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    lenisRef.current = lenis;
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const mx = useMotionValue(-400);
  const my = useMotionValue(-400);
  const sx = useSpring(mx, { stiffness: 120, damping: 26 });
  const sy = useSpring(my, { stiffness: 120, damping: 26 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return undefined;

    const move = (e) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mx, my]);

  return (
    <div className="relative min-h-screen bg-ink text-slate-100" data-testid="app-layout">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed z-0 h-[560px] w-[560px] rounded-full"
        style={{
          left: sx,
          top: sy,
          x: "-50%",
          y: "-50%",
          background:
            "radial-gradient(circle, rgba(0,229,255,0.06) 0%, rgba(0,229,255,0.02) 40%, transparent 65%)",
        }}
      />
      <div className="grain" aria-hidden="true" />
      <Nav />
      <div className="relative z-10">{children}</div>
      <Footer />
    </div>
  );
}
