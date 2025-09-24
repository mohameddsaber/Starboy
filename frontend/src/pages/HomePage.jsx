import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="min-h-screen bg-[#f4f2ef]">
      {/* Hero Section */}
      <motion.div
        className="flex flex-col items-center justify-center pt-12 pb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Logo */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img src="/starboyLogo.png" alt="Starboy Logo" className="w-100" />
        </motion.div>
        

        {/* Main Tagline */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl font-[Karla] text-gray-800 text-center tracking-[2px] uppercase font-light mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Welcome to the Starboy Universe
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-sm sm:text-base text-gray-600 text-center max-w-lg mx-auto px-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Where discipline meets style, and every day is a step toward greatness. 
          Explore the intersection of fitness, fashion, and personal growth.
        </motion.p>
      </motion.div>

      {/* Feature Cards */}
      <motion.div
        className="max-w-6xl mx-auto px-6 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {/* About Card */}
          <Link to="/about">
            <motion.div
              className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 cursor-pointer group"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                👋
              </div>
              <h3 className="font-[Karla] text-lg font-light tracking-[1px] text-gray-800 mb-2">
                ABOUT
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Discover the philosophy behind the grind and the journey of becoming unstoppable.
              </p>
            </motion.div>
          </Link>

          {/* Fitness Card */}
          <Link to="/fitness">
            <motion.div
              className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 cursor-pointer group"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                🏋️‍♂️
              </div>
              <h3 className="font-[Karla] text-lg font-light tracking-[1px] text-gray-800 mb-2">
                FITNESS
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Complete workout routines and nutrition guidance for building strength and discipline.
              </p>
            </motion.div>
          </Link>

          {/* Fashion Card */}
          <Link to="/outfits">
            <motion.div
              className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 cursor-pointer group"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                🎨
              </div>
              <h3 className="font-[Karla] text-lg font-light tracking-[1px] text-gray-800 mb-2">
                STYLE
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Curated outfits and wardrobe essentials that reflect confidence and personality.
              </p>
            </motion.div>
          </Link>

          {/* Books Card */}
          <Link to="/books">
            <motion.div
              className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 cursor-pointer group"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                📚
              </div>
              <h3 className="font-[Karla] text-lg font-light tracking-[1px] text-gray-800 mb-2">
                READS
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Book recommendations and insights that fuel continuous learning and growth.
              </p>
            </motion.div>
          </Link>

          <Link to="/wardrobe">
            <motion.div
              className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 cursor-pointer group"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                👕
              </div>
              <h3 className="font-[Karla] text-lg font-light tracking-[1px] text-gray-800 mb-2">
                WARDROBE
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Curated clothing pieces and styling tips for a versatile starboy wardrobe.
              </p>
            </motion.div>
          </Link>

        </div>
      </motion.div>

      

      {/* Quote Section */}
      <motion.div
        className="max-w-4xl mx-auto px-6 py-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <div className="bg-white shadow-lg rounded-2xl p-8 md:p-12">
          <blockquote className="text-lg md:text-xl font-light text-gray-700 leading-relaxed mb-4 font-[Karla] tracking-[1px]">
            "Discipline beats motivation. Every rep, every line of code, every setback — it all 
            builds the foundation for who I'm becoming. Growth only happens when you step into discomfort."
          </blockquote>
          <div className="w-16 h-0.5 bg-gray-300 mx-auto mb-4"></div>
          <cite className="text-sm text-gray-500 font-light tracking-[1px] uppercase">
            Mohamed Saber
          </cite>
        </div>
      </motion.div>

      {/* Latest Updates Preview */}
      {/* <motion.div
        className="max-w-6xl mx-auto px-6 py-8 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <h2 className="text-2xl font-[Karla] font-light tracking-[2px] text-gray-800 text-center mb-8 uppercase">
          Latest Updates
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <span className="text-gray-500 text-sm">Latest Outfit</span>
            </div>
            <div className="p-4">
              <h3 className="font-[Karla] text-sm font-light tracking-[1px] text-gray-800 mb-2">
                NEW LOOK ADDED
              </h3>
              <p className="text-xs text-gray-600">
                Fresh styling inspiration for your wardrobe
              </p>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
              <span className="text-gray-600 text-sm">Workout Update</span>
            </div>
            <div className="p-4">
              <h3 className="font-[Karla] text-sm font-light tracking-[1px] text-gray-800 mb-2">
                TRAINING EVOLVED
              </h3>
              <p className="text-xs text-gray-600">
                New exercises and nutrition tips added
              </p>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
              <span className="text-gray-600 text-sm">Book Review</span>
            </div>
            <div className="p-4">
              <h3 className="font-[Karla] text-sm font-light tracking-[1px] text-gray-800 mb-2">
                FRESH INSIGHTS
              </h3>
              <p className="text-xs text-gray-600">
                Latest book recommendations and takeaways
              </p>
            </div>
          </div>
        </div>
      </motion.div> */}

      {/* Social Links */}
      <motion.div
        className="text-center pb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        <h3 className="font-[Karla] text-lg font-light tracking-[2px] text-gray-700 mb-4 uppercase">
          Connect
        </h3>
        <div className="flex justify-center gap-6">
          <a 
            href="https://instagram.com/xmohamedsaber" 
            className="text-gray-600 hover:text-gray-800 transition-colors duration-300 text-sm tracking-[1px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            INSTAGRAM
          </a>
          <a 
            href="https://github.com/mohameddsaber" 
            className="text-gray-600 hover:text-gray-800 transition-colors duration-300 text-sm tracking-[1px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
          <a 
            href="https://www.linkedin.com/in/xmohamedsaber" 
            className="text-gray-600 hover:text-gray-800 transition-colors duration-300 text-sm tracking-[1px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default HomePage;
