import React, { useState } from 'react';
import {
  Mail,
  Terminal,
  Linkedin,
  Building2,
  Send,
  CheckCircle2,
  Copy,
  Check,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="w-full bg-[#060e20] py-16 sm:py-24 border-t border-white/[0.04]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        {/* Section Title */}
        <div className="flex flex-col gap-1.5">
          <span className="font-mono text-xs text-[#4edea3] font-medium tracking-wider">
            // 06. INITIATE DIALOGUE
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#dae2fd] font-semibold tracking-tight">
            Contact & Connect
          </h2>
          <div className="w-16 h-1 bg-[#4edea3] rounded-full mt-1"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: Verified Contact Information & Profiles (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            <div className="flex flex-col gap-3">
              <h3 className="font-display text-xl text-[#dae2fd] font-semibold">
                Let's discuss opportunities
              </h3>
              <p className="text-xs sm:text-sm text-[#c7c4d7] leading-relaxed">
                I am actively seeking software engineering internships and full-time roles starting
                with the 2027 graduating class. Feel free to reach out directly through email or
                connect on professional channels.
              </p>
            </div>

            {/* Direct Communication Channels Cards */}
            <div className="flex flex-col gap-3">
              {/* Email Item */}
              <div className="p-4 rounded-xl bg-[#171f33] border border-white/[0.06] hover:bg-[#222a3d] transition-all flex items-center justify-between group">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-3 min-w-0 flex-1"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#8083ff]/20 flex items-center justify-center text-[#c0c1ff] group-hover:scale-105 transition-transform shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-mono text-[10px] text-[#908fa0] uppercase tracking-wider">
                      DIRECT EMAIL
                    </span>
                    <span className="font-mono text-xs sm:text-sm text-[#dae2fd] font-semibold truncate group-hover:text-[#c0c1ff] transition-colors">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </a>

                <button
                  onClick={handleCopyEmail}
                  title="Copy email address"
                  className="p-2 rounded-lg bg-[#131b2e] hover:bg-[#2d3449] text-[#c7c4d7] hover:text-white transition-colors ml-2 cursor-pointer"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-[#4edea3]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* GitHub Profile */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#171f33] border border-white/[0.06] hover:bg-[#222a3d] transition-all flex items-center gap-3 group"
              >
                <div className="w-11 h-11 rounded-lg bg-[#00a572]/20 flex items-center justify-center text-[#4edea3] group-hover:scale-105 transition-transform shrink-0">
                  <Terminal className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-mono text-[10px] text-[#908fa0] uppercase tracking-wider">
                    CODE REPOSITORIES
                  </span>
                  <span className="font-mono text-xs sm:text-sm text-[#dae2fd] font-semibold truncate group-hover:text-[#4edea3] transition-colors">
                    github.com/brindha-sivaperuman
                  </span>
                </div>
              </a>

              {/* LinkedIn Profile */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#171f33] border border-white/[0.06] hover:bg-[#222a3d] transition-all flex items-center gap-3 group"
              >
                <div className="w-11 h-11 rounded-lg bg-[#a078ff]/20 flex items-center justify-center text-[#d0bcff] group-hover:scale-105 transition-transform shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-mono text-[10px] text-[#908fa0] uppercase tracking-wider">
                    PROFESSIONAL NETWORK
                  </span>
                  <span className="font-mono text-xs sm:text-sm text-[#dae2fd] font-semibold truncate group-hover:text-[#d0bcff] transition-colors">
                    linkedin.com/in/brindha-sivaperuman
                  </span>
                </div>
              </a>

              {/* Academic Affiliation */}
              <div className="p-4 rounded-xl bg-[#171f33] border border-white/[0.06] flex items-center gap-3">
                <div className="w-11 h-11 rounded-lg bg-[#31394d] flex items-center justify-center text-[#c7c4d7] shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-[#908fa0] uppercase tracking-wider">
                    CAMPUS AFFILIATION
                  </span>
                  <span className="text-xs sm:text-sm text-[#dae2fd] font-medium">
                    Women's Engineering College, PTU
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#171f33] p-6 sm:p-8 rounded-xl border border-white/[0.06] shadow-lg flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg sm:text-xl text-[#dae2fd] font-semibold">
                Send a Direct Message
              </h3>
              <span className="font-mono text-[11px] text-[#4edea3]">
                Typically replies within 24h
              </span>
            </div>

            <form
              id="portfolio-contact-form"
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-name"
                    className="font-mono text-xs text-[#dae2fd] font-medium"
                  >
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Maya Sharma"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#131b2e] border border-white/[0.08] text-xs font-mono text-[#dae2fd] placeholder:text-[#908fa0] focus:outline-none focus:border-[#8083ff]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-email"
                    className="font-mono text-xs text-[#dae2fd] font-medium"
                  >
                    Your Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="maya@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#131b2e] border border-white/[0.08] text-xs font-mono text-[#dae2fd] placeholder:text-[#908fa0] focus:outline-none focus:border-[#8083ff]"
                  />
                </div>
              </div>

              {/* Row 2: Subject */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-subject"
                  className="font-mono text-xs text-[#dae2fd] font-medium"
                >
                  Subject *
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Software Engineer Internship Inquiry (2027 Batch)"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#131b2e] border border-white/[0.08] text-xs font-mono text-[#dae2fd] placeholder:text-[#908fa0] focus:outline-none focus:border-[#8083ff]"
                />
              </div>

              {/* Row 3: Message Body */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-message"
                  className="font-mono text-xs text-[#dae2fd] font-medium"
                >
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hello Brindha, I came across your portfolio and would like to invite you for an engineering discussion..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#131b2e] border border-white/[0.08] text-xs font-mono text-[#dae2fd] placeholder:text-[#908fa0] focus:outline-none focus:border-[#8083ff] resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#8083ff] text-[#0d0096] font-mono text-xs font-semibold hover:bg-[#c0c1ff] transition-all duration-200 shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </div>

              {/* Interactive Feedback Notice */}
              {formSubmitted && (
                <div
                  id="form-feedback"
                  className="p-3.5 rounded-lg bg-[#00a572]/20 border border-[#4edea3]/30 text-[#4edea3] font-mono text-xs flex items-center gap-2.5 mt-2 animate-in fade-in"
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>
                    Thank you, {formData.name || 'Visitor'}! Your message simulation has been dispatched.
                    You can also reach me directly at{' '}
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="underline font-bold">
                      {PERSONAL_INFO.email}
                    </a>
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
