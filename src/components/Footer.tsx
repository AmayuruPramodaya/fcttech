import { useState, FormEvent } from 'react';
import { Mail, ArrowRight, Github, Linkedin, HelpCircle, CheckCircle } from 'lucide-react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

declare module 'react/jsx-runtime';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim() !== '') {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const handleLinkClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8" id="layout-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand details */}
          <div className="space-y-4" id="footer-brand-col">
            <div className="flex items-center space-x-2">
              <img 
                src={`${import.meta.env.BASE_URL}assets/logos/logo.png`} 
                alt="FCT Technologies Logo" 
                className="h-10 w-auto"
                id="footer-logo"
              />
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Innovation-driven software solutions for organizations shaping the future. Under world-class guidance.
            </p>
          </div>

          {/* Column 2: Navigation linkings */}
          <div id="footer-nav-col">
            <h3 className="text-xs font-semibold uppercase text-gray-400 tracking-widest mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'services', label: 'Services' },
                { id: 'team', label: 'Our Team' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleLinkClick(item.id)}
                    className="text-sm text-gray-600 hover:text-brand-orange transition-colors cursor-pointer"
                    id={`footer-link-${item.id}`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal & Social links */}
          <div id="footer-legal-col">
            <h3 className="text-xs font-semibold uppercase text-gray-400 tracking-widest mb-4">
              Legal & Social
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#privacy" className="text-sm text-gray-650 hover:text-brand-orange transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-sm text-gray-650 hover:text-brand-orange transition-colors">
                  Terms of Service
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Linkedin className="w-4 h-4 text-gray-400" />
                <a 
                  href="https://www.linkedin.com/company/fct-technologies-university-of-kelaniya/posts/?feedView=all" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-gray-650 hover:text-brand-orange transition-colors"
                >
                  Linkedin
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Github className="w-4 h-4 text-gray-400" />
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-gray-650 hover:text-brand-orange transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div id="footer-newsletter-col">
            <h3 className="text-xs font-semibold uppercase text-gray-400 tracking-widest mb-4">
              Newsletter
            </h3>
            <p className="text-sm text-gray-500 mb-4 leading-relaxed">
              Insights on the future of engineering, academic research, and scalable computing.
            </p>
            {/* <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-4 pr-12 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:border-brand-orange transition-colors"
                  id="newsletter-email-input"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-brand-dark hover:bg-black text-white rounded flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Subscribe"
                  id="newsletter-submit-btn"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-emerald-600 flex items-center space-x-1" id="newsletter-success-msg">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Subscribed successfully!</span>
                </p>
              )}
            </form> */}
          </div>
        </div>

        {/* Divider and copyright */}
        <div className="border-t border-gray-200/60 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400">
          <p id="copyright-text">
            © 2026 FCT Technologies. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
          </div>
        </div>
      </div>
    </footer>
  );
}
