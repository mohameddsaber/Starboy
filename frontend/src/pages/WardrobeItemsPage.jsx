import { useState } from "react";
import ItemCard from "../components/ItemCard";
import { items } from "../data/wardrobeItems";
import { motion } from "framer-motion";

function WardrobeItemsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Tops", "Bottoms", "Outerwear", "Shoes", "Sportswear", "Accessories"];

  const filteredItems =
    activeCategory === "All"
      ? items
      : items.filter((item) => item.category === activeCategory);

  // Parent animation (controls staggering)
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // delay between each card
      },
    },
  };

  // Child animation (each card)
  const itemAnim = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center text-gray-800">Starboy Wardrobe</h1>
      <p className="text-center text-gray-600">Every piece that makes up the starboy style.</p>

      {/* Filter Bar */}
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm transition ${
              activeCategory === cat
                ? "bg-gray-800 text-white"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Items Grid with staggered animation */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-start"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {filteredItems.map((item, idx) => (
          <motion.div key={idx} variants={itemAnim}>
            <ItemCard item={item} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default WardrobeItemsPage;
