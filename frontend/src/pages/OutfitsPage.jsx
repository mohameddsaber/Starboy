import { useState } from "react";
import OutfitCard from "../components/OutfitCard";
import { items } from "../data/wardrobeItems";

// Outfit generation logic
const getItemsByCategory = (category) => 
  items.filter(item => item.category === category);

const getRandomItem = (itemsArray) => 
  itemsArray[Math.floor(Math.random() * itemsArray.length)];

const generateSportsOutfit = () => {
  const sportsTops = items.filter(item => item.category === "Sportswear" && 
    (item.type.includes("Compression") || item.type.includes("T-Shirt")));
  const sportsBottoms = items.filter(item => item.category === "Sportswear" && 
    item.type.includes("Sweatpants"));
  const shoes = getItemsByCategory("Shoes");
  const sportsWatch = items.find(item => item.type === "Xiaomi Smart Band 8");

  const outfit = [
    getRandomItem(sportsTops),
    getRandomItem(sportsBottoms),
    getRandomItem(shoes)
  ];

  if (sportsWatch) outfit.push(sportsWatch);

  return outfit;
};

const generateCasualOutfit = () => {
  const casualTops = items.filter(item => item.category === "Tops");
  const casualBottoms = items.filter(item => item.category === "Bottoms");
  const shoes = getItemsByCategory("Shoes");
  const outerwear = getItemsByCategory("Outerwear");
  const accessories = getItemsByCategory("Accessories");

  const outfit = [
    getRandomItem(casualTops),
    getRandomItem(casualBottoms),
    getRandomItem(shoes)
  ];

  // 50% chance to add outerwear
  if (Math.random() > 0.5) {
    outfit.push(getRandomItem(outerwear));
  }

  // Add dress watch
  const dressWatch = items.find(item => item.type === "Ibso Tank Leather Watch");
  if (dressWatch) outfit.push(dressWatch);

  // 30% chance to add other accessories (belt)
  if (Math.random() > 0.7) {
    const otherAccessories = accessories.filter(acc => 
      acc.type !== "Xiaomi Smart Band 8" && acc.type !== "Ibso Tank Leather Watch"
    );
    if (otherAccessories.length > 0) {
      outfit.push(getRandomItem(otherAccessories));
    }
  }

  return outfit;
};

// Predefined curated outfits with themes
const curatedOutfits = [
  {
    theme: "Business Casual",
    outfit: [
      items.find((i) => i.type === "Black Slim Fit Shirt"),
      items.find((i) => i.type === "Loose Fit Tailored Trousers"),
      items.find((i) => i.type === "Nike Blazer Mid ’77 – Vintage"),
      items.find((i) => i.type === "Black Leather Belt"),
      items.find((i) => i.type === "Ibso Tank Leather Watch"),
    ]
  },
  {
    theme: "Casual Street Style",
    outfit: [
      items.find((i) => i.type === "Light Blue Slim Fit Shirt"),
      items.find((i) => i.type === "Light Gray Straight Loose Low Jeans"),
      items.find((i) => i.type === "Adidas Samba Classic"),
      items.find((i) => i.type === "Leather Jacket"),
    ]
  },
  {
    theme: "Minimalist Look",
    outfit: [
      items.find((i) => i.type === "Black Slim Fit T-Shirt"),
      items.find((i) => i.type === "Black Straight Loose Low Jeans"),
      items.find((i) => i.type === "Nike Air Jordan 1 High OG"),
      items.find((i) => i.type === "Black Leather Belt"),
    ]
  },
  {
    theme: "Smart Casual",
    outfit: [
      items.find((i) => i.type === "Light Beige Striped Slim Fit Shirt"),
      items.find((i) => i.type === "Loose Fit Beige Courduroy Trousers"),
      items.find((i) => i.type === "Adidas Samba Classic"),
      items.find((i) => i.type === "Ibso Tank Leather Watch"),
    ]
  },
  {
    theme: "Edgy Urban",
    outfit: [
      items.find((i) => i.type === "Black Slim Fit Tank Top"),
      items.find((i) => i.type === "Black Straight Loose Low Jeans"),
      items.find((i) => i.type === "Nike Air Jordan 1 High OG"),
      items.find((i) => i.type === "Varsity Jacket"),
      items.find((i) => i.type === "Black Leather Belt"),
    ]
  },
  {
    theme: "Relaxed Weekend",
    outfit: [
      items.find((i) => i.type === "Long Sleeve Black Slim Fit T-Shirt"),
      items.find((i) => i.type === "Light Blue Straight Loose Low Jeans"),
      items.find((i) => i.type === "Nike Blazer Mid ’77 – Vintage"),
      items.find((i) => i.type === "Bomber Jacket"),
    ]
  },
  {
    theme: "Athletic Casual",
    outfit: [
      items.find((i) => i.type === "Black Compression Shirt"),
      items.find((i) => i.type === "Black Loose Sweatpants"),
      items.find((i) => i.type === "Adidas Samba Classic"),
      items.find((i) => i.type === "Xiaomi Smart Band 8"),
    ]
  },
  {
    theme: "Layered Look",
    outfit: [
      items.find((i) => i.type === "Navy Slim Fit T-Shirt"),
      items.find((i) => i.type === " Blue Straight Loose Low Jeans"),
      items.find((i) => i.type === "Nike Blazer Mid ’77 – Vintage"),
      items.find((i) => i.type === "Suede Jacket"),
      items.find((i) => i.type === "Ibso Tank Leather Watch"),
    ]
  }
];

