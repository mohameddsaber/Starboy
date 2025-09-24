import { motion } from "framer-motion";

function Book({ title, author, description, coverImage, date, index = 0 }) {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2 + index * 0.3, // stagger by part + offset if multiple books
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="flex items-center justify-center flex-col max-w-full px-4">
      {/* Title + author + date */}
      <motion.div
        className="bg-white shadow-md p-6 w-full max-w-[600px] sm:max-w-[500px] md:max-w-[600px] flex justify-center items-center flex-col py-9"
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0}
      >
        <p className="mb-2 tracking-[2px] font-[Karla] text-lg sm:text-xl font-light text-center">
          {title}: <span>{author}</span>
        </p>
        <p className="mb-2 tracking-[2px] font-[Karla] text-xs sm:text-sm font-light">
          {date}
        </p>
      </motion.div>

      {/* Book cover */}
      <motion.img
        src={`/book-covers/${coverImage}`}
        loading="lazy"
        alt="book cover"
        className="w-full max-w-[600px] sm:max-w-[500px] md:max-w-[600px] h-auto"
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={1}
      />

      {/* Description */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={2}
        className="w-full max-w-[600px] sm:max-w-[500px] md:max-w-[600px]"
      >
        <p className="font-sans tracking-[1px] font-light leading-loose text-gray-700 text-xs sm:text-sm bg-white shadow-md p-4 sm:p-6">
          {description}
        </p>
      </motion.div>
    </div>
  );
}

export default Book;