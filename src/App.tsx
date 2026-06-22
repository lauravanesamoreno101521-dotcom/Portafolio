import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Menu, X, ArrowRight, Github, Mail, Linkedin, GitBranch, ShieldAlert } from 'lucide-react';
import { ActiveTab } from './types';

// Importing Tab views
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import WorkView from './components/WorkView';
import ProjectsView from './components/ProjectsView';
import PortfolioProjectsView from './components/PortfolioProjectsView';
import HobbiesView from './components/HobbiesView';
import ContactModal from './components/ContactModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Tabs structure
  const navigationTabs: { key: ActiveTab; label: string }[] = [
    { key: 'Home', label: 'About' },
    { key: 'Work', label: 'Work' },
    { key: 'Education', label: 'Education' },
    { key: 'Projects', label: 'Projects' },
    { key: 'Hobbies', label: 'Hobbies' }
  ];

  // Underline position motion configuration helper
  const handleTabChange = (tab: ActiveTab) => {
    setIsMobileMenuOpen(false);
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-background-dark text-on-surface overflow-x-hidden selection:bg-secondary/30 selection:text-white" id="main-app-container">
      
      {/* Dynamic Background visual ornaments */}
      <div className="fixed inset-0 data-grid-pattern pointer-events-none z-0" id="ambient-grid-overlay"></div>
      
      {/* Purple gradient glow blur ornament */}
      <div className="fixed -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-tertiary/5 blur-[140px] pointer-events-none z-0" id="ambient-glow-top-left"></div>
      {/* Cyan gradient glow blur ornament */}
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-[120px] pointer-events-none z-0" id="ambient-glow-bottom-right"></div>

      {/* Primary Landing Navbar */}
      <header className="sticky top-0 z-40 bg-background-dark/80 backdrop-blur-md border-b border-outline-val/10" id="app-primary-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between" id="header-inner-row">
          
          {/* Logo Brand Title */}
          <div 
            onClick={() => handleTabChange('Home')}
            className="flex items-center gap-2.5 cursor-pointer group" 
            id="brand-logo"
          >
            <div className="bg-secondary/10 border border-secondary/30 p-2 rounded text-secondary group-hover:bg-secondary group-hover:text-background-dark transition-all duration-300" id="logo-node">
              <Terminal className="w-5 h-5" />
            </div>
            <div className="flex flex-col" id="logo-text">
              <span className="font-sans font-extrabold text-sm tracking-wider text-on-surface uppercase block">ALEX_DEV.DATA</span>
              <span className="font-mono text-[9px] text-on-surface-variant tracking-widest uppercase block -mt-1.5 font-medium">PRECISION CODES</span>
            </div>
          </div>

          {/* Nav Links Node (Desktop) */}
          <nav className="hidden md:flex items-center gap-1.5" id="desktop-nav-bar">
            {navigationTabs.map((tab) => {
              const matchesTab = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  id={`nav-tab-${tab.key}`}
                  onClick={() => handleTabChange(tab.key)}
                  className={`relative px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer rounded-sm ${
                    matchesTab ? 'text-secondary' : 'text-on-surface-variant hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{tab.label}</span>
                  {matchesTab && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-secondary"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Call-to-action button */}
          <div className="hidden md:block" id="desktop-cta-btn-frame">
            <button
              id="header-btn-contact"
              onClick={() => setIsContactOpen(true)}
              className="border border-secondary/45 text-secondary font-mono text-[11px] font-bold uppercase tracking-widest py-2.5 px-5 bg-secondary/5 hover:bg-secondary hover:text-background-dark transition-all duration-300 rounded cursor-pointer flex items-center gap-1.5"
            >
              Get in touch <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Burger icon (Mobile toggler) */}
          <div className="md:hidden" id="mobile-hamburger-frame">
            <button
              id="btn-mobile-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 text-on-surface-variant hover:text-white hover:bg-surface-high/30 rounded cursor-pointer transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Expandable Menu (Mobile) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden sticky top-20 z-30 bg-surface-lowest border-b border-outline-val/20 overflow-hidden"
            id="mobile-navigation-drawer"
          >
            <div className="px-4 py-6 space-y-3" id="mobile-inner-menu">
              {navigationTabs.map((tab) => {
                const matchesTab = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    id={`mobile-tab-${tab.key}`}
                    onClick={() => handleTabChange(tab.key)}
                    className={`block w-full text-left font-mono text-xs font-bold uppercase tracking-wider py-2.5 px-4 rounded ${
                      matchesTab ? 'bg-secondary/15 text-secondary border-l-2 border-secondary' : 'text-on-surface-variant hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
              <div id="mobile-cta-btn-wrapper" className="pt-4 border-t border-outline-val/10">
                <button
                  id="mobile-btn-contact"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsContactOpen(true);
                  }}
                  className="w-full bg-secondary text-background-dark font-mono text-xs font-bold uppercase tracking-widest py-3 text-center rounded flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  Get in touch <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Section view content viewport */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 min-h-[calc(100vh-23rem)]" id="main-viewport">
        <AnimatePresence mode="wait">
          {activeTab === 'Home' && (
            <motion.div key="view-Home" className="w-full">
              <HomeView 
                onNavigate={handleTabChange} 
                onOpenContact={() => setIsContactOpen(true)} 
              />
              <div className="mt-16">
                <AboutView />
              </div>
            </motion.div>
          )}
          {activeTab === 'Work' && (
            <motion.div key="view-Work" className="w-full">
              <WorkView />
            </motion.div>
          )}
          {activeTab === 'Education' && (
            <motion.div key="view-Education" className="w-full">
              <ProjectsView />
            </motion.div>
          )}
          {activeTab === 'Projects' && (
            <motion.div key="view-Projects" className="w-full">
              <PortfolioProjectsView />
            </motion.div>
          )}
          {activeTab === 'Hobbies' && (
            <motion.div key="view-Hobbies" className="w-full">
              <HobbiesView />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Interactive Contact Drawer Modal overlay */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {/* Sticky Bottom Technical footer */}
      <footer className="border-t border-outline-val/10 bg-surface-lowest relative z-10" id="application-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14" id="footer-inner-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center" id="footer-grid">
            
            {/* Left Copyright info */}
            <div className="md:col-span-5 flex flex-col md:items-start text-center md:text-left space-y-2" id="footer-brand-col">
              <span className="font-sans font-extrabold text-sm tracking-wider uppercase text-on-surface">ALEX_DEV.DATA</span>
              <p className="text-xs text-on-surface-variant leading-relaxed max-w-sm">
                Built and compiled by Alex. Syncing analytical structures with beautiful user views.
              </p>
              <p className="text-[10px] font-mono text-on-surface-variant/40 pt-2">
                &copy; {new Date().getFullYear()} ALEX_DEV.DATA. ALL RIGHTS RESERVED.
              </p>
            </div>

            {/* Middle Quick Link to Contact Trigger */}
            <div className="md:col-span-2 text-center" id="footer-collaborate-col">
              <button
                id="footer-collaborate-link"
                onClick={() => setIsContactOpen(true)}
                className="font-mono text-xs font-bold text-secondary hover:text-white uppercase tracking-widest cursor-pointer transition-colors"
              >
                COLLABORATE
              </button>
            </div>

            {/* Right Developer coordinates (Social + Github Repo Links) */}
            <div className="md:col-span-5 flex flex-col md:items-end items-center space-y-4" id="footer-coordinates-col">
              
              <div className="flex gap-4" id="social-icons">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-2 bg-surface-low border border-outline-val/20 hover:border-secondary hover:text-secondary rounded transition-colors text-on-surface-variant"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-2 bg-surface-low border border-outline-val/20 hover:border-secondary hover:text-secondary rounded transition-colors text-on-surface-variant"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="p-2 bg-surface-low border border-outline-val/20 hover:border-secondary hover:text-secondary rounded transition-colors text-on-surface-variant cursor-pointer"
                  title="Send Secured Mail"
                >
                  <Mail className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-2 text-on-surface-variant/70 text-[10px] font-mono" id="footer-repo-hash">
                <GitBranch className="w-3.5 h-3.5 text-secondary" />
                <span>BUILD: REV-REACT-19.0.1</span>
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" title="System normal"></span>
              </div>

            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}
