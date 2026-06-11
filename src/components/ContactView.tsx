import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle, Map, Send, HelpCircle } from 'lucide-react';

export default function ContactView() {
  // Form submission states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'System Integration',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Bottom subscription states
  const [subEmail, setSubEmail] = useState('');
  const [isSubbed, setIsSubbed] = useState(false);

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({
          name: '',
          email: '',
          interest: 'System Integration',
          message: ''
        });
        setTimeout(() => setIsSuccess(false), 5000);
      }, 1500);
    }
  };

  const handleSubJoinSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (subEmail.trim() !== '') {
      setIsSubbed(true);
      setSubEmail('');
      setTimeout(() => setIsSubbed(false), 5000);
    }
  };

  return (
    <div className="space-y-24 pb-20" id="contact-view-container">
      {/* 1. Hero Title */}
      <section className="relative bg-white pt-10 pb-6 lg:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
              INQUIRY
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-neutral-950 tracking-tight leading-none" id="contact-hero-header">
              Let's engineer the<br />
              future together.
            </h1>
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl pt-2">
              Have a complex challenge? Our precision-driven team is ready to provide the technical clarity you need.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Grid (Form & Details) */}
      <section className="bg-white" id="contact-form-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="contact-grid">
            
            {/* Left Col: The Inquiry Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm" id="contact-form-wrapper">
              {isSuccess ? (
                <div className="py-12 text-center space-y-4" id="form-success-wrapper">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-gray-900">Message Transmitted!</h3>
                  <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
                    Thank you. Your project request has been logged successfully. A faculty coordinator will reach out to you within 24 working hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6" id="inquiry-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2" id="label-name">
                        NAME
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-150 rounded-xl text-sm focus:outline-none focus:border-brand-orange text-gray-900 transition-colors"
                        id="form-name-input"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2" id="label-email">
                        EMAIL
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-150 rounded-xl text-sm focus:outline-none focus:border-brand-orange text-gray-900 transition-colors"
                        id="form-email-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2" id="label-interest">
                      INTEREST
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({...formData, interest: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-150 rounded-xl text-sm focus:outline-none focus:border-brand-orange text-gray-905 cursor-pointer transition-colors"
                      id="form-interest-select"
                    >
                      <option value="System Integration">System Integration</option>
                      <option value="AI Integration">AI Integration</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="Infrastructure Setup">Infrastructure Setup</option>
                      <option value="Database Management">Database Management</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2" id="label-message">
                      MESSAGE
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Describe your project requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-150 rounded-xl text-sm focus:outline-none focus:border-brand-orange text-gray-900 transition-colors resize-none"
                      id="form-message-input"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-brand-dark hover:bg-neutral-900 text-white font-bold text-sm tracking-wide transition-colors flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-70"
                    id="form-submit-btn"
                  >
                    <span>{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
                    {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                  </button>
                </form>
              )}
            </div>

            {/* Right Col: Support Details Cards + Map Visual */}
            <div className="lg:col-span-5 space-y-8" id="contact-details-wrapper">
              
              {/* Detailed Card Rows Box Matching Mockup 2 */}
              <div className="bg-gray-50/70 p-8 rounded-3xl border border-gray-100 space-y-6" id="details-panel">
                
                {/* Headquarters Row */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand-orange shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-950 font-heading">
                      Headquarters
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-505 leading-relaxed mt-1 whitespace-pre-line">
                      10th Flow, lab Building,
                      Faculty of Computing and Technology,
                      University of Kelaniya
                    </p>
                  </div>
                </div>

                {/* Technical Support Row */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand-orange shrink-0">
                    <Phone className="w-5 h-5 hover:scale-105 transition-transform" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-950 font-heading">
                      Technical Support
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-505 leading-relaxed mt-1 whitespace-pre-line">
                      +1 (555) 010-PRECISION
                      Mon — Fri, 9am — 6pm PST
                    </p>
                  </div>
                </div>

                {/* General Inquiry Row */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand-orange shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-950 font-heading">
                      General Inquiry
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-550 leading-relaxed mt-1 whitespace-pre-line">
                      fcttechnologies@gmail.com
                      press@techprecision.com
                    </p>
                  </div>
                </div>

              </div>

              {/* Map frame box layout exactly from mockup 2 */}
              <div className="rounded-3xl border border-gray-100 overflow-hidden relative group aspect-[16/10]" id="map-frame-block">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=650&h=350" 
                  alt="Stylized Google Map of Kelaniya Sri Lanka"
                  className="w-full h-full object-cover transition-transform group-hover:scale-102"
                  referrerPolicy="no-referrer"
                  id="map-frame-img"
                />
                
                {/* Central pin marker */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <span className="absolute -left-3.5 -top-3.5 w-10.5 h-10.5 rounded-full bg-blue-500/20 border border-blue-500 animate-ping" />
                    <div className="w-3.5 h-3.5 rounded-full bg-blue-600 border-2 border-white shadow shadow-blue-500" />
                  </div>
                </div>

                {/* Central View On Google Maps Button */}
                <div className="absolute bottom-4 left-4" id="map-frame-button">
                  <a 
                    href="https://maps.google.com/?q=Faculty+of+Computing+and+Technology+University+of+Kelaniya" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-4 py-2 bg-white text-zinc-950 font-bold text-[10px] tracking-widest uppercase rounded shadow hover:bg-neutral-50 font-heading transition-colors inline-flex items-center space-x-1"
                  >
                    <span>View on Google Maps</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. Subscribe to Precision Insights (Image 2 Bottom CTA) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="contact-subscription-insights-section">
        <div className="bg-zinc-950 rounded-3xl p-10 sm:p-16 text-white text-center md:text-left grid grid-cols-1 md:grid-cols-12 items-center gap-8 relative overflow-hidden border border-zinc-850">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl opacity-30" />
          
          <div className="md:col-span-7 space-y-4 relative">
            <h2 className="text-2xl sm:text-3.5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Subscribe to Precision Insights
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-xl">
              Quarterly deep-dives into systems engineering, performance metrics, and technical advancement portfolios compiled by faculty leads.
            </p>
          </div>

          <div className="md:col-span-5 w-full relative" id="insights-submit-block">
            <form onSubmit={handleSubJoinSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="Email address"
                value={subEmail}
                onChange={(e) => setSubEmail(e.target.value)}
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-sm focus:outline-none focus:border-brand-orange text-white placeholder-zinc-500"
                id="insights-email-input"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-gray-150 text-zinc-950 font-bold text-xs uppercase rounded-xl tracking-widest flex items-center justify-center space-x-1 shrink-0 transition-colors cursor-pointer"
                id="insights-join-btn"
              >
                <span>Join</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </form>
            {isSubbed && (
              <p className="text-xs text-emerald-400 flex items-center gap-1 mt-2" id="insights-success-tag">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Subscribed correctly to quarterly insights!</span>
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
