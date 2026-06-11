import { useState, useEffect } from 'react';
import { SERVICES } from '../data';
import { 
  Cpu, Code, GitBranch, Smartphone, Palette, FileCode, CheckCircle, 
  Cloud, Database, Network, CheckSquare, Settings, HelpCircle, Search, Sparkles,
  ShieldCheck, Pencil, Sliders, FileText, Layout, ArrowRight
} from 'lucide-react';

export default function ServicesView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState<typeof SERVICES[0] | null>(null);
  const [activeSubTab, setActiveSubTab] = useState('all');

  // Custom Event listener to transition between sub-tabs
  useEffect(() => {
    const handleSetSubTab = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setActiveSubTab(customEvent.detail);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    window.addEventListener('setServicesSubTab', handleSetSubTab);
    return () => {
      window.removeEventListener('setServicesSubTab', handleSetSubTab);
    };
  }, []);

  // Helper to change general tabs
  const handleCTARedirect = (tabName: string) => {
    window.dispatchEvent(new CustomEvent('setTab', { detail: tabName }));
  };

  // Map each service to unique distinct icons
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'ai': return <Cpu className="w-5 h-5 text-brand-orange animate-pulse" />;
      case 'web': return <Code className="w-5 h-5 text-brand-orange" />;
      case 'devops': return <GitBranch className="w-5 h-5 text-brand-orange" />;
      case 'mobile': return <Smartphone className="w-5 h-5 text-brand-orange" />;
      case 'uiux': return <Palette className="w-5 h-5 text-brand-orange" />;
      case 'custom': return <FileCode className="w-5 h-5 text-brand-orange" />;
      case 'cloud': return <Cloud className="w-5 h-5 text-brand-orange" />;
      case 'database': return <Database className="w-5 h-5 text-brand-orange" />;
      case 'api': return <Network className="w-5 h-5 text-brand-orange" />;
      case 'qa': return <CheckSquare className="w-5 h-5 text-brand-orange" />;
      case 'maintenance': return <Settings className="w-5 h-5 text-brand-orange" />;
      case 'consulting': return <HelpCircle className="w-5 h-5 text-brand-orange" />;
      default: return <Sparkles className="w-5 h-5 text-brand-orange" />;
    }
  };

  const filteredServices = SERVICES.filter(service => 
    service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const subTabs = [
    { id: 'all', label: 'All Services Overview' },
    { id: 'design-dev', label: 'Design & Development' },
    { id: 'infra-integration', label: 'Infrastructure & Integration' },
    { id: 'quality-ai', label: 'Quality, AI & Consulting' }
  ];

  return (
    <div className="space-y-12 pb-20" id="services-view-container">
      
      {/* 0. Elegant Sticky Sub-Navigation Bar */}
      <section className="bg-gray-50 border-b border-gray-150 py-4 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest">
              Service Landscapes:
            </span>
            <div className="flex flex-wrap gap-2 justify-center" id="services-sub-tabs">
              {subTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveSubTab(tab.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    activeSubTab === tab.id
                      ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/20'
                      : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200 hover:bg-gray-50'
                  }`}
                  id={`sub-tab-${tab.id}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RENDER ACTIVE TAB */}
      {activeSubTab === 'all' && (
        <div className="space-y-20">
          {/* A1. Default Services Hero Header */}
          <section className="relative bg-white pt-6 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-4 max-w-4xl">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                  PRECISION SOFTWARE
                </span>
                <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-neutral-950 tracking-tight leading-none" id="services-hero-title">
                  Software solutions<br />
                  built for scale.
                </h1>
                <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl pt-2">
                  We design and develop reliable, scalable digital systems that help organizations streamline operations and grow through smart technology.
                </p>
              </div>

              {/* Banner mockup from original */}
              <div className="mt-12 rounded-3xl overflow-hidden shadow-xl relative group max-h-[460px]" id="services-banner">
                <img 
                  src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=1200&h=500" 
                  alt="Cloud developer workstation screen"
                  className="w-full object-cover aspect-[21/9] min-h-[220px]"
                  referrerPolicy="no-referrer"
                />
                {/* Overlay description representing banner card */}
                <div className="absolute inset-0 bg-neutral-950/40 backdrop-blur-[1px] flex items-end p-6 sm:p-10">
                  <div className="bg-neutral-950/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 max-w-xl text-white">
                    <span className="text-xs font-mono text-brand-orange uppercase tracking-wider font-bold">
                      ENTERPRISE TIER
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold font-heading mt-1.5 mb-2 text-white">
                      Cloud Infrastructure Architecture
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      Resilient, distributed systems designed for 99.99% uptime and seamless global scaling. We handle the complexity, you drive the growth.
                    </p>
                    <div className="mt-4 flex items-center text-xs font-bold text-white uppercase tracking-widest gap-1">
                      <span>DEPLOYED VIA GCP</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* A2. Generic Interactive Search Panel */}
          <section className="bg-white" id="services-interactive-section">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 border-b border-gray-150">
                <div>
                  <h2 className="text-2xl font-bold font-heading text-neutral-950">
                    Explore Available Expertise ({filteredServices.length})
                  </h2>
                  <p className="text-xs text-gray-400 mt-1">
                    Hand-picked team groups for academic & professional project alignment.
                  </p>
                </div>
                
                {/* Search Input */}
                <div className="relative w-full sm:w-80">
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-orange text-gray-950"
                    id="services-search-input"
                  />
                  <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                </div>
              </div>

              {/* 12 Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10" id="services-grid">
                {filteredServices.map((service) => (
                  <div 
                    key={service.id}
                    onClick={() => setSelectedService(service)}
                    className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-orange-100 transition-all cursor-pointer group flex flex-col justify-between min-h-[190px]"
                    id={`service-grid-card-${service.id}`}
                  >
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center transition-transform group-hover:scale-102">
                        {getServiceIcon(service.id)}
                      </div>
                      <h3 className="text-base font-bold text-gray-900 font-heading group-hover:text-brand-orange transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <div className="mt-4 text-xs font-semibold text-gray-400 group-hover:text-brand-orange transition-colors flex items-center gap-1">
                      <span>More details</span>
                      <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                ))}
              </div>

              {filteredServices.length === 0 && (
                <div className="text-center py-16 text-gray-400" id="services-empty-state">
                  <Search className="w-12 h-12 mx-auto text-gray-300 mb-3" />
                  <p className="text-sm font-medium">No services match your current query.</p>
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="mt-2 text-xs font-bold text-brand-orange uppercase"
                  >
                    Reset Search Filters
                  </button>
                </div>
              )}
            </div>
          </section>
        </div>
      )}

      {/* B. DESIGN & DEVELOPMENT SERVICES PAGE (Screenshot 3) */}
      {activeSubTab === 'design-dev' && (
        <div className="space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header section */}
          <section className="bg-white pt-6">
            <div className="space-y-6 max-w-4xl">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                EXCELLENCE IN EXECUTION
              </span>
              <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-neutral-950 tracking-tight leading-none" id="desdev-title-display">
                Design & Development<br />Services
              </h1>
              <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-3xl">
                Transforming ideas into powerful digital experiences through high-performance engineering and human-centric clarity.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <button 
                  onClick={() => handleCTARedirect('contact')}
                  className="px-6 py-2.5 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-md shadow-brand-orange/15"
                >
                  START A PROJECT
                </button>
                <button 
                  onClick={() => setActiveSubTab('all')}
                  className="px-6 py-2.5 border border-neutral-950 hover:bg-gray-50 text-neutral-950 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                >
                  VIEW PORTFOLIO
                </button>
              </div>
            </div>
          </section>

          {/* Mid title section */}
          <section className="bg-white pt-6">
            <div className="border-t border-gray-100 pt-10">
              <h2 className="text-3xl font-extrabold font-heading text-neutral-950">
                Core Capabilities
              </h2>
              <div className="w-16 h-1.5 bg-brand-orange mt-2.5" />
            </div>

            {/* capabilities lists exactly matching screen 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
              
              {/* Card 1: UI/UX Design */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow min-h-[290px]">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                    <Pencil className="w-5 h-5 text-brand-orange" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-950 font-heading">
                    UI/UX Design
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    We craft visually appealing and user-centered designs that deliver seamless digital experiences. Our process prioritizes cognitive ergonomics and conversion-focused architecture.
                  </p>
                </div>
                <button 
                  onClick={() => handleCTARedirect('contact')}
                  className="text-xs font-bold text-gray-500 hover:text-brand-orange cursor-pointer transition-colors pt-4 text-left uppercase tracking-wider"
                >
                  EXPLORE METHODOLOGY →
                </button>
              </div>

              {/* Card 2: Web Development */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow min-h-[290px]">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                    <FileCode className="w-5 h-5 text-brand-orange" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-950 font-heading">
                    Web Development
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    We design and develop responsive websites and powerful web applications with modern technologies, ensuring high performance and SEO optimization from day one.
                  </p>
                </div>
                <button 
                  onClick={() => handleCTARedirect('contact')}
                  className="text-xs font-bold text-gray-500 hover:text-brand-orange cursor-pointer transition-colors pt-4 text-left uppercase tracking-wider"
                >
                  LEARN MORE →
                </button>
              </div>

              {/* Card 3: Mobile App Development */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow min-h-[290px]">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-brand-orange" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-950 font-heading">
                    Mobile App Development
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    We create high-performance Android and iOS applications with intuitive and user-friendly interfaces, leveraging cross-platform and native frameworks.
                  </p>
                </div>
                <button 
                  onClick={() => handleCTARedirect('contact')}
                  className="text-xs font-bold text-gray-500 hover:text-brand-orange cursor-pointer transition-colors pt-4 text-left uppercase tracking-wider"
                >
                  LEARN MORE →
                </button>
              </div>

              {/* Card 4: Custom Software Development */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow min-h-[290px]">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                    <Layout className="w-5 h-5 text-brand-orange" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-950 font-heading">
                    Custom Software Dev
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    We build tailored software solutions that align with your unique business goals and operational requirements, focusing on scalability and robust security protocols.
                  </p>
                </div>
                <button 
                  onClick={() => handleCTARedirect('contact')}
                  className="text-xs font-bold text-gray-500 hover:text-brand-orange cursor-pointer transition-colors pt-4 text-left uppercase tracking-wider"
                >
                  BOOK A CONSULTATION →
                </button>
              </div>

            </div>
          </section>

          {/* Bottom Dark Block exact matching design in Screen 3 */}
          <section className="bg-zinc-950 rounded-[2.5rem] relative overflow-hidden py-16 px-8 sm:px-12 lg:py-24 border border-zinc-850 shadow-2xl">
            <div className="absolute top-0 right-1/2 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl opacity-50" />
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
              
              <div className="md:col-span-7 space-y-6">
                <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
                  Ready to engineer your digital future?
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed max-w-lg">
                  Our teams combine tactical precision with strategic foresight to deliver products that don't just work—they scale.
                </p>
                <button 
                  onClick={() => handleCTARedirect('contact')}
                  className="px-6 py-3 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 rounded-xl transition-all shadow-md shadow-brand-orange/10 cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-white" />
                  <span>REQUEST A TECH SPEC</span>
                </button>
              </div>

              {/* Graphic container with futuristic graphic */}
              <div className="md:col-span-5 rounded-2xl overflow-hidden shadow-xl border border-white/5 bg-zinc-900">
                <img 
                  src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=700&h=450" 
                  alt="Futuristic engineering lab screen"
                  className="w-full object-cover aspect-[4/3] opacity-90 hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
              </div>

            </div>
          </section>

        </div>
      )}

      {/* C. INFRASTRUCTURE & INTEGRATION SERVICES PAGE (Screenshot 2) */}
      {activeSubTab === 'infra-integration' && (
        <div className="space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header section with orange vertical indicator line on left */}
          <section className="bg-white pt-6">
            <div className="relative pl-6 border-l-4 border-brand-orange py-2 space-y-4 max-w-4xl">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                CATEGORY OVERVIEW
              </span>
              <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-neutral-950 tracking-tight leading-none" id="infraint-title-display">
                Infrastructure & Integration<br />Services
              </h1>
              <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl">
                Building the backbone of modern enterprise technology.
              </p>
              
              <div className="pt-2">
                <button 
                  onClick={() => handleCTARedirect('contact')}
                  className="px-6 py-3 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold uppercase tracking-wider shadow-md cursor-pointer transition-all"
                >
                  EXPLORE SOLUTIONS
                </button>
              </div>
            </div>
          </section>

          {/* Core competencies with centering style */}
          <section className="bg-white">
            <div className="text-center py-6">
              <h2 className="text-3xl font-extrabold font-heading text-neutral-950 tracking-tight block">
                Core Competencies
              </h2>
              <div className="w-16 h-1 bg-brand-orange mx-auto mt-3" />
            </div>

            {/* Asymmetrical grid containing layout exactly representing Screenshot 2 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-10" id="infra-bento-grid">
              
              {/* Row 1 Left Card: Cloud Solutions (Wide with image inside card) */}
              <div className="md:col-span-8 bg-white border border-gray-100 p-8 rounded-3xl shadow-sm flex flex-col md:flex-row justify-between items-center gap-6 group hover:border-orange-50 transition-colors">
                <div className="space-y-4 max-w-lg">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                    <Cloud className="w-5 h-5 text-brand-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-950 font-heading">
                    Cloud Solutions
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    We implement secure, scalable, and reliable cloud infrastructure to support business growth. From multi-cloud strategies to seamless migrations, we ensure your operations are future-proofed against rising demands.
                  </p>
                  <button 
                    onClick={() => handleCTARedirect('contact')}
                    className="text-xs font-bold text-gray-400 group-hover:text-brand-orange transition-colors uppercase tracking-wider cursor-pointer"
                  >
                    View Technical Specs &rarr;
                  </button>
                </div>
                {/* Cloud graphic inside card */}
                <div className="w-full md:w-56 h-36 rounded-2xl overflow-hidden shadow-inner border border-gray-100 flex-shrink-0 bg-neutral-950">
                  <img 
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=350&h=260"
                    alt="Datacenter nodes visualization"
                    className="w-full h-full object-cover opacity-80"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Row 1 Right Card: DevOps Services (Thin/tall, checkbox list) */}
              <div className="md:col-span-4 bg-white border border-gray-100 p-8 rounded-3xl shadow-sm flex flex-col justify-between min-h-[290px] hover:border-orange-50 transition-colors">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                    <Sliders className="w-5 h-5 text-brand-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-950 font-heading">
                    DevOps Services
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    We automate deployment pipelines and optimize infrastructure for faster and more efficient delivery.
                  </p>
                </div>
                
                <div className="space-y-2 pt-2 text-xs font-semibold text-gray-600 font-mono">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-orange" />
                    <span>CI/CD AUTOMATION</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-orange" />
                    <span>KUBERNETES ORCHESTRATION</span>
                  </div>
                </div>
              </div>

              {/* Row 2 Left Card: Database Management (Dark themed card) */}
              <div className="md:col-span-5 bg-zinc-900 border border-zinc-800 p-8 rounded-3xl text-white shadow-xl flex flex-col justify-between min-h-[300px] relative overflow-hidden group">
                <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-brand-orange/5 rounded-full blur-2xl" />
                <div className="space-y-4 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Database className="w-5 h-5 text-brand-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-heading">
                    Database Management
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    We design and manage secure, optimized databases for efficient data storage and access. High availability and zero-loss redundancy protocols are standard across all implementations.
                  </p>
                </div>
                <button 
                  onClick={() => handleCTARedirect('contact')}
                  className="px-5 py-2.5 bg-transparent hover:bg-brand-orange text-brand-orange hover:text-white border border-brand-orange text-xs font-bold rounded-lg transition-all duration-200 mt-6 self-start tracking-wider uppercase cursor-pointer"
                >
                  Case Study
                </button>
              </div>

              {/* Row 2 Right Card: API Development & Integration (White card, inline parameters) */}
              <div className="md:col-span-7 bg-white border border-gray-100 p-8 rounded-3xl shadow-sm flex flex-col justify-between min-h-[300px] relative overflow-hidden group hover:border-orange-50 transition-colors">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                    <Network className="w-5 h-5 text-brand-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-950 font-heading">
                    API Development & Integration
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-xl">
                    We build custom APIs and integrate third-party services to connect and streamline systems, ensuring seamless data flow between legacy software and modern applications.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4 text-xs font-bold text-neutral-950">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                    <span>RESTful Architecture</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                    <span>GraphQL Support</span>
                  </div>
                </div>

                {/* Mesh dots decorative absolute element */}
                <div className="absolute bottom-4 right-4 opacity-10 pointer-events-none">
                  <svg className="w-24 h-24 text-gray-900" fill="currentColor" viewBox="0 0 100 100">
                    <circle cx="20" cy="20" r="3" />
                    <circle cx="50" cy="20" r="3" />
                    <circle cx="80" cy="20" r="3" />
                    <circle cx="20" cy="50" r="3" />
                    <circle cx="50" cy="50" r="3" />
                    <circle cx="80" cy="50" r="3" />
                    <circle cx="20" cy="80" r="3" />
                    <circle cx="50" cy="80" r="3" />
                    <circle cx="80" cy="80" r="3" />
                    <line x1="20" y1="20" x2="50" y2="20" stroke="currentColor" strokeWidth="1" />
                    <line x1="50" y1="20" x2="50" y2="50" stroke="currentColor" strokeWidth="1" />
                    <line x1="50" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="1" />
                    <line x1="20" y1="50" x2="20" y2="80" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>
              </div>

            </div>
          </section>

          {/* Underneath CTA matching Screenshot 2 */}
          <section className="bg-gray-50 rounded-3xl p-10 sm:p-16 text-center space-y-6 max-w-7xl mx-auto border border-gray-150">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-neutral-950 tracking-tight">
              Ready to optimize your tech stack?
            </h2>
            <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
              FCT Technologies provides the technical rigor required by high-growth sectors. Our engineering team acts as an extension of your CTO's office.
            </p>
            <div className="pt-2">
              <button 
                onClick={() => handleCTARedirect('contact')}
                className="px-8 py-3.5 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-extrabold uppercase tracking-widest transition-colors duration-200 cursor-pointer shadow-lg shadow-brand-orange/10"
              >
                TALK TO AN ARCHITECT
              </button>
            </div>
          </section>

        </div>
      )}

      {/* D. QUALITY, AI & CONSULTING SERVICES PAGE (Screenshot 1) */}
      {activeSubTab === 'quality-ai' && (
        <div className="space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header section */}
          <section className="bg-white pt-6">
            <div className="space-y-6 max-w-4xl">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                EXCELLENCE IN ENGINEERING
              </span>
              <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-neutral-950 tracking-tight leading-none" id="qualai-title-display">
                Quality, AI &<br />Consulting Services
              </h1>
              <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl">
                Ensuring excellence, innovation, and strategic growth through high-performance technical consultation and intelligent automation.
              </p>
              
              <div className="pt-2">
                <button 
                  onClick={() => handleCTARedirect('contact')}
                  className="px-6 py-3 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer"
                >
                  Explore Solutions
                </button>
              </div>
            </div>
          </section>

          {/* Strategic technical capabilities header & slider indicators matching image 3 */}
          <section className="bg-white pt-4">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-6 border-b border-gray-150">
              <div className="space-y-3 max-w-2xl">
                <h2 className="text-3xl font-extrabold font-heading text-neutral-950">
                  Strategic Technical Capabilities
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  We bridge the gap between complex engineering challenges and scalable business outcomes with a focus on reliability and future-proof design.
                </p>
              </div>
              {/* slider indicators exactly matching Screenshot 1 */}
              <div className="flex items-center space-x-2 py-2" id="slider-pills-indicator">
                <span className="w-8 h-1 bg-brand-orange rounded-full" />
                <span className="w-2 h-1 bg-gray-200 rounded-full" />
                <span className="w-2 h-1 bg-gray-200 rounded-full" />
              </div>
            </div>

            {/* Custom styled list matching Screenshot 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
              
              {/* QA & Testing */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow min-h-[290px]">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-brand-orange" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-950 font-heading">
                    Quality Assurance & Testing
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    We perform comprehensive testing to ensure software quality, performance, and security across all enterprise touchpoints.
                  </p>
                </div>
                <button 
                  onClick={() => handleCTARedirect('contact')}
                  className="text-xs font-bold text-brand-orange hover:text-brand-orange-hover mt-4 text-left transition-colors cursor-pointer"
                >
                  Learn More &rarr;
                </button>
              </div>

              {/* Maintenance & Support */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow min-h-[290px]">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                    <Settings className="w-5 h-5 text-brand-orange" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-950 font-heading">
                    Maintenance & Support
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    We provide ongoing updates, monitoring, and technical support to keep your systems running smoothly and securely 24/7.
                  </p>
                </div>
                <button 
                  onClick={() => handleCTARedirect('contact')}
                  className="text-xs font-bold text-brand-orange hover:text-brand-orange-hover mt-4 text-left transition-colors cursor-pointer"
                >
                  Learn More &rarr;
                </button>
              </div>

              {/* AI Solutions */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow min-h-[290px]">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-brand-orange" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-950 font-heading">
                    AI Solutions
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    We develop intelligent solutions using artificial intelligence and machine learning technologies to drive operational efficiency.
                  </p>
                </div>
                <button 
                  onClick={() => handleCTARedirect('contact')}
                  className="text-xs font-bold text-brand-orange hover:text-brand-orange-hover mt-4 text-left transition-colors cursor-pointer"
                >
                  Learn More &rarr;
                </button>
              </div>

              {/* IT Consulting */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow min-h-[290px]">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                    <HelpCircle className="w-5 h-5 text-brand-orange" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-950 font-heading">
                    IT Consulting
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    We offer expert guidance to help organizations adopt the right technologies and digital transformation strategies for growth.
                  </p>
                </div>
                <button 
                  onClick={() => handleCTARedirect('contact')}
                  className="text-xs font-bold text-brand-orange hover:text-brand-orange-hover mt-4 text-left transition-colors cursor-pointer"
                >
                  Learn More &rarr;
                </button>
              </div>

            </div>
          </section>

          {/* Underneath band - Reliability at Scale (Dark) */}
          <section className="bg-zinc-950 text-white rounded-[2.5rem] relative overflow-hidden py-16 px-8 sm:px-12 lg:py-20 border border-zinc-850 shadow-2xl">
            <div className="absolute top-0 right-1/2 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl opacity-50" />
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
              
              <div className="md:col-span-5 space-y-6 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
                    Reliability at Scale
                  </h2>
                  <p className="text-sm text-zinc-350 leading-relaxed">
                    Our methodology is rooted in rigorous engineering standards and a deep understanding of high-growth technical ecosystems. We don't just solve problems; we architect long-term resilience.
                  </p>
                </div>

                {/* Left orange quote block badge projecting from layout */}
                <div className="bg-brand-orange p-6 text-white rounded-2xl border border-orange-400/20 max-w-sm mt-8 transition-transform hover:scale-101">
                  <p className="text-sm italic font-medium leading-relaxed">
                    "Expertise that transforms operations."
                  </p>
                  <p className="text-xs font-bold tracking-widest uppercase text-zinc-200 mt-2">
                    — GLOBAL CTO, FINTECH SECURE
                  </p>
                </div>
              </div>

              {/* High precision robotics visualization image */}
              <div className="md:col-span-7 rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-zinc-900">
                <img 
                  src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80&w=800&h=450" 
                  alt="Precision microchip assembly manufacturing robotic arm"
                  className="w-full object-cover aspect-[16/9]"
                  referrerPolicy="no-referrer"
                />
              </div>

            </div>
          </section>

          {/* Bottom Action consultation card gray list */}
          <section className="bg-gray-50 border border-gray-150 rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 max-w-7xl mx-auto">
            <div className="space-y-2 max-w-2xl">
              <h3 className="text-2xl font-extrabold font-heading text-neutral-950">
                Ready to optimize your technical strategy?
              </h3>
              <p className="text-sm text-gray-500">
                Connect with our consultants to build a roadmap for excellence and sustainable innovation.
              </p>
            </div>
            
            <button 
              onClick={() => handleCTARedirect('contact')}
              className="px-6 py-3.5 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-lg shadow-brand-orange/10 flex-shrink-0"
            >
              Schedule Consultation
            </button>
          </section>

        </div>
      )}

      {/* DETAIL OVERLAY DRAWER FOR ALL SERVICES IN SEARCH FILTER */}
      {selectedService && (
        <div className="fixed inset-0 z-50 overflow-y-auto" id="service-overlay-drawer">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-neutral-950/80 transition-opacity" onClick={() => setSelectedService(null)} />
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-3xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full border border-gray-100">
              <div className="bg-brand-orange text-white p-6 relative">
                <button 
                  onClick={() => setSelectedService(null)}
                  className="absolute right-4 top-4 text-white hover:text-white/80 text-xl font-bold font-mono cursor-pointer"
                >
                  ×
                </button>
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-white mb-2">
                  {getServiceIcon(selectedService.id)}
                </div>
                <h3 className="text-xl font-black font-heading text-white">{selectedService.title}</h3>
                <span className="text-white/80 text-xs text-[#fafafa]">Faculty of Computing and Technology Software Core</span>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-sm text-gray-650 leading-relaxed">
                  Our custom-tailored <strong className="text-gray-950">{selectedService.title}</strong> combines academic rigor with industry-standard patterns to build highly secure systems.
                </p>
                <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 space-y-2">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Scope of Capability</span>
                  <ul className="text-xs text-gray-500 space-y-1.5 list-disc pl-4 leading-relaxed">
                    <li>Fully documented microservices API schemas</li>
                    <li>Extreme safety verification by Faculty Leads</li>
                    <li>Comprehensive responsive visual optimization templates</li>
                    <li>Seamless CI/CD pipelines (Docker / Cloud Run)</li>
                  </ul>
                </div>
                <button
                  onClick={() => {
                    setSelectedService(null);
                    handleCTARedirect('contact');
                  }}
                  className="w-full py-2.5 bg-brand-dark hover:bg-neutral-900 text-white font-bold rounded-xl text-xs sm:text-sm tracking-wide transition-colors uppercase cursor-pointer"
                >
                  Inquire For This Service
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
