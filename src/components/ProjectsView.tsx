import { motion } from 'motion/react';
import { Beaker, Leaf, Palette, Droplets, GraduationCap, Terminal as TerminalIcon, Award } from 'lucide-react';
import { EducationItem } from '../types';

interface ProjectItem {
  id: string;
  year: string;
  title: string;
  course: string;
  description: string;
  icon: 'leaf' | 'palette' | 'droplets' | 'beaker';
}

interface CertificationItem {
  id: string;
  title: string;
  approvedDate: string;
  platform: string;
  category: 'English' | 'Software/Data';
}

export default function ProjectsView() {
  const educationHistory: EducationItem[] = [
    {
      id: 'edu-0g',
      years: '2022',
      degree: 'Industrial Chemistry',
      description: 'ITM Metropolitan Technological Institute, Medellín, Antioquia.',
      icon: 'school',
      techStackTitle: 'Institution',
      techStack: 'ITM Metropolitan Technological Institute'
    },
    {
      id: 'edu-0f',
      years: '2021',
      degree: 'Training in "Nano-Biolubricants"',
      description: 'Training Cycles "Young ITM Researchers and Innovators 2021".',
      icon: 'school',
      techStackTitle: 'Institution',
      techStack: 'ITM Metropolitan Technical Institute'
    },
    {
      id: 'edu-0e',
      years: '2021',
      degree: 'Training Course in Latex Utilization, Properties, Applications, and State of the Art',
      description: 'ITM Metropolitan Technical Institute.',
      icon: 'school',
      techStackTitle: 'Institution',
      techStack: 'ITM Metropolitan Technical Institute'
    },
    {
      id: 'edu-0d',
      years: '2015',
      degree: 'Diploma in Artisan Bakery and Pastry',
      description: 'PONAC National Polytechnic, Manizales, Caldas.',
      icon: 'verified',
      techStackTitle: 'Institution',
      techStack: 'PONAC National Polytechnic'
    },
    {
      id: 'edu-0c',
      years: '2015',
      degree: 'Vocational Technician in Gastronomic Cooking',
      description: 'Manizales, Caldas.',
      icon: 'verified',
      techStackTitle: 'Program',
      techStack: 'Gastronomic Cooking'
    },
    {
      id: 'edu-0b',
      years: '2013',
      degree: 'Systems Technician',
      description: 'SENA National Learning Service, Villamaría, Caldas.',
      icon: 'terminal',
      techStackTitle: 'Institution',
      techStack: 'SENA'
    },
    {
      id: 'edu-0',
      years: '2013',
      degree: 'Technical High School Diploma',
      description: 'Santa Luisa de Marillac Educational Institution, Villamaría, Caldas.',
      icon: 'school',
      techStackTitle: 'Institution',
      techStack: 'Santa Luisa de Marillac'
    }
  ];

  const classroomProjects: ProjectItem[] = [
    {
      id: 'proj-1',
      year: '2020',
      title: 'Biodegradable Polymer from Avocado Seed',
      course: 'Classroom Project',
      description: 'Post-harvest product utilization for the development of biodegradable materials.',
      icon: 'leaf'
    },
    {
      id: 'proj-2',
      year: '2020',
      title: 'Cosmetic and Pharmaceutical Products',
      course: 'With Professor Guillermo Sánchez Sánchez',
      description: 'Product formulation and analysis in an academic context, focused on quality and industrial application.',
      icon: 'beaker'
    },
    {
      id: 'proj-3',
      year: '2018',
      title: 'Natural Dye Extraction',
      course: 'Industrial Organic Chemistry - Professor Juliana Nanclares',
      description: 'Extraction and evaluation of dyes using naturally sourced materials.',
      icon: 'palette'
    },
    {
      id: 'proj-4',
      year: '2017',
      title: 'Water Purification',
      course: 'Analytical Chemistry - Professor Juliana Nanclares',
      description: 'Development of a water purification process as a university laboratory practice.',
      icon: 'droplets'
    }
  ];

  const recentCertifications: CertificationItem[] = [
    {
      id: 'cert-english-present-simple',
      title: 'Basic English Course A1: Present Simple',
      approvedDate: 'Approved on June 19, 2026',
      platform: 'Platzi',
      category: 'English'
    },
    {
      id: 'cert-english-verb-to-be',
      title: 'Basic English Course A1: Verb To Be',
      approvedDate: 'Approved on June 18, 2026',
      platform: 'Platzi',
      category: 'English'
    },
    {
      id: 'cert-english-beginners',
      title: 'Basic English Course A1 for Beginners',
      approvedDate: 'Approved on June 16, 2026',
      platform: 'Platzi',
      category: 'English'
    },
    {
      id: 'cert-python-fundamentals',
      title: 'Python Fundamentals',
      approvedDate: 'Approved on July 15, 2026',
      platform: 'Platzi',
      category: 'Software/Data'
    },
    {
      id: 'cert-software-fundamentals',
      title: 'Software Engineering Fundamentals',
      approvedDate: 'Approved on June 19, 2026',
      platform: 'Platzi',
      category: 'Software/Data'
    },
    {
      id: 'cert-data-fundamentals',
      title: 'Data Engineering Fundamentals',
      approvedDate: 'Approved on June 19, 2026',
      platform: 'Platzi',
      category: 'Software/Data'
    }
  ];

  const getProjectIcon = (iconName: ProjectItem['icon']) => {
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

  const getEduIcon = (iconName: string) => {
    switch (iconName) {
      case 'school':
        return <GraduationCap className="w-8 h-8 text-secondary shrink-0" />;
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
            Academic <span className="text-secondary">Education</span>
          </h1>
          <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">
            Academic and technical background, followed by classroom projects developed during the degree.
          </p>
        </div>
      </section>

      <section className="bg-surface-low border border-outline-val/10 rounded-xl py-12 md:py-16 px-6 md:px-10 mb-16" id="education-timeline-section">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="font-mono text-xs text-secondary tracking-widest font-semibold uppercase block mb-2">Education Path</span>
          <h2 className="font-sans text-3xl font-extrabold text-on-surface">Academic Journey</h2>
          <p className="text-on-surface-variant text-sm mt-3 leading-relaxed">
            Timeline of academic, technical, and complementary training.
          </p>
        </div>

        <div className="relative" id="timeline-flow-box">
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-[85%] timeline-line opacity-25 hidden md:block"></div>
          <div className="space-y-12 relative" id="timeline-roadmap-items">
            {educationHistory.map((item, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                key={item.id}
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
                    {getEduIcon(item.icon)}
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
            Recent <span className="text-secondary">Certifications</span>
          </h2>
          <p className="text-on-surface-variant text-sm md:text-base">
            Latest certifications in English and software/data fundamentals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" id="certifications-grid">
          {recentCertifications.map((cert, idx) => (
            <motion.article
              key={cert.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="glass-card glass-card-hover p-6 rounded-xl border border-outline-val/20"
              id={`cert-card-${cert.id}`}
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-secondary font-bold">
                  {cert.platform}
                </span>
                <span
                  className={`px-2 py-0.5 rounded font-mono text-[10px] uppercase tracking-widest border ${
                    cert.category === 'English'
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
            Classroom <span className="text-secondary">Projects</span>
          </h2>
          <p className="text-on-surface-variant text-sm md:text-base">
            Applied industrial chemistry projects developed during the academic stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="projects-grid">
        {classroomProjects.map((project, idx) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: idx * 0.06 }}
            className="glass-card glass-card-hover p-6 rounded-xl border border-outline-val/20"
            id={`project-card-${project.id}`}
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
