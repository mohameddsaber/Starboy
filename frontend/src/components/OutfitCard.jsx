import { FaExternalLinkAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function OutfitCard({ outfit }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Animation generator functions
  const getMobileAnimation = (idx) => ({
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
    transition: {
      delay: idx * 0.05,
      duration: 0.25,
      ease: "easeOut"
    }
  });

  // Desktop animations (original with y transform)
  const getDesktopAnimation = (idx) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: {
      delay: idx * 0.1,
      duration: 0.4
    }
  });

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 w-full max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-3 text-center">Complete Outfit</h2>
       
      {/* Grid of outfit items */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <AnimatePresence mode={isMobile ? "popLayout" : "wait"}>
          {outfit.map((item, idx) => {
            const animationProps = isMobile 
              ? getMobileAnimation(idx)
              : getDesktopAnimation(idx);

            return (
              <motion.a
                key={item.type}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
                {...animationProps}
                layout
                whileHover={isMobile ? { scale: 1.02 } : { scale: 1.05 }}
                whileTap={isMobile ? { scale: 0.98 } : undefined}
              >
                <img
                  src={item.image}
                  alt={item.type}
                  loading="lazy"
                  className={`w-full h-40 object-cover rounded-xl border group-hover:scale-105 transition-transform ${
                    isMobile ? 'duration-200 ease-out will-change-transform' : ''
                  }`}
                />
                <p className="mt-1 text-xs text-center text-gray-600">{item.type}</p>
              </motion.a>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}