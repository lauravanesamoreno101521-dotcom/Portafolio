import { motion } from 'motion/react';
import { Terminal, LineChart, Code, Layers, Microscope, TrendingUp } from 'lucide-react';

export default function WorkView() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.6 }}
      className="relative z-10"
      id="work-view-container"
    >
      {/* Hero Header */}
      <section className="mb-14 pt-4" id="work-hero-header">
        <div className="max-w-3xl">
          <h1 className="font-sans text-5xl font-extrabold text-on-surface mb-6">
            Professional <span className="text-secondary">Trajectory</span>
          </h1>
          <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">
            Experience in food safety, quality, and food safety assurance in the food and beverage industry, leading audits, management systems, and continuous improvement initiatives.
          </p>
        </div>
      </section>

      {/* Bento Grid Experience Layout */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-10" id="work-experience-grid">
        
        {/* LEAD EXPERIENCE */}
        <div className="lg:col-span-8 group" id="exp-lead-architect-col">
          <div className="glass-card glass-card-hover h-full p-8 relative flex flex-col justify-between rounded-xl" id="lead-architecture-card">
            <div>
              <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Terminal className="text-secondary w-5 h-5 shrink-0" />
                    <span className="font-mono text-xs text-secondary tracking-widest font-bold uppercase">FOOD SAFETY</span>
                  </div>
                  <h2 className="font-sans text-2xl font-extrabold text-on-surface">Food Safety Leader and Sensory Coordinator</h2>
                  <h3 className="text-base text-on-surface-variant font-medium mt-1">Bavaria / AB InBev - Atlántico Brewery</h3>
                </div>
                <div className="md:text-right" id="lead-timeframe">
                  <p className="font-mono text-xs text-secondary font-bold tracking-wider">Nov 2024 — Jun 2026</p>
                  <span className="inline-block px-2.5 py-1 bg-surface-lowest text-[10px] font-mono border border-outline-val/30 mt-2 text-on-surface-variant rounded uppercase font-semibold">
                    FULL-TIME
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8" id="lead-bullets">
                <li className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0"></span>
                  <p className="text-sm md:text-base text-on-surface leading-normal">
                    Led the Food Safety Management System at the alcoholic beverage production plant.
                  </p>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0"></span>
                  <p className="text-sm md:text-base text-on-surface leading-normal">
                    Prepared and supported the INVIMA audit for alcoholic beverage production (Decree 1686 of 2012).
                  </p>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0"></span>
                  <p className="text-sm md:text-base text-on-surface leading-normal">
                    Managed internal and external audits, closed findings, and coordinated Food Defense and Food Fraud programs.
                  </p>
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 pt-6 border-t border-outline-val/20" id="lead-skills">
              <span className="px-3 py-1 bg-surface-low rounded-md font-mono text-xs text-on-surface-variant border border-outline-val/10">BRCGS</span>
              <span className="px-3 py-1 bg-surface-low rounded-md font-mono text-xs text-on-surface-variant border border-outline-val/10">HACCP</span>
              <span className="px-3 py-1 bg-surface-low rounded-md font-mono text-xs text-on-surface-variant border border-outline-val/10">Food Defense</span>
              <span className="px-3 py-1 bg-surface-low rounded-md font-mono text-xs text-on-surface-variant border border-outline-val/10">Food Fraud</span>
              <span className="px-3 py-1 bg-surface-low rounded-md font-mono text-xs text-on-surface-variant border border-outline-val/10">INVIMA</span>
            </div>
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-secondary/5 to-transparent rounded-tr-xl pointer-events-none"></div>
          </div>
        </div>

        {/* SIDE PROJECTS & CODE COUNTERS (Stats Cards) */}
        <div className="lg:col-span-4 flex flex-col gap-6" id="stats-counter-column">
          <div className="glass-card glass-card-hover p-6 flex-1 flex flex-col justify-center items-center text-center rounded-xl" id="stat-data-proj">
            <div className="mb-4 p-3 bg-surface-high/40 rounded-full">
              <LineChart className="text-tertiary w-8 h-8" />
            </div>
            <p className="font-mono text-[10px] text-on-surface-variant tracking-widest font-bold uppercase mb-1">INTERNAL AUDITS</p>
            <p className="text-4xl font-sans font-extrabold text-on-surface">5</p>
            <div className="w-12 h-1 bg-tertiary mt-3 rounded-full"></div>
          </div>

          <div className="glass-card glass-card-hover p-6 flex-1 flex flex-col justify-center items-center text-center rounded-xl" id="stat-web-repos">
            <div className="mb-4 p-3 bg-surface-high/40 rounded-full">
              <Code className="text-secondary w-8 h-8" />
            </div>
            <p className="font-mono text-[10px] text-on-surface-variant tracking-widest font-bold uppercase mb-1">EXTERNAL AUDITS</p>
            <p className="text-4xl font-sans font-extrabold text-on-surface">2</p>
            <div className="w-12 h-1 bg-secondary mt-3 rounded-full"></div>
          </div>
        </div>

        {/* EXPERIENCE: Greenfield */}
        <div className="lg:col-span-12 group animate-duration-500" id="exp-data-analyst-row">
          <div className="glass-card glass-card-hover p-8 flex flex-col lg:flex-row gap-8 rounded-xl relative" id="data-analyst-card">
            
            <div className="lg:w-1/3 flex flex-col justify-between" id="data-analyst-left">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="text-tertiary w-5 h-5 shrink-0" />
                  <span className="font-mono text-xs text-tertiary tracking-widest font-bold uppercase">GREENFIELD PROJECT</span>
                </div>
                <h2 className="font-sans text-2xl font-extrabold text-on-surface">Food Safety Leader and Sensory Coordinator</h2>
                <h3 className="text-base text-on-surface-variant font-medium mt-1">Bavaria / AB InBev - Atlántico Brewery</h3>
              </div>
              <div className="mt-6 lg:mt-0">
                <p className="font-mono text-xs text-secondary font-bold tracking-wider mb-3">Mar 2024 - Nov 2024</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-tertiary/10 border border-tertiary/20 rounded font-mono text-xs text-tertiary font-medium">BRCGS</span>
                  <span className="px-2 py-1 bg-tertiary/10 border border-tertiary/20 rounded font-mono text-xs text-tertiary font-medium">PRPs</span>
                  <span className="px-2 py-1 bg-tertiary/10 border border-tertiary/20 rounded font-mono text-xs text-tertiary font-medium">Training</span>
                  <span className="px-2 py-1 bg-tertiary/10 border border-tertiary/20 rounded font-mono text-xs text-tertiary font-medium">Start-up</span>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 lg:border-l border-outline-val/20 lg:pl-8 flex flex-col justify-center" id="data-analyst-right">
              <ul className="space-y-4" id="data-analyst-bullets">
                <li className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 bg-tertiary rounded-full mt-2 shrink-0"></span>
                  <p className="text-sm md:text-base text-on-surface leading-normal">
                    Led the implementation of the Food Safety Management System for the Greenfield project.
                  </p>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 bg-tertiary rounded-full mt-2 shrink-0"></span>
                  <p className="text-sm md:text-base text-on-surface leading-normal">
                    Developed and implemented procedures, work instructions, and prerequisite programs.
                  </p>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 bg-tertiary rounded-full mt-2 shrink-0"></span>
                  <p className="text-sm md:text-base text-on-surface leading-normal">
                    Designed food safety training and supported production process start-up activities.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM DOUBLE GRID */}
        <div className="lg:col-span-6 group" id="exp-jr-frontend-col">
          <div className="glass-card glass-card-hover p-8 h-full flex flex-col justify-between rounded-xl" id="jr-frontend-card">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Layers className="text-secondary w-5 h-5 shrink-0" />
                <span className="font-mono text-xs text-secondary tracking-widest font-bold uppercase">MICROBIOLOGY</span>
              </div>
              <h2 className="font-sans text-xl font-bold text-on-surface">Microbiology Analyst</h2>
              <h3 className="text-sm text-on-surface-variant font-medium mt-1">Cervecería Unión., Medellín</h3>
              <p className="font-mono text-xs text-secondary font-bold tracking-wider mt-2 mb-6">Jan 2023 - Feb 2024</p>
              
              <div className="space-y-4 text-sm text-on-surface leading-relaxed mb-6">
                <p>Performed microbiological analyses on raw materials, in-process product, and finished product.</p>
                <p>Monitored environments, surfaces, and handlers, with follow-up of microbiological indicators.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-outline-val/20">
              <span className="px-2 py-0.5 bg-surface-low rounded font-mono text-[11px] text-on-surface-variant">Industrial Microbiology</span>
              <span className="px-2 py-0.5 bg-surface-low rounded font-mono text-[11px] text-on-surface-variant">Quality Control</span>
              <span className="px-2 py-0.5 bg-surface-low rounded font-mono text-[11px] text-on-surface-variant">Corrective Actions</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 group" id="exp-research-col">
          <div className="glass-card glass-card-hover p-8 h-full flex flex-col justify-between rounded-xl border-dashed" id="research-assistant-card">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Microscope className="text-tertiary w-5 h-5 shrink-0" />
                <span className="font-mono text-xs text-tertiary tracking-widest font-bold uppercase">SENSORY AND TRAINING</span>
              </div>
              <h2 className="font-sans text-xl font-bold text-on-surface">Sensory Panel Coordinator / University Intern</h2>
              <h3 className="text-sm text-on-surface-variant font-medium mt-1">Cervecería Unión., Medellín</h3>
              <p className="font-mono text-xs text-secondary font-bold tracking-wider mt-2 mb-6">Aug 2022 - Feb 2023 / Mar 2022 - Sep 2022</p>
              
              <div className="space-y-4 text-sm text-on-surface leading-relaxed mb-6">
                <p>Coordinated the sensory panel for beer attribute evaluation, including test design and results analysis.</p>
                <p>Supported brewing processes, quality control, and sensory and microbiological analyses during the internship stage.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-outline-val/20">
              <span className="px-2 py-0.5 bg-surface-low rounded font-mono text-[11px] text-on-surface-variant">Sensory Evaluation</span>
              <span className="px-2 py-0.5 bg-surface-low rounded font-mono text-[11px] text-on-surface-variant">Training</span>
              <span className="px-2 py-0.5 bg-surface-low rounded font-mono text-[11px] text-on-surface-variant">Process Control</span>
            </div>
          </div>
        </div>

      </section>
    </motion.div>
  );
}
