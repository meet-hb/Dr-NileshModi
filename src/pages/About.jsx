import { motion } from 'framer-motion';
import {
  FaGraduationCap, FaAward, FaArrowRight, FaShieldAlt,
  FaBrain, FaLock, FaCloud, FaTasks, FaNetworkWired, FaDatabase, FaMicroscope, FaUniversity,
  FaBullseye, FaLightbulb, FaGlobeAmericas, FaHandshake, FaCheckCircle, FaRocket, FaPuzzlePiece,
  FaChalkboardTeacher, FaHistory, FaBuilding, FaBriefcase, FaCertificate, FaUsers,
  FaCalendarAlt, FaGlobe, FaUserFriends, FaLanguage, FaHeart, FaMapMarkerAlt, FaPhone, FaEnvelope, FaQuoteLeft
} from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { personalInfo, education, achievements, certifications, experience, competencies, personalDetails, references, declaration } from '../data';
import PageHero from '../components/PageHero';

export default function About() {
  const { aboutMe } = personalInfo;
  return (
    <div className="bg-white">
      <PageHero
        title="Scholarly Profile"
        subtitle="Bridging Academic Vision with Technological Execution"
        breadcrumbs={[{ name: 'About', href: '/about' }]}
      />
      <div className="container mx-auto px-6 lg:px-12 py-16">
        {/* Executive Summary */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <span className="text-teal font-black uppercase tracking-[0.3em] text-xs mb-4 block">Executive Summary</span>
              <h2 className="executive-heading text-4xl text-navy mb-8 leading-tight">
                23+ Years of <span className="text-teal">Leadership</span> in Tech & Education
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium mb-8">
                {personalInfo.summary}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { label: "NAAC Grade", value: "A++ (3.55)" },
                  { label: "Publications", value: "105+" },
                  { label: "Ph.D. Scholars", value: "18" }
                ].map((stat, i) => (
                  <div key={i} className="bg-light-gray p-6 rounded-2xl border-b-4 border-teal">
                    <span className="text-xs font-black text-slate-500 uppercase tracking-widest block mb-1">{stat.label}</span>
                    <span className="text-2xl font-black text-navy">{stat.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <div className="bg-navy p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute -right-6 -top-6 text-teal/10 text-9xl group-hover:rotate-12 transition-transform duration-700">
                  <FaBullseye />
                </div>
                <h3 className="text-2xl font-black mb-8 flex items-center gap-4 relative z-10">
                  <FaBullseye className="text-teal" /> Vision & Impact
                </h3>
                <p className="text-white/80 font-medium mb-8 relative z-10 leading-relaxed">
                  {aboutMe.intro}
                </p>
                <ul className="space-y-4 relative z-10">
                  {aboutMe.whatIDo.slice(0, 4).map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70 group-hover:text-white transition-colors">
                      <FaCheckCircle className="text-teal mt-1 shrink-0" />
                      <span className="font-bold text-xs leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Competencies Grid */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <span className="text-teal font-black uppercase tracking-[0.3em] text-xs mb-4 block">Expertise</span>
            <h2 className="executive-heading text-4xl text-navy">Core <span className="text-teal">Competencies</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competencies.map((comp, i) => {
              const getIcon = (title) => {
                if (title.includes('Intelligence') || title.includes('AI')) return <FaBrain />;
                if (title.includes('Security')) return <FaLock />;
                if (title.includes('Cloud')) return <FaCloud />;
                if (title.includes('Project')) return <FaTasks />;
                if (title.includes('Wireless') || title.includes('IoT')) return <FaNetworkWired />;
                if (title.includes('Research')) return <FaMicroscope />;
                if (title.includes('Data')) return <FaDatabase />;
                if (title.includes('Administration') || title.includes('Academic')) return <FaUniversity />;
                if (title.includes('Leadership')) return <FaUsers />;
                return <FaCertificate />;
              };
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-5 group hover:border-teal/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-light-gray rounded-xl flex items-center justify-center text-navy group-hover:bg-teal group-hover:text-white transition-colors shrink-0 shadow-inner">
                    <div className="text-2xl">{getIcon(comp)}</div>
                  </div>
                  <span className="text-sm font-black text-navy leading-tight">{comp}</span>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Professional Experience - TIMELINE */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-2 bg-teal"></div>
            <h2 className="text-3xl font-black text-navy uppercase tracking-widest">Professional Experience</h2>
          </div>
          <div className="space-y-12">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 md:pl-12 border-l-4 border-slate-100 pb-12 last:pb-0">
                <div className="absolute -left-[14px] top-0 w-6 h-6 bg-white border-4 border-teal rounded-full z-10"></div>
                <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] border border-slate-50 hover:border-teal/20 transition-colors">
                  <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
                    <div>
                      <span className="px-4 py-1 bg-teal/10 text-teal text-[10px] font-black uppercase tracking-widest rounded-full mb-3 block w-fit">
                        {exp.period}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-black text-navy mb-2">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-slate-500 font-bold">
                        <FaBuilding className="text-teal" />
                        <span>{exp.institution}</span>
                      </div>
                    </div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                      <FaHistory /> {exp.location}
                    </div>
                  </div>
                  {exp.concurrentRoles && (
                    <div className="mb-10 p-6 bg-light-gray/50 rounded-2xl border-l-4 border-navy">
                      <h4 className="text-xs font-black text-navy uppercase tracking-widest mb-4">Concurrent Directorships:</h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {exp.concurrentRoles.map((role, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-600">
                            <div className="w-1.5 h-1.5 bg-teal rounded-full"></div>
                            {role}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {exp.highlights && (
                    <div className="space-y-4">
                      <h4 className="text-xs font-black text-navy uppercase tracking-widest mb-2">Key Responsibilities & Achievements:</h4>
                      {exp.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex gap-4">
                          <FaCheckCircle className="text-teal mt-1 shrink-0" />
                          <p className="text-slate-600 font-medium leading-relaxed">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        {/* Education & Certifications */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          <section>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-2 bg-teal"></div>
              <h2 className="text-2xl font-black text-navy uppercase tracking-widest">Academic Background</h2>
            </div>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all duration-500 group">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-teal font-black text-lg">{edu.year}</span>
                    <FaGraduationCap size={24} className="text-slate-200 group-hover:text-teal transition-colors" />
                  </div>
                  <h3 className="text-xl font-black text-navy mb-1">{edu.qualification}</h3>
                  <p className="text-slate-400 font-bold text-xs mb-4 uppercase tracking-widest leading-relaxed">{edu.institution}</p>
                  <span className="px-4 py-1.5 bg-light-gray text-navy text-[10px] font-black uppercase rounded-lg">{edu.performance}</span>
                </div>
              ))}
            </div>
          </section>
          <section>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-2 bg-teal"></div>
              <h2 className="text-2xl font-black text-navy uppercase tracking-widest">Professional Certifications</h2>
            </div>
            <div className="grid gap-6">
              {certifications.map((cert, i) => (
                <div key={i} className="bg-navy p-8 rounded-3xl text-white relative overflow-hidden group">
                  <div className="absolute -right-4 -top-4 text-white/5 text-8xl group-hover:rotate-12 transition-transform duration-700">
                    <FaAward />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-lg font-black mb-2 group-hover:text-teal transition-colors">{cert.name}</h3>
                    <p className="text-teal font-bold text-xs mb-6 uppercase tracking-widest">{cert.body}</p>
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-white/40">
                      <span>ID: {cert.id}</span>
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
        {/* Achievements Section - RESTORED PREVIOUS UI */}
        <section className="py-16 bg-light-gray/30 rounded-[3rem] overflow-hidden relative">
          <div className="text-center mb-12 px-6">
            <span className="text-teal font-black uppercase tracking-[0.3em] text-xs mb-4 block">Recognition</span>
            <h2 className="executive-heading text-4xl text-navy">Honors & <span className="text-teal">Awards</span></h2>
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
        {/* Personal Background & Declaration */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-12 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8"
            >
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-2 bg-teal"></div>
                <h2 className="text-2xl font-black text-navy uppercase tracking-widest">Personal Profile</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: <FaCalendarAlt />, label: "Date of Birth", value: personalDetails.dob },
                  { icon: <FaGlobe />, label: "Nationality", value: personalDetails.nationality },
                  { icon: <FaUserFriends />, label: "Marital Status", value: personalDetails.maritalStatus },
                  { icon: <FaLanguage />, label: "Languages", value: personalDetails.languages.join(", ") },
                  { icon: <FaHeart />, label: "Hobbies", value: personalDetails.hobbies.join(", ") },
                  { icon: <FaMapMarkerAlt />, label: "Address", value: personalDetails.address },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-light-gray/50 rounded-2xl border border-slate-100 hover:border-teal/30 transition-all group">
                    <div className="text-teal text-xl mt-1 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">{item.label}</span>
                      <span className="text-sm font-bold text-navy leading-relaxed">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <div className="h-full bg-navy p-10 rounded-[3rem] text-white flex flex-col justify-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl group-hover:rotate-12 transition-transform duration-700">
                  <FaQuoteLeft />
                </div>
                <FaQuoteLeft className="text-teal text-4xl mb-8" />
                <p className="text-xl font-bold leading-relaxed mb-8 relative z-10 italic">
                  "{declaration}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-1 bg-teal"></div>
                  <span className="text-sm font-black uppercase tracking-widest text-teal">{personalInfo.name}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Professional References */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <span className="text-teal font-black uppercase tracking-[0.3em] text-xs mb-4 block">Endorsements</span>
            <h2 className="executive-heading text-4xl text-navy">Professional <span className="text-teal">References</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {references.map((ref, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-teal/20 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-light-gray rounded-bl-[4rem] -mr-8 -mt-8 group-hover:bg-teal/10 transition-colors"></div>
                <h3 className="text-xl font-black text-navy mb-2 relative z-10">{ref.name}</h3>
                <p className="text-teal font-bold text-xs mb-1 uppercase tracking-wider relative z-10">{ref.designation}</p>
                <p className="text-slate-500 font-bold text-[10px] mb-6 uppercase tracking-widest border-b border-slate-100 pb-4">{ref.institution}</p>

                <div className="space-y-3 relative z-10">
                  <div className="flex items-center gap-3 text-slate-600 hover:text-navy transition-colors group/link">
                    <div className="w-8 h-8 bg-light-gray rounded-lg flex items-center justify-center text-teal group-hover/link:bg-teal group-hover/link:text-white transition-all">
                      <FaPhone size={12} />
                    </div>
                    <span className="text-xs font-black">{ref.contact}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 hover:text-navy transition-colors group/link">
                    <div className="w-8 h-8 bg-light-gray rounded-lg flex items-center justify-center text-teal group-hover/link:bg-teal group-hover/link:text-white transition-all">
                      <FaEnvelope size={12} />
                    </div>
                    <span className="text-xs font-black truncate">{ref.email}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
