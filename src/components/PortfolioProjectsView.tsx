import { motion } from 'motion/react';
import { FlaskConical, Factory, ShieldCheck } from 'lucide-react';

interface StarterProject {
  id: string;
  title: string;
  status: string;
  description: string;
  icon: 'flask' | 'factory' | 'shield';
}

export default function PortfolioProjectsView() {
  const starterProjects: StarterProject[] = [
    {
      id: 'project-1',
      title: 'Project Name 01',
      status: 'In preparation',
      description: 'Space reserved to add objectives, scope, and measurable results of the project.',
      icon: 'flask'
    },
    {
      id: 'project-2',
      title: 'Project Name 02',
      status: 'In preparation',
      description: 'Space reserved to add methodology, responsibilities, and key achievements.',
      icon: 'factory'
    },
    {
      id: 'project-3',
      title: 'Project Name 03',
      status: 'In preparation',
      description: 'Space reserved to add operational impact, indicators, and lessons learned.',
      icon: 'shield'
    }
  ];

  const getProjectIcon = (icon: StarterProject['icon']) => {
    switch (icon) {
      case 'flask':
        return <FlaskConical className="w-6 h-6 text-secondary" />;
      case 'factory':
        return <Factory className="w-6 h-6 text-secondary" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-secondary" />;
    }
  };

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
            Dedicated section to document strategic and technical projects. This page is ready to be filled with your
            real project information.
          </p>
        </div>
      </section>

      <section className="mb-10" id="projects-starter-grid-section">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" id="projects-starter-grid">
          {starterProjects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="glass-card glass-card-hover p-6 rounded-xl border border-outline-val/20"
              id={`starter-project-card-${project.id}`}
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="p-2.5 rounded-md bg-surface-high/40 border border-outline-val/20">
                  {getProjectIcon(project.icon)}
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-secondary font-bold">
                  {project.status}
                </span>
              </div>

              <h3 className="font-sans text-xl font-bold text-on-surface mb-2">{project.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{project.description}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