export default function OutfitsPage() {
  const [displayedOutfits, setDisplayedOutfits] = useState(curatedOutfits);

  const generateNewOutfits = (count = 4) => {
    const newOutfits = [];
    
    // Generate 1 sports outfit and 3 casual outfits
    newOutfits.push({
      theme: "Sports Generated",
      outfit: generateSportsOutfit()
    });
    
    for (let i = 0; i < count - 1; i++) {
      newOutfits.push({
        theme: "Casual Generated", 
        outfit: generateCasualOutfit()
      });
    }
    
    setDisplayedOutfits(prev => [...newOutfits, ...prev]);
  };

  const resetToCurated = () => {
    setDisplayedOutfits(curatedOutfits);
  };

  const showOnlyGenerated = () => {
    const generatedOutfits = [];
    
    // Generate 2 sports outfits and 6 casual outfits for variety
    for (let i = 0; i < 2; i++) {
      generatedOutfits.push({
        theme: "Sports Generated",
        outfit: generateSportsOutfit()
      });
    }
    
    for (let i = 0; i < 6; i++) {
      generatedOutfits.push({
        theme: "Casual Generated",
        outfit: generateCasualOutfit()
      });
    }
    
    setDisplayedOutfits(generatedOutfits);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-800">Styled Outfits</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Curated looks combining your wardrobe pieces. Mix and match to create your perfect style.
        </p>
      </div>

      {/* Control Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={resetToCurated}
          className="px-6 py-3 bg-black hover:bg-gray-600 text-white rounded-lg  transition-colors font-medium cursor-pointer"
        >
          Show Curated Outfits
        </button>
        <button
          onClick={showOnlyGenerated}
          className="px-6 py-3 bg-gray-600 hover:bg-gray-400 text-white rounded-lg  transition-colors font-medium cursor-pointer"
        >
          Generate New Outfits
        </button>
        <button
          onClick={() => generateNewOutfits(4)}
          className="px-6 py-3 bg-gray-400 hover:bg-gray-200 text-gray-800 border border-gray-300 rounded-lg  transition-colors font-medium cursor-pointer"
        >
          Add More Random Outfits
        </button>
      </div>

      {/* Outfits Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {displayedOutfits.map((outfitData, idx) => (
          <div key={idx} className="space-y-3">
            <h3 className="text-center font-semibold text-gray-700 text-sm uppercase tracking-wide">
              {outfitData.theme}
            </h3>
            <OutfitCard outfit={outfitData.outfit.filter(Boolean)} />
          </div>
        ))}
      </div>

      {/* Style Tips */}
      <div className="bg-gray-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Style Tips</h2>
        <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Color Coordination</h3>
            <p>Stick to 2-3 main colors per outfit for a cohesive look</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Fit Balance</h3>
            <p>Mix fitted and loose pieces to create visual interest</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Occasion Matching</h3>
            <p>Consider where you're going and dress appropriately</p>
          </div>
        </div>
      </div>
    </div>
  );
}