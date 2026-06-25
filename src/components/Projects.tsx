import { useState } from 'react';
import { Github, ExternalLink, FolderGit, ArrowRight, X, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Full Stack' | 'Frontend'>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [showDemoToast, setShowDemoToast] = useState(false);

  const triggerDemoToast = () => {
    setShowDemoToast(true);
    setTimeout(() => {
      setShowDemoToast(false);
    }, 3000);
  };

  const filters: ('All' | 'Full Stack' | 'Frontend')[] = ['All', 'Full Stack', 'Frontend'];

  const filteredProjects = selectedFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedFilter);

  return (
    <section id="projects" className="py-24 bg-[#111114] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-indigo-500 mx-auto rounded-full" />
          <p className="text-zinc-400 text-sm md:text-base mt-4 max-w-lg mx-auto">
            A hand-picked selection of full-stack systems and responsive frontend applications I've developed.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                selectedFilter === filter
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-950/30'
                  : 'bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.title}
              className="group flex flex-col bg-[#0A0A0C] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-indigo-500/30 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60"
            >
              {/* Card visual mockup header */}
              <div className={`relative h-48 bg-gradient-to-br ${project.imageColor} flex items-center justify-center p-6 border-b border-white/5 overflow-hidden`}>
                {/* Decorative mesh background */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
                <FolderGit className="w-16 h-16 text-white/30 group-hover:scale-110 transition-transform duration-500" />
                
                {/* Visual Category Badge inside card visual header */}
                <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest text-white/90 px-2.5 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
                  {project.category}
                </span>
              </div>

              {/* Card body */}
              <div className="flex-1 p-6 flex flex-col">
                <h3 className="text-xl font-bold text-white font-display mb-3 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2.5 py-1 bg-white/5 border border-white/5 text-zinc-400 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions Row */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer"
                  >
                    View Details
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white rounded-lg transition-colors border border-white/10"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <button
                      onClick={triggerDemoToast}
                      className="p-2 bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white rounded-lg transition-colors border border-white/10 cursor-pointer"
                      title="Launch Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Dynamic Detailed Modal --- */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#111114] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            {/* Visual banner */}
            <div className={`relative h-40 bg-gradient-to-r ${activeProject.imageColor} p-6 flex flex-col justify-end`}>
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 p-2 bg-black/40 backdrop-blur-md text-white/80 hover:text-white rounded-full hover:bg-black/60 transition-all border border-white/10"
              >
                <X className="w-4 h-4" />
              </button>
              
              <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-200 px-2.5 py-1 bg-black/30 backdrop-blur-md rounded-full border border-white/5 self-start mb-2">
                {activeProject.category}
              </span>
              <h3 className="text-2xl font-bold text-white font-display leading-tight drop-shadow-sm">
                {activeProject.title}
              </h3>
            </div>

            {/* Scrollable content container */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">Overview</h4>
                <p className="text-zinc-300 text-sm leading-relaxed">{activeProject.description}</p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">Key Highlights & Accomplishments</h4>
                <ul className="space-y-2.5">
                  {activeProject.details.map((bullet, i) => (
                    <li key={i} className="flex gap-3 text-zinc-400 text-sm leading-relaxed">
                      <Sparkles className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono px-3 py-1 bg-white/5 border border-white/10 text-zinc-300 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky Modal footer */}
            <div className="p-4 bg-white/5 border-t border-white/5 flex items-center justify-end gap-3">
              <a
                href={activeProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white text-sm font-semibold rounded-lg transition-colors"
              >
                <Github className="w-4 h-4" /> Code Repo
              </a>
              <button
                onClick={() => {
                  setActiveProject(null);
                  triggerDemoToast();
                }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-lg transition-all shadow-md shadow-indigo-950/20 cursor-pointer"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Toast Notification */}
      {showDemoToast && (
        <div className="fixed bottom-8 left-8 z-50 px-5 py-3 bg-[#111114] border border-white/10 rounded-xl text-sm font-medium text-white shadow-2xl flex items-center gap-2 animate-bounce">
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <span>Demo simulated. Set up live hosting to launch!</span>
        </div>
      )}
    </section>
  );
}
