import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LessonsPage from './pages/LessonsPage';
import ProductionPage from './pages/ProductionPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/lessons" element={<LessonsPage />} />
          <Route path="/production" element={<ProductionPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
