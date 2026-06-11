import { useState, FormEvent, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Layout, Cpu, Terminal, ArrowUpRight, Calendar, Sparkles, CheckCircle, Clock } from 'lucide-react';
import { PROJECTS, GENERAL_SERVICES, TESTIMONIALS, LAB_IMAGES } from '../data';

interface HomeViewProps {
  setActiveTab: (tab: string) => void;
}

export default function HomeView({ setActiveTab }: HomeViewProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Mouse wheel scrolling for carousel
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleWheel = (e: WheelEvent) => {
      if (carousel.contains(e.target as Node)) {
        e.preventDefault();
        const scrollAmount = e.deltaY > 0 ? 300 : -300;
        carousel.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
        });
      }
    };

    carousel.addEventListener('wheel', handleWheel, { passive: false });
    return () => carousel.removeEventListener('wheel', handleWheel);
  }, []);

  // Appointment Scheduler modal state
  const [showScheduler, setShowScheduler] = useState(false);
  const [scheduled, setScheduled] = useState(false);
  const [bookingName, setBookingName] = useState('');
  const [bookingEmail, setBookingEmail] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');

  const servicesIcons = [
    <Layout className="w-6 h-6 text-brand-orange" />,
    <Cpu className="w-6 h-6 text-brand-orange" />,
    <Terminal className="w-6 h-6 text-brand-orange" />
  ];

  const handleBookMeeting = (e: FormEvent) => {
    e.preventDefault();
    if (bookingName && bookingEmail && bookingDate && bookingTime) {
      setScheduled(true);
      setTimeout(() => {
        setScheduled(false);
        setShowScheduler(false);
        setBookingName('');
        setBookingEmail('');
        setBookingDate('');
        setBookingTime('');
      }, 3500);
    }
  };

  return (
    <div className="space-y-24 pb-20 overflow-x-hidden" id="home-view-container">
      {/* 1. Hero Section */}
      <section className="relative bg-white pt-10 pb-16 lg:pt-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-bold uppercase tracking-widest text-brand-orange"
              id="hero-pretitle"
            >
              PREMIUM SOFTWARE SOLUTIONS
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading text-neutral-950 tracking-tight leading-none"
              id="hero-title"
            >
              Tomorrow's tech leaders.<br />
              Today's solutions.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto"
              id="hero-desc"
            >
              FCT Technologies is where ambition meets expertise — a powerhouse of driven undergraduates crafting robust digital solutions under world-class academic leadership, for clients who expect nothing less than excellence.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
              id="hero-actions"
            >
              <button
                onClick={() => setActiveTab('services')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold text-sm tracking-wide transition-all duration-200 shadow-lg shadow-brand-orange/20 flex items-center justify-center space-x-2 cursor-pointer group"
                id="hero-explore-btn"
              >
                <span>Explore Capabilities</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => setActiveTab('team')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-gray-800 font-semibold text-sm tracking-wide transition-colors cursor-pointer"
                id="hero-portfolio-btn"
              >
                Our Portfolio
              </button>
            </motion.div>
          </div>
        </div>

        {/* Large Hero Card Image - Full Width */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 overflow-hidden shadow-2xl relative group aspect-video"
          id="hero-banner-image-container"
        >
          <iframe
            src="https://www.youtube.com/embed/yRPTQTlafxw?autoplay=1&mute=1&loop=1&playlist=yRPTQTlafxw&modestbranding=1"
            title="FCT Technologies Lab & Design Meeting"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            id="hero-banner-youtube"
          />
        </motion.div>
      </section>

      {/* 2. Core Capabilities section */}
      <section className="bg-gray-50/50 py-20 border-y border-gray-100" id="home-capabilities-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            <div className="lg:col-span-5 space-y-4">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-orange" id="caps-pretitle">
                CORE CAPABILITIES
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-neutral-950 tracking-tight" id="caps-title">
                Capability<br className="hidden sm:inline" /> without compromise.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-8" id="caps-text-col">
              <p className="text-base text-gray-500 leading-relaxed">
                From scalable backend systems to seamless user interfaces, our team engineers end-to-end software solutions with meticulous attention to detail — combining academic rigor with hands-on technical expertise to exceed every benchmark.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="capabilities-grid">
            {GENERAL_SERVICES.map((serv, index) => (
              <div 
                key={serv.id}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group relative flex flex-col justify-between min-h-[280px]"
                id={`cap-card-${serv.id}`}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center transition-transform duration-350 group-hover:scale-105">
                    {servicesIcons[index]}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 font-heading">
                    {serv.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {serv.description}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setActiveTab('services');
                    setTimeout(() => {
                      window.dispatchEvent(new CustomEvent('setServicesSubTab', { detail: serv.id }));
                    }, 50);
                  }}
                  className="mt-6 text-xs font-bold tracking-widest text-brand-dark hover:text-brand-orange transition-colors flex items-center space-x-1 uppercase group/btn cursor-pointer"
                  id={`learn-more-${serv.id}`}
                >
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Case Studies (Our Projects) */}
      <section className="py-10" id="home-projects-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-orange" id="projects-pretitle">
              CASE STUDIES
            </p>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-neutral-950 tracking-tight" id="projects-title">
              Our Projects
            </h2>
          </div>

          {/* Grid Layout inspired strictly by mockup */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8" id="projects-grid">
            {/* Project 1 - Research Grant Management System (Large) */}
            <div 
              className="md:col-span-8 bg-zinc-100 rounded-3xl overflow-hidden border border-gray-100 shadow-sm flex flex-col h-full group"
              id="project-card-rgms-wrapper"
            >
              <div className="p-8 pb-4 flex items-center justify-between" id="project-header-rgms">
                <span className="text-xs font-semibold tracking-widest text-brand-orange uppercase">
                  Featured Deployment
                </span>
                <span className="text-xs font-mono text-gray-400">
                  UOK / SYSTEM INT
                </span>
              </div>
              <div className="flex-grow aspect-[16/9] overflow-hidden relative">
                <img 
                  src={PROJECTS[0].imageUrl} 
                  alt={PROJECTS[0].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-101"
                  referrerPolicy="no-referrer"
                  id="project-img-rgms"
                />
              </div>
              <div className="p-8 bg-white flex items-center justify-between border-t border-gray-100" id="project-footer-rgms">
                <div>
                  <h3 className="text-xl font-bold font-heading text-gray-900 mb-1">
                    {PROJECTS[0].title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Active collaboration and metrics verification system
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Project 2 - Intern Management System (Vertical) */}
            <div 
              className="md:col-span-4 bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm flex flex-col justify-between group"
              id="project-card-ims-wrapper"
            >
              <div className="flex-grow relative aspect-[4/3] md:aspect-auto md:h-64 overflow-hidden">
                <img 
                  src={PROJECTS[1].imageUrl} 
                  alt={PROJECTS[1].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-101"
                  referrerPolicy="no-referrer"
                  id="project-img-ims"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white md:hidden">
                  <h3 className="text-lg font-bold font-heading">{PROJECTS[1].title}</h3>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-between flex-grow" id="project-body-ims">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold font-heading text-gray-950 hidden md:block">
                    {PROJECTS[1].title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Automating engineering talent pipelines with real-time feedback and structured milestone progress indexes.
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('contact')}
                  className="mt-6 text-xs font-bold tracking-widest text-brand-orange hover:text-brand-orange-hover flex items-center space-x-1 uppercase bg-transparent border-0 cursor-pointer"
                  id="project-learn-more-ims"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Project 3 - Secondary Code / DevOps display (Standard text card) */}
            <div 
              className="md:col-span-6 bg-zinc-950 rounded-3xl p-8 text-white relative overflow-hidden flex flex-col justify-between group"
              id="project-card-devops-wrapper"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl opacity-50" />
              <div className="space-y-6">
                <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>CI/CD SYSTEM VERIFIED</span>
                </div>
                <h3 className="text-2xl font-extrabold font-heading text-white">
                  Zero-Defect Deployment Pipelines
                </h3>
                <p className="text-zinc-450 text-sm leading-relaxed max-w-md">
                  Deploying containerized micro-architectures for mission-critical client tools. Automated scaling rules built with absolute safety measures.
                </p>
              </div>
              <div className="pt-10 flex items-center justify-between text-zinc-400 text-xs font-mono border-t border-zinc-800" id="project-footer-devops">
                <span>STAGE // PRODUCTION // CLOUD_RUN</span>
                <span className="text-brand-orange font-semibold">99.99% Uptime</span>
              </div>
            </div>

            {/* Project 4 - Intern Management detail (Right standard text card) */}
            <div 
              className="md:col-span-6 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between group"
              id="project-card-metrics-wrapper"
            >
              <div className="space-y-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Performance Metric Ecosystem
                </span>
                <h3 className="text-2xl font-extrabold font-heading text-gray-900">
                  Intern Performance Indexer
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Consolidating feedback indexes from lead professors and enterprise advisors. Real-time updates matching development milestones.
                </p>
              </div>
              <div className="pt-8 flex items-center justify-between border-t border-gray-100" id="project-footer-metrics">
                <span className="text-xs font-semibold text-gray-400">Enterprise Standard Ready</span>
                <button 
                  onClick={() => setActiveTab('team')}
                  className="text-xs font-bold uppercase tracking-widest text-brand-dark hover:text-brand-orange transition-colors flex items-center space-x-1 cursor-pointer"
                  id="project-view-team-btn"
                >
                  <span>Meet Team</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center" id="projects-view-all">
            <button
              onClick={() => setActiveTab('services')}
              className="px-8 py-3.5 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold text-sm tracking-wide transition-colors cursor-pointer"
              id="projects-cta-all-btn"
            >
              Explore More Projects
            </button>
          </div>
        </div>
      </section>

      {/* 4. Labs Section ("What is FCT Technologies?") */}
      <section className="bg-gray-50/50 py-20 border-y border-gray-100" id="home-labs-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-orange" id="labs-pretitle">
              CASE STUDIES
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-neutral-950 tracking-tight" id="labs-title">
              What is FCT Technologies ?
            </h2>
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed" id="labs-subtitle">
              FCT Technologies is where ambition meets expertise — a powerhouse of driven undergraduates crafting robust digital solutions under world-class academic leadership, for clients who expect nothing less than excellence.
            </p>
          </div>

          {/* Carousel Photo Gallery - Horizontal Scroll */}
          <div ref={carouselRef} className="w-full overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory" id="labs-carousel-container">
            <motion.div 
              className="flex gap-6 pb-2 px-4"
              id="labs-gallery-carousel"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              {LAB_IMAGES.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  viewport={{ once: false }}
                  whileHover={{ y: -12, transition: { duration: 0.2 } }}
                  className="flex-shrink-0 w-80 h-72 md:w-96 md:h-80 snap-center rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-shadow duration-300 relative group cursor-pointer"
                  id={`lab-gallery-item-${i}`}
                >
                  <img 
                    src={img} 
                    alt={`FCT Technology Lab Setup ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    id={`lab-img-${i}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-sm font-bold text-white tracking-wide block">FCT Lab {i + 1}</span>
                      <span className="text-xs text-gray-200">Undergraduate Research Hub</span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Carousel Scroll Hint */}
          <div className="mt-8 flex justify-center">
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center space-x-2 text-xs text-gray-400"
            >
              <span>Scroll to explore</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7m0 0l-7 7m7-7H5" />
              </svg>
            </motion.div>
          </div>

          <div className="mt-12 text-center" id="labs-action">
            <button
              onClick={() => setActiveTab('about')}
              className="px-8 py-3.5 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold text-sm tracking-wide transition-colors cursor-pointer"
              id="labs-about-link-btn"
            >
              Explore Our Workspace
            </button>
          </div>
        </div>
      </section>

      {/* 5. User Feedback Section */}
      <section className="py-10" id="home-testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16">
            <h2 className="text-3.5xl sm:text-4xl font-black font-heading text-neutral-950 tracking-tight" id="testimonials-title">
              User Feedback
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="testimonials-grid">
            {TESTIMONIALS.map((test) => (
              <div 
                key={test.id}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm relative flex flex-col justify-between"
                id={`testimonial-card-${test.id}`}
              >
                <p className="text-sm sm:text-base text-gray-500 italic leading-relaxed text-center mb-6">
                  {test.quote}
                </p>
                <div className="text-center" id={`testimonial-author-${test.id}`}>
                  <h4 className="text-sm font-extrabold text-gray-900 font-heading">
                    - {test.author} -
                  </h4>
                  <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">
                    {test.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. High-Contrast Bottom CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="home-cta-section">
        <div className="bg-zinc-950 rounded-[2.5rem] relative overflow-hidden py-16 px-6 sm:px-12 lg:py-24 text-center border border-zinc-850 shadow-2xl">
          {/* Ambient blur effects */}
          <div className="absolute top-0 left-11/12 w-96 h-96 bg-brand-orange/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl opacity-60" />

          <div className="max-w-3xl mx-auto space-y-8 relative">
            <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight leading-tight">
              Ready to elevate your digital architecture?
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              Connect with our engineering team to discuss how FCT Technologies can transform your microservices and build highly responsive products.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => setActiveTab('services')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-sm tracking-wide transition-colors cursor-pointer flex items-center justify-center space-x-2"
                id="cta-get-started-btn"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Dialog Modal */}
      {showScheduler && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true" id="booking-modal-overlay">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-neutral-950/80 transition-opacity" aria-hidden="true" onClick={() => setShowScheduler(false)} />
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-3xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full border border-gray-100">
              <div className="bg-brand-orange text-white p-6 relative">
                <button 
                  onClick={() => setShowScheduler(false)}
                  className="absolute right-4 top-4 text-white/80 hover:text-white text-xl font-bold cursor-pointer"
                >
                  ×
                </button>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 animate-pulse" />
                  <h3 className="text-xl font-bold font-heading">Book Technological Discovery</h3>
                </div>
                <p className="text-white/80 text-xs mt-1">
                  Connect 1-on-1 with our Faculty Directors and lead developers.
                </p>
              </div>

              <div className="p-6">
                {scheduled ? (
                  <div className="text-center py-8 space-y-4" id="booking-success-message">
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 font-heading">Consultation Reserved!</h4>
                      <p className="text-sm text-gray-550 mt-1">
                        A Calendar invitation has been dispatched to {bookingEmail}.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleBookMeeting} className="space-y-4" id="booking-form">
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5Packed">Full Name</label>
                      <input
                        type="text"
                        required
                        value={bookingName}
                        onChange={(e) => setBookingName(e.target.value)}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-orange text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Business Email</label>
                      <input
                        type="email"
                        required
                        value={bookingEmail}
                        onChange={(e) => setBookingEmail(e.target.value)}
                        placeholder="john@company.com"
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-orange text-gray-900"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Date</label>
                        <input
                          type="date"
                          required
                          value={bookingDate}
                          onChange={(e) => setBookingDate(e.target.value)}
                          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-orange text-gray-900"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Time</label>
                        <input
                          type="time"
                          required
                          value={bookingTime}
                          onChange={(e) => setBookingTime(e.target.value)}
                          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-orange text-gray-900"
                        />
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full py-3 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold rounded-xl text-sm transition-colors cursor-pointer"
                    >
                      Lock Consultation Slot
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
