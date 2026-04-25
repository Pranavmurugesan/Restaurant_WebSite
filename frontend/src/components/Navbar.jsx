import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 lg:px-12 flex items-center justify-between gap-4 xl:gap-8">
        <div className="flex-1 flex justify-start shrink-0">
          <a href="#" className={`font-serif text-lg lg:text-xl xl:text-2xl font-bold tracking-widest whitespace-nowrap ${scrolled ? 'text-charcoal' : 'text-white'}`}>
            THE LATTICE BISTRO
          </a>
        </div>

        <div className={`hidden lg:flex justify-center space-x-4 xl:space-x-8 text-xs lg:text-sm font-medium tracking-wide shrink-0 ${scrolled ? 'text-charcoal' : 'text-white'}`}>
          <a href="#" className="hover:text-sage transition-colors">HOME</a>
          <a href="#menu" className="hover:text-sage transition-colors">MENU</a>
          <a href="#philosophy" className="hover:text-sage transition-colors whitespace-nowrap">OUR STORY</a>
          <a href="#gallery" className="hover:text-sage transition-colors">GALLERY</a>
          <a href="#reservations" className="hover:text-sage transition-colors">RESERVATIONS</a>
          <a href="#footer" className="hover:text-sage transition-colors">CONTACT</a>
        </div>

        <div className="flex-1 flex justify-end shrink-0">
          <a href="#reservations" className="hidden md:block btn-primary whitespace-nowrap text-xs lg:text-sm xl:text-base px-4 py-2 lg:px-6 lg:py-3">
            RESERVE A TABLE
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
