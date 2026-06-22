import { motion } from 'motion/react';
import { ArrowRight, Download, Linkedin, MapPin } from 'lucide-react';
import { ActiveTab } from '../types';

interface HomeViewProps {
  onNavigate: (tab: ActiveTab) => void;
  onOpenContact: () => void;
}

export default function HomeView({ onNavigate, onOpenContact }: HomeViewProps) {
  // Direct image links from HTML specs
  const headshotImgUrl = '/images/foto-laura-vanesa-moreno-betancur.jpg';
  
  const downloadResumePdf = () => {
    const url = '/docs/laura-vanesa-moreno-betancur-cv.pdf';
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Laura_Vanesa_Moreno_Betancur_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const linkedinUrl = 'https://www.linkedin.com/in/laura-moreno-betancur-4aa7b0284';

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.6 }}
      className="relative z-10"
      id="home-view-container"
    >
      {/* Hero Section */}
      <section className="mb-20 pt-4" id="home-hero-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6" id="home-intro-col">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-2 px-3 py-1 bg-surface-container/60 border border-secondary/20 rounded-full"
              id="projects-status-badge"
            >
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="font-mono text-xs text-secondary tracking-widest uppercase">PROFESSIONAL PROFILE</span>
            </motion.div>

            <h1 className="font-sans text-5xl md:text-6xl font-extrabold text-on-surface leading-tight tracking-tight" id="home-main-title">
              Food Safety &amp; Quality <br />
              <span className="text-secondary">Leader</span>
            </h1>

            <p className="text-on-surface-variant text-base md:text-lg leading-relaxed max-w-3xl" id="home-profile-full-summary">
              Industrial Chemistry professional with experience leading Food Safety, Quality, and Safety Assurance processes in the food and beverage industry. Specialist in implementing and strengthening management systems such as BRCGS, HACCP, GMP, Food Defense, and Food Fraud, with a focus on regulatory compliance, audits, and continuous improvement.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 w-full max-w-3xl border-t border-outline-val/20" id="home-profile-meta-grid">
              <div className="space-y-1 pt-4">
                <span className="font-mono text-[11px] text-secondary/75 tracking-wider uppercase font-semibold">Specialty</span>
                <p className="text-base text-on-surface font-semibold">BRCGS, HACCP and Food Safety Systems</p>
              </div>
              <div className="space-y-1 pt-4">
                <span className="font-mono text-[11px] text-secondary/75 tracking-wider uppercase font-semibold flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> Location
                </span>
                <p className="text-base text-on-surface font-semibold">Barranquilla / Atlántico</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4" id="home-cta-buttons">
              <button
                id="btn-see-work"
                onClick={() => onNavigate('Work')}
                className="border border-outline-val/50 text-on-surface px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest hover:border-secondary hover:text-secondary glass-card hover:bg-surface-high/30 active:scale-95 transition-all duration-300 cursor-pointer flex items-center gap-2"
              >
                <ArrowRight className="w-4 h-4 text-secondary" />
                View Experience
              </button>
              <button
                id="btn-download-resume"
                onClick={downloadResumePdf}
                className="border border-outline-val/50 text-on-surface px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest hover:border-secondary hover:text-secondary glass-card hover:bg-surface-high/30 active:scale-95 transition-all duration-300 cursor-pointer flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-secondary" />
                Download Resume
              </button>
              <a
                id="btn-linkedin-profile"
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="border border-outline-val/50 text-on-surface px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest hover:border-secondary hover:text-secondary glass-card hover:bg-surface-high/30 transition-all duration-300 cursor-pointer flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4 text-secondary" />
                LinkedIn
              </a>
            </div>

          </div>

          {/* Visual Photo Column */}
          <div className="lg:col-span-5 h-[560px]" id="home-photo-column">
            <div className="h-full relative group" id="home-portrait-wrapper">
              <div className="glass-card p-0 overflow-hidden h-full relative rounded-xl border border-outline-val/20" id="home-portrait-card">
                <img 
                  src={headshotImgUrl}
                  alt="Laura Vanesa Moreno Betancur profile photo"
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/25 to-transparent"></div>
              </div>
              <div className="absolute -top-4 -left-4 w-20 h-20 border-l border-t border-secondary/45 pointer-events-none rounded-tl-lg" id="home-portrait-frame-tl"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r border-b border-secondary/45 pointer-events-none rounded-br-lg" id="home-portrait-frame-br"></div>
            </div>
          </div>
          
        </div>
      </section>

    </motion.div>
  );
}
