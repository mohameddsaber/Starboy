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
    <div className="flex items-center justify-center flex-col">
      {/* Title + author + date */}
      <motion.div
        className="bg-white shadow-md p-6 w-150 flex justify-center items-center flex-col py-9"
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0}
      >
        <p className="mb-2 tracking-[2px] font-[Karla] text-xl font-light">
          {title}: <span>{author}</span>
        </p>
        <p className="mb-2 tracking-[2px] font-[Karla] text-sm font-light">
          {date}
        </p>
      </motion.div>

      {/* Book cover */}
      <motion.img
        src={`/book-covers/${coverImage}`}
        loading="lazy"
        alt="book cover"
        className="w-150"
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
      >
        <p className="w-150 font-sans tracking-[1px] font-light leading-loose text-gray-700 text-[12px] bg-white shadow-md p-6">
          {description}
        </p>
      </motion.div>
    </div>
  );
}

export default Book;
