import { motion } from 'motion/react';
import { Beaker, Leaf, Palette, Droplets, GraduationCap, Terminal as TerminalIcon, Award } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function ProjectsView() {
  const { t } = useLanguage();
  const edu = t.education;

  const getProjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'leaf':
        return <Leaf className="w-6 h-6 text-secondary" />;
      case 'palette':
        return <Palette className="w-6 h-6 text-secondary" />;
      case 'droplets':
        return <Droplets className="w-6 h-6 text-secondary" />;
      default:
        return <Beaker className="w-6 h-6 text-secondary" />;
    }
  };

  const getEduIcon = (idx: number) => {
    // Preserve original icon assignment by index (school/terminal/verified pattern)
    const iconMap = ['school', 'school', 'school', 'verified', 'verified', 'terminal', 'school'];
    switch (iconMap[idx]) {
      case 'terminal':
        return <TerminalIcon className="w-8 h-8 text-secondary shrink-0" />;
      case 'verified':
        return <Award className="w-8 h-8 text-secondary shrink-0" />;
      default:
        return <GraduationCap className="w-8 h-8 text-secondary shrink-0" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.6 }}
      className="relative z-10"
      id="education-view-container"
    >
      <section className="mb-14 pt-4" id="education-hero-header">
        <div className="max-w-3xl">
          <h1 className="font-sans text-5xl font-extrabold text-on-surface mb-6">
            {edu.headingLine1} <span className="text-secondary">{edu.headingHighlight}</span>
          </h1>
          <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">
            {edu.subtitle}
          </p>
        </div>
      </section>

      <section className="bg-surface-low border border-outline-val/10 rounded-xl py-12 md:py-16 px-6 md:px-10 mb-16" id="education-timeline-section">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="font-mono text-xs text-secondary tracking-widest font-semibold uppercase block mb-2">{edu.pathLabel}</span>
          <h2 className="font-sans text-3xl font-extrabold text-on-surface">{edu.pathHeading}</h2>
          <p className="text-on-surface-variant text-sm mt-3 leading-relaxed">
            {edu.pathSubtitle}
          </p>
        </div>

        <div className="relative" id="timeline-flow-box">
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-[85%] timeline-line opacity-25 hidden md:block"></div>
          <div className="space-y-12 relative" id="timeline-roadmap-items">
            {edu.history.map((item, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                key={item.degree}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                id={`timeline-row-${idx}`}
              >
                <div className={`${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-2 md:pl-12'}`} id={`info-col-${idx}`}>
                  <span className="font-mono text-xs text-secondary font-bold mb-1.5 block tracking-wider">{item.years}</span>
                  <h3 className="font-sans text-xl font-bold text-on-surface mb-2">{item.degree}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{item.description}</p>
                </div>

                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-background-dark border-2 border-secondary rounded-full z-10 hover:scale-125 hover:bg-secondary transition-all" id={`node-${idx}`}></div>

                <div className={`${idx % 2 === 0 ? 'md:pl-12' : 'md:order-1 md:pr-12'}`} id={`feature-col-${idx}`}>
                  <div className="glass-card glass-card-hover p-6 rounded-lg flex items-start gap-4" id={`glass-edu-card-${idx}`}>
                    {getEduIcon(idx)}
                    <div>
                      <p className="font-mono text-xs text-secondary/80 font-bold tracking-widest uppercase">{item.techStackTitle}</p>
                      <p className="text-sm font-semibold text-on-surface mt-1">{item.techStack}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-14" id="recent-certifications-section">
        <div className="mb-8">
          <h2 className="font-sans text-3xl font-extrabold text-on-surface mb-2">
            {edu.certHeadingLine1} <span className="text-secondary">{edu.certHeadingHighlight}</span>
          </h2>
          <p className="text-on-surface-variant text-sm md:text-base">
            {edu.certSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" id="certifications-grid">
          {edu.certifications.map((cert, idx) => (
            <motion.article
              key={cert.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="glass-card glass-card-hover p-6 rounded-xl border border-outline-val/20"
              id={`cert-card-${idx}`}
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-secondary font-bold">
                  {cert.platform}
                </span>
                <span
                  className={`px-2 py-0.5 rounded font-mono text-[10px] uppercase tracking-widest border ${
                    cert.category === 'English' || cert.category === 'Inglés'
                      ? 'text-secondary border-secondary/35 bg-secondary/10'
                      : 'text-tertiary border-tertiary/35 bg-tertiary/10'
                  }`}
                >
                  {cert.category}
                </span>
              </div>

              <h3 className="font-sans text-lg font-bold text-on-surface mb-2 leading-snug">
                {cert.title}
              </h3>
              <p className="text-sm text-on-surface-variant">{cert.approvedDate}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mb-10" id="projects-classroom-section">
        <div className="mb-8">
          <h2 className="font-sans text-3xl font-extrabold text-on-surface mb-2">
            {edu.classroomHeadingLine1} <span className="text-secondary">{edu.classroomHeadingHighlight}</span>
          </h2>
          <p className="text-on-surface-variant text-sm md:text-base">
            {edu.classroomSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="projects-grid">
        {edu.classroomProjects.map((project, idx) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: idx * 0.06 }}
            className="glass-card glass-card-hover p-6 rounded-xl border border-outline-val/20"
            id={`project-card-${idx}`}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="p-2.5 rounded-md bg-surface-high/40 border border-outline-val/20">
                {getProjectIcon(project.icon)}
              </div>
              <span className="font-mono text-xs text-secondary font-bold tracking-wider">
                {project.year}
              </span>
            </div>

            <h3 className="font-sans text-xl font-bold text-on-surface mb-2">{project.title}</h3>
            <p className="font-mono text-[11px] text-secondary/85 uppercase tracking-wider mb-3">
              {project.course}
            </p>
            <p className="text-sm text-on-surface-variant leading-relaxed">{project.description}</p>
          </motion.article>
        ))}
        </div>
      </section>
    </motion.div>
  );
}
