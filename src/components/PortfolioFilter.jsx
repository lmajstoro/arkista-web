import { motion } from 'framer-motion';
import { categories } from '../data/portfolioData';

const PortfolioFilter = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="mb-8 md:mb-12">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center sm:items-start">
        {categories.map((category, index) => (
          <motion.button
            key={category}
            onClick={() => onFilterChange(category)}
            className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all ${
              activeFilter === category
                ? 'bg-pink-dark text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-pink-light shadow-sm'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default PortfolioFilter;

