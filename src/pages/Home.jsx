import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaArrowRight, FaAward, FaBookOpen, FaLightbulb, FaBriefcase,
  FaGraduationCap, FaMicrophoneAlt, FaShieldAlt, FaBrain, FaLock, FaCloud, FaTasks, FaNetworkWired
} from 'react-icons/fa';
import { personalInfo, competencies, baouMilestones, researchStats, experience, education, memberships } from '../data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import BentoBackground from '../components/BentoBackground';
import ThreeBackground from '../components/ThreeBackground';

const SectionHeader = ({ title, subtitle, dark = false }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="mb-16"
  >
    <span className="text-teal font-black uppercase tracking-[0.3em] text-xs mb-4 block">{subtitle}</span>
    <h2 className={`executive-heading mb-8 leading-tight ${dark ? 'text-white' : 'text-navy'}`}>{title}</h2>
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: 80 }}
      viewport={{ once: true }}
      className="h-2 bg-teal"
    ></motion.div>
  </motion.div>
);

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <>
      <ThreeBackground scrollY={scrollY} />
      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-screen flex items-center bg-navy/90 pt-20 overflow-hidden diagonal-divider">
        <motion.div style={{ y: y1, opacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/photo-01.jpg')] bg-cover bg-center grayscale brightness-50 opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-navy/0 via-navy/50 to-navy"></div>
        </motion.div>

        <div className="container mx-auto px-6 lg:px-12 relative z-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.span variants={itemVariants} className="text-teal font-black uppercase tracking-[0.4em] text-sm mb-8 block">
              Distinguished Academic Leader
            </motion.span>

            <h1 className="text-4xl md:text-7xl font-black text-white leading-none mb-10 md:whitespace-nowrap">
              {personalInfo.name.split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  variants={itemVariants}
                  className="inline-block mr-3 md:mr-4 hover:text-teal transition-colors duration-500 cursor-default"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.div variants={itemVariants} className="flex items-center gap-6 mb-12">
              <div className="w-12 h-2 bg-teal shadow-[0_0_15px_rgba(255,153,51,0.5)]"></div>
              <p className="text-2xl md:text-3xl text-white font-bold leading-relaxed tracking-wide uppercase italic">
                {personalInfo.title}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-8">
              <Link to="/about" className="btn-teal group flex items-center gap-3">
                Explore Profile <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link to="/publications" className="btn-ghost group flex items-center gap-3">
                Research Works <FaArrowRight className="group-hover:rotate-[-45deg] transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Modern Mouse */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          onClick={() => document.getElementById('summary')?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4 cursor-pointer group"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 group-hover:text-teal transition-colors">Scroll</span>
          <div className="w-[26px] h-[45px] border-2 border-white/20 group-hover:border-teal transition-colors rounded-full p-1.5 flex justify-center shadow-[0_0_20px_rgba(255,153,51,0.1)]">
            <motion.div
              animate={{
                y: [0, 15, 0],
                opacity: [1, 0, 1]
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }}
              className="w-1.5 h-1.5 bg-teal rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* EXECUTIVE SUMMARY */}
      <section id="summary" className="py-24 md:py-40 bg-white relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <SectionHeader title="Visionary Leadership In Technology" subtitle="Executive Summary" />
              <p className="mb-8 font-medium max-w-2xl text-dark leading-relaxed">
                {personalInfo.summary}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="px-4 py-2 bg-navy text-white rounded-lg text-xs font-bold flex items-center gap-2">
                  <span className="opacity-60 text-[10px]">ORCID:</span> {personalInfo.orcid}
                </div>
                <div className="px-4 py-2 bg-teal text-navy rounded-lg text-xs font-bold flex items-center gap-2">
                  <span className="opacity-60 text-[10px]">Vidwan:</span> {personalInfo.vidwan}
                </div>
                <div className="px-4 py-2 bg-light-gray text-navy rounded-lg text-xs font-bold flex items-center gap-2 border border-navy/10">
                  <span className="opacity-60 text-[10px]">Scopus:</span> {personalInfo.scopus}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Cyber Security & Ethical Hacking", icon: <FaShieldAlt /> },
                  { title: "AI & Machine Learning", icon: <FaBrain /> },
                  { title: "Information Security Management", icon: <FaLock /> },
                  { title: "Cloud Computing & Virtualization", icon: <FaCloud /> },
                  { title: "Software Project Management", icon: <FaTasks /> },
                  { title: "Wireless Sensor Networks & IoT", icon: <FaNetworkWired /> },
                ].map((comp, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-4 p-4 bg-light-gray/40 rounded-xl border-l-4 border-teal hover:bg-navy hover:text-white transition-all duration-300 group cursor-default shadow-sm"
                  >
                    <div className="text-xl text-teal group-hover:scale-110 transition-transform">
                      {comp.icon}
                    </div>
                    <span className="text-sm font-bold leading-tight">
                      {comp.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative group"
            >
              <div className="aspect-[4/5] bg-light-gray rounded-2xl overflow-hidden pt-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] relative z-10">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                  src="/drnileshmodi.png"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -inset-4 border-2 border-teal/30 rounded-3xl -z-10 group-hover:scale-105 transition-transform duration-700"></div>
              <div className="absolute top-1/2 -right-12 w-24 h-24 bg-teal rounded-full blur-[80px] opacity-20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* RESEARCH IMPACT METRICS */}
      <section className="py-24 bg-light-gray/30">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeader title="Research Impact" subtitle="Global Metrics" />
          <div className="grid md:grid-cols-2 gap-12">
            {/* Google Scholar */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl shadow-xl border-b-4 border-navy"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-black text-navy">Google Scholar</h3>
                <div className="w-12 h-12 bg-navy/5 rounded-full flex items-center justify-center text-navy">
                  <FaGraduationCap size={24} />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-navy/5 rounded-2xl">
                  <div className="text-3xl font-black text-navy">{researchStats.googleScholar.citations}</div>
                  <div className="text-[10px] uppercase font-black tracking-widest text-slate-400">Citations</div>
                </div>
                <div className="text-center p-4 bg-navy/5 rounded-2xl">
                  <div className="text-3xl font-black text-navy">{researchStats.googleScholar.hIndex}</div>
                  <div className="text-[10px] uppercase font-black tracking-widest text-slate-400">h-index</div>
                </div>
                <div className="text-center p-4 bg-navy/5 rounded-2xl">
                  <div className="text-3xl font-black text-navy">{researchStats.googleScholar.i10Index}</div>
                  <div className="text-[10px] uppercase font-black tracking-widest text-slate-400">i10-index</div>
                </div>
              </div>
            </motion.div>

            {/* IRINS / Scopus */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl shadow-xl border-b-4 border-teal"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-black text-navy">IRINS / Scopus</h3>
                <div className="w-12 h-12 bg-teal/5 rounded-full flex items-center justify-center text-teal">
                  <FaBookOpen size={24} />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-teal/5 rounded-2xl">
                  <div className="text-3xl font-black text-navy">{researchStats.irins.citations}</div>
                  <div className="text-[10px] uppercase font-black tracking-widest text-slate-400">Citations</div>
                </div>
                <div className="text-center p-4 bg-teal/5 rounded-2xl">
                  <div className="text-3xl font-black text-navy">{researchStats.irins.hIndex}</div>
                  <div className="text-[10px] uppercase font-black tracking-widest text-slate-400">h-index</div>
                </div>
                <div className="text-center p-4 bg-teal/5 rounded-2xl">
                  <div className="text-3xl font-black text-navy">{researchStats.irins.vidwanId}</div>
                  <div className="text-[10px] uppercase font-black tracking-widest text-slate-400">Vidwan ID</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL MEMBERSHIPS */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-teal/5 skew-x-12 translate-x-1/2"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <SectionHeader title="Professional Networks" subtitle="Memberships" dark />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {memberships.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group"
              >
                <div className="w-2 h-2 rounded-full bg-teal shadow-[0_0_10px_#FF9933]"></div>
                <span className="text-white font-medium group-hover:text-teal transition-colors">{member}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED SECTIONS PREVIEW */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <span className="text-teal font-black uppercase tracking-[0.4em] text-xs mb-4 block">Navigation</span>
            <h2 className="executive-heading text-navy">Explore <span className="text-teal">Expertise</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            <motion.div
              whileHover={{ y: -20 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-12 rounded-3xl flex flex-col justify-between border-t-8 border-teal shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -right-6 -top-6 text-navy/5 text-9xl"><FaMicrophoneAlt /></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-navy text-teal rounded-2xl flex items-center justify-center mb-10 shadow-2xl">
                  <FaMicrophoneAlt size={32} />
                </div>
                <h3 className="text-3xl font-black text-navy mb-6">Speaking Engagements</h3>
                <p className="text-slate-500 text-lg leading-relaxed mb-10 font-medium">
                  Keynote speeches and expert lectures on Cyber Security and AI.
                </p>
                <Link to="/speaking" className="btn-teal w-full text-center py-4 rounded-xl flex items-center justify-center gap-3">
                  View Talks <FaArrowRight />
                </Link>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -20 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-12 rounded-3xl flex flex-col justify-between border-t-8 border-teal shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -right-6 -top-6 text-navy/5 text-9xl"><FaBookOpen /></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-navy text-teal rounded-2xl flex items-center justify-center mb-10 shadow-2xl">
                  <FaBookOpen size={32} />
                </div>
                <h3 className="text-3xl font-black text-navy mb-6">Research & Patents</h3>
                <p className="text-slate-500 text-lg leading-relaxed mb-10 font-medium">
                  Author of 105+ research works and distinguished patent holder.
                </p>
                <Link to="/publications" className="btn-teal w-full text-center py-4 rounded-xl flex items-center justify-center gap-3">
                  View Repository <FaArrowRight />
                </Link>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -20 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-12 rounded-3xl flex flex-col justify-between border-t-8 border-teal shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -right-6 -top-6 text-navy/5 text-9xl"><FaGraduationCap /></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-navy text-teal rounded-2xl flex items-center justify-center mb-10 shadow-2xl">
                  <FaGraduationCap size={32} />
                </div>
                <h3 className="text-3xl font-black text-navy mb-6">Academic Profile</h3>
                <p className="text-slate-500 text-lg leading-relaxed mb-10 font-medium">
                  Doctorate in Computer Science with a focus on Cyber Security.
                </p>
                <Link to="/about" className="btn-teal w-full text-center py-4 rounded-xl flex items-center justify-center gap-3">
                  View Portfolio <FaArrowRight />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VISUAL JOURNEY - Bento Grid */}
      <section className="py-40 bg-navy relative overflow-hidden">
        <BentoBackground />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <SectionHeader title="A Legacy in Motion" subtitle="Visual Journey" dark />
            <Link to="/gallery" className="btn-ghost mb-8 border-white/20 text-white">Open Full Archive</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 h-auto md:h-[800px]">
            {/* Main Feature */}
            <motion.div
              whileHover={{ scale: 0.98 }}
              className="md:col-span-2 lg:col-span-3 md:row-span-2 bg-navy rounded-[2rem] overflow-hidden relative group shadow-2xl"
            >
              <img src="/photo-01.jpg" alt="Highlight" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent p-12 flex flex-col justify-end">
                <span className="text-teal font-black text-[10px] uppercase tracking-widest mb-4">Key Milestone</span>
                <h3 className="text-3xl font-black text-white">NAAC A++ Accreditation Ceremony</h3>
              </div>
            </motion.div>

            {/* Sub Features */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="md:col-span-2 lg:col-span-3 bg-light-gray rounded-[2rem] overflow-hidden pt-10 shadow-xl group"
            >
              <img src="/drnileshmodi.png" alt="Profile" className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="lg:col-span-2 bg-navy rounded-[2rem] overflow-hidden shadow-xl p-10 flex flex-col justify-center"
            >
              <h4 className="text-teal font-black text-[10px] uppercase tracking-widest mb-4">Expertise</h4>
              <p className="text-white text-lg font-bold leading-tight">Leading Digital Transformation in Higher Education.</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="lg:col-span-1 bg-teal rounded-[2rem] overflow-hidden shadow-xl flex items-center justify-center p-6 text-center"
            >
              <div className="text-navy font-black text-4xl italic">23+ <br /><span className="text-xs uppercase tracking-widest">Years</span></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-navy p-8 md:p-32 text-white rounded-[2rem] md:rounded-[3rem] relative overflow-hidden text-center shadow-[0_50px_100px_-20px_rgba(28,43,57,0.5)]"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal/10 to-transparent"></div>
            <div className="relative z-10 max-w-4xl mx-auto">
              <span className="text-teal font-black uppercase tracking-[0.5em] text-xs mb-8 block">Collaboration</span>
              <h2 className="text-4xl md:text-7xl font-black text-white mb-12 leading-tight">
                Let's Shape The <br /><span className="text-teal">Future Together</span>
              </h2>
              <div className="flex flex-wrap justify-center gap-8">
                <Link to="/contact" className="btn-teal px-12 py-5 text-lg">Work With Me</Link>
                <Link to="/about" className="btn-ghost px-12 py-5 text-lg">Official Resume</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
