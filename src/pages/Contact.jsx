import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, ArrowUpRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Reveal, { pageVariants } from "../components/Reveal";
import { profile } from "../data/portfolio";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    testId: "contact-email-link",
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: profile.phoneHref,
    testId: "contact-phone-link",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/asit-ml",
    href: profile.linkedin,
    testId: "contact-linkedin-link",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/asit-ml",
    href: profile.github,
    testId: "contact-github-link",
  },
];

export default function Contact() {
  return (
    <motion.main variants={pageVariants} initial="initial" animate="animate" exit="exit" data-testid="page-contact">
      <PageHeader
        eyebrow="Contact"
        lines={["Let's talk."]}
        sub="Reach out about data science, full-stack work, teaching or collaborations — I read everything."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-10" data-testid="contact-channels-section">
        <div className="grid gap-5 sm:grid-cols-2">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.07} className="h-full">
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex h-full items-center justify-between rounded-2xl border border-line bg-panel p-7 transition-all duration-300 hover:-translate-y-1 hover:border-neon/40"
                data-testid={c.testId}
              >
                <div className="flex items-center gap-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-panel2 text-neon">
                    <c.icon size={20} />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">{c.label}</p>
                    <p className="mt-1.5 font-medium text-slate-100">{c.value}</p>
                  </div>
                </div>
                <ArrowUpRight size={20} className="text-slate-500 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neon" />
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-line bg-panel p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <p className="font-display text-2xl font-semibold text-slate-100">Prefer email?</p>
              <p className="mt-1 text-slate-400">Straight to my inbox, no forms in between.</p>
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-neon px-7 py-3.5 font-semibold text-ink transition-transform duration-200 hover:scale-[1.04]"
              data-testid="contact-primary-email-button"
            >
              Write to me
            </a>
          </div>
        </Reveal>
      </section>
    </motion.main>
  );
}
