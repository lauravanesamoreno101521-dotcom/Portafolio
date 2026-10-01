import { motion } from 'motion/react';
import { Terminal, LineChart, Code, Layers, Microscope, TrendingUp } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function WorkView() {
  const { t } = useLanguage();
  const w = t.work;

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
            {w.headingLine1} <span className="text-secondary">{w.headingHighlight}</span>
          </h1>
          <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">
            {w.subtitle}
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
                    <span className="font-mono text-xs text-secondary tracking-widest font-bold uppercase">{w.categoryFoodSafety}</span>
                  </div>
                  <h2 className="font-sans text-2xl font-extrabold text-on-surface">{w.leadTitle}</h2>
                  <h3 className="text-base text-on-surface-variant font-medium mt-1">{w.leadCompany}</h3>
                </div>
                <div className="md:text-right" id="lead-timeframe">
                  <p className="font-mono text-xs text-secondary font-bold tracking-wider">{w.leadDate}</p>
                  <span className="inline-block px-2.5 py-1 bg-surface-lowest text-[10px] font-mono border border-outline-val/30 mt-2 text-on-surface-variant rounded uppercase font-semibold">
                    {w.fullTime}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8" id="lead-bullets">
                {w.leadBullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 items-start">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0"></span>
                    <p className="text-sm md:text-base text-on-surface leading-normal">{bullet}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 pt-6 border-t border-outline-val/20" id="lead-skills">
              {w.leadChips.map((chip) => (
                <span key={chip} className="px-3 py-1 bg-surface-low rounded-md font-mono text-xs text-on-surface-variant border border-outline-val/10">{chip}</span>
              ))}
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
            <p className="font-mono text-[10px] text-on-surface-variant tracking-widest font-bold uppercase mb-1">{w.statInternalAudits}</p>
            <p className="text-4xl font-sans font-extrabold text-on-surface">5</p>
            <div className="w-12 h-1 bg-tertiary mt-3 rounded-full"></div>
          </div>

          <div className="glass-card glass-card-hover p-6 flex-1 flex flex-col justify-center items-center text-center rounded-xl" id="stat-web-repos">
            <div className="mb-4 p-3 bg-surface-high/40 rounded-full">
              <Code className="text-secondary w-8 h-8" />
            </div>
            <p className="font-mono text-[10px] text-on-surface-variant tracking-widest font-bold uppercase mb-1">{w.statExternalAudits}</p>
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
                  <span className="font-mono text-xs text-tertiary tracking-widest font-bold uppercase">{w.greenfieldTag}</span>
                </div>
                <h2 className="font-sans text-2xl font-extrabold text-on-surface">{w.greenfieldTitle}</h2>
                <h3 className="text-base text-on-surface-variant font-medium mt-1">{w.greenfieldCompany}</h3>
              </div>
              <div className="mt-6 lg:mt-0">
                <p className="font-mono text-xs text-secondary font-bold tracking-wider mb-3">{w.greenfieldDate}</p>
                <div className="flex flex-wrap gap-2">
                  {w.greenfieldChips.map((chip) => (
                    <span key={chip} className="px-2 py-1 bg-tertiary/10 border border-tertiary/20 rounded font-mono text-xs text-tertiary font-medium">{chip}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 lg:border-l border-outline-val/20 lg:pl-8 flex flex-col justify-center" id="data-analyst-right">
              <ul className="space-y-4" id="data-analyst-bullets">
                {w.greenfieldBullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 items-start">
                    <span className="w-1.5 h-1.5 bg-tertiary rounded-full mt-2 shrink-0"></span>
                    <p className="text-sm md:text-base text-on-surface leading-normal">{bullet}</p>
                  </li>
                ))}
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
                <span className="font-mono text-xs text-secondary tracking-widest font-bold uppercase">{w.microCategory}</span>
              </div>
              <h2 className="font-sans text-xl font-bold text-on-surface">{w.microTitle}</h2>
              <h3 className="text-sm text-on-surface-variant font-medium mt-1">{w.microCompany}</h3>
              <p className="font-mono text-xs text-secondary font-bold tracking-wider mt-2 mb-6">{w.microDate}</p>

              <div className="space-y-4 text-sm text-on-surface leading-relaxed mb-6">
                {w.microBullets.map((bullet) => (
                  <p key={bullet}>{bullet}</p>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-outline-val/20">
              {w.microChips.map((chip) => (
                <span key={chip} className="px-2 py-0.5 bg-surface-low rounded font-mono text-[11px] text-on-surface-variant">{chip}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 group" id="exp-research-col">
          <div className="glass-card glass-card-hover p-8 h-full flex flex-col justify-between rounded-xl border-dashed" id="research-assistant-card">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Microscope className="text-tertiary w-5 h-5 shrink-0" />
                <span className="font-mono text-xs text-tertiary tracking-widest font-bold uppercase">{w.sensoryCategory}</span>
              </div>
              <h2 className="font-sans text-xl font-bold text-on-surface">{w.sensoryTitle}</h2>
              <h3 className="text-sm text-on-surface-variant font-medium mt-1">{w.sensoryCompany}</h3>
              <p className="font-mono text-xs text-secondary font-bold tracking-wider mt-2 mb-6">{w.sensoryDate}</p>

              <div className="space-y-4 text-sm text-on-surface leading-relaxed mb-6">
                {w.sensoryBullets.map((bullet) => (
                  <p key={bullet}>{bullet}</p>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-outline-val/20">
              {w.sensoryChips.map((chip) => (
                <span key={chip} className="px-2 py-0.5 bg-surface-low rounded font-mono text-[11px] text-on-surface-variant">{chip}</span>
              ))}
            </div>
          </div>
        </div>

      </section>
    </motion.div>
  );
}
