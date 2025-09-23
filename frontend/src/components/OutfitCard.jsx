import { FaExternalLinkAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function OutfitCard({ outfit }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 w-full max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-3 text-center">Complete Outfit</h2>

      {/* Grid of outfit items */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <AnimatePresence>
          {outfit.map((item, idx) => (
            <motion.a
              key={item.type} // stable key per item
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
              initial={{ opacity: 0, y: 20 }}   // when added
              animate={{ opacity: 1, y: 0 }}   // final state
              exit={{ opacity: 0, y: -20 }}    // when removed
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              layout   // smoothly reflows grid on changes
            >
              <img
                src={item.image}
                alt={item.type}
                loading="lazy"
                className="w-full h-40 object-cover rounded-xl border group-hover:scale-105 transition-transform"
              />
              <p className="mt-1 text-xs text-center text-gray-600">{item.type}</p>
            </motion.a>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
