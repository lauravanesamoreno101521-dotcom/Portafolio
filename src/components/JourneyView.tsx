import { motion } from 'motion/react';
import { Target, Server, ChevronRight, Binary, Cpu, MessageSquare, Quote } from 'lucide-react';
import { JourneyStep } from '../types';

export default function JourneyView() {
  // Direct Image URLs provided from HTML specs
  const phase1Img = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmHJr2BOXkXuF6t51wXeDkZVUD94QN-BjscNevSvmXelfnAkLrFQmRTyg577trluc415yxMqFCKMl66sjIbNWWcaCxpSIfEZC_L0sQYm-rTePTj-2y9lDfGDIjQC2NttceQ3AO5vLT3kkiJQqXfusL4iOHqMjGitJg_GNAE6ZCsOow5Z8J8rZ-0om-fEEhoXFSZu9yKJCIYJ7t9o_C1mJ4kTfjNWajYyXGOYygbjVpbIDFk7nFyxQc-yxt15MNyn47_cgUU38NG9M';
  
  const phase2Img = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIITp74IDshkBGMjcdUeWzY6jehYpj0A6yjfskZjTaulIiGG-ZlN5CbUAaB2lYdPC3azY5NKIEan92WpDEEZmRDAumgjOS7VpffH6mXMD_5go0vheCIRwO1kwte10EKtx6qSj8o4jQfb9GulfHLhstjdhTn2aqT7GXg-8hFnHYnUV_sRo6WcRoMmJEs5rO3EwGEPVO75U6pAJ8KoOpzbDO5I_iwEo3aj9d3DY99_ElGlpJTOo_2kWrEFZ49w78ePnNB4lbBkn4xE8';
  
  const avatar1Img = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMWQ8R411zAMqHHlFZ_DHl-pZjDLttPcyWnbwMhqW3WlcIervJ4mPmV58rz81XBzGXw2nHHi6KQGF4iNpLZxqjmeTtIN2FOZdPYJiO7gnvRPw8VEy-GASt_uSDJ7Uor77buLQ96IdXe0pzbSmufq00K4Css3GFO_mf-vOsZqskJsyX-a0PC7Itq3eczZF3Uacns8UrmY3I5LdfELKL8LDQ9mzNCNKxXIkObRwhMswRNLM74iDgtsj6D2lpzryCU9N5X2s18LtSUBI';
  
  const avatar2Img = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQrbEz2Za407q-FfuSoNXj7ypNwIWSOnRIJ5Y7JvuVFLqMoFKE7WllgIony5a9C_Tn2cQuL_t_FIxHAgz6iidITMSnAaA4xOsRZUr0O17H1NmAQgO8by1yp1jAwloOOJ1enKgxc5XWgXoIdJn4YJC-XSlXfHIYCgeZTq_aCRqBL6QeMl5_WK1sTA3SLI6Jbpfjq9vCBfm_lvdAO7mI6Wpp2q9G6674dJTF2FoE_EszEO6T8aYkhbR-kXK6dm_wSlX1bx7iFLlK41U';

  const storySteps: JourneyStep[] = [
    {
      id: 'journey-phase-1',
      period: '2015 — 2018',
      title: 'Foundation of Algorithms',
      description: 'Focus on database structuring, logical algorithm compilation, data modeling and low-level system designs. Compiling predictive algorithms, clustering multi-dimensional datasets to refine analytical accuracy.',
      imageUrl: phase1Img,
      tags: ['R Language', 'Python', 'Linear Regression', 'Statistical Math']
    },
    {
      id: 'journey-phase-2',
      period: '2019 — PRESENT',
      title: 'Full Stack Integration',
      description: 'Connecting heavy analytical computational platforms with highly modular, performant, clean reactive web dashboards. Architecturing end-to-end applications to host complex user discovery streams.',
      imageUrl: phase2Img,
      tags: ['React', 'TypeScript', 'Node.js Cluster', 'Kafka', 'ETL Dataflow']
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.6 }}
      className="relative z-10"
      id="journey-view-container"
    >
      {/* Page Hero */}
      <section className="mb-14 pt-4" id="journey-hero-header">
        <div className="max-w-3xl">
          <h1 className="font-sans text-5xl font-extrabold text-on-surface mb-6">
            The Synthesis of <span className="text-secondary">Logic &amp; Art</span>
          </h1>
          <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">
            Where qualitative aesthetics meet quantitative architecture. An overview of the milestones that lead to systems-level thinking.
          </p>
        </div>
      </section>

      {/* Main Velocity Dial Gauge Display */}
      <section className="glass-card p-8 md:p-10 rounded-xl mb-16 flex flex-col lg:flex-row items-center gap-10" id="velocity-gauge-section">
        
        {/* SVG Dial node */}
        <div className="relative w-48 h-48 flex items-center justify-center shrink-0" id="radial-dial-wrapper">
          <svg className="w-full h-full transform -rotate-90">
            {/* Background Dial Circle */}
            <circle
              cx="96"
              cy="96"
              r="80"
              stroke="rgba(144, 144, 151, 0.1)"
              strokeWidth="8"
              fill="transparent"
            />
            {/* Active Dial Circle */}
            <motion.circle
              cx="96"
              cy="96"
              r="80"
              stroke="#5de6ff"
              strokeWidth="8"
              fill="transparent"
              strokeDasharray={2 * Math.PI * 80}
              initial={{ strokeDashoffset: 2 * Math.PI * 80 }}
              animate={{ strokeDashoffset: (2 * Math.PI * 80) * (1 - 0.998) }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute flex flex-col items-center justify-center text-center" id="dial-numerical-digits">
            <span className="text-4xl font-sans font-extrabold text-on-surface">99.8%</span>
            <span className="font-mono text-[9px] text-secondary tracking-widest font-bold uppercase mt-1">ALIGNMENT</span>
          </div>
        </div>

        {/* Status Copy columns */}
        <div className="flex-1 space-y-4" id="dial-description-col">
          <span className="font-mono text-xs text-secondary font-bold tracking-widest uppercase">SYNTACTIC CONVERGENCE</span>
          <h2 className="font-sans text-2xl md:text-3xl font-extrabold text-on-surface">Syntactic Alignment Velocity</h2>
          <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
            Measuring the seamless integration between highly fluid frontend interface templates and heavy cloud-hosted analytical schemas. Aligning pixels with queries to provide zero-latency insight streams.
          </p>
        </div>

      </section>

      {/* Story Path chronological timeline segment */}
      <section className="mb-20" id="story-milestones-timeline">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="font-mono text-xs text-secondary tracking-widest font-bold uppercase block mb-2">STORY PATH</span>
          <h2 className="font-sans text-3xl font-extrabold text-on-surface">Evolution of Paradigm</h2>
        </div>

        <div className="space-y-16" id="story-steps-history">
          {storySteps.map((step, idx) => (
            <div key={step.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" id={`journey-row-${idx}`}>
              {/* Picture asset side */}
              <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-2' : ''}`} id={`journey-media-${idx}`}>
                <div className="h-64 rounded-xl overflow-hidden glass-card relative group" id={`journey-media-card-${idx}`}>
                  {step.imageUrl && (
                    <img 
                      className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 filter brightness-90 saturate-75 group-hover:saturate-100" 
                      src={step.imageUrl} 
                      alt={`Landscape visual associated with ${step.title}`}
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>

              {/* Informational specs column */}
              <div className={`lg:col-span-7 flex flex-col justify-center space-y-4 ${idx % 2 === 1 ? 'lg:order-1' : ''}`} id={`journey-desc-${idx}`}>
                <span className="font-mono text-xs text-secondary font-bold tracking-wider">{step.period}</span>
                <h3 className="font-sans text-2xl font-bold text-on-surface">{step.title}</h3>
                <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
                  {step.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-3" id={`journey-tags-${idx}`}>
                  {step.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-surface-container border border-outline-val/20 rounded font-mono text-[11px] text-on-surface-variant">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Future Trajectory boards layout */}
      <section className="bg-surface-lowest border border-outline-val/15 rounded-xl p-8 md:p-10 mb-20" id="future-trajectory-section">
        <div className="mb-10 text-center lg:text-left">
          <span className="font-mono text-xs text-secondary tracking-widest font-bold uppercase block mb-2">FUTURE SCOPE</span>
          <h2 className="font-sans text-3xl font-extrabold text-on-surface">Target Flightpath</h2>
          <p className="text-xs text-on-surface-variant mt-2 max-w-xl">
            Sectors where I am currently centering deep architectural experiments to broaden the digital craftsman horizon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="future-cards-grid">
          
          <div className="glass-card p-6 flex flex-col justify-between rounded-lg hover:bg-surface-high/20" id="future-ai-card">
            <div>
              <div className="p-2.5 bg-surface-high/50 rounded-md inline-block mb-4 text-secondary">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-sans text-lg font-bold text-on-surface mb-2">AI-Powered Analytical Engines</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Integrating AI analytical agents directly into dashboard interfaces to support auto-discovery data highlights and responsive insights.
              </p>
            </div>
            <span className="font-mono text-[9px] text-secondary tracking-wider font-bold uppercase mt-6 block">STK: Gemini, PyTorch, LangChain</span>
          </div>

          <div className="glass-card p-6 flex flex-col justify-between rounded-lg hover:bg-surface-high/20" id="future-rust-card">
            <div>
              <div className="p-2.5 bg-surface-high/50 rounded-md inline-block mb-4 text-secondary">
                <Binary className="w-5 h-5" />
              </div>
              <h3 className="font-sans text-lg font-bold text-on-surface mb-2">Rust &amp; WebGPU</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Compiling native computational pipelines with WASM and rendering data frameworks locally over client GPUs at extreme rates.
              </p>
            </div>
            <span className="font-mono text-[9px] text-secondary tracking-wider font-bold uppercase mt-6 block">STK: Rust, WASM, WebGPU, WGSL</span>
          </div>

          <div className="glass-card p-6 flex flex-col justify-between rounded-lg hover:bg-surface-high/20 animate-pulse border-dashed" id="future-mentor-card">
            <div>
              <div className="p-2.5 bg-surface-high/50 rounded-md inline-block mb-4 text-tertiary">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-sans text-lg font-bold text-on-surface mb-2">Mentorship &amp; Ecosystems</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Engaging with developers, fostering modular components libraries, and mentoring teams into syntactic clean layouts.
              </p>
            </div>
            <span className="font-mono text-[9px] text-tertiary tracking-wider font-bold uppercase mt-6 block flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-tertiary rounded-full animate-ping"></span> ACTIVE
            </span>
          </div>

        </div>
      </section>

      {/* Testimonials / Co-Workers avatar blocks */}
      <section className="mb-10" id="testimonials-references">
        <div className="text-center max-w-xl mx-auto mb-16">
          <MessageSquare className="w-8 h-8 text-secondary mx-auto mb-4" />
          <span className="font-mono text-xs text-secondary tracking-widest font-bold uppercase block mb-2">PEER APPRAISALS</span>
          <h2 className="font-sans text-3xl font-extrabold text-on-surface">Co-worker Perspectives</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="testimonials-grid">
          
          {/* Card 1 */}
          <div className="glass-card p-8 rounded-xl relative hover:bg-surface-high/15 transition-all duration-300" id="testimonial-sarah">
            <Quote className="absolute top-6 right-6 w-12 h-12 text-secondary/5" />
            <p className="text-sm md:text-base text-on-surface-variant italic leading-relaxed mb-6">
              "Alex's unique ability to translate statistical algorithms into highly responsive web structures completely transformed our dashboard lifecycle. A rare talent."
            </p>
            
            <div className="flex gap-4 items-center border-t border-outline-val/20 pt-4" id="sarah-profile">
              <div className="w-12 h-12 bg-surface-container rounded-full overflow-hidden border border-secondary/25 shrink-0" id="sarah-avatar-box">
                <img 
                  className="w-full h-full object-cover filter brightness-95" 
                  src={avatar1Img} 
                  alt="Sarah Jenkins"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="text-sm font-bold text-on-surface">Sarah Jenkins</h4>
                <p className="font-mono text-[10px] text-secondary tracking-widest uppercase mt-0.5">Principal Engineer</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-card p-8 rounded-xl relative hover:bg-surface-high/15 transition-all duration-300" id="testimonial-victor">
            <Quote className="absolute top-6 right-6 w-12 h-12 text-secondary/5" />
            <p className="text-sm md:text-base text-on-surface-variant italic leading-relaxed mb-6">
              "Never seen an engineer who can optimize SQL clusters and design elegant Figma prototypes with the same degree of proficiency. An absolute asset."
            </p>
            
            <div className="flex gap-4 items-center border-t border-outline-val/20 pt-4" id="victor-profile">
              <div className="w-12 h-12 bg-surface-container rounded-full overflow-hidden border border-secondary/25 shrink-0" id="victor-avatar-box">
                <img 
                  className="w-full h-full object-cover filter brightness-95" 
                  src={avatar2Img} 
                  alt="Victor Vance"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="text-sm font-bold text-on-surface">Victor Vance</h4>
                <p className="font-mono text-[10px] text-secondary tracking-widest uppercase mt-0.5">Director of Product</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </motion.div>
  );
}
