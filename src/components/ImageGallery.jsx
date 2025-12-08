import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageGallery = ({ images, title, video }) => {
  // Combine images and video into a single media array
  const media = [...images];
  if (video) {
    media.push(video);
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const nextMedia = () => {
    setCurrentIndex((prev) => (prev + 1) % media.length);
  };

  const prevMedia = () => {
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  const goToMedia = (index) => {
    setCurrentIndex(index);
  };

  const openFullscreen = () => {
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  // Swipe gesture handlers for mobile
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextMedia();
    }
    if (isRightSwipe) {
      prevMedia();
    }
    
    // Reset touch values
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Prevent body scroll when fullscreen is open
  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isFullscreen]);

  // Keyboard navigation in fullscreen
  useEffect(() => {
    if (!isFullscreen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeFullscreen();
      } else if (e.key === 'ArrowLeft') {
        prevMedia();
      } else if (e.key === 'ArrowRight') {
        nextMedia();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, currentIndex, media.length]);

  // Check if current item is a video
  const isVideo = (item) => {
    if (!item) return false;
    if (item.startsWith('http') || item.startsWith('//')) {
      return item.includes('youtube.com') || item.includes('youtu.be') || item.includes('vimeo.com');
    }
    return item.endsWith('.mp4') || item.endsWith('.webm') || item.endsWith('.ogg') || item.endsWith('.mov');
  };

  // Get thumbnail for video (use first frame or a placeholder)
  const getVideoThumbnail = (videoSrc, index) => {
    // For local videos, we'll use a video element to get the thumbnail
    // For now, return the first image as placeholder or null
    return images[0] || null;
  };

  if (!media || media.length === 0) {
    return null;
  }

  const currentMedia = media[currentIndex];
  const isCurrentVideo = isVideo(currentMedia);

  return (
    <div className="w-full">
      {/* Main Media Display */}
      <div className="relative w-full mb-4 sm:mb-6">
        <div 
          className="relative w-full aspect-video sm:aspect-[4/3] flex items-center justify-center overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 transition-colors duration-200 cursor-pointer sm:cursor-default"
          onClick={() => {
            // Only open fullscreen on mobile (screens smaller than sm breakpoint)
            if (window.innerWidth < 640) {
              openFullscreen();
            }
          }}
        >
          <AnimatePresence mode="wait">
            {isCurrentVideo ? (
              <motion.div
                key={`video-${currentIndex}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full flex items-center justify-center"
              >
                {currentMedia.startsWith('http') || currentMedia.startsWith('//') ? (
                  <iframe
                    src={currentMedia}
                    title={`${title} - Video ${currentIndex + 1}`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video
                    src={currentMedia}
                    controls
                    className="w-full h-full object-contain"
                    title={`${title} - Video ${currentIndex + 1}`}
                  >
                    Vaš preglednik ne podržava video tag.
                  </video>
                )}
              </motion.div>
            ) : (
              <motion.img
                key={`image-${currentIndex}`}
                src={currentMedia}
                alt={`${title} - Slika ${currentIndex + 1}`}
                className="w-full h-full object-contain"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </AnimatePresence>

          {/* Navigation Arrows */}
          {media.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevMedia();
                }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white z-10"
                aria-label="Prethodna stavka"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
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
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextMedia();
                }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white z-10"
                aria-label="Sljedeća stavka"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}

          {/* Media Counter */}
          {media.length > 1 && (
            <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-black/50 text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm z-10">
              {currentIndex + 1} / {media.length}
            </div>
          )}
        </div>
      </div>

      {/* Thumbnail Gallery */}
      {media.length > 1 && (
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 sm:gap-3">
          {media.map((item, index) => {
            const isItemVideo = isVideo(item);
            const thumbnail = isItemVideo ? (images[0] || null) : item;
            
            return (
              <button
                key={index}
                onClick={() => goToMedia(index)}
              className={`relative aspect-square overflow-hidden rounded-md border-2 transition-all ${
                currentIndex === index
                  ? 'border-pink-dark dark:border-pink-medium ring-2 ring-pink-dark dark:ring-pink-medium ring-offset-2 dark:ring-offset-gray-800'
                  : 'border-transparent hover:border-pink-medium dark:hover:border-pink-light'
              }`}
              >
                {thumbnail && (
                  <>
                    <img
                      src={thumbnail}
                      alt={isItemVideo ? `Video ${index + 1}` : `Thumbnail ${index + 1}`}
                      className={`w-full h-full object-cover transition-opacity ${
                        currentIndex === index ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                      }`}
                    />
                    {isItemVideo && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <svg
                          className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    )}
                  </>
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
            onClick={(e) => {
              // Only close if clicking the background (not the media or buttons)
              if (e.target === e.currentTarget) {
                closeFullscreen();
              }
            }}
          >
            {/* Close Button */}
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Zatvori"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Media Display */}
            <div 
              className="relative w-full h-full flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <AnimatePresence mode="wait">
                {isVideo(media[currentIndex]) ? (
                  <motion.div
                    key={`fullscreen-video-${currentIndex}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full flex items-center justify-center max-w-7xl"
                  >
                    {media[currentIndex].startsWith('http') || media[currentIndex].startsWith('//') ? (
                      <iframe
                        src={media[currentIndex]}
                        title={`${title} - Video ${currentIndex + 1}`}
                        className="w-full h-full max-h-[90vh]"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <video
                        src={media[currentIndex]}
                        controls
                        autoPlay
                        className="w-full h-full max-h-[90vh] object-contain"
                        title={`${title} - Video ${currentIndex + 1}`}
                      >
                        Vaš preglednik ne podržava video tag.
                      </video>
                    )}
                  </motion.div>
                ) : (
                  <motion.img
                    key={`fullscreen-image-${currentIndex}`}
                    src={media[currentIndex]}
                    alt={`${title} - Slika ${currentIndex + 1}`}
                    className="max-w-full max-h-full object-contain"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>

              {/* Navigation Arrows in Fullscreen */}
              {media.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevMedia();
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 sm:p-4 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white z-10"
                    aria-label="Prethodna stavka"
                  >
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8"
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
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextMedia();
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 sm:p-4 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white z-10"
                    aria-label="Sljedeća stavka"
                  >
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </>
              )}

              {/* Media Counter in Fullscreen */}
              {media.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/20 text-white px-4 py-2 rounded-full text-sm sm:text-base z-10">
                  {currentIndex + 1} / {media.length}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageGallery;

