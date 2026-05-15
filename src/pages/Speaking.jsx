import { motion } from 'framer-motion';
import { FaMicrophoneAlt, FaChalkboardTeacher, FaUsers, FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa';
import PageHero from '../components/PageHero';

const speakingEvents = [
  {
    title: "Keynote: Cyber Security in Digital Governance",
    location: "State Level Symposium, Ahmedabad",
    date: "August 2024",
    audience: "Academic Leaders & IT Professionals"
  },
  {
    title: "Expert Lecture: AI and Ethical Hacking",
    location: "GTU Academic Workshop",
    date: "June 2024",
    audience: "Post-Graduate Scholars"
  },
  {
    title: "Panel Discussion: Future of ODL in India",
    location: "UGC Regional Conference",
    date: "March 2024",
    audience: "University Administrators"
  }
];
export default function Speaking() {
  return (
    <div>
      <PageHero
        title="Speaking Engagements"
        subtitle="Sharing expertise on Cyber Security, AI, and Educational Leadership as a keynote speaker and panelist at national forums."
        breadcrumbs={[{ name: 'Speaking', href: '/speaking' }]}
      />
      <div className="container mx-auto px-6 lg:px-12 py-32">
        {/* Featured Speaking Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          <div className="bg-navy p-10 text-white flex flex-col items-center text-center rounded-sm border-t-4 border-teal">
            <FaMicrophoneAlt size={48} className="text-teal mb-6" />
            <h3 className="text-2xl font-black mb-4 tracking-tighter">Keynote Speaker</h3>
            <p className="text-white/50 text-sm">Delivering high-impact speeches at major academic and industry summits.</p>
          </div>
          <div className="bg-navy p-10 text-white flex flex-col items-center text-center rounded-sm border-t-4 border-teal">
            <FaChalkboardTeacher size={48} className="text-teal mb-6" />
            <h3 className="text-2xl font-black mb-4 tracking-tighter">Expert Lectures</h3>
            <p className="text-white/50 text-sm">Technical sessions on Ethical Hacking, AI, and Cloud Infrastructure.</p>
          </div>
          <div className="bg-navy p-10 text-white flex flex-col items-center text-center rounded-sm border-t-4 border-teal">
            <FaUsers size={48} className="text-teal mb-6" />
            <h3 className="text-2xl font-black mb-4 tracking-tighter">Panelist</h3>
            <p className="text-white/50 text-sm">Strategic discussions on University Quality Assurance and Digital Learning.</p>
          </div>
        </div>

        {/* Recent Engagements */}
        <section>
          <div className="flex items-center gap-3 mb-16">
            <div className="w-10 h-2 bg-teal"></div>
            <h2 className="text-3xl font-black text-navy uppercase tracking-widest">Recent Events</h2>
          </div>
          <div className="space-y-8">
            {speakingEvents.map((event, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 10 }}
                className="professional-card p-12 border-l-8 border-teal"
              >
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-black text-navy mb-2 tracking-tighter">{event.title}</h3>
                    <div className="flex items-center gap-4 text-slate-400 text-sm font-bold uppercase tracking-widest">
                      <div className="flex items-center gap-2"><FaMapMarkerAlt className="text-teal" /> {event.location}</div>
                      <div className="flex items-center gap-2">• {event.date}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-black uppercase text-slate-300 tracking-[0.2em] block mb-2">Audience</span>
                    <span className="px-4 py-2 bg-light-gray text-navy text-xs font-black uppercase rounded-sm">{event.audience}</span>
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
