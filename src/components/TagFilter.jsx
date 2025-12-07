import { motion } from 'framer-motion';
import { getTags } from '../data/portfolioData';

const TagFilter = ({ selectedTags, onTagToggle }) => {
  const tags = getTags();
  
  return (
    <div className="mb-6 sm:mb-8">
      <div className="flex flex-wrap gap-2 sm:gap-3 justify-center items-center">
        {tags.map((tag, index) => {
          const isSelected = selectedTags.includes(tag);
          return (
            <motion.button
              key={tag}
              onClick={() => onTagToggle(tag)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-medium transition-all ${
                isSelected
                  ? 'bg-pink-dark dark:bg-pink-medium text-white shadow-md'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-pink-light dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 shadow-sm'
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tag}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default TagFilter;

