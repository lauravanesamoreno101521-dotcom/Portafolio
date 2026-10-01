import { motion } from 'motion/react';
import { LineChart, Zap } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function AboutView() {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.6 }}
      className="relative z-10"
      id="about-view-container"
    >
      {/* Bento Grid for Skills & Values */}
      <section className="mb-10" id="philosophy-skills-bento">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* Main Philosophy Card */}
          <div className="lg:col-span-8 glass-card glass-card-hover p-8 md:p-10 flex flex-col justify-between rounded-xl relative overflow-hidden" id="philosophy-core-card">
            <div>
              <h3 className="font-sans text-2xl md:text-3xl font-extrabold text-on-surface mb-6">
                {t.about.heading} <span className="text-secondary">{t.about.headingHighlight}</span>
              </h3>
              <div className="text-on-surface-variant text-base leading-relaxed mb-8 max-w-2xl space-y-4">
                <p>{t.about.paragraph1}</p>
                <p>{t.about.paragraph2}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3" id="philosophy-meta-chips">
              {t.about.chips.map((chip, idx) => (
                <span
                  key={chip}
                  className={`px-4 py-2 border border-outline-val/40 rounded-full font-mono text-xs transition-colors font-medium ${
                    idx < 4
                      ? 'text-secondary hover:border-secondary hover:bg-secondary/5'
                      : 'text-tertiary hover:border-tertiary hover:bg-tertiary/5'
                  }`}
                >
                  {chip}
                </span>
              ))}
            </div>
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-secondary/5 to-transparent rounded-tr-xl pointer-events-none"></div>
          </div>

          {/* Secondary stats items */}
          <div className="lg:col-span-4 flex flex-col gap-6" id="philosophy-stats-column">

            <div className="glass-card glass-card-hover p-6 rounded-xl bg-surface-highest/15 flex flex-col justify-between border-l-4 border-l-tertiary" id="accuracy-metric-card">
              <div className="flex justify-between items-start">
                <LineChart className="text-tertiary w-10 h-10" />
                <span className="font-mono text-[10px] text-tertiary tracking-widest font-bold uppercase">{t.about.stats.internalAudits.label}</span>
              </div>
              <div className="mt-4">
                <h4 className="text-3xl font-sans font-extrabold text-on-surface">5</h4>
                <p className="font-mono text-xs text-on-surface-variant mt-1">{t.about.stats.internalAudits.desc}</p>
              </div>
            </div>

            <div className="glass-card glass-card-hover p-6 rounded-xl bg-surface-highest/30 flex flex-col justify-between border-l-4 border-l-secondary" id="lighthouse-metric-card">
              <div className="flex justify-between items-start">
                <Zap className="text-secondary w-10 h-10" />
                <span className="font-mono text-[10px] text-secondary tracking-widest font-bold uppercase">{t.about.stats.externalAudits.label}</span>
              </div>
              <div className="mt-4">
                <h4 className="text-3xl font-sans font-extrabold text-on-surface">2</h4>
                <p className="font-mono text-xs text-on-surface-variant mt-1">{t.about.stats.externalAudits.desc}</p>
              </div>
            </div>

            <div className="glass-card glass-card-hover p-6 rounded-xl bg-surface-highest/20 flex flex-col justify-between border-l-4 border-l-tertiary" id="vpo-audits-metric-card">
              <div className="flex justify-between items-start">
                <LineChart className="text-tertiary w-10 h-10" />
                <span className="font-mono text-[10px] text-tertiary tracking-widest font-bold uppercase">{t.about.stats.vpoAudits.label}</span>
              </div>
              <div className="mt-4">
                <h4 className="text-3xl font-sans font-extrabold text-on-surface">4</h4>
                <p className="font-mono text-xs text-on-surface-variant mt-1">{t.about.stats.vpoAudits.desc}</p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </motion.div>
  );
}
