import { motion } from 'framer-motion';
import { 
  FaGraduationCap, FaAward, FaArrowRight, FaShieldAlt, 
  FaBrain, FaLock, FaCloud, FaTasks, FaNetworkWired, FaDatabase, FaMicroscope, FaUniversity,
  FaBullseye, FaLightbulb, FaGlobeAmericas, FaHandshake, FaCheckCircle, FaRocket, FaPuzzlePiece
} from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { personalInfo, education, achievements, certifications } from '../data';
import PageHero from '../components/PageHero';

export default function About() {
  const { aboutMe } = personalInfo;

  return (
    <div className="bg-white">
      <PageHero 
        title="Professional Vision" 
        subtitle={aboutMe.intro}
        breadcrumbs={[{ name: 'About', href: '/about' }]}
      />

      <div className="container mx-auto px-6 lg:px-12 py-20">
        {/* Core Philosophy Section */}
        <section className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-teal font-black uppercase tracking-[0.3em] text-xs mb-4 block">Institutional Transformation</span>
            <h2 className="executive-heading text-4xl md:text-5xl text-navy mb-8 leading-tight">
              Scaling <span className="text-teal">Digital Learning</span> Ecosystems
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-8 font-medium">
              {aboutMe.subIntro}
            </p>
            <div className="p-8 bg-light-gray rounded-[2rem] border-l-8 border-teal shadow-sm italic text-navy font-bold">
              "{aboutMe.collaboration}"
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-navy p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute -right-6 -top-6 text-teal/10 text-9xl group-hover:rotate-12 transition-transform duration-700">
                <FaBullseye />
              </div>
              <h3 className="text-2xl font-black mb-8 flex items-center gap-4 relative z-10">
                <FaBullseye className="text-teal" /> What I Do
              </h3>
              <ul className="space-y-4 relative z-10">
                {aboutMe.whatIDo.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-white/80 group-hover:text-white transition-colors">
                    <FaCheckCircle className="text-teal mt-1 shrink-0" />
                    <span className="font-bold text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* My Approach - Pillar Grid */}
        <section className="mb-32">
          <div className="text-center mb-16">
             <span className="text-teal font-black uppercase tracking-[0.3em] text-xs mb-4 block">Methodology</span>
             <h2 className="executive-heading text-4xl text-navy">My <span className="text-teal">Approach</span></h2>
             <p className="max-w-3xl mx-auto mt-6 text-slate-500 font-medium">{aboutMe.approach.philosophy}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {aboutMe.approach.pillars.map((pillar, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="professional-card p-12 text-center flex flex-col items-center group"
              >
                <div className="w-16 h-16 bg-navy text-teal rounded-2xl flex items-center justify-center mb-8 group-hover:bg-teal group-hover:text-white transition-all duration-500">
                  {i === 0 ? <FaBrain size={28} /> : i === 1 ? <FaRocket size={28} /> : <FaLightbulb size={28} />}
                </div>
                <h3 className="text-xl font-black text-navy mb-4 group-hover:text-teal transition-colors">{pillar.title}</h3>
                <div className="w-12 h-1 bg-teal/20 mb-6 group-hover:w-20 transition-all duration-500"></div>
                <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* What Drives Me & Let's Connect */}
        <section className="grid lg:grid-cols-2 gap-8 mb-32">
          <div className="bg-light-gray/50 p-12 rounded-[3rem] border-2 border-slate-100 shadow-sm">
             <h3 className="text-2xl font-black text-navy mb-8 flex items-center gap-4">
                <FaGlobeAmericas className="text-teal" /> What Drives Me
             </h3>
             <div className="space-y-6">
                {aboutMe.drivesMe.map((item, i) => (
                  <div key={i} className="flex gap-6 items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-50">
                    <div className="w-10 h-10 bg-teal/10 rounded-xl flex items-center justify-center text-teal font-black">{i+1}</div>
                    <p className="text-navy font-bold text-sm leading-tight">{item}</p>
                  </div>
                ))}
             </div>
          </div>

          <div className="bg-navy p-12 rounded-[3rem] text-white flex flex-col justify-between shadow-2xl">
             <div>
                <h3 className="text-2xl font-black mb-8 flex items-center gap-4">
                  <FaHandshake className="text-teal" /> Let's Connect
                </h3>
                <p className="text-white/60 mb-10 text-sm font-medium">If you’re working on these areas, I’d be glad to collaborate and exchange ideas.</p>
                <div className="grid grid-cols-2 gap-4">
                   {aboutMe.letsConnect.map((item, i) => (
                     <div key={i} className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-[11px] font-black uppercase tracking-widest text-teal hover:bg-white/10 transition-colors">
                       {item}
                     </div>
                   ))}
                </div>
             </div>
             <button className="btn-teal w-full mt-12 py-4 text-lg">Send Inquiry</button>
          </div>
        </section>

        {/* Education & Certifications */}
        <div className="grid lg:grid-cols-2 gap-16 mb-32">
          <section>
            <div className="flex items-center gap-3 mb-12">
               <div className="w-10 h-2 bg-teal"></div>
               <h2 className="text-2xl font-black text-navy uppercase tracking-widest">Education</h2>
            </div>
            <div className="space-y-8">
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
            <div className="grid gap-6">
              {certifications.map((cert, i) => (
                <div key={i} className="glass-card p-10 border-t-8 border-teal rounded-3xl">
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
        <section className="py-16 bg-light-gray/30 rounded-[3rem] overflow-hidden relative">
          <div className="text-center mb-12 px-6">
             <span className="text-teal font-black uppercase tracking-[0.3em] text-xs mb-4 block">Recognition</span>
             <h2 className="executive-heading text-4xl text-navy">Key <span className="text-teal">Achievements</span></h2>
          </div>
          
          <div className="max-w-5xl mx-auto px-6">
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
              className="achievement-swiper pb-16"
            >
              {achievements.map((ach, i) => (
                <SwiperSlide key={i}>
                  <div className="p-10 md:p-14 bg-navy text-white rounded-[2.5rem] border-b-[12px] border-teal flex flex-col md:flex-row items-center gap-10 shadow-2xl relative overflow-hidden h-full min-h-[300px]">
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
