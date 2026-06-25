import { Mail, Phone, MapPin, Printer, ArrowRight, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface AboutProps {
  onOpenResume: () => void;
  onOpenExport: () => void;
}

export default function About({ onOpenResume, onOpenExport }: AboutProps) {
  return (
    <section id="about" className="py-24 bg-[#111114] border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-white mb-4">
            About Me
          </h2>
          <div className="w-12 h-1 bg-indigo-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Content Info */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-white font-display">
              Motivated & Quality-Driven Developer
            </h3>
            <p className="text-zinc-400 text-base leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
            <p className="text-zinc-400 text-base leading-relaxed">
              As a student of B.Tech in Artificial Intelligence and Data Science, I blend analytical problem-solving with creative web development to build responsive websites and structured backend servers.
            </p>

            {/* Micro Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-y border-white/5">
              <div className="flex items-center gap-3 text-zinc-400">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-indigo-400">
                  <Mail className="w-4 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-zinc-500">Email Me</span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm font-medium hover:text-indigo-400 transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-zinc-400">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-indigo-400">
                  <Phone className="w-4 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-zinc-500">Call Me</span>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="text-sm font-medium hover:text-indigo-400 transition-colors">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-zinc-400">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-indigo-400">
                  <MapPin className="w-4 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-zinc-500">Location</span>
                  <span className="text-sm font-medium">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-zinc-400">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-indigo-400">
                  <Award className="w-4 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-zinc-500">Availability</span>
                  <span className="text-sm font-medium text-emerald-400">
                    Open for Internships
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-semibold shadow-md shadow-indigo-950/20 transition-all cursor-pointer"
              >
                <Printer className="w-4 h-5" />
                View & Print Resume
              </button>
              <button
                onClick={onOpenExport}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-zinc-200 hover:text-white rounded-xl text-sm font-semibold transition-all cursor-pointer"
              >
                Get HTML/CSS/JS Source
                <ArrowRight className="w-4 h-5 text-zinc-500" />
              </button>
            </div>
          </div>

          {/* Quick Metrics Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-indigo-500/30 transition-all hover:-translate-y-1">
              <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-300 font-display">
                2+
              </span>
              <h4 className="text-white font-medium text-sm mt-2">Internships</h4>
              <p className="text-zinc-500 text-xs mt-1">Full stack & web development</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-indigo-500/30 transition-all hover:-translate-y-1">
              <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-300 font-display">
                4+
              </span>
              <h4 className="text-white font-medium text-sm mt-2">Core Projects</h4>
              <p className="text-zinc-500 text-xs mt-1">E-commerce, lost & found, expense tracker</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-indigo-500/30 transition-all hover:-translate-y-1">
              <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-300 font-display">
                4+
              </span>
              <h4 className="text-white font-medium text-sm mt-2">Certifications</h4>
              <p className="text-zinc-500 text-xs mt-1">NPTEL, GreatStack, internships</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-indigo-500/30 transition-all hover:-translate-y-1">
              <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-300 font-display">
                7.9
              </span>
              <h4 className="text-white font-medium text-sm mt-2">CGPA Grade</h4>
              <p className="text-zinc-500 text-xs mt-1">Academic track till 5th sem</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
