import { motion } from 'framer-motion';
import { FaLightbulb, FaQuoteLeft, FaChartBar, FaBookOpen } from 'react-icons/fa';
import { researchStats } from '../data';

export default function Research() {
  return (
    <div className="pt-40 pb-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Research Header */}
        <div className="mb-24">
          <span className="text-teal font-black uppercase tracking-[0.3em] text-xs mb-4 block">Academic Contribution</span>
          <h1 className="executive-heading text-5xl md:text-7xl text-navy tracking-tighter">Research <span className="text-teal">Impact</span></h1>
          <p className="text-xl text-slate-500 mt-8 max-w-3xl leading-relaxed font-medium">
            Advancing the field of Information Security and AI through peer-reviewed publications,
            patented innovations, and doctoral supervision.
          </p>
        </div>

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

        {/* Patent & Supervision */}
        <div className="grid lg:grid-cols-2 gap-20 items-start mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-navy p-16 text-white relative overflow-hidden"
          >
            <FaQuoteLeft className="text-teal/10 text-[180px] absolute -top-10 -left-10" />
            <div className="relative z-10">
              <span className="inline-block px-4 py-1.5 bg-teal text-white text-[10px] font-black uppercase tracking-widest mb-8">Official Patent</span>
              <h3 className="text-3xl font-black mb-8 leading-tight tracking-tight">{researchStats.patent}</h3>
              <p className="text-white/50 text-lg leading-relaxed mb-10">
                A milestone innovation in data integration models published by the Office of Controller General of Patents, India.
              </p>
              <div className="w-16 h-1 bg-teal"></div>
            </div>
          </motion.div>
          <div className="space-y-12">
            <div className="professional-card p-12">
              <div className="w-12 h-12 bg-teal/10 rounded-sm flex items-center justify-center text-teal mb-6">
                <FaChartBar size={24} />
              </div>
              <h3 className="text-2xl font-black text-navy mb-4">Scholarly Supervision</h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                Successfully supervised <span className="text-navy font-black">{researchStats.scholars}</span>.
                Providing mentorship and guidance to the next generation of researchers in Cyber Security and Distributed Systems.
              </p>
            </div>
            <div className="professional-card p-12">
              <div className="w-12 h-12 bg-teal/10 rounded-sm flex items-center justify-center text-teal mb-6">
                <FaBookOpen size={24} />
              </div>
              <h3 className="text-2xl font-black text-navy mb-4">Total Publication Output</h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                Authored and co-authored over <span className="text-navy font-black">{researchStats.totalPublications}+</span> scientific works
                in leading international journals and prestigious conferences.
              </p>
            </div>
          </div>
        </div>
        {/* Call to action */}
        <section className="py-20 bg-light-gray rounded-sm text-center">
          <h2 className="text-2xl font-black text-navy uppercase tracking-widest mb-8">Explore full Research Repository</h2>
          <button className="btn-teal">Request Research Portfolio</button>
        </section>
      </div>
    </div>
  );
}
