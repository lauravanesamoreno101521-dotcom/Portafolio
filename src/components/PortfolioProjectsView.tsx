import { motion } from 'motion/react';
import { ExternalLink, Lock } from 'lucide-react';

interface RealProject {
  id: string;
  title: string;
  status: string;
  description: string;
  image: string;
  link: string | null;
  lockedNote?: string;
}

export default function PortfolioProjectsView() {
  const realProjects: RealProject[] = [
    {
      id: 'project-sudoku',
      title: 'Sudoku Infinity',
      status: 'Live',
      description: 'Interactive Sudoku game built with React, featuring real-time rule validation (rows, columns, and 3×3 blocks), a free play mode, and a registered mode to track streaks and rankings.',
      image: '/images/project-sudoku-infinity.png',
      link: 'https://sudoku-three-gray.vercel.app/'
    },
    {
      id: 'project-tablero-sgi',
      title: 'Tablero de Control SGI — Emprestur',
      status: 'Confidential',
      description: 'Management System indicator dashboard for a transportation company: tracking findings, closure rate, internal/external audits, and monthly trends.',
      image: '/images/project-tablero-control-sgi.png',
      link: null,
      lockedNote: 'Illustrative screenshot. No public access due to the confidentiality of the company’s data.'
    },
    {
      id: 'project-centro-control-sgi',
      title: 'Centro de Control SGI',
      status: 'Live',
      description: 'Visual, interactive Management System panel (Quality, Environmental, Occupational Health & Safety, Road Safety), presenting modules and technical profiles in an engaging, easy-to-follow format.',
      image: '/images/project-centro-control-sgi.png',
      link: 'https://centro-de-control-sgi.vercel.app/'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.6 }}
      className="relative z-10"
      id="projects-view-container"
    >
      <section className="mb-14 pt-4" id="projects-hero-header">
        <div className="max-w-3xl">
          <h1 className="font-sans text-5xl font-extrabold text-on-surface mb-6">
            Professional <span className="text-secondary">Projects</span>
          </h1>
          <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">
            Selected projects combining data, software fundamentals, and quality/process management.
          </p>
        </div>
      </section>

      <section className="mb-10" id="projects-starter-grid-section">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" id="projects-starter-grid">
          {realProjects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="glass-card glass-card-hover rounded-xl border border-outline-val/20 overflow-hidden flex flex-col"
              id={`starter-project-card-${project.id}`}
            >
              <div className="relative h-44 overflow-hidden bg-surface-high/40" id={`project-image-wrap-${project.id}`}>
                <img
                  src={project.image}
                  alt={`${project.title} preview screenshot`}
                  className="w-full h-full object-cover object-top"
                />
                <span
                  className={`absolute top-3 right-3 px-2.5 py-1 rounded font-mono text-[10px] uppercase tracking-widest border backdrop-blur-sm ${
                    project.status === 'Confidential'
                      ? 'text-tertiary border-tertiary/40 bg-background-dark/70'
                      : 'text-secondary border-secondary/40 bg-background-dark/70'
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-sans text-xl font-bold text-on-surface mb-2">{project.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-4 flex-1">{project.description}</p>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-secondary hover:text-on-surface transition-colors"
                    id={`project-link-${project.id}`}
                  >
                    View Project <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <div className="flex items-start gap-2 text-on-surface-variant/70" id={`project-locked-${project.id}`}>
                    <Lock className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span className="font-mono text-[11px] leading-relaxed">{project.lockedNote}</span>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
