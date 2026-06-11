/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ServicesView from './components/ServicesView';
import TeamView from './components/TeamView';
import ContactView from './components/ContactView';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  // Listen to external custom events (eg from overlays/drawers) to switch tabs effortlessly
  useEffect(() => {
    const handleSetTab = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setActiveTab(customEvent.detail);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('setTab', handleSetTab);
    return () => {
      window.removeEventListener('setTab', handleSetTab);
    };
  }, []);

  // Select the appropriate view component
  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView setActiveTab={setActiveTab} />;
      case 'about':
        return <AboutView />;
      case 'services':
        return <ServicesView />;
      case 'team':
        return <TeamView setActiveTab={setActiveTab} />;
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans selection:bg-orange-500/20 selection:text-brand-orange-hover">
      {/* Universal Sticky Glassmorphic Header */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Fluid Stage */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {renderTabContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Dynamic Universal footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}

