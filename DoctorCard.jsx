import React from 'react';

const DoctorCard = ({ doctor }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-[#121212] p-5 shadow-sm transition-all duration-350 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 border border-gray-100 dark:border-zinc-800">
      
      {/* Zoom effect on hover container */}
      <div className="overflow-hidden rounded-xl">
        <img 
          src={doctor.image} 
          alt={doctor.name} 
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Specialty Badge */}
      <span className="mt-4 inline-block rounded-md bg-blue-50 dark:bg-blue-950/40 px-2.5 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400">
        {doctor.specialty}
      </span>

      {/* Dynamic Header Color Transition */}
      <h3 className="mt-3 text-xl font-bold text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
        {doctor.name}
      </h3>
      
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
        {doctor.description}
      </p>

      {/* Interactive Micro-animated Button */}
      <button className="mt-5 w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 active:scale-95">
        <span>View Details</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={2} 
          stroke="currentColor" 
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </button>
    </div>
  );
};

export default DoctorCard;