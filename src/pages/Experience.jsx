import { motion } from 'framer-motion';
import { FaBriefcase, FaProjectDiagram, FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa';
import { experience, projects } from '../data';

export default function Experience() {
  return (
    <div className="pt-40 pb-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Experience Header */}
        <div className="mb-24 text-center">
          <span className="text-teal font-black uppercase tracking-[0.3em] text-xs mb-4 block">Professional Track Record</span>
          <h1 className="executive-heading text-5xl md:text-7xl text-navy tracking-tighter">Work <span className="text-teal">Experience</span></h1>
        </div>
        {/* Experience Timeline */}
        <div className="space-y-16 relative mb-40">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="professional-card p-12">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                  <span className="text-teal font-black text-sm tracking-widest mb-2 block uppercase">{exp.period}</span>
                  <h3 className="text-3xl md:text-4xl font-black text-navy tracking-tighter">{exp.title}</h3>
                </div>
                <div className="text-right">
                  <h4 className="text-xl text-slate-400 font-bold uppercase tracking-widest text-xs mb-2">{exp.institution}</h4>
                  <div className="flex items-center gap-2 text-slate-300 font-black text-[10px] uppercase tracking-widest md:justify-end">
                    <FaMapMarkerAlt className="text-teal" /> {exp.location}
                  </div>
                </div>
              </div>
              {exp.concurrentRoles && (
                <div className="mb-8 p-6 bg-light-gray/50 rounded-sm">
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] mb-4">Core Concurrent Roles</p>
                  <div className="flex flex-wrap gap-3">
                    {exp.concurrentRoles.map((role, idx) => (
                      <span key={idx} className="px-4 py-2 bg-white border border-slate-100 rounded-sm text-xs font-black text-slate-600">{role}</span>
                    ))}
                  </div>
                </div>
              )}
              <div className="space-y-4 max-w-4xl">
                {exp.highlights?.map((h, idx) => (
                  <div key={idx} className="flex gap-4">
                    <FaArrowRight className="text-teal mt-1 shrink-0" size={12} />
                    <p className="text-slate-500 font-medium leading-relaxed">{h}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        {/* Projects Section */}
        <section>
          <div className="flex items-center gap-3 mb-16">
            <div className="w-10 h-2 bg-teal"></div>
            <h2 className="text-3xl font-black text-navy uppercase tracking-widest">Notable Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-navy p-10 text-white rounded-sm border-t-4 border-teal flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div className="p-3 bg-teal/10 rounded-sm text-teal">
                      <FaProjectDiagram size={20} />
                    </div>
                    <span className="text-[10px] font-black uppercase text-white/30 tracking-widest">{project.period}</span>
                  </div>
                  <h3 className="text-xl font-black mb-2 tracking-tight">{project.name}</h3>
                  <p className="text-teal font-bold text-xs uppercase tracking-wider mb-6">{project.client}</p>
                  <p className="text-sm text-white/50 leading-relaxed mb-8">{project.details}</p>
                </div>
                <div className="pt-6 border-t border-white/5 flex items-center justify-between group cursor-pointer">
                  <span className="text-[10px] font-black uppercase tracking-widest group-hover:text-teal transition-colors">Case Study Details</span>
                  <FaArrowRight size={12} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
