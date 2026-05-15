import { motion } from 'framer-motion';
import { FaBookOpen, FaChartBar, FaQuoteLeft, FaFileAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { researchStats } from '../data';
import PageHero from '../components/PageHero';

export default function Publications() {
  return (
    <div>
      <PageHero
        title="Scholarly Publications"
        subtitle="A comprehensive record of 105+ peer-reviewed research works in international journals and prestigious conferences."
        breadcrumbs={[{ name: 'Publications', href: '/publications' }]}
      />
      <div className="container mx-auto px-6 lg:px-12 py-32">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {researchStats.stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white border-b-4 border-teal p-12 text-center shadow-xl shadow-slate-100/50"
            >
              <div className="text-5xl md:text-6xl font-black text-navy leading-none mb-3 tracking-tighter">{stat.count}</div>
              <div className="text-[10px] font-black uppercase text-slate-400 tracking-[0.25em]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        {/* Patent Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-navy p-16 text-white rounded-sm relative overflow-hidden mb-32"
        >
          <FaQuoteLeft className="text-teal/10 text-[180px] absolute -top-10 -left-10" />
          <div className="relative z-10 max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-teal text-white text-[10px] font-black uppercase tracking-widest mb-8">Published Patent</span>
            <h3 className="text-3xl font-black mb-6 leading-tight tracking-tight">{researchStats.patent}</h3>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              Recognized contribution to Data Resource Systems and Integration Models.
            </p>
            <div className="w-16 h-1 bg-teal"></div>
          </div>
        </motion.div>
        {/* Selected Works */}
        <section>
          <div className="flex items-center gap-3 mb-16">
            <div className="w-10 h-2 bg-teal"></div>
            <h2 className="text-3xl font-black text-navy uppercase tracking-widest">Selected Research Papers</h2>
          </div>
          <div className="space-y-6">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="professional-card p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <FaFileAlt className="text-teal" />
                    <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Journal Publication | 2023</span>
                  </div>
                  <h3 className="text-xl font-black text-navy group-hover:text-teal transition-colors">Advanced Security Models in Cloud Computing Architectures</h3>
                </div>
                <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-navy border-b-2 border-teal py-1">
                  View DOI <FaExternalLinkAlt size={10} />
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
