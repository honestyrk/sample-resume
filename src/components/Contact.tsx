import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Linkedin, Github, Instagram, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Please tell me your name.';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address.';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please type a brief message.';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please write at least 10 characters.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Simulate form submission success
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear errors when typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#111114] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-12 h-1 bg-indigo-500 mx-auto rounded-full" />
          <p className="text-zinc-400 text-sm md:text-base mt-4 max-w-lg mx-auto">
            Have a question or want to collaborate on a web project? Shoot me a message, and I'll respond as soon as possible!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT: Meta & Social Details */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white font-display">Let's Collaborate</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                I am actively seeking junior developer internships or full-time roles in frontend or full-stack web development. I would love to connect and see how I can add value to your team.
              </p>

              {/* Contacts info */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-indigo-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-zinc-500">Email Me</span>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm font-semibold text-zinc-200 hover:text-indigo-400 transition-colors">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-indigo-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-zinc-500">Call Me</span>
                    <a href={`tel:${PERSONAL_INFO.phone}`} className="text-sm font-semibold text-zinc-200 hover:text-indigo-400 transition-colors">
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-indigo-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-zinc-500">Location</span>
                    <p className="text-sm font-semibold text-zinc-200">
                      {PERSONAL_INFO.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Cards */}
            <div className="space-y-4 pt-6 border-t border-white/5">
              <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">Connect with me</h4>
              <div className="flex gap-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-indigo-600 hover:border-transparent flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4.5 h-4.5" />
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-indigo-600 hover:border-transparent flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4.5 h-4.5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-indigo-600 hover:border-transparent flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Form Card */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-[#0A0A0C] border border-white/5 shadow-xl">
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Name Input */}
                <div className="space-y-2">
                  <label htmlFor="form-name" className="text-xs font-semibold text-zinc-400 uppercase tracking-wide">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="form-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Ramkumar K"
                    className={`w-full px-4 py-3 bg-white/5 border ${
                      errors.name ? 'border-rose-500/80 focus:border-rose-500' : 'border-white/10 focus:border-indigo-500 focus:bg-white/[0.08]'
                    } rounded-xl text-zinc-200 text-sm placeholder-zinc-600 focus:outline-none transition-all`}
                  />
                  {errors.name && (
                    <p className="flex items-center gap-1.5 text-xs text-rose-400">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label htmlFor="form-email" className="text-xs font-semibold text-zinc-400 uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="form-email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@example.com"
                    className={`w-full px-4 py-3 bg-white/5 border ${
                      errors.email ? 'border-rose-500/80 focus:border-rose-500' : 'border-white/10 focus:border-indigo-500 focus:bg-white/[0.08]'
                    } rounded-xl text-zinc-200 text-sm placeholder-zinc-600 focus:outline-none transition-all`}
                  />
                  {errors.email && (
                    <p className="flex items-center gap-1.5 text-xs text-rose-400">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message Textarea */}
                <div className="space-y-2">
                  <label htmlFor="form-message" className="text-xs font-semibold text-zinc-400 uppercase tracking-wide">
                    Your Message
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Tell me about your project, team, or opportunity..."
                    className={`w-full px-4 py-3 bg-white/5 border ${
                      errors.message ? 'border-rose-500/80 focus:border-rose-500' : 'border-white/10 focus:border-indigo-500 focus:bg-white/[0.08]'
                    } rounded-xl text-zinc-200 text-sm placeholder-zinc-600 focus:outline-none transition-all resize-none`}
                  />
                  {errors.message && (
                    <p className="flex items-center gap-1.5 text-xs text-rose-400">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-semibold shadow-md shadow-indigo-950/20 hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>

                {/* Success alert message */}
                {isSubmitted && (
                  <div className="flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl animate-fade-in">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold">Message sent successfully!</p>
                      <p className="text-xs text-zinc-400">Thank you for reaching out. I'll get back to you shortly.</p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
