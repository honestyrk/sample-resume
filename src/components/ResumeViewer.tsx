import { X, Printer, Download, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION, SKILLS, EXPERIENCE, CERTIFICATIONS } from '../data';

interface ResumeViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeViewer({ isOpen, onClose }: ResumeViewerProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#111114] border border-white/5 rounded-2xl flex flex-col my-8 shadow-2xl">
        
        {/* Controls Bar - Hidden when printing */}
        <div className="no-print flex items-center justify-between p-5 border-b border-white/5 bg-[#111114] sticky top-0 z-10 rounded-t-2xl">
          <div>
            <h3 className="text-lg font-bold text-white font-display">Interactive Resume Viewer</h3>
            <p className="text-xs text-zinc-400 mt-0.5">Styled with a standard black-and-white print template for clean layout exporting</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-semibold transition-all cursor-pointer shadow-md shadow-indigo-950/20"
            >
              <Printer className="w-4 h-4" /> Print / Save as PDF
            </button>
            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Paper Resume Document - Emulates a real paper sheet */}
        <div className="flex-1 bg-white p-8 sm:p-12 text-zinc-900 font-sans max-w-[210mm] mx-auto w-full border-y border-zinc-200 shadow-inner">
          <div className="space-y-6 text-left">
            {/* Document Header */}
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-extrabold tracking-tight text-zinc-950 uppercase">{PERSONAL_INFO.name}</h1>
              <p className="text-sm text-zinc-600 font-medium flex flex-wrap justify-center items-center gap-x-3 gap-y-1">
                <span>{PERSONAL_INFO.location}</span>
                <span className="text-zinc-300">|</span>
                <span>{PERSONAL_INFO.phone}</span>
                <span className="text-zinc-300">|</span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="underline hover:text-zinc-950">{PERSONAL_INFO.email}</a>
              </p>
              <p className="text-sm font-medium text-zinc-600 space-x-3 mt-1.5">
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="underline hover:text-zinc-950 inline-flex items-center gap-1">
                  LinkedIn <ExternalLink className="w-3 h-3 text-zinc-400 no-print" />
                </a>
                <span>|</span>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="underline hover:text-zinc-950 inline-flex items-center gap-1">
                  GitHub <ExternalLink className="w-3 h-3 text-zinc-400 no-print" />
                </a>
              </p>
            </div>

            {/* Separator Line */}
            <div className="border-t-2 border-zinc-900" />

            {/* SUMMARY SECTION */}
            <div className="space-y-2">
              <h2 className="text-md font-bold tracking-wider text-zinc-950 uppercase text-center bg-zinc-50 py-1 border border-zinc-200">
                Summary
              </h2>
              <p className="text-xs leading-relaxed text-zinc-800 text-justify">
                {PERSONAL_INFO.summary}
              </p>
            </div>

            {/* EDUCATION SECTION */}
            <div className="space-y-2">
              <h2 className="text-md font-bold tracking-wider text-zinc-950 uppercase text-center bg-zinc-50 py-1 border border-zinc-200">
                Education
              </h2>
              <div className="space-y-3.5">
                {/* College */}
                <div className="flex flex-col sm:flex-row justify-between items-start gap-1">
                  <div className="space-y-0.5">
                    <p className="text-xs font-bold text-zinc-950">
                      o Dhanalakshmi Srinivasan Engineering College
                    </p>
                    <p className="text-xs text-zinc-700 font-medium">
                      B.Tech Artificial Intelligence and Data Science
                    </p>
                  </div>
                  <div className="text-right sm:text-right text-xs">
                    <p className="font-bold text-zinc-950">7.9 CGPA (Till 5th Sem)</p>
                    <p className="text-zinc-600">Aug 2023 - May 2027</p>
                  </div>
                </div>

                {/* School */}
                <div className="flex flex-col sm:flex-row justify-between items-start gap-1">
                  <div className="space-y-0.5">
                    <p className="text-xs font-bold text-zinc-950">
                      o Sri Ramakrishna Vidyalaya Higher Secondary School
                    </p>
                    <p className="text-xs text-zinc-700 font-medium">
                      Computer Science
                    </p>
                  </div>
                  <div className="text-right sm:text-right text-xs">
                    <p className="font-bold text-zinc-950">82.5 %</p>
                    <p className="text-zinc-600">Jun 2021 - May 2023</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SKILLS SUMMARY */}
            <div className="space-y-2">
              <h2 className="text-md font-bold tracking-wider text-zinc-950 uppercase text-center bg-zinc-50 py-1 border border-zinc-200">
                Skills Summary
              </h2>
              <div className="text-xs space-y-1 text-zinc-800 pl-2">
                <p><strong>Programming:</strong> Python</p>
                <p><strong>Frontend Development:</strong> HTML5, CSS3, React.js</p>
                <p><strong>Backend Development:</strong> Flask, Node.js</p>
                <p><strong>Database:</strong> SQL, MongoDB</p>
                <p><strong>Tools:</strong> Git, GitHub, REST APIs</p>
                <p><strong>Development Environments:</strong> VS Code</p>
              </div>
            </div>

            {/* EXPERIENCE SECTION */}
            <div className="space-y-2">
              <h2 className="text-md font-bold tracking-wider text-zinc-950 uppercase text-center bg-zinc-50 py-1 border border-zinc-200">
                Experience
              </h2>
              <div className="space-y-4">
                {/* Exp 1 */}
                <div className="space-y-1">
                  <div className="flex justify-between items-start text-xs font-bold text-zinc-950">
                    <div>
                      <h4>Full Stack Web Developer Intern</h4>
                      <p className="text-zinc-700 font-medium">CODTECH IT Solutions Pvt. Ltd — Remote</p>
                    </div>
                    <span className="font-medium text-zinc-600">May 2025 – June 2025</span>
                  </div>
                  <ul className="list-disc pl-4 text-[11px] text-zinc-800 leading-relaxed space-y-0.5">
                    <li>Developed responsive web applications using HTML, CSS, JavaScript, and backend technologies.</li>
                    <li>Implemented user-friendly frontend interfaces and integrated them with backend services.</li>
                    <li>Worked on database integration and CRUD operations for dynamic web applications.</li>
                    <li>Collaborated with mentors to improve debugging, testing, and deployment practices.</li>
                  </ul>
                </div>

                {/* Exp 2 */}
                <div className="space-y-1">
                  <div className="flex justify-between items-start text-xs font-bold text-zinc-950">
                    <div>
                      <h4>Web Full Stack Developer Virtual Intern</h4>
                      <p className="text-zinc-700 font-medium">AICTE & EduSkills Foundation — Remote</p>
                    </div>
                    <span className="font-medium text-zinc-600">Oct 2024 – Dec 2024</span>
                  </div>
                  <ul className="list-disc pl-4 text-[11px] text-zinc-800 leading-relaxed space-y-0.5">
                    <li>Completed a 10-week virtual internship focused on full stack web development.</li>
                    <li>Built and tested web applications using frontend and backend frameworks.</li>
                    <li>Learned software development lifecycle, version control, and debugging techniques.</li>
                    <li>Gained experience in building scalable and responsive web applications.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ACHIEVEMENTS & ACTIVITIES */}
            <div className="space-y-2">
              <h2 className="text-md font-bold tracking-wider text-zinc-950 uppercase text-center bg-zinc-50 py-1 border border-zinc-200">
                Achievements & Activities
              </h2>
              <ul className="list-disc pl-4 text-[11px] text-zinc-800 leading-relaxed space-y-1">
                <li>Completed <strong>Full Stack Web Development Internship</strong> at CODTECH IT Solutions Pvt. Ltd.</li>
                <li>Successfully finished <strong>Web Full Stack Developer Virtual Internship</strong> conducted by AICTE & EduSkills Foundation.</li>
                <li>Earned <strong>Cloud Computing Certification</strong> through NPTEL from IIT Kharagpur.</li>
                <li>Completed <strong>Full Stack E-Commerce Project Certification</strong> from GreatStack and developed an e-commerce web application.</li>
              </ul>
            </div>

            {/* CERTIFICATES */}
            <div className="space-y-2">
              <h2 className="text-md font-bold tracking-wider text-zinc-950 uppercase text-center bg-zinc-50 py-1 border border-zinc-200">
                Certificates
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8 text-[11px] text-zinc-800">
                <div className="flex justify-between">
                  <span>Web Full Stack Developer (Intern)</span>
                  <strong className="text-zinc-950 font-semibold text-right">Oct-Dec 2024</strong>
                </div>
                <div className="flex justify-between">
                  <span>Full Stack E-Commerce Project – GreatStack</span>
                  <strong className="text-zinc-950 font-semibold text-right">May-June 2025</strong>
                </div>
                <div className="flex justify-between">
                  <span>Cloud Computing (NPTEL)</span>
                  <strong className="text-zinc-950 font-semibold text-right">Jan-Apr 2025</strong>
                </div>
                <div className="flex justify-between">
                  <span>Full Stack Web Developer (Intern)</span>
                  <strong className="text-zinc-950 font-semibold text-right">May-June 2025</strong>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Modal Footer - Hidden when printing */}
        <div className="no-print p-4 bg-[#0A0A0C] border-t border-white/5 rounded-b-2xl text-center text-xs text-zinc-500">
          Tip: Hit <strong>Print / Save as PDF</strong> and set destination to "Save as PDF" to export this clean layout sheet.
        </div>
      </div>
    </div>
  );
}
