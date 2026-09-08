import React from 'react';
import {
  IdCard,
  Brain,
  Users,
  Clock,
  MessageSquare,
  Award,
  CheckCircle2,
  Sparkles,
  Compass,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full bg-[#060e20] py-16 sm:py-24 border-t border-b border-white/[0.04]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        {/* Section Title & Anchor */}
        <div className="flex flex-col gap-1.5">
          <span className="font-mono text-xs text-[#4edea3] font-medium tracking-wider">
            // 02. PROFILE & ACADEMIA
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#dae2fd] font-semibold tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-[#4edea3] rounded-full mt-1"></div>
        </div>

        {/* Bento Grid Layout for About Details */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Big Narrative Card (7 cols) */}
          <div className="md:col-span-7 bg-[#171f33] p-6 sm:p-8 rounded-xl border border-white/[0.06] flex flex-col justify-between gap-6 shadow-sm">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2.5 text-[#c0c1ff] font-display text-lg sm:text-xl font-semibold">
                <IdCard className="w-5 h-5 text-[#8083ff]" />
                <span>Engineering Journey & Career Objective</span>
              </div>
              <p className="text-sm sm:text-base text-[#c7c4d7] leading-relaxed">
                I am currently in my 7th semester of engineering ({PERSONAL_INFO.batch}) at{' '}
                <strong className="text-[#dae2fd]">Women's Engineering College</strong>, affiliated with
                the esteemed{' '}
                <strong className="text-[#dae2fd]">
                  Pondicherry Technological University (PTU)
                </strong>
                . My educational groundwork combines deep algorithmic foundations with practical
                software construction principles.
              </p>
              <p className="text-sm sm:text-base text-[#c7c4d7] leading-relaxed">
                My career objective is to join an innovative engineering ecosystem where I can build
                scalable, resilient, and human-centric software. I hold a strong passion for continuous
                learning, adopting agile workflows, and bridging modern client-side user interfaces with
                robust backend architectures and intelligent generative AI services.
              </p>
            </div>

            {/* Soft Skills / Team Values Pill Matrix */}
            <div className="pt-2 flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-full bg-[#222a3d] border border-white/[0.06] text-[#dae2fd] font-mono text-xs flex items-center gap-1.5">
                <Brain className="w-3.5 h-3.5 text-[#4edea3]" /> Analytical Problem Solving
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[#222a3d] border border-white/[0.06] text-[#dae2fd] font-mono text-xs flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#c0c1ff]" /> Collaborative Spirit
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[#222a3d] border border-white/[0.06] text-[#dae2fd] font-mono text-xs flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#d0bcff]" /> NPTEL Certified Time Management
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[#222a3d] border border-white/[0.06] text-[#dae2fd] font-mono text-xs flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-[#4edea3]" /> Clear Communication
              </span>
            </div>
          </div>

          {/* Academic Snapshot & Focus Card (5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {/* University Badge Card */}
            <div className="bg-[#171f33] p-6 rounded-xl border border-white/[0.06] shadow-sm flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#4edea3] font-semibold tracking-wider">
                  EDUCATION CREDENTIAL
                </span>
                <span className="px-2.5 py-0.5 rounded bg-[#00a572]/20 text-[#4edea3] font-mono text-[11px] font-medium">
                  2023 - 2027
                </span>
              </div>
              <h3 className="font-display text-lg sm:text-xl text-[#dae2fd] font-semibold">
                Bachelor of Engineering (B.E. / B.Tech)
              </h3>
              <p className="text-xs sm:text-sm text-[#c7c4d7]">
                Women's Engineering College, Pondicherry Technological University (PTU)
              </p>
              <div className="mt-1 p-2.5 rounded-lg bg-[#131b2e] border border-white/[0.04] flex items-center gap-2">
                <Award className="w-4 h-4 text-[#8083ff] shrink-0" />
                <span className="font-mono text-xs text-[#dae2fd]">
                  Standing: 7th Semester Active Undergraduate
                </span>
              </div>
            </div>

            {/* Areas of Specialization & Interest */}
            <div className="bg-[#171f33] p-6 rounded-xl border border-white/[0.06] shadow-sm flex flex-col gap-3 flex-1">
              <h3 className="font-display text-lg text-[#dae2fd] font-semibold flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#4edea3]" />
                Key Areas of Interest
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-[#c7c4d7] pt-1">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8083ff] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#dae2fd]">Full-Stack Web Development:</strong>{' '}
                    End-to-end modern web applications with component ecosystems and scalable APIs.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4edea3] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#dae2fd]">AI Agents & Generative AI:</strong> LLM
                    integration, agentic automation, and conversational UX workflows.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#d0bcff] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#dae2fd]">Cloud Foundations & Deployment:</strong> Cloud
                    computing concepts, serverless architectures, and CI/CD pipelines.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
