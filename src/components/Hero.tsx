import React from 'react';
import { Terminal, Send, FileText, GraduationCap, Bot, Sparkles, Code2, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, METRICS } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
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
    <div className="relative w-full overflow-hidden">
      {/* Floating Ambient Backdrops */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#8083ff]/15 blur-3xl pointer-events-none"></div>
      <div className="absolute top-96 -right-32 w-96 h-96 rounded-full bg-[#00a572]/12 blur-3xl pointer-events-none"></div>

      <section
        id="home"
        className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-20 sm:pb-24 flex flex-col justify-center"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Pitch & Details (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            {/* Availability Pill */}
            <div
              id="hero-availability-badge"
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#171f33] border border-white/[0.08] shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4edea3] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4edea3]"></span>
              </span>
              <span className="font-mono text-xs sm:text-xs text-[#4edea3] tracking-wide font-medium">
                {PERSONAL_INFO.status}
              </span>
            </div>

            {/* Main Typography Stack */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[#c0c1ff] font-mono text-xs sm:text-sm font-medium tracking-wide">
                <span>// 01. INTRODUCING</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#dae2fd] leading-[1.1]">
                Hi, I'm <span className="text-[#c0c1ff]">Brindha S</span>
              </h1>
              <p className="text-base sm:text-lg text-[#4edea3] font-medium mt-1">
                {PERSONAL_INFO.role} | {PERSONAL_INFO.tagline}
              </p>
            </div>

            {/* Elevator Pitch */}
            <p className="text-sm sm:text-base text-[#c7c4d7] max-w-xl leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <button
                id="hero-view-projects-btn"
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#8083ff] text-[#0d0096] font-mono text-xs sm:text-sm font-semibold hover:bg-[#c0c1ff] transition-all duration-200 shadow-[0_0_24px_rgba(128,131,255,0.35)] hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Terminal className="w-4 h-4" />
                View Projects
              </button>

              <button
                id="hero-contact-btn"
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#222a3d] text-[#dae2fd] font-mono text-xs sm:text-sm font-medium hover:bg-[#2d3449] border border-white/[0.08] transition-all duration-200 cursor-pointer"
              >
                <Send className="w-4 h-4 text-[#4edea3]" />
                Get in Touch
              </button>

              <button
                id="hero-resume-cv-btn"
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#131b2e] text-[#c7c4d7] hover:text-[#dae2fd] hover:bg-[#171f33] border border-white/[0.06] transition-colors font-mono text-xs font-medium cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#d0bcff]" />
                Resume CV
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 w-full">
              {METRICS.map((metric, idx) => (
                <div
                  key={idx}
                  id={`metric-item-${idx}`}
                  className="p-3.5 sm:p-4 rounded-xl bg-[#131b2e] border border-white/[0.06] shadow-sm flex flex-col justify-center"
                >
                  <span className={`font-display text-2xl sm:text-3xl font-bold ${metric.colorClass}`}>
                    {metric.value}
                  </span>
                  <span className="font-mono text-xs text-[#c7c4d7] mt-1">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Technical Profile & Code Console (5 cols, No image) */}
          <div className="lg:col-span-5 flex justify-center items-center relative mt-6 lg:mt-0">
            <div className="relative w-full max-w-md">
              {/* Atmospheric back glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#8083ff]/20 via-[#4edea3]/15 to-[#d0bcff]/20 blur-2xl pointer-events-none"></div>

              {/* Terminal Code Console Card */}
              <div className="relative rounded-2xl bg-[#0e1628] border border-white/[0.1] shadow-2xl overflow-hidden backdrop-blur-xl">
                {/* Console Window Chrome Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#171f33] border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f56]/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e]/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-[#27c93f]/80 inline-block"></span>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#908fa0]">
                    <Code2 className="w-3.5 h-3.5 text-[#8083ff]" />
                    <span>engineer.config.ts</span>
                  </div>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#4edea3]/10 text-[#4edea3] font-semibold">
                    ACTIVE
                  </span>
                </div>

                {/* Console Code Editor Area */}
                <div className="p-5 font-mono text-xs leading-relaxed space-y-1.5 text-[#c7c4d7]">
                  <p>
                    <span className="text-[#d0bcff]">const</span>{' '}
                    <span className="text-[#8083ff] font-semibold">engineer</span>:{' '}
                    <span className="text-[#4edea3]">FullStackDeveloper</span> = {'{'}
                  </p>
                  <p className="pl-4">
                    <span className="text-[#dae2fd]">name</span>:{' '}
                    <span className="text-[#8083ff]">"{PERSONAL_INFO.name}"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-[#dae2fd]">role</span>:{' '}
                    <span className="text-[#4edea3]">"Software Engineer"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-[#dae2fd]">academicStanding</span>:{' '}
                    <span className="text-[#d0bcff]">"7th Sem Undergrad"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-[#dae2fd]">university</span>:{' '}
                    <span className="text-[#dae2fd]">"PTU Affiliation"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-[#dae2fd]">batchYear</span>:{' '}
                    <span className="text-[#4edea3]">2027</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-[#dae2fd]">coreFocus</span>: [
                  </p>
                  <p className="pl-8 text-[#8083ff]">
                    "Web Architecture", "AI Agents",
                  </p>
                  <p className="pl-8 text-[#8083ff]">
                    "Generative AI", "Cloud Computing"
                  </p>
                  <p className="pl-4">],</p>
                  <p className="pl-4">
                    <span className="text-[#dae2fd]">availableForHiring</span>:{' '}
                    <span className="text-[#4edea3] font-bold">true</span>
                  </p>
                  <p>{'};'}</p>

                  <div className="pt-3 mt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px]">
                    <span className="text-[#4edea3] flex items-center gap-1.5 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Ready for Internships
                    </span>
                    <span className="text-[#908fa0]">TypeScript 5.8</span>
                  </div>
                </div>
              </div>

              {/* Floating Tech Badge Top Right */}
              <div className="absolute -top-3 -right-2 bg-[#222a3d] px-3.5 py-1.5 rounded-lg border border-white/[0.12] shadow-xl flex items-center gap-2">
                <GraduationCap className="text-[#4edea3] w-4 h-4" />
                <span className="font-mono text-xs text-[#dae2fd] font-medium">PTU Engineer</span>
              </div>

              {/* Floating Tech Badge Bottom Left */}
              <div className="absolute -bottom-3 -left-2 bg-[#222a3d] px-3.5 py-1.5 rounded-lg border border-white/[0.12] shadow-xl flex items-center gap-2">
                <Bot className="text-[#c0c1ff] w-4 h-4" />
                <span className="font-mono text-xs text-[#dae2fd] font-medium">AI & Full-Stack</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
