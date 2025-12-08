import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import ImageGallery from '../components/ImageGallery';

const PortfolioItem = () => {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const item = portfolioData.find((item) => item.id === parseInt(itemId));

  // Scroll to top when component mounts or itemId changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [itemId]);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-pink-dark dark:text-pink-medium mb-4">Stavka nije pronađena</h1>
          <Link
            to="/portfolio"
            className="text-gray-700 dark:text-gray-300 hover:text-pink-dark dark:hover:text-pink-medium underline"
          >
            Povratak na Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 sm:py-12 md:py-16 transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          onClick={() => navigate(-1)}
          className="mb-6 sm:mb-8 flex items-center text-gray-700 dark:text-gray-300 hover:text-pink-dark dark:hover:text-pink-medium transition-colors group"
        >
          <svg
            className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="text-sm sm:text-base font-medium">Natrag na Portfolio</span>
        </motion.button>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-200"
        >
          {/* Image Gallery */}
          <div className="p-4 sm:p-6 md:p-8">
            <ImageGallery images={item.images} title={item.title} video={item.video} />
          </div>

          {/* Item Details */}
          <div className="px-4 sm:px-6 md:px-8 pb-6 sm:pb-8 md:pb-10">
            <div className="mb-4 sm:mb-6">
              <span className="inline-block px-3 py-1 bg-pink-light dark:bg-gray-700 text-pink-dark dark:text-pink-medium text-xs sm:text-sm font-medium rounded-full mb-3 sm:mb-4">
                {item.category}
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-dark dark:text-pink-medium mb-4 sm:mb-6">
                {item.title}
              </h1>
            </div>

            {/* Description */}
            {item.description && (
              <div className="prose prose-sm sm:prose-base max-w-none mb-6 sm:mb-8">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg font-poppins">
                  {item.description}
                </p>
              </div>
            )}

            {/* Technical Details */}
            {(item.size || item.technique) && (
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6 sm:pt-8">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8">
                  <div className="flex-shrink-0 sm:w-1/3">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300">
                      Tehnički detalji
                    </h2>
                  </div>
                  <div className="flex-1 space-y-2 sm:space-y-3">
                    {item.size && (
                      <div>
                        <span className="text-gray-500 dark:text-gray-400 text-sm sm:text-base font-poppins">Veličina: </span>
                        <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base font-poppins">{item.size}</span>
                      </div>
                    )}
                    {item.technique && (
                      <div>
                        <span className="text-gray-500 dark:text-gray-400 text-sm sm:text-base font-poppins">Tehnika: </span>
                        <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base font-poppins">{item.technique}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioItem;

