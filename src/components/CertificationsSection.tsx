import React, { useState } from 'react';
import {
  ShieldCheck,
  Bot,
  Cloud,
  Sparkles,
  GraduationCap,
  CheckCircle2,
  Trophy,
  ExternalLink,
  X,
  Award,
} from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Certification } from '../types';

export const CertificationsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="w-full py-16 sm:py-24 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        {/* Section Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-xs text-[#4edea3] font-medium tracking-wider">
              // 05. VALIDATION & MILESTONES
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#dae2fd] font-semibold tracking-tight">
              Achievements & Certifications
            </h2>
            <div className="w-16 h-1 bg-[#4edea3] rounded-full mt-1"></div>
          </div>

          <div className="px-3.5 py-1.5 rounded-full bg-[#171f33] border border-white/[0.08] font-mono text-xs text-[#c0c1ff] flex items-center gap-2 self-start md:self-auto">
            <ShieldCheck className="w-4 h-4 text-[#8083ff]" />
            <span>Verified Professional Credentials</span>
          </div>
        </div>

        {/* Certifications Grid (4 Key Certs) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert) => {
            return (
              <div
                key={cert.id}
                id={`cert-card-${cert.id}`}
                onClick={() => setSelectedCert(cert)}
                className="p-6 rounded-xl bg-[#171f33] border border-white/[0.06] shadow-sm flex flex-col justify-between gap-4 hover:-translate-y-1 hover:border-white/[0.14] transition-all duration-300 cursor-pointer group"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span
                      className={`px-2.5 py-0.5 rounded font-mono text-[11px] font-semibold ${
                        cert.color === 'primary'
                          ? 'bg-[#8083ff]/20 text-[#c0c1ff]'
                          : cert.color === 'secondary'
                          ? 'bg-[#00a572]/20 text-[#4edea3]'
                          : cert.color === 'tertiary'
                          ? 'bg-[#a078ff]/20 text-[#d0bcff]'
                          : 'bg-[#4edea3]/20 text-[#4edea3]'
                      }`}
                    >
                      {cert.issuerBadge}
                    </span>

                    <div className="text-[#c0c1ff] group-hover:scale-110 transition-transform">
                      {cert.icon === 'Bot' && <Bot className="w-5 h-5 text-[#8083ff]" />}
                      {cert.icon === 'Cloud' && <Cloud className="w-5 h-5 text-[#4edea3]" />}
                      {cert.icon === 'Sparkles' && <Sparkles className="w-5 h-5 text-[#d0bcff]" />}
                      {cert.icon === 'GraduationCap' && (
                        <GraduationCap className="w-5 h-5 text-[#4edea3]" />
                      )}
                    </div>
                  </div>

                  <h3 className="font-display text-base sm:text-lg text-[#dae2fd] font-semibold group-hover:text-white transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-[#c7c4d7] leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between text-[#c7c4d7] font-mono text-[11px] border-t border-white/[0.04]">
                  <span>Issuing: {cert.issuer}</span>
                  <span className="text-[#4edea3] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Academic Milestones & College Coursework Card */}
        <div className="p-6 sm:p-8 rounded-xl bg-[#171f33] border border-white/[0.06] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#4edea3]/10 border border-[#4edea3]/20 flex items-center justify-center text-[#4edea3] shrink-0 mt-0.5">
              <Trophy className="w-6 h-6" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-display text-lg text-[#dae2fd] font-semibold">
                Academic Excellence & Technical Dedication
              </h3>
              <p className="text-xs sm:text-sm text-[#c7c4d7] max-w-2xl leading-relaxed">
                Consistently strong scholastic performance at Women's Engineering College, maintaining
                steady academic merit standing under Pondicherry Technological University (PTU)
                curriculum with active focus on software design, algorithms, and practical development.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 shrink-0">
            <span className="px-3 py-1.5 rounded-lg bg-[#222a3d] border border-white/[0.06] text-[#dae2fd] font-mono text-xs">
              PTU Affiliated
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#222a3d] border border-white/[0.06] text-[#dae2fd] font-mono text-xs">
              Computer Science & Engg
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#222a3d] border border-[#4edea3]/30 text-[#4edea3] font-mono text-xs">
              7th Sem Merit
            </span>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="w-full max-w-md bg-[#171f33] rounded-2xl border border-white/[0.1] p-6 shadow-2xl relative flex flex-col gap-4 text-[#dae2fd]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-[#908fa0] hover:text-white hover:bg-white/[0.08]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#8083ff]/20 text-[#c0c1ff] flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-xs text-[#4edea3] font-semibold">
                  {selectedCert.issuer} Credential
                </span>
                <h4 className="font-display font-semibold text-lg text-white">
                  {selectedCert.title}
                </h4>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#c7c4d7] leading-relaxed">
              {selectedCert.description}
            </p>

            <div className="p-3 rounded-lg bg-[#131b2e] border border-white/[0.06] space-y-2 font-mono text-xs">
              <div className="flex justify-between">
                <span className="text-[#908fa0]">Candidate:</span>
                <span className="text-white font-semibold">Brindha S</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#908fa0]">Issuing Body:</span>
                <span className="text-[#c0c1ff]">{selectedCert.issuer}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#908fa0]">Credential ID:</span>
                <span className="text-[#4edea3]">{selectedCert.credentialId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#908fa0]">Status:</span>
                <span className="text-[#4edea3] flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Validated
                </span>
              </div>
            </div>

            <button
              onClick={() => setSelectedCert(null)}
              className="w-full py-2.5 rounded-lg bg-[#8083ff] text-[#0d0096] font-mono text-xs font-semibold hover:bg-[#c0c1ff] transition-colors"
            >
              Close Verification
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
