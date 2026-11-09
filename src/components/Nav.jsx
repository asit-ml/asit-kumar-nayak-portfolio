import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import Logo from "./Logo";
import { navLinks, profile } from "../data/portfolio";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const navLinkClass = ({ isActive }) =>
    `relative font-mono text-[13px] uppercase tracking-[0.14em] transition-colors duration-200 ${
      isActive ? "text-neon" : "text-slate-400 hover:text-slate-100"
    }`;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-ink/75 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
          <Link to="/" className="flex items-center gap-3" data-testid="nav-logo-link">
            <Logo size={30} />
            <span className="font-mono text-sm tracking-wide text-slate-200">
              asit<span className="text-neon">.</span>kumar<span className="text-gold">.</span>nayak
            </span>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((l) => (
              <NavLink key={l.path} to={l.path} className={navLinkClass} data-testid={l.testId}>
                {l.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="rounded-full bg-neon px-5 py-2 font-mono text-[13px] font-semibold uppercase tracking-[0.14em] text-ink transition-transform duration-200 hover:scale-[1.04]"
              data-testid="nav-contact-link"
            >
              Contact
            </Link>
            <a
              href={profile.resume}
              download={profile.resumeName}
              className="flex items-center gap-2 rounded-full border border-line px-5 py-2 font-mono text-[13px] uppercase tracking-[0.14em] text-slate-300 transition-colors duration-200 hover:border-neon/50 hover:text-neon"
              data-testid="nav-download-resume-btn"
            >
              <Download size={14} />
              CV
            </a>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-slate-200 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            data-testid="nav-menu-toggle"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-ink/95 px-6 pb-10 pt-28 backdrop-blur-xl lg:hidden"
            data-testid="nav-mobile-drawer"
          >
            <div className="flex flex-col gap-2">
              {[{ name: "Home", path: "/", testId: "nav-home-link" }, ...navLinks, { name: "Contact", path: "/contact", testId: "nav-contact-link" }].map(
                (l, i) => (
                  <motion.div
                    key={l.path}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: 0.05 + i * 0.05 }}
                  >
                    <Link
                      to={l.path}
                      className="flex items-center justify-between border-b border-line/60 py-4 font-display text-2xl font-semibold text-slate-100"
                      data-testid={`mobile-${l.testId}`}
                    >
                      {l.name}
                      <span className="font-mono text-xs text-neon">0{i + 1}</span>
                    </Link>
                  </motion.div>
                )
              )}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex items-center justify-between"
            >
              <a href={profile.resume} download={profile.resumeName} className="flex items-center gap-2 rounded-full bg-neon px-6 py-3 font-semibold text-ink" data-testid="mobile-download-resume-btn">
                <Download size={16} />
                Download CV
              </a>
              <p className="font-mono text-xs text-slate-500">{profile.email}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
