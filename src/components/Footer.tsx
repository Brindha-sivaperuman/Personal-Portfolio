import React from 'react';
import { Code, Link2, Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="w-full bg-[#060e20] border-t border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Identity & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-1.5">
          <div className="flex items-center gap-2">
            <span className="font-display text-lg text-[#dae2fd] font-semibold">
              Brindha S
            </span>
            <span className="font-mono text-[11px] text-[#4edea3] bg-[#222a3d] px-2.5 py-0.5 rounded-full border border-white/[0.04]">
              CS & Software Engineer
            </span>
          </div>
          <p className="text-xs text-[#908fa0] text-center md:text-left">
            © 2024 Brindha S. Built with modern engineering craft.
          </p>
        </div>

        {/* Quick Nav Anchor Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {['home', 'about', 'skills', 'projects', 'certifications', 'contact'].map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-xs font-mono text-[#c7c4d7] hover:text-[#dae2fd] transition-colors capitalize cursor-pointer"
            >
              {id}
            </button>
          ))}
        </div>

        {/* Social Link Badges & Scroll to Top */}
        <div className="flex items-center gap-2">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Code Repository"
            className="w-9 h-9 rounded-lg bg-[#131b2e] border border-white/[0.06] flex items-center justify-center text-[#c7c4d7] hover:text-white hover:bg-[#171f33] transition-all"
          >
            <Code className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Professional Network"
            className="w-9 h-9 rounded-lg bg-[#131b2e] border border-white/[0.06] flex items-center justify-center text-[#c7c4d7] hover:text-white hover:bg-[#171f33] transition-all"
          >
            <Link2 className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            aria-label="Send Email"
            className="w-9 h-9 rounded-lg bg-[#131b2e] border border-white/[0.06] flex items-center justify-center text-[#c7c4d7] hover:text-white hover:bg-[#171f33] transition-all"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
            className="w-9 h-9 rounded-lg bg-[#131b2e] border border-white/[0.06] flex items-center justify-center text-[#c7c4d7] hover:text-[#4edea3] hover:bg-[#171f33] transition-all cursor-pointer ml-1"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
