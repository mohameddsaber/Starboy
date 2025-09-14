import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function WorkoutCard({ section, exercises }) {
  const [openSection, setOpenSection] = useState(null);
  const [openExercise, setOpenExercise] = useState(null);

  return (
    <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-white shadow-md overflow-hidden mx-auto">
      {/* Section Header */}
      <div
        className="p-4 sm:p-6 py-6 sm:py-8 text-center cursor-pointer border-b border-gray-100"
        onClick={() =>
          setOpenSection(openSection === section ? null : section)
        }
      >
        <h2 className="tracking-[1px] sm:tracking-[2px] font-[Karla] text-base sm:text-lg md:text-xl font-light uppercase text-gray-800 mb-1">
          {section}
        </h2>
        <p className="tracking-[0.5px] sm:tracking-[1px] font-sans text-xs sm:text-xs md:text-sm font-light text-gray-500 uppercase">
          Training Session
        </p>
        <FaChevronDown
          className={`transform transition-transform duration-300 mx-auto mt-2 sm:mt-3 text-gray-400 ${
            openSection === section ? "rotate-180" : ""
          }`}
          size={12}
        />
      </div>

      {/* Exercises List */}
      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          openSection === section ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {exercises.map((exercise, idx) => (
          <div 
            key={idx} 
            className={`border-b border-gray-50 last:border-b-0 transform transition-all duration-500 ease-out ${
              openSection === section 
                ? `translate-y-0 opacity-100`
                : `translate-y-[-10px] opacity-0`
            }`}
            style={{
              transitionDelay: openSection === section ? `${idx * 50}ms` : '0ms'
            }}
          >
            <div
              className="p-3 sm:p-4 cursor-pointer hover:bg-gray-25 transition-all duration-300 hover:translate-x-1"
              onClick={() =>
                setOpenExercise(
                  openExercise === exercise.name ? null : exercise.name
                )
              }
            >
              <div className="flex justify-between items-center">
                <h3 className="tracking-[0.5px] sm:tracking-[1px] font-sans font-light text-gray-700 text-xs sm:text-sm md:text-base pr-2">
                  {exercise.name}
                </h3>
                <FaChevronDown
                  className={`transform transition-transform duration-300 text-gray-400 flex-shrink-0 ${
                    openExercise === exercise.name ? "rotate-180" : ""
                  }`}
                  size={10}
                />
              </div>
            </div>

            {/* Exercise Info */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out bg-gray-25 ${
                openExercise === exercise.name
                  ? "max-h-40 sm:max-h-48 opacity-100 translate-y-0"
                  : "max-h-0 opacity-0 translate-y-[-5px]"
              }`}
            >
              <div className="px-4 sm:px-6 py-3 sm:py-4">
                <p className="font-sans tracking-[0.5px] sm:tracking-[1px] font-light leading-relaxed text-gray-600 text-xs sm:text-xs md:text-sm">
                  {exercise.info}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkoutCard;