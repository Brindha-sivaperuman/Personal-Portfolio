import React, { useState } from 'react';
import {
  X,
  Printer,
  Download,
  Mail,
  Linkedin,
  Terminal,
  MapPin,
  GraduationCap,
  Award,
  CheckCircle2,
  Copy,
  Check,
} from 'lucide-react';
import { PERSONAL_INFO, SKILL_CATEGORIES, PROJECTS, CERTIFICATIONS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const text = `
Brindha S - ${PERSONAL_INFO.role} (${PERSONAL_INFO.batch})
Institution: ${PERSONAL_INFO.institution}
Email: ${PERSONAL_INFO.email}
GitHub: ${PERSONAL_INFO.github}
LinkedIn: ${PERSONAL_INFO.linkedin}

Profile:
${PERSONAL_INFO.summary}

Education:
Bachelor of Engineering (B.E. / B.Tech)
Women's Engineering College, Pondicherry Technological University (PTU)
Duration: 2023 - 2027 (7th Semester Active Undergraduate)

Core Technical Skills:
- Frontend: HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS
- Backend & DB: Python, Node.js, REST APIs, SQL
- AI & Emerging: AI Agents, Generative AI, LLMs, Cloud Computing
- Tools: Git, GitHub, VS Code, Google AI Studio

Key Projects:
1. Tourism Exploration & Guide Platform
2. Real-Time Weather Forecast Application

Certifications:
- Simplilearn: AI Agents
- Simplilearn: Introduction to Cloud Computing
- Simplilearn: Generative AI Foundations & Applications
- NPTEL / IIT: Enhancing Soft Skills & Personality
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#0b1326] text-[#dae2fd] rounded-2xl border border-white/[0.1] shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Toolbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#171f33]/90 backdrop-blur">
          <div className="flex items-center gap-2">
            <span className="font-display font-semibold text-white text-base">
              Resume Curriculum Vitae · Brindha S
            </span>
            <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#00a572]/20 text-[#4edea3] font-medium hidden sm:inline">
              2027 Grad
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="px-3 py-1.5 rounded-lg bg-[#222a3d] hover:bg-[#2d3449] text-xs font-mono text-[#dae2fd] flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Copy plain-text CV"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#4edea3]" />
                  <span className="text-[#4edea3]">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-[#8083ff] hover:bg-[#c0c1ff] text-xs font-mono text-[#0d0096] font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#908fa0] hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 print:bg-white print:text-black">
          {/* Header */}
          <div className="border-b border-white/[0.08] pb-6 flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <h1 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Brindha S
              </h1>
              <p className="text-sm font-medium text-[#4edea3] mt-0.5">
                {PERSONAL_INFO.role} · 7th Semester Undergraduate
              </p>
              <p className="text-xs text-[#c7c4d7] mt-1 flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-[#908fa0]" />
                <span>Puducherry, India</span>
                <span>•</span>
                <span>Affiliation: Pondicherry Technological University (PTU)</span>
              </p>
            </div>

            <div className="flex flex-col gap-1 text-xs font-mono text-[#c7c4d7]">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="hover:text-[#4edea3] flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-[#8083ff]" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#4edea3] flex items-center gap-1.5"
              >
                <Terminal className="w-3.5 h-3.5 text-[#4edea3]" />
                <span>github.com/brindha-sivaperuman</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#4edea3] flex items-center gap-1.5"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#d0bcff]" />
                <span>linkedin.com/in/brindha-sivaperuman</span>
              </a>
            </div>
          </div>

          {/* Objective / Summary */}
          <div className="space-y-2">
            <h2 className="font-mono text-xs text-[#4edea3] uppercase tracking-wider font-semibold">
              // Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-[#c7c4d7] leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs text-[#4edea3] uppercase tracking-wider font-semibold">
              // Education
            </h2>
            <div className="p-4 rounded-xl bg-[#171f33] border border-white/[0.06] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div>
                <h3 className="font-display font-semibold text-sm sm:text-base text-white">
                  Bachelor of Engineering (B.E. / B.Tech) - Computer Science & Engineering
                </h3>
                <p className="text-xs text-[#c7c4d7]">
                  Women's Engineering College, Pondicherry Technological University (PTU)
                </p>
                <p className="text-[11px] font-mono text-[#4edea3] mt-1">
                  Current Status: 7th Semester Active Student (Merit Standing)
                </p>
              </div>
              <span className="px-2.5 py-1 rounded bg-[#222a3d] font-mono text-xs text-[#dae2fd] shrink-0">
                2023 - 2027
              </span>
            </div>
          </div>

          {/* Skills Breakdown */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs text-[#4edea3] uppercase tracking-wider font-semibold">
              // Technical Skill Domains
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div
                  key={cat.id}
                  className="p-3 rounded-lg bg-[#171f33] border border-white/[0.04]"
                >
                  <span className="font-mono text-[11px] text-[#8083ff] font-semibold block mb-1">
                    {cat.title}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {cat.skills.map((s, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-[#222a3d] text-[11px] font-mono text-[#dae2fd]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs text-[#4edea3] uppercase tracking-wider font-semibold">
              // Featured Projects
            </h2>
            <div className="space-y-3">
              {PROJECTS.map((proj) => (
                <div
                  key={proj.id}
                  className="p-4 rounded-xl bg-[#171f33] border border-white/[0.06] flex flex-col gap-2"
                >
                  <div className="flex justify-between items-start">
                    <h3 className="font-display font-semibold text-sm text-white">{proj.title}</h3>
                    <span className="text-[11px] font-mono text-[#8083ff]">{proj.type}</span>
                  </div>
                  <p className="text-xs text-[#c7c4d7]">{proj.description}</p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {proj.techStack.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-[#222a3d] font-mono text-[10px] text-[#dae2fd]"
                      >
                        {t.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs text-[#4edea3] uppercase tracking-wider font-semibold">
              // Certified Credentials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.id}
                  className="p-3 rounded-lg bg-[#171f33] border border-white/[0.04] flex items-center justify-between"
                >
                  <div>
                    <span className="font-semibold text-white block">{cert.title}</span>
                    <span className="text-[11px] text-[#908fa0] font-mono">{cert.issuer}</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#4edea3] flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Verified
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
