import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const PortfolioGrid = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-400 text-lg font-poppins">Nema stavki u ovoj kategoriji.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
      <AnimatePresence mode="popLayout">
        {items.map((item, index) => (
          <motion.div
            key={`${item.id}-${index}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            layout
          >
            <Link
              to={`/portfolio/${item.id}`}
              className="block group"
            >
              <div className="relative overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square overflow-hidden">
                  <motion.img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    whileHover={{ scale: 1.1 }}
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white dark:bg-gray-800 text-pink-dark dark:text-pink-medium px-6 py-2.5 sm:px-8 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-pink-light dark:hover:bg-gray-700 transition-colors shadow-lg">
                    Pogledaj više
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-pink-dark dark:text-pink-medium text-base sm:text-lg mb-1 group-hover:text-pink-medium dark:group-hover:text-pink-light transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-400 text-sm font-poppins">{item.category}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioGrid;

