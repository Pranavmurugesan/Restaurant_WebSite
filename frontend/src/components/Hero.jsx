import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { heroShowcaseImages } from '../data/showcase';

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroShowcaseImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative z-0 w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full -z-10"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${heroShowcaseImages[currentIndex]})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60" />
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex flex-col items-start justify-center w-full px-6 md:px-16 lg:px-24 max-w-7xl mx-auto mt-16">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl text-white font-serif mb-6 drop-shadow-2xl max-w-4xl"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          WHERE EVERY MEAL <br /> IS A MEMORY
        </motion.h1>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <a href="#menu" className="btn-primary shadow-lg shadow-sage/30">
            VIEW THE MENU
          </a>
          <a href="#reservations" className="btn-outline shadow-lg">
            BOOK A TABLE
          </a>
        </motion.div>
      </div>
    </section>
  );
}
