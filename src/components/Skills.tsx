import React, { useState } from 'react';
import { SKILLS } from '../data';
import { 
  FileCode, 
  Palette, 
  Blocks, 
  Atom, 
  Smartphone, 
  Flame, 
  Server, 
  Code, 
  Database, 
  Table, 
  GitBranch, 
  Github, 
  Radio, 
  Laptop,
  Terminal
} from 'lucide-react';

// Dynamic Icon Component mapping helper
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileCode,
  Palette,
  Blocks,
  Atom,
  Smartphone,
  Flame,
  Server,
  Code,
  Database,
  Table,
  GitBranch,
  Github,
  Radio,
  Laptop
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Frontend' | 'Backend' | 'Database' | 'Tools'>('All');

  const categories: ('All' | 'Frontend' | 'Backend' | 'Database' | 'Tools')[] = [
    'All',
    'Frontend',
    'Backend',
    'Database',
    'Tools'
  ];

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS
    : SKILLS.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-24 bg-[#0A0A0C]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-white mb-4">
            Technical Expertise
          </h2>
          <div className="w-12 h-1 bg-indigo-500 mx-auto rounded-full" />
          <p className="text-zinc-400 text-sm md:text-base mt-4 max-w-lg mx-auto">
            Experienced across multiple layers of the engineering stack, with a specialization in React frontend frameworks.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4.5 py-2 rounded-xl text-xs font-semibold tracking-wide uppercase border transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-indigo-600 border-transparent text-white shadow-md shadow-indigo-950/40 scale-102'
                  : 'bg-white/5 border-white/10 text-zinc-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map(skill => {
            const IconComponent = iconMap[skill.icon] || Terminal;
            return (
              <div
                key={skill.name}
                className="group relative p-6 rounded-2xl bg-[#111114] border border-white/5 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40"
              >
                {/* Accent Background Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-indigo-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Skill Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-indigo-400 group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-indigo-500 group-hover:text-white group-hover:border-transparent transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 group-hover:text-zinc-400 transition-colors">
                      {skill.category}
                    </span>
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-white font-bold font-display text-base mb-4 group-hover:text-indigo-400 transition-colors">
                    {skill.name}
                  </h3>

                  {/* Spacer to push progress to bottom */}
                  <div className="flex-grow" />

                  {/* Progress Indicator */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs text-zinc-500 font-mono">
                      <span>Efficiency</span>
                      <span className="text-zinc-300 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <div
                        className="h-full bg-indigo-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
