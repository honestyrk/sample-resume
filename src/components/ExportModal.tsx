import { useState } from 'react';
import { X, Copy, Check, Download, FileCode, Palette, FileJson } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILLS, EXPERIENCE, EDUCATION, CERTIFICATIONS } from '../data';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ExportModal({ isOpen, onClose }: ExportModalProps) {
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'js'>('html');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // --- HTML CONTENT ---
  const htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${PERSONAL_INFO.name} | Portfolio</title>
  <!-- Google Fonts: Inter & Space Grotesk -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <!-- Stylesheet -->
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Navigation Bar -->
  <header class="navbar">
    <div class="nav-container">
      <a href="#hero" class="nav-logo">${PERSONAL_INFO.name.split(' ')[0]}<span>.K</span></a>
      <nav class="nav-menu">
        <a href="#hero" class="nav-link active">Home</a>
        <a href="#about" class="nav-link">About</a>
        <a href="#skills" class="nav-link">Skills</a>
        <a href="#projects" class="nav-link">Projects</a>
        <a href="#experience" class="nav-link">Experience</a>
        <a href="#contact" class="nav-link">Contact</a>
      </nav>
      <button class="menu-toggle" aria-label="Toggle Menu">
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>
  </header>

  <!-- Mobile Dropdown Menu -->
  <div class="mobile-menu">
    <a href="#hero" class="mobile-link">Home</a>
    <a href="#about" class="mobile-link">About</a>
    <a href="#skills" class="mobile-link">Skills</a>
    <a href="#projects" class="mobile-link">Projects</a>
    <a href="#experience" class="mobile-link">Experience</a>
    <a href="#contact" class="mobile-link">Contact</a>
  </div>

  <!-- Hero Section -->
  <section id="hero" class="hero-section">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <p class="hero-welcome">Hello, I'm</p>
      <h1 class="hero-name">${PERSONAL_INFO.name}</h1>
      <h2 class="hero-role">
        <span class="typewriter" data-words='["${PERSONAL_INFO.role}", "Frontend Specialist", "UI/UX Designer", "Problem Solver"]'></span>
        <span class="cursor">|</span>
      </h2>
      <p class="hero-tagline">${PERSONAL_INFO.tagline}</p>
      <div class="hero-ctas">
        <a href="#projects" class="btn btn-primary">View Projects</a>
        <a href="#contact" class="btn btn-secondary">Contact Me</a>
      </div>
    </div>
    <div class="scroll-indicator">
      <div class="mouse">
        <div class="wheel"></div>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="about-section">
    <div class="section-container">
      <h2 class="section-title">About Me</h2>
      <div class="section-divider"></div>
      
      <div class="about-grid">
        <div class="about-text-container">
          <p class="about-summary">${PERSONAL_INFO.summary}</p>
          <div class="about-details">
            <div class="detail-item"><i class="fa-solid fa-envelope"></i> ${PERSONAL_INFO.email}</div>
            <div class="detail-item"><i class="fa-solid fa-phone"></i> ${PERSONAL_INFO.phone}</div>
            <div class="detail-item"><i class="fa-solid fa-location-dot"></i> ${PERSONAL_INFO.location}</div>
          </div>
          <div class="about-ctas">
            <a href="#contact" class="btn btn-primary">Hire Me</a>
            <button onclick="window.print()" class="btn btn-outline"><i class="fa-solid fa-print"></i> Print Resume</button>
          </div>
        </div>
        
        <div class="about-quick-stats">
          <div class="stat-card">
            <h3>2+</h3>
            <p>Months Internship</p>
          </div>
          <div class="stat-card">
            <h3>4+</h3>
            <p>Key Projects</p>
          </div>
          <div class="stat-card">
            <h3>4+</h3>
            <p>Certifications</p>
          </div>
          <div class="stat-card">
            <h3>7.9</h3>
            <p>College CGPA</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Skills Section -->
  <section id="skills" class="skills-section">
    <div class="section-container">
      <h2 class="section-title">My Technical Stack</h2>
      <div class="section-divider"></div>
      
      <div class="skills-grid">
        ${SKILLS.map(skill => `
        <div class="skill-card">
          <div class="skill-icon-wrapper">
            <i class="fa-solid ${
              skill.name.includes('HTML') ? 'fa-code' :
              skill.name.includes('CSS') ? 'fa-palette' :
              skill.name.includes('Java') ? 'fa-cubes' :
              skill.name.includes('React') ? 'fa-atom' :
              skill.name.includes('Git') ? 'fa-code-branch' :
              skill.name.includes('Responsive') ? 'fa-mobile-screen' :
              skill.name.includes('Node') ? 'fa-server' :
              skill.name.includes('Flask') ? 'fa-fire' :
              skill.name.includes('Python') ? 'fa-laptop-code' :
              skill.name.includes('SQL') ? 'fa-database' :
              skill.name.includes('Mongo') ? 'fa-table' : 'fa-terminal'
            }"></i>
          </div>
          <h3 class="skill-name">${skill.name}</h3>
          <p class="skill-category">${skill.category}</p>
          <div class="skill-progress-bg">
            <div class="skill-progress" style="width: ${skill.level}%"></div>
          </div>
          <span class="skill-percentage">${skill.level}%</span>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section id="projects" class="projects-section">
    <div class="section-container">
      <h2 class="section-title">Featured Projects</h2>
      <div class="section-divider"></div>
      
      <div class="projects-grid">
        ${PROJECTS.map(proj => `
        <div class="project-card">
          <div class="project-header" style="background: linear-gradient(135deg, #18181b, #09090b); border-bottom: 2px solid #27272a;">
            <div class="project-placeholder">
              <i class="fa-solid fa-folder-open"></i>
            </div>
          </div>
          <div class="project-body">
            <span class="project-badge">${proj.category}</span>
            <h3 class="project-title">${proj.title}</h3>
            <p class="project-desc">${proj.description}</p>
            <div class="project-tags">
              ${proj.tags.map(tag => `<span>${tag}</span>`).join('')}
            </div>
            <div class="project-actions">
              <a href="${proj.githubUrl || '#'}" target="_blank" class="project-link"><i class="fa-brands fa-github"></i> Code</a>
              <a href="#" class="project-link demo-link"><i class="fa-solid fa-arrow-up-right-from-square"></i> Demo</a>
            </div>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- Experience & Education Section -->
  <section id="experience" class="timeline-section">
    <div class="section-container">
      <h2 class="section-title">Timeline</h2>
      <div class="section-divider"></div>
      
      <div class="timeline-grid">
        <!-- Experience -->
        <div class="timeline-col">
          <h3 class="timeline-header"><i class="fa-solid fa-briefcase"></i> Experience</h3>
          <div class="timeline">
            ${EXPERIENCE.map(exp => `
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <span class="timeline-duration">${exp.duration}</span>
                <h4 class="timeline-title">${exp.role}</h4>
                <p class="timeline-company">${exp.company} • <span>${exp.type}</span></p>
                <ul class="timeline-list">
                  ${exp.bullets.map(b => `<li>${b}</li>`).join('')}
                </ul>
              </div>
            </div>`).join('')}
          </div>
        </div>
        
        <!-- Education -->
        <div class="timeline-col">
          <h3 class="timeline-header"><i class="fa-solid fa-graduation-cap"></i> Education & Certs</h3>
          <div class="timeline">
            ${EDUCATION.map(edu => `
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <span class="timeline-duration">${edu.duration}</span>
                <h4 class="timeline-title">${edu.degree}</h4>
                <p class="timeline-company">${edu.institution}</p>
                <p class="timeline-grade">Grade: <strong>${edu.grade}</strong></p>
              </div>
            </div>`).join('')}
            
            <div class="certs-container">
              <h4 class="certs-title"><i class="fa-solid fa-award"></i> Certifications</h4>
              <ul class="certs-list">
                ${CERTIFICATIONS.map(cert => `
                <li>
                  <div class="cert-info">
                    <strong>${cert.name}</strong>
                    <span>${cert.issuer}</span>
                  </div>
                  <span class="cert-date">${cert.duration}</span>
                </li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="contact-section">
    <div class="section-container">
      <h2 class="section-title">Get In Touch</h2>
      <div class="section-divider"></div>
      
      <div class="contact-grid">
        <div class="contact-info-card">
          <h3>Let's Collaborate!</h3>
          <p>I am looking for internship and junior developer opportunities. If you have an exciting project, feel free to send a message or email directly.</p>
          
          <div class="contact-meta-list">
            <div class="meta-item">
              <i class="fa-solid fa-envelope"></i>
              <div>
                <span>Email Me</span>
                <a href="mailto:${PERSONAL_INFO.email}">${PERSONAL_INFO.email}</a>
              </div>
            </div>
            <div class="meta-item">
              <i class="fa-solid fa-phone"></i>
              <div>
                <span>Call Me</span>
                <a href="tel:${PERSONAL_INFO.phone}">${PERSONAL_INFO.phone}</a>
              </div>
            </div>
            <div class="meta-item">
              <i class="fa-solid fa-location-dot"></i>
              <div>
                <span>Location</span>
                <p>${PERSONAL_INFO.location}</p>
              </div>
            </div>
          </div>
          
          <div class="contact-social-icons">
            <a href="${PERSONAL_INFO.linkedin}" target="_blank" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="${PERSONAL_INFO.github}" target="_blank" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
            <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
          </div>
        </div>
        
        <div class="contact-form-card">
          <form id="contact-form" novalidate>
            <div class="form-group">
              <label for="name">Your Name</label>
              <input type="text" id="name" required placeholder="Enter your name">
              <span class="error-msg" id="name-error">Please enter your name</span>
            </div>
            
            <div class="form-group">
              <label for="email">Your Email</label>
              <input type="email" id="email" required placeholder="name@example.com">
              <span class="error-msg" id="email-error">Please enter a valid email address</span>
            </div>
            
            <div class="form-group">
              <label for="message">Your Message</label>
              <textarea id="message" rows="5" required placeholder="Write your message here..."></textarea>
              <span class="error-msg" id="message-error">Please write a short message</span>
            </div>
            
            <button type="submit" class="btn btn-primary w-full">Send Message <i class="fa-solid fa-paper-plane"></i></button>
            <div class="form-success-alert" id="form-success">
              <i class="fa-solid fa-circle-check"></i> Thank you! Your message was sent successfully.
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Scroll-to-Top Button -->
  <button class="scroll-to-top" id="scrollTopBtn" aria-label="Scroll to top">
    <i class="fa-solid fa-arrow-up"></i>
  </button>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer-container">
      <p>&copy; 2026 ${PERSONAL_INFO.name}. All Rights Reserved.</p>
      <div class="footer-socials">
        <a href="${PERSONAL_INFO.linkedin}" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        <a href="${PERSONAL_INFO.github}" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
      </div>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>`;

  // --- CSS CONTENT ---
  const cssCode = `/* CSS Variable Declarations - Elegant Dark Theme */
:root {
  --bg-dark: #0A0A0C;
  --bg-card: #111114;
  --bg-input: rgba(255, 255, 255, 0.05);
  --border-color: rgba(255, 255, 255, 0.08);
  
  --text-primary: #F4F4F5;
  --text-secondary: #A1A1AA;
  --text-muted: #71717A;
  
  --brand-primary: #6366F1;
  --brand-gradient: linear-gradient(135deg, #6366F1, #4F46E5);
  --brand-hover: #4F46E5;
  
  --success-color: #10b981;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-family: 'Inter', sans-serif;
  background-color: var(--bg-dark);
  color: var(--text-primary);
}

body {
  overflow-x: hidden;
}

/* Button & Common Styles */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 8px;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.btn-primary {
  background: var(--brand-gradient);
  color: white;
  border: none;
}

.btn-primary:hover {
  opacity: 0.95;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.4);
}

.btn-secondary {
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: translateY(-2px);
}

.btn-outline {
  background: transparent;
  color: var(--brand-primary);
  border: 1px solid var(--brand-primary);
}

.btn-outline:hover {
  background: rgba(139, 92, 246, 0.1);
  transform: translateY(-2px);
}

.w-full {
  width: 100%;
}

/* Section Common */
.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 24px;
}

.section-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2.25rem;
  font-weight: 700;
  text-align: center;
  letter-spacing: -0.05em;
}

.section-divider {
  width: 60px;
  height: 4px;
  background: var(--brand-gradient);
  margin: 16px auto 48px;
  border-radius: 2px;
}

/* Sticky Navbar */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(9, 9, 11, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(39, 39, 42, 0.5);
  transition: all 0.3s ease;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  text-decoration: none;
}

.nav-logo span {
  color: var(--brand-primary);
}

.nav-menu {
  display: flex;
  gap: 32px;
}

.nav-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover, .nav-link.active {
  color: var(--brand-primary);
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1.5rem;
  cursor: pointer;
}

/* Mobile Dropdown */
.mobile-menu {
  display: none;
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  background: rgba(9, 9, 11, 0.95);
  backdrop-filter: blur(12px);
  padding: 16px 24px;
  border-bottom: 1px solid var(--border-color);
  flex-direction: column;
  gap: 16px;
  z-index: 999;
}

.mobile-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
}

/* Hero Section */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 0 24px;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 70% 30%, rgba(139, 92, 246, 0.15) 0%, rgba(9, 9, 11, 0) 50%);
  z-index: 1;
}

.hero-content {
  text-align: center;
  max-width: 800px;
  z-index: 2;
}

.hero-welcome {
  color: var(--brand-primary);
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.hero-name {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: 700;
  letter-spacing: -0.05em;
  margin-bottom: 16px;
  background: linear-gradient(to right, #ffffff, #a1a1aa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-role {
  font-size: clamp(1.25rem, 4vw, 1.75rem);
  color: var(--text-secondary);
  font-weight: 500;
  margin-bottom: 24px;
}

.hero-tagline {
  color: var(--text-muted);
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto 40px;
}

.hero-ctas {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

.mouse {
  width: 26px;
  height: 44px;
  border: 2px solid var(--text-muted);
  border-radius: 13px;
  position: relative;
}

.wheel {
  width: 4px;
  height: 8px;
  background: var(--brand-primary);
  border-radius: 2px;
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  animation: scrollMouse 1.5s infinite;
}

@keyframes scrollMouse {
  0% { opacity: 1; top: 8px; }
  100% { opacity: 0; top: 18px; }
}

/* About Section */
.about-section {
  background-color: #0c0c0e;
}

.about-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 48px;
  align-items: center;
}

.about-summary {
  color: var(--text-secondary);
  line-height: 1.7;
  font-size: 1.1rem;
  margin-bottom: 24px;
}

.about-details {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text-secondary);
}

.detail-item i {
  color: var(--brand-primary);
  font-size: 1.1rem;
  width: 20px;
}

.about-ctas {
  display: flex;
  gap: 16px;
}

.about-quick-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.stat-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  padding: 24px;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
}

.stat-card:hover {
  border-color: var(--brand-primary);
  transform: translateY(-4px);
}

.stat-card h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2.25rem;
  color: var(--brand-primary);
  margin-bottom: 8px;
}

.stat-card p {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

/* Skills Cards */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 24px;
}

.skill-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
}

.skill-card:hover {
  transform: translateY(-5px);
  border-color: var(--brand-primary);
  box-shadow: 0 4px 20px rgba(139, 92, 246, 0.1);
}

.skill-icon-wrapper {
  width: 54px;
  height: 54px;
  background: rgba(139, 92, 246, 0.1);
  color: var(--brand-primary);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin: 0 auto 16px;
  transition: all 0.3s ease;
}

.skill-card:hover .skill-icon-wrapper {
  background: var(--brand-gradient);
  color: white;
}

.skill-name {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 4px;
}

.skill-category {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.skill-progress-bg {
  width: 100%;
  height: 6px;
  background: var(--bg-input);
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 8px;
}

.skill-progress {
  height: 100%;
  background: var(--brand-gradient);
  border-radius: 3px;
  width: 0%;
  transition: width 1s cubic-bezier(0.1, 0.8, 0.2, 1);
}

.skill-percentage {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85rem;
  color: var(--text-secondary);
}

/* Projects Showcase */
.projects-section {
  background-color: #0c0c0e;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 32px;
}

.project-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-6px);
  border-color: var(--brand-primary);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.project-placeholder {
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--brand-primary);
  font-size: 3rem;
  opacity: 0.6;
}

.project-body {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.project-badge {
  display: inline-block;
  align-self: flex-start;
  background: rgba(139, 92, 246, 0.1);
  color: var(--brand-primary);
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 12px;
}

.project-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 12px;
}

.project-desc {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 20px;
  flex-grow: 1;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.project-tags span {
  font-family: 'JetBrains Mono', monospace;
  background: var(--bg-input);
  color: var(--text-secondary);
  font-size: 0.75rem;
  padding: 4px 8px;
  border-radius: 4px;
}

.project-actions {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--border-color);
  padding-top: 16px;
}

.project-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.2s;
}

.project-link:hover {
  color: var(--brand-primary);
}

/* Timeline */
.timeline-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 48px;
}

.timeline-header {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.timeline-header i {
  color: var(--brand-primary);
}

.timeline {
  position: relative;
  border-left: 2px solid var(--border-color);
  padding-left: 24px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.timeline-item {
  position: relative;
}

.timeline-dot {
  position: absolute;
  left: -33px;
  top: 6px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--bg-dark);
  border: 3px solid var(--brand-primary);
}

.timeline-duration {
  font-family: 'JetBrains Mono', monospace;
  color: var(--brand-primary);
  font-size: 0.85rem;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 8px;
}

.timeline-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 4px;
}

.timeline-company {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin-bottom: 12px;
}

.timeline-company span {
  color: var(--text-muted);
}

.timeline-list {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.5;
  padding-left: 16px;
}

.timeline-list li {
  margin-bottom: 6px;
}

.timeline-grade {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

/* Certifications inside timeline */
.certs-container {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 24px;
  margin-top: 32px;
}

.certs-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.15rem;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.certs-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.certs-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 12px;
  font-size: 0.9rem;
}

.certs-list li:last-child {
  border: none;
  padding-bottom: 0;
}

.cert-info {
  display: flex;
  flex-direction: column;
}

.cert-info strong {
  color: var(--text-primary);
}

.cert-info span {
  color: var(--text-muted);
  font-size: 0.8rem;
}

.cert-date {
  font-family: 'JetBrains Mono', monospace;
  color: var(--brand-primary);
  font-size: 0.75rem;
}

/* Contact */
.contact-section {
  background-color: #0c0c0e;
}

.contact-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 48px;
}

.contact-info-card h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.75rem;
  margin-bottom: 16px;
}

.contact-info-card p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 32px;
}

.contact-meta-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 32px;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 16px;
}

.meta-item i {
  width: 48px;
  height: 48px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  color: var(--brand-primary);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
}

.meta-item div {
  display: flex;
  flex-direction: column;
}

.meta-item div span {
  font-size: 0.8rem;
  color: var(--text-muted);
  text-transform: uppercase;
}

.meta-item div a, .meta-item div p {
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
}

.contact-social-icons {
  display: flex;
  gap: 16px;
}

.contact-social-icons a {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s;
}

.contact-social-icons a:hover {
  background: var(--brand-gradient);
  color: white;
  transform: translateY(-3px);
}

/* Contact Form */
.contact-form-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 32px;
}

.form-group {
  margin-bottom: 24px;
}

.form-group label {
  display: block;
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-bottom: 8px;
  font-weight: 500;
}

.form-group input, .form-group textarea {
  width: 100%;
  background: var(--bg-input);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 12px 16px;
  color: var(--text-primary);
  font-family: inherit;
  font-size: 0.95rem;
  transition: border-color 0.2s;
}

.form-group input:focus, .form-group textarea:focus {
  outline: none;
  border-color: var(--brand-primary);
}

.error-msg {
  display: none;
  color: #ef4444;
  font-size: 0.8rem;
  margin-top: 6px;
}

.form-group.invalid .error-msg {
  display: block;
}

.form-group.invalid input, .form-group.invalid textarea {
  border-color: #ef4444;
}

.form-success-alert {
  display: none;
  background: rgba(16, 185, 129, 0.15);
  border: 1px solid var(--success-color);
  color: var(--success-color);
  padding: 16px;
  border-radius: 8px;
  margin-top: 20px;
  align-items: center;
  gap: 10px;
}

/* Scroll to top button */
.scroll-to-top {
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--brand-gradient);
  color: white;
  border: none;
  cursor: pointer;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
}

.scroll-to-top.visible {
  opacity: 1;
  visibility: visible;
}

.scroll-to-top:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.4);
}

/* Footer */
.footer {
  border-top: 1px solid var(--border-color);
  background: #050507;
  padding: 32px 24px;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer p {
  color: var(--text-muted);
  font-size: 0.9rem;
}

.footer-socials {
  display: flex;
  gap: 16px;
}

.footer-socials a {
  color: var(--text-secondary);
  font-size: 1.1rem;
  transition: color 0.2s;
}

.footer-socials a:hover {
  color: var(--brand-primary);
}

/* Responsive adjustments */
@media (max-width: 968px) {
  .about-grid, .timeline-grid, .contact-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .menu-toggle {
    display: block;
  }
  .nav-menu {
    display: none;
  }
}
`;

  // --- JAVASCRIPT CONTENT ---
  const jsCode = `// DOM Elements
const navbar = document.querySelector('.navbar');
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const scrollTopBtn = document.getElementById('scrollTopBtn');
const contactForm = document.getElementById('contact-form');
const successAlert = document.getElementById('form-success');

// Mobile Menu Toggle
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const isVisible = mobileMenu.style.display === 'flex';
    mobileMenu.style.display = isVisible ? 'none' : 'flex';
    menuToggle.innerHTML = isVisible ? '<i class="fa-solid fa-bars"></i>' : '<i class="fa-solid fa-xmark"></i>';
  });
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});

// Typewriter Effect
const typewriter = document.querySelector('.typewriter');
if (typewriter) {
  const words = JSON.parse(typewriter.getAttribute('data-words'));
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      typewriter.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typewriter.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 40 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
      typeSpeed = 1500; // Pause at end of word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 500; // Pause before typing next word
    }

    setTimeout(type, typeSpeed);
  }
  
  // Start typewriter
  setTimeout(type, 1000);
}

// Scroll effects
window.addEventListener('scroll', () => {
  // Sticky Navbar background
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(9, 9, 11, 0.95)';
    navbar.style.padding = '12px 0';
  } else {
    navbar.style.background = 'rgba(9, 9, 11, 0.85)';
    navbar.style.padding = '20px 0';
  }

  // Scroll to top button visibility
  if (window.scrollY > 500) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }

  // Active Nav Link highlight on Scroll
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let currentId = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentId = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === \`#\${currentId}\`) {
      link.classList.add('active');
    }
  });
});

// Scroll to top execution
if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Form Validation and Submission
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    let isValid = true;
    
    // Check Name
    if (nameInput.value.trim() === '') {
      nameInput.parentElement.classList.add('invalid');
      isValid = false;
    } else {
      nameInput.parentElement.classList.remove('invalid');
    }
    
    // Check Email
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      emailInput.parentElement.classList.add('invalid');
      isValid = false;
    } else {
      emailInput.parentElement.classList.remove('invalid');
    }
    
    // Check Message
    if (messageInput.value.trim() === '') {
      messageInput.parentElement.classList.add('invalid');
      isValid = false;
    } else {
      messageInput.parentElement.classList.remove('invalid');
    }
    
    if (isValid) {
      // Simulate form submission success
      successAlert.style.display = 'flex';
      contactForm.reset();
      
      setTimeout(() => {
        successAlert.style.display = 'none';
      }, 5000);
    }
  });
  
  // Real-time input error removal
  document.querySelectorAll('#contact-form input, #contact-form textarea').forEach(input => {
    input.addEventListener('input', () => {
      input.parentElement.classList.remove('invalid');
    });
  });
}

// Simple Skills Animation trigger
const progressBars = document.querySelectorAll('.skill-progress');
const skillsSection = document.getElementById('skills');

if (skillsSection) {
  const triggerSkillAnimation = () => {
    const sectionRect = skillsSection.getBoundingClientRect();
    if (sectionRect.top <= window.innerHeight - 100) {
      progressBars.forEach(bar => {
        const width = bar.style.width;
        // In plain JS, we allow CSS to handle the transition
      });
      window.removeEventListener('scroll', triggerSkillAnimation);
    }
  };
  
  window.addEventListener('scroll', triggerSkillAnimation);
  // Run once in case already visible
  setTimeout(triggerSkillAnimation, 500);
}
`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadFile = (filename: string, content: string) => {
    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const downloadAll = () => {
    downloadFile('index.html', htmlCode);
    downloadFile('style.css', cssCode);
    downloadFile('script.js', jsCode);
  };

  const getActiveCode = () => {
    if (activeTab === 'html') return htmlCode;
    if (activeTab === 'css') return cssCode;
    return jsCode;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-4xl max-h-[85vh] bg-[#111114] border border-white/5 rounded-2xl flex flex-col overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/5">
          <div>
            <h3 id="export-modal-title" className="text-xl font-bold text-white font-display">Export Code Files</h3>
            <p className="text-sm text-zinc-400 mt-1">Get the offline, framework-free HTML, CSS, and JS bundle requested</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Tabs & Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-[#0A0A0C] border-b border-white/5">
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveTab('html')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                activeTab === 'html'
                  ? 'bg-indigo-600 text-white'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <FileCode className="w-4 h-5" /> index.html
            </button>
            <button
              onClick={() => setActiveTab('css')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                activeTab === 'css'
                  ? 'bg-indigo-600 text-white'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Palette className="w-4 h-5" /> style.css
            </button>
            <button
              onClick={() => setActiveTab('js')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                activeTab === 'js'
                  ? 'bg-indigo-600 text-white'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <FileJson className="w-4 h-5" /> script.js
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => copyToClipboard(getActiveCode())}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-lg text-sm transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-5 text-emerald-500" /> Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-5 text-zinc-400" /> Copy Code
                </>
              )}
            </button>
            <button
              onClick={downloadAll}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-semibold transition-all shadow-md shadow-indigo-950/20"
            >
              <Download className="w-4 h-5" /> Download Bundle
            </button>
          </div>
        </div>

        {/* Code Content */}
        <div className="flex-1 overflow-auto p-6 bg-[#0A0A0C] font-mono text-xs text-zinc-300 select-all leading-relaxed">
          <pre className="whitespace-pre">{getActiveCode()}</pre>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#111114] border-t border-white/5 text-center text-xs text-zinc-500">
          These files are configured as self-contained. Place them in the same directory and open <strong>index.html</strong> to run!
        </div>
      </div>
    </div>
  );
}
