import { useState } from "react";
import { FaChevronDown, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: (custom) => ({
    opacity: 0,
    y: 40,
    rotate: custom.scatterAngle + 10, // start a bit more tilted
    scale: 0.9,
  }),
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    rotate: custom.scatterAngle, // settle to scatter angle
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
      delay: custom.index * 0.15, // stagger effect
    },
  }),
};

function ItemCard({ item, index }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Random scatter angle for polaroid vibe
  const scatterAngle = (Math.random() - 0.5) * 20; // -10° to +10°

  return (
    <motion.div
      custom={{ index, scatterAngle }}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className={`
        bg-white shadow-xl p-3 w-64 h-auto flex flex-col items-center cursor-pointer
        transition-transform duration-500 hover:scale-105 hover:rotate-0
      `}
      style={{
        transform: `rotate(${scatterAngle}deg)`,
      }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Polaroid Image as Link */}
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-full h-72 overflow-hidden block"
      >
        <img
          src={item.image}
          alt={item.type}
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
        {item.season && (
          <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded">
            <span className="font-sans text-[10px] font-light tracking-[0.5px] text-gray-600 uppercase">
              {item.season}
            </span>
          </div>
        )}
      </a>

      {/* Polaroid Caption */}
      <div className="mt-2 w-full text-center">
        <h3 className="font-[Karla] text-sm sm:text-base font-light uppercase text-gray-800">
          {item.type}
        </h3>
        <p className="font-sans text-xs font-light text-gray-500 uppercase tracking-wide">
          {item.brand}
        </p>
        <FaChevronDown
          className={`transform transition-transform duration-300 mx-auto mt-1 text-gray-400 ${
            isExpanded ? "rotate-180" : ""
          }`}
          size={12}
        />
      </div>

      {/* Hidden Tags */}
      <div
        className={`w-full overflow-hidden transition-all duration-700 ease-in-out ${
          isExpanded ? "max-h-[200px] opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-3 bg-neutral-50 border-t border-gray-200 text-left">
          {item.tags && item.tags.length > 0 && (
            <div className="mt-1 flex flex-wrap gap-1">
              {item.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-white border border-gray-200 rounded text-[10px] text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-2 flex items-center gap-1 text-xs text-blue-500 hover:underline">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              View Item <FaExternalLinkAlt size={10} className="text-gray-400" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ItemCard;
