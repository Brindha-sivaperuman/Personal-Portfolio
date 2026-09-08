import React, { useState } from 'react';
import { Compass, CloudSun, Code, ArrowUpRight, Check } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectDemoModal } from './ProjectDemoModal';

export const ProjectsSection: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="w-full bg-[#060e20] py-16 sm:py-24 border-t border-b border-white/[0.04]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-xs text-[#4edea3] font-medium tracking-wider">
              // 04. PRODUCTION WORK
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#dae2fd] font-semibold tracking-tight">
              Projects Showcase
            </h2>
            <div className="w-16 h-1 bg-[#4edea3] rounded-full mt-1"></div>
          </div>
          <p className="text-xs sm:text-sm text-[#c7c4d7] max-w-md">
            Featured engineering projects with responsive user interfaces, API communication, and
            production-minded code structure.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => {
            const isTourism = project.id === 'tourism-platform';

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="bg-[#171f33] rounded-xl overflow-hidden border border-white/[0.06] shadow-lg flex flex-col justify-between group hover:border-white/[0.14] hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex flex-col">
                  {/* Simulated Browser Header / Mockup Preview */}
                  <div className="h-48 sm:h-56 bg-[#222a3d] relative overflow-hidden flex flex-col justify-between p-4 sm:p-5">
                    {/* Browser Address Bar */}
                    <div className="flex items-center justify-between z-10">
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-[#ffb4ab]/80"></span>
                        <span className="w-3 h-3 rounded-full bg-[#4edea3]/80"></span>
                        <span className="w-3 h-3 rounded-full bg-[#8083ff]/80"></span>
                      </div>
                      <span className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-[#0b1326]/80 text-[#c7c4d7] border border-white/[0.04]">
                        {project.previewUrlDisplay}
                      </span>
                    </div>

                    {/* Graphic & Illustration Preview Card */}
                    <div className="relative z-10 flex items-center justify-between mt-auto">
                      <div className="p-3 rounded-lg bg-[#171f33]/90 backdrop-blur border border-white/[0.06]">
                        <div className="font-mono text-xs font-semibold text-[#4edea3]">
                          {project.previewBadge.title}
                        </div>
                        <div className="text-[12px] text-[#c7c4d7]">
                          {project.previewBadge.subtitle}
                        </div>
                      </div>

                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          isTourism
                            ? 'bg-[#8083ff]/20 text-[#c0c1ff]'
                            : 'bg-[#00a572]/20 text-[#4edea3]'
                        }`}
                      >
                        {isTourism ? (
                          <Compass className="w-6 h-6" />
                        ) : (
                          <CloudSun className="w-6 h-6" />
                        )}
                      </div>
                    </div>

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171f33] via-transparent to-transparent opacity-90"></div>
                  </div>

                  {/* Content Details */}
                  <div className="p-6 flex flex-col gap-4">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span
                          className={`font-mono text-xs font-medium tracking-wide ${
                            isTourism ? 'text-[#c0c1ff]' : 'text-[#4edea3]'
                          }`}
                        >
                          {project.projectNumber}
                        </span>
                        <h3 className="font-display text-lg sm:text-xl text-[#dae2fd] font-semibold mt-0.5">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#c7c4d7] leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Capabilities */}
                    <div className="space-y-1.5 pt-1">
                      <div className="font-mono text-[11px] text-[#dae2fd] font-semibold uppercase tracking-wider">
                        KEY CAPABILITIES:
                      </div>
                      <ul className="space-y-1 text-xs text-[#c7c4d7]">
                        {project.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <span
                              className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                                isTourism ? 'bg-[#4edea3]' : 'bg-[#c0c1ff]'
                              }`}
                            ></span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className={`px-2.5 py-1 rounded bg-[#222a3d] font-mono text-[11px] ${
                            tech.highlight === 'primary'
                              ? 'text-[#c0c1ff] font-medium border border-[#8083ff]/30'
                              : tech.highlight === 'secondary'
                              ? 'text-[#4edea3] font-medium border border-[#00a572]/30'
                              : 'text-[#c7c4d7] border border-white/[0.04]'
                          }`}
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="px-6 py-4 bg-[#131b2e] border-t border-white/[0.06] flex items-center justify-between gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#c7c4d7] hover:text-[#dae2fd] font-mono text-xs transition-colors"
                  >
                    <Code className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg font-mono text-xs transition-all duration-200 cursor-pointer shadow-sm ${
                      isTourism
                        ? 'bg-[#222a3d] text-[#dae2fd] hover:bg-[#8083ff] hover:text-[#0d0096]'
                        : 'bg-[#222a3d] text-[#dae2fd] hover:bg-[#4edea3] hover:text-[#003824]'
                    }`}
                  >
                    <span>{isTourism ? 'Live Preview' : 'Live Demo'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Project Preview Modal */}
      {activeModalProject && (
        <ProjectDemoModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
};
