import WorkoutCard from "../components/WorkoutCard.jsx";

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
  

  return (
    
    <div className="p-6 flex justify-center gap-6 flex-col items-center ">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-[Karla] text-gray-700 mb-6">
        Workout Routine
      </h1>
      {Object.entries(workouts).map(([section, exercises]) => (
        <WorkoutCard 
          key={section}
          section={section}
          exercises={exercises}
        />
      ))}
      <h2 className="text-sm sm:text-md md:text-lg font-[Karla] leading-[2.5] tracking-[1px] text-gray-600 mt-6 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl text-center bg-white shadow-md overflow-hidden py-4 px-6 rounded mx-auto">
        *Remember to progressively overload your muscles by increasing weights or reps over time.
         Consistency and proper nutrition and sleep
         are key to seeing results. Always prioritize form to prevent injuries.
      </h2>
      <h2 className="text-sm sm:text-md md:text-lg font-[Karla] leading-[2.5] tracking-[1px] text-gray-600 mt-6 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl text-center bg-white shadow-md overflow-hidden py-4 px-6 rounded mx-auto">
        *If you're new to fitness, start with light weights.
          Focus on mastering the exercises with proper form.
         Gradually increase the weight and reps as you progress.
      </h2>

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-[Karla] leading-[2.5] tracking-[1px] text-gray-600 mb-6 mt-12">
        Nutrition
      </h1>
      <h2 className="text-sm sm:text-md md:text-lg font-[Karla] leading-[2.5] tracking-[1px] text-gray-600 mt-6 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl text-center bg-white shadow-md overflow-hidden py-4 px-6 rounded mx-auto">
        Aim for a 1.4-1.8g of protein per kg of body weight daily to support muscle growth and repair.
          <br></br>Aim for a min 0.6-1.0g of healthy fats per kg of body weight for energy and overall health.<br></br>
          <br></br>Incorporate carbohydrates based on your fitness goals (cutting, bulking, etc.).
      </h2>
      <h2 className="text-sm sm:text-md md:text-lg font-[Karla] leading-[2.5] tracking-[1px] text-gray-600 mt-6 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl text-center bg-white shadow-md overflow-hidden py-4 px-6 rounded mx-auto">
        Stay hydrated by drinking a min of 2-3 liters of water throughout the day.
         Limit processed foods and sugary drinks.
      </h2>
      <h2 className="text-sm sm:text-md md:text-lg font-[Karla] leading-[2.5] tracking-[1px] font-bold text-gray-600 mt-6 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl text-center bg-white shadow-md overflow-hidden py-4 px-6 rounded mx-auto">
        Sample Meal Plan:<br></br>
        Breakfast: omelette with spinach,cottage cheese and bread if you like.<br></br>
        Pre-Workout: Sweet potato and plenty of fruits for the pump.<br></br>
        Lunch: Grilled chicken breast, steamed vegetables, your favorite carb.<br></br>
        Dinner: Cottage cheese salad.<br></br>
        *Adjust portion sizes based on your caloric needs and goals.<br></br>
        *you can eat more meals if you want to gain weight.<br></br>
        *Feel free to swap out protein sources (e.g., fish, tofu) and vegetables based on your preferences.

      </h2>
   

    </div>
  );
}

export default FitnessPage;