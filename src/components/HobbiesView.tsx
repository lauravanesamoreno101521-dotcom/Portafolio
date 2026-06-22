import { motion } from 'motion/react';
import { Film, Waves, Heart, CircleDot } from 'lucide-react';

interface HobbyCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  icon: 'skating' | 'movies' | 'swimming' | 'family';
}

export default function HobbiesView() {
  const hobbies: HobbyCard[] = [
    {
      id: 'hobby-skating',
      title: 'Skating',
      subtitle: 'Balance in Motion',
      description: 'Speed, balance, and freedom come together in every ride on wheels.',
      imageUrl: '/images/hobby-patinaje.png',
      icon: 'skating'
    },
    {
      id: 'hobby-movies',
      title: 'Movies',
      subtitle: 'Stories on Screen',
      description: 'Exploring worlds, emotions, and adventures through stories that inspire and entertain.',
      imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80',
      icon: 'movies'
    },
    {
      id: 'hobby-swimming',
      title: 'Swimming',
      subtitle: 'Between Waves and Goals',
      description: 'An opportunity to clear my mind, push limits, and enjoy the calm of the water.',
      imageUrl: 'https://images.unsplash.com/photo-1438029071396-1e831a7fa6d8?auto=format&fit=crop&w=1200&q=80',
      icon: 'swimming'
    },
    {
      id: 'hobby-family',
      title: 'Family',
      subtitle: 'Moments That Matter',
      description: 'Sharing laughter, conversations, and experiences that strengthen life\'s most valuable bonds.',
      imageUrl: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80',
      icon: 'family'
    }
  ];

  const getIcon = (iconName: HobbyCard['icon']) => {
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
            Beyond <span className="text-secondary">Code</span>
          </h1>
          <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">
            Every hobby is an opportunity to learn, disconnect, and find new sources of inspiration. From the energy of movement to shared moments with the people I value most, these activities are part of my personal growth and daily balance.
          </p>
        </div>
      </section>

      {/* Main hobbies grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16" id="hobbies-cards-grid">
        {hobbies.map((hobby, idx) => (
          <motion.article
            key={hobby.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: idx * 0.06 }}
            className="glass-card overflow-hidden group flex flex-col justify-between rounded-xl relative"
            id={`hobby-card-${hobby.id}`}
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
            <div className="p-6 bg-surface-low" id={`hobby-desc-${hobby.id}`}>
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
