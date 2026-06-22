import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between py-12 px-6 max-w-7xl mx-auto gap-8">
      {/* Content Side */}
      <div className="flex-1 space-y-5">
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Find and Book Your <span className="text-blue-600">Ideal Doctor</span> Instantly
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-base max-w-lg">
          Take control of your healthcare timeline. Search validated specialists, verify live booking windows, and submit reservations instantly.
        </p>
      </div>

      {/* Animated Visual/Graphic Side */}
      <div className="flex-1 relative flex justify-center">
        {/* Background Aura Pulse Grid */}
        <div className="absolute -inset-4 rounded-full bg-blue-500/10 dark:bg-blue-500/5 blur-3xl animate-pulse"></div>
        
        {/* Floating Image Wrapper */}
        <div className="relative animate-floating">
          <img 
            src="https://via.placeholder.com/400x400" 
            alt="Medical Professional" 
            className="w-full max-w-md mx-auto drop-shadow-2xl rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;