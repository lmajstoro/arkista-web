import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import PortfolioItem from './pages/PortfolioItem';
import Contact from './pages/Contact';

function FloatingContactButton() {
  const location = useLocation();
  
  // Don't show on contact page
  if (location.pathname === '/contact') {
    return null;
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50 md:hidden"
    >
      <Link to="/contact">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-pink-dark dark:bg-pink-medium text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow text-sm font-semibold whitespace-nowrap"
          style={{ boxShadow: '0 4px 14px 0 rgba(226, 109, 92, 0.4)' }}
          aria-label="Kontaktiraj me"
        >
          Kontaktiraj me!
        </motion.button>
      </Link>
    </motion.div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col transition-colors duration-200">
        <Navigation />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/:itemId" element={<PortfolioItem />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        
        {/* Floating Contact Button - Mobile Only */}
        <FloatingContactButton />
      </div>
    </Router>
  );
}

export default App;

