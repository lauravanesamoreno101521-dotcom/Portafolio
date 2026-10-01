import { motion } from 'motion/react';
import { Film, Waves, Heart, CircleDot } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const hobbyMeta = [
  { imageUrl: '/images/hobby-patinaje.png', icon: 'skating' as const },
  { imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80', icon: 'movies' as const },
  { imageUrl: 'https://images.unsplash.com/photo-1438029071396-1e831a7fa6d8?auto=format&fit=crop&w=1200&q=80', icon: 'swimming' as const },
  { imageUrl: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80', icon: 'family' as const }
];

export default function HobbiesView() {
  const { t } = useLanguage();
  const h = t.hobbies;
  const hobbies = h.items.map((item, idx) => ({ ...item, ...hobbyMeta[idx] }));

  const getIcon = (iconName: typeof hobbyMeta[number]['icon']) => {
    switch (iconName) {
      case 'movies':
        return <Film className="w-4 h-4 text-secondary" />;
      case 'swimming':
        return <Waves className="w-4 h-4 text-secondary" />;
      case 'family':
        return <Heart className="w-4 h-4 text-secondary" />;
      default:
        return <CircleDot className="w-4 h-4 text-secondary" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.6 }}
      className="relative z-10"
      id="hobbies-view-container"
    >
      {/* Header */}
      <section className="mb-14 pt-4" id="hobbies-hero-header">
        <div className="max-w-3xl">
          <h1 className="font-sans text-5xl font-extrabold text-on-surface mb-6">
            {h.headingLine1} <span className="text-secondary">{h.headingHighlight}</span>
          </h1>
          <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">
            {h.subtitle}
          </p>
        </div>
      </section>

      {/* Main hobbies grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16" id="hobbies-cards-grid">
        {hobbies.map((hobby, idx) => (
          <motion.article
            key={hobby.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: idx * 0.06 }}
            className="glass-card overflow-hidden group flex flex-col justify-between rounded-xl relative"
            id={`hobby-card-${idx}`}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 filter saturate-60 group-hover:saturate-100"
                src={hobby.imageUrl}
                alt={hobby.title}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/20 to-transparent"></div>
            </div>
            <div className="p-6 bg-surface-low" id={`hobby-desc-${idx}`}>
              <div className="flex items-center gap-2 mb-2">
                {getIcon(hobby.icon)}
                <span className="font-mono text-[10px] tracking-widest text-secondary uppercase font-bold">{hobby.title}</span>
              </div>
              <h3 className="font-sans text-lg font-bold text-on-surface mb-1">{hobby.subtitle}</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">{hobby.description}</p>
            </div>
          </motion.article>
        ))}
      </section>

    </motion.div>
  );
}
