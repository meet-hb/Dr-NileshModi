import { motion } from 'framer-motion';
import { FaNewspaper, FaVideo, FaBroadcastTower, FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import PageHero from '../components/PageHero';

const mediaClips = [
  {
    type: "News",
    title: "BAOU Achieves Historic NAAC A++ Grade",
    source: "Gujarat Samachar",
    date: "July 2022",
    details: "Coverage of the institutional achievement under Prof. Modi's leadership."
  },
  {
    type: "Interview",
    title: "Future of Cyber Security in India",
    source: "Doordarshan (DD Girnar)",
    date: "January 2024",
    details: "Expert interview on rising digital threats and preventive measures."
  },
  {
    type: "Press Release",
    title: "New Research Grant for AI Lab",
    source: "Times of India",
    date: "May 2023",
    details: "Highlighting the INR 13.5 Lakh grant for SWAYAM course development."
  }
];

export default function Media() {
  return (
    <div>
      <PageHero 
        title="Media Coverage" 
        subtitle="Newspaper coverage, television interviews, and press releases featuring academic milestones and expert insights."
        breadcrumbs={[{ name: 'Media', href: '/media' }]}
      />

      <div className="container mx-auto px-6 lg:px-12 py-32">
        {/* Media Type Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
           <div className="professional-card p-12 text-center group">
              <FaNewspaper size={40} className="mx-auto mb-6 text-slate-300 group-hover:text-teal transition-colors" />
              <h3 className="text-xl font-black text-navy uppercase tracking-tighter">Print Media</h3>
              <p className="text-xs text-slate-400 mt-2 font-bold uppercase tracking-widest">Articles & Reports</p>
           </div>
           <div className="professional-card p-12 text-center group">
              <FaVideo size={40} className="mx-auto mb-6 text-slate-300 group-hover:text-teal transition-colors" />
              <h3 className="text-xl font-black text-navy uppercase tracking-tighter">Video Gallery</h3>
              <p className="text-xs text-slate-400 mt-2 font-bold uppercase tracking-widest">Interviews & Talks</p>
           </div>
           <div className="professional-card p-12 text-center group">
              <FaBroadcastTower size={40} className="mx-auto mb-6 text-slate-300 group-hover:text-teal transition-colors" />
              <h3 className="text-xl font-black text-navy uppercase tracking-tighter">Broadcasting</h3>
              <p className="text-xs text-slate-400 mt-2 font-bold uppercase tracking-widest">Radio & TV Appearances</p>
           </div>
        </div>

        {/* Media List */}
        <section>
          <div className="flex items-center gap-3 mb-16">
             <div className="w-10 h-2 bg-teal"></div>
             <h2 className="text-3xl font-black text-navy uppercase tracking-widest">Featured Coverage</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {mediaClips.map((clip, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-navy p-12 text-white rounded-sm relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity">
                  {clip.type === 'News' ? <FaNewspaper size={80} /> : <FaVideo size={80} />}
                </div>
                <div className="relative z-10">
                   <div className="flex items-center gap-3 mb-6">
                      <span className="px-3 py-1 bg-teal text-white text-[10px] font-black uppercase tracking-widest rounded-sm">{clip.type}</span>
                      <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">{clip.date}</span>
                   </div>
                   <h3 className="text-2xl font-black mb-4 tracking-tighter leading-tight group-hover:text-teal transition-colors">{clip.title}</h3>
                   <p className="text-teal font-bold text-sm mb-6 uppercase tracking-widest">{clip.source}</p>
                   <p className="text-sm text-white/50 leading-relaxed mb-10 max-w-md">{clip.details}</p>
                   <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest border-b border-teal py-1">
                      Read Full Article <FaExternalLinkAlt size={10} />
                   </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
