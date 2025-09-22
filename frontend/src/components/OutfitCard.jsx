import { FaExternalLinkAlt } from "react-icons/fa";

export default function OutfitCard({ outfit }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 w-full max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-3 text-center">Complete Outfit</h2>

      {/* Grid of outfit items */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {outfit.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <img
              src={item.image}
              alt={item.type}
              className="w-full h-40 object-cover rounded-xl border group-hover:scale-105 transition-transform"
            />
            <p className="mt-1 text-xs text-center text-gray-600">{item.type}</p>
          </a>
        ))}
      </div>

      {/* Outfit external links */}

    </div>
  );
}

