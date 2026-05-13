import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaGraduationCap, FaMicrophoneAlt, FaShieldAlt, FaBrain, FaLock, FaCloud, FaTasks, FaNetworkWired,
  FaChartBar, FaQuoteRight, FaNewspaper, FaShareAlt, FaChartLine, FaBook, FaGlobe,
  FaArrowRight, FaAward, FaBookOpen, FaLightbulb, FaBriefcase, FaCode, FaMicrochip, FaTools
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
    className="mb-8"
  >
    <span className="text-teal font-black uppercase tracking-[0.3em] text-xs mb-2 block">{subtitle}</span>
    <h2 className={`executive-heading mb-4 leading-tight ${dark ? 'text-white' : 'text-navy'}`}>{title}</h2>
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: 80 }}
      viewport={{ once: true }}
      className="h-1.5 bg-teal"
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
            <motion.div variants={itemVariants} className="flex items-center gap-6 mb-12">
              <div className="w-12 h-2 bg-teal shadow-[0_0_15px_rgba(255,153,51,0.5)]"></div>
              <p className="text-2xl md:text-3xl text-white font-bold leading-relaxed tracking-wide uppercase italic">
                {personalInfo.description}
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
      <section id="summary" className="py-16 md:py-20 bg-white relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
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
                  <span className=" ">ORCID:</span> {personalInfo.orcid}
                </div>
                <div className="px-4 py-2 bg-teal text-navy rounded-lg text-xs font-bold flex items-center gap-2">
                  <span className=" ">Vidwan:</span> {personalInfo.vidwan}
                </div>
                <div className="px-4 py-2 bg-light-gray text-navy rounded-lg text-xs font-bold flex items-center gap-2 border border-navy/10">
                  <span className=" ">Scopus:</span> {personalInfo.scopus}
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

      {/* SCHOLARLY IMPACT - PERFECTED DASHBOARD */}
      <section className="py-12 bg-white relative">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeader title="Scholarly Impact" subtitle="Research Analytics" />

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Column 1: Core Citation Metrics (Google Scholar) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-light-gray/20 p-8 rounded-[2rem] border-l-8 border-navy shadow-sm">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-navy rounded-xl flex items-center justify-center text-teal">
                    <FaQuoteRight size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-navy leading-none">Google Scholar</h3>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Global Citation Index</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Citations", value: researchStats.googleScholar.citations, trend: `+${researchStats.googleScholar.citationsSince2021}` },
                    { label: "h-index", value: researchStats.googleScholar.hIndex, trend: researchStats.googleScholar.hIndexSince2021 },
                    { label: "i10-index", value: researchStats.googleScholar.i10Index, trend: researchStats.googleScholar.i10IndexSince2021 }
                  ].map((m, i) => (
                    <div key={i} className="text-center">
                      <div className="text-5xl font-black text-navy mb-1">{m.value}</div>
                      <div className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">{m.label}</div>
                      <div className="inline-block px-3 py-1.5 bg-teal/10 rounded-md text-xs font-black text-teal">
                        {m.trend} <span className="opacity-60 font-bold ml-1 uppercase text-[10px]">New</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Altmetrics Mini-Dashboard */}
              <div className="bg-light-gray/20 p-8 rounded-[2rem] border-l-8 border-teal shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <FaNewspaper className="text-navy text-3xl" />
                  <div>
                    <div className="text-3xl font-black text-navy">{researchStats.altmetrics.news}</div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">News Mentions</div>
                  </div>
                </div>
                <div className="h-12 w-[1px] bg-slate-300"></div>
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 bg-navy text-teal rounded-lg flex items-center justify-center font-black text-sm">M</div>
                  <div>
                    <div className="text-2xl font-black text-navy">{researchStats.altmetrics.mendeley}</div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Mendeley</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Publication Breakdown */}
            <div className="lg:col-span-4">
              <div className="h-full bg-navy p-10 rounded-[2rem] text-white flex flex-col justify-between shadow-2xl relative overflow-hidden">
                <div className="absolute -right-4 -top-4 w-32 h-32 bg-teal/20 rounded-full blur-3xl"></div>
                <div>
                  <h3 className="text-3xl font-black mb-10 flex items-center gap-4">
                    <FaBook className="text-teal" /> Publications
                  </h3>
                  <div className="space-y-5">
                    {[
                      { label: "Journal Articles", count: researchStats.publications.journals, icon: <FaGlobe /> },
                      { label: "Conference Papers", count: researchStats.publications.conferences, icon: <FaChartBar /> },
                      { label: "Books Authored", count: researchStats.publications.books, icon: <FaAward /> },
                      { label: "Research Projects", count: researchStats.publications.projects, icon: <FaTasks /> }
                    ].map((p, i) => (
                      <div key={i} className="flex justify-between items-center bg-white/5 p-5 rounded-2xl border border-white/10 hover:border-teal/50 transition-all cursor-default">
                        <div className="flex items-center gap-4">
                          <span className="text-teal text-lg">{p.icon}</span>
                          <span className="text-base font-bold text-white/90">{p.label}</span>
                        </div>
                        <span className="text-3xl font-black text-teal">{p.count}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Verification & IDs */}
            <div className="lg:col-span-3 space-y-6">
              <div className="bg-white border-2 border-light-gray p-8 rounded-[2rem] shadow-sm">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-teal mb-6 block">Institutional Index</span>
                <div className="flex items-end justify-between border-b border-light-gray pb-6 mb-6">
                  <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">IRINS Verified</span>
                  <span className="text-4xl font-black text-navy leading-none">{researchStats.irins.citations}</span>
                </div>
                <div className="flex items-end justify-between">
                  <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Crossref DOI</span>
                  <span className="text-4xl font-black text-navy leading-none">{researchStats.irins.crossrefCitations}</span>
                </div>
              </div>

              <div className="bg-navy p-8 rounded-[2rem] text-white flex flex-col gap-6">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <span className="text-xs font-black text-teal uppercase tracking-widest mb-2">ORCID ID</span>
                    <span className="text-sm font-bold font-mono tracking-tighter text-white/90">{personalInfo.orcid}</span>
                  </div>
                  <FaGlobe className="text-teal/30" size={20} />
                </div>
                <div className="h-[1px] w-full bg-white/10"></div>
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <span className="text-xs font-black text-teal uppercase tracking-widest mb-2">Vidwan Identifier</span>
                    <span className="text-base font-black font-mono text-teal">{personalInfo.vidwan}</span>
                  </div>
                  <FaAward className="text-teal/30" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL MEMBERSHIPS */}
      <section className="py-16 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-teal/5 skew-x-12 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal/10 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <SectionHeader title="Global Professional Networks" subtitle="Elite Memberships" dark />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {memberships.map((member, i) => {
              const getMembershipIcon = (name) => {
                if (name.includes('ACM')) return <FaCode />;
                if (name.includes('CSI')) return <FaMicrochip />;
                if (name.includes('IACSIT')) return <FaNetworkWired />;
                if (name.includes('Engineers')) return <FaTools />;
                if (name.includes('Security')) return <FaShieldAlt />;
                if (name.includes('Innovation')) return <FaLightbulb />;
                return <FaGlobe />;
              };

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative h-full"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-teal/50 to-transparent rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                  <div className="relative flex items-center gap-5 p-7 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-teal/30 transition-all duration-300 shadow-2xl h-full">
                    <div className="w-14 h-14 bg-navy border border-white/10 rounded-xl flex items-center justify-center text-teal group-hover:bg-teal group-hover:text-white transition-all duration-500 shadow-inner shrink-0">
                      <div className="text-2xl">{getMembershipIcon(member)}</div>
                    </div>
                    <div className="flex-grow flex flex-col justify-center">
                      <span className="text-white font-black text-sm leading-tight tracking-tight group-hover:text-teal transition-colors block">
                        {member}
                      </span>
                      <div className="mt-3 flex items-center gap-2">
                         <div className="w-6 h-0.5 bg-teal/30 group-hover:w-10 group-hover:bg-teal transition-all duration-500"></div>
                         <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/20 group-hover:text-white/40">Verified Member</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED SECTIONS PREVIEW */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-teal font-black uppercase tracking-[0.4em] text-xs mb-4 block">Navigation</span>
            <h2 className="executive-heading text-navy">Explore <span className="text-teal">Expertise</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
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
      <section className="py-16 md:py-24 bg-navy relative overflow-hidden">
        <BentoBackground />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
            <SectionHeader title="A Legacy in Motion" subtitle="Visual Journey" dark />
            <Link to="/gallery" className="btn-ghost mb-4 border-white/20 text-white">Open Full Archive</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 h-auto md:h-[700px]">
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
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-navy p-8 md:p-20 text-white rounded-[2rem] md:rounded-[3rem] relative overflow-hidden text-center shadow-[0_50px_100px_-20px_rgba(28,43,57,0.5)]"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal/10 to-transparent"></div>
            <div className="relative z-10 max-w-4xl mx-auto">
              <span className="text-teal font-black uppercase tracking-[0.5em] text-xs mb-6 block">Collaboration</span>
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
