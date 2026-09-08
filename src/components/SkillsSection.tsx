import React, { useState } from 'react';
import {
  Code,
  Database,
  Brain,
  Wrench,
  Award,
  Search,
  MessageCircle,
  Lightbulb,
  Users2,
  Timer,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterTabs = [
    { id: 'all', label: 'All Domains' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend & DB' },
    { id: 'ai', label: 'AI & Agents' },
    { id: 'tools', label: 'Tools' },
    { id: 'soft-skills', label: 'Professional' },
  ];

  const filteredCategories = SKILL_CATEGORIES.filter((category) => {
    if (selectedFilter !== 'all' && category.id !== selectedFilter) {
      return false;
    }
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchesTitle = category.title.toLowerCase().includes(q);
      const matchesSkill = category.skills.some((s) => s.toLowerCase().includes(q));
      return matchesTitle || matchesSkill;
    }
    return true;
  });

  return (
    <section id="skills" className="w-full py-16 sm:py-24 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        {/* Title Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-xs text-[#4edea3] font-medium tracking-wider">
              // 03. TECHNICAL PROFICIENCY
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#dae2fd] font-semibold tracking-tight">
              Skills & Competencies
            </h2>
            <div className="w-16 h-1 bg-[#4edea3] rounded-full mt-1"></div>
          </div>
          <p className="text-xs sm:text-sm text-[#c7c4d7] max-w-md">
            A balanced technical repertoire combining fundamental software engineering,
            cutting-edge AI utilities, and production development practices.
          </p>
        </div>

        {/* Interactive Search & Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#131b2e] p-3 rounded-xl border border-white/[0.06]">
          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                  selectedFilter === tab.id
                    ? 'bg-[#8083ff] text-[#0d0096] font-semibold shadow-sm'
                    : 'text-[#c7c4d7] hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-[#908fa0] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. React, AI)..."
              className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-[#0b1326] border border-white/[0.08] text-xs font-mono text-[#dae2fd] placeholder:text-[#908fa0] focus:outline-none focus:border-[#8083ff]"
            />
          </div>
        </div>

        {/* Skill Domain Cards Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const isProfessional = category.id === 'soft-skills';

            return (
              <div
                key={category.id}
                id={`skill-card-${category.id}`}
                className={`bg-[#171f33] p-6 rounded-xl border border-white/[0.06] shadow-sm hover:border-white/[0.15] hover:shadow-lg transition-all duration-300 flex flex-col justify-between gap-5 group ${
                  isProfessional ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        category.color === 'primary'
                          ? 'bg-[#8083ff]/20 text-[#c0c1ff]'
                          : category.color === 'secondary'
                          ? 'bg-[#00a572]/20 text-[#4edea3]'
                          : category.color === 'tertiary'
                          ? 'bg-[#a078ff]/20 text-[#d0bcff]'
                          : 'bg-[#31394d] text-[#c0c1ff]'
                      }`}
                    >
                      {category.id === 'frontend' && <Code className="w-5 h-5" />}
                      {category.id === 'backend' && <Database className="w-5 h-5" />}
                      {category.id === 'ai' && <Brain className="w-5 h-5" />}
                      {category.id === 'tools' && <Wrench className="w-5 h-5" />}
                      {category.id === 'soft-skills' && <Award className="w-5 h-5" />}
                    </div>
                    <span
                      className={`font-mono text-xs font-medium ${
                        category.color === 'primary'
                          ? 'text-[#c0c1ff]'
                          : category.color === 'secondary'
                          ? 'text-[#4edea3]'
                          : category.color === 'tertiary'
                          ? 'text-[#d0bcff]'
                          : 'text-[#c7c4d7]'
                      }`}
                    >
                      {category.domainNumber}
                    </span>
                  </div>

                  <h3 className="font-display text-lg sm:text-xl text-[#dae2fd] font-semibold">
                    {category.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#c7c4d7] mt-1">
                    {category.description}
                  </p>
                </div>

                {isProfessional ? (
                  /* Custom 4-block layout for Professional & Soft Skills */
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                    <div className="p-3 rounded-lg bg-[#222a3d] border border-white/[0.04] flex flex-col gap-1">
                      <MessageCircle className="w-4 h-4 text-[#4edea3]" />
                      <span className="font-mono text-xs font-semibold text-[#dae2fd]">
                        Communication
                      </span>
                      <span className="text-[11px] text-[#c7c4d7]">Clear articulation</span>
                    </div>
                    <div className="p-3 rounded-lg bg-[#222a3d] border border-white/[0.04] flex flex-col gap-1">
                      <Lightbulb className="w-4 h-4 text-[#c0c1ff]" />
                      <span className="font-mono text-xs font-semibold text-[#dae2fd]">
                        Problem Solving
                      </span>
                      <span className="text-[11px] text-[#c7c4d7]">Analytical rigor</span>
                    </div>
                    <div className="p-3 rounded-lg bg-[#222a3d] border border-white/[0.04] flex flex-col gap-1">
                      <Users2 className="w-4 h-4 text-[#d0bcff]" />
                      <span className="font-mono text-xs font-semibold text-[#dae2fd]">
                        Teamwork
                      </span>
                      <span className="text-[11px] text-[#c7c4d7]">Peer collaboration</span>
                    </div>
                    <div className="p-3 rounded-lg bg-[#222a3d] border border-white/[0.04] flex flex-col gap-1">
                      <Timer className="w-4 h-4 text-[#4edea3]" />
                      <span className="font-mono text-xs font-semibold text-[#dae2fd]">
                        Time Management
                      </span>
                      <span className="text-[11px] text-[#4edea3] font-mono">NPTEL Certified</span>
                    </div>
                  </div>
                ) : (
                  /* Standard Skill Badges */
                  <div className="flex flex-wrap gap-2 pt-1">
                    {category.skills.map((skill, idx) => {
                      const isHighlighted =
                        skill.includes('React') ||
                        skill.includes('Tailwind') ||
                        skill.includes('Python') ||
                        skill.includes('AI Agents') ||
                        skill.includes('Google');
                      return (
                        <span
                          key={idx}
                          className={`px-2.5 py-1 rounded bg-[#222a3d] border border-white/[0.04] font-mono text-xs transition-colors ${
                            isHighlighted
                              ? 'text-[#dae2fd] border-[#8083ff]/30 font-medium'
                              : 'text-[#c7c4d7]'
                          }`}
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
