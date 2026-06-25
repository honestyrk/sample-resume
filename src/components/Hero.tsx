import { useEffect, useState } from 'react';
import { ArrowDown, Mail, Briefcase } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const words = [PERSONAL_INFO.role, 'Frontend Specialist', 'UI/UX Designer', 'AI & Data Science Enthusiast'];
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 40);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 100);
    }

    if (!isDeleting && charIndex === currentWord.length) {
      timer = setTimeout(() => setIsDeleting(true), 1500); // Wait at full word
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex]);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-[#0A0A0C] text-white overflow-hidden py-24 px-6"
    >
      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_30%,#0A0A0C_95%]" />
        
        {/* Sleek Dot Grid */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative z-10 max-w-4xl text-center flex flex-col items-center">
        {/* Header Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-indigo-400 mb-6 uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          Available for Opportunities
        </div>

        {/* Hello Text */}
        <p className="text-zinc-400 text-sm md:text-base font-medium tracking-wide uppercase mb-3">
          Hello, I'm
        </p>

        {/* Name with Dynamic Gradient */}
        <h1 className="text-5xl md:text-7xl font-extrabold font-display tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400 mb-6 drop-shadow-sm leading-none">
          {PERSONAL_INFO.name}
        </h1>

        {/* Typed Typing Role */}
        <h2 className="text-xl md:text-3xl font-medium text-zinc-300 mb-6 h-10 flex items-center justify-center font-display">
          <span>{displayText}</span>
          <span className="w-[3px] h-[1.3em] bg-indigo-400 ml-1.5 animate-blink" />
        </h2>

        {/* Tagline */}
        <p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-sans">
          {PERSONAL_INFO.tagline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => handleScrollTo('projects')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white text-black hover:bg-indigo-600 hover:text-white rounded-xl text-base font-semibold shadow-lg shadow-indigo-950/20 hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <Briefcase className="w-4 h-5" />
            View Projects
          </button>
          <button
            onClick={() => handleScrollTo('contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white/5 border border-white/10 hover:bg-white/10 text-zinc-200 hover:text-white rounded-xl text-base font-semibold hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <Mail className="w-4 h-5" />
            Contact Me
          </button>
        </div>
      </div>

      {/* Elegant mouse scroll button */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity" onClick={() => handleScrollTo('about')}>
        <div className="w-[24px] h-[40px] border-2 border-white/15 rounded-full flex justify-center p-1.5">
          <div className="w-[3px] h-[7px] bg-indigo-400 rounded-full animate-scroll" />
        </div>
        <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-medium">Scroll Down</span>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(6px); opacity: 0.5; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-scroll {
          animation: scroll 2s infinite ease-in-out;
        }
        .animate-blink {
          animation: blink 0.8s infinite;
        }
      `}</style>
    </section>
  );
}
