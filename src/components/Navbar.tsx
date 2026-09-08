import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Send, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
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
    <header
      id="main-header"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0b1326]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/20'
          : 'bg-[#0b1326]/80 backdrop-blur-md'
      }`}
    >
      <div className="h-16 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('home');
            }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#8083ff] to-[#4edea3] flex items-center justify-center font-bold text-[#0b1326] font-mono text-xs shadow-md transition-transform duration-300 group-hover:scale-105">
              BS
            </div>
            <span className="font-display text-lg sm:text-xl text-[#dae2fd] tracking-tight font-semibold flex items-center gap-2">
              Brindha S
              <span className="inline-block w-2 h-2 rounded-full bg-[#4edea3] shadow-[0_0_8px_#4edea3]"></span>
            </span>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav
          id="desktop-navigation"
          className="hidden lg:flex items-center gap-1 bg-[#131b2e]/60 px-3 py-1.5 rounded-full border border-white/[0.06]"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => scrollTo(link.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#222a3d] text-[#dae2fd] shadow-sm font-semibold'
                    : 'text-[#c7c4d7] hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center gap-3">
          <button
            id="header-resume-cta-btn"
            onClick={onOpenResume}
            className="inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg bg-[#8083ff] text-[#0d0096] font-mono text-xs font-semibold hover:bg-[#c0c1ff] transition-all duration-200 shadow-[0_0_20px_rgba(128,131,255,0.3)] hover:shadow-[0_0_24px_rgba(128,131,255,0.5)] cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="whitespace-nowrap">Hire Me / Resume</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#c7c4d7] hover:text-white hover:bg-[#171f33] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-dropdown"
          className="lg:hidden border-b border-white/[0.08] bg-[#0b1326]/95 backdrop-blur-2xl px-4 py-4 space-y-2 shadow-2xl"
        >
          <div className="flex items-center gap-3 pb-3 mb-2 border-b border-white/[0.06]">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#8083ff] to-[#4edea3] flex items-center justify-center font-bold text-[#0b1326] font-mono text-xs shadow-sm">
              BS
            </div>
            <div>
              <p className="text-sm font-semibold text-[#dae2fd]">Brindha S</p>
              <p className="text-xs text-[#4edea3] font-mono">Available for 2027 Roles</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`mobile-nav-${link.id}`}
                onClick={() => scrollTo(link.id)}
                className={`text-left px-3 py-2 rounded-lg text-xs font-mono transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#222a3d] text-[#4edea3] font-semibold'
                    : 'text-[#c7c4d7] hover:bg-[#171f33] hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                scrollTo('contact');
              }}
              className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#171f33] text-xs font-mono text-white hover:bg-[#222a3d] transition-colors"
            >
              <Send className="w-3.5 h-3.5 text-[#4edea3]" />
              Get in Touch
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#8083ff] text-xs font-mono text-[#0d0096] font-semibold hover:bg-[#c0c1ff] transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Resume CV
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
