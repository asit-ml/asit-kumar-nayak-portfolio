import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Experience from "@/pages/Experience";
import Projects from "@/pages/Projects";
import Skills from "@/pages/Skills";
import Education from "@/pages/Education";
import Hackathons from "@/pages/Hackathons";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-ink px-6 text-center" data-testid="error-boundary">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon">Something broke</p>
          <h1 className="mt-3 font-display text-3xl font-bold text-slate-100">An unexpected error occurred</h1>
          <button
            onClick={() => window.location.reload()}
            className="mt-8 rounded-full bg-neon px-6 py-3 font-semibold text-ink"
            data-testid="error-reload-button"
          >
            Reload
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/hackathons" element={<Hackathons />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </ErrorBoundary>
    </BrowserRouter>
  );
}
