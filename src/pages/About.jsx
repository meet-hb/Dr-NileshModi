import { motion } from 'framer-motion';
import { 
  FaGraduationCap, FaAward, FaArrowRight, FaShieldAlt, 
  FaBrain, FaLock, FaCloud, FaTasks, FaNetworkWired, FaDatabase, FaMicroscope, FaUniversity 
} from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';
import { personalInfo, competencies, education, achievements, certifications } from '../data';
import PageHero from '../components/PageHero';

const competencyIcons = [
  <FaLock />, <FaBrain />, <FaShieldAlt />, <FaCloud />, <FaTasks />, 
  <FaNetworkWired />, <FaMicroscope />, <FaDatabase />, <FaUniversity />, <FaAward />
];

export default function About() {
  return (
    <div>
      <PageHero 
        title="Scholarly Profile" 
        subtitle="A dedicated leader in Computer Science education with a focus on Cyber Security and AI innovation. Committed to building future-ready institutions."
        breadcrumbs={[{ name: 'About', href: '/about' }]}
      />

      <div className="container mx-auto px-6 lg:px-12 py-32">
        {/* Competencies Grid */}
        <section className="mb-40">
          <div className="text-center mb-20">
             <span className="text-teal font-black uppercase tracking-[0.3em] text-xs mb-4 block">Strategic Expertise</span>
             <h2 className="executive-heading text-4xl md:text-5xl text-navy">Domain <span className="text-teal">Mastery</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {competencies.map((comp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card p-10 rounded-xl relative overflow-hidden group"
              >
                <div className="absolute -right-6 -top-6 text-teal/5 group-hover:text-teal/10 transition-colors transform rotate-12 group-hover:rotate-0 duration-700">
                   <div className="text-[120px]">{competencyIcons[i % competencyIcons.length]}</div>
                </div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-navy text-teal rounded-lg flex items-center justify-center mb-8 shadow-lg group-hover:bg-teal group-hover:text-white transition-all duration-500 transform group-hover:rotate-[360deg]">
                    <div className="text-2xl">{competencyIcons[i % competencyIcons.length]}</div>
                  </div>
                  <h3 className="text-xl font-black text-navy mb-4 leading-tight group-hover:text-teal transition-colors">{comp}</h3>
                  <div className="flex items-center gap-2 text-slate-400 group-hover:text-teal transition-colors">
                    <div className="w-8 h-1 bg-teal/20 group-hover:w-12 transition-all duration-500"></div>
                    <span className="text-[10px] font-black uppercase tracking-widest">Expert Level</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education & Certifications */}
        <div className="grid lg:grid-cols-2 gap-20 mb-40">
          <section>
            <div className="flex items-center gap-3 mb-12">
               <div className="w-10 h-2 bg-teal"></div>
               <h2 className="text-2xl font-black text-navy uppercase tracking-widest">Education</h2>
            </div>
            <div className="space-y-10">
              {education.map((edu, i) => (
                <div key={i} className="professional-card p-10 hover:shadow-2xl transition-all duration-500 border-l-[10px]">
                  <span className="text-teal font-black text-lg block mb-2">{edu.year}</span>
                  <h3 className="text-2xl font-black text-navy mb-1">{edu.qualification}</h3>
                  <p className="text-slate-400 font-bold text-sm mb-6 uppercase tracking-widest leading-relaxed">{edu.institution}</p>
                  <div className="flex items-center justify-between">
                    <span className="px-4 py-1.5 bg-teal/10 text-teal text-[10px] font-black uppercase rounded-full shadow-sm">{edu.performance}</span>
                    <FaGraduationCap size={24} className="text-slate-100" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-12">
               <div className="w-10 h-2 bg-teal"></div>
               <h2 className="text-2xl font-black text-navy uppercase tracking-widest">Certifications</h2>
            </div>
            <div className="grid gap-8">
              {certifications.map((cert, i) => (
                <div key={i} className="glass-card p-10 border-t-8 border-teal rounded-xl">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-xl font-black text-navy max-w-[80%]">{cert.name}</h3>
                    <FaAward className="text-teal" size={24} />
                  </div>
                  <p className="text-teal font-bold text-sm mb-6 uppercase tracking-widest">{cert.body}</p>
                  <div className="pt-6 border-t border-slate-100 flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-400">
                    <span className="bg-light-gray px-3 py-1 rounded">ID: {cert.id}</span>
                    <span>{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Achievements - SWIPER CAROUSEL */}
        <section className="py-20 bg-light-gray/30 rounded-3xl overflow-hidden relative">
          <div className="text-center mb-16 px-6">
             <span className="text-teal font-black uppercase tracking-[0.3em] text-xs mb-4 block">Recognition</span>
             <h2 className="executive-heading text-4xl md:text-5xl text-navy">Key <span className="text-teal">Achievements</span></h2>
          </div>
          
          <div className="max-w-6xl mx-auto px-6">
            <Swiper
              slidesPerView={1}
              spaceBetween={50}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              navigation={false}
              modules={[Pagination, Autoplay, Navigation]}
              className="achievement-swiper pb-20"
            >
              {achievements.map((ach, i) => (
                <SwiperSlide key={i}>
                  <div className="p-10 md:p-14 bg-navy text-white rounded-3xl border-b-[12px] border-teal flex flex-col md:flex-row items-center gap-10 shadow-2xl relative overflow-hidden h-full min-h-[300px]">
                    <div className="absolute -right-8 -bottom-8 text-teal/5 text-[200px]">
                      <FaAward />
                    </div>
                    <div className="w-20 h-20 bg-teal text-white rounded-2xl flex items-center justify-center shrink-0 shadow-2xl border-4 border-white/20 transform rotate-3">
                      <FaAward size={36} />
                    </div>
                    <div className="relative z-10 text-center md:text-left flex-grow">
                      <p className="text-lg md:text-xl font-bold leading-relaxed mb-6 italic">"{ach}"</p>
                      <div className="flex items-center gap-4 justify-center md:justify-start">
                        <div className="w-12 h-1 bg-teal"></div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-teal">Institutional Milestone</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </div>
    </div>
  );
}
