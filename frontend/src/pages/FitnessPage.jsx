import WorkoutCard from "../components/WorkoutCard.jsx";
import { motion } from "framer-motion";

function FitnessPage() {
  const workouts = {
    Upper: [
      { name: "Bench Press", info: "2 sets 4-8 reps" },
      { name: "Plate Loaded Lat Pulldown", info: "2 sets 4-10 reps" },
      { name: "Incline DB Bench Press", info: "2 sets 4-14 reps" },
      { name: "Wide Grip Row", info: "2 sets 4-10 reps" },
      { name: "Cable Lateral Raise", info: "2 sets 5-12 reps" },
      { name: "Cable Curl", info: "2 sets 5-12 reps" },
      { name: "Tricep Extension", info: "2 sets 5-12 reps" },
    ],
    Lower: [
      { name: "Deadlift", info: "2 sets 1-6 reps" },
      { name: "Squats", info: "2 sets 5-10 reps" },
      { name: "Leg Curls", info: "2 sets 5-12 reps" },
      { name: "Leg Extensions", info: "2 sets 5-12 reps" },
      { name: "Cable Lateral Raise", info: "2 sets 5-12 reps" },
      { name: "Cable Curl", info: "2 sets 5-12 reps" },
      { name: "Tricep Extension", info: "2 sets 5-12 reps" },
    ],
    Upper2: [
      { name: "Bench Press", info: "2 sets 4-8 reps" },
      { name: "Plate Loaded Lat Pulldown", info: "2 sets 4-10 reps" },
      { name: "Incline DB Bench Press", info: "2 sets 4-14 reps" },
      { name: "Wide Grip Row", info: "2 sets 4-10 reps" },
      { name: "Cable Lateral Raise", info: "2 sets 5-12 reps" },
      { name: "Cable Curl", info: "2 sets 5-12 reps" },
      { name: "Tricep Extension", info: "2 sets 5-12 reps" },
    ]
  };

  // General animation for fade + slide
  const sectionAnim = {
    hidden: { opacity: 0, y: 20 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // stagger delay between sections
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="p-6 flex justify-center gap-6 flex-col items-center">
      <motion.h1
        className="text-2xl sm:text-3xl md:text-4xl font-[Karla] text-gray-700 mb-6"
        variants={sectionAnim}
        initial="hidden"
        animate="show"
      >
        Workout Routine
      </motion.h1>

      {Object.entries(workouts).map(([section, exercises], i) => (
        <motion.div
          key={section}
          variants={sectionAnim}
          initial="hidden"
          animate="show"
          custom={i + 1}
          className="w-full"
        >
          <WorkoutCard section={section} exercises={exercises} />
        </motion.div>
      ))}

      <motion.h2
        className="text-sm sm:text-md md:text-lg font-[Karla] leading-[2.5] tracking-[1px] text-gray-600 mt-6 w-full max-w-2xl text-center bg-white shadow-md overflow-hidden py-4 px-6 rounded mx-auto"
        variants={sectionAnim}
        initial="hidden"
        animate="show"
        custom={4}
      >
        *Remember to progressively overload your muscles by increasing weights or reps over time...
      </motion.h2>

      <motion.h2
        className="text-sm sm:text-md md:text-lg font-[Karla] leading-[2.5] tracking-[1px] text-gray-600 mt-6 w-full max-w-2xl text-center bg-white shadow-md overflow-hidden py-4 px-6 rounded mx-auto"
        variants={sectionAnim}
        initial="hidden"
        animate="show"
        custom={5}
      >
        *If you're new to fitness, start with light weights. Focus on mastering the exercises...
      </motion.h2>

      <motion.h1
        className="text-2xl sm:text-3xl md:text-4xl font-[Karla] leading-[2.5] tracking-[1px] text-gray-600 mb-6 mt-12"
        variants={sectionAnim}
        initial="hidden"
        animate="show"
        custom={6}
      >
        Nutrition
      </motion.h1>

      <motion.h2
        className="text-sm sm:text-md md:text-lg font-[Karla] leading-[2.5] tracking-[1px] text-gray-600 mt-6 w-full max-w-2xl text-center bg-white shadow-md overflow-hidden py-4 px-6 rounded mx-auto"
        variants={sectionAnim}
        initial="hidden"
        animate="show"
        custom={7}
      >
        Aim for 1.4–1.8g of protein per kg of body weight daily...
      </motion.h2>

      <motion.h2
        className="text-sm sm:text-md md:text-lg font-[Karla] leading-[2.5] tracking-[1px] text-gray-600 mt-6 w-full max-w-2xl text-center bg-white shadow-md overflow-hidden py-4 px-6 rounded mx-auto"
        variants={sectionAnim}
        initial="hidden"
        animate="show"
        custom={8}
      >
        Stay hydrated by drinking a minimum of 2-3 liters of water throughout the day...
      </motion.h2>

      <motion.h2
        className="text-sm sm:text-md md:text-lg font-[Karla] leading-[2.5] tracking-[1px] font-bold text-gray-600 mt-6 w-full max-w-2xl text-center bg-white shadow-md overflow-hidden py-4 px-6 rounded mx-auto"
        variants={sectionAnim}
        initial="hidden"
        animate="show"
        custom={9}
      >
        Sample Meal Plan: <br />
        Breakfast: Omelette with spinach, cottage cheese and bread... <br />
        Pre-Workout: Sweet potato and fruits... <br />
        Lunch: Grilled chicken breast, steamed vegetables... <br />
        Dinner: Cottage cheese salad...
      </motion.h2>
    </div>
  );
}

export default FitnessPage;
