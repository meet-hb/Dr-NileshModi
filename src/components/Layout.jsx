import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import {
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe, FaLinkedin, FaInstagram, FaFacebook
} from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import ThreeBackground from './ThreeBackground';
import { personalInfo } from '../data';

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const [scrollValue, setScrollValue] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollValue(window.scrollY);
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location.pathname]);
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Publications', href: '/publications' },
    { name: 'Speaking', href: '/speaking' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Media', href: '/media' },
    { name: 'Contact', href: '/contact' },
  ];
  const isHomePage = location.pathname === '/';
  return (
    <div className="min-h-screen flex flex-col text-slate-800 bg-white selection:bg-teal/30">
      <ThreeBackground scrollY={scrollValue} />
      {/* Navigation */}
      <nav
        style={{ backgroundColor: scrolled || !isHomePage ? '#002e58' : 'transparent' }}
        className={`fixed top-0 w-full z-[100] transition-all duration-300 ${scrolled || !isHomePage
          ? 'py-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'py-8'
          }`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
          <Link to="/" className="text-2xl font-black tracking-tighter text-white flex items-center gap-1 group">
            <span className="text-teal group-hover:rotate-[360deg] transition-transform duration-500">NK</span>
            <span className="opacity-90">MODI</span>
          </Link>
          <div className="hidden lg:flex gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-colors relative group ${location.pathname === link.href ? 'text-teal' : 'text-white/80 hover:text-teal'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <button className="text-white lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <HiMenuAlt3 size={32} />
          </button>
        </div>
      </nav>
      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed inset-0 z-[110] bg-navy flex flex-col items-center justify-center gap-12"
          >
            <button className="absolute top-8 right-8 text-white" onClick={() => setIsMenuOpen(false)}>
              <HiX size={40} />
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-4xl font-black uppercase tracking-tighter transition-colors ${location.pathname === link.href ? 'text-teal' : 'text-white hover:text-teal'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <main className="flex-grow">{children}</main>
      {/* FOOTER */}
      <footer className="bg-navy py-24 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-20">
            <div>
              <div className="text-3xl font-black tracking-tighter mb-8"><span className="text-teal">NK</span>MODI</div>
              <p className="text-white/40 text-sm leading-relaxed mb-8 font-medium">
                Distinguished Professor and Director with over 23 years of experience in Cyber Security, AI, and Academic Leadership.
              </p>
              <div className="flex gap-6">
                <a href={personalInfo.contact.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-teal cursor-pointer transition-colors">
                  <FaInstagram size={20} />
                </a>
                <a href={personalInfo.contact.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-teal cursor-pointer transition-colors">
                  <FaFacebook size={20} />
                </a>
                <a href={personalInfo.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-teal cursor-pointer transition-colors">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
            <div className="md:pl-10">
              <h3 className="text-sm font-black uppercase tracking-widest mb-8 text-teal">Quick Links</h3>
              <ul className="grid grid-cols-2 gap-4 text-sm font-bold text-white/60">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <Link to={link.href} className="hover:text-white transition-colors">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:pl-10">
              <h3 className="text-sm font-black uppercase tracking-widest mb-8 text-teal">Contact Details</h3>
              <ul className="space-y-4 text-sm font-medium text-white/60">
                <li className="flex items-start gap-3"><FaMapMarkerAlt className="text-teal mt-1 shrink-0" /> <span>{personalInfo.contact.location}</span></li>
                <li className="flex items-center gap-3"><FaEnvelope className="text-teal shrink-0" /> <span>{personalInfo.contact.email1}</span></li>
                <li className="flex items-center gap-3"><FaPhone className="text-teal shrink-0" /> <span>{personalInfo.contact.phone1}</span></li>
              </ul>
            </div>
          </div>
          <div className="mt-24 pt-12 border-t border-white/5 text-center text-[10px] text-white/20 font-black uppercase tracking-[0.5em]">
            © {new Date().getFullYear()} PROF. NILESH K. MODI | DESIGNED FOR EXCELLENCE
          </div>
        </div>
      </footer>
    </div>
  );
}
