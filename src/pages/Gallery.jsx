import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearchPlus, FaImage, FaMapMarkerAlt } from 'react-icons/fa';
import PageHero from '../components/PageHero';

const galleryPhotos = [
  { id: 1, title: "NAAC A++ Felicitation", category: "Milestones", date: "2022", location: "BAOU Campus" },
  { id: 2, title: "International IT Summit", category: "Speaking", date: "2023", location: "Gandhinagar" },
  { id: 3, title: "Academic Council Session", category: "Milestones", date: "2024", location: "Ahmedabad" },
  { id: 4, title: "Expert Lecture at GTU", category: "Speaking", date: "2024", location: "GTU" },
  { id: 5, title: "SWAYAM Course Launch", category: "Events", date: "2023", location: "New Delhi" },
  { id: 6, title: "Convocation Ceremony", category: "Events", date: "2022", location: "BAOU" },
  { id: 7, title: "Cyber Security Workshop", category: "Events", date: "2024", location: "Virtual" },
  { id: 8, title: "Vibrant Gujarat Delegation", category: "Milestones", date: "2024", location: "Gift City" },
];
export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const categories = ['All', 'Events', 'Milestones', 'Speaking'];
  const filteredPhotos = activeCategory === 'All'
    ? galleryPhotos
    : galleryPhotos.filter(photo => photo.category.toLowerCase() === activeCategory.toLowerCase());
  const displayedPhotos = filteredPhotos.slice(0, visibleCount);
  return (
    <div>
      <PageHero
        title="Visual Journey"
        subtitle="A curated gallery capturing academic milestones, leadership ceremonies, and professional engagements across the globe."
        breadcrumbs={[{ name: 'Gallery', href: '/gallery' }]}
      />
      <div className="container mx-auto px-6 lg:px-12 py-32">
        {/* Gallery Intro */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-teal font-black uppercase tracking-[0.3em] text-xs mb-4 block">Archive</span>
            <h2 className="executive-heading text-4xl text-navy tracking-tighter">Capturing <span className="text-teal">Milestones</span></h2>
          </div>
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setVisibleCount(6);
                }}
                className={`px-8 py-3 border-2 text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${activeCategory === cat
                  ? 'border-navy bg-navy text-white shadow-xl'
                  : 'border-slate-100 text-slate-400 hover:border-teal hover:text-teal'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        {/* Filtered Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[600px]"
        >
          <AnimatePresence mode="popLayout">
            {displayedPhotos.map((photo) => (
              <motion.div
                layout
                key={photo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative group rounded-2xl overflow-hidden shadow-xl cursor-pointer"
                onClick={() => setSelectedImage(photo)}
              >
                <div className="bg-light-gray aspect-[3/4] relative">
                  <img src="/photo-01.jpg" alt={photo.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10 transform translate-y-4 group-hover:translate-y-0">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-teal text-white text-[10px] font-black uppercase tracking-widest rounded-sm">{photo.category}</span>
                      <span className="text-white/40 text-[10px] font-black">{photo.date}</span>
                    </div>
                    <h3 className="text-2xl font-black text-white mb-6 leading-tight tracking-tighter">{photo.title}</h3>
                    <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-white/40 text-[10px] font-black uppercase tracking-widest">
                        <FaMapMarkerAlt className="text-teal" /> {photo.location}
                      </div>
                      <div className="w-10 h-10 bg-teal text-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                        <FaSearchPlus size={14} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {visibleCount < filteredPhotos.length && (
          <div className="flex justify-center mt-20">
            <button
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="group flex flex-col items-center gap-4 text-navy hover:text-teal transition-colors"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Load More Milestones</span>
              <div className="w-12 h-12 rounded-full border-2 border-navy/10 group-hover:border-teal flex items-center justify-center transition-colors">
                <FaImage className="text-navy group-hover:text-teal transition-colors" />
              </div>
            </button>
          </div>
        )}

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] bg-navy/95 backdrop-blur-xl flex items-center justify-center p-6 lg:p-20"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="max-w-5xl w-full relative"
                onClick={e => e.stopPropagation()}
              >
                <button
                  className="absolute -top-16 right-0 text-white text-4xl hover:text-teal transition-colors"
                  onClick={() => setSelectedImage(null)}
                >
                  &times;
                </button>
                <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                  <img src="/photo-01.jpg" alt={selectedImage.title} className="w-full h-auto max-h-[70vh] object-contain bg-light-gray" />
                  <div className="p-10 bg-white">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-4 py-1 bg-teal/10 text-teal text-[10px] font-black uppercase tracking-[0.2em] rounded-full">{selectedImage.category}</span>
                      <span className="text-navy/40 text-[10px] font-black">{selectedImage.date}</span>
                    </div>
                    <h3 className="text-3xl font-black text-navy tracking-tighter mb-4">{selectedImage.title}</h3>
                    <p className="text-navy/60 font-medium flex items-center gap-2 uppercase tracking-widest text-[10px]">
                      <FaMapMarkerAlt className="text-teal" /> {selectedImage.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
