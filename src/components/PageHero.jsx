import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function PageHero({ title, subtitle, breadcrumbs }) {
  return (
    <section className="relative pt-48 pb-24 bg-navy overflow-hidden diagonal-divider">
      {/* Background Pattern/Texture */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/photo-01.jpg')] bg-cover bg-center grayscale"></div>
        <div className="absolute inset-0 bg-navy/80"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-3 mb-6 text-[11px] font-bold uppercase tracking-[0.3em]">
            <Link to="/" className="text-white hover:text-teal transition-colors">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-white/40">/</span>
                <Link 
                  to={crumb.href} 
                  className={i === breadcrumbs.length - 1 ? 'text-teal' : 'text-white hover:text-teal transition-colors'}
                >
                  {crumb.name}
                </Link>
              </div>
            ))}
          </nav>

          {/* Title & Subtitle */}
          <h1 className="executive-heading text-4xl md:text-6xl text-white tracking-tighter mb-4 leading-tight">
            {title.split(' ').map((word, i) => (
              <span key={i} className={i === title.split(' ').length - 1 ? 'text-teal' : ''}>
                {word}{' '}
              </span>
            ))}
          </h1>
          <p className="text-white text-lg md:text-xl font-semibold max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
