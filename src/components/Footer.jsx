import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Logo from "./Logo";
import { navLinks, profile } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 border-t border-line bg-panel/40" data-testid="site-footer">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link to="/" className="flex items-center gap-3" data-testid="footer-logo-link">
              <Logo size={30} />
              <span className="font-mono text-sm tracking-wide text-slate-200">
                asit<span className="text-neon">.</span>kumar<span className="text-gold">.</span>nayak
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Data Science & Applications at IIT Madras. Machine learning, full-stack web and clean data pipelines.
            </p>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-slate-500">{profile.location}</p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon">Sitemap</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {[{ name: "Home", path: "/" }, ...navLinks, { name: "Contact", path: "/contact" }].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-slate-400 transition-colors hover:text-neon" data-testid={`footer-nav-${l.path === "/" ? "home" : l.path.slice(1)}-link`}>
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon">Connect</p>
            <div className="mt-5 flex flex-col gap-3">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-neon" data-testid="footer-email-link">
                <Mail size={16} /> {profile.email}
              </a>
              <a href={profile.phoneHref} className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-neon" data-testid="footer-phone-link">
                <Phone size={16} /> {profile.phone}
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-neon" data-testid="footer-linkedin-link">
                <Linkedin size={16} /> linkedin.com/in/asit-ml
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-neon" data-testid="footer-github-link">
                <Github size={16} /> github.com/asit-ml
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-slate-500">© {year} Asit Kumar Nayak</p>
          <p className="font-mono text-xs text-slate-500">Designed & built with React, Framer Motion & Lenis</p>
        </div>
      </div>
    </footer>
  );
}
