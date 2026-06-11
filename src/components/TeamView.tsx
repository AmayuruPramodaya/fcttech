import { useState } from 'react';
import { TEAM_MEMBERS } from '../data';
import { Globe, ShieldCheck, Zap, ArrowRight, UserPlus, Star } from 'lucide-react';

interface TeamViewProps {
  setActiveTab: (tab: string) => void;
}

export default function TeamView({ setActiveTab }: TeamViewProps) {
  const [hoveredCode, setHoveredCode] = useState<string | null>(null);

  const visionaries = TEAM_MEMBERS.filter(m => m.category === 'visionary');
  const leads = TEAM_MEMBERS.filter(m => m.category === 'lead');
  const interns = TEAM_MEMBERS.filter(m => m.category === 'member');

  // Interactive pulse cities coordinates
  const globalPositions = [
    { city: 'Colombo (Kelaniya HQ)', x: '71%', y: '68%', desc: 'Primary Academic Lab & Project Command' },
    { city: 'London Hub', x: '48%', y: '35%', desc: 'Strategic EMEA Enterprise Integration' },
    { city: 'San Francisco Hub', x: '20%', y: '40%', desc: 'SaaS Architecture & Scale Mentorship' },
    { city: 'Tokyo Hub', x: '82%', y: '45%', desc: 'AI Model Optimization Advisors' }
  ];

  return (
    <div className="space-y-24 pb-20" id="team-view-container">
      {/* 1. Philosophy Hero Header */}
      <section className="relative bg-white pt-10 pb-6 lg:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
              OUR PHILOSOPHY
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-neutral-950 tracking-tight leading-none" id="team-hero-header">
              Building innovation<br />
              through collaboration.
            </h1>
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-3xl pt-2">
              Our team consists of talented undergraduate developers, designers, and innovators from the Faculty of Computing and Technology, University of Kelaniya, dedicated to delivering high-quality software solutions under expert academic guidance.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Visionary Guidance (Presidents / Directors) */}
      <section className="py-10 bg-white border-t border-gray-105" id="team-visionary-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-left space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">LEADERSHIP</span>
            <h2 className="text-3xl font-extrabold font-heading text-neutral-900 tracking-tight">
              Visionary Guidance
            </h2>
          </div>

          <div className="space-y-16" id="visionary-list">
            {visionaries.map((vis, idx) => (
              <div 
                key={vis.id}
                className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}
                id={`visionary-row-${vis.id}`}
              >
                {/* Portrait */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border border-gray-100 max-w-xs mx-auto">
                    <img 
                      src={vis.imageUrl} 
                      alt={vis.name}
                      className="w-full h-full object-cover grayscale-20 hover:grayscale-0 transition-all duration-350"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Narrative / Quote */}
                <div className="w-full md:w-2/3 space-y-4 text-center md:text-left">
                  <span className="inline-block px-3 py-1 bg-orange-50 text-brand-orange rounded-full text-[10px] font-bold uppercase tracking-wider">
                    Academic Advisor
                  </span>
                  <p className="text-base sm:text-lg text-gray-500 italic leading-relaxed font-heading max-w-2xl mx-auto md:mx-0">
                    "{vis.bio}"
                  </p>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 font-heading">
                      {vis.name}
                    </h3>
                    <p className="text-xs text-gray-400 font-medium">
                      {vis.role1 || vis.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FCT Technologies Leads */}
      <section className="py-20 bg-gray-50/50 border-y border-gray-100" id="team-leads-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left space-y-2 mb-12">
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">LEADERSHIP</span>
            <h2 className="text-2xl sm:text-3.5xl font-black font-heading text-neutral-900 tracking-tight">
              FCT Technologies Leads
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="leads-grid">
            {leads.map((lead) => (
              <div 
                key={lead.id}
                className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group text-center"
                id={`lead-card-${lead.id}`}
              >
                <div className="w-32 h-32 rounded-2xl overflow-hidden mx-auto mb-6 border border-gray-100 relative shadow-sm">
                  <img 
                    src={lead.imageUrl} 
                    alt={lead.name}
                    className="w-full h-full object-cover grayscale-10 group-hover:grayscale-0 transition-all duration-350"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 font-heading">
                  {lead.name}
                </h3>
                <p className="text-xs text-gray-400 font-medium mt-1">
                  {lead.role1 || lead.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Intern Gallery list */}
      <section className="py-10" id="team-interns-gallery-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
              LEADERSHIP
            </span>
            <h2 className="text-4xl sm:text-5xl font-black font-heading text-neutral-950 tracking-tight">
              Our Team
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8" id="interns-grid">
            {interns.map((intern) => (
              <div 
                key={intern.id}
                className="bg-white rounded-2xl p-4 border border-gray-100/60 shadow-sm text-center group hover:shadow-md transition-shadow"
                id={`intern-card-${intern.id}`}
              >
                <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-gray-50 border border-gray-100/60 relative">
                  <img 
                    src={intern.imageUrl} 
                    alt={intern.name}
                    className="w-full h-full object-cover transition-transform duration-350 group-hover:scale-101"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-sm font-bold text-gray-900 font-heading line-clamp-1">
                  {intern.name}
                </h3>
                <p className="text-[10px] text-gray-450 mt-1 uppercase tracking-wider font-semibold">
                  {intern.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. A Borderless Collective (Image 3 Map layout) */}
    

      {/* 6. Join section */}
      <section className="text-center py-10" id="team-recruiting-section">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4.5xl font-black font-heading text-neutral-950 tracking-tight">
            Build the future with us.
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
            We are always looking for precise minds to join our software solutions mission. Explore our open roles across design, engineering, and digital architecture.
          </p>
          <div className="pt-4">
            <button
              onClick={() => setActiveTab('contact')}
              className="px-8 py-3.5 bg-brand-dark hover:bg-neutral-900 border border-transparent hover:border-zinc-800 text-white font-bold text-xs sm:text-sm uppercase rounded-xl tracking-wider cursor-pointer"
              id="team-open-positions-btn"
            >
              View Open Positions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
