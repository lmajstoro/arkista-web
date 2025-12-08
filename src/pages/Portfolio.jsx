import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import PortfolioFilter from '../components/PortfolioFilter';
import TagFilter from '../components/TagFilter';
import PortfolioGrid from '../components/PortfolioGrid';
import { portfolioData } from '../data/portfolioData';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('Sve');
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagToggle = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredItems = useMemo(() => {
    // Duplicate portfolio items for testing
    const duplicatedPortfolioData = [...portfolioData, ...portfolioData];
    let filtered = duplicatedPortfolioData;

    // Filter by category
    if (activeFilter !== 'Sve') {
      filtered = filtered.filter((item) => item.category === activeFilter);
    }

    // Filter by tags (multi-select)
    if (selectedTags.length > 0) {
      filtered = filtered.filter((item) =>
        item.tags && item.tags.some((tag) => selectedTags.includes(tag))
      );
    }

    return filtered;
  }, [activeFilter, selectedTags]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-8 sm:py-12 md:py-16 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-pink-dark dark:text-pink-medium mb-4">
            Portfolio
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-poppins">
            Pregledajte kolekciju umjetničkih djela kroz različite medije i stilove
          </p>
        </motion.div>

        {/* Category Filter */}
        <PortfolioFilter
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        {/* Tag Filter */}
        <TagFilter
          selectedTags={selectedTags}
          onTagToggle={handleTagToggle}
        />

        {/* Portfolio Grid */}
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <PortfolioGrid items={filteredItems} />
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;

