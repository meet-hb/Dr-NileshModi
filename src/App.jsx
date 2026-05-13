import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Research from './pages/Research';
import Contact from './pages/Contact';
import Publications from './pages/Publications';
import Speaking from './pages/Speaking';
import Gallery from './pages/Gallery';
import Media from './pages/Media';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/research" element={<Research />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/speaking" element={<Speaking />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/media" element={<Media />} />
      </Routes>
    </Layout>
  );
}
