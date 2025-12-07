import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 480);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Duplicate portfolio items for testing
  const duplicatedPortfolioData = [...portfolioData, ...portfolioData];
  const displayedItems = isMobile 
    ? duplicatedPortfolioData.slice(0, 3) 
    : duplicatedPortfolioData.slice(0, 8);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 md:pt-24 pb-20 md:pb-32">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1920&q=80)'
          }}
        />
        
        {/* Dark Gray Transparent Overlay */}
        <div className="absolute inset-0 bg-gray-900/90 z-0" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg"
            >
              Dobrodošli u moj
              <span className="block text-pink-medium mt-2">Umjetnički Portfolio</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 sm:mb-12 px-4 drop-shadow-md"
            >
              Istražite kolekciju crteža olovkom koje prikazuju kreativnost i umjetničku ekspresiju.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button
                onClick={() => {
                  const portfolioSection = document.getElementById('portfolio');
                  if (portfolioSection) {
                    portfolioSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-pink-dark text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-pink-medium transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-200"
              >
                Pogledaj neke radove
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-10 md:pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-dark mb-4">
              Naše Usluge
            </h2>
            <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto">
              Različite mogućnosti umjetničkog izražavanja prilagođene vašim potrebama
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Realistični portreti */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl p-6 sm:p-8 border border-pink-light hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">
                <svg
                  className="w-12 h-12 text-pink-dark"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-pink-dark mb-3">
                Realistični portreti
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Izrada realističnih portreta grafitnom olovkom ili bojicama, s pažljivim fokusom na detalje i karakteristike lica.
              </p>
            </motion.div>

            {/* Karikature */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-6 sm:p-8 border border-pink-light hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">
                <svg
                  className="w-12 h-12 text-pink-dark"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-pink-dark mb-3">
                Karikature
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Stvaranje jedinstvenih karikatura koje naglašavaju karakteristike i osobnost subjekta na zabavan i kreativan način.
              </p>
            </motion.div>

            {/* Slike različitim tehnikama */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl p-6 sm:p-8 border border-pink-light hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">
                <svg
                  className="w-12 h-12 text-pink-dark"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-pink-dark mb-3">
                Slike različitim tehnikama
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Izrada slika različitim tehnikama poput ulja, akrila i akvarela, prilagođeno vašim željama i stilu.
              </p>
            </motion.div>

            {/* Spajanje slika */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl p-6 sm:p-8 border border-pink-light hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">
                <svg
                  className="w-12 h-12 text-pink-dark"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-pink-dark mb-3">
                Spajanje više slika
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Kreativno spajanje više slika u jednu kompoziciju, stvarajući jedinstveno i personalizirano umjetničko djelo.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Ideas CTA Section */}
      <section className="relative overflow-hidden py-8 sm:py-10 md:py-12">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1920&q=80)'
          }}
        />
        
        {/* Dark Gray Transparent Overlay */}
        <div className="absolute inset-0 bg-gray-900/90 z-0" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6"
          >
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2 drop-shadow-lg">
                I druge vaše ideje...
              </h3>
              <p className="text-white/90 text-sm sm:text-base md:text-lg drop-shadow-md">
                Imate ideju koja nije navedena? Kontaktirajte nas da se dogovorimo!
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                to="/contact"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-pink-dark text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-pink-medium transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-200"
              >
                Kontaktiraj nas
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section id="portfolio" className="pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 md:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-dark mb-4">
              Portfolio
            </h2>
            <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto">
              Pregledajte odabrana umjetnička djela
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 max-w-7xl mx-auto mb-8 sm:mb-12">
            {displayedItems.map((item, index) => (
              <motion.div
                key={`${item.id}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative aspect-square overflow-hidden group rounded-lg"
              >
                <Link to={`/portfolio/${item.id}`} className="block w-full h-full">
                  <div className="relative w-full h-full overflow-hidden">
                    <motion.img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-full h-full object-cover object-top"
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Content overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <motion.button
                        initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                        className="bg-white text-pink-dark px-6 py-2.5 sm:px-8 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-pink-light transition-colors shadow-xl mb-3"
                      >
                        Pogledaj više
                      </motion.button>
                      <div className="text-center px-4">
                        <p className="text-white/90 text-xs sm:text-sm font-medium mb-1">
                          {item.category}
                        </p>
                        {item.technique && (
                          <p className="text-white/70 text-xs">
                            {item.technique}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    {/* Title at bottom (always visible) */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/60 to-transparent">
                      <h3 className="text-white font-semibold text-sm sm:text-base drop-shadow-lg">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <Link
              to="/portfolio"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-pink-dark text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-pink-medium transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-200"
            >
              Pogledaj Cijeli Portfolio
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

