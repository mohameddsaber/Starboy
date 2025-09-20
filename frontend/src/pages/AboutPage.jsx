import { motion } from "framer-motion";
import OutfitCard from "../components/OutfitCard.jsx";

function AboutPage() {
  const gallery = [
    {
      name: "",
      occasion: "",
      season: "",
      image: "../public/gallary/myGallery1.jpg",
      description:
        "A clean, professional look perfect for important meetings and presentations.",
      items: [
        { type: "Shirt", brand: "H&M" ,link:""},
        { type: "Jeans", brand: "H&M" },
        { type: "Belt", brand: "Defacto" },
        { type: "Shoes", description: "Nike Air Jordan 1 retro" },
        { type: "Watch", brand: "Casio" },
      ],
      tags: ["Professional", "Neutral", "Classic"],
      
    },
    {
      name: "",
      occasion: "",
      season: "",
      image: "../public/gallary/myGallery2.jpeg",
      description:
        "A casual look perfect for weekend adventures and casual outings.",
      items: [
        { type: "Shirt", brand: "American Eagle" ,link:""},
        { type: "Tanktop", brand: "H&M" },
        { type: "Jeans", brand: "H&M" },
        { type: "Belt", brand: "Defacto" },
        { type: "Shoes", description: "Nike Air Jordan 1 retro" },
        { type: "Watch", brand: "Casio" },
      ],
      tags: ["Casual", "Neutral", "Classic"],
  
},
    {
      name: "",
      occasion: "",
      season: "",
      image: "../public/gallary/myGallery3.jpeg",
      description:
        "A casual look perfect for weekend adventures and casual outings.",
      items: [
        { type: "Shirt", brand: "American Eagle" ,link:""},
        { type: "Tanktop", brand: "H&M" },
        { type: "Jeans", brand: "H&M" },
        { type: "Belt", brand: "Defacto" },
        { type: "Shoes", description: "Nike Air Jordan 1 retro" },
        { type: "Watch", brand: "Casio" },
      ],
      tags: ["Casual", "Neutral", "Classic"],
  
    },
    {
      name: "",
      occasion: "",
      season: "",
      image: "../public/gallary/myGallery4.jpeg",
      description:
        "A casual look perfect for weekend adventures and casual outings.",
      items: [
        { type: "Shirt", brand: "American Eagle" ,link:""},
        { type: "Tanktop", brand: "H&M" },
        { type: "Jeans", brand: "H&M" },
        { type: "Belt", brand: "Defacto" },
        { type: "Shoes", description: "Nike Air Jordan 1 retro" },
        { type: "Watch", brand: "Casio" },
      ],
      tags: ["Casual", "Neutral", "Classic"],
  
    },
    {
      name: "",
      occasion: "",
      season: "",
      image: "../public/gallary/myGallery5.jpeg",
      description:
        "A clean, professional look perfect for important meetings and presentations.",
      items: [
        { type: "Shirt", brand: "H&M" ,link:""},
        { type: "Trousers", brand: "H&M" },
        { type: "Shoes", description: "Nike Air Jordan 1 retro" },
        { type: "Watch", brand: "Casio" },
      ],
      tags: ["Professional", "Neutral", "Classic"],
  
    },
    {
      name: "",
      occasion: "",
      season: "",
      image: "../public/gallary/myGallery6.jpg",
      description:
        "A rugged, outdoor-inspired look perfect for hiking and adventurous activities.",
      items: [
        { type: "Shirt", brand: "H&M" ,},
        { type: "Shorts", brand: "Lc Waikiki" },
        { type: "Shoes", description: "Sandals" },
        { type: "Watch", brand: "Casio" },
      ],
      tags: ["Beachwear", "Comfortable", "Relaxed"],
  
    },
    {
      name: "",
      occasion: "",
      season: "",
      image: "../public/gallary/myGallery7.jpg",
      description:
        "A sleek, modern look perfect for nightlife and evening events.",
      items: [
        { type: "Tanktop", brand: "H&M" ,link:""},
        { type: "SweatPants", brand: "Lc Waikiki" },
        { type: "Shoes", description: "Nike Air Jordan 1 retro" },
        { type: "Watch", brand: "Casio" },
      ],
      tags: ["Gymwear", "Workout", "Athletic"],
  
    },

  ];
  
    return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
      {/* Hero Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Profile Pic */}
<div className="w-80 aspect-square rounded-full overflow-hidden shadow-lg">
  <img
    src="../public/gallary/myGallery1.jpg"
    alt="Mohamed Saber"
    className="w-full h-full object-cover object-center"
  />
</div>

        {/* Intro */}
        <div>
        <h1 className="text-3xl font-bold text-gray-800">Hi, I’m Mohamed Saber 👋</h1>
        <p className="text-gray-600 mt-3 text-lg">
            I refuse to settle for average. I build, I train, I grow — every single day. 
            Weakness is the enemy, discipline is the weapon.
        </p>
        </div>
      </motion.div>

      {/* About Me Section */}
        <motion.div
        className="bg-white shadow-md rounded-2xl p-6"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        >
        <h2 className="text-2xl font-bold mb-4 text-gray-800">My Philosophy</h2>
        <p className="text-gray-600 leading-relaxed mb-3">
            My story isn’t about comfort — it’s about the grind. I chose a path where excuses 
            don’t exist. Whether it’s hours of code, endless sets in the gym, or pushing my mind 
            past its limits, I don’t quit.
        </p>
        <p className="text-gray-600 leading-relaxed">
            Discipline beats motivation. Every rep, every line of code, every setback — it all 
            builds the foundation for who I’m becoming. Growth only happens when you step into 
            discomfort.
        </p>
        </motion.div>

      {/* Gallery Section */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {gallery.map((outfit, index) => (
        <OutfitCard key={index} outfit={outfit} index={index} />
        ))}
      </motion.div>

      {/* Skills / What I Do */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="bg-white shadow-md rounded-2xl p-6 text-center">
          <h3 className="font-bold text-lg">💻 Software Engineering</h3>
          <p className="text-gray-600 mt-2"><strong>Building apps, websites.</strong><br /> The mental battleground — where I sharpen my logic and problem-solving daily.</p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-6 text-center">
          <h3 className="font-bold text-lg">🎨 Fashion & Lifestyle</h3>
          <p className="text-gray-600 mt-2">The art of presence — walking with confidence and turning vision into reality.</p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-6 text-center">
          <h3 className="font-bold text-lg">🏋️‍♂️ Fitness & Modeling</h3>
          <p className="text-gray-600 mt-2">The physical battleground — discipline carved into muscle, proof that effort leaves marks.</p>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h2 className="text-2xl font-bold text-gray-800">Let’s Connect</h2>
        <p className="text-gray-600 mt-2">Find me on social media or check out my work.</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://instagram.com/xmohamedsaber" className="text-blue-500 hover:underline" target="_blank">Instagram</a>
          <a href="https://github.com/mohameddsaber" className="text-blue-500 hover:underline" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/mohamedsaberr" className="text-blue-500 hover:underline" target="_blank">LinkedIn</a>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutPage;
