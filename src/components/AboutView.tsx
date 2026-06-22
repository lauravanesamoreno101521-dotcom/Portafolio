import { motion } from 'motion/react';
import { LineChart, Zap, MapPin } from 'lucide-react';

export default function AboutView() {
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
              <h3 className="font-sans text-2xl md:text-3xl font-extrabold text-on-surface mb-6">About Me</h3>
              <div className="text-on-surface-variant text-base leading-relaxed mb-8 max-w-2xl space-y-4">
                <p>
                  Professional specialized in leading food safety, quality, and compliance processes in the food and beverage industry. I have experience managing audits, continuous improvement, and operational excellence, focusing my efforts on ensuring safe, efficient, and reliable plant operations.
                </p>
                <p>
                  My approach combines strong technical knowledge, multidisciplinary team leadership, and strategic quality system management, enabling high performance standards, regulatory compliance, and customer satisfaction. I am committed to a culture of continuous improvement and to implementing solutions that create sustainable value for the organization.
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3" id="philosophy-meta-chips">
              <span className="px-4 py-2 border border-outline-val/40 rounded-full font-mono text-xs text-secondary hover:border-secondary hover:bg-secondary/5 transition-colors font-medium">BRCGS Food Safety</span>
              <span className="px-4 py-2 border border-outline-val/40 rounded-full font-mono text-xs text-secondary hover:border-secondary hover:bg-secondary/5 transition-colors font-medium">Advanced HACCP</span>
              <span className="px-4 py-2 border border-outline-val/40 rounded-full font-mono text-xs text-secondary hover:border-secondary hover:bg-secondary/5 transition-colors font-medium">Internal Auditing</span>
              <span className="px-4 py-2 border border-outline-val/40 rounded-full font-mono text-xs text-secondary hover:border-secondary hover:bg-secondary/5 transition-colors font-medium">Continuous Improvement</span>
            </div>
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-secondary/5 to-transparent rounded-tr-xl pointer-events-none"></div>
          </div>

          {/* Secondary stats items */}
          <div className="lg:col-span-4 flex flex-col gap-6" id="philosophy-stats-column">
            
            <div className="glass-card glass-card-hover p-6 rounded-xl bg-surface-highest/15 flex flex-col justify-between border-l-4 border-l-tertiary" id="accuracy-metric-card">
              <div className="flex justify-between items-start">
                <LineChart className="text-tertiary w-10 h-10" />
                <span className="font-mono text-[10px] text-tertiary tracking-widest font-bold uppercase">Internal Audits</span>
              </div>
              <div className="mt-4">
                <h4 className="text-3xl font-sans font-extrabold text-on-surface">5</h4>
                <p className="font-mono text-xs text-on-surface-variant mt-1">BRCGS Food Safety Issue 9</p>
              </div>
            </div>

            <div className="glass-card glass-card-hover p-6 rounded-xl bg-surface-highest/30 flex flex-col justify-between border-l-4 border-l-secondary" id="lighthouse-metric-card">
              <div className="flex justify-between items-start">
                <Zap className="text-secondary w-10 h-10" />
                <span className="font-mono text-[10px] text-secondary tracking-widest font-bold uppercase">External Audits</span>
              </div>
              <div className="mt-4">
                <h4 className="text-3xl font-sans font-extrabold text-on-surface">2</h4>
                <p className="font-mono text-xs text-on-surface-variant mt-1">Successfully completed (INVIMA and ICONTEC)</p>
              </div>
            </div>

            <div className="glass-card glass-card-hover p-6 rounded-xl bg-surface-highest/20 flex flex-col justify-between border-l-4 border-l-tertiary" id="vpo-audits-metric-card">
              <div className="flex justify-between items-start">
                <LineChart className="text-tertiary w-10 h-10" />
                <span className="font-mono text-[10px] text-tertiary tracking-widest font-bold uppercase">Management System Audits (VPO)</span>
              </div>
              <div className="mt-4">
                <h4 className="text-3xl font-sans font-extrabold text-on-surface">4</h4>
                <p className="font-mono text-xs text-on-surface-variant mt-1">Management system audits based on VPO</p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </motion.div>
  );
}
