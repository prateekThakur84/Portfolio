"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageCarousel = ({ images }) => {
  // 1. Handle single image vs array
  const validImages = Array.isArray(images) 
    ? images 
    : (images ? [images] : []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // 2. SAFETY CHECK: If no images, return empty div to prevent crash
  if (validImages.length === 0) {
    return <div className="h-full w-full bg-gray-800/50 rounded-xl animate-pulse" />;
  }

  // 3. NEXT.JS IMAGE HELPER
  const getImageSrc = (image) => {
    return typeof image === "string" ? image : image?.src || "";
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      let nextIndex = prev + newDirection;
      if (nextIndex < 0) nextIndex = validImages.length - 1;
      if (nextIndex >= validImages.length) nextIndex = 0;
      return nextIndex;
    });
  };

  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl border-2 border-textWhite/10 shadow-lg group bg-bgDark">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={currentIndex}
          src={getImageSrc(validImages[currentIndex])}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = Math.abs(offset.x) * velocity.x;
            if (swipe < -10000) paginate(1);
            else if (swipe > 10000) paginate(-1);
          }}
          // --- CHANGE IS HERE ---
          // changed 'object-cover' to 'object-contain'
          // This ensures the whole image is visible without cropping
          className="absolute h-full w-full object-contain bg-black/20" 
          alt="Project Screenshot"
        />
      </AnimatePresence>

      {/* Navigation Arrows */}
      {validImages.length > 1 && (
        <>
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white opacity-0 transition-opacity hover:bg-black/70 group-hover:opacity-100 z-10"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white opacity-0 transition-opacity hover:bg-black/70 group-hover:opacity-100 z-10"
            onClick={() => paginate(1)}
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {/* Dots */}
      {validImages.length > 1 && (
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 z-10">
          {validImages.map((_, index) => (
            <div
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-2 w-2 cursor-pointer rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-6 bg-secondary bg-blue-500" 
                  : "bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;