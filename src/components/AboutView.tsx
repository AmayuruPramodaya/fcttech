import { motion } from 'motion/react';
import { Target, Eye, ShieldAlert, Sparkles, HeartHandshake } from 'lucide-react';
import { VALUES } from '../data';

export default function AboutView() {
  const valuesIcons = [
    <ShieldAlert className="w-6 h-6 text-brand-orange animate-pulse" />,
    <Sparkles className="w-6 h-6 text-brand-orange" />,
    <HeartHandshake className="w-6 h-6 text-brand-orange" />
  ];

  return (
    <div className="space-y-24 pb-20" id="about-view-container">
      {/* 1. Header Hero */}
      <section className="relative bg-white pt-10 pb-0 lg:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="space-y-4 max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
              PRECISION IN EVERY LINE
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-neutral-950 tracking-tight leading-none" id="about-hero-title">
              Empowering innovation<br />
              through technology and talent.
            </h1>
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-3xl pt-2">
              We are a team of skilled undergraduate developers and designers dedicated to building innovative, reliable, and impact software solutions for modern organizations.
            </p>
          </div>
        </div>

        {/* Large group photo - Full Width */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="w-screen overflow-hidden shadow-2xl relative group aspect-video" 
          id="about-banner-container"
        >
          <img 
            src="/assets/about-banner.png" 
            alt="FCT Technologies Group Gathering"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            id="about-banner-img"
          />
        </motion.div>
      </section>

      {/* 2. Mission and Vision split cols */}
      <section className="bg-white" id="about-mission-vision-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-orange-50/30 rounded-3xl p-8 sm:p-12 border border-orange-100/50 space-y-6" id="about-mission-card">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-brand-orange">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold font-heading text-neutral-950">
                Our Mission
              </h2>
              <p className="text-sm sm:text-base text-gray-650 leading-relaxed">
                To empower businesses and organizations with innovative, reliable, and high-quality digital solutions built through technical excellence, creativity, and real-world collaboration.
              </p>
            </div>

            <div className="bg-zinc-50 rounded-3xl p-8 sm:p-12 border border-zinc-100 space-y-6" id="about-vision-card">
              <div className="w-12 h-12 bg-zinc-200/60 rounded-2xl flex items-center justify-center text-neutral-800">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold font-heading text-neutral-950">
                Our Vision
              </h2>
              <p className="text-sm sm:text-base text-gray-650 leading-relaxed">
                To become a leading university-based software solutions hub, delivering impactful digital experiences that bridge academic talent with industry needs while setting new standards in innovation and quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 What is FCT Technologies Section */}
      <section className="py-20 bg-white border-b border-gray-100" id="about-what-is-fct-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="space-y-4 max-w-4xl">
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-neutral-950 tracking-tight" id="what-is-fct-title">
                What is FCT Technologies ?
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                FCT Technologies is the official software solutions company of the Faculty of Computing and Technology, University of Kelaniya, established and managed by the Industry Interaction Cell. The company delivers innovative, high-quality, and cost-effective software solutions to businesses and organizations through a talented team of undergraduate students, primarily from Computer Science and Information and Communication Technology, who possess strong technical skills, creativity, and a passion for emerging technologies. FCT Technologies also provides part-time internship opportunities that give students valuable real-world industry experience while allowing them to work both on-site in a modern laboratory equipped with high-performance computers and remotely under the guidance and leadership of the faculty administration.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100">
              <img 
                src="/assets/what-is-fct-image.jpeg" 
                alt="FCT Technologies Team Working"
                className="w-full object-cover aspect-video"
                referrerPolicy="no-referrer"
                id="what-is-fct-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Who Work in this & Who Manage this panels */}
      <section className="py-10" id="about-management-panels">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Who Work In This Panel */}
          <div 
            className="bg-gray-100 rounded-3xl overflow-hidden border border-gray-100 shadow-sm grid grid-cols-1 md:grid-cols-12 items-center"
            id="panel-work-container"
          >
            <div className="p-8 sm:p-12 md:col-span-7 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900">
                Who Work in this ?
              </h3>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-xl">
                A talented team of undergraduate students from the Faculty of Computing and Technology, University of Kelaniya, working under the guidance of faculty leadership to deliver innovative software solutions.
              </p>
            </div>
            <div className="md:col-span-5 h-20 md:h-full overflow-hidden">
              <img 
                src="/assets/work-team.jpeg" 
                alt="Undergraduate student team"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Who Manage This Panel */}
          <div 
            className="bg-gray-100 rounded-3xl overflow-hidden border border-gray-100 shadow-sm grid grid-cols-1 md:grid-cols-12 items-center"
            id="panel-manage-container"
          >
            <div className="md:col-span-5 h-20 md:h-full overflow-hidden order-last md:order-first">
              <img 
                src="/assets/manage-team.jpeg" 
                alt="faculty mentorship and administration"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8 sm:p-12 md:col-span-7 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900">
                Who Manage this ?
              </h3>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-xl">
                FCT Technologies is managed by the Industry Interaction Cell of the Faculty of Computing and Technology, University of Kelaniya, under the supervision and guidance of the faculty administration.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Values that guide us */}
      <section className="bg-gray-50/60 py-20 border-y border-gray-105" id="about-values-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
              CORE PRINCIPLES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-neutral-950 tracking-tight">
              Values that guide us.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="values-grid">
            {VALUES.map((val, i) => (
              <div 
                key={val.id}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                id={`value-card-${val.id}`}
              >
                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center mb-6">
                  {valuesIcons[i]}
                </div>
                <h3 className="text-xl font-bold font-heading text-gray-950 mb-3">
                  {val.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
