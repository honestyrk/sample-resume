import { useState, useEffect } from 'react';
import { Menu, X, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from './data';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import ResumeViewer from './components/ResumeViewer';
import ExportModal from './components/ExportModal';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Nav Links List
  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Timeline', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  // Scrollspy & Header styling
  useEffect(() => {
    const handleScroll = () => {
      // Header sticky state
      setIsScrolled(window.scrollY > 40);

      // Scroll top button visibility
      setShowScrollTop(window.scrollY > 500);

      // Active Section ScrollSpy
      const scrollPosition = window.scrollY + 140; // Offset for header
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-zinc-100 font-sans antialiased selection:bg-indigo-500/35 selection:text-white">
      {/* HEADER NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 no-print ${
          isScrolled
            ? 'py-4.5 bg-[#0A0A0C]/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleScrollTo('hero')}
            className="text-xl font-bold font-display tracking-tight text-white cursor-pointer"
          >
            {PERSONAL_INFO.name.split(' ')[0]}
            <span className="text-indigo-400">.K</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className={`text-sm font-semibold tracking-wide transition-colors cursor-pointer ${
                  activeSection === link.id
                    ? 'text-indigo-400'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA / Export Code */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setIsExportOpen(true)}
              className="px-4.5 py-2 bg-white/5 border border-white/10 text-white/75 hover:text-white hover:bg-white/10 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer"
            >
              Get HTML/CSS/JS
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-zinc-400 hover:text-white bg-white/5 border border-white/10 rounded-xl md:hidden transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* MOBILE NAV DRAWER */}
      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 top-[76px] z-30 bg-[#0A0A0C] border-b border-white/10 p-6 flex flex-col gap-5 md:hidden shadow-2xl animate-slide-down no-print">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className={`text-left text-base font-bold transition-colors cursor-pointer ${
                  activeSection === link.id ? 'text-indigo-400' : 'text-zinc-400'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="h-px bg-white/10 my-1" />
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsExportOpen(true);
            }}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-bold text-center cursor-pointer transition-all"
          >
            Export Offline Code Bundle
          </button>
        </div>
      )}

      {/* CORE PORTFOLIO SECTIONS */}
      <main>
        <Hero />
        <About
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenExport={() => setIsExportOpen(true)}
        />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>

      {/* FOOTER */}
      <footer className="bg-[#0A0A0C] border-t border-white/5 py-12 px-6 no-print">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-zinc-500 text-center md:text-left">
            &copy; 2026 {PERSONAL_INFO.name}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => handleScrollTo('hero')}
              className="text-xs font-semibold text-zinc-400 hover:text-white cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => handleScrollTo('about')}
              className="text-xs font-semibold text-zinc-400 hover:text-white cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => handleScrollTo('projects')}
              className="text-xs font-semibold text-zinc-400 hover:text-white cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => setIsResumeOpen(true)}
              className="text-xs font-semibold text-zinc-400 hover:text-white cursor-pointer"
            >
              Print CV
            </button>
          </div>
        </div>
      </footer>

      {/* SCROLL-TO-TOP FLOAT BUTTON */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-35 p-3.5 bg-indigo-600 text-white rounded-full shadow-lg shadow-indigo-950/30 hover:bg-indigo-500 hover:-translate-y-0.5 transition-all cursor-pointer no-print ${
          showScrollTop ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none'
        }`}
        aria-label="Scroll back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* INTERACTIVE RESUME TEMPLATE MODAL */}
      <ResumeViewer isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      {/* SOURCE CODE EXPORT MODAL */}
      <ExportModal isOpen={isExportOpen} onClose={() => setIsExportOpen(false)} />
    </div>
  );
}
