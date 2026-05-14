import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data';
import PageHero from '../components/PageHero';

export default function Contact() {
  return (
    <div>
      <PageHero
        title="Contact Office"
        subtitle="Available for expert lectures, Ph.D. thesis evaluation, and institutional leadership consultations."
        breadcrumbs={[{ name: 'Contact', href: '/contact' }]}
      />
      <div className="container mx-auto px-6 lg:px-12 py-32">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Details */}
          <div className="space-y-12">
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="group">
                <span className="text-[10px] font-black uppercase text-slate-400 tracking-[0.25em] block mb-4">Official Email</span>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-light-gray text-navy rounded-sm flex items-center justify-center group-hover:bg-teal group-hover:text-white transition-all">
                    <FaEnvelope size={18} />
                  </div>
                  <a href={`mailto:${personalInfo.contact.email1}`} className="text-lg font-black text-navy hover:text-teal transition-colors">{personalInfo.contact.email1}</a>
                </div>
              </div>
              <div className="group">
                <span className="text-[10px] font-black uppercase text-slate-400 tracking-[0.25em] block mb-4">Personal Email</span>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-light-gray text-navy rounded-sm flex items-center justify-center group-hover:bg-teal group-hover:text-white transition-all">
                    <FaEnvelope size={18} />
                  </div>
                  <a href={`mailto:${personalInfo.contact.email2}`} className="text-lg font-black text-navy hover:text-teal transition-colors">{personalInfo.contact.email2}</a>
                </div>
              </div>
              <div className="group">
                <span className="text-[10px] font-black uppercase text-slate-400 tracking-[0.25em] block mb-4">Direct Contact</span>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-light-gray text-navy rounded-sm flex items-center justify-center group-hover:bg-teal group-hover:text-white transition-all">
                    <FaPhone size={18} />
                  </div>
                  <a href={`tel:${personalInfo.contact.phone1}`} className="text-lg font-black text-navy hover:text-teal transition-colors">{personalInfo.contact.phone1}</a>
                </div>
              </div>
              <div className="group">
                <span className="text-[10px] font-black uppercase text-slate-400 tracking-[0.25em] block mb-4">LinkedIn Profile</span>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-light-gray text-navy rounded-sm flex items-center justify-center group-hover:bg-teal group-hover:text-white transition-all">
                    <FaLinkedin size={18} />
                  </div>
                  <a href="#" className="text-lg font-black text-navy hover:text-teal transition-colors tracking-tighter">Professional Network</a>
                </div>
              </div>
            </div>

            <div className="p-12 bg-light-gray/50 rounded-sm">
              <span className="text-[10px] font-black uppercase text-slate-400 tracking-[0.25em] block mb-6">Location</span>
              <div className="flex items-start gap-6">
                <FaMapMarkerAlt className="text-teal mt-1" size={24} />
                <div>
                  <p className="text-2xl font-black text-navy leading-tight mb-2">{personalInfo.contact.location}</p>
                  <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Dr. Babasaheb Ambedkar Open University Campus</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA / Quick Message */}
          <div className="bg-navy p-16 text-white rounded-sm flex flex-col justify-between shadow-2xl">
            <div>
              <h2 className="text-3xl font-black mb-8 tracking-tighter leading-tight">Academic & Industrial <br /><span className="text-teal">Collaboration</span></h2>
              <p className="text-white/50 text-lg leading-relaxed mb-12">
                Available for expert lectures, PhD thesis evaluation, research partnership, and high-level institutional quality assurance consultations.
              </p>
            </div>
            <div className="space-y-6">
              <button className="btn-teal w-full">Send Official Inquiry</button>
              <a href={personalInfo.contact.website} className="btn-ghost w-full block text-center">Visit Personal Portal</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
