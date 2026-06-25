import { Skill, Project, Experience, Education, Certification } from './types';

export const PERSONAL_INFO = {
  name: 'Ramkumar K',
  role: 'Full Stack Web Developer',
  email: 'honestyrk@gmail.com',
  phone: '+91 9597256644',
  location: 'Mayiladuthurai, Tamilnadu',
  linkedin: 'https://linkedin.com/in/ramkumar-k-webdev', // Professional placeholder
  github: 'https://github.com/honestyrk',
  tagline: 'Crafting performant, visually polished full stack applications with clean code and modern aesthetics.',
  summary: 'Motivated Full Stack Web Developer with strong knowledge of modern web technologies including HTML, CSS, JavaScript, React.js, Node.js, and databases. Experienced in building responsive web applications and developing complete systems from frontend to backend. Passionate about creating efficient, user-friendly, and scalable web applications while continuously learning new technologies.',
};

export const SKILLS: Skill[] = [
  // Frontend
  { name: 'HTML5', level: 95, category: 'Frontend', icon: 'FileCode' },
  { name: 'CSS3', level: 90, category: 'Frontend', icon: 'Palette' },
  { name: 'JavaScript', level: 92, category: 'Frontend', icon: 'Blocks' },
  { name: 'React.js', level: 88, category: 'Frontend', icon: 'Atom' },
  { name: 'Responsive Web Design', level: 95, category: 'Frontend', icon: 'Smartphone' },
  // Backend
  { name: 'Flask', level: 80, category: 'Backend', icon: 'Flame' },
  { name: 'Node.js', level: 82, category: 'Backend', icon: 'Server' },
  { name: 'Python', level: 85, category: 'Core', icon: 'Code' },
  // Databases
  { name: 'SQL', level: 84, category: 'Database', icon: 'Database' },
  { name: 'MongoDB', level: 78, category: 'Database', icon: 'Table' },
  // Tools
  { name: 'Git', level: 88, category: 'Tools', icon: 'GitBranch' },
  { name: 'GitHub', level: 90, category: 'Tools', icon: 'Github' },
  { name: 'REST APIs', level: 88, category: 'Tools', icon: 'Radio' },
  { name: 'VS Code', level: 95, category: 'Tools', icon: 'Laptop' },
];

export const PROJECTS: Project[] = [
  {
    title: 'Lost and Found Management System',
    description: 'A robust digital platform designed to help university students and faculty members report lost personal belongings, browse recovered items, and securely coordinate item returns.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
    category: 'Full Stack',
    githubUrl: 'https://github.com/honestyrk/lost-and-found-system',
    imageColor: 'from-blue-600 to-indigo-900',
    details: [
      'Engineered a complete user authentication module with secure JWT sessions.',
      'Implemented an intuitive item dashboard with category filtering, keyword search, and item status trackers (Lost, Found, Claimed).',
      'Created a secure message mediation service allowing finders and owners to chat directly inside the platform without exposing personal phone numbers.',
      'Designed a responsive interface optimized for mobile and desktop screens.'
    ]
  },
  {
    title: 'Full Stack E-Commerce Web Application',
    description: 'A feature-rich digital storefront complete with a functional product catalogue, shopping cart, real-time total calculations, and secure mock checkout.',
    tags: ['React.js', 'Node.js', 'SQL', 'Express', 'Tailwind CSS', 'REST API'],
    category: 'Full Stack',
    githubUrl: 'https://github.com/honestyrk/fullstack-ecommerce',
    imageColor: 'from-emerald-600 to-teal-900',
    details: [
      'Successfully completed the GreatStack project certification course to build a secure e-commerce application.',
      'Designed relational database schemas to efficiently organize product listings, user profiles, shopping carts, and past transactions.',
      'Structured dynamic product views with multiple image support, color and size selections, and advanced category filtering.',
      'Built a custom admin panel allowing store owners to add new product inventories, edit prices, and manage order fulfillment states.'
    ]
  },
  {
    title: 'Personal Finance Expense Tracker',
    description: 'An elegant, high-contrast dashboard utility designed to track personal income, catalog daily expenses, and visualize spending habits through interactive charts.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage', 'Chart.js'],
    category: 'Frontend',
    githubUrl: 'https://github.com/honestyrk/expense-tracker',
    imageColor: 'from-amber-500 to-orange-900',
    details: [
      'Created a single-page interactive utility featuring responsive data charts that update live with each transaction.',
      'Integrated web local storage mechanisms to persist transaction records and expense limits securely across browser restarts.',
      'Built multi-category transaction tracking (Food, Housing, Utilities, Leisure, Savings) with visual progress meters.',
      'Implemented clean CSS transitions and state management for quick transaction creation and instant deletion.'
    ]
  },
  {
    title: 'Developer Portfolio Hub',
    description: 'The personal showcase of engineering projects, educational credentials, certifications, and technical skills featuring fluid layouts, interactive themes, and code exports.',
    tags: ['React.js', 'Tailwind CSS', 'Motion', 'Lucide Icons'],
    category: 'Frontend',
    githubUrl: 'https://github.com/honestyrk/portfolio',
    imageColor: 'from-purple-600 to-fuchsia-900',
    details: [
      'Designed with a custom-styled dark neon gradient theme emphasizing professional readability and typography.',
      'Features a fully interactive resume viewer, timeline components, and scroll-responsive page highlight trackers.',
      'Includes an integrated single-click code export modal featuring raw HTML/CSS/JS file bundles for offline, non-framework hosting.',
      'Validated contact forms with responsive success animations and active field-level state checks.'
    ]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: 'Full Stack Web Developer Intern',
    company: 'CODTECH IT Solutions Pvt. Ltd',
    type: 'Remote',
    duration: 'May 2025 – June 2025',
    bullets: [
      'Developed responsive web applications using HTML, CSS, JavaScript, and backend technologies.',
      'Implemented user-friendly frontend interfaces and integrated them with backend services.',
      'Worked on database integration and CRUD operations for dynamic web applications.',
      'Collaborated with mentors to improve debugging, testing, and deployment practices.'
    ]
  },
  {
    role: 'Web Full Stack Developer Virtual Intern',
    company: 'AICTE & EduSkills Foundation',
    type: 'Remote',
    duration: 'Oct 2024 – Dec 2024',
    bullets: [
      'Completed a 10-week virtual internship focused on full stack web development.',
      'Built and tested web applications using frontend and backend frameworks.',
      'Learned software development lifecycle, version control, and debugging techniques.',
      'Gained experience in building scalable and responsive web applications.'
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    institution: 'Dhanalakshmi Srinivasan Engineering College',
    degree: 'B.Tech Artificial Intelligence and Data Science',
    duration: 'Aug 2023 - May 2027',
    grade: '7.9 CGPA (Till 5th Sem)'
  },
  {
    institution: 'Sri Ramakrishna Vidyalaya Higher Secondary School',
    degree: 'Computer Science (High School)',
    duration: 'Jun 2021 - May 2023',
    grade: '82.5%'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: 'Web Full Stack Developer (Internship)',
    issuer: 'AICTE & EduSkills Foundation',
    duration: 'Oct - Dec 2024'
  },
  {
    name: 'Full Stack E-Commerce Project Certification',
    issuer: 'GreatStack',
    duration: 'May - June 2025'
  },
  {
    name: 'Cloud Computing Certification',
    issuer: 'NPTEL (IIT Kharagpur)',
    duration: 'Jan - Apr 2025'
  },
  {
    name: 'Full Stack Web Developer (Internship)',
    issuer: 'CODTECH IT Solutions Pvt. Ltd',
    duration: 'May - June 2025'
  }
];
