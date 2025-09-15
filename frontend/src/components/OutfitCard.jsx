import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function OutfitCard({ outfit }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Random scatter angle for polaroid vibe
  const scatterAngle = (Math.random() - 0.5) * 20; // -10° to +10°

  return (
    <div
      className={`
        bg-white shadow-xl p-3 w-64 h-auto flex flex-col items-center cursor-pointer
        transition-transform duration-500 hover:scale-105 hover:rotate-0
      `}
      style={{
        transform: `rotate(${scatterAngle}deg)`,
      }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Polaroid Image */}
      <div className="relative w-full h-72 overflow-hidden">
        <img
          src={outfit.image}
          alt={outfit.name}
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
        {outfit.season && (
          <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded">
            <span className="font-sans text-[10px] font-light tracking-[0.5px] text-gray-600 uppercase">
              {outfit.season}
            </span>
          </div>
        )}
      </div>

      {/* Polaroid Caption */}
      <div className="mt-2 w-full text-center">
        <h3 className="font-[Karla] text-sm sm:text-base font-light uppercase text-gray-800">
          {outfit.name}
        </h3>
        <p className="font-sans text-xs font-light text-gray-500 uppercase tracking-wide">
          {outfit.occasion}
        </p>
        <FaChevronDown
          className={`transform transition-transform duration-300 mx-auto mt-1 text-gray-400 ${
            isExpanded ? "rotate-180" : ""
          }`}
          size={12}
        />
      </div>

      {/* Hidden Details (expands like Polaroid notes) */}
      <div
        className={`w-full overflow-hidden transition-all duration-700 ease-in-out ${
          isExpanded ? "max-h-[400px] opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-3 bg-neutral-50 border-t border-gray-200 text-left">
          {/* Description */}
          {outfit.description && (
            <p className="font-sans text-xs font-light text-gray-600 leading-relaxed mb-2">
              {outfit.description}
            </p>
          )}

          {/* Items */}
          {outfit.items && outfit.items.length > 0 && (
            <div className="space-y-1">
              <h4 className="font-[Karla] text-[11px] uppercase text-gray-700 mb-1">
                Details
              </h4>
              {outfit.items.map((item, idx) => (
                <div key={idx} className="flex justify-between text-xs">
                  <span className="text-gray-700">{item.type}</span>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-gray-500">
                    {item.brand || item.description}
                  </a>
                </div>
              ))}
            </div>
          )}

          {/* Tags */}
          {outfit.tags && outfit.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1">
              {outfit.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-white border border-gray-200 rounded text-[10px] text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default OutfitCard;