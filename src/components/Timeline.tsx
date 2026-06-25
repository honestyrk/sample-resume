import { Briefcase, GraduationCap, Award, Calendar, Milestone, ShieldCheck } from 'lucide-react';
import { EXPERIENCE, EDUCATION, CERTIFICATIONS } from '../data';

export default function Timeline() {
  return (
    <section id="experience" className="py-24 bg-[#0A0A0C]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-white mb-4">
            My Timeline
          </h2>
          <div className="w-12 h-1 bg-indigo-500 mx-auto rounded-full" />
          <p className="text-zinc-400 text-sm md:text-base mt-4 max-w-lg mx-auto">
            A chronological summary of my academic journey, internships, and professional accomplishments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT COLUMN: Experience */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-indigo-500/15 text-indigo-400 rounded-xl border border-indigo-500/20">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white font-display">Professional Internships</h3>
            </div>

            <div className="relative border-l border-white/5 pl-6 ml-3 space-y-12">
              {EXPERIENCE.map((exp) => (
                <div key={exp.company + exp.duration} className="relative">
                  {/* Timeline bullet pointer */}
                  <div className="absolute -left-[31px] top-1.5 w-4.5 h-4.5 rounded-full bg-[#0A0A0C] border-3 border-indigo-500" />

                  {/* Header */}
                  <div className="space-y-1.5">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-indigo-400">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.duration}
                    </span>
                    <h4 className="text-lg font-bold text-white font-display leading-tight">
                      {exp.role}
                    </h4>
                    <p className="text-sm font-medium text-zinc-400">
                      {exp.company} <span className="text-zinc-500">• {exp.type}</span>
                    </p>
                  </div>

                  {/* Bullet accomplishments */}
                  <ul className="mt-4 space-y-2 list-disc pl-4 text-zinc-400 text-sm leading-relaxed">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Education & Credentials */}
          <div className="lg:col-span-6 space-y-12">
            {/* Education Sub-Section */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-indigo-500/15 text-indigo-400 rounded-xl border border-indigo-500/20">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white font-display">Academic Education</h3>
              </div>

              <div className="relative border-l border-white/5 pl-6 ml-3 space-y-12">
                {EDUCATION.map((edu) => (
                  <div key={edu.institution} className="relative">
                    {/* Timeline bullet pointer */}
                    <div className="absolute -left-[31px] top-1.5 w-4.5 h-4.5 rounded-full bg-[#0A0A0C] border-3 border-indigo-400" />

                    {/* Header */}
                    <div className="space-y-1.5">
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-indigo-400">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.duration}
                      </span>
                      <h4 className="text-lg font-bold text-white font-display leading-tight">
                        {edu.degree}
                      </h4>
                      <p className="text-sm font-medium text-zinc-400">
                        {edu.institution}
                      </p>
                      <p className="text-xs text-zinc-500 font-mono">
                        Result/GPA: <strong className="text-zinc-300 font-medium">{edu.grade}</strong>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Card Container */}
            <div className="p-6 rounded-2xl bg-[#111114] border border-white/5 space-y-6">
              <div className="flex items-center gap-2 text-white">
                <Award className="w-5 h-5 text-indigo-400" />
                <h4 className="text-base font-bold font-display">Completed Certifications</h4>
              </div>

              <div className="divide-y divide-white/5">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.name} className="py-4 first:pt-0 last:pb-0 flex items-start justify-between gap-4">
                    <div className="space-y-1 flex-1">
                      <h5 className="text-sm font-bold text-zinc-200 flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                        {cert.name}
                      </h5>
                      <p className="text-xs text-zinc-500">{cert.issuer}</p>
                    </div>
                    <span className="text-[10px] font-mono font-semibold text-indigo-400 shrink-0 mt-0.5">
                      {cert.duration}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
